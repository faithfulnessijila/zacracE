<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <aside class="sidebar border-end p-3">
      <!-- Logo & Title -->
      <div class="text-center mb-4">
        <img src="/d.png" alt="Logo" class="img-fluid mb-3" style="max-width: 50px;" />
        <h5  @click="$router.push('/admin')" style= "cursor:pointer; color: #4d148c;  font-weight: bold;" class="fw-bold brand-title">Zacrac Learning</h5>
      </div>

      <!-- Sidebar Navigation -->
      <nav>
        <ul class="nav flex-column mt-4">
          <!-- Zacrack E-book Dropdown -->
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

            <ul v-show="dropdowns.ebook" class="nav flex-column ms-3">
              <!-- Overview -->
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  :class="{ active: activeLink === 'overview' }"
                  @click.prevent="activeLink = 'overview'"
                >
                  Overview
                </a>
              </li>

              <!-- Products Dropdown -->
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex justify-content-between align-items-center"
                  :class="{ active: activeLink === 'products' }"
                  @click.prevent="dropdowns.products = !dropdowns.products; activeLink = 'products'"
                >
                  Products
                  <i
                    :class="['bi', dropdowns.products ? 'bi-chevron-up' : 'bi-chevron-down']"
                    class="ms-2"
                  ></i>
                </a>

                <ul v-show="dropdowns.products" class="nav flex-column ms-3">
                  <li>
                    <a @click="$router.push('/product')"
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'new-product' }"
                      @click.prevent="openNewProduct"
                    >
                      New Product
                    </a>
                  </li>
                  <li>
                    <a @click="$router.push('/edit-product')"
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'edit-product' }"
                      @click.prevent="activeLink = 'edit-product'"
                    >
                      Edit Product
                    </a>
                  </li>
                  <li>
                    <a @click="$router.push('/product-list')" 
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'product-list' }"
                      @click.prevent="activeLink = 'product-list'"
                    >
                      Product List
                    </a>
                  </li>
                </ul>
              </li>

              <!-- Orders Dropdown -->
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex justify-content-between align-items-center"
                  :class="{ active: activeLink === 'orders' }"
                  @click.prevent="dropdowns.orders = !dropdowns.orders; activeLink = 'orders'"
                >
                  Orders
                  <i
                    :class="['bi', dropdowns.orders ? 'bi-chevron-up' : 'bi-chevron-down']"
                    class="ms-2"
                  ></i>
                </a>

                <ul v-show="dropdowns.orders" class="nav flex-column ms-3">
                  <li>
                    <a
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'pending-orders' }"
                      @click.prevent="activeLink = 'pending-orders'"
                    >
                      Pending Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'completed-orders' }"
                      @click.prevent="activeLink = 'completed-orders'"
                    >
                      Completed Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="nav-link"
                      :class="{ active: activeLink === 'refund-requests' }"
                      @click.prevent="activeLink = 'refund-requests'"
                    >
                      Refund Requests
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
    <main class="flex-grow-1 p-4">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 style= "color: #4d148c;  font-weight: bold;" class="mb-0">Product List</h3>
          <div class="position-relative" style="width: 300px;">
            <input
              type="text"
              class="form-control search-input"
              v-model="search"
              placeholder="Search anything here..."
            />
            <i class="bi bi-search search-icon"></i>
          </div>
        </div>

        <!-- Product Table -->
        <div class="card shadow-sm">
          <div class="card-body p-0">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Amount Sold</th>
                  <th>Format 1 (Ebook)</th>
                  <th>Ebook Price</th>
                  <th>Format 2 (Audiobook)</th>
                  <th>Audiobook Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in filteredProducts" :key="index">
                  <td>
                    <div class="d-flex align-items-center">
                      <img :src="item.image" alt="" class="rounded-circle me-2" width="35" height="35" />
                      <span>{{ item.name }}</span>
                    </div>
                  </td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.amountSold }}</td>
                  <td>
                    <i
                      :class="item.hasEbook ? 'bi bi-check-circle-fill text-success' : 'bi bi-x-circle-fill text-danger'"
                    ></i>
                  </td>
                  <td>${{ item.ebookPrice }}</td>
                  <td>
                    <i
                      :class="item.hasAudio ? 'bi bi-check-circle-fill text-success' : 'bi bi-x-circle-fill text-danger'"
                    ></i>
                  </td>
                  <td>${{ item.audioPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
      products: [
        {
          name: "Data with Python",
          category: "Data Analytics",
          amountSold: 120,
          hasEbook: true,
          ebookPrice: 25,
          hasAudio: true,
          audioPrice: 40,
          image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
          name: "MacBook Pro",
          category: "Electronics",
          amountSold: 60,
          hasEbook: true,
          ebookPrice: 100,
          hasAudio: true,
          audioPrice: 120,
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
          name: "Metro Bar Stool",
          category: "Furniture",
          amountSold: 86,
          hasEbook: false,
          ebookPrice: 0,
          hasAudio: true,
          audioPrice: 75,
          image: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
          name: "Alchimia Chair",
          category: "Furniture",
          amountSold: 22,
          hasEbook: true,
          ebookPrice: 35,
          hasAudio: false,
          audioPrice: 0,
          image: "https://randomuser.me/api/portraits/men/14.jpg"
        }
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        item =>
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.category.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    openNewProduct() {
      this.activeLink = "new-product";
      // future: route to new product page
    }
  }
};
</script>

<style scoped>
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
