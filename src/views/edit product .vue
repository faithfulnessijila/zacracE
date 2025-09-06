<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <aside class="sidebar border-end p-3">
      <!-- Logo & Title -->
      <div class="text-center mb-4">
        <img src="/d.png" alt="Logo" class="img-fluid mb-3" style="max-width: 50px;" />
        <h5 @click="$router.push('/admin')" style= "cursor:pointer; color: #4d148c;  font-weight: bold;"  class="fw-bold brand-title">Zacrac Learning</h5>
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
        <i :class="['bi', dropdowns.ebook ? 'bi-chevron-up' : 'bi-chevron-down']" class="ms-2"></i>
      </a>

      <ul v-show="dropdowns.ebook" class="nav flex-column ms-3" style="transition: all 0.3s ease;">
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
            <i :class="['bi', dropdowns.products ? 'bi-chevron-up' : 'bi-chevron-down']" class="ms-2"></i>
          </a>

          <ul v-show="dropdowns.products" class="nav flex-column ms-3" style="transition: all 0.3s ease;">
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
              <a  @click="$router.push('/edit-product')"
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
            <i :class="['bi', dropdowns.orders ? 'bi-chevron-up' : 'bi-chevron-down']" class="ms-2"></i>
          </a>

          <ul v-show="dropdowns.orders" class="nav flex-column ms-3" style="transition: all 0.3s ease;">
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
     
      <div class="d-flex align-items-center mb-4 flex-wrap">
        <h3 style= "color: #4d148c;  font-weight: bold;" class="fw-bold new-product-title">Edit Product</h3>
        <div class="search-bar ms-3 position-relative mt-2 mt-md-0">
          <input
            type="text"
            class="form-control search-input ps-5"
            placeholder="Search..."
          />
          <i class="bi bi-search search-icon"></i>
        </div>
      </div>

      <!-- Stepper -->
      <div class="d-flex justify-content-between mb-4">
        <div v-for="step in steps" :key="step" class="stepper-item" :class="{ active: activeStep === step }">
          Step {{ step }}
        </div>
      </div>

      <!-- STEP 1 -->
      <div v-if="activeStep === 1" class="card shadow-sm p-4 mb-4">
        <h5 class="text-center mb-4">Product Information</h5>
        <form @submit.prevent="nextStep">
          <div class="row mb-3">
            <div class="col-md-6 mb-3">
              <label class="form-label">Title</label>
              <input v-model="form.title" type="text" class="form-control" />
              <small v-if="errors.title" class="text-danger">{{ errors.title }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Size (MB)</label>
              <input v-model="form.size" type="number" class="form-control" />
              <small v-if="errors.size" class="text-danger">{{ errors.size }}</small>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6 mb-3">
              <label class="form-label">Duration/Pages</label>
              <input v-model="form.pages" type="number" class="form-control" />
              <small v-if="errors.pages" class="text-danger">{{ errors.pages }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Category</label>
              <select v-model="form.category" class="form-select">
                <option value="">Select Category</option>
                <option>Data Analytics</option>
                <option>Programming</option>
                <option>Design</option>
              </select>
              <small v-if="errors.category" class="text-danger">{{ errors.category }}</small>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6 mb-3">
              <label class="form-label">Description</label>
              <input v-model="form.description" type="text" class="form-control" />
              <small v-if="errors.description" class="text-danger">{{ errors.description }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Type</label>
              <select v-model="form.type" class="form-select">
                <option value="">Select Type</option>
                <option>E-book</option>
                <option>Course</option>
                <option>Video</option>
              </select>
              <small v-if="errors.type" class="text-danger">{{ errors.type }}</small>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button class="btn btn-primary px-4" :disabled="!canProceedStep1">Next</button>
          </div>
        </form>
      </div>

      <!-- STEP 2 -->
      <div v-if="activeStep === 2" class="card shadow-sm p-4 mb-4">
        <h5 class="text-center mb-4">Add Media</h5>

        <div class="mb-4">
          <h6>Cover Image</h6>
          <div class="border-dotted-custom p-4 text-center rounded" @dragover.prevent @drop.prevent="onDrop($event, 'cover')">
            <input type="file" accept="image/*" class="d-none" ref="coverInput" @change="onFileChange($event, 'cover')" />
            <div v-if="!form.coverImage">
              <p>Drop or <a href="#" @click.prevent="$refs.coverInput.click()">Browse</a></p>
            </div>
            <div v-else>
              <img :src="form.coverImage" class="img-fluid rounded mb-2" style="max-height: 150px;" />
              <button class="btn btn-sm btn-danger" @click="removeImage('cover')">Remove</button>
            </div>
          </div>
        </div>

        <div>
          <h6>Product Images</h6>
          <div class="border-dotted-custom p-4 text-center rounded" @dragover.prevent @drop.prevent="onDrop($event, 'product')">
            <input type="file" multiple accept="image/*" class="d-none" ref="productInput" @change="onFileChange($event, 'product')" />
            <div v-if="form.productImages.length === 0">
              <p>Drop or <a href="#" @click.prevent="$refs.productInput.click()">Browse</a></p>
            </div>
            <div class="d-flex flex-wrap gap-2" v-else>
              <div v-for="(img, index) in form.productImages" :key="index" class="position-relative">
                <img :src="img" class="img-thumbnail" style="max-height: 100px;" />
                <button class="btn btn-sm btn-danger position-absolute top-0 end-0" @click="removeImage('product', index)">×</button>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between mt-3">
          <button class="btn btn-secondary px-4" @click="setStep(1)">Back</button>
          <button class="btn btn-primary px-4" @click="nextStep">Next</button>
        </div>
      </div>

      <!-- STEP 3 -->
      <div v-if="activeStep === 3" class="card shadow-sm p-4 mb-4">
        <h5 class="text-center mb-4">Author Information</h5>
        <form @submit.prevent="nextStep">
          <div class="mb-3">
            <label class="form-label">Author Name</label>
            <input v-model="form.authorName" class="form-control" placeholder="Optional" />
          </div>
          <div class="mb-3">
            <label class="form-label">Author Bio</label>
            <input v-model="form.authorBio" class="form-control" placeholder="Optional" />
          </div>
          <div class="mb-3">
            <label class="form-label">LinkedIn</label>
            <input v-model="form.authorLinkedIn" class="form-control" placeholder="Optional" />
          </div>

          <div class="d-flex justify-content-between">
            <button class="btn btn-secondary px-4" @click="setStep(2)">Back</button>
            <button class="btn btn-primary px-4" :disabled="!canProceedStep3">Next</button>
          </div>
        </form>
      </div>

      <!-- STEP 4 -->
      <div v-if="activeStep === 4" class="card shadow-sm p-4">
        <h5 class="text-center mb-4">Pricing</h5>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 mb-3">
              <label class="form-label">Price</label>
              <input v-model="form.price" type="number" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Currency</label>
              <select v-model="form.currency" class="form-select">
                <option value="">Select Currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>NGN</option>
                <option>GBP</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6 mb-3">
              <label class="form-label">SKU</label>
              <input v-model="form.sku" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Discount (%)</label>
              <input v-model="form.discount" type="number" min="0" max="100" class="form-control" />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <button class="btn btn-secondary px-4" @click="setStep(3)">Back</button>
            <button class="btn btn-success px-4" :disabled="!canProceedStep4">Submit</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {
      activeLink: "edit-product",
      activeStep: 1,
      steps: [1, 2, 3, 4],
      dropdowns: {
        ebook: true,
        products: true,
        orders: false,
      },
      form: {
        title: "",
        size: "",
        pages: "",
        category: "",
        description: "",
        type: "",
        coverImage: "",
        productImages: [],
        authorName: "",
        authorBio: "",
        authorLinkedIn: "",
        price: "",
        currency: "",
        sku: "",
        discount: "",
      },
      errors: {},
    };
  },
  computed: {
    canProceedStep1() {
      return (
        this.form.title &&
        this.form.size &&
        this.form.pages &&
        this.form.category &&
        this.form.description &&
        this.form.type
      );
    },
    canProceedStep3() {
      return true; // No strict validation here
    },
    canProceedStep4() {
      return this.form.price && this.form.currency && this.form.sku;
    },
  },
  methods: {
    setStep(step) {
      this.activeStep = step;
    },
    nextStep() {
      if (this.activeStep < 4) this.activeStep++;
    },
    openNewProduct() {
      this.activeLink = "new-product";
      this.activeStep = 1;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        title: "",
        size: "",
        pages: "",
        category: "",
        description: "",
        type: "",
        coverImage: "",
        productImages: [],
        authorName: "",
        authorBio: "",
        authorLinkedIn: "",
        price: "",
        currency: "",
        sku: "",
        discount: "",
      };
    },
    onDrop(event, type) {
      const files = [...event.dataTransfer.files];
      this.handleFiles(files, type);
    },
    onFileChange(event, type) {
      const files = [...event.target.files];
      this.handleFiles(files, type);
    },
    handleFiles(files, type) {
      if (type === "cover" && files.length > 0) {
        this.form.coverImage = URL.createObjectURL(files[0]);
      } else if (type === "product") {
        this.form.productImages.push(
          ...files.map((f) => URL.createObjectURL(f))
        );
      }
    },
    removeImage(type, index = null) {
      if (type === "cover") {
        this.form.coverImage = "";
      } else if (type === "product" && index !== null) {
        this.form.productImages.splice(index, 1);
      }
    },
    submitForm() {
      alert("Form Submitted!");
      console.log(this.form);
    },
  },
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
  
  color: #4d148c;         /* White text on hover */
 
}

.nav-link.active {
  color: #fff;
  background: #4d148c;
  border-radius: 6px;
}

.border-dotted-custom {
  border: 2px dashed #4d148c;
  cursor: pointer;
}

.stepper-item {
  padding: 8px 12px;
  border-radius: 6px;
  background: #e9ecef;
}

.stepper-item.active {
  background: #4d148c;
  color: #fff;
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
  pointer-events: auto;
  cursor: pointer;
}
</style>
