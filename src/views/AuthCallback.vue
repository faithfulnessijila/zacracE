<template>
  <div class="auth-callback">
    <div class="spinner" v-if="!welcomeMessage"></div>
    <p v-if="welcomeMessage" class="welcome-text">{{ welcomeMessage }}</p>
    <p v-else>Signing you in...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeMessage: "",
    };
  },

  created() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userStr = params.get("user");
    const message = params.get("message");

    if (token) {
      localStorage.setItem("token", token);

      let user = null;
      if (userStr) {
        try {
          user = JSON.parse(decodeURIComponent(userStr));
          localStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
          console.warn("Failed to parse user info:", err);
        }
      }

      // Show actual user's name
      this.welcomeMessage = user?.name
        ? `Welcome, ${user.name}!`
        : message || "Welcome!";

      setTimeout(() => this.$router.push("/"), 2000);
    } else {
      setTimeout(() => this.$router.push("/sign-in"), 1000);
    }
  },
};
</script>

<style scoped>
.auth-callback {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: sans-serif;
  color: #4d148c;
  text-align: center;
}

.welcome-text {
  font-size: 2.5rem; /* Bigger and clearer */
  font-weight: bold;
  margin-top: 15px;
  color: #4d148c;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #4d148c;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
