<template>
    <div class="auth-callback">
      <div class="spinner" v-if="!welcomeMessage"></div>
      <p v-if="welcomeMessage">{{ welcomeMessage }}</p>
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
        // Save token
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
  
        // Show welcome message if user exists, otherwise fallback to message or default
        this.welcomeMessage = user?.name
          ? `Welcome, ${user.name}!`
          : message || "Welcome!";
  
        // Redirect to homepage after 2 seconds
        setTimeout(() => this.$router.push("/"), 2000);
      } else {
        // No token → redirect to sign-in after 1 second
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
  