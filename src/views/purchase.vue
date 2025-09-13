<template>
    <div>
      
      <nav
    class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 py-3"
    style="box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); display: block; padding: 10px 90px !important;"
  >
  <div class="container-fluid container-fluid1 d-flex align-items-center justify-content-between flex-wrap">
  
  <!-- Logo on the left -->
  <div class="navbar-logo d-flex align-items-center">
    <img src="/public/d.png" alt="Logo" class="logo-icon" style="margin-top: -10px;" />
    <h3 class="logo-text ms-2" style="font-size: 20px;">Zacrac <span>Learning</span></h3>
  </div>
  
  <!-- Right side: Account / Profile -->
  <div class="d-flex align-items-center gap-3 flex-wrap">
  
    <!-- Guest Buttons -->
 <div v-if="!user" class="d-flex flex-row align-items-center gap-2 guest-buttons">
  <button 
    @click="$router.push('/sign-up')" 
    class="btn text-white fw-semibold px-3 py-2"
    style="border-radius: 4px; background-color: #4d148c;">
    Create account
  </button>
  <span class="text-muted small">
    Have an account? 
    <a @click="$router.push('/sign-in')" href="#" class="fw-semibold" style="color: #4d148c;">Sign in</a>
  </span>
</div>
  
    <!-- Profile Dropdown -->
    <div v-if="user" class="nav-item dropdown profile-dropdown" style="list-style: none;">
      <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
        <i class="bi bi-person-circle fs-3 text-dark"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 p-3" style="width: 250px;">
        <li class="text-center mb-3">
          <i class="bi bi-person-circle fs-1 text-secondary mb-2"></i>
          <div class="fw-bold">{{ user.name }}</div>
          <div class="text-muted small">{{ user.gender }}</div>
          <div class="text-muted small">{{ user.email }}</div>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item py-2" href="#"><i class="bi bi-credit-card me-2"></i> Transactions</a></li>
        <li><a class="dropdown-item py-2" href="#"><i class="bi bi-bag-check me-2"></i> Purchased</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><button class="dropdown-item text-danger fw-semibold py-2" @click="logout"><i class="bi bi-box-arrow-right me-2"></i> Sign Out</button></li>
      </ul>
    </div>
  
  </div>
  </div>
  
  
  
    <!-- Dropdowns eBooks & Audio -->
    <div class="container-fluid">
    <ul class="dropdowns-container d-flex gap-4 mt-4" style="padding-left: 0; list-style: none;">
      
      <!-- eBooks Dropdown -->
      <!-- eBooks Dropdown -->
  <li 
    class="custom-dropdown" 
    :class="{ active: activeDropdown === 'ebooks' }" 
    style="list-style: none;"
  >
    <a href="javascript:void(0)" 
       @click.prevent="toggleDropdown('ebooks')" 
       class="nav-toggle no-bullets"
       style="font-family: 'Georgia', serif; font-size: 20px; font-style: italic; font-weight: bold; color: black; letter-spacing: 2px; text-transform: capitalize; text-decoration: none;">
      eBooks 
      <span class="arrow" 
            :style="{ 
              fontSize: '16px', 
              color: activeDropdown === 'ebooks' ? '#4d148c' : 'black', 
              transform: activeDropdown === 'ebooks' ? 'rotate(180deg)' : 'rotate(0deg)', 
              transition: 'transform 0.3s ease' 
            }">
        &#9662;
      </span>
    </a>
  
    <!-- Show only when ebooks is active -->
    <ul class="big-dropdown" v-show="activeDropdown === 'ebooks'">
      <li v-for="(category, index) in categories" :key="index">
        <a :href="`#${category.name}`">{{ category.name }}</a>
      </li>
    </ul>
  </li>
  
  
      <!-- Audiobooks Dropdown -->
     <!-- Audiobooks Dropdown -->
  <li 
    class="custom-dropdown" 
    :class="{ active: activeDropdown === 'audio' }" 
    style="list-style: none;"
  >
    <a href="javascript:void(0)" 
       @click.prevent="toggleDropdown('audio')" 
       class="nav-toggle no-bullets"
       style="font-family: 'Georgia', serif; font-size: 20px; font-style: italic; font-weight: bold; color: black; letter-spacing: 2px; text-transform: capitalize; text-decoration: none;">
      AUDIOBOOKS 
      <span class="arrow" 
            :style="{ 
              fontSize: '16px', 
              color: activeDropdown === 'audio' ? '#4d148c' : 'black', 
              transform: activeDropdown === 'audio' ? 'rotate(180deg)' : 'rotate(0deg)', 
              transition: 'transform 0.3s ease' 
            }">
        &#9662;
      </span>
    </a>
  
    <!-- Show only when audio is active -->
    <ul class="big-dropdown" v-show="activeDropdown === 'audio'">
      <li v-for="(category, index) in categories" :key="index">
        <a :href="`#${category.name}`">{{ category.name }}</a>
      </li>
    </ul>
  </li>
  
  
    </ul>
  </div>
  
  </nav>
  
    
      <div v-for="(category, index) in categories" :key="index" class="container my-5">
        <button
    :id="`${category.name}`"
    class="btn fw-bold"
    style="
      background-color: #4d148c;
      color: white;
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 4px;
    "
  >
    {{ category.name }}
  </button>
  
  
      
        <div class="mt-2 d-flex justify-content-between align-items-center mb-4">
          <h4 class="hover-red-bold fw-semibold m-0">
            Best-selling and Popular {{ category.name }}
          </h4>
        </div>
        <div class="container my-5">
          
          <Carousel :lists=" category.products " />
        </div>
  
        <div
          style="border-bottom: 1px solid rgba(108, 117, 125, 0.5); height: 20px"
        >
        
        </div>
      </div>
    </div>
  
  
    <footer class="bg-secondary  text-white py-5 mt-5">
    <div class="container">
      <div class="row align-items-start">
        
        <!-- Branding Section -->
        <div class="col-12 col-md-3 mb-4">
          <div class="d-flex align-items-center mb-2">
            
            <h4 class="fw-bold mb-0">Zacrac Learning</h4>
          </div>
          <h4>Africa's No. 1 Data School</h4>
          <div class="d-flex gap-3">
    <a href="#" class="text-dark d-flex align-items-center justify-content-center"
       style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
      <i class="bi bi-facebook"></i>
    </a>
    <a href="#" class="text-dark d-flex align-items-center justify-content-center"
       style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
      <i class="bi bi-twitter"></i>
    </a>
    <a href="#" class="text-dark d-flex align-items-center justify-content-center"
       style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
      <i class="bi bi-linkedin"></i>
    </a>
    <a href="#" class="text-dark d-flex align-items-center justify-content-center"
       style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
      <i class="bi bi-youtube"></i>
    </a>
  </div>
  
  
  <p class=" small d-block mt-5">
    © Copyright 2025 All Rights Reserved
  </p>
  
        </div>
  
        <!-- Quick Links -->
        <div class="col-6 col-md-2 mb-4">
          <h5 class="mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">Blog</a></li>
            <li><a href="#" class="text-white text-decoration-none">Pricing</a></li>
            <li><a href="#" class="text-white text-decoration-none">Instructors</a></li>
            <li><a href="#" class="text-white text-decoration-none">Careers</a></li>
            <li><a href="#" class="text-white text-decoration-none">Affiliate Program</a></li>
            <li><a href="#" class="text-white text-decoration-none">Support</a></li>
            <li><a href="#" class="text-white text-decoration-none">Terms & Condition</a></li>
            <li><a href="#" class="text-white text-decoration-none">Privacy Policies</a></li>
          </ul>
        </div>
  
        <!-- Ways to Learn -->
        <div class="col-6 col-md-2 mb-4">
          <h5 class="mb-3">Ways to Learn</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">Self-paced Courses</a></li>
            <li><a href="#" class="text-white text-decoration-none">Incubator Programs</a></li>
            <li><a href="#" class="text-white text-decoration-none">Cohort-based Courses</a></li>
            <li><a href="#" class="text-white text-decoration-none">Enterprise Learning</a></li>
            <li><a href="#" class="text-white text-decoration-none">Career-building Paths</a></li>
          </ul>
        </div>
  
        <!-- Courses -->
        <div class="col-6 col-md-2 mb-4">
          <h5 class="mb-3">Courses</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">MS Excel</a></li>
            <li><a href="#" class="text-white text-decoration-none">R</a></li>
            <li><a href="#" class="text-white text-decoration-none">Power BI</a></li>
            <li><a href="#" class="text-white text-decoration-none">Python</a></li>
            <li><a href="#" class="text-white text-decoration-none">SQL</a></li>
          </ul>
        </div>
  
        <!-- Visit Us -->
        <div class="col-12 col-md-3 mb-4">
          <h5 class="mb-3">Visit Us</h5>
          <p>
            2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.
          </p>
          <p>Be the first to know about our exciting offers on Data Science, AI, and ML courses.</p>
          <form class="d-flex">
            <input 
              type="email" 
              class="form-control form-control-sm bg-light text-white me-2 border-0" 
              placeholder="Type email here" 
              style="max-width: 180px;"
            />
            <button class="btn btn-sm" type="submit" style="background-color: #4d148c; color: #fff;">
              Subscribe
            </button>
          </form>
        </div>
  
      </div>
    </div>
  </footer>
  
  </template>
  <script>
  import axios from "axios";
  import Carousel from "../components/carousel.vue";
  import { ref } from "vue";
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        categories: [],
        user: null,
        loadingUser: true,
  
        // New: track which dropdown is active (ebooks, audiobooks, etc.)
        activeDropdown: null,
      };
    },
  
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    },
  
    methods: {
      handleClickOutside(event) {
        // Close dropdowns if clicking outside
        if (!event.target.closest(".custom-dropdown")) {
          this.activeDropdown = null;
        }
      },
  
      toggleDropdown(name) {
        this.activeDropdown = this.activeDropdown === name ? null : name;
      },
  
      setupMultiCardCarousel() {
        const items = document.querySelectorAll("#multiCardCarousel .carousel-item");
        items.forEach((el) => {
          const minPerSlide = 3;
          let next = el.nextElementSibling;
  
          for (let i = 1; i < minPerSlide; i++) {
            if (!next) next = items[0];
            const cloneChild = next.firstElementChild.cloneNode(true);
            el.appendChild(cloneChild);
            next = next.nextElementSibling;
          }
        });
      },
  
      async api() {
        try {
          const response = await axios.get(
            "https://zacracebookwebsite.onrender.com/ebook/products/shop",
            { headers: { "Content-Type": "application/json" } }
          );
          this.categories = response.data.categories;
        } catch (error) {
          console.error("Failed to fetch categories:", error);
        }
      },
  
      async fetchUser() {
        try {
          const token = localStorage.getItem("token");
          const storedUser = localStorage.getItem("user");
  
          if (storedUser) this.user = JSON.parse(storedUser);
          if (!token) return;
  
          const { data } = await axios.get(
            "https://zacracebookwebsite.onrender.com/api/me",
            { headers: { Authorization: `Bearer ${token}` } }
          );
  
          this.user = data.user || data;
          localStorage.setItem("user", JSON.stringify(this.user));
        } catch (error) {
          console.error("Failed to fetch user:", error);
        } finally {
          this.loadingUser = false;
        }
      },
  
      logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.user = null;
        this.$router.push("/sign-in");
      },
    },
  
    mounted() {
      // Load user from localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) this.user = JSON.parse(storedUser);
  
      // Initialize categories & carousel
      this.api();
      this.setupMultiCardCarousel();
      this.fetchUser();
  
      // Redirect after Google login if needed
      if (localStorage.getItem("fromGoogleLogin") === "true") {
        localStorage.removeItem("fromGoogleLogin");
        this.$router.replace("/auth-callback");
      }
  
      // Add global listener for outside click
      document.addEventListener("click", this.handleClickOutside);
    },
  };
  </script>
  
  
  <style scoped>
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #fff;
    text-decoration: none;
    background-color: #4d148c !important; /* default blue */
  }
  /* Make Sign Out button background transparent on hover */
  .profile-dropdown .dropdown-item.text-danger:hover {
    background-color: transparent !important;
    color: #dc3545; /* keep the text red */
  }
  /* Adjust Logo on Small Screens */
  @media (max-width: 720px) { .navbar-logo { margin-left: -40px !important; } }
  @media (max-width: 438px) { .navbar-logo { font-size: 14px !important; margin-left: -100px !important; } }
  @media (max-width: 424px) { .navbar-logo { margin-left: -105px !important; } }
  @media (max-width: 398px) { .navbar-logo { margin-left: -190px !important; } }
  @media (max-width: 375px) { .navbar-logo { margin-left: -160px !important; } }
  @media (max-width: 374px) { .navbar-logo { margin-left: -190px !important; } }
  @media (max-width: 342px) { .navbar-logo { margin-left: -240px !important; } .logo-text { font-size: 15px !important; } }
  @media (max-width: 336px) { .navbar-logo { margin-left: -240px !important; } .logo-text { font-size: 15px !important; } }
  
  
  
  
  /* Navbar Container & Input Adjustments */
  @media (max-width: 1132px) { .container-fluid { padding: 10px 1px !important; } }
  @media (max-width: 1043px) { .navbar { padding: 10px 40px !important; } }
  @media (max-width: 1110px) { .navbar-nav { display: none !important; } .input-group { margin-left: 20px !important; } }
  @media (max-width: 990px) { .input-group { margin-top: 15px !important; } }
  
  
  /* =========================
     Navbar Container
     ========================= */
  nav.navbar {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    width: 100%;
    padding: 10px 90px; /* default desktop */
  }
  
  .container-fluid1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
  }
  
  /* =========================
     Logo
     ========================= */
  .navbar-logo {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .navbar-logo img {
    width: clamp(15px, 6vw, 17px);
    height: auto;
    display: block;
    margin-top: -0.1px !important; 
   
  }
  
  .navbar-logo h3 {
    font-size: clamp(14px, 2vw, 20px);
    margin-left: 8px;
    margin-bottom: 0;
    margin-top: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* =========================
     Profile / Auth Buttons
     ========================= */
  .profile-dropdown,
  .d-flex.align-items-center.gap-3,
  .d-flex.flex-column.flex-md-row.align-items-start.align-items-md-center.gap-2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
    flex-shrink: 0;
    position: relative;
    z-index: 1050;
  }
  
  /* =========================
     Guest / Logout Buttons
     ========================= */
  .logout-btn {
    background-color: #4d148c;
    color: #fff;
    border: none;
    padding: 8px 18px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  }
  
  .logout-btn:hover {
    background-color: #5e19b3;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }
  
  .logout-btn:active {
    transform: scale(0.98);
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  }
  
  /* =========================
     Hide Hamburger
     ========================= */
  .navbar-toggler {
    display: none !important;
  }
  
  /* =========================
     Dropdown Navigation
     ========================= */
  .custom-dropdown {
    position: relative;
  }
  
  .nav-toggle {
    color: black;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .arrow {
    margin-left: 6px;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .custom-dropdown:hover .nav-toggle,
  .custom-dropdown:focus-within .nav-toggle {
    color: #4d148c;
  }
  
  .custom-dropdown:hover .arrow,
  .custom-dropdown:focus-within .arrow {
    transform: rotate(180deg);
    color: #4d148c;
  }
  
  /* =========================
     Big Dropdown
     ========================= */
  .big-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    display: grid; /* v-show handles visibility */
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    gap: 10px;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border-radius: 8px;
    list-style: none;
    min-width: 360px;
    max-width: 600px;
    font-size: 14px;
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
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    text-align: left;
    word-break: break-word;
  }
  
  .big-dropdown a:hover {
    background-color: #4d148c;
    color: #fff;
  }
  
  /* =========================
     Responsive Navbar & Dropdowns
     ========================= */
  
  /* Tablet / small screens */
  @media (max-width: 768px) {
    nav.navbar {
      padding: 10px 20px;
    }
    .profile-dropdown {
      margin-right: -67px !important;
    }
    .navbar-logo {
      flex: 1;
      justify-content: flex-start;
    }
    .navbar-logo img {
      max-width: 26px;
   
  
    }
    .navbar-logo h3 {
      font-size: 16px;
    }
    .profile-dropdown {
      margin-left: auto;
      position: relative;
    }
    .big-dropdown {
      grid-template-columns: repeat(2, minmax(100px, 2fr));
      min-width: 210px;
      max-width: 400px;
      font-size: 12px;
      padding: 0.75rem;
    }
    .dropdowns-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
  
  /* Mobile screens */
  @media (max-width: 452px) {
    nav.navbar {
      padding: 8px 15px !important;
    }
    .navbar-logo img {
      max-width: 26px;
    margin-top: -7px !important; 
  
    }
    .navbar-logo h3 {
      font-size: 14px; 
    }
    .big-dropdown {
      grid-template-columns: repeat(2, minmax(100px, 2fr));
      min-width: 210px;
      max-width: 400px;
      font-size: 12px;
      padding: 0.75rem;
    }
  
  
    .dropdowns-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .custom-dropdown {
      font-size: 12px !important;
  }
  .nav-toggle{
    font-size: 13px !important;
  
  }
  }
  
  /* Tiny screens */
  @media (max-width: 360px) {
    .navbar-logo img {
      width: 16px;
    margin-top: -7px !important; 
  
    }
    .navbar-logo h3 {
      font-size: 12px !important;
    }
    .profile-dropdown svg {
      width: 22px;
      height: 22px;
    }
    .logout-btn {
      padding: 4px 8px;
      font-size: 12px;
    }
    .nav-toggle{
    font-size: 11px !important;
  
  }
  nav.navbar {
      padding: 18px 10px !important;
    }
  .big-dropdown {
      grid-template-columns: repeat(2, minmax(100px, 2fr));
      min-width: 110px;
      max-width: 300px;
      font-size: 7px;
      padding: 0.65rem;
    margin-left: -35px !important; 
  
    }
  }
  @media (max-width: 300px) {
    .navbar-logo img {
      width: 16px;
    margin-top: -7px !important; 
  
    }
    nav.navbar {
      padding: 10px 5px !important;
    }
    
    .profile-dropdown svg {
      width: 22px;
      height: 22px;
    
    }
    .logout-btn {
      padding: 4px 8px;
      font-size: 12px;
    }
    .nav-toggle{
    font-size: 9px !important;
  
  }
  .big-dropdown {
      grid-template-columns: repeat(2, minmax(100px, 2fr));
      min-width: 110px;
      max-width: 300px;
      font-size: 7px;
      padding: 0.65rem;
    margin-left: -35px !important; 
  
    }
  }
  /* Small screens: move profile dropdown to the right */
  @media (max-width: 768px) {
    .profile-dropdown {
      margin-left: auto;        /* pushes it to the right */
      position: relative;       /* ensure dropdown is positioned relative to parent */
      justify-content: flex-end; /* align items to right if flex */
    }
  }
  
  /* Tiny screens */
  @media (max-width: 452px) {
    .profile-dropdown {
      margin-right: -67px !important;
    }
  }
  
  @media (max-width: 360px) {
    .profile-dropdown {
      margin-left: auto !important;
    }
  }
  .d-flex.align-items-center.gap-3 {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end; /* ensures items are on the right */
    flex-shrink: 0;
  }
  
@media (max-width: 360px) {
  .guest-actions span {
    font-size: 12px;
    white-space: nowrap;
  }
  .guest-actions button {
    padding: 6px 12px;
    font-size: 13px;
  }
}

.guest-buttons button {
  font-size: 14px;
}
.guest-buttons span {
  font-size: 13px;
}

/* Small screens */
@media (max-width: 480px) {
  .guest-buttons {
    gap: 6px; /* tighter spacing */
  }
  .guest-buttons button {
    font-size: 12px;
    padding: 4px 10px !important; /* smaller button */
  }
  .guest-buttons span {
    font-size: 12px;
  }
}

</style>

