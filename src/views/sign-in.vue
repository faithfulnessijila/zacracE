<template>
  <div class="page-wrapper">


  <!-- Navbar -->
<nav class="navbar" style="padding: 20px 40px;">
  <div class="navbar-logo">
    <img src="/public/d.png" style="margin-top: -10px !important;" alt="Logo" class="logo-icon" />
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
      <li><a>Courses  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"/>
      </svg></a></li>
      <li><a>Partners</a></li>
      <li><a>Contact us</a></li>
    </ul>
  </div>

  <button class="navbar-btn" type="button">
    Start Learning<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 256 256">
    <path fill="#fff" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"/>
  </svg>
  </button>
</nav>







    <!-- Main Content -->
    <div class="main-section">
      <div class="image-container">
        <img src="/public/b.png" alt="" />
      </div>

      <div class="form-container">
        <h4 class="welcome-text">Welcome Back</h4>
        <p class="sub-text">
          Don't have an account?
          <a @click="$router.push('/sign-up')">Create Account</a>
        </p>

        <!-- User Type Buttons -->
        <div class="user-type">
          <button class="btn active">Student</button>
          <button class="btn">Seller</button>
        </div>
       

        <!-- Login Form -->
        <form @submit.prevent="handleSubmit" class="login-form">
          <label for="email">Email Address</label>
          <input v-model="form.email" type="email" placeholder="Email" required />
  <p v-if="errors.email" style="color: red">{{ errors.email }}</p>

          <label for="password">Password</label>
          <input  v-model="form.password" type="password" placeholder="Password" required />
  <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>

          <p class="forgot-password">   <a @click="$router.push('/forgot-password')">Forgot Password?   </a></p>
          
          

          <button :disabled="loading" type="submit" class="submit-btn">  {{ loading ? "signing in..." : "sign in" }}
            
          
          </button>
          <p v-if="errorMessage" class="text-danger mt-2" style="font-weight: 500;">
  {{ errorMessage }}
</p>

          <p class="or-divider">OR</p>

          <!-- Google Signup -->
          <button class="google-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
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
            <a  href="https://zacracebookwebsite.onrender.com/ebook/auth/google" style="text-decoration:none; color:black;" >Sign up with Google</a>
          </button>

          <p class="signup-text" style=" font-weight: 450">
            Don't have an account? <a style="color: gray;" @click="$router.push('/sign-up')">Sign up</a>
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
      form: {
        email: "",
        password: ""
      },
      loading: false,
      errorMessage: "",
      errors: {}
    };
  },

  methods: {
    validateForm() {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.form.email) {
        errors.email = "Email is required";
      } else if (!emailRegex.test(this.form.email)) {
        errors.email = "Invalid email format";
      }

      if (!this.form.password) {
        errors.password = "Password is required";
      } else if (this.form.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    async handleSubmit() {
  this.errorMessage = '';
  this.loading = true;

  const payload = {
    email: this.form.email,
    password: this.form.password
  };

  try {
    const response = await axios.post(
      'https://zacracebookwebsite.onrender.com/ebook/auth/signin',
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const token = response.data.token;
    localStorage.setItem('token', token);
    this.$router.push('/');
  } catch (error) {
  const status = error.response?.status;
  const message = error.response?.data?.message;

  if (status === 400) {
    this.errorMessage = message || "Invalid form input. Please check your details.";
  } else if (status === 409) {
    this.errorMessage = "This email is already registered. Please sign in.";
  } else if (status === 500) {
    this.errorMessage = "Server error. Please try again later.";
  } else {
    this.errorMessage = message || "Something went wrong. Please try again.";
  }

  
  console.error("Registration failed:", {
    status,
    message,
    fullError: error
  });
}
finally {
    this.loading = false;
  }
}


  }
};
</script>




<style>
/* Reset */
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
  background: transparent !important;
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
}













@media (max-width: 732px) {


.navbar-btn {
margin-left: 10px;
margin-top: -10px;

width: 130px;
font-size:10px !important;
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
font-size:10px !important;
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
 background: #E8EEE9;
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
 color: #4D148C;
}
.logo-text span {
 color: #FF6600;
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
 color: #1E1E26;
 cursor: pointer;
 transition: color 0.3s;
}
.navbar-links ul li:hover {
 color: #4D148C;
}


.navbar-btn {
 display: flex;
 align-items: center;
 gap: 6px;
 padding: 5px 20px;
 background: #4D148C;
 color: #FFFFFF;
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
    width:  30px !important;



  }

  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(470px) !important; /* Start off-screen to the right */
  transition: transform 0s !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}

#check-bobo:checked ~ .navbar-links ul {
  transform: translateX(490px) !important; 
}


  

  .navbar-links ul li {
    font-size: 10px !important;
    
    
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
  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(420px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}







#check-bobo:checked ~ .navbar-links ul {
  transform: translateX(435px) !important; 
}
}

@media (max-width: 600px) {
  .navbar-logo {
    margin-left: -360px !important;
 
    padding: 20px 20px !important;
 
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(370px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}
  #check-bobo:checked ~ .navbar-links ul {
  transform: translateX(402px) !important; 
}
}


@media (max-width: 580px) {
  .navbar-logo {
    margin-left: -300px !important;
 
    padding: 20px 20px !important;
 
  }
  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(308px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}

  #check-bobo:checked ~ .navbar-links ul {
  transform: translateX(370px) !important; 
}

  #menu {
    display: block;
    margin-left: 120px !important;
    margin-top: -23px !important;
    height: 30px !important;
    width:  30px !important;

  }
}

























@media (max-width: 540px) {
  .navbar-logo {
   
 
    padding: 20px 20px !important;
 
  }
  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    width: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(308px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}

  #check-bobo:checked ~ .navbar-links ul {
  transform: translateX(340px) !important; 
}

  #menu {
    display: block;
    margin-left: -20px !important;
    margin-top: -23px !important;
    height: 30px !important;
    width:  30px !important;


  }
}


@media (max-width: 524px) {
  .navbar-logo {
   
 
    padding: 20px 20px !important;
 
  }
  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    width: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(308px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}

  #check-bobo:checked ~ .navbar-links ul {
  transform: translateX(320px) !important; 
}

  #menu {
    display: block;
    margin-left: -20px !important;
    margin-top: -23px !important;
    height: 30px !important;
    width:  30px !important;


  }
}





@media (max-width: 500px) {
  .navbar-logo {
   
 
    padding: 20px 20px !important;
 
  }
  .navbar {
    flex-wrap: wrap;
    
    height: auto !important;
    width: auto !important;
    position: relative !important;
    z-index: 10 !important;
  }
  .navbar-links ul {
  position: absolute !important;
  top: 150px !important;
  right: 20px !important;
  width: 150px !important;
  height: 110px !important;
  background-color: #4d148c !important;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  padding: 20px !important;
  gap: 15px !important;
  transform: translateX(308px) !important; /* Start off-screen to the right */
  transition: transform 0s ease-in-out !important;
  z-index: 20 !important;
  border-radius: 8px !important;
}

  #check-bobo:checked ~ .navbar-links ul {
  transform: translateX(280px) !important; 
}

  #menu {
    display: block;
    margin-left: -20px !important;
    margin-top: -23px !important;
    height: 30px !important;
    width:  30px !important;


  }
}



@media (max-width: 463px) {

.navbar-logo {
  margin-left: -180px !important;



}

.navbar {
  flex-wrap: wrap;
  
  height: auto !important;
 
  position: relative !important;
  z-index: 10 !important;
  padding: 0px 20px !important;
}
.navbar-links ul {
position: absolute !important;
top: 150px !important;
right: 20px !important;
width: 150px !important;
height: 110px !important;
background-color: #4d148c !important;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
display: flex !important;
flex-direction: column !important;
align-items: flex-start !important;
justify-content: flex-start !important;
padding: 20px !important;
gap: 15px !important;
transform: translateX(28px) !important; /* Start off-screen to the right */
transition: transform 0s ease-in-out !important;
z-index: 20 !important;
border-radius: 8px !important;
}

#check-bobo:checked ~ .navbar-links ul {
transform: translateX(240px) !important; 
}

#menu {
  display: block;
  margin-left: -20px !important;
  margin-top: -23px !important;
  height: 30px !important;
  width:  30px !important;


}
}


@media (max-width: 438px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 28px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}




@media (max-width: 424px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 40px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}


@media (max-width: 418px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 50px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}


@media (max-width: 399px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 115px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}

@media (max-width: 343px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 158px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}

@media (max-width: 298px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 180px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 50px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}

@media (max-width: 269px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    margin-left: 0;
  }

  .navbar-logo img {
    position: relative; 
    height: 20px;
    margin-left: 220px;
    top: 3px!important; 

  }

  .navbar-logo h3 {
    font-size: 16px;
    margin: 0;
    color: #4d148c;
  }

  #menu {
    display: block;
    position: absolute;
    top: 45px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 30;
  }

  .navbar-links ul {
    position: absolute;
    top: 60px;
    right: -200px; /* Start off-screen */
    width: 160px;
    background-color: #4d148c;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    transition: right 0.4s ease-in-out;
    z-index: 20;
    border-radius: 8px;
  }

  #check-bobo:checked ~ .navbar-links ul {
    right: 10px; /* Slide in from the right */
  }
}

</style>