<template>
  <div class="page-wrapper">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="/public/d.png" alt="Logo" class="logo-icon" />
        <h3 class="logo-text">Zacrac <span>Learning</span></h3>
      </div>
    </nav>

    <!-- Main Section -->
    <div class="main-section">
      <!-- Image Carousel -->
      <div class="image-container">
        <div class="slides">
          <img src="/public/a.png" alt="Slide 1" />
          <img src="/public/c.png" alt="Slide 2" />
          <img src="/public/b.png" alt="Slide 3" />
          <img src="/public/a.jpeg" alt="Slide 4" />
        </div>
      </div>

      <!-- Login Form -->
      <div class="form-container">
        <h4 class="welcome-text">Welcome Back</h4>
        <p class="sub-text">
          Don't have an account?
          <a @click="$router.push('/sign-up')">Create Account</a>
        </p>

        <div class="user-type">
          <button class="btn active">Customer</button>
          <button class="btn">Seller</button>
        </div>

        <form @submit.prevent="handleSubmit" class="login-form">
          <label>Email Address</label>
          <input v-model="form.email" type="email" placeholder="Email" required />
          <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>

          <label>Password</label>
          <input v-model="form.password" type="password" placeholder="Password" required />
          <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>

          <p class="forgot-password">
            <a @click="$router.push('/forgot-password')">Forgot Password?</a>
          </p>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? "Signing in..." : "Sign In" }}
          </button>
          <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>

          <p class="or-divider">OR</p>

          <button class="google-btn" type="button" @click="googleAuth">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/>
            </svg>
            <span>Sign in with Google</span>
          </button>

          <p class="signup-text">
            Don't have an account?
            <a @click="$router.push('/sign-up')">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: { email: "", password: "" },
      loading: false,
      errorMessage: "",
      errors: {},
    };
  },
  methods: {
    async handleSubmit() {
      this.errorMessage = "";
      this.loading = true;
      if (!this.validateForm()) return (this.loading = false);

      try {
        const res = await axios.post(
          "https://zacracebookwebsite.onrender.com/ebook/auth/signin",
          this.form
        );
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/auth-callback");
      } catch (err) {
        this.errorMessage = err.response?.data?.message || "Something went wrong";
      } finally {
        this.loading = false;
      }
    },
    validateForm() {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) errors.email = "Email required";
      else if (!emailRegex.test(this.form.email)) errors.email = "Invalid email";
      if (!this.form.password) errors.password = "Password required";
      else if (this.form.password.length < 6) errors.password = "Min 6 characters";
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    googleAuth() {
      window.location.href = "https://zacracebookwebsite.onrender.com/ebook/auth/google";
    },
    handleTokenFromURL() {
      const token = this.$route.query.token;
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(payload));
          this.$router.replace({ path: "/auth-callback", query: {} });
        } catch (e) {
          this.errorMessage = "Google login failed";
        }
      }
    },
    setCarouselHeight() {
      const form = this.$el.querySelector(".form-container");
      const carousel = this.$el.querySelector(".image-container");
      if (form && carousel) carousel.style.height = form.offsetHeight + "px";
    },
  },
  mounted() {
    this.setCarouselHeight();
    window.addEventListener("resize", this.setCarouselHeight);
    this.handleTokenFromURL();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setCarouselHeight);
  },
};
</script>

<style scoped>
.page-wrapper { min-height: 100vh; background: #e8eee9; }
.navbar { display:flex; justify-content: flex-start; padding: 20px; }
.navbar-logo { display:flex; align-items:center; }
.logo-icon { width:20px; height:20px; margin-right:8px; }
.logo-text { font-size:16px; color:#4d148c; }
.logo-text span { color:#ff6600; }
.main-section { display:flex; flex-wrap:wrap; gap:30px; padding:40px; justify-content:center; }
.image-container { flex:1; min-height:250px; position:relative; overflow:hidden; border-radius:10px; opacity:0.8; }
.slides img { position:absolute; width:100%; height:100%; object-fit:cover; opacity:0; animation:fade 12s infinite; filter:brightness(80%); }
.slides img:nth-child(1){animation-delay:0s;} .slides img:nth-child(2){animation-delay:3s;} .slides img:nth-child(3){animation-delay:6s;} .slides img:nth-child(4){animation-delay:9s;}
@keyframes fade {0%,25%{opacity:1;}26%,100%{opacity:0;}}
.form-container { flex:1; max-width:570px; background:#fff; border-radius:20px; padding:40px 30px; }
.welcome-text { font-size:18px; color:#4d148c; }
.sub-text { font-size:12px; margin-bottom:20px; }
.user-type { display:flex; gap:20px; margin-bottom:20px; }
.user-type .btn { flex:1; padding:8px; border:1px solid gray; border-radius:8px; background:#fff; font-size:12px; }
.user-type .btn.active { background:#f4faff; }
.login-form label { font-size:12px; display:block; margin-bottom:5px; }
.login-form input { width:100%; height:35px; border:1px solid #ccc; border-radius:8px; padding:5px 10px; margin-bottom:12px; }
.forgot-password { text-align:right; font-size:12px; color:#8c1823; cursor:pointer; }
.submit-btn { width:100%; height:40px; border-radius:8px; background:#4d148c; color:#fff; font-weight:bold; border:none; cursor:pointer; }
.or-divider { text-align:center; font-size:10px; font-weight:bold; margin:20px 0; }
.google-btn { display:flex; align-items:center; justify-content:center; gap:5px; border:1px solid #ccc; width:170px; margin:0 auto 20px; border-radius:7px; font-size:10px; font-weight:bold; padding:5px; cursor:pointer; }
.signup-text { text-align:center; font-size:10px; }
.signup-text a { color:gray; cursor:pointer; text-decoration:underline; }
@media(max-width:900px){.main-section{flex-direction:column;align-items:center;padding:20px;}.form-container{width:100%;}}
</style>
