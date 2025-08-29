<template>
  <Carousel v-bind="carouselConfig" style="height: 500px;">
    <Slide v-for="(slide, index) in lists.length ? lists : placeholderSlides" :key="slide._id || index">
  <div class="carousel__item">
    <router-link :to="`/preview/${slide._id}`" custom v-slot="{ navigate }">
      <div @click="navigate" class="card h-100 border-0 shadow-sm" style="cursor: pointer; width: 100%;">

        <img   :src="'/public/mercy.jpg'" 
          class="card-img-top"
          style="width: 100%; height: 240px; object-fit: cover; border-radius: 0.375rem 0.375rem 0 0;" />
        <div class="card-body d-flex flex-column justify-content-between p-2">
          <div>
            <h6 class="mb-1" style="font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              {{ slide.title }}
            </h6>
            <h5 class="mb-2 text-muted" style="font-size: 14px">{{ slide.author }}</h5>
            <p class="mb-2" style="font-size: 13px">
              <span class="text-muted" style="text-decoration: line-through">{{ slide.oldPrice }}</span>
              <span class="text-danger fw-bold ms-1">{{ slide.price }}</span>
            </p>
            <div style="font-size: 22px; margin-top: -4px">
              <span style="color:#FFD700;">★</span>
              <span style="color:#FFD700;">★</span>
              <span style="color:#FFD700;">★</span>
              <span style="color:#FFD700;">★</span>
              <span style="color: #ccc">★</span>
            </div>
          </div>
          <button @click="navigate" class="preview-btn mt-3">Preview</button>
        </div>
      </div>
    </router-link>
  </div>
</Slide>

  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: { Carousel, Slide },
  props: {
    lists: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      placeholderSlides: Array(5).fill({ 
        title: "Loading...",
        author: "Loading...",
        price: "0.00",
        oldPrice: "0.00",
      }),
      carouselConfig: {
  itemsToShow: 5,
  wrapAround: true,
  autoplay: 3000,
  transition: 500,
  pauseAutoplayOnHover: true,
  snapAlign: "start",
  // new:
  itemPadding: [10, 10], // horizontal padding [left, right]
  breakpoints: {
    0: { itemsToShow: 1.5, snapAlign: "center", itemPadding: [5, 5] },
    576: { itemsToShow: 2.5, snapAlign: "center", itemPadding: [5, 5] },
    768: { itemsToShow: 3.5, snapAlign: "center", itemPadding: [5, 5] },
    1024: { itemsToShow: 5, snapAlign: "start", itemPadding: [10, 10] },
  },
}
,
    };
  }
};
</script>



<style>
.carousel__item {
  display: flex;
  justify-content: center;
  align-items: stretch; /* equal height */
  width: 100%; /* ensures the slide takes full width */
}


.carousel__item router-link {
  text-decoration: none;
  color: inherit;
}
.carousel__slide {
  display: flex;
  justify-content: center;
  align-items: stretch; /* equal height */
}
.card {
  padding: 5px;
}


.card-img-top {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 0.375rem 0.375rem 0 0;
}


.preview-btn {
  font-size: 11px; 
  font-weight: 500; 
  letter-spacing: 0.3px;
  padding: 7px 8px; 
  border: 2px solid transparent;
  border-radius: 6px;
  background-color: #4d148c; 
  color: #fff;
  text-transform: uppercase;
  transition: all 0.25s ease, transform 0.15s ease-in-out;
  cursor: pointer;
}

.preview-btn:hover {
  background-color: #fff;
  color: #4d148c;
  border-color: #4d148c;
  transform: translateY(-2px); 
  box-shadow: 0 4px 10px rgba(77, 20, 140, 0.25);
}

.preview-btn:active {
  transform: scale(0.96);
  box-shadow: 0 2px 6px rgba(77, 20, 140, 0.2);
}

.preview-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(77, 20, 140, 0.3);
}

.carousel__pagination {
  margin-top: 40px !important; 
        
}

.carousel__pagination-button {
  background-color: #ccc;       
  width: 10px;                  
  height: 10px;
  border-radius: 50%;          
}

.carousel__pagination-button--active {
  background-color: #4d148c !important; 
  transform: scale(1.2);              
}



</style>

