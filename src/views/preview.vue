<template>
    <div>
      
  
    
      <nav
      class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 py-3"
      style="
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        display: block;
        padding: 10px 90px !important;
      "
    >
      <div class="container-fluid container-fluid1">
       
        <div class="navbar-logo">
          <img
            src="/public/d.png"
            style="margin-top: -10px !important"
            alt="Logo"
            class="logo-icon"
          />
          <h3 class="logo-text" style="font-size: 20px">
            Zacrac <span>Learning</span>
          </h3>
        </div>

        
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-label="Toggle navigation"
          style="
            background-color: #4d148c;
            padding: 6px 10px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="40"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>

    
      
          <form
            class="d-flex w-100 w-lg-auto mx-lg-4 mb-3 mb-lg-0"
            style="max-width: 400px;"
          >
            <div class="input-group">
              <input
  type="text"
  style="font-size: 10px; "
  class="form-control rounded-0"
  placeholder="Search on Zacrac Learning"
  aria-label="Search"
/>

              <button
                class="btn rounded-0"
                type="button"
                style="background-color: #313131; border-color: #313131"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.9 7.9 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96s3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div
          class="collapse navbar-collapse mt-3 mt-lg-0"
          id="mainNavbar"
          ref="navbarCollapse"
        >
         
          <ul
            class="navbar-nav ms-auto d-flex align-items-center gap-3 flex-wrap"
          >
          
            <li class="nav-item text-center">
              <a
                class="nav-link text-dark d-flex flex-column align-items-center"
                href="#"
              >
                <svg
                  style="color: gray !important"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#494848"
                    d="m278.574 20.672l-28.246 43.463c-36.452-29.484-87.944-38.624-127.96-30.428c-54.457 11.15-100.166 60.347-97.895 131.46c2.394 74.955 54.71 129.71 104.89 174.823c25.09 22.554 50.84 43.086 69.928 61.535c37.685 34.062 55.942 92.366 55.942 92.366s24.534-59.502 55.942-89.572c19.692-18.7 45.676-39.61 71.324-62.93c51.298-46.644 104.404-104.034 102.094-177.618c0-122.308-121.2-121.013-167.883-78.495c19.323-10.226 40.12-12.397 58.798-8.214c34.297 7.683 62.693 35.935 64.332 88.108c1.562 49.92-39.09 98.088-88.11 142.654c-24.508 22.28-49.752 42.445-71.324 62.93c-11.456 10.884-16.74 20.514-25.174 31.795c-8.437-11.983-13.663-22.066-25.173-33.192C174.715 306.4 86.784 238.475 83.27 163.77c-.72-62.22 72.103-78.604 111.246-51.04l-45.924 25.258c67.393 11.144 124.746 37.36 185.597 75.588L278.573 20.672z"
                  />
                </svg>
                <small>Wishlist</small>
              </a>
            </li>

         
            <li class="nav-item text-center">
              <a
                class="nav-link text-dark d-flex flex-column align-items-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#494848"
                    d="M2.997 3.496a.5.5 0 0 1 .5-.5h.438c.727 0 1.145.473 1.387.945c.165.323.284.717.383 1.059H16a1 1 0 0 1 .962 1.272l-1.496 5.275A2 2 0 0 1 13.542 13H8.463a2 2 0 0 1-1.93-1.473l-.642-2.355l-.01-.032l-1.03-3.498l-.1-.337c-.1-.346-.188-.652-.32-.909c-.159-.31-.305-.4-.496-.4h-.438a.5.5 0 0 1-.5-.5M6.845 8.87l.653 2.396a1 1 0 0 0 .965.736h5.08a1 1 0 0 0 .961-.727L16 6H6zM10 15.499a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m6 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"
                  />
                </svg>
                <small>Cart</small>
              </a>
            </li>

           
            <li class="nav-item text-center">
              <button
                @click="$router.push('/sign-up')"
                class="btn text-white fw-semibold px-3 py-2 w-100"
                style="
                  border-radius: 0;
                  font-size: 14px;
                  background-color: #4d148c;
                "
              >
                Create account
              </button>
              <span class="d-block mt-1 text-muted" style="font-size: 13px">
                Have an account?
                <a
                  @click="$router.push('/sign-in')"
                  href="#"
                  class="fw-semibold"
                  style="color: #4d148c"
                  >Sign in</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>


    
      <div class="container-fluid">
        <ul class="dropdowns-container" style="margin-top: 10px">

          
         
          <li class="custom-dropdown" style="list-style: none !important">
            <a
              href="#"
              @click="closeNavbar"
              style="
                font-family: 'Georgia', serif;
                font-size: 20px;
                font-style: italic;
                font-weight: bold;
                color: black;
                letter-spacing: 2px;
                text-transform: capitalize;
                text-decoration: none;
              "
              class="nav-toggle no-bullets"
            >
              eBooks
              <span class="arrow" style="font-size: 16px; color: black"
                >&#9662;</span
              >
            </a>

            <ul class="big-dropdown">
              <li v-for="(category, index) in categories" :key="index">
                <a href="#">{{ category }}</a>
              </li>
            </ul>
          </li>

         
          <li class="custom-dropdown" style="list-style: none !important">
            <a
              href="#"
              @click="closeNavbar"
              style="
                font-family: 'Georgia', serif;
                font-size: 20px;
                font-style: italic;
                font-weight: bold;
                color: black;
                letter-spacing: 2px;
                text-transform: capitalize;
                text-decoration: none;
              "
              class="nav-toggle no-bullets"
            >
              AUDIOBOOKS
              <span class="arrow" style="font-size: 16px; color: black"
                >&#9662;</span
              >
            </a>

            <ul class="big-dropdown">
              <li v-for="(category, index) in categories" :key="index">
                <a href="#">{{ category }}</a>
              </li>
            </ul>
          </li>
        </ul>
     
    </div>
    </nav>
  
      <div class="container my-5 p-3">
  <h4 class="mb-4">
    A tale of magic and intrigue
  </h4>

  <div class="row g-3">
   
    <div class="col-12 col-md-4 d-flex align-items-center justify-content-center" 
         style="background-color: lightblue; height: 400px;">
      <img 
        src="/club3.jpg" 
        alt="The Familiar Cover" 
        style="width: 50%; height: auto; transition: filter 0.3s ease; display: block; cursor: pointer;" 
        onmouseover="this.style.filter='brightness(85%)'" 
        onmouseout="this.style.filter='brightness(100%)'"
      >
    </div>

 
    <div class="col-12 col-md-8" 
         style="background-color: white; padding: 20px; height: 400px; overflow-y: auto; border: 1px solid #ccc;">
      <h2 class="fw-bold">The Familiar</h2>

      <p class="mb-1 text-muted tw-bold" style="font-size: 15px; color: black">
        The richly imagined, spellbinding new Sunday Times bestselling novel from the author of <br> Ninth House
      </p>

      <p class="text-muted" style="font-size: 15px;">
        by <strong style="text-decoration: underline; cursor: pointer;">Leigh Bardugo</strong>
      </p>

      <div style="font-size: 22px; margin-top: -4px">
       <span style="color:#FFD700;">★</span>
       <span style="color:#FFD700;">★</span>
       <span style="color:#FFD700;">★</span>
       <span style="color:#FFD700;">★</span>
        <span style="color: #ccc">★</span>
        &nbsp;
        <a class="text-muted" style="font-size: 14px; text-decoration: none;">(31)</a>
      </div>

      <blockquote class="text-muted mt-2" style="font-size: 15px">
        AN INSTANT SUNDAY TIMES BESTSELLER 
        ‘A richly imagined, intricate tale of <br> magic and intrigue’ — Deborah Harkness, #1 bestselling author of A Discovery<br> of Witches
        ‘Riveting… Leigh Bardugo's characters are so three dimensional you ...
      </blockquote>

      <p
        style="font-weight: bold; color: black; text-decoration: underline; cursor: pointer; font-size: 15px;">
        Read more
      </p>

      <p class="fw-bold mt-3" style="font-size: 30px; color: black">$6.79</p>
    </div>
  </div>
</div>
    </div>
  
  
  
  
  
  
  
  
  
  
<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-6 col-sm-12">
      <div class="p-5 bg-secondary rounded-3 shadow-sm text-center text-white">
        <h2 class="fw-bold mb-3">Review</h2>

        <!-- Rating Stars -->
        <div class="mb-4">
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star empty">★</span>
        </div>

        <!-- Review Input -->
        <div class="input-group input-group-lg">
          <input 
            type="text" 
            class="form-control fw-bold placeholder-bold" 
            placeholder="Write review" 
            aria-label="Write review"
          >
          <button class="btn btn-light fw-bold" type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>





  
  
  
  

    <div class="container my-5">

<div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>

<div class="d-flex justify-content-between align-items-center flex-wrap py-4 mt-3">
  <p class=" fw-semibold text-black mb-0" style="font-size:18px;">All Book Reviews</p>
  <div class="d-flex flex-wrap gap-3">
    <div class=" rounded" style="background-color: gray;">
  <select class="form-select border-0 shadow-none d-inline-block w-auto text-white fw-bold" style="background-color: transparent; font-size:12px; padding-top: 10px;">
    <option class="text-black " style="font-size:11px;">Filter by: All</option>
    <option class="text-black " style="font-size:11px;">5 Stars</option>
    <option class="text-black " style ="font-size:11px;">4 Stars & Up</option>
  </select>
</div>

<div class="rounded p-1" style="background-color: gray;">
  <select 
    class="form-select border-0 shadow-none d-inline-block w-auto text-white fw-bold" 
    style="background-color: transparent; font-size:12px; cursor: pointer;">
    <option class="text-black" style="font-size:11px;">Sort By: Most Helpful</option>
    <option class="text-black" style="font-size:11px;">Newest</option>
    <option class="text-black" style="font-size:11px;">Oldest</option>
  </select>
</div>

  </div>
</div>


<div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>


<div class="row gy-4 mt-2">
  
  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> Michael B.</h5>
  <div>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      “Love comes in so many different forms, but it is always love. If it is love, then it is love.” 
      I hope one day<br> to catch up on all Elizabeth Strout’s work. I have enjoyed the last few releases 
      and love her down-to-earth <br>characters and the relationships they wrap themselves in. With 
      <em>Tell Me Everything</em> she brings show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 10, 2024</p>
  </div>

    
  </div>
</div>

  <div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>


  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> VB M</h5>
  <div>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      I’ve only read one of Strout’s previous novels, I selected this based on the Maine setting. I enjoy the
      uniqueness of that region. It’s a thought provoking story of what life is and people’s relationships. The age
      old adage ‘the heart wants what the heart wants’ comes to mind. Bob and Lucy both hav show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 12, 2024</p>
  </div>

    
</div> </div>
</div>
<div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>




<div class="row gy-4 mt-2">
  
  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> Michael B.</h5>
  <div>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      “Love comes in so many different forms, but it is always love. If it is love, then it is love.” 
      I hope one day<br> to catch up on all Elizabeth Strout’s work. I have enjoyed the last few releases 
      and love her down-to-earth <br>characters and the relationships they wrap themselves in. With 
      <em>Tell Me Everything</em> she brings show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 10, 2024</p>
  </div>
    
  </div>
</div>

  <div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>


  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> VB M</h5>
  <div>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      I’ve only read one of Strout’s previous novels, I selected this based on the Maine setting. I enjoy the
      uniqueness of that region. It’s a thought provoking story of what life is and people’s relationships. The age
      old adage ‘the heart wants what the heart wants’ comes to mind. Bob and Lucy both hav show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 12, 2024</p>
  </div>

    
</div> </div>
</div>
<div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>






<div class="row gy-4 mt-2">
  
  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> Michael B.</h5>
  <div>
    <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      “Love comes in so many different forms, but it is always love. If it is love, then it is love.” 
      I hope one day<br> to catch up on all Elizabeth Strout’s work. I have enjoyed the last few releases 
      and love her down-to-earth <br>characters and the relationships they wrap themselves in. With 
      <em>Tell Me Everything</em> she brings show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 10, 2024</p>
  </div>
  

    
  </div>
</div>

  <div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>


  <div class="col-md-12">
  <div class="">
    <div class="d-flex align-items-center justify-content-between mb-2">
  <h5 class="fw-bold mb-0"> VB M</h5>
  <div>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
   <span style="color:#FFD700;">★</span>
    <span style="color: #ccc;">★</span>
  </div>
</div>
   
    <p class="text-muted mb-2">
      I’ve only read one of Strout’s previous novels, I selected this based on the Maine setting. I enjoy the
      uniqueness of that region. It’s a thought provoking story of what life is and people’s relationships. The age
      old adage ‘the heart wants what the heart wants’ comes to mind. Bob and Lucy both hav show more...
    </p>
    <div class="d-flex justify-content-between align-items-center mt-5">
    <div>
      <div>
    <button class="btn btn-sm me-2 btn-like">👍 12</button>
    <button class="btn btn-sm btn-dislike">👎 2</button>
  </div>
    </div>
    <p class="small text-muted   text-end">September 12, 2024</p>
  </div>
 

    
</div> </div>
</div>
<div style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"></div>



</div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      <div class="bg-secondary text-white py-5 mt-5">
    <div class="container">
      <div class="row">
       
        <div class="col-12 col-md-3 mb-4">
          <h5 class="mb-3 ">All about Rakuten Kobo</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-underline">About Rakuten Kobo</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Management Team</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Kobo in Conversation Podcast</a></li>
            <li><a href="#" class="text-white text-decoration-underline">eRecycling Program</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Free Apps</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Buy eGift Cards</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Get Help</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Sitemap</a></li>
          </ul>
        </div>
  
        <div class="col-12 col-md-3 mb-4">
          <h5 class="mb-3 ">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-underline">Blog</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Pricing</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Instructors</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Careers</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Affiliate Program</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Support</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Terms & Condition</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Privacy Policies</a></li>
  
  
  
          </ul>
        </div>
  
     
        <div class="col-12 col-md-3 mb-4">
          <h5 class="mb-3 ">Ways to learn</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-underline">self-placed Courses</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Incubator Programs</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Cohort-based Courses</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Enterprise Learning</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Career-building Paths</a></li>
            
          </ul>
        </div>
  
      
        <div class="col-12 col-md-3 mb-4">
          <h5 class="mb-3 ">Courses</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-underline">MS Excel</a></li>
            <li><a href="#" class="text-white text-decoration-underline">R</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Power Bi</a></li>
            <li><a href="#" class="text-white text-decoration-underline">Python</a></li>
            <li><a href="#" class="text-white text-decoration-underline">SQL</a></li>
  
          </ul>
        </div>
      </div>
    </div>
  </div>
  





  
  </template>
 <script>
 import axios from "axios";
 import Carousel from "../components/carousel.vue";
 export default {
   components: {
     Carousel,
   },
   data() {
     return {
       categories: "",
     };
   },
 
   beforeUnmount() {
     document.removeEventListener("click", this.handleClickOutside);
   },
   methods: {
     toggleNavbar() {
       this.bsCollapse.toggle();
     },
     closeNavbar() {
       if (
         this.bsCollapse &&
         this.$refs.navbarCollapse.classList.contains("show")
       ) {
         this.bsCollapse.hide();
       }
     },
     handleClickOutside(event) {
       const navbar = this.$refs.navbarCollapse;
       if (
         navbar &&
         navbar.classList.contains("show") &&
         !navbar.contains(event.target) &&
         !event.target.closest(".navbar-toggler")
       ) {
         this.bsCollapse.hide();
       }
     },
     setupMultiCardCarousel() {
       const items = document.querySelectorAll(
         "#multiCardCarousel .carousel-item"
       );
 
       items.forEach((el) => {
         const minPerSlide = 3; 
         let next = el.nextElementSibling;
 
         for (let i = 1; i < minPerSlide; i++) {
           if (!next) {
             next = items[0]; 
           }
           const cloneChild = next.firstElementChild.cloneNode(true);
           el.appendChild(cloneChild);
           next = next.nextElementSibling;
         }
       });
     },
     async api() {
       try {
         const response = await axios.get(
           "https://zacracebookwebsite.onrender.com/ebook/products",
 
           {
             headers: {
               "Content-Type": "application/json",
             },
           }
         );
         this.categories = response.data.categories;
         console.log(response);
       } catch (error) {
       } finally {
       }
     },
   },
   mounted() {
    const navbarEl = document.getElementById("mainNavbar");
    this.bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarEl, {
      toggle: false,
    });

    document.addEventListener("click", this.handleClickOutside);
    this.setupMultiCardCarousel();
    this.api();

  
    window.scrollTo(0, 0);
  },
 };
 </script>

 <style scoped>
   .btn-like {
    border: 1px solid #4d148c;
    color: #4d148c;
    background: transparent;
    transition: all 0.3s ease;
  }
  .btn-like:hover {
    background: #4d148c;
    color: #fff;
  }


  .btn-dislike {
    border: 1px solid #dc3545;
    color: #dc3545;
    background: transparent;
    transition: all 0.3s ease;
  }
  .btn-dislike:hover {
    background: #dc3545;
    color: #fff;
  }

  .placeholder-bold::placeholder {
    font-weight: bold;
    color: #666;
  }

 
  .rating-star {
    color: #FFD700; 
    font-size: 2rem;
    margin: 0 3px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .rating-star.empty {
    color: #ccc; 
  }

  .rating-star:hover {
    transform: scale(1.2);
  }
  
  
  
  .hover-card {
      transition: box-shadow 0.3s ease;
    }
  
    .hover-card:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  
    .hover-card:hover .col-md-8 {
      border: none !important;
    }
  
  .custom-cart-btn {
    background-color: #6c757d; 
    color: white; 
    border: none;
    border-radius: 8px;
    font-size: 13px;
    transition: all 0.3s ease;
  }
  
  .custom-cart-btn:hover {
    background-color: #5a6268;
    color: white;
    border: 1px solid white;
  }
  
  .custom-cart-btn:active {
    background-color: #545b62; 
    border: 2px solid white;
  }
  
  .hover-red-bold {
    font-weight: bold;
  
    color: black;
    transition: color 0.2s ease;
    cursor: pointer;
  }
  .hover-red-bold:hover {
    color: #4d148c;
  }
  
  .navbar-toggler:focus {
    box-shadow: none !important;
    outline: none !important;
  }
  
  .dropdowns-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem 0;
  }
  
  .custom-dropdown {
    position: relative;
  }
  
  .nav-toggle {
    color: black;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    list-style: none;
  }
  
  .arrow {
    margin-left: 5px;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
 
  .custom-dropdown:hover .nav-toggle,
  .custom-dropdown:hover .arrow {
  color: #4d148c !important;
  }
  
  .custom-dropdown:hover .arrow {
    transform: rotate(180deg);
  }
  .big-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    display: none; 
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    gap: 10px;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    list-style: none;
    min-width: 360px;
    max-width: 600px;
    font-size: 14px;
    word-wrap: break-word;
  }
  
  .custom-dropdown:hover .big-dropdown {
    display: grid;
  }
  
  .big-dropdown li {
    list-style: none;
  }
  
  .big-dropdown a {
    display: block;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #f1f1f1;
    color: #333;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    white-space: normal;
    word-break: break-word; 
    text-align: left;
  }
  
  .big-dropdown a:hover {
    background-color: #4d148c;
    color: white;
  }
  
  @media (max-width: 752px) {
    .big-dropdown {
      display: none !important;
    }
    .custom-dropdown:hover .nav-toggle,
    .custom-dropdown:hover .arrow {
      color: black !important;
    }
    .arrow {
      display: none !important;
    }
  }
  

  .custom-dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0.5rem;
  }
  
  
  .big-dropdown {
    min-width: 100%;
    max-width: 500px;
    columns: 2;
    padding: 20px;
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid #dee2e6;
    z-index: 1000;
  }
  

  @media (max-width: 576px) {
    .big-dropdown {
      columns: 1;
      width: 100%;
    }
  }
  
 
  .custom-dropdown:hover .nav-toggle {
    color: #4d148c;
  }
  
  .custom-dropdown:hover .arrow {
    transform: rotate(180deg);
    color: #4d148c;
  }
  
  
  .arrow {
    margin-left: 6px;
    transition: transform 0.3s ease;
  }
  
  .custom-dropdown-item {
    font-size: 12px;
  }
  
  .custom-dropdown-item:hover {
    color:  #4d148c !important; 
    background-color: #f8f9fa; 
  }
  .custom-underline {
    position: relative;
    text-decoration: none;
  }
  
  .custom-underline:hover {
    text-decoration: underline;
    color: green !important;
    font-weight: small !important;
  }


  @media (max-width: 720px) {
  .navbar-logo {
    margin-left: -40px !important;
  }
}

@media (max-width: 438px) {
  .navbar-logo {
    font-size: 14px !important;
    margin-left: -100px !important;
   
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 260px !important;
  }
}
@media (max-width: 424px) {
  .navbar-logo {
    font-size: 14px !important;
    margin-left: -105px !important;
   
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 240px !important;
  }
}
@media (max-width: 398px) {
  .navbar-logo {
    font-size: 14px !important;
    margin-left: -190px !important;
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 210px !important;
  }
}
@media (max-width: 375px) {
  .navbar-logo {
    font-size: 14px !important;
    margin-left: -160px !important;
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 200px !important;
  }
}
@media (max-width: 374px) {
  .navbar-logo {
    font-size: 14px !important;
    margin-left: -190px !important;
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 200px !important;
  }
}
@media (max-width: 342px) {
  .navbar-logo {
   
    margin-left: -240px !important;
  }
  .logo-text {
    font-size: 15px !important;
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 170px !important;
  }
}
@media (max-width: 336px) {
  .navbar-logo {
    margin-left: -240px !important;
  }
  .logo-text {
    font-size: 15px !important;
  }
  .navbar-toggler {
    margin-top: -55px !important;
    margin-left: 160px !important;
  }
}

@media (max-width: 1132px) {
 .container-fluid{
  padding: 10px 1px !important;
 
 }

}

@media (max-width: 1043px) {
.navbar{
  padding: 10px 40px !important;
}

}
@media (max-width: 1110px) {

.navbar-nav {
 
   display: none !important;
 
 }
 .input-group {
 margin-left:20px !important;
 
}


}
@media (max-width: 990px) {


.input-group {
margin-top : 15px !important;

}


}

@media (max-width: 992px) {
 
  .navbar-toggler {
    display: none !important;
   
  }
}
@media (max-width: 816px) {
 
 .navbar-toggler {
   display: block !important;
  
 }
 .navbar-nav {
 
 display: block !important;

}
}
.placeholder-bold::placeholder {  font-weight: bold;
}




  </style>
  