<template>
  <div class="auth-callback-page">
    <div class="welcome-container">
      <img src="/public/d.png" alt="Logo" class="logo-icon-big" />
      <h1 v-if="userName">Welcome, {{ userName }}! 🎉</h1>
      <p class="welcome-text" v-if="userName">Redirecting you to your dashboard...</p>
      <p v-else class="welcome-text">Processing login...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      redirectDelay: 1500, // configurable redirect delay
    };
  },
  mounted() {
    this.processAuthCallback();
  },
  methods: {
    processAuthCallback() {
      const token = this.$route.query.token || localStorage.getItem("token");

      if (!token) {
        // No token found, redirect to sign-in immediately
        this.$router.replace("/sign-in");
        return;
      }

      try {
        // Decode token payload
        const payload = JSON.parse(atob(token.split(".")[1]));

        // Save token & user info if not already saved
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(payload));

        // Format name or fallback to email prefix or generic
        const formatName = (str) =>
          str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        if (payload.name && payload.name.trim() !== "") {
          this.userName = formatName(payload.name);
        } else if (payload.email) {
          this.userName = formatName(payload.email.split("@")[0]);
        } else {
          this.userName = "User";
        }

        // Clean query parameters from URL
        this.$router.replace({ path: "/auth-callback", query: {} });

        // Redirect to dashboard/home after a short delay
        setTimeout(() => {
          this.$router.push("/");
        }, this.redirectDelay);

      } catch (error) {
        console.error("Token decoding failed:", error);
        // Clear potentially invalid token
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // Redirect to login
        this.$router.replace("/sign-in");
      }
    },
  },
};
</script>

<style scoped>
.auth-callback-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #4d148c, #ff6600);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.logo-icon-big {
  height: 60px;
  width: 60px;
  margin-bottom: 20px;
}

.welcome-text {
  font-size: 18px;
  margin-top: 10px;
  font-weight: 600;
}

.welcome-container {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
