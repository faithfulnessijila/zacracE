<template>
    <div>
      <div class="boom w-100" style="height: 685px; position:relative; background-color: #E8EEE9;">
        <img class="lol" src="/public/c.png" style="position: absolute; z-index: 1; width: 100%; height: 100vh; opacity: 15%;" alt="">
        <nav class="navbar" style=" background-color: transparent;">

<div class="navbar-logo">
  <img style="margin-top: -10px !important;" src="/public/d.png" alt="Logo" class="logo-icon" />
  <h3 class="logo-text">Zacrac <span>Learning</span></h3>
</div>


<div class="navbar-links">
  <ul>
    <li>
      Courses
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"/>
      </svg>
    </li>
    <li>Partners</li>
    <li>Contact us</li>
  </ul>
</div>


<button class="navbar-btn">
  Start Learning
  <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 256 256">
    <path fill="#fff" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"/>
  </svg>
</button>
</nav>


            <div class="hi w-100 aa btn-secondry d-flex" style="height: 620px;justify-content: space-between; padding: 62px 40px;position: relative; position: absolute; ">
            <div class="  aab" style="height: 380px; margin-top: 58px;width: 490px; margin-left: 60px; position: relative;  z-index: 6; background-color: blu;">
              <img
          class="bg aaba"
          style="height: 100%; width: 70%; margin-left: 142px;"
          src="/public/a.png"
          alt=""
        />
            </div>
            <div class="aac  ml-4" style="height: 485px; border-radius: 20px;width: 570px;margin-right: 30px; background-color: white; position: relative; z-index: 11;padding: 45px 30px; ">
                <h4 style="font-size: 18px;color : #4D148C;">Candidate Registration</h4> <p style=" font-size: 9px;color: #1D1D1D; ">Already have an account?<a  @click="$router.push('/sign-up')"  style="margin-left: 3px; color: #484ED1;cursor:pointer;">Login</a></p> 

                                <div class=" w-100" style="height: 45px; background: #F4FAFF; margin-top: -5px;border-radius: 8px;align-items: start;padding: 5px 10px;">
                                  <div class="d-flex" style="justify-content: space-between;"> <a style ="font-size: 11px;font-weight:500; color: #000000; ">Student</a> <svg  style="margin-top:-2px;margin-left: -5px;cursor:pointer; " xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z" /></svg></div>
                                   <p style = "font-size: 8px; color: #1D1D1DB2;">Learning a course</p>
                                </div>






                                <form @submit.prevent="signUpUser" class="form-group mt-3 w-100" style=" background-color: yelow;  height: 180px">
                                  <p>{{ succmsg }}</p>
                                  <div class="form-group" style="">
                                  <label for="input1" class="form-text" style="font-size: 10px; margin-bottom: 3px;">Full Name</label>
                                <input type="text" required v-model="form.name" id="input1" placeholder="Full Name" class="form-control w-100" style=" height:30px;border-radius: 8px;">
                                  </div> 


                                  <div class="form-group">
                                <label class="form-text" for="input2" style="font-size: 10px; margin-bottom: 3px;">Email Address</label>
                                <input v-model="form.email" type="email" required id="input2" placeholder="Email" class="form-control w-100" style=" height:30px;border-radius: 8px;">
                                  </div>



                                  <div class="form-group ">
                                <label for="input3" style="font-size: 10px; margin-bottom: 3px; ">Password</label>
                                <input  type="password"  required v-model="form.password" id="input3" placeholder="password" class="form-control w-100" style="height:30px; border-radius: 8px;">
                                  </div>


                                  <div class="form-group">
                                <label for="input4" style="font-size: 10px; margin-bottom: 3px; "> Re-enter Password</label>
                                    <input required  type="password" v-model="confirmPassword" id="input4" placeholder="Re-password" class="form-control w-100" style="height:30px; border-radius: 8px;">
                                  </div><p>{{ errormsg }}</p>
                                     
                                        
                                  
                                    
                                    <button class="btn btn-second w-100 " type="submit" :disabled="loader" style="height: 40px; border-radius: 8px; margin-top: 11px; background: #4D148C;color: #FFFFFF;
                                        font-weight: bold;font-size: 14px;">
                                        <svg
          v-show="loader"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 50 50"
>
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
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
Create Account</button> 
                            </form>
                        </div>
            </div>

    </div>
    </div>
  </template>
  
  
  <script>
 export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      loader: false,
      terms: false,
    }
  },
  mounted() {},
  methods: {
    async signUpUser() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email.trim())) {
        alert("Invalid email address")
        return
      }
      if (this.form.password !== this.confirmPassword) {
        alert("Passwords do not match")
        return
      }
     
      this.loader = true
      let response;
      try {
        response = await fetch('https://zacracebookwebsite.onrender.com/ebook/auth/signup ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form),
        })
        if (response.ok) {
  const data = await response.json()
  console.log('Success:', data);
  alert("Sign up was successful")
  this.$router.push('');
}
else {
          try {
            const errorResponse = await response.json();
            alert(errorResponse.message || "Error signing up")
          } catch {
            alert("Error signing up")
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Error signing up")
      }
      this.loader = false
    }
  }
}
 
  </script>
 <style>
 @media (max-width: 1255px) {
   .aa {
             
             
              height: calc(100% ) !important;
               
           }
           .zac {
             
              margin-top:-7px !important;
               
           }
           .aab{
               
             margin-right: -330px !important;
           
 
           }
           .aac{
             margin-left: 362px !important;
               width: calc(50% ) !important;
 
           }
           .aaba {
             
             margin-left:130px !important;   
          }
          
       }
 
       @media (max-width: 1200px) {
   
           .aab{
            
             margin-left:10px !important;
            
          
 
             }
             .aac{
               
               width: calc(50% ) !important;
               
             }
             .boom{
           height: 670px !important; 
           background-color: #E8EEE9 !important;
         }
       .hi{
           height: 610px !important;
           background-color: #E8EEE9 !important;
         }
       }
 
 
 
 
 
 
       @media (max-width: 1110px) {

           .zac{
             
              margin-top:-6px !important;
               
           }
           
           .aab{
             
             
             margin-left:-40px !important;
              
              
 
             }
             .aaba {
             
             margin-left:145px !important;
 
              
          }
             
       }
       
 
 
 
       @media (max-width: 1000px) {
 
           .zac{
             
              margin-top:-7px !important;
               
           }
           .aaba {
             
             margin-left:120px !important;
 
              
          }
          
             
       }
 
 
 
       @media (max-width: 900px) {
   .aa {
             
           
              height: calc(100% ) !important;
 
               
           }
           .zac{
            
             margin-left:-30px !important;
             margin-top:-6px !important;
               
           }
           .aaba {
             
             margin-left:110px !important;
 
              
          }
          
             .boom{
           height: 670px !important;
        
           
         }
       .hi{
           height: 610px !important;
           
           
         }
       }
 
 
 
 
 
       @media (max-width: 800px) {
 
         .hi{
           background-color: #E8EEE9 !important;
         }
         .lol{
           height: 670px !important;
         }
         .boom{
           height: 610px !important;
          
           
         }
       
   .aa {
             
             
              height: calc(100% ) !important;
              
 
         }.zac{
              
             margin-left:-20px !important;
             margin-top:-6px !important;
               
           }
           .aaba {
             
             margin-left:100px !important;
 
              
          }
          
       ul li{
         font-size:10px
       }
       .zacc{
         font-size:13px !important;
       }
 
             
       }
       
 
       @media (max-width: 700px) {
   .bg-secndary {
     padding: 5px;
    
   }
 
     .lol{
           height: 1150px !important;
           
         }
         .boom{
           height: 1150px !important;
           background-color: #E8EEE9 !important;
           
         }
         
         
  
   .zac {
     padding: 5px;
   }
   .aa {
     padding: 10px;
   }
   .aab {
     height: auto;
   }
   .aac {
     padding: 10px;
   }
   .zacc {
     font-size: 12px;
   }
   ul li {
     font-size: 10px;
   }
 }
 
 
 
 
 
 
 
 @media (max-width: 600px) {
   .bg-secndary {
     padding: 5px;
   }
   .zac {
     padding: 5px;
   }
   .aa {
     padding: 10px;
   }
   .aab {
     height: auto;
   }
   .aac {
     padding: 10px;
   }
   .zacc {
     font-size: 14px;
   }
   ul li {
     font-size: 12px;
   }
   .aab img {
     width: 100%;
     margin-left: 0;
   }
   .lol{
           height: 1150px !important;
        
 
 
         }
 }
 
 
 
 
 @media (max-width: 720px) {
 
   .bg-secndary {
     display: block !important;
     text-align: center;
     padding: 10px 15px !important;
     height: auto !important;
     background: #E8EEE9;
   }
 
 
   .zac {
     width: auto !important;
     margin: 0 auto !important;
     display: inline-block;
     text-align: center;
   }
   .zacc {
     font-size: 13px !important;
     margin-left: 25px !important;
   }
   .zaci {
     height: 18px !important;
     width: 18px !important;
     margin-top: 2px !important;
   }
 
 
   .bg-drk {
     width: 100% !important;
     margin: 10px 0 !important;
     text-align: center;
   }
   .bg-drk ul {
     display: block !important;
     padding: 0;
     margin: 10px auto !important;
   }
   .bg-drk ul li {
     display: block !important;
     margin: 8px 0 !important;
     font-size: 14px !important;
   }
 
   .r {
     display: inline-block;
     margin-top: 10px;
     padding: 6px 12px !important;
     font-size: 12px !important;
   }
   .r a {
     font-size: 12px !important;
     margin-top: 0 !important;
   }
 
 
   .aa {
     flex-direction: column !important;
     padding: 20px 10px !important;
     display: block !important;
     height: auto !important;
   }
   .aab {
     width: 100% !important;
     margin: 0 auto 20px !important;
     text-align: center;
   }
   .aab img {
     width: 80% !important;
     margin: 0 auto !important;
   }
   .aac {
     width: 100% !important;
     margin: 0 auto !important;
     padding: 20px 15px !important;
   }
 }
 
 
 
 
 
 
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
 
 
 
 
 
      
  *{
      margin: 0px;
      padding: 0px;
  }
  html {
 scroll-behavior: smooth;
 }
 ul li {
  list-style: none;
  display: inline;
  margin-left: 23px;
  font-size: 13px;
  color: #1E1E26;
  cursor:pointer;
 }
 </style>
  

  
  
  
   
 