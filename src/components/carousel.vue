<template>
  <div class="carousel-wrapper">
    <!-- ✅ Carousel -->
    <Carousel
      v-bind="carouselConfig"
      ref="carouselRef"
      class="homepage-carousel"
    >
      <!-- ✅ Show actual books OR fallback dummy cards -->
      <Slide
        v-for="(slide, index) in displaySlides"
        :key="slide._id || index"
        class="carousel-slide"
      > 
        <div class="carousel__item">
          <div
  class="card shadow-sm carousel-card"
  @click="slide._id && $router.push({ name: 'Preview', params: { productId: slide._id } })"
  :style="{ cursor: slide._id ? 'pointer' : 'default' }"
>
  <img
    :src="slide.coverImageUrl || '/images/placeholder-book.png'"
    alt="Book Cover"
    class="card-img-top"
  />
  <div class="card-body p-2">
    <h6 class="book-title">
      {{ slide.title || 'Coming Soon' }}
    </h6>
    <p class="book-author">
      {{ slide.author || 'Anonymous' }}
    </p>

    <p class="book-price">
      <span class="text-danger price">
  ₦{{ (slide.price || 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
</span>

    </p>

    <div class="rating-stars">
      <template v-for="i in 5" :key="i">
        <span
          v-if="i <= Math.floor(slide.rating ?? 4)"
          class="star full"
        >★</span>
        <span
          v-else-if="i - (slide.rating ?? 4) < 1 && (slide.rating ?? 4) % 1 !== 0"
          class="star half"
        >★</span>
        <span
          v-else
          class="star empty"
        >★</span>
      </template>
    </div>

    <!-- Keep the Preview button optional -->
    <button
      class="preview-btn mt-2"
      :disabled="!slide._id"
    >
      Preview
    </button>
  </div>
</div>

        </div>
      </Slide>
    </Carousel>

    <!-- ✅ Responsive Navigation arrows -->
    <button
      v-if="showArrows"
      class="carousel-arrow prev-arrow"
      @click="prevSlide"
    >
      &#10094;
    </button>
    <button
      v-if="showArrows"
      class="carousel-arrow next-arrow"
      @click="nextSlide"
    >
      &#10095;
    </button>
  </div>
</template>


<script>import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "HomeCarousel",
  components: { Carousel, Slide },
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    uniqueSlides() {
      const seen = new Set();
      return this.lists.filter((book) => {
        if (!book._id || seen.has(book._id)) return false;
        seen.add(book._id);
        return true;
      });
    },
    displaySlides() {
  // 🔥 If no books, create 5 dummy placeholders
  if (!this.uniqueSlides.length) {
    return Array.from({ length: 5 }, (_, i) => ({
  title: "Coming Soon",
  author: null,   // <-- use null
  coverImageUrl: "/images/placeholder-book.png",
  price: "0.00",
  rating: 4,
}));
 
  }

  return this.uniqueSlides;
},

    carouselConfig() {
      const count = this.displaySlides.length;
      return {
        itemsToShow: count < 5 ? count : 5,
        wrapAround: count > 5,
        autoplay: count > 5 ? 3000 : 0,
        transition: 500,
        pauseAutoplayOnHover: true,
        snapAlign: "start",
        itemPadding: [8, 8],
        breakpoints: {
          0: { itemsToShow: Math.min(2, count) },
          576: { itemsToShow: Math.min(3, count) },
          768: { itemsToShow: Math.min(4, count) },
          1024: { itemsToShow: Math.min(5, count) },
        },
      };
    },
    showArrows() {
      const count = this.displaySlides.length;
      if (this.screenWidth < 576) return count > 2;
      if (this.screenWidth < 768) return count > 3;
      return count > 5;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    prevSlide() {
      this.$refs.carouselRef.prev();
    },
    nextSlide() {
      this.$refs.carouselRef.next();
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};

</script>

<style scoped>
.book-price {
  font-size: 14px;
  font-weight: 600;
  color: #d9534f; /* Bootstrap danger red */
  text-align: center; /* ✅ Center it */
  margin: 5px 0;
}

.rating-stars {
  display: flex;
  justify-content: center;
  gap: 2px;
  font-size: 14px;
  margin: 5px 0;
}

.star.full {
  color: #FFD700;
}

.star.half {
  color: #FFD700;
  position: relative;
}
.star.half::after {
  content: "★";
  color: #ccc;
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
}

.star.empty {
  color: #ccc;
}

/* Keep your previous styles the same */
.carousel-wrapper {
  position: relative;
  width: 100%;
}
.loading-message {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #4d148c;
  padding: 20px;
}
.homepage-carousel {
  padding: 0;
}
.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 0;
}
.carousel__item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 5px;
}
.carousel-card {
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}
.carousel-card:hover {
  transform: translateY(-4px);
}
.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background: #f8f8f8;
  display: block;
}
.card-body {
  padding: 8px !important;
}
.preview-btn {
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;     /* 🔥 Slightly bigger padding */
  border-radius: 6px;    /* 🔥 Softer corners */
  background-color: #4d148c;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
  margin: 8px auto 0;
  min-width: 100px;      /* 🔥 Increase button width */
  text-align: center;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(77, 20, 140, 0.7);
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.carousel-arrow:hover {
  background: #4d148c;
}
.prev-arrow {
  left: 5px;
}
.next-arrow {
  right: 5px;
}
.book-title {
  font-size: 14px;
  font-weight: 700; /* 🔥 Strong bold like <h5>/<h6> */
    color: #222;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 🔥 Show 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 36px; /* 🔥 Reserve space for 2 lines */
}

.book-author {
  font-size: 14px; /* Bigger like a heading */
  font-weight: 700; /* 🔥 Strong bold like <h5>/<h6> */
  color: #222;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 20px; /* Reserve space */
}


</style>
