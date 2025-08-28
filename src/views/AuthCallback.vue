<template>
  <div class="landing-page">
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="/public/d.png" alt="Logo" class="logo-icon" />
        <h3 class="logo-text">Zacrac <span>Learning</span></h3>
      </div>
      <button class="logout-btn" @click="logout">Logout</button>
    </nav>

    <div class="welcome-section">
      <h1>Welcome, {{ userName }}!</h1>
      <p>Glad to have you back 🎉</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        this.userName = JSON.parse(user).name || JSON.parse(user).email;
      } catch {
        this.userName = user;
      }
    } else {
      // If user info doesn't exist, redirect to login
      this.$router.push('/');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: #e8eee9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  height: 25px;
  width: 25px;
  margin-right: 8px;
}

.logout-btn {
  background: #ff6600;
  border: none;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.welcome-section {
  margin-top: 100px;
  text-align: center;
}

.welcome-section h1 {
  color: #4d148c;
}
</style>
