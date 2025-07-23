<template>
    
  <div class=" boom  w-100" style="height: 685px; position:relative;  background-color: #E8EEE9; ">
      <img class="lol" src="/public/c.png" style="position: absolute;  z-index: 1; width: 100%; height: 685px; opacity: 15%;" alt="">
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


          <div class="hi w-100 btn-secondry aa d-flex" style="height: 620px;justify-content: space-between; padding: 62px 40px;position: relative; position: absolute; ">
          <div class=" bg-primry aab" style="height: 380px; margin-top: 58px;width: 490px; margin-left: 60px; position: relative;  z-index: 6;">
            <img
        class="bg aaba"
        style="height: 100%; width: 70%; margin-left: 142px;"
        src="/public/b.png"
        alt=""
      />
          </div>
          <div class=" ml-4 aac" style="height: 505px; border-radius: 20px;width: 570px;margin-right: 30px; background-color: white; position: relative; z-index: 11;padding: 45px 30px; ">
              <h4 style="font-size: 18px;color : #4D148C;">Welcome Back</h4> <p style=" font-size: 9px; color: #1D1D1D;">Don't have an account?<a  @click="$router.push('/sign-in')" style="margin-left: 3px; color: #484ED1; cursor:pointer;">Create Account</a></p> 

                              <div class="d-flex w-100" style="height: 35px; background-color: purpe; margin-top: -5px; ">
                                  <button class=" btn btn-second" style="height: 35px; width: 240px; border-radius: 8px; font-size: 11px;font-weight: 400; color: black;border: solid gray 1px;background: #F4FAFF;"> Student</button>
                                  <button class="  btn  " style="height: 35px; width: 240px;border-radius: 8px; font-size: 13px;font-weight: 400; color: black; border: solid gray 1px;background-color: white ;margin-left: 30px;">Seller</button>
                              </div>






                              <form  @submit.prevent="login" class="form-group mt-3 w-100" style=" background-color: yelow;  height: 180px">
                                
                                <label for="input1" style="font-size: 11px; margin-bottom: 3px;">Email Address</label>
                              <input v-model="email"   type="email" id="input1" placeholder="Email" class="form-control w-100" style=" height:30px;border-radius: 8px;"><div class="error" v-if="errors.email">{{ errors.email}}</div>
                              
                                <label for="input2" style="font-size: 11px; margin-top:16px;margin-bottom: 3px; ">Password</label>
                                  <input v-model="password"   type="password" id="input3 " placeholder="Password" class="form-control w-100" style="height:30px; border-radius: 8px;"> <div class="error" v-if="errors.password ">{{ errors.password }}</div>                                                                                                    
                      
                                   
                                      <p style="margin-top: 6px;font-weight: small; font-size: 12px; color: var(--Error-Error300, #8C1823); cursor: pointer; text-align: end; cursor:pointer;">Forgot Password?</p>
                                
                                  
                                  <button :disabled="loading" type="submit" class="btn  w-100 " style="height: 40px; border-radius: 8px;background: #4D148C;color: #FFFFFF;margin-top: 11px;
                                      font-weight: bold;font-size: 14px;"><span v-if="loading">Loading...</span>
                                      <span style="font-family:jali greeek;" v-else>Sign in</span> 
                                    </button> 
                                    <p v-if="error">{{ error }}</p>




                                    <p style=" font-size: 10px; font-weight: 700;  text-align:center;margin-top: 24px;">OR</p>
          <div class="google" style="">
            <div
              class="btn btn-md"
              style="
                border: 0.1px solid rgb(188, 183, 183);
                width: 170px;
                border-radius: 7px;
                color: black;
                font-weight: 700;
                font-size: 8px;
                margin-left: 170px;
              "
             ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
          
              <a  style="margin-left: 3px;">Sign up with Goggle</a>
            </div>
        
          </div>

         

          <p style="font-size: 10px; text-align: center; margin-top: 21px; font-weight: 700">
           Don't have an account? &nbsp;<a @click="$router.push('/sign-up')" style="cursor: pointer; color: gray;font-family:  SUSHI Stroke, sans-serif;">sign up</a>
          </p>
                          </form>
                        </div>
          </div>

  </div>
</template>


<script>                                                       
export default {
data() {
  return {
    email: '',
    password: '',
    loading: false,
    error: null,
    errors: {}
  }
},
methods: {
  async login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }
    if (!emailRegex.test(this.email)) {
      this.error = 'Invalid email format';
      return;
    }
    this.loading = true;
    this.error = null;
    this.errors = {};
    try {
      const response = await fetch('https://zacracebookwebsite.onrender.com/ebook/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
         
          alert("Sign in was successful")
          this.$router.push('/');
        } else {
          this.error = 'Invalid credentials';
        }
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          this.errors = errorData.errors;
        } else {
          this.error = errorData.message || 'An error occurred';
        }
      }
    } catch (e) {
      console.error(e);
      this.error = 'An error occurred';
    } finally {
      this.loading = false;
    }
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
        .boom{
         height: 600px !important; 
         background-color: #E8EEE9 !important;
       }
       .hi{
        height: 700px !important; 
       
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
         height: 750px !important; 
         background-color: #E8EEE9 !important;
       }
     .hi{
         height: 610px !important;
         background-color: #E8EEE9 !important;
       }
       .google{
          margin-left:-30px !important;
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

            
        }.boom{
         height: 750px !important; 
       
       }.google{
          margin-left:-39px !important;
       }
       .hi{
         height: 610px !important;
         background-color: #E8EEE9 !important;
       }
           
     }
     



     @media (max-width: 1000px) {

         .zac{
           
            margin-top:-7px !important;
             
         }
         .aaba {
           
           margin-left:120px !important;

            
        }.google{
          margin-left:-80px !important;
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
        
           .boom {
         height: 770px !important;
         
       }
       .lol{
        height: 770px !important;

       }
     .hi{
         height: 610px !important;
         
         
       }.google{
          margin-left:-110px !important;
       }

       
     }





     @media (max-width: 800px) {

       .hi{
        background-color: #E8EEE9 !important;

       }
       
       .boom{
         height: 700px !important;
       }
       .navbar-btn {
   margin-left: 22px;
   margin-top: -10px;

   width: 130px;
   font-size:10px !important;
 }
 .navbar-logo {
 margin-top: -10px;
 cursor: pointer;
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

     .navbar {
 
 padding: 15px 20px !important;

}  
.google{
          margin-left:-140px !important;
       }

     }


     @media (max-width: 732px) {

.hi{
  background-color: pure!important;
  height: 690px !important;

}
.lol{
  height: 735px !important;
}
.boom{
  height: 750px !important;
  background-color: #E8EEE9 !important;

}

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
.google{
          margin-left:-140px !important;
       }

    }
   






    @media (max-width: 722px) {

.hi{
  background-color: Purle!important;
}
.lol{
  height: 690px !important;
}
.boom{
  height: 770px !important;
  background-color: #E8EEE9 !important;

}
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
.google{
          margin-left:70px !important;
       }


}

     

     @media (max-width: 700px) {
 .bg-secndary {
   padding: 5px;
  
 }
 .hi{
 background-color: le!important;}

   .lol{
         height: 1150px !important;
         
       }
       .boom{
         height: 1250px !important;
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
 .google{
          margin-left:30px !important;
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
       .google{
          margin-left:-30px !important;
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