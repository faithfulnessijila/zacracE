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
    <!-- Overview -->
    <li class="nav-item">
      <a href="#" class="nav-link" :class="{ active: activeLink === 'overview' }"
         @click.prevent="setActiveLink('overview')">
        Overview
      </a>
    </li>

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
          <a  @click="$router.push('/product')" href="#" class="nav-link" :class="{ active: activeLink === 'new-product' }"
             @click.prevent="setActiveLink('new-product')">
            New Product
          </a>
        </li>
        <li>
          <a @click="$router.push('/edit-product')" href="#" class="nav-link" :class="{ active: activeLink === 'edit-product' }"
             @click.prevent="setActiveLink('edit-product')">
            Edit Product
          </a>
        </li>
        <li>
          <a @click="$router.push('/product-list')" href="#" class="nav-link" :class="{ active: activeLink === 'product-list' }"
             @click.prevent="setActiveLink('product-list')">
            Product List
          </a>
        </li>
      </ul>
    </li>

    <!-- Orders Dropdown -->
    <li class="nav-item">
      <a href="#" class="nav-link d-flex justify-content-between align-items-center"
         :class="{ active: activeLink === 'orders' }"
         @click.prevent="toggleDropdown('orders')">
        Orders
        <i :class="['bi', dropdowns.orders ? 'bi-chevron-up' : 'bi-chevron-down']" class="ms-2"></i>
      </a>

      <ul v-show="dropdowns.orders" class="nav flex-column ms-3" style="transition: all 0.3s ease;">
        <li>
          <a href="#" class="nav-link" :class="{ active: activeLink === 'pending-orders' }"
             @click.prevent="setActiveLink('pending-orders')">
            Pending 
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" :class="{ active: activeLink === 'completed-orders' }"
             @click.prevent="setActiveLink('completed-orders')">
            Completed 
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" :class="{ active: activeLink === 'refund-requests' }"
             @click.prevent="setActiveLink('refund-requests')">
             Request
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
    <main class="flex-fill p-4 bg-light">
      <!-- Header -->
      <div class="d-flex align-items-center mb-4 flex-wrap">
        <h3 class="fw-bold new-product-title">New Product</h3>
        <div class="search-bar ms-3 position-relative mt-2 mt-md-0">
          <input
            type="text"
            class="form-control search-input ps-5"
            placeholder="Search..."
          />
          <i class="bi bi-search search-icon"></i>
        </div>
      </div>

      <!-- Steps -->
      <div class="steps mb-4">
        <div class="steps-line-wrapper position-relative w-100 mb-4">
  <!-- Background line (full width) -->
  <div class="steps-background-line position-absolute top-50 start-0"></div>

  <!-- Animated progress line -->
  <div
    class="steps-progress-line position-absolute top-50"
    :style="{ width: progressWidth }"
  ></div>

  <!-- Step circles -->
  <ul class="nav w-100 d-flex justify-content-between px-3">
    <li class="nav-item text-center step-item" @click="setStep(1)">
  <span class="step" :class="{ active: activeStep === 1 }">1</span><br>
  <span style="color: #4d148c;">Product Info</span>
</li>
<li class="nav-item text-center step-item" @click="setStep(2)">
  <span class="step" :class="{ active: activeStep === 2 }">2</span><br>
  <span style="color: #4d148c;">Media</span>
</li>
<li class="nav-item text-center step-item" @click="setStep(3)">
  <span class="step" :class="{ active: activeStep === 3 }">3</span><br>
  <span style="color: #4d148c;">Author</span>
</li>
<li class="nav-item text-center step-item" @click="setStep(4)">
  <span class="step" :class="{ active: activeStep === 4 }">4</span><br>
  <span style="color: #4d148c;">Pricing</span>
</li>

  </ul>
</div>













<!-- Step 2: Media -->
<!-- Step 1: Product Info -->
<!-- Step 1: Product Info -->

<div v-if="activeStep === 1" key="step1" class="card shadow-sm p-4 mb-4 product-form-card">
  <h5 class="text-center mb-4">Product Information</h5>
  <form @submit.prevent="nextStep">

    <div class="row mb-3">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <label class="form-label">Title</label>
        <input v-model="form.title" type="text" class="form-control" />
        <small v-if="errors.title" class="text-danger">{{ errors.title }}</small>
      </div>

      <div class="col-12 col-md-6">
        <label class="form-label">Size (MB)</label>
        <input v-model="form.size" type="number" class="form-control" />
        <small v-if="errors.size" class="text-danger">{{ errors.size }}</small>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <label class="form-label">Duration/Pages</label>
        <input v-model="form.pages" type="number" class="form-control" />
        <small v-if="errors.pages" class="text-danger">{{ errors.pages }}</small>
      </div>

      <div class="col-12 col-md-6">
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
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <label class="form-label">Description</label>
        <input v-model="form.description" type="text" class="form-control" />
        <small v-if="errors.description" class="text-danger">{{ errors.description }}</small>
      </div>

      <div class="col-12 col-md-6">
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
      <button 
        type="submit" 
        class="btn px-4 next-btn" 
        :class="{
          'btn-primary': form.title && form.size && form.pages && form.category && form.description && form.type, 
          'btn-disabled': !form.title || !form.size || !form.pages || !form.category || !form.description || !form.type
        }"
        :disabled="!form.title || !form.size || !form.pages || !form.category || !form.description || !form.type"
      >
        Next
      </button>
    </div>
  </form>
</div>



<!-- Step 2: Media -->
<transition name="slide-fade" mode="out-in">
  <div v-if="activeStep === 2" key="step2" class="mb-4">

    <!-- Cover Image Upload Card -->
    <div class="card shadow-sm p-4 mb-4 product-form-card">
      <h5 class="text-center mb-4">Add Cover Image</h5>
      <div class="text-center">
        <div
          class="border-dotted-custom p-4 rounded"
          @dragover.prevent
          @drop.prevent="onDrop($event, 'cover')"
        >
          <input
            type="file"
            accept="image/*"
            class="d-none"
            ref="coverInput"
            @change="onFileChange($event, 'cover')"
          />
          <div v-if="!form.coverImage" class="text-center">
            <i class="bi bi-cloud-arrow-up" style="font-size: 5rem; color: #4d148c;"></i>
            <p class="mt-2">
              Drop your image here or 
              <a href="#" @click.prevent="$refs.coverInput.click()" style="color: #4d148c; font-weight: 600;">
                Browse
              </a>
            </p>
            <small class="text-muted" style="font-size: 0.9rem;">Supports: JPG, JPEG, PNG</small>
            <div v-if="errors.coverImage" class="text-danger mt-1">{{ errors.coverImage }}</div>
          </div>
          <div v-else class="text-center">
            <img :src="form.coverImage" class="img-fluid rounded" style="max-height: 180px;" />
            <button class="btn btn-sm btn-danger mt-2" @click="removeImage('cover')">Remove</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Images Upload Card -->
    <div class="card shadow-sm p-4 mb-4 product-form-card">
      <h5 class="text-center mb-4">Add Product Images</h5>
      <div class="text-center">
        <div
          class="border-dotted-custom p-4 rounded"
          @dragover.prevent
          @drop.prevent="onDrop($event, 'product')"
        >
          <input
            type="file"
            accept="image/*"
            multiple
            class="d-none"
            ref="productInput"
            @change="onFileChange($event, 'product')"
          />
          <div v-if="form.productImages.length === 0" class="text-center">
            <i class="bi bi-cloud-arrow-up" style="font-size: 5rem; color: #4d148c;"></i>
            <p class="mt-2">
              Drop your images here or 
              <a href="#" @click.prevent="$refs.productInput.click()" style="color: #4d148c; font-weight: 600;">
                Browse
              </a>
            </p>
            <small class="text-muted" style="font-size: 0.9rem;">Supports: JPG, JPEG, PNG</small>
            <div v-if="errors.productImages" class="text-danger mt-1">{{ errors.productImages }}</div>
          </div>
          <div v-else class="d-flex flex-wrap justify-content-center gap-2">
            <div v-for="(img, index) in form.productImages" :key="index" class="position-relative">
              <img :src="img" class="img-thumbnail" style="max-height: 100px;" />
              <button 
                class="btn btn-sm btn-danger position-absolute top-0 end-0"
                @click="removeImage('product', index)"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary px-4" @click="setStep(1)">Back</button>
      <button type="button" class="btn btn-primary px-4" @click="nextStep">Next</button>
    </div>

  </div>
</transition>






<!-- Step 3: Author -->
<transition name="slide-fade" mode="out-in">
  <div v-if="activeStep === 3" key="step3" class="card shadow-sm p-4 mb-4 product-form-card">
    <h5 class="text-center mb-4">Author Information</h5>

    <form @submit.prevent="nextStep">
      <div class="row mb-3">
        <div class="col-md-6 mb-3 mb-md-0">
          <label class="form-label">Author Name (optional)</label>
          <input
            v-model="form.authorName"
            type="text"
            class="form-control"
            placeholder="@warner"
          />
          <small v-if="errors.authorName" class="text-danger">{{ errors.authorName }}</small>
        </div>

        <div class="col-md-6">
          <label class="form-label">Author Biography (optional)</label>
          <input
            v-model="form.authorBio"
            type="text"
            class="form-control"
            placeholder="Short bio (min 10 chars)"
          />
          <small v-if="errors.authorBio" class="text-danger">{{ errors.authorBio }}</small>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">LinkedIn Account (optional)</label>
        <input
          v-model="form.authorLinkedIn"
          type="text"
          class="form-control"
          placeholder="https://linkedin.com/in/username"
        />
        <small v-if="errors.authorLinkedIn" class="text-danger">{{ errors.authorLinkedIn }}</small>
      </div>

      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-secondary px-4" @click="setStep(2)">Back</button>
        <button 
  type="submit" 
  class="btn btn-primary px-4"
  :disabled="!canProceedStep3"
>
  Next
</button>


      </div>
    </form>
  </div>
</transition>











<!-- Step 4: Pricing -->
<div v-if="activeStep === 4" key="step4" class="card shadow-sm p-4 mb-4 product-form-card">
  <h5 class="text-center mb-4">Pricing</h5>
  <form @submit.prevent="submitForm">

<!-- Ebook Pricing -->
<div class="mb-4">
  <h6 class="fw-bold text-primary">E-book Pricing</h6>
  <div class="row mb-3">
    <div class="col-md-6 mb-3">
      <label class="form-label">Price</label>
      <input v-model="form.ebookPrice" type="number" class="form-control" />
      <small v-if="errors.ebookPrice" class="text-danger">{{ errors.ebookPrice }}</small>
    </div>
    <div class="col-md-6 mb-3">
      <label class="form-label">Currency</label>
      <select v-model="form.ebookCurrency" class="form-select">
        <option value="">Select</option>
        <option>USD</option><option>EUR</option><option>NGN</option><option>GBP</option>
      </select>
      <small v-if="errors.ebookCurrency" class="text-danger">{{ errors.ebookCurrency }}</small>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-md-6 mb-3">
      <label class="form-label">SKU</label>
      <input v-model="form.ebookSku" type="text" class="form-control" />
      <small v-if="errors.ebookSku" class="text-danger">{{ errors.ebookSku }}</small>
    </div>
    <div class="col-md-6 mb-3">
      <label class="form-label">Discount (%)</label>
      <input v-model="form.ebookDiscount" type="number" min="0" max="100" class="form-control" />
      <small v-if="errors.ebookDiscount" class="text-danger">{{ errors.ebookDiscount }}</small>
    </div>
  </div>
</div>

<!-- Audiobook Pricing -->
<div class="mb-4">
  <h6 class="fw-bold text-primary">Audiobook Pricing</h6>
  <div class="row mb-3">
    <div class="col-md-6 mb-3">
      <label class="form-label">Price</label>
      <input v-model="form.audioPrice" type="number" class="form-control" />
      <small v-if="errors.audioPrice" class="text-danger">{{ errors.audioPrice }}</small>
    </div>
    <div class="col-md-6 mb-3">
      <label class="form-label">Currency</label>
      <select v-model="form.audioCurrency" class="form-select">
        <option value="">Select</option>
        <option>USD</option><option>EUR</option><option>NGN</option><option>GBP</option>
      </select>
      <small v-if="errors.audioCurrency" class="text-danger">{{ errors.audioCurrency }}</small>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-md-6 mb-3">
      <label class="form-label">SKU</label>
      <input v-model="form.audioSku" type="text" class="form-control" />
      <small v-if="errors.audioSku" class="text-danger">{{ errors.audioSku }}</small>
    </div>
    <div class="col-md-6 mb-3">
      <label class="form-label">Discount (%)</label>
      <input v-model="form.audioDiscount" type="number" min="0" max="100" class="form-control" />
      <small v-if="errors.audioDiscount" class="text-danger">{{ errors.audioDiscount }}</small>
    </div>
  </div>
</div>

<!-- Navigation -->
<div class="d-flex justify-content-between">
  <button type="button" class="btn btn-secondary px-4" @click="setStep(3)">Back</button>
  <button type="submit" class="btn btn-primary px-4">Submit</button>
</div>
</form>
</div>





      </div>



    </main>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      dropdowns: { ebook: true, products: true, orders: false },
      activeLink: 'new-product', 
      activeStep: 1,
      form: {
        // Step 1: Product Info
        title: "",
        size: "",
        pages: "",
        category: "",
        description: "",
        type: "",
        // Step 2: Media
        coverImage: null,
        productImages: [],
        // Step 3: Author
        authorName: "",
        authorBio: "",
        authorLinkedIn: "",
        // Step 4: Pricing - E-book
        ebookPrice: "",
        ebookCurrency: "",
        ebookSku: "",
        ebookDiscount: "",
        // Step 4: Pricing - Audiobook
        audioPrice: "",
        audioCurrency: "",
        audioSku: "",
        audioDiscount: ""
      },
      errors: {}
    };
  },
  computed: {
    progressWidth() {
      const totalSteps = 4;
      return `${((this.activeStep - 1) / (totalSteps - 1)) * 100}%`;
    },
    canProceedStep3() {
      const bioFilled = !!this.form.authorBio;
      const linkedInFilled = !!this.form.authorLinkedIn;
      const bioValid = !bioFilled || this.form.authorBio.length >= 10;
      const linkedInValid =
        !linkedInFilled ||
        /^https:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/.test(this.form.authorLinkedIn);
      return bioValid && linkedInValid;
    },
    canProceedStep4() {
      const ebookFields = [
        this.form.ebookPrice,
        this.form.ebookCurrency,
        this.form.ebookSku,
        this.form.ebookDiscount
      ];
      const audioFields = [
        this.form.audioPrice,
        this.form.audioCurrency,
        this.form.audioSku,
        this.form.audioDiscount
      ];
      return ebookFields.every(f => f !== "" && f !== null) && audioFields.every(f => f !== "" && f !== null);
    }
  },
  watch: {
    "form.authorBio"(val) {
      this.errors.authorBio = val && val.length < 10 ? "Biography must be at least 10 characters" : "";
    },
    "form.authorLinkedIn"(val) {
      if (!val) this.errors.authorLinkedIn = "";
      else {
        const pattern = /^https:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;
        this.errors.authorLinkedIn = pattern.test(val) ? "" : "Enter a valid LinkedIn URL";
      }
    }
  },
  methods: {
  // Set active link and open parent dropdowns
  setActiveLink(link) {
    this.activeLink = link;

    // Open dropdowns based on link
    if (["overview", "products", "new-product", "edit-product", "product-list"].includes(link)) {
      this.dropdowns.ebook = true;
    }
    if (["new-product", "edit-product", "product-list"].includes(link)) {
      this.dropdowns.products = true;
    }
    if (["orders", "pending-orders", "completed-orders", "refund-requests"].includes(link)) {
      this.dropdowns.ebook = true;
      this.dropdowns.orders = true;
    }

    // Sync active step for New Product
    if (link === "new-product") this.activeStep = 1;
  },

  toggleDropdown(name) {
    this.dropdowns[name] = !this.dropdowns[name];
  },

  setStep(step) {
    this.activeStep = step;
  },

  validateStep(step = this.activeStep) {
    this.errors = {};

    if (step === 1) {
      if (!this.form.title) this.errors.title = "Title is required";
      if (!this.form.size) this.errors.size = "Size is required";
      if (!this.form.pages) this.errors.pages = "Duration/Pages is required";
      if (!this.form.category) this.errors.category = "Category is required";
      if (!this.form.description) this.errors.description = "Description is required";
      if (!this.form.type) this.errors.type = "Type is required";
    }

    if (step === 2) {
      if (!this.form.coverImage) this.errors.coverImage = "Cover image is required";
      if (!this.form.productImages.length) this.errors.productImages = "Add at least one product image";
    }

    if (step === 3) {
      const bioFilled = !!this.form.authorBio;
      const linkedInFilled = !!this.form.authorLinkedIn;
      if (bioFilled && this.form.authorBio.length < 10)
        this.errors.authorBio = "Biography must be at least 10 characters";
      if (
        linkedInFilled &&
        !/^https:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/.test(this.form.authorLinkedIn)
      )
        this.errors.authorLinkedIn = "Enter a valid LinkedIn URL";
    }

    if (step === 4) {
      // E-book
      if (!this.form.ebookPrice) this.errors.ebookPrice = "Price required";
      if (!this.form.ebookCurrency) this.errors.ebookCurrency = "Currency required";
      if (!this.form.ebookSku) this.errors.ebookSku = "SKU required";
      if (!this.form.ebookDiscount) this.errors.ebookDiscount = "Discount required";
      // Audiobook
      if (!this.form.audioPrice) this.errors.audioPrice = "Price required";
      if (!this.form.audioCurrency) this.errors.audioCurrency = "Currency required";
      if (!this.form.audioSku) this.errors.audioSku = "SKU required";
      if (!this.form.audioDiscount) this.errors.audioDiscount = "Discount required";
    }

    return Object.keys(this.errors).length === 0;
  },

  nextStep() {
    if (this.activeStep === 3 && !this.canProceedStep3) return;
    if (!this.validateStep()) return;

    if (this.activeStep < 4) this.activeStep++;
    else this.submitForm();
  },

  submitForm() {
    // Validate all steps that matter
    const step1Valid = this.validateStep(1);
    const step2Valid = this.validateStep(2);
    const step4Valid = this.validateStep(4);

    if (!step1Valid || !step2Valid || !step4Valid) {
      alert("Please fill all required fields correctly before submitting.");
      return;
    }

    const bioFilled = !!this.form.authorBio;
    const linkedInFilled = !!this.form.authorLinkedIn;
    if (bioFilled && this.form.authorBio.length < 10) {
      alert("Please correct the author biography.");
      return;
    }
    if (
      linkedInFilled &&
      !/^https:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/.test(this.form.authorLinkedIn)
    ) {
      alert("Please correct the LinkedIn URL.");
      return;
    }

    console.log("Form submitted:", this.form);
    alert("Form submitted successfully!");

    // Reset form
    this.activeStep = 1;
    Object.keys(this.form).forEach((key) => {
      this.form[key] = Array.isArray(this.form[key]) ? [] : null;
    });
    this.errors = {};
  },

  onFileChange(event, type) {
    const files = event.target.files;
    if (!files.length) return;

    if (type === "cover") {
      const reader = new FileReader();
      reader.onload = (e) => (this.form.coverImage = e.target.result);
      reader.readAsDataURL(files[0]);
    }

    if (type === "product") {
      Array.from(files).forEach((file) => {
        if (this.form.productImages.length >= 5) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          const imgData = e.target.result;
          if (!this.form.productImages.includes(imgData)) this.form.productImages.push(imgData);
        };
        reader.readAsDataURL(file);
      });
    }
  },

  onDrop(event, type) {
    const files = event.dataTransfer.files;
    if (!files.length) return;
    this.onFileChange({ target: { files } }, type);
  },

  removeImage(type, index = null) {
    if (type === "cover") this.form.coverImage = null;
    if (type === "product" && index !== null) this.form.productImages.splice(index, 1);
  },

  openNewProduct() {
    this.setActiveLink("new-product");
  }
}

};
</script>




<style scoped>
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
    width: 200px; /* narrower sidebar */
  }

  .nav-link,
  .ebook-link {
    font-size: 0.75rem; /* smaller text only for mobile */
    padding: 0.35rem 0.7rem; /* optional: reduce padding */
  }

  .brand-title {
    font-size: 1rem; /* smaller logo/title text */
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
