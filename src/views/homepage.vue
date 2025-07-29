<template>
    <div>

      <div class=" py-1 px-3 px-md-5" style="background-color:#d9d9d9;height:34px;">
  <div class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

    
    <div class="w-100 w-md-auto text-center text-md-start">
      <a class="text-danger fw-bold custom-underline" style="font-size: 17px;">
        Earn Rewards
      </a>
    </div>

   
    <div class="w-100 w-md-auto text-center text-md-end">
      <ul class="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end align-items-center mb-0 gap-2 gap-md-4">
        
       
        <li class="dropdown">
          <a class="dropdown-toggle text-danger text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="font-weight: 500;">
            English
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item custom-dropdown-item text-muted" href="#">English</a></li>
            <li><a class="dropdown-item custom-dropdown-item text-muted" href="#">French</a></li>
            <li><a class="dropdown-item custom-dropdown-item text-muted" href="#">Spanish</a></li>
          </ul>
        </li>

       
        <li><a href="#" class="text-decoration-none text-muted" style="font-weight: 500;">Gift Cards</a></li>
        <li><a href="#" class="text-decoration-none text-muted" style="font-weight: 550;">Blog</a></li>
        <li><a href="#" class="text-decoration-none text-muted" style="font-weight: 500;">Help</a></li>

      </ul>
    </div>

  </div>
</div>





      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4" 
     style="box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); height:170px;">
       <div class="container-fluid">

    <!-- Brand -->
    <a class="navbar-brand fw-bold text-danger" href="#" style="font-size: 20px;">
      Rakuten Kobo
    </a>

    <!-- Toggler (hamburger) -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbarContent">

      <!-- Search input -->
      <form class="d-flex mx-lg-4 w-100 justify-content-lg-start mb-3 mb-lg-0" style="max-width: 400px;">
        <div class="input-group w-100">
          <input 
            type="text" 
            class="form-control rounded-0" 
            placeholder="Search on Kobo" 
            aria-label="Search">
          <button 
            class="btn btn-outline-secondary rounded-0" 
            type="button" 
            style="background-color: #313131; border-color: #313131;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="#fff"
                d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.9 7.9 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96s3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96" />
            </svg>
          </button>
        </div>
      </form>

      <!-- Links and Button -->
      <ul class="navbar-nav ms-auto d-flex align-items-center gap-3">
        <li class="nav-item">
          <a class="nav-link text-dark text-center d-flex flex-column align-items-center" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
    <path fill="#494848" d="m278.574 20.672l-28.246 43.463c-36.452-29.484-87.944-38.624-127.96-30.428c-54.457 11.15-100.166 60.347-97.895 131.46c2.394 74.955 54.71 129.71 104.89 174.823c25.09 22.554 50.84 43.086 69.928 61.535c37.685 34.062 55.942 92.366 55.942 92.366s24.534-59.502 55.942-89.572c19.692-18.7 45.676-39.61 71.324-62.93c51.298-46.644 104.404-104.034 102.094-177.618c0-122.308-121.2-121.013-167.883-78.495c19.323-10.226 40.12-12.397 58.798-8.214c34.297 7.683 62.693 35.935 64.332 88.108c1.562 49.92-39.09 98.088-88.11 142.654c-24.508 22.28-49.752 42.445-71.324 62.93c-11.456 10.884-16.74 20.514-25.174 31.795c-8.437-11.983-13.663-22.066-25.173-33.192C174.715 306.4 86.784 238.475 83.27 163.77c-.72-62.22 72.103-78.604 111.246-51.04l-45.924 25.258c67.393 11.144 124.746 37.36 185.597 75.588L278.573 20.672z" />
  </svg>
  <small class="mt-1">Wishlist</small>
</a>

        </li>
        <li class="nav-item">
          <a class="nav-link text-dark text-center d-flex flex-column align-items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
	<path fill="#494848" d="M29.02 11.754L8.416 9.474L7.16 4.715a.76.76 0 0 0-.727-.558H3.34a1.21 1.21 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.28 3.28 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.2 3.2 0 0 0-.093-.743h5.533a3.3 3.3 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.28 3.28 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2 2 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.3.3 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.3.3 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277" />
</svg>
  <small class="mt-1">Cart</small>
</a>

        </li>
        <li class="nav-item">
  <button 
    type="button" 
    class="btn btn-danger text-white fw-semibold px-4 py-2 w-100" 
    style="border-radius: 0; font-size: 14px; max-width: 220px;">
    Create account
  </button>
  <br>
  <span class="text-muted" style="font-size: 14px;">
    Have an account? 
    <a href="#" class="text-danger fw-semibold">Sign in</a>
  </span>
</li>

      </ul>
    </div>
  </div>
</nav>

  
   
  

  
    
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .custom-dropdown-item {
    font-size: 12px;
  }

  .custom-dropdown-item:hover {
    color: red !important; /* Change to green on hover */
    background-color: #f8f9fa; /* Optional: lighter background on hover */
  }
  .custom-underline {
  position: relative;
  text-decoration: none;
}



.custom-underline:hover {
  text-decoration: underline;
  color: green !important;
  font-weight:small !important;
}

  </style>
  