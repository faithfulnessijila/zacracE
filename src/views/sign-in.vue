<template>
    
    <div class="bg- w-100" style="height: 100vh; position:relative;  background-color: #E8EEE9; ">
        <img src="/public/c.png" style="position: absolute; z-index: 1; width: 100%; height: 100vh; opacity: 15%;" alt="">
                             <div class="bg-secondry d-flex w-100" style="height: 60px;position: absolute; z-index: 5; justify-content: space-between; padding: 10px 50px;">
    <div class="bg-warnng" style="width: 180px; height: 40px; position: relative; padding: 10px 10px; margin-left: 20px;"><img src="/public/d.png"  style="height: 20px; width: 20px;margin-left: 4px; margin-top:-1.5px; position: absolute;" alt=""> <h3 style="font-size: 14px; margin-left: 30px; color : #4D148C;">Zacrac <a style="color:#FF6600;">Learning </a></h3></div>
    
    <div class="bg-da " style="width: 280px; height: 40px;margin-left: -30px;">
        <ul >
            <li>Courses</li>
            <li>Partners</li>
            <li>Contact us</li>
        </ul>
    </div>
    <div class="btn d-flex  ml-4 btn-sm" style="height: 33px; width: 115px;margin-right: 30px;background: #4D148C;color: #FFFFFF; font-weight:700;text-align: center ;font-size: 1px; "> Start Learning<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="#fff" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"/></svg></div>
                             </div>


            <div class="w-100 btn-secondry d-flex" style="height: 582px;justify-content: space-between; padding: 73px 50px;position: relative; position: absolute; ">
            <div class=" bg-primry " style="height: 380px; margin-top: 64px;width: 490px; margin-left: 60px; position: relative;  z-index: 6;">
              <img
          class="bg"
          style="height: 100%; width: 70%; margin-left: 142px;"
          src="/public/b.png"
          alt=""
        />
            </div>
            <div class=" ml-4" style="height: 470px; border-radius: 20px;width: 570px;margin-right: 30px; background-color: white; position: relative; z-index: 11;padding: 55px 30px; ">
                <h4 style="font-size: 18px;color : #4D148C;">Welcome Back</h4> <p style=" font-size: 11px; color: #1D1D1D;">Don't have an account?<a  @click="$router.push('/sign-in')" style="margin-left: 3px; color: #484ED1; cursor:pointer;">Create Account</a></p> 

                                <div class="d-flex w-100" style="height: 35px; background-color: purpe; margin-top: -5px; ">
                                    <div class=" btn btn-second" style="height: 35px; width: 240px; border-radius: 8px; font-size: 13px; color: black;border: solid gray 1px;background: #F4FAFF;"> Student</div>
                                    <div class="  btn  " style="height: 35px; width: 240px;border-radius: 8px; font-size: 13px; color: black; border: solid gray 1px;background-color: white ;margin-left: 30px;">Seller</div>
                                </div>






                                <form  @submit.prevent="login" class="form-group mt-4 w-100" style=" background-color: yelow;  height: 180px">
       
                                  <label for="input1" style="font-size: 14px; margin-bottom: 3px;">Email Address</label>
                                <input v-model="email"   type="email" id="input1" placeholder="Email" class="form-control w-100" style=" height:38px;;border-radius: 8px;"><div class="error" v-if="errors.email">{{ errors.email}}</div>
                                
                                  <label for="input2" style="font-size: 14px; margin-top:20px;margin-bottom: 3px; ">Password</label>
                                    <input v-model="password"   type="password" id="input3 " placeholder="password" class="form-control w-100" style="height:38px; border-radius: 8px;"> <div class="error" v-if="errors.password ">{{ errors.password }}</div>                                                                                                    
                        
                                     
                                        <p style="margin-top: 6px;font-weight: small; font-size: 13px; color: var(--Error-Error300, #8C1823); cursor: pointer; text-align: end; cursor:pointer;">Forgot Password?</p>
                                  
                                    
                                    <button :disabled="loading" type="submit" class="btn  w-100 " style="height: 40px; border-radius: 8px;background: #4D148C;color: #FFFFFF;
                                        font-weight: bold;font-size: 14px;"><span v-if="loading">Loading...</span>
                                        <span style="font-family:jali greeek;" v-else>Sign in</span> 
                                      </button> 
                                      <p v-if="error">{{ error }}</p>
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
        const response = await fetch('', {
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
  }
</style>
  
  
  
  
  
  
  
  
  
  
  
  