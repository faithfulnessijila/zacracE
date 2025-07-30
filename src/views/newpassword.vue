<template>
    <div class="change-password-wrapper">
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
  
      <section class="content">
        <div class="form-card">
          <h2>Change Password</h2>
  
          <form @submit.prevent="submitChangePassword">
            <label for="password">New Password</label>
            <input :disabled="loading" 
              id="password" name="new-password"
              type="password"
              v-model="password"
              required
              placeholder="Enter new password"
            />
  
            <label for="confirm">Confirm Password</label>
            <input  :disabled="loading" 
              id="confirm"
              type="password" name="confirm-password"
              v-model="confirmPassword"
              required
              placeholder="Re-enter new password"
            />
  
            <p class="error" v-if="errormsg">{{ errormsg }}</p>
            <p class="success" v-if="succmsg">{{ succmsg }}</p>
  
            <button type="submit" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              <span v-else>Update Password</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChangePassword",
    data() {
      return {
        password: "",
        confirmPassword: "",
        loading: false,
        errormsg: "",
        succmsg: ""
      };
    },
    methods: {
      async submitChangePassword() {
        if (this.password.length < 6) {
          this.errormsg = "Password must be at least 6 characters.";
          return;
        }
  
        if (this.password !== this.confirmPassword) {
          this.errormsg = "Passwords do not match.";
          return;
        }
  
        const token = this.$route.query.token;
        if (!token) {
          this.errormsg = "Invalid or missing token.";
          return;
        }
  
        this.loading = true;
        this.errormsg = "";
        this.succmsg = "";
  
        try {
          const res = await fetch(`https://zacracebookwebsite.onrender.com/ebook/auth/reset-password/${token}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    newPassword: this.password,
    confirmPassword: this.confirmPassword
  })
});


        
  
          const data = await res.json();
  
          if (res.ok) {
            this.succmsg = "Password reset successfully!";
            setTimeout(() => this.$router.push('/sign-in'), 2000);
          } else {
            this.errormsg = data.message || 'An error occurred';
          }
        } catch (error) {
          console.error(error);
          this.errormsg = 'Network or server error.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  

  
  
  <style scoped>

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid #fff;
  border-top: 3px solid transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
  margin: auto;
}



@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


  .change-password-wrapper {
    background: #e8eee9;
    min-height: 100vh;
    font-family: sans-serif;
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
    left: 0 !important;
  }

  .navbar-links ul li {
    font-size: 10px !important;
   


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
  
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 24px;
    margin-right: 10px;
  }
  .logo h3 {
    color: #4d148c;
    font-size: 16px;
  }
  .logo span {
    color: #ff6600;
  }
  
  .content {
    display: flex;
    justify-content: center;
    padding: 60px 20px;
  }
  
  .form-card {
    background: #fff;
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
  }
  h2 {
    color: #4d148c;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 12px;
    margin-bottom: 4px;
  }
  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 12px;
  }
  button {
    background: #4d148c;
    color: white;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .success {
    color: green;
    font-size: 13px;
    margin-bottom: 8px;
  }
  .error {
    color: red;
    font-size: 13px;
    margin-bottom: 8px;
  }
  
  .spinner {
    width: 18px;
    height: 18px;
    border: 3px solid #fff;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  