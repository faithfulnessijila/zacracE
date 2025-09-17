<template>
    <div>
      
  
    
      <nav
  class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 py-3"
  style="box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); display: block; padding: 10px 90px !important;"
>
<div class="container-fluid container-fluid1 d-flex align-items-center justify-content-between flex-wrap">

<!-- Logo on the left -->
<div 
  class="navbar-logo d-flex align-items-center" 
  @click="$router.push('/')" 
  style="cursor: pointer;"
>
  <img src="/public/d.png" alt="Logo" class="logo-icon" style="margin-top: -10px;" />
  <h3 class="logo-text ms-2" style="font-size: 20px;">
    Zacrac <span>Learning</span>
  </h3>
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
      <li>
  <a
    class="dropdown-item py-2"
    href="#"
    @click.prevent="$router.push('/Transaction')"
  >
    <i class="bi bi-credit-card me-2"></i> Transactions
  </a>
</li>
      <li><a  @click="$router.push('/purchased')" class="dropdown-item py-2" href="#"><i class="bi bi-bag-check me-2"></i> Purchased</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><button class="dropdown-item text-danger fw-semibold py-2" @click="logout"><i class="bi bi-box-arrow-right me-2"></i> Sign Out</button></li>
    </ul>
  </div>

</div>
</div>



  <!-- Dropdowns eBooks & Audio -->
  <div class="container-fluid">
  <ul class="dropdowns-container d-flex gap-4 mt-4" style="padding-left: 0; list-style: none; display:none;">
    
    <!-- eBooks Dropdown -->
    <!-- eBooks Dropdown -->
<li 
  class="custom-dropdown" 
  :class="{ active: activeDropdown === 'ebooks' }" 
  style="list-style: none;display:none;"
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
  style="list-style: none;display:none;"
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
<div class="container py-4">

<!-- Skeleton Loader -->
<div v-if="loadingBook" class="d-flex flex-column flex-lg-row gap-3">
  <div class="skeleton skeleton-img" style="width: 140px; height: 200px;"></div>
  <div class="flex-grow-1">
    <div class="skeleton skeleton-title mb-2" style="width: 60%; height: 22px;"></div>
    <div class="skeleton skeleton-text mb-1" style="width: 80%; height: 16px;"></div>
    <div class="skeleton skeleton-text mb-1" style="width: 70%; height: 16px;"></div>
  </div>
</div>

<!-- Book Details -->
<div v-else-if="book" class="row justify-content-center gap-3">

  <!-- Format Indicator Buttons -->
  <div class="d-flex gap-2 mb-3 pb-2 border-bottom flex-wrap">
    <button
      v-if="book.formats.some(f => f.type === 'ebook')"
      class="btn btn-sm fw-bold me-2"
      style="background-color: #4d148c; color: #fff; border: none;"
    >
      eBook
    </button>

    <button
      v-if="book.formats.some(f => f.type === 'audiobook')"
      class="btn btn-sm fw-bold"
      style="background-color: #4d148c; color: #fff; border: none;"
    >
      Audiobook
    </button>
  </div>

  <!-- Show all formats -->
  <div
    v-for="format in book.formats"
    :key="format.type"
    :class="[
      'book-card',
      'p-4',
      'shadow-sm',
      'rounded',
      'col-12',
      'col-md-6',
      'mb-3',
      format.type === 'ebook' ? 'ebook-card' : 'audiobook-card'
    ]"
    style="position: relative;"
  >
  
    <!-- Top-right format label -->
    <span class="format-label" :class="format.type">{{ format.type }}</span>

    <div class="d-flex flex-column flex-lg-row gap-3 align-items-start">
      <!-- Cover -->
      <div class="text-center" :style="book.formats.length === 1 ? 'max-width: 250px; flex-shrink: 0;' : 'max-width: 180px; flex-shrink: 0;'">
        <div class="book-cover-container rounded shadow-sm" style="overflow: hidden; background-color: #f8f9fa;">
          <img
            :src="book.coverImageUrl || '/mercy.jpg'"
            class="img-fluid"
            style="width: 100%; height: auto; object-fit: cover; transition: transform 0.3s;"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :style="{ transform: hover ? 'scale(1.05)' : 'scale(1)' }"
          />
        </div>
      </div>

      <!-- Info -->
      <div class="flex-grow-1">
        <h5 class="fw-bold mb-1">{{ book.title }}</h5>
        <p class="text-muted mb-1" style="font-size: 0.95rem;">by {{ Array.isArray(book.author) ? book.author.join(', ') : book.author }}</p>
        <p class="mb-2" style="font-size: 0.9rem;"><strong>Category:</strong> {{ book.category?.name || 'N/A' }}</p>

        <p class="mb-3" style="font-size: 0.9rem;">
          {{ book.bookDescription }}
        </p>

        <div class="d-flex align-items-center gap-2 mb-2">
          <h6 class="text-danger mb-0">
            ₦{{ format.price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </h6>
     <!-- Buy Now Button -->
<!-- Inside v-for="format in book.formats" -->
<button
  @click="initiatePayment(format)"
  :disabled="!book || !book._id || (loadingPayment && loadingFormat === format.type)"
  class="mt-3"
  :style="{ 
    backgroundColor: '#4d148c', 
    borderColor: '#4d148c', 
    color: 'white',
    borderRadius: '8px',
    padding: '8px 18px'
  }"
>
  <span v-if="loadingPayment && loadingFormat === format.type">
    <span class="spinner-border spinner-border-sm me-1"></span> Processing...
  </span>
  <span v-else>
    Buy {{ format.type === 'ebook' ? 'eBook' : 'Audiobook' }}
  </span>
</button>






        </div>

        <div class="d-flex flex-wrap gap-2 text-muted" style="font-size: 0.85rem;">
          <p class="mb-0"><strong>Pages:</strong> {{ format.numberOfPages || 'N/A' }}</p>
          <p class="mb-0"><strong>File Size:</strong> {{ format.fileSizeMB || 'N/A' }} MB</p>
          <p class="mb-0" v-if="format.type === 'audiobook'"><strong>Duration:</strong> {{ format.duration || 'N/A' }}</p>
        </div>

        <span
          class="badge mt-2 text-uppercase"
          :style="{ backgroundColor: '#4d148c', color: '#fff', fontSize: '0.75rem' }"
        >
          {{ format.type }}
        </span>
      </div>
    </div>
  </div>

</div>

<!-- No Book Found -->
<div v-else class="text-center py-5">
  <h5 class="text-danger">Book not found!</h5>
</div>

</div>


    </div>
  
  
  
  
  
  
  









  
<!-- Review Form -->
<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-10 col-lg-8">
      <div class="p-5 bg-secondary rounded-3 shadow-sm text-center text-white">
        <h2 class="fw-bold mb-3">
          {{ editingReviewId ? "Edit Your Review" : "Write a Review" }}
        </h2>

        <!-- Success Message -->
        <div v-if="successMessage" class="alert alert-success text-start">
          {{ successMessage }}
        </div>

        <!-- Star Rating -->
        <div class="mb-3">
          <span
            v-for="star in 5"
            :key="star"
            class="rating-star"
            :class="{ empty: star > (hoverRating || selectedRating) }"
            @mouseover="hoverRating = star"
            @mouseleave="hoverRating = 0"
            @click="selectedRating = star"
          >
            ★
          </span>
        </div>

        <!-- Review Input & Submit -->
        <div class="d-flex flex-column gap-2">
          <textarea
            v-model="reviewText"
            class="form-control review-input"
            placeholder="Write your review here..."
            rows="4"
            style="resize: vertical; font-size: 1rem; padding: 10px;"
            @keyup.enter="submitReview"
          ></textarea>

          <!-- Sign in hint for guests -->
          <p v-if="!user?._id" class="text-light small">
            You’ll need to <a href="/sign-in" class="text-warning">sign in</a> to post your review.
          </p>

          <button
            class="btn fw-bold mx-auto"
            :disabled="submittingReview"
            @click="submitReview"
            style="width: 150px; font-size: 1rem; padding: 0.6rem 1.2rem; background-color: #4d148c; color: #fff; border: none; border-radius: 8px;"
          >
            <span v-if="submittingReview" class="spinner-border spinner-border-sm me-1"></span>
            {{ editingReviewId ? "Update" : "Submit" }}
          </button>
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="mt-2 px-2 py-1 rounded text-start"
          style="background-color: #f8d7da; color: #842029; display: inline-block; word-wrap: break-word; white-space: normal;"
        >
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Reviews List -->
<div class="container my-5">
  <h4 class="fw-bold mb-3">Customer Reviews ({{ reviews.length }})</h4>

  <!-- No reviews -->
  <div v-if="reviews.length === 0" class="text-muted">
    No reviews yet.
    <span v-if="!user?._id">Please <a href="/sign-in">sign in</a> to write a review.</span>
    <span v-else>Be the first to review this product!</span>
  </div>

  <!-- Show preview or all -->
  <div
    v-for="review in displayedReviews"
    :key="review._id"
    class="card mb-3 shadow-sm"
    @mouseover="hover = review._id"
    @mouseleave="hover = false"
  >
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <strong>{{ review.user?.name || "Anonymous" }}</strong>
          <small class="text-muted ms-2">
            {{ new Date(review.createdAt).toLocaleDateString() }}
          </small>
          <div class="mt-1">
            <i
              v-for="n in 5"
              :key="n"
              class="bi"
              :class="n <= review.rating ? 'bi-star-fill text-warning' : 'bi-star text-secondary'"
            ></i>
          </div>
        </div>

        <!-- Edit/Delete only for review owner -->
        <div
          v-if="user?._id === review.user?._id && hover === review._id"
          class="btn-group"
        >
          <button class="btn btn-sm btn-outline-primary" @click="startEditReview(review)">
            Edit
          </button>
          <button class="btn btn-sm btn-outline-danger" @click="deleteReview(review._id)">
            Delete
          </button>
        </div>
      </div>

      <p class="mt-2">{{ review.review }}</p>

      <!-- Like/Dislike Buttons -->
      <!-- Like/Dislike Buttons -->
<div class="d-flex gap-2">
  <template v-if="user?._id">
    <button
      class="btn btn-sm"
      :class="[review.userVote === 'like' ? 'btn-success' : 'btn-light']"
      @click="likeReview(review)"
    >
      👍 {{ review.likes }}
    </button>

    <button
      class="btn btn-sm"
      :class="[review.userVote === 'dislike' ? 'btn-danger' : 'btn-light']"
      @click="dislikeReview(review)"
    >
      👎 {{ review.dislikes }}
    </button>
  </template>

  <template v-else>
    <small class="text-muted">Sign in to like or dislike reviews</small>
  </template>
</div>

    </div>
  </div>

  <!-- Toggle button -->
  <div v-if="reviews.length > previewLimit" class="text-center mt-3">
    <button
      class="btn btn-sm text-white fw-bold"
      style="background-color: #4d148c;"
      @click="showAllReviews = !showAllReviews"
    >
      {{ showAllReviews ? "Show Less" : "Show All Reviews" }}
    </button>
  </div>
</div>




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <footer class="bg-secondary text-white py-5 mt-5">
  <div class="container">
    <div class="row align-items-start">
      
      <!-- Branding Section -->
      <div class="col-12 col-md-3 mb-4">
        <div class="d-flex align-items-center mb-2">
         
          <h4 class="fw-bold mb-0">Zacrac Learning</h4>
        </div>
        <h4>Africa's No. 1 Data School</h4>
        <div class="d-flex gap-3">
  <!-- Facebook -->
  <a href="https://facebook.com/yourpage" target="_blank" 
     class="text-dark d-flex align-items-center justify-content-center"
     style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
    <i class="bi bi-facebook"></i>
  </a>

  <!-- Twitter (X) -->
  <a href="https://twitter.com/yourhandle" target="_blank" 
     class="text-dark d-flex align-items-center justify-content-center"
     style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
    <i class="bi bi-twitter"></i>
  </a>

  <!-- LinkedIn -->
  <a href="https://linkedin.com/in/yourprofile" target="_blank" 
     class="text-dark d-flex align-items-center justify-content-center"
     style="border: 5px solid #fff; background-color: #fff; width: 30px; height: 35px; border-radius: 10%;">
    <i class="bi bi-linkedin"></i>
  </a>

  <!-- YouTube -->
  <a href="https://youtube.com/@yourchannel" target="_blank" 
     class="text-dark d-flex align-items-center justify-content-center"
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
 
 const API_BASE = "https://zacracebookwebsite.onrender.com";
 
 export default {
   name: "ProductDetails",
   components: { Carousel },
 
   data() {
     return {
       paymentError: "",
       categories: [],
       user: null,
       userLoaded: false,
       bsCollapse: null,
       hoverRating: 0,
       loadingPayment: {}, // object keyed by format type
    paymentError: "",
 
       // Book
       book: { coverImageUrl: null, formats: [] },
       loadingBook: true,
 
       // Reviews
       reviews: [],
       reviewText: "",
       selectedRating: 0,
       editingReviewId: null,
       submittingReview: false,
       voting: false,
       activeReviewId: null,
       showAllReviews: false, // ✅ control preview vs full
 
       // UI
       errorMessage: "",
       successMessage: "",
       token: localStorage.getItem("token"),
     };
   },
 
   beforeUnmount() {
     document.removeEventListener("click", this.handleClickOutside);
   },
 
   methods: {
    async initiatePayment(format) {
  if (!this.user?._id) {
    this.showError("You need to be signed in to make a payment!");
    return this.$router.push("/sign-in");
  }

  const { productId } = this.$route.params;
  if (!productId) return this.showError("Invalid product.");

  console.log("[Payment ProductId]", productId);
  console.log("[Payment Payload]", {
    email: this.user.email,
    formatType: format.type
  });

  try {
    this.loadingPayment = true;
    this.loadingFormat = format.type;
    this.paymentError = "";

    const { data } = await axios.post(
      `${API_BASE}/initiate-payment/${productId}`,
      { 
        email: this.user.email, 
        formatType: format.type.toLowerCase() // ✅ ensure lowercase
      },
      {
        headers: { Authorization: `Bearer ${this.token}` }
      }
    );

    if (data?.authorization_url) {
      window.location.href = data.authorization_url;
    } else {
      this.showError(`Payment failed: ${data?.message || "No payment URL returned"}`);
    }
  } catch (err) {
    console.error("[Payment] Error response:", err.response?.data || err.message);
    this.showError(
      `Payment initiation failed: ${err.response?.data?.message || err.message}`
    );
  } finally {
    this.loadingPayment = false;
    this.loadingFormat = null;
  }
}

,
 
     // ---------------- Navbar ----------------
     toggleNavbar() {
       this.bsCollapse?.toggle();
     },
     closeNavbar() {
       if (this.bsCollapse?.isShown) this.bsCollapse.hide();
     },
     handleClickOutside(event) {
       const navbar = this.$refs.navbarCollapse;
       if (
         navbar?.classList.contains("show") &&
         !navbar.contains(event.target) &&
         !event.target.closest(".navbar-toggler")
       ) {
         this.bsCollapse.hide();
       }
     },
 
     // ---------------- API Calls ----------------
     async fetchCategories() {
       try {
         const { data } = await axios.get(`${API_BASE}/ebook/products/shop`);
         this.categories = data.categories || [];
       } catch (err) {
         console.error("[Categories] Failed:", err.response?.data || err.message);
       }
     },
 
     async fetchBook() {
       this.loadingBook = true;
       try {
         const { productId } = this.$route.params;
         const { data } = await axios.get(`${API_BASE}/ebook/products/${productId}`);
         this.book = data || { coverImageUrl: null, formats: [] };
       } catch (err) {
         console.error("[Book] Failed:", err.response?.data || err.message);
       } finally {
         this.loadingBook = false;
       }
     },
 
     async fetchReviews() {
  try {
    const { productId } = this.$route.params;
    if (!productId) return;

    const { data } = await axios.get(`${API_BASE}/review/${productId}`);

    this.reviews = Array.isArray(data.reviews)
      ? data.reviews.map(r => {
          const userObj = r.user || r.userInfo || {};
          const userId = userObj._id || userObj.userId || null;
          const userName =
            userObj.name ||
            userObj.fullName ||
            userObj.username ||
            (userId ? `User-${userId.slice(-4)}` : "Anonymous");

          return {
            ...r,
            user: { _id: userId, name: userName },
            likes: r.likes?.length || 0,
            dislikes: r.dislikes?.length || 0,
            userVote: r.userVote || null,
          };
        })
      : [];
  } catch (err) {
    console.error("[Reviews] Failed:", err.response?.data || err.message);
    this.reviews = []; // fallback to empty
  }
}
,
 
     async fetchUser() {
       if (!this.token) {
         this.userLoaded = true;
         return;
       }
 
       try {
         const { data } = await axios.get(`${API_BASE}/api/me`, {
           headers: { Authorization: `Bearer ${this.token}` },
         });
 
         this.user = {
           _id: data.user._id,
           name: data.user.name || data.user.username,
           gender: data.user.gender || "N/A",
           email: data.user.email || "N/A",
         };
 
         localStorage.setItem("user", JSON.stringify(this.user));
       } catch (err) {
         console.error("[User] Failed:", err.response?.data || err.message);
         this.logout();
       } finally {
         this.userLoaded = true;
       }
     },
 
     logout() {
       localStorage.removeItem("token");
       localStorage.removeItem("user");
       this.user = null;
       this.$router.push("/sign-in");
     },
 
     // ---------------- Review Actions ----------------
     async submitReview() {
       this.clearMessages();
       if (!this.reviewText.trim()) return this.showError("Please write a review!");
       if (!this.selectedRating) return this.showError("Please select a rating!");
       if (!this.user?._id) {
  return this.$router.push({
    path: "/sign-in",
    query: { redirect: this.$route.fullPath },
  });
}

 
       this.submittingReview = true;
       const { productId } = this.$route.params;
 
       try {
         if (this.editingReviewId) {
           await axios.put(
             `${API_BASE}/review/${productId}/edit-review`,
             { review: this.reviewText, rating: this.selectedRating },
             {
               params: { userId: this.user._id, reviewId: this.editingReviewId },
               headers: { Authorization: `Bearer ${this.token}` },
             }
           );
 
           const index = this.reviews.findIndex(r => r._id === this.editingReviewId);
           if (index !== -1) {
             this.reviews[index] = {
               ...this.reviews[index],
               review: this.reviewText,
               rating: this.selectedRating,
               user: { _id: this.user._id, name: this.user.name },
             };
           }
 
           this.showSuccess("Review updated!");
         } else {
           const { data } = await axios.post(
             `${API_BASE}/review/${productId}/add-review`,
             { review: this.reviewText, rating: this.selectedRating },
             { params: { userId: this.user._id }, headers: { Authorization: `Bearer ${this.token}` } }
           );
 
           const reviewData = data.review || {};
           this.reviews.unshift({
             _id: reviewData._id || `temp-${Date.now()}`,
             review: this.reviewText,
             rating: this.selectedRating,
             createdAt: reviewData.createdAt || new Date().toISOString(),
             likes: reviewData.likes?.length || 0,
             dislikes: reviewData.dislikes?.length || 0,
             userVote: null,
             user: { _id: this.user._id, name: this.user.name },
           });
 
           this.showSuccess("Review submitted!");
         }
 
         this.resetReviewForm();
       } catch (err) {
         console.error("[Submit Review] Failed:", err.response?.data || err.message);
         this.showError(err.response?.data?.message || "Failed to submit review.");
       } finally {
         this.submittingReview = false;
       }
     },
 
     startEditReview(review) {
       this.reviewText = review.review;
       this.selectedRating = review.rating;
       this.editingReviewId = review._id;
     },
 
     async deleteReview(reviewId) {
       if (!this.user?._id) return this.showError("Sign in to delete review!");
       const { productId } = this.$route.params;
 
       try {
         await axios.delete(`${API_BASE}/review/${productId}/delete-review`, {
           params: { userId: this.user._id, reviewId },
           headers: { Authorization: `Bearer ${this.token}` },
         });
         this.reviews = this.reviews.filter(r => r._id !== reviewId);
         this.showSuccess("Review deleted!");
       } catch (err) {
         console.error("[Delete Review] Failed:", err.response?.data || err.message);
         this.showError("Could not delete review.");
       }
     },
 
     // ---------------- Voting ----------------
     async voteReview(review, type) {
       if (!this.user?._id) return this.$router.push("/sign-in");
       if (!this.token) return this.showError("No token found. Please log in again.");
 
       const { productId } = this.$route.params;
       if (!productId) return this.showError("Invalid product. Try refreshing.");
 
       this.voting = true;
       try {
         await axios.post(`${API_BASE}/review/${productId}/${type}-review`, null, {
           params: { userId: this.user._id, reviewId: review._id },
           headers: { Authorization: `Bearer ${this.token}` },
         });
 
         // Optimistic UI update
         if (type === "like") {
           if (review.userVote === "like") {
             review.likes--;
             review.userVote = null;
           } else {
             if (review.userVote === "dislike") review.dislikes--;
             review.likes++;
             review.userVote = "like";
           }
         } else {
           if (review.userVote === "dislike") {
             review.dislikes--;
             review.userVote = null;
           } else {
             if (review.userVote === "like") review.likes--;
             review.dislikes++;
             review.userVote = "dislike";
           }
         }
       } catch (err) {
         console.error("[Vote Review] Failed:", err.response?.data || err.message);
         this.showError(err.response?.data?.message || "Failed to vote review.");
       } finally {
         this.voting = false;
       }
     },
 
     likeReview(review) {
       this.voteReview(review, "like");
     },
     dislikeReview(review) {
       this.voteReview(review, "dislike");
     },
 
     // ---------------- Helpers ----------------
     resetReviewForm() {
       this.reviewText = "";
       this.selectedRating = 0;
       this.editingReviewId = null;
     },
     clearMessages() {
       this.errorMessage = "";
       this.successMessage = "";
     },
     showError(msg) {
       this.errorMessage = msg;
       setTimeout(() => (this.errorMessage = ""), 4000);
     },
     showSuccess(msg) {
       this.successMessage = msg;
       setTimeout(() => (this.successMessage = ""), 4000);
     },
   },
 
   mounted() {
     const navbarEl = this.$refs.navbarCollapse;
     if (navbarEl) {
       this.bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarEl, { toggle: false });
     }
 
     document.addEventListener("click", this.handleClickOutside);
 
     this.fetchCategories();
     this.fetchBook();
     this.fetchReviews(); // ✅ Always load reviews (guest or logged in)
     this.fetchUser();    // ✅ Only loads if token exists
   },
 
   computed: {
     // ✅ Reviews shown in UI (5 preview or all)
     displayedReviews() {
       return this.showAllReviews ? this.reviews : this.reviews.slice(0, 5);
     },
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

 button.active {
  color: white;
  background-color: #007bff; /* blue for active */
}

.error-message {
  background-color: #f8d7da;
  color: #842029;
  border-left: 4px solid #dc3545;
  display: inline-block;       /* Shrinks to content width */
  padding: 4px 8px;            /* Adds spacing around text */
  word-wrap: break-word;       /* Wrap long words if needed */
  white-space: normal;         /* Ensure text wraps if it’s too long */
  border-radius: 4px;          /* Optional: rounded corners */
  max-width: 100%;             /* Prevent overflow on very small screens */
}



.review-input::placeholder {
  color: #dcdcdc;
  font-weight: 500;
  opacity: 1;
  font-style: italic;
}
.review-input:focus::placeholder {
  color: #a0a0a0;
}

.review-input::placeholder {
  color: #dcdcdc;      /* soft gray for better contrast */
  font-weight: 500;     /* slightly bolder for readability */
  opacity: 1;           /* ensures consistent visibility across browsers */
  font-style: italic;   /* optional: makes it stand out subtly */
  transition: color 0.3s; /* optional: smooth fade if you want hover effect */
}

.review-input:focus::placeholder {
  color: #a0a0a0;       /* slightly dim when typing for clarity */
}

/* Distinct styling for eBook and Audiobook sections */
.ebook-card {
  border: 2px solid #4caf50; /* subtle green */
  box-shadow: 0 2px 10px rgba(76, 175, 80, 0.2);
}

.audiobook-card {
  border: 2px solid #2196f3; /* subtle blue */
  box-shadow: 0 2px 10px rgba(33, 150, 243, 0.2);
}

/* Top-right format labels */
.format-label {
  position: absolute;
  top: 10px;
  right: 10px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  color: #fff;
}
.format-label.ebook {
  background-color: #4caf50;
}
.format-label.audiobook {
  background-color: #2196f3;
}

/* Ensure spacing between stacked cards on mobile */
@media (max-width: 767.98px) {
  .book-card {
    margin-bottom: 1rem;
  }
}
 .book-card img {
  transition: transform 0.3s;
}
.book-card img:hover {
  transform: scale(1.05);
}
 .custom-buy-btn {
  background-color: #fff;      /* white background */
  color: #4d148c;              /* your purple color */
  border: 2px solid #4d148c;   /* border in same purple */
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 25px;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.custom-buy-btn:hover {
  background-color: #4d148c;   /* purple fill on hover */
  color: #fff;                 /* white text on hover */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(77, 20, 140, 0.3);
}

.custom-buy-btn:active {
  transform: scale(0.97);
  box-shadow: 0 2px 6px rgba(77, 20, 140, 0.2);
}
 .book-card {
  background-color: #fdfdfd; /* light neutral background */
  border: 1px solid #ddd;     /* subtle border */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* soft shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Skeleton Styles */
.skeleton {
  background-color: #e0e0e0;
  border-radius: 6px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-img {
  width: 200px;
  height: 300px;
  margin: auto;
}

.skeleton-title {
  width: 60%;
  height: 25px;
}

.skeleton-text {
  width: 100%;
  height: 15px;
}

.skeleton-btn {
  width: 120px;
  height: 40px;
  border-radius: 8px;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
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
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.logout-btn:hover {
  background-color: #5e19b3;
  color: #fff !important;          
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.logout-btn:active {
  transform: scale(0.98);
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  color: #fff !important;         
}
@media (max-width: 768px) {
  .logout-btn {
    padding: 8px 16px;
    font-size: 16px; /* bigger text for mobile */
    width: 100%; /* full width on small screens */
    margin-top: 8px;
  }
}
 
  
   .filter-dropdown {
    background-color: gray;
    border-radius: 8px;
    padding: 2px 6px;
  }

  .filter-dropdown select {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 4px 6px;
    cursor: pointer;
  }

  .filter-dropdown select option {
    color: black;
    font-size: 11px;
  }


  @media (max-width: 576px) {
    .review-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 10px;
    }

    .review-header p {
      font-size: 16px !important;
    }

    .filter-dropdown select {
      font-size: 11px;
    }
  }

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

