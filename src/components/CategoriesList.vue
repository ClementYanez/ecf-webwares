<template>
  <div class="cat-list">
    <h4>Catégories</h4>
    <div class="category" v-for="category in this.localCategories" :key="category.id">
      <span class="cat" @click="getProductsByCategory(category.id)">{{
        category.name
      }}</span>
      <span v-if="category.id === filteredCategory"><img :src="require('@/assets/icons/check.svg')" alt="ckeck"
          class="icon-check" /></span>
    </div>
    <!-- <div class="red" v-if="filteredCategory !== null" @click="resetCat">
      Enlever la catégorie
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      disp: 'none',
      localCategories: [],
      // categories: [],
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
    if (
      !localStorage.getItem('categories') ||
      localStorage.getItem('categories') === ''
    ) {
      this.localCategories = this.categories;
      localStorage.setItem('categories', JSON.stringify(this.localCategories));
      this.$store.dispatch('filterProductsByCategory', null);
    } else {
      this.localCategories = JSON.parse(localStorage.getItem('categories'));
      this.$store.dispatch('filterProductsByCategory', null);
      // this.categories = JSON.parse(localStorage.getItem('categories'));
    }
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

.icon-check {
  width: 20px;
}
</style>
