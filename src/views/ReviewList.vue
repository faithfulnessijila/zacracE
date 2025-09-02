<template>
    <div class="review-list container my-4">
      <div v-if="reviews.length">
        <div
          v-for="rev in reviews"
          :key="rev._id"
          class="review-card p-3 mb-3 rounded shadow-sm"
          :class="{ 'bg-light': editingId === rev._id }"
        >
          <div class="d-flex justify-content-between">
            <div>
              <strong>{{ rev.user?.name || "Anonymous" }}</strong>
              <small class="text-muted"> – {{ new Date(rev.createdAt).toLocaleDateString() }}</small>
            </div>
            <div>
              <!-- Edit/Delete -->
              <button
                v-if="user && rev.user?._id === user._id"
                class="btn btn-sm btn-outline-primary me-2"
                @click="$emit('edit', rev)"
              >Edit</button>
              <button
                v-if="user && rev.user?._id === user._id"
                class="btn btn-sm btn-outline-danger me-2"
                @click="$emit('delete', rev._id)"
              >Delete</button>
  
              <!-- Like/Dislike -->
              <button
                class="btn btn-sm btn-outline-success me-2"
                @click="$emit('like', rev._id)"
              >👍 {{ rev.likes?.length || 0 }}</button>
              <button
                class="btn btn-sm btn-outline-warning"
                @click="$emit('dislike', rev._id)"
              >👎 {{ rev.dislikes?.length || 0 }}</button>
            </div>
          </div>
          <p class="mt-2 mb-0">{{ rev.review }}</p>
        </div>
      </div>
      <p v-else class="text-muted">No reviews yet. Be the first to review!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewList",
    props: {
      reviews: { type: Array, required: true },
      user: { type: Object, required: false },
      editingId: { type: String, default: null }
    },
    emits: ["edit", "delete", "like", "dislike"]
  };
  </script>
  
  <style scoped>
  .review-card {
    border: 1px solid #eee;
    border-radius: 10px;
    transition: 0.2s;
  }
  .review-card.bg-light {
    border-color: #007bff;
    background: #f9fcff;
  }
  </style>
  