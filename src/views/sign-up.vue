<template>
  <div class="page-wrapper">
    <!-- Navbar -->
    <nav class="navbar" style="padding: 20px 40px">
      <div class="navbar-logo">
        <img
          src="/public/d.png"
          style="margin-top: -10px !important"
          alt="Logo"
          class="logo-icon"
        />
        <h3 class="logo-text">Zacrac <span>Learning</span></h3>
      </div>

      <!-- Checkbox toggle BEFORE .navbar-links -->
      <input type="checkbox" id="check-bobo" />
      <label for="check-bobo">
        <img src="/public/menu 3.svg" alt="Menu Icon" id="menu" />
      </label>

      <!-- Nav Links -->
      <div class="navbar-links">
        <ul>
          <li>
            <a
              >Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
                /></svg
            ></a>
          </li>
          <li><a>Partners</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </div>

      <button class="navbar-btn" type="button">
        Start Learning<svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.9em"
          height="0.9em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#fff"
            d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"
          />
        </svg>
      </button>
    </nav>

    <!-- Main Section -->
    <section class="main-section">
      <!-- Left Image -->
      <div class="image-container">
        <img src="/public/a.png" alt="Signup Illustration" />
      </div>

      <!-- Right Form -->
      <div class="form-container">
        <h4 class="welcome-text">Candidate Registration</h4>
        <p class="sub-text">
          Already have an account?
          <a @click="$router.push('/sign-in')">Login</a>
        </p>

        <div
          class="w-100"
          style="
            height: 45px;
            background: #f4faff;
            margin-top: -5px;
            border-radius: 8px;
            align-items: start;
            padding: 5px 10px;
          "
        >
          <div class="d-flex" style="justify-content: space-between">
            <a style="font-size: 11px; font-weight: 500; color: #000000"
              >Student</a
            >
            <svg
              style="margin-top: -2px; margin-left: -5px; cursor: pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
              />
            </svg>
          </div>
          <p style="font-size: 8px; color: #1d1d1db2">Learning a course</p>
        </div>
        <!-- Signup Form -->
        <form @submit.prevent="registerUser" class="login-form mt-3">
          <p class="success-message" v-if="succmsg">{{ succmsg }}</p>

          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Full Name"
            class="form-control"
            required
            style="text-transform: capitalize"
          />

          <label for="email">Email Address</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="Email"
            class="form-control"
            required
          />

          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="form.password"
            placeholder="Password"
            class="form-control"
            required
          />

          <label for="gender">Gender</label>
          <select
            id="gender"
            v-model="form.gender"
            class="form-control"
            required
          >
            <option disabled value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather not say</option>
          </select>

          <p v-if="succmsg" class="text-success">{{ succmsg }}</p>
          <p v-if="errormsg" class="text-danger">{{ errormsg }}</p>

          <button
            type="submit"
            class="submit-btn mt-3 d-flex align-items-center justify-content-center gap-2"
            :disabled="loading"
          >
            <svg
              v-if="loading"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#fff"
                stroke-width="5"
                stroke-linecap="round"
                stroke-dasharray="90,150"
                stroke-dashoffset="0"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <span>{{
              loading ? "Creating Account..." : "Create Account"
            }}</span>
          </button>

          <p v-if="succmsg" class="success-message">{{ succmsg }}</p>
        </form>

        <!-- OR Divider -->
        <div class="or-divider">OR</div>

        <!-- Google Signup -->
        <div class="google-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ffc107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
            />
            <path
              fill="#ff3d00"
              d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
            />
            <path
              fill="#4caf50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
            />
            <path
              fill="#1976d2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
            />
          </svg>
          <a
            href="https://zacracebookwebsite.onrender.com/ebook/auth/google"
            style="text-decoration: none; color: black"
            >Sign up with Google</a
          >
        </div>

        <!-- Switch to Login -->
        <p class="signup-text" style="font-weight: 450">
          Already have an account?
          <a @click="$router.push('/sign-in')" style="color: gray">Sign in</a>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "", 
        password: "",
        gender: "",
      },

      loading: false,
      errormsg: "",
      succmsg: "",
    };
  },

  methods: {
    validateForm() {
      const { name, email, password, gender } = this.form;

      if (!name.trim() || !email.trim() || !password || !gender) {
        return "Please fill out all fields.";
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
      }

      if (password.length < 6) {
        return "Password must be at least 6 characters.";
      }

      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);

      if (!hasUppercase || !hasLowercase || !hasNumber) {
        return "Password must include uppercase, lowercase, and a number.";
      }

      return null;
    },

    async registerUser() {
      this.errormsg = "";
      const validationError = this.validateForm();
      if (validationError) {
        this.errormsg = validationError;
        return;
      }

      this.loading = true;

      try {
        const response = await axios.post(
          "https://zacracebookwebsite.onrender.com/ebook/auth/signup",
          this.form
        );

         this.succmsg = "Registration successful!";
        alert("Registration successful!");
        localStorage.setItem('emailForVerification', this.form.email);
          this.$router.push("/otp");
      } catch (error) {
        const message = error.response?.data?.message;
        const status = error.response?.status;

        this.errormsg = message || "Something went wrong. Please try again later.";

        console.error("Registration failed:", error.response?.data || error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-wrapper {
  min-height: 100vh;
  background-color: #e8eee9;
}
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: #e8eee9;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  height: 20px;
  width: 20px;
  margin-right: 8px;
}

.logo-text {
  font-size: 16px;
  color: #4d148c;
}
.logo-text span {
  color: #ff6600;
}

.navbar-links ul {
  display: flex;
  gap: 20px;
}
.navbar-links ul li {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #1e1e26;
  font-size: 14px;
  transition: color 0.3s;
}
.navbar-links ul li:hover {
  color: #4d148c;
}

.navbar-btn {
  background: #4d148c;
  color: #fff;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.navbar-btn:hover {
  background: #3b0f6e;
}

/* Main Section */
.main-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  gap: 30px;
  flex-wrap: wrap;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container img {
  max-width: 100%;
  height: auto;
}

.form-container {
  flex: 1;
  background: #fff;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 570px;
}

.welcome-text {
  font-size: 18px;
  color: #4d148c;
}
.sub-text {
  font-size: 12px;
  margin-bottom: 20px;
}
.sub-text a {
  color: #484ed1;
  cursor: pointer;
}

/* User Type Buttons */
.user-type {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.user-type .btn {
  flex: 1;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background: #fff;
  font-size: 12px;
}
.user-type .btn.active {
  background: #f4faff;
}

/* Main Section */
.main-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  gap: 30px;
  flex-wrap: wrap;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container img {
  max-width: 100%;
  height: auto;
}

.form-container {
  flex: 1;
  background: #fff;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 570px;
}

.welcome-text {
  font-size: 18px;
  color: #4d148c;
}
.sub-text {
  font-size: 12px;
  margin-bottom: 20px;
}
.sub-text a {
  color: #484ed1;
  cursor: pointer;
}

/* User Type Buttons */
.user-type {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.user-type .btn {
  flex: 1;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background: #fff;
  font-size: 12px;
}
.user-type .btn.active {
  background: #f4faff;
}

/* Login Form */
.login-form label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
}
.login-form input {
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 12px;
}

.forgot-password {
  text-align: right;
  font-size: 12px;
  color: #8c1823;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #4d148c;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
.or-divider {
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  margin: 20px 0;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid #ccc;
  width: 170px;
  margin: 0 auto 20px;
  border-radius: 7px;
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
}

.signup-text {
  text-align: center;
  font-size: 10px;
}
.signup-text a {
  color: gray;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 900px) {
  .main-section {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .form-container {
    width: 100%;
  }

  @media (max-width: 732px) {
    .navbar-btn {
      margin-left: 10px;
      margin-top: -10px;

      width: 130px;
      font-size: 10px !important;
    }
    .navbar-logo {
      margin-top: -10px;
      cursor: pointer;
    }

    .navbar {
      padding: 15px 20px !important;
    }
  }

  @media (max-width: 722px) {
    .navbar-btn {
      margin-left: 9px;
      margin-top: -10px;

      width: 130px;
      font-size: 10px !important;
    }
    .navbar-logo {
      margin-top: -10px;
      cursor: pointer;
    }

    .navbar {
      padding: 15px 20px !important;
    }
  }

  @media (max-width: 720px) {
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 50px;
      background: #e8eee9;
      height: 60px;
      position: relative;
      z-index: 10;
    }

    .navbar-logo {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .logo-icon {
      height: 20px;
      width: 20px;
      margin-right: 8px;
    }
    .logo-text {
      font-size: 16px;
      color: #4d148c;
    }
    .logo-text span {
      color: #ff6600;
    }

    .navbar-links ul {
      display: flex;
      gap: 20px;
      list-style: none;
    }
    .navbar-links ul li {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      color: #1e1e26;
      cursor: pointer;
      transition: color 0.3s;
    }
    .navbar-links ul li:hover {
      color: #4d148c;
    }

    .navbar-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 20px;
      background: #4d148c;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .navbar-btn:hover {
      background: #3b0f6e;
    }
  }

  /* Hide checkbox and menu icon on desktop */
  #check-bobo {
    display: none;
  }

  #menu {
    display: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    z-index: 25;
  }

  label[for="check-bobo"] {
    display: none;
    cursor: pointer;
    z-index: 25;
  }

  /* Show hamburger icon and mobile menu on small screens */
  @media (max-width: 720px) {
    label[for="check-bobo"],
    #menu {
      display: block;
      margin-left: 170px !important;
      margin-top: -23px !important;
      height: 30px !important;
      width: 30px !important;
    }

    .navbar {
      flex-wrap: wrap;

      height: auto !important;
      position: relative !important;
      z-index: 10 !important;
    }

    .navbar-links ul {
      position: absolute !important;
      top: 70px !important;
      left: -100%;
      width: 100%;
      height: calc(100vh - 70px);
      background-color: #4d148c;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 30px;
      gap: 25px;
      transition: left 0.3s ease-in-out;
      z-index: 20;
    }

    #check-bobo:checked ~ .navbar-links ul {
      left: 0 !important;
    }

    .navbar-links ul li {
      font-size: 20px;
      color: white !important;
    }

    .navbar-btn {
      display: none !important;
    }

    .navbar-logo {
      margin-left: -500px !important;

      padding: 20px 20px !important;
    }
  }

  @media (max-width: 680px) {
    .navbar-logo {
      margin-left: -450px !important;

      padding: 20px 20px !important;
    }
  }

  @media (max-width: 600px) {
    .navbar-logo {
      margin-left: -360px !important;

      padding: 20px 20px !important;
    }
  }

  @media (max-width: 580px) {
    .navbar-logo {
      margin-left: -300px !important;

      padding: 20px 20px !important;
    }

    #menu {
      display: block;
      margin-left: 120px !important;
      margin-top: -23px !important;
      height: 30px !important;
      width: 30px !important;
    }
  }
}

@media (max-width: 732px) {
  .navbar-btn {
    margin-left: 10px;
    margin-top: -10px;

    width: 130px;
    font-size: 10px !important;
  }
  .navbar-logo {
    margin-top: -10px;
    cursor: pointer;
  }

  .navbar {
    padding: 15px 20px !important;
  }
}

@media (max-width: 722px) {
  .navbar-btn {
    margin-left: 9px;
    margin-top: -10px;

    width: 130px;
    font-size: 10px !important;
  }
  .navbar-logo {
    margin-top: -10px;
    cursor: pointer;
  }

  .navbar {
    padding: 15px 20px !important;
  }
}

@media (max-width: 720px) {
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    background: #e8eee9;
    height: 60px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo-icon {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }
  .logo-text {
    font-size: 16px;
    color: #4d148c;
  }
  .logo-text span {
    color: #ff6600;
  }

  .navbar-links ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  .navbar-links ul li {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: #1e1e26;
    cursor: pointer;
    transition: color 0.3s;
  }
  .navbar-links ul li:hover {
    color: #4d148c;
  }

  .navbar-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 20px;
    background: #4d148c;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .navbar-btn:hover {
    background: #3b0f6e;
  }
}

@media (max-width: 720px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
    align-items: flex-start;
  }

  .navbar-links {
    width: 100%;
    margin-top: 10px;
  }
  .navbar-links ul {
    flex-direction: column;
    gap: 10px;
    padding: 0;
  }

  .navbar-btn {
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
}

* {
  margin: 0px;
  padding: 0px;
}
html {
  scroll-behavior: smooth;
}
</style>
