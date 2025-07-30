<template>
    <div class="otp-wrapper">
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
          <h2>Enter OTP</h2>
          <p class="info">Please enter the 6-digit code sent to your email.</p>
  
          <form @submit.prevent="submitOtp">
            <div class="otp-inputs">
              <input
                v-for="(digit, index) in otpDigits"
                :key="index"
                type="text"
                maxlength="1"
                class="otp-box"
                v-model="otpDigits[index]"
                @input="focusNext(index)"
                @keydown.backspace="focusPrev(index)"
                ref="otpRefs"
              />
            </div>
  
            
            <p class="success" v-if="succmsg">{{ succmsg }}</p>
  
            <button type="submit" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              <span v-else>Verify OTP</span>
            </button>

            <p v-if="error" class="text-danger mt-2" style="font-size: 10px;">{{ error }}</p>
          <p v-if="verificationSuccess" class="text-success mt-2" style="font-size: 10px;">
            OTP verified successfully! Redirecting...
          </p>




          <p class="text-muted mt-3" style="font-size: 10px;">
            Didn't receive the code?
            <span @click="resendOtp"
              :style="{ cursor: resendDisabled ? 'not-allowed' : 'pointer', color: resendDisabled ? 'gray' : '#01C881' }">
              {{ resendDisabled ? `Resend OTP in ${countdown}s` : resendLoading ? 'Resending...' : 'Resend OTP' }}
            </span>
          </p>

          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otpDigits: ['', '', '', '', '', ''],
        loading: false,
        error: null,
        resendDisabled: false,
        countdown: 60,
        resendSuccess: false,
        verificationSuccess: false,
        resendLoading: false,
        email: '',  // Add email here
      }
    },
    watch: {
      otpDigits: {
        handler() {
          this.error = null;
        },
        deep: true
      }
    },
    created() {
      // Fetch email from localStorage
      this.email = localStorage.getItem('email') || localStorage.getItem('emailForVerification') || '';
      if (!this.email) {
        this.error = "Email not found. Please sign up again.";
      }
    },
  
    methods: {
    validatePaste(event) {
      const pastedData = event.clipboardData.getData('text');
      if (!/^\d+$/.test(pastedData)) {
        event.preventDefault();
      }
    },
  
    validateNumber(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    },
  
    handleBackspace(event, index) {
      // Move to previous input if current is empty and backspace is pressed
      if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
        this.$refs[`input${index - 1}`].focus();
      }
    },
  
    async submitOtp() {
      this.loading = true;
      this.error = null;
      try {
        const otp = this.otpDigits.join('');
        if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
          this.error = 'Invalid OTP';
          return;
        }
        const response = await fetch('https://zacracebookwebsite.onrender.com/ebook/auth/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email, otp })
        });
        if (response.ok) {
          this.verificationSuccess = true;
          setTimeout(() => {
            this.$router.push('/sign-in');
          }, 2000);
        } else {
          const errorData = await response.json();
          this.error = errorData.message || 'An error occurred';
        }
      } catch (e) {
        console.error(e);
        this.error = 'An error occurred';
      } finally {
        this.loading = false;
      }
    },
  
    focusNextInput(index) {
      if (index < this.otpDigits.length && this.otpDigits[index - 1].trim() !== '') {
        this.$nextTick(() => {
          this.$refs[`input${index}`].focus();
        });
      }
    },
  
    async resendOtp() {
      if (this.resendLoading || this.resendDisabled) return;
      this.resendLoading = true;
      try {
        const response = await fetch('https://zacracebookwebsite.onrender.com/ebook/auth/resend-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email })
        });
        if (response.ok) {
          console.log('OTP resent successfully');
          this.resendSuccess = true;
          setTimeout(() => {
            this.resendSuccess = false;
          }, 2000);
          this.resendDisabled = true;
          this.startCountdown();
        } else {
          const errorData = await response.json();
          this.error = errorData.message || 'An error occurred';
        }
      } catch (e) {
        console.error(e);
        this.error = 'An error occurred';
      } finally {
        this.resendLoading = false;
      }
    },
  
    startCountdown() {
      const intervalId = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(intervalId);
          this.resendDisabled = false;
          this.countdown = 60;
        }
      }, 1000);
    }
  }
  
  }
  </script>
  
  
  
  
  <style scoped>
  .otp-wrapper {
    background: #e8eee9;
    min-height: 100vh !important;
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
    max-width: 400px;
  }
  h2 {
    color: #4d148c;
    margin-bottom: 10px;
  }
  .info {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .otp-inputs {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
  }
  .otp-box {
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
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






  @media (max-width: 449px) {
    .otp-inputs{
    
    position: relative; 
    left: -2px;
     

  
    }
}



@media (max-width: 440px) {
    .otp-inputs{
    
    position: relative; 
    left: -1px;
     

  
    }
}

@media (max-width: 420px) {
  .otp-inputs {
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .otp-box {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}






  </style>
