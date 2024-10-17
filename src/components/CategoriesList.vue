<template>
  <div class="cat-list">
    <h4>Catégories</h4>
    <div
      class="category"
      v-for="category in this.categories"
      :key="category.id"
    >
      <span class="cat" @click="getProductsByCategory(category.id)">{{
        category.name
      }}</span>
      <span v-if="category.id === filteredCategory">✔️</span>
    </div>
    <div class="red" v-if="filteredCategory" @click="resetCat">
      Enlever la catégorie
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      disp: 'none',
      categories: [],
    };
  },
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
    ...mapActions(['filterProductsByCategory', 'resetCategory']),
    getProductsByCategory(id) {
      // this.$store.commit('changeCategory', id);
      if (id === this.filteredCategory) {
        this.$store.dispatch('filterProductsByCategory', null);
      } else {
        this.$store.dispatch('filterProductsByCategory', id);
      }
    },
    resetCat() {
      // this.$store.dispatch('resetCategory');
      this.$store.dispatch('filterProductsByCategory', null);
    },
  },

  mounted() {
    this.categories = JSON.parse(localStorage.getItem('categories'));
  },
};
</script>

<style scoped>
.cat-list {
  margin-top: 100px;
  width: 200px;
}
.cat {
  border-bottom: 1px solid #818181;
  margin: 10px;
  cursor: pointer;
}

.red {
  color: red;
  cursor: pointer;
}
</style>
