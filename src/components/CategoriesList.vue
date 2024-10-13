<template>
  <div class="cat-list">
    <h4>Catégories</h4>
    <div class="category" v-for="category in categories" :key="category.id">
      <p @click="getProductsByCategory(category.id)">{{ category.name }}</p>
    </div>
    <div v-if="filteredCategory !== null" @click="changeCategory(null)">
      Enlever la catégorie
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'categories',
      'filteredCategory',
      'filteredProductsList',
      'filteredProductsListByCategory',
    ]),
    ...mapMutations(['changeCategory']),
  },
  methods: {
    ...mapActions(['filterProductsByCategory']),
    getProductsByCategory(id) {
      // this.$store.commit('changeCategory', id);
      this.$store.dispatch('filterProductsByCategory', id);
    },

    changeCategory(props) {
      this.$store.commit('changeCategory', props);
    },
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
