<template>
  <div class="d-flex flex-column flex-md-row">
    <!-- Sidebar -->
    <aside class="sidebar border-end p-3">

      <div class="text-center mb-4">
        <img src="/d.png" alt="Logo" class="img-fluid mb-3" style="max-width: 50px;" />
        <h5  @click="$router.push('/admin')" style= "cursor:pointer; color: #4d148c;  font-weight: bold;" class="fw-bold brand-title">Zacrac Learning</h5>
      </div>

     
      <nav>
        <ul class="nav flex-column mt-4">
      
          <li class="nav-item">
            <a
              href="#"
              class="nav-link ebook-link"
              @click.prevent="dropdowns.ebook = !dropdowns.ebook"
            >
              Zacrack E-book
              <i
                :class="['bi', dropdowns.ebook ? 'bi-chevron-up' : 'bi-chevron-down']"
                class="ms-2"
              ></i>
            </a>
            <ul  v-show="dropdowns.ebook" class="nav flex-column ms-3 mt-2" style="transition: all 0.3s ease;">
   

   <!-- Products Dropdown -->
   <li class="nav-item">
     <a href="#" class="nav-link d-flex justify-content-between align-items-center"
        :class="{ active: activeLink === 'products' }"
        @click.prevent="toggleDropdown('products')">
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
    <main v-if="isAuthenticated" class="flex-grow-1 p-4 bg-light">
  <div class="container">
    <div class="d-flex align-items-center mb-4">
      <h3 
  class="me-3 mb-0 fw-bold text-nowrap"
  style="color: #4d148c; font-size: clamp(16px, 3vw, 24px);"
>
  Product List
</h3>

  
  <div class="position-relative" style="width: 250px; margin-left: 10px;">
    <input
      type="text"
      v-model="search"
      placeholder="Search products..."
      class="form-control search-input"
    />
    <i class="bi bi-search search-icon"></i>
  </div>
</div>



    <!-- Loading State -->
    <div v-if="loading" class="text-center my-3">
      <span class="spinner-border text-primary"></span> Loading products...
    </div>

    <!-- Error Message -->
    <div v-if="error" class="text-danger my-2">{{ error }}</div>

    <!-- Product Table -->
    <div v-if="!loading && filteredProducts.length" class="card shadow-sm">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th class="sticky-col">Product</th>
                <th>Category</th>
                <th>Sold</th>
                <th>Ebook</th>
                <th>Price (₦)</th>
                <th>Audio</th>
                <th>Audio (₦)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filteredProducts" :key="index">
                <td class="sticky-col">
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.image || 'https://via.placeholder.com/35'"
                      alt=""
                      class="rounded-circle me-2"
                      width="35"
                      height="35"
                    />
                    <span>{{ item.name || 'No Name' }}</span>
                  </div>
                </td>
                <td>{{ item.category || 'N/A' }}</td>
                <td>{{ item.amountSold ?? 0 }}</td>
                <td>
                  <i
                    :class="item.hasEbook ? 'bi bi-check-circle-fill text-success' : 'bi bi-x-circle-fill text-danger'"
                  ></i>
                </td>
                <td>{{ formatPrice(item.ebookPrice) }}</td>
                <td>
                  <i
                    :class="item.hasAudio ? 'bi bi-check-circle-fill text-success' : 'bi bi-x-circle-fill text-danger'"
                  ></i>
                </td>
                <td>{{ formatPrice(item.audioPrice) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div v-if="!loading && !filteredProducts.length" class="text-center my-3">
      No products found.
    </div>
  </div>
</main>

<main v-else class="flex-grow-1 p-4 bg-light">
  <p>Please log in to access this page.</p>
</main>

  </div>
</template>
<script>
export default {
  name: "ProductList",
  data() {
    return {
      activeLink: "product-list",
      dropdowns: { ebook: true, products: true, orders: false },
      search: "",
      loadingAuth: true,
      products: [], 
      loading: false,
      error: null
    };
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
    filteredProducts() {
      if (!this.search) return this.products;
      return this.products.filter(
        item =>
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.category.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    async fetchProducts() {
    this.loading = true;
    this.error = null;

    try {
      const token = localStorage.getItem("token");
console.log("Token being sent:", token);


const response = await fetch(
  `https://zacracebookwebsite.onrender.com/admin-details?timestamp=${Date.now()}`,
  {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    cache: "no-store"
  }
);


      // Handle unauthorized / missing token
      if (response.status === 401) {
        throw new Error("Unauthorized: token missing or invalid");
      }

      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();

      this.products = (data.products || []).map(p => ({
        name: p.title || "No Title",
        category: p.category || "N/A",
        amountSold: p.amountSold ?? 0,
        hasEbook: p.price?.ebook > 0,
        ebookPrice: p.price?.ebook || 0,
        hasAudio: p.price?.audio > 0,
        audioPrice: p.price?.audio || 0,
        image: p.image || "https://via.placeholder.com/35"
      }));

    } catch (err) {
      console.error(err);
      this.error = err.message || "Unable to fetch products. Please try again.";

      // Optional: redirect if unauthorized
      if (err.message.toLowerCase().includes("unauthorized")) {
        localStorage.removeItem("token");
        this.$router.push("/admin-signin");
      }

      this.products = [];
    } finally {
      this.loading = false;
    }
  }
,

    goToNewProduct() {
      this.setActiveLink("new-product");
      this.$router.push("/product");
    },

    goToEdit(productId) {
      this.setActiveLink("edit-product");
      this.$router.push({ name: "EditProduct", params: { productId } });
    },

    goToProductList() {
      this.setActiveLink("product-list");
      this.$router.push("/product-list");
    },

    setActiveLink(link) {
      this.activeLink = link;
    },

    formatPrice(value) {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(value);
    }
  },

  mounted() {
  const token = localStorage.getItem("token");

  // If no token, redirect to admin sign-in
  if (!token) {
    this.$router.push("/admin-signin");
    return;
  }

  // Fetch products with token
  this.fetchProducts();
},
};
</script>


<style scoped>
/* Optional: for better contrast on active nested links */
.nav .nav .nav-link.active {
  background-color: #6a1aa0 !important; /* slightly lighter/darker to distinguish nested */
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
  color: #fff !important;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: background 0.3s ease;
}
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 70vh;  
}

.table th,
.table td {
  white-space: nowrap;  
  font-size: 0.8rem;     
  padding: 0.5rem 0.75rem;
  vertical-align: middle;
}

.table td span {
  display: inline-block;
  max-width: 150px;  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.sticky-col {
  position: sticky;
  left: 0;
  background: #fff; /* match table bg */
  z-index: 2;      
}

@media (max-width: 767px) {
  main .container {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}


@media (max-width: 767px) {
  .sidebar {
    width: 100%  !important; 
    min-height: auto  !important; 
    border-right: none  !important; 
    border-bottom: 1px solid #ddd !important; 
  }

  .nav-link,
  .ebook-link {
    font-size: 1rem !important;; /* keep normal size for readability */
    padding: 0.5rem 1rem !important;; /* slightly bigger tap targets */
  }

  .brand-title {
    font-size: 1.1rem !important;;
  }
}
.sidebar {
  width: 240px;
  background: #f8f9fa;
  min-height: 100vh;
}

.nav-link {
  color: #333;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  color: #4d148c;
}


.brand-title {
  font-size: 1rem; /* reduce brand title slightly */
}


.nav-link.active {
  color: #fff;
  background: #4d148c;
  border-radius: 6px;
}

.search-input {
  border-radius: 20px;
  font-size: 0.85rem;
  height: 36px;
  padding: 0 1rem;
  padding-right: 35px;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 1rem;
  pointer-events: auto;
  cursor: pointer;
}
</style>
