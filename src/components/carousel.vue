<template>
     <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div class="col">
          <div
            class="card h-100 border-0 shadow-sm mx-auto"
            style="max-width: 180px"
          >
            <img
              src="/public/wedding.jpg"
              class="card-img-top"
              alt="The Wedding People"
              style="
                width: 100%;
                height: 240px;
                object-fit: cover;
                border-radius: 0.375rem 0.375rem 0 0;
              "
            />
            <div
              class="card-body d-flex flex-column justify-content-between p-2"
            >
              <div>
                <h6 class="mb-1" style="font-size: 13px">
                  The Wedding People
                </h6>
                <h5 class="mb-2 text-muted" style="font-size: 14px">
                  Alison Espach
                </h5>
                <p class="mb-2" style="font-size: 13px">
                  <span
                    class="text-muted"
                    style="text-decoration: line-through"
                  >
                    $20.49</span
                  >
                  <span class="text-danger fw-bold ms-1"> $11.49</span>
                </p>
                <div style="font-size: 22px; margin-top: -4px">
                  <span class="text-danger">★</span>
                  <span class="text-danger">★</span>
                  <span class="text-danger">★</span>
                  <span class="text-danger">★</span>
                  <span style="color: #ccc">★</span>
                </div>
              </div>
              <button  @click="$router.push('/preview')"  class="preview-btn" style="margin-top: 30px;">
  Preview
</button>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </template>
  <script >
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      carouselConfig: {
        itemsToShow: 5,
        wrapAround: true,
        autoplay: 3000,
        transition: 500,
        pauseAutoplayOnHover: true,
        breakpoints: {
         
          0: {
            itemsToShow: 1.5,
            snapAlign: "center",
          },
          
          576: {
            itemsToShow: 2.5,
            snapAlign: "center",
          },
        
          768: {
            itemsToShow: 3.5,
            snapAlign: "center",
          },
        
          1024: {
            itemsToShow: 5,
            snapAlign: "start",
          },
        },
      },
    };
  },
};
</script>
<style>
.preview-btn {
  font-size: 11px; /* Slightly bigger for clarity */
  font-weight: 500; /* Bold, professional */
  letter-spacing: 0.3px; /* Clean spacing */
  padding: 7px 8px; /* Better button size */
  border: 2px solid transparent;
  border-radius: 6px;
  background-color: #4d148c; /* Main purple */
  color: #fff;
  text-transform: uppercase; /* More professional feel */
  transition: all 0.25s ease, transform 0.15s ease-in-out;
  cursor: pointer;
}

.preview-btn:hover {
  background-color: #fff;
  color: #4d148c;
  border-color: #4d148c;
  transform: translateY(-2px); /* Lift on hover */
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
  margin-top: 40px !important; /* Move all dots further down */
}

.carousel__pagination-button--active {
  background-color: #4d148c !important; /* Keep your purple active dot */
}

</style>

