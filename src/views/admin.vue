<template>
  <div class="d-flex flex-column flex-md-row">
    <!-- Sidebar -->
    <aside class="sidebar border-end p-3">
      <!-- Logo & Title -->
      <div class="text-center mb-4">
        <img src="/d.png" alt="Logo" class="img-fluid mb-3" style="max-width: 50px;" />
        <h5  @click="$router.push('/admin')" style= "cursor:pointer; color: #4d148c;  font-weight: bold;" class="fw-bold brand-title">Zacrac Learning</h5>
      </div>

      <!-- Sidebar Navigation -->
      <nav>
  <ul :class="['nav flex-column ms-3', dropdowns.products ? 'show' : '']" class="nav flex-column mt-4">
    <!-- Zacrack E-book Dropdown -->
   <!-- Zacrack E-book Dropdown -->
<li class="nav-item">
  <a 
  href="#" 
  class="nav-link ebook-link" 
  @click.prevent="toggleDropdown('ebook')"
>
  Zacrack E-book
  <i :class="['bi', 'bi-chevron-down', 'ms-2', 'chevron', { open: dropdowns.ebook } ]"></i>
</a>


<ul  v-show="dropdowns.ebook" class="nav flex-column ms-3 mt-2" style="transition: all 0.3s ease;">
   

   <!-- Products Dropdown -->
   <li class="nav-item">
    <a
  href="#"
  class="nav-link d-flex justify-content-between text-black  align-items-center text-muted " 
  :class="{ active: activeLink === 'products' }"
  @click.prevent="toggleDropdown('products')"
>
  Products
  <i :class="['bi', dropdowns.products ? 'bi-chevron-up' : 'bi-chevron-down']" class="ms-2"></i>
</a>





     <ul v-show="dropdowns.products" class="nav flex-column ms-3" style="transition: all 0.3s ease;">
       <li>
<a
 href="#"
 class="nav-link"
 :class="{ active: activeLink === 'product' }"
 @click.prevent="goToNewProduct"
>
 New Product
</a> </li>
      
<li>
 <a
   href="#"
   class="nav-link"
   :class="{ active: activeLink === 'edit-product' }"
   @click.prevent="goToEdit(product?._id)"
 >
   Edit Product
 </a>
</li>




<li>
 <a
   href="#"
   class="nav-link"
   :class="{ active: activeLink === 'product-list' }"
   @click.prevent="goToProductList"
 >
   Product List
 </a>
</li>



     </ul>
   </li>


 </ul>
</li>

  </ul>
</nav>

    </aside>
    <!-- Main Content -->
    <main class="flex-fill p-4">
  <h3 style="color: #4d148c; font-weight: bold;" class="my-4">Dashboard</h3>

  <!-- Loading state -->
<!-- Loading state -->
<div v-if="loading" class="text-center my-4">
  <p>Loading dashboard data...</p>
  <div class="purple-spinner"></div>
</div>

  <!-- Error message -->
  <div v-if="errorMessage" class="alert alert-danger">
    {{ errorMessage }}
  </div>

  <!-- Stats cards -->
  <div v-if="!loading && !errorMessage" class="row mb-4">
    <div class="col-md-3" v-for="(val, key) in stats" :key="key">
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <h6>{{ key.charAt(0).toUpperCase() + key.slice(1) }}</h6>
          <p class="fs-5">{{ key === 'revenue' ? '₦' + val : val }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Categories -->
  <div v-if="!loading && !errorMessage">
    <h4 class="mb-3">Categories</h4>
    <div class="row">
      <div v-for="(category, index) in categories" :key="index" class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">{{ category.name }}</h5>
            <p><strong>Amount Sold:</strong></p>
            <ul class="list-unstyled">
              <li>Ebooks: {{ category.ebooks }}</li>
              <li>Audiobooks: {{ category.audiobooks }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  </div>
</template>
<script>
import axios from "axios";

const API_BASE = "https://zacracebookwebsite.onrender.com";

export default {
  name: "Dashboard",
  data() {
    return {
      dropdowns: { ebook: false, products: false, orders: false },
      stats: { users: 0, revenue: 0, ebooks: 0, audiobooks: 0 },
      categories: [],
      token: localStorage.getItem("token") || null,
      loading: false,
      errorMessage: "",
      activeLink: "",
    };
  },
  methods: {
    goToNewProduct() {
      this.setActiveLink("new-product");
      this.$router.push("/product");
    },

    goToEdit(productId) {
      this.activeLink = "edit-product";
      this.$router.push({ name: "EditProduct", params: { productId } });
    },

    goToProductList() {
      this.setActiveLink("product-list");
      this.$router.push("/product-list");
    },
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },

    setActiveLink(link) {
      this.activeLink = link;
    },

    redirectToLogin() {
      if (this.$router) {
        this.$router.push("/admin-signin");
      } else {
        window.location.href = "/admin-signin";
      }
    },

    async fetchDashboardAndCategories() {
      if (!this.token) {
        this.errorMessage = "No token found. Please login.";
        return this.redirectToLogin();
      }

      this.loading = true;
      this.errorMessage = "";

      try {
        // Fetch stats and categories in parallel
        const [dashboardRes, categoryRes] = await Promise.all([
          axios.get(`${API_BASE}/admin/statistics/dashboard`, {
            headers: { Authorization: `Bearer ${this.token}` },
          }),
          axios.get(`${API_BASE}/ebook/products/category`, {
            headers: { Authorization: `Bearer ${this.token}` },
          }),
        ]);

        // Update stats
        this.stats = dashboardRes.data.stats || {};

        // Update categories for dropdown
        this.categories = categoryRes.data || [];

      } catch (err) {
        const status = err.response?.status;

        if (status === 401) {
          console.warn("Token expired or invalid. Redirecting to login...");
          localStorage.removeItem("token");
          this.redirectToLogin();
        } else {
          this.errorMessage = err.response?.data?.message || err.message;
          console.error("Failed to fetch dashboard or categories:", err);
        }
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    this.fetchDashboardAndCategories();
  },
};
</script>



<style scoped>

.purple-spinner {
  margin: 10px auto;
  width: 30px;          /* smaller width */
  height: 30px;         /* smaller height */
  border: 4px solid #ddd;
  border-top: 4px solid #4d148c; /* purple color */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Optional extra small */
.purple-spinner.small {
  width: 20px;
  height: 20px;
  border: 3px solid #ddd;
  border-top: 3px solid #4d148c;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ebook-link .chevron {
  color: #fff !important;
  transition: transform 0.3s ease;
  font-size: 0.85rem;
}

.ebook-link .chevron.open {
  transform: rotate(180deg);
}



.nav-link,
.nav-link * {
  color: #333 !important; /* or #fff if background is dark */
}
/* Sidebar base */
.sidebar {
  width: 250px;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Brand */
.brand-title {
  color: #4d148c;
  font-weight: bold;
}
/* Responsive adjustments for small screens */
@media (max-width: 767px) {
  .sidebar {
    width: 100%  !important; 
    min-height: auto  !important; 
    border-right: none  !important; 
    border-bottom: 1px solid #ddd !important; 
  }

  .nav-link,
  .ebook-link {
    font-size: 1rem !important; /* keep normal size for readability */
    padding: 0.5rem 1rem !important; /* slightly bigger tap targets */
  }

  .brand-title {
    font-size: 1.1rem !important;
  }
}



/* Base nav link */
.nav-link {
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* Hover state */
.nav-link:hover {
  
  color: #4d148c !important;
}

/* Active state */
.nav-link.active {
  background-color: #4d148c;  /* purple background */
  color: #fff !important;     /* white text */
  font-weight: 600;
}

/* Ebook link (main dropdown) */
.ebook-link {
  background-color: #4d148c;
  color: #fff !important;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: background 0.3s ease;
}

.ebook-link:hover {
  background-color: #5e18aa; /* slightly darker purple */
  color: #fff !important;
}

/* Nested dropdown ul */
.nav .nav {
  padding-left: 1rem;  /* indent nested links */
}

/* Icon spacing in links */
.nav-link i {
  margin-left: 0.5rem;
}

/* Optional: for better contrast on active nested links */
.nav .nav .nav-link.active {
  background-color: #6a1aa0; /* slightly lighter/darker to distinguish nested */
  color: #fff !important;
}

/* Ensure text is not hidden or clipped */
.nav-link span,
.nav-link p {
  color: inherit;
  font-weight: inherit;
}

.ebook-link {
  background-color: #4d148c;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  color: #fff !important;
  font-weight: 600;
  text-align: center;
  transition: background 0.3s ease;
}
.ebook-link:hover { background-color: #5e18aa; }

/* Nested dropdown */
.nav .nav { padding-left: 1rem;  overflow: hidden; transition: max-height 0.3s ease; }
.nav .nav.show { max-height: 1000px; }

/* Icons */
.nav-link i { margin-left: 0.5rem; transition: transform 0.3s ease; }
.nav-link i.bi-chevron-up { transform: rotate(180deg); }

/* Stepper */
.step { width: 25px; height: 25px; line-height: 25px; border-radius: 50%; background: #ddd; color: #000; font-weight: 600; text-align: center; margin-right: 5px; transition: all 0.3s ease; cursor: pointer; }
.step.active { background: #4d148c; color: #fff; box-shadow: 0 0 0 4px rgba(77,20,140,0.2); }

/* Product Form Cards */
.product-form-card { padding: 1.5rem; }
.product-form-card h5 { margin-bottom: 1rem; font-size: 1.1rem; }
.product-form-card .form-control, .product-form-card .form-select { height: 34px; font-size: 0.85rem; padding: 0.25rem 0.5rem; }
.product-form-card .row { margin-bottom: 0.75rem; }

/* Upload areas */
.border-dotted-custom { border: 2px dashed #4d148c; border-radius: 12px; padding: 1rem; cursor: pointer; transition: border-color 0.3s ease; }
.border-dotted-custom:hover { border-color: #5e18aa; }

/* Buttons */
.next-btn { width: 150px; font-weight: 600; }
.btn-primary { background-color: #4d148c; border-color: #4d148c; color: #fff; }
.btn-primary:hover { background-color: #5e18aa; border-color: #5e18aa; }
.btn-disabled { background-color: #ccc; border-color: #ccc; color: #666; cursor: not-allowed; }

/* Responsive */
@media (max-width: 767px) {
  .sidebar { width: 200px; padding: 0.5rem; }
  .brand-title { font-size: 1rem; }
  .nav-link, .ebook-link { font-size: 0.85rem; padding: 0.4rem 0.8rem; }
  .product-form-card { padding: 1rem; }
  .product-form-card h5 { font-size: 1rem; margin-bottom: 0.75rem; }
  .form-control, .form-select { font-size: 0.8rem; height: 32px; }
  .row { margin-bottom: 0.5rem; }
  .next-btn { width: 100%; padding-left: 0; padding-right: 0; }
  .new-product-title { font-size: 1.1rem; }
  .search-input { font-size: 0.75rem; margin-left: 10px !important; padding-left: 1rem; }
  .steps li { font-size: 0.75rem; }
}


/* Dotted border upload areas */
.border-dotted-custom {
  border: 2px dashed #4d148c;
  
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.border-dotted-custom:hover {
  border-color: #5e18aa;
}
input:invalid, select:invalid {
  border-color: red;
}

.next-btn {
  width: 150px; /* desktop width */
  font-weight: 600;
  text-align: center;
}

/* Full width on mobile */
@media (max-width: 767px) {
  .next-btn {
    width: 100%;       /* full width on mobile */
    padding-left: 0;   /* remove extra horizontal padding */
    padding-right: 0;
  }
}

.btn-primary {
  background-color: #4d148c;
  border-color: #4d148c;
  color: #fff;
}

.btn-primary:hover {
  background-color: #5e18aa;
  border-color: #5e18aa;
}

.btn-disabled {
  background-color: #ccc;
  border-color: #ccc;
  color: #666;
  cursor: not-allowed;
}


.btn-primary {
  background-color: #4d148c;
  border-color: #4d148c;
  color: #fff;
}

.btn-primary:hover {
  background-color: #5e18aa;
  border-color: #5e18aa;
}

.btn-disabled {
  background-color: #ccc;
  border-color: #ccc;
  color: #666;
  cursor: not-allowed;
}



.step-item {
  color: #4d148c;
}

.border-dotted-custom {
  border: 4px dotted #4d148c; /* thicker, purple dots */
  border-radius: 12px;         /* rounded corners */
  padding: 1rem;               /* inner spacing */
}

/* Make step circles clickable */
.step {
  cursor: pointer; /* show pointer on hover */
}

/* Optional: also make the entire step-item clickable */
.step-item {
  cursor: pointer;
}

.progress-line {
  height: 4px;
  background: #4d148c;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: width 0.3s ease;
  z-index: 0;
}

.steps-line-wrapper {
  position: relative;
  width: 100%;
  height: 40px; /* enough height for steps */
}

.steps-background-line {
  position: absolute;
  top: 50%;
  left: 15px;   /* half step width */
  right: 15px;  /* half step width */
  height: 4px;
  background: #ddd;
  transform: translateY(-50%);
  border-radius: 2px;
  z-index: 0;
}

.steps-progress-line {
  position: absolute;
  top: 50%;
  left: 15px;   /* half step width */
  height: 4px;
  background: #4d148c;
  border-radius: 2px;
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.5s ease;
}

/* Step circles */
.step {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  background: #ddd;
  color: #fff;
  position: relative;
  z-index: 2; /* above progress line */
  font-weight: 600;
  transition: all 0.3s ease;
}

.step.active {
  background: #4d148c;
  box-shadow: 0 0 0 4px rgba(77, 20, 140, 0.2);
}


.steps-line {
  position: relative;
}

.steps-line .step-item {
  position: relative;
  flex: 1;
  text-align: center;
}

.steps-line .step-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 4px;
  width: 100%;
  background: #ddd;  /* default line color */
  z-index: 0;
  transform: translateX(50%);
}

.steps-line .step-item:last-child::after {
  display: none;  /* no line after last step */
}

/* Filled progress line */
.steps-line::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  background: #4d148c;
  z-index: 0;
  transition: width 0.3s ease;
  transform: translateY(-50%);
}



.step.completed,
.step.active {
  background: #4d148c;
}

.step.active {
  box-shadow: 0 0 0 4px rgba(77, 20, 140, 0.2);
}








.main-container {
  max-height: 85vh;       /* slightly less than full screen to allow scroll */
  overflow-y: auto;       /* enable vertical scrolling */
  padding-right: 1rem;    /* avoid scrollbar overlap */
}

.new-product-title {
  font-size: 1.38rem;
  color: #4d148c;
}

.search-input {
  border-radius: 20px;
  font-size: 0.85rem;
  height: 36px;
  padding: 0 1rem;
  margin-left: 60px !important;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 1rem;
  pointer-events: auto; /* allow hover/click */
  cursor: pointer;       /* show pointer cursor */
}


.sidebar {
  width: 250px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-link {
  color: black;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #4d148c !important;
}
.nav-link.active {
  color: #4d148c !important;
  font-weight: 600;
}

.ebook-link {
  background-color: #4d148c;
  border-radius: 12px;
  padding: 10px;
  color: #fff !important;
  font-weight: 600;
  text-align: center;
}
.ebook-link:hover {
  background-color: #5e18aa;
  color: #fff !important;
}

.btn-primary {
  background-color: #4d148c;
  border-color: #4d148c;
}
.btn-primary:hover {
  background-color: #5e18aa;
  border-color: #5e18aa;
}

.step {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  background: #ddd;
  color: #000;
  margin-right: 5px;
  text-align: center;
}
.step.active {
  background: #4d148c;
  color: #fff;
}

.brand-title {
  color: #4d148c;
}
/* Reduce form height */
.product-form-card {
  padding: 1.5rem; /* smaller padding for desktop */
}

.product-form-card .row {
  margin-bottom: 0.75rem; /* less vertical space between rows */
}

.product-form-card .form-control,
.product-form-card .form-select {
  height: 34px; /* slightly smaller input/select height */
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
}

.product-form-card h5 {
  margin-bottom: 1rem; /* reduce heading bottom margin */
}

/* Responsive adjustments for small screens */
@media (max-width: 767px) {
  .product-form-card {
    padding: 1rem; /* even smaller padding on mobile */
  }

  .form-label {
    font-size: 0.8rem;
  }

  .form-control,
  .form-select {
    height: 32px;
    font-size: 0.8rem;
  }

  .product-form-card .row {
    margin-bottom: 0.5rem;
  }

  .product-form-card h5 {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
}
/* Desktop (full screen) adjustments */
@media (min-width: 992px) {
  .product-form-card {
    width: 70%;           /* reduced width */
    max-width: 900px;     /* optional max width */
    padding: 1.5rem;      /* reduced padding */
    margin: 0 auto;       /* center horizontally */
  }
  

  .product-form-card .form-control,
  .product-form-card .form-select {
    height: 34px;        /* reduce input/select height */
    font-size: 0.85rem;  /* slightly smaller text */
    padding: 0.25rem 0.5rem;
  }

  .product-form-card h5 {
    margin-bottom: 1rem; /* reduce heading bottom margin */
    font-size: 1.1rem;   /* smaller heading */
  }

  .product-form-card .row {
    margin-bottom: 0.75rem; /* less space between rows */
  }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 767px) {
  .new-product-title {
    font-size: 1.1rem; /* smaller title */
  }

  .search-input {
    margin-left: 10px !important; /* reduce left margin */
    font-size: 0.75rem; /* smaller input text */
    padding-left: 1rem; /* reduce padding for smaller screens */
  }

  .steps li {
    font-size: 0.75rem; /* reduce step text size */
  }

  .sidebar {
    width: 200px; /* optional: slightly narrower sidebar */
  }
}

</style>
