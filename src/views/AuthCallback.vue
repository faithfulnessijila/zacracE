<template>
  <div class="landing-page">
    <div class="welcome-container">
      <img src="/public/d.png" alt="Logo" class="logo-icon-big" />
      <h1>Welcome, {{ userName }}! 🎉</h1>
      <p class="welcome-text">We’re glad to have you back!</p>
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
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        this.userName = parsedUser.name || parsedUser.email;
      } catch {
        this.userName = user;
      }

      // Redirect after 2.5 seconds
      setTimeout(() => {
        this.$router.push("/");
      }, 2500);
    } else {
      this.$router.push("/sign-in");
    }
  },
};
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #4d148c, #ff6600);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.welcome-container {
  animation: fadeIn 1.2s ease-in-out;
}

.logo-icon-big {
  height: 60px;
  width: 60px;
  margin-bottom: 20px;
}

.welcome-text {
  font-size: 18px;
  margin-top: 10px;
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
