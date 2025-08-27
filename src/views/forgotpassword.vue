<template>
    <div class="page-wrapper">
       
<nav class="navbar" style="padding: 20px 40px;">
  <div class="navbar-logo">
    <img src="/public/d.png" style="margin-top: -10px !important;" alt="Logo" class="logo-icon" />
    <h3 class="logo-text">Zacrac <span>Learning</span></h3>
  </div>


</nav>
<div class="main-section">
      <div class="form-container">
        <h4 class="welcome-text">Forgot Password</h4>
        <p class="sub-text">Enter your email to reset your password.</p>

        <form @submit.prevent="submitEmail" class="login-form">
          <label for="email">Email Address</label>
          <input v-model="email" type="email" id="email" required placeholder="Enter your email" />
          <div class="error" v-if="error">{{ error }}</div>
          <div class="success" v-if="success">{{ success }}</div>

          <button :disabled="loading" type="submit" class="submit-btn">
            <span v-if="loading">Sending...</span>
            <span v-else>Verify Email</span>
          </button>

          <p class="signup-text" style="margin-top: 10px; font-weight: 450">
            Remember your password?
            <a style="color: gray; cursor: pointer; text-decoration: underline;" @click="$router.push('/sign-in')">Go to Sign in</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ForgotPassword",
    data() {
      return {
        email: "",
        loading: false,
        error: "",
        success: "",
      };
    },
    methods: {
      async submitEmail() {
        this.error = "";
        this.success = "";
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.email || !emailRegex.test(this.email)) {
          this.error = "Please enter a valid email address.";
          return;
        }
  
        this.loading = true;
        try {
          const res = await fetch("https://zacracebookwebsite.onrender.com/ebook/auth/forget-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: this.email }),
          });
  
          const data = await res.json();
  
          if (!res.ok) {
            this.error = data.message || "Something went wrong.";
          } else {
            this.success = "check your email!";
           
          }
        } catch (err) {
          this.error = "An error occurred. Please try again.";
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Center the form vertically & horizontally */
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Full height minus navbar */
  padding: 20px;
}

/* Keep your existing styles, just make sure form is responsive */
.form-container {
  width: 100%;
  max-width: 400px; /* Prevents stretching */
}

  .success {
    color: green;
    font-size: 12px;
    margin-top: 5px;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }


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
  font-size: 14px !important;
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
    position: absolute !important;;
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
    left: 0 !important;;
  }

  .navbar-links ul li {
    font-size: 10px!important;
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
    width:  30px !important;



  }
}
  </style>
  