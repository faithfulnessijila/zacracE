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
    };
  },
  mounted() {
    this.handleGoogleCallback();
  },
  methods: {
    handleGoogleCallback() {
      // Get token from URL query parameter
      const token = this.$route.query.token;

      if (token) {
        try {
          // Decode JWT payload
          const payload = JSON.parse(atob(token.split(".")[1]));

          // Save token and user info in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(payload));

          this.userName = payload.name || payload.email;

          // Clean URL to remove token
          this.$router.replace({ path: "/auth-callback", query: {} });

          // Redirect to user landing page after short delay
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        } catch (e) {
          console.error("Failed to decode token:", e);
          this.$router.push("/sign-in");
        }
      } else {
        // No token found, redirect to sign-in
        this.$router.push("/sign-in");
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
