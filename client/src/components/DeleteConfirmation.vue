<template>
  <div class="delete-confirmation">
    <h3>Fine! The record has been removed from our database.</h3>
    <router-link :to="{ path: '/' }">Home</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
