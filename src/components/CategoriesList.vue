<template>
  <div class="cat-list">
    <h4>Catégories</h4>
    <div class="category" v-for="category in categories" :key="category.id">
      <p>{{ category.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['categories']),
  },
};
</script>

<style scoped>
.cat-list {
  margin-top: 100px;
}
p {
  border-bottom: 1px solid #818181;
  margin: 10px;
}
</style>
