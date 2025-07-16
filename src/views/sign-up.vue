<template>
    <div>
      <div class="bg- w-100" style="height: 635px; position:relative; background-color: #E8EEE9;">
        <img src="/public/c.png" style="position: absolute; z-index: 1; width: 100%; height: 100vh; opacity: 15%;" alt="">
                             <div class="bg-secndary d-flex w-100" style="height: 60px;position: absolute; z-index: 5; justify-content: space-between; padding: 20px 50px;">
    <div class="bg-warn" style="width: 180px;cursor:pointer; height: 40px; position: relative; padding: 10px 10px; margin-left: 20px;"><img src="/public/d.png" style="height: 20px; width: 20px; margin-left: 4px; margin-top:-1.5px; position: absolute;" alt=""> <h3 style="font-size: 14px;cursor:pointer; margin-left: 30px; color : #4D148C;">Zacrac <a style="color:#FF6600;">Learning </a></h3></div>
    
    <div class="bg-drk " style="width: 290px; height: 40px;margin-left: -120px; ">
        <ul >
            <li> Courses </li>
	<svg  style="margin-top:-2px;margin-left: -5px;cursor:pointer; " xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
		<path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z" /></svg>
            <li>Partners</li>
            <li>Contact us</li>
        </ul>
    </div>
    <button class="btn d-flex  ml-4 btn-sm" style="height: 33px; text-align:center;padding:  5px 20px 10px 18px;   margin-right: 30px;background: #4D148C;color: #FFFFFF; font-weight:bold;border-radius: 5px;"> <a style="font-size: 11px;margin-top:2px;">
      Start Learning </a><svg style="margin-top:3px;margin-left:6px;" xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 256 256"><path fill="#fff" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"/></svg></button>
                             </div>


            <div class="w-100 btn-secondry d-flex" style="height: 582px;justify-content: space-between; padding: 82px 40px;position: relative; position: absolute; ">
            <div class="  " style="height: 380px; margin-top: 58px;width: 490px; margin-left: 60px; position: relative;  z-index: 6; background-color: blu;">
              <img
          class="bg"
          style="height: 100%; width: 70%; margin-left: 142px;"
          src="/public/a.png"
          alt=""
        />
            </div>
            <div class="  ml-4" style="height: 485px; border-radius: 20px;width: 570px;margin-right: 30px; background-color: white; position: relative; z-index: 11;padding: 45px 30px; ">
                <h4 style="font-size: 18px;color : #4D148C;">Candidate Registration</h4> <p style=" font-size: 9px;color: #1D1D1D; ">Already have an account?<a  @click="$router.push('/sign-up')"  style="margin-left: 3px; color: #484ED1;cursor:pointer;">Login</a></p> 

                                <div class=" w-100" style="height: 45px; background: #F4FAFF; margin-top: -5px;border-radius: 8px;align-items: start;padding: 5px 10px;">
                                  <div class="d-flex" style="justify-content: space-between;"> <a style ="font-size: 11px;font-weight:500; color: #000000; ">Student</a> <svg  style="margin-top:-2px;margin-left: -5px;cursor:pointer; " xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z" /></svg></div>
                                   <p style = "font-size: 8px; color: #1D1D1DB2;">Learning a course</p>
                                </div>






                                <form @submit.prevent="signUpUser" class="form-group mt-3 w-100" style=" background-color: yelow;  height: 300px">
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
::placeholder{
 font-size: 9px;

}
</style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 