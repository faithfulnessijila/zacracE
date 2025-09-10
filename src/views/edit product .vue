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

 
  </ul>
</li>

  </ul>
</nav>

    </aside>

    <!-- Main Content -->
    <main class="flex-fill p-4 bg-light">
      <!-- Header -->
      <div class="d-flex align-items-center mb-4 flex-wrap">
        <h3 class="fw-bold new-product-title">Edit Product</h3>
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
  <span style="color: #4d148c;">Ebook</span>
</li>
<li class="nav-item text-center step-item" @click="setStep(3)">
  <span class="step" :class="{ active: activeStep === 3 }">3</span><br>
  <span style="color: #4d148c;">Audio</span>
</li>
<li class="nav-item text-center step-item" @click="setStep(4)">
  <span class="step" :class="{ active: activeStep === 4 }">4</span><br>
  <span style="color: #4d148c;">Author</span>
</li>

  </ul>
</div>













<!-- Step 2: Media -->
<!-- Step 1: Product Info -->
<!-- Step 1: Product Info -->

<div v-if="activeStep === 1" key="step1" class="card shadow-sm p-4 mb-4 product-form-card">
  <h5 class="text-center mb-4">Product Information</h5>
  <form @submit.prevent="nextStep">
  <!-- Title -->
  <div class="row mb-3">
    <div class="col-12">
      <label class="form-label">Title</label>
      <input 
        v-model="form.title" 
        type="text" 
        class="form-control w-100" 
        placeholder="Enter product title"
        style="padding: 8px 12px; font-size: 0.95rem;"
      />
      <small v-if="errors.title" class="text-danger">{{ errors.title }}</small>
    </div>
  </div>

  <!-- Category -->
  <div class="row mb-3">
    <div class="col-12 col-md-6">
      <label class="form-label">Category</label>
      <select 
  v-model="form.category" 
  class="form-select w-100"
  style="padding: 6px 10px; font-size: 0.8rem; line-height: 1.2;"
>
  <option value="">Select Category</option>
  <option>Data Analytics</option>
  <option>Programming</option>
  <option>Design</option>
</select>

      <small v-if="errors.category" class="text-danger">{{ errors.category }}</small>
    </div>
  </div>

  <!-- Description -->
  <div class="row mb-3">
    <div class="col-12">
      <label class="form-label">Description</label>
      <textarea
        v-model="form.description"
        class="form-control w-100"
        placeholder="Write a detailed description..."
        style="min-height: 120px; padding: 10px; font-size: 0.95rem; resize: vertical;"
      ></textarea>
      <small v-if="errors.description" class="text-danger">{{ errors.description }}</small>
    </div>
  </div>

<!-- Product Image Upload -->
<div class="row mb-3">
  <div class="col-12">
    <label class="form-label">Product Image</label>
    <div class="text-center">
      <div
        class="border-dotted-custom p-3 rounded"
        @dragover.prevent
        @drop.prevent="onDrop($event, 'image')"
        style="min-height: 140px;"
      >
        <!-- Hidden Input -->
        <input
          type="file"
          accept="image/*"
          class="d-none"
          ref="imageInput"
          @change="onFileChange($event, 'image')"
        />

        <!-- Empty State -->
        <div v-if="!form.imagePreview" class="text-center">
          <i 
            href="#" 
            @click.prevent="$refs.imageInput.click()"  
            class="bi bi-cloud-arrow-up" 
            style="font-size: 3.5rem; color: #4d148c;"
          ></i>
          <p class="mt-2 mb-1" style="font-size: 0.95rem;">
            Drop your image here or
            <a href="#" @click.prevent="$refs.imageInput.click()" style="color: #4d148c; font-weight: 600;">
              Browse
            </a>
          </p>
          <small class="text-muted" style="font-size: 0.8rem;">Supports: JPG, JPEG, PNG</small>
          <div v-if="errors.image" class="text-danger mt-1">{{ errors.image }}</div>
        </div>

        <!-- Preview State -->
        <div v-else class="text-center">
          <img 
            :src="form.imagePreview" 
            class="img-fluid rounded mb-2" 
            style="max-height: 150px;" 
          />
          <div>
            <button 
              type="button" 
              class="btn btn-sm btn-danger" 
              @click="removeImage('image')"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  <!-- Next Button -->
  <div class="d-flex justify-content-end">
    <button 
      type="submit" 
      class="btn px-4 next-btn" 
      :class="{
        'btn-primary': form.title && form.category && form.description && form.image, 
        'btn-disabled': !form.title || !form.category || !form.description || !form.image
      }"
      :disabled="!form.title || !form.category || !form.description || !form.image"
    >
      Next
    </button>
  </div>
</form>


</div>



<!-- Step 2: Media -->
<transition name="slide-fade" mode="out-in">
  <div v-if="activeStep === 2" key="step2" class="mb-4">
<!-- Ebook Details -->
<div class="card shadow-sm p-4 mb-4 product-form-card">
  <h5 class="text-center mb-3">E-book Details</h5>
  <div class="row mb-3">
    <div class="col-md-6">
      <label class="form-label">Number of Pages</label>
      <input v-model="form.pages" type="number" class="form-control" placeholder="e.g. 120" />
      <small v-if="errors.pages" class="text-danger">{{ errors.pages }}</small>
    </div>
    <div class="col-md-6">
      <label class="form-label">Price</label>
      <input v-model="form.price" type="number" class="form-control" placeholder="e.g. 25" />
      <small v-if="errors.price" class="text-danger">{{ errors.price }}</small>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col-md-6">
      <label class="form-label">Currency</label>
      <select v-model="form.currency" class="form-select">
        <option value="">Select Currency</option>
        <option>USD</option>
        <option>NGN</option>
        <option>EUR</option>
      </select>
      <small v-if="errors.currency" class="text-danger">{{ errors.currency }}</small>
    </div>
    <div class="col-md-6">
      <label class="form-label">File Size (MB)</label>
      <input v-model="form.size" type="number" class="form-control" placeholder="e.g. 10" />
      <small v-if="errors.size" class="text-danger">{{ errors.size }}</small>
    </div>
  </div>

  <div class="row mb-3">
  <div class="col-12">
    <label class="form-label">Upload File</label>
    <div class="text-center">
      <div
        class="border-dotted-custom p-3 rounded"
        @dragover.prevent
        @drop.prevent="onDrop($event, 'file')"
        style="min-height: 160px !important;"
      >
        <!-- Hidden Input -->
        <input
          type="file"
          accept=".pdf,.epub,.docx"
          class="d-none"
          ref="fileInput"
          @change="onFileChange($event, 'file')"
        />

        <!-- Empty State -->
        <div v-if="!form.file" class="text-center">
          <i
            class="bi bi-file-earmark-arrow-up"
            style="font-size: 3.5rem !important; color: #4d148c !important; cursor: pointer !important;"
            @click.prevent="$refs.fileInput.click()"
          ></i>
          <p class="mt-2 mb-1" style="font-size: 0.95rem !important;">
            Drop your file here or
            <a
              href="#"
              @click.prevent="$refs.fileInput.click()"
              style="color: #4d148c !important; font-weight: 600 !important; cursor: pointer !important; text-decoration: underline !important;"
            >
              Browse
            </a>
          </p>
          <small class="text-muted" style="font-size: 0.8rem !important;">Supports: PDF, EPUB, DOCX</small>
          <div v-if="errors.file" class="text-danger mt-1">{{ errors.file }}</div>
        </div>

        <!-- Preview State -->
        <div v-else class="text-center">
          <div class="p-2 border rounded bg-light d-inline-block w-100">
            <!-- File Name + Size -->
            <p class="fw-bold mb-1">{{ form.file.name }}</p>
            <small class="text-muted d-block mb-2">
              {{ (form.file.size / 1024 / 1024).toFixed(2) }} MB
            </small>

            <!-- Preview Area -->
            <div v-if="filePreviewUrl" class="mt-2">
              <!-- PDF Preview -->
              <iframe
                v-if="form.file.type === 'application/pdf'"
                :src="filePreviewUrl"
                style="width: 100%; height: 250px; border: 1px solid #ddd; border-radius: 6px;"
              ></iframe>

              <!-- DOCX/EPUB Preview as Icon -->
              <div v-else class="text-center">
                <i :class="getFileIcon(form.file.name)" style="font-size: 3rem; color: #4d148c;"></i>
                <p class="text-muted">Preview not available</p>
              </div>
            </div>
          </div>

          <!-- Remove -->
          <div>
            <button class="btn btn-sm btn-danger mt-2" @click="removeFile">Remove</button>
          </div>
        </div>
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
  <h5 class="text-center mb-4">Audiobook Upload</h5>

  <form @submit.prevent="nextStep">
    <!-- Duration & File Size -->
    <div class="row mb-3">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <label class="form-label">Duration</label>
        <input
          v-model="form.audioDuration"
          type="text"
          class="form-control w-100"
          placeholder="e.g. 1min"
          style="padding: 8px 12px; font-size: 0.95rem;"
        />
        <small v-if="errors.audioDuration" class="text-danger">{{ errors.audioDuration }}</small>
      </div>

      <div class="col-12 col-md-6">
        <label class="form-label">File Size</label>
        <input
          v-model="form.audioSize"
          type="text"
          class="form-control w-100"
          placeholder="e.g. 120 MB"
          style="padding: 8px 12px; font-size: 0.95rem;"
        />
        <small v-if="errors.audioSize" class="text-danger">{{ errors.audioSize }}</small>
      </div>
    </div>

    <!-- Price & Currency -->
    <div class="row mb-3">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <label class="form-label">Price</label>
        <input
          v-model="form.audioPrice"
          type="number"
          class="form-control w-100"
          placeholder="Enter price"
          style="padding: 8px 12px; font-size: 0.95rem;"
        />
        <small v-if="errors.audioPrice" class="text-danger">{{ errors.audioPrice }}</small>
      </div>

      <div class="col-12 col-md-6">
        <label class="form-label">Currency</label>
        <select
          v-model="form.audioCurrency"
          class="form-select w-100"
          style="padding: 6px 10px; font-size: 0.85rem; line-height: 1.2;"
        >
          <option value="">Select Currency</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="NGN">NGN (₦)</option>
        </select>
        <small v-if="errors.audioCurrency" class="text-danger">{{ errors.audioCurrency }}</small>
      </div>
    </div>

    <!-- Audiobook File Upload -->
    <div class="row mb-3">
      <div class="col-12">
        <label class="form-label">Audiobook File</label>
        <div
          class="border-dotted-custom p-3 rounded text-center"
          @dragover.prevent
          @drop.prevent="onDrop($event, 'audiobook')"
          style="min-height: 140px;"
        >
          <!-- Hidden Input -->
          <input
            type="file"
            accept=".mp3,.m4a,.wav"
            class="d-none"
            ref="audioInput"
            @change="onFileChange($event, 'audiobook')"
          />

          <!-- Empty State -->
          <div v-if="!form.audioFile" class="text-center">
            <i 
              href="#" 
              @click.prevent="$refs.audioInput.click()"  
              class="bi bi-cloud-arrow-up" 
              style="font-size: 3.5rem; color: #4d148c;"
            ></i>
            <p class="mt-2 mb-1" style="font-size: 0.95rem;">
              Drop your audiobook file here or
              <a href="#" @click.prevent="$refs.audioInput.click()" style="color: #4d148c; font-weight: 600;">
                Browse
              </a>
            </p>
            <small class="text-muted" style="font-size: 0.8rem;">Supports: MP3, M4A, WAV</small>
            <div v-if="errors.audioFile" class="text-danger mt-1">{{ errors.audioFile }}</div>
          </div>

          <!-- Preview State -->
          <div v-else class="text-center">
            <i class="bi bi-file-earmark-music" style="font-size: 3rem; color: #4d148c;"></i>
            <p class="mt-2">{{ form.audioFile.name }}</p>
            <button 
              type="button" 
              class="btn btn-sm btn-danger mt-2" 
              @click="removeFile('audiobook')"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary px-4" @click="setStep(2)">
        Back
      </button>
      <button 
        type="submit" 
        class="btn px-4 next-btn" 
        :class="{
          'btn-primary': form.audioDuration && form.audioSize && form.audioPrice && form.audioCurrency && form.audioFile, 
          'btn-disabled': !form.audioDuration || !form.audioSize || !form.audioPrice || !form.audioCurrency || !form.audioFile
        }"
        :disabled="!form.audioDuration || !form.audioSize || !form.audioPrice || !form.audioCurrency || !form.audioFile"
      >
        Next
      </button>
    </div>
  </form>
</div>

</transition>











<!-- Step 4: Pricing -->
<div v-if="activeStep === 4" key="step4" class="card shadow-sm p-4 mb-4 product-form-card">
  <h5 class="text-center mb-4">Author Information</h5>

  <form @submit.prevent="submitForm">
    <div v-for="(author, index) in form.authors" :key="index" class="border rounded p-3 mb-3">
      <h6 class="fw-bold text-primary">Author {{ index + 1 }}</h6>

      <!-- Author Name -->
      <div class="mb-3">
        <label class="form-label">Author Name</label>
        <input
          v-model="author.name"
          type="text"
          class="form-control"
          placeholder="Enter author name"
        />
        <small v-if="errors[`authorName_${index}`]" class="text-danger">
          {{ errors[`authorName_${index}`] }}
        </small>
      </div>

      <!-- Remove Author Button -->
      <div v-if="form.authors.length > 1" class="text-end">
        <button type="button" class="btn btn-sm btn-outline-danger" @click="removeAuthor(index)">
          Remove Author
        </button>
      </div>
    </div>

    <!-- Add Another Author -->
    <div class="mb-3">
      <button type="button" class="btn btn-sm btn-outline-primary" @click="addAuthor">
        + Add Another Author
      </button>
    </div>

    <!-- Navigation -->
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary px-4" @click="setStep(3)">
        Back
      </button>
      <button 
        type="submit" 
        class="btn btn-primary px-4"
        :disabled="!canProceedStep4"
      >
        Submit
      </button>
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
      activeLink: "new-product",
      activeStep: 1,
      filePreviewUrl: null,
      form: {
        // Step 1: Product Info
        title: "",
        category: "",
        description: "",
        image: null,
        imagePreview: null,

        // Step 2: Ebook
        pages: "",
        price: "",
        currency: "",
        size: "",
        file: null,

        // Step 3: Audiobook
        audioDuration: "",
        audioSize: "",
        audioPrice: "",
        audioCurrency: "",
        audioFile: null,

        // Step 4: Authors
        authors: [{ name: "" }]
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
      return (
        this.form.audioDuration &&
        this.form.audioSize &&
        this.form.audioPrice &&
        this.form.audioCurrency &&
        this.form.audioFile
      );
    },
    canProceedStep4() {
      return this.form.authors.every((a) => a.name && a.name.trim() !== "");
    }
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
      if (
        ["overview", "products", "new-product", "edit-product", "product-list"].includes(link)
      ) {
        this.dropdowns.ebook = true;
      }
      if (["new-product", "edit-product", "product-list"].includes(link)) {
        this.dropdowns.products = true;
      }
      if (
        ["orders", "pending-orders", "completed-orders", "refund-requests"].includes(link)
      ) {
        this.dropdowns.ebook = true;
        this.dropdowns.orders = true;
      }
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
        if (!this.form.category) this.errors.category = "Category is required";
        if (!this.form.description) this.errors.description = "Description is required";
        if (!this.form.image) this.errors.image = "Product image is required";
      }

      if (step === 2) {
        if (!this.form.pages) this.errors.pages = "Pages required";
        if (!this.form.price) this.errors.price = "Price required";
        if (!this.form.currency) this.errors.currency = "Currency required";
        if (!this.form.size) this.errors.size = "File size required";
        if (!this.form.file) this.errors.file = "File upload required";
      }

      if (step === 3) {
        if (!this.form.audioDuration) this.errors.audioDuration = "Duration required";
        if (!this.form.audioSize) this.errors.audioSize = "File size required";
        if (!this.form.audioPrice) this.errors.audioPrice = "Price required";
        if (!this.form.audioCurrency) this.errors.audioCurrency = "Currency required";
        if (!this.form.audioFile) this.errors.audioFile = "Audiobook file required";
      }

      if (step === 4) {
        this.form.authors.forEach((a, index) => {
          if (!a.name || a.name.trim() === "") {
            this.errors[`authorName_${index}`] = "Author name is required";
          }
        });
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
      const step1Valid = this.validateStep(1);
      const step2Valid = this.validateStep(2);
      const step3Valid = this.validateStep(3);
      const step4Valid = this.validateStep(4);

      if (!step1Valid || !step2Valid || !step3Valid || !step4Valid) {
        alert("Please fill all required fields correctly before submitting.");
        return;
      }

      console.log("Form submitted:", this.form);
      alert("Form submitted successfully!");

      this.activeStep = 1;
      Object.keys(this.form).forEach((key) => {
        if (Array.isArray(this.form[key])) {
          this.form[key] = [];
        } else {
          this.form[key] = null;
        }
      });
      this.form.authors = [{ name: "" }]; // reset authors separately
      this.errors = {};
    },

    addAuthor() {
      this.form.authors.push({ name: "" });
    },

    removeAuthor(index) {
      this.form.authors.splice(index, 1);
    },

    onFileChange(event, type) {
      const files = event.target.files;
      if (!files.length) return;
      const file = files[0];

      if (type === "image") {
        this.form.image = file;
        this.form.imagePreview = URL.createObjectURL(file);
      }

      if (type === "file") {
        this.form.file = file;
        if (file.type === "application/pdf") {
          this.filePreviewUrl = URL.createObjectURL(file);
        } else {
          this.filePreviewUrl = null;
        }
      }

      if (type === "audiobook") {
        this.form.audioFile = file;
      }
    },

    onDrop(event, type) {
      const files = event.dataTransfer.files;
      if (!files.length) return;
      this.onFileChange({ target: { files } }, type);
    },

    removeImage(type) {
      if (type === "image") {
        this.form.image = null;
        this.form.imagePreview = null;
      }
    },

    removeFile(type) {
      if (type === "file") {
        this.form.file = null;
        this.filePreviewUrl = null;
      }
      if (type === "audiobook") {
        this.form.audioFile = null;
      }
    },

    getFileIcon(fileName) {
      if (fileName.endsWith(".docx")) return "bi bi-file-earmark-word";
      if (fileName.endsWith(".epub")) return "bi bi-book";
      if (fileName.endsWith(".mp3") || fileName.endsWith(".m4a") || fileName.endsWith(".wav"))
        return "bi bi-file-earmark-music";
      return "bi bi-file-earmark";
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
