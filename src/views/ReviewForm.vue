<template>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="mb-3">{{ editingReviewId ? "Edit Your Review" : "Write a Review" }}</h5>
  
        <!-- Rating -->
        <div class="mb-3">
          <label class="form-label">Rating</label>
          <div>
            <span
              v-for="star in 5"
              :key="star"
              @click="$emit('update:selectedRating', star)"
              class="fs-4 me-1"
              :class="star <= selectedRating ? 'text-warning' : 'text-secondary'"
              style="cursor: pointer"
            >★</span>
          </div>
        </div>
  
        <!-- Review Text -->
        <div class="mb-3">
          <textarea
            v-model="localReviewText"
            rows="3"
            placeholder="Write your review..."
            class="form-control"
          ></textarea>
        </div>
  
        <!-- Buttons -->
        <button
          @click="submit"
          class="btn btn-primary"
          :disabled="loading"
        >
          {{ loading ? "Submitting..." : (editingReviewId ? "Update Review" : "Submit Review") }}
        </button>
        <button
          v-if="editingReviewId"
          @click="$emit('cancel-edit')"
          class="btn btn-secondary ms-2"
        >
          Cancel
        </button>
  
        <!-- Messages -->
        <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewForm",
    props: {
      productId: { type: String, required: true },
      user: { type: Object, required: true },
      editingReviewId: { type: String, default: null },
      selectedRating: { type: Number, default: 0 },
      reviewText: { type: String, default: "" },
      loading: { type: Boolean, default: false },
      successMessage: { type: String, default: "" },
      errorMessage: { type: String, default: "" }
    },
    emits: ["update:reviewText", "update:selectedRating", "submit-review", "cancel-edit"],
    data() {
      return {
        localReviewText: this.reviewText
      };
    },
    watch: {
      reviewText(newVal) {
        this.localReviewText = newVal;
      }
    },
    methods: {
      submit() {
        this.$emit("update:reviewText", this.localReviewText);
        this.$emit("submit-review");
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 12px;
  }
  </style>
  