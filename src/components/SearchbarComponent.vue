<template>
  <input
    type="text"
    :placeholder="placeholder"
    v-model="localSearchQuery"
    @input="customQuery()"
  />
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'SearchbarComponent',
  data() {
    return {
      localSearchQuery: '',
    };
  },
  props: {
    placeholder: String,
  },
  computed: {
    ...mapState(['filteredProductsListByCategory', 'searchQuery']),
    ...mapMutations(['setSearchQuery']),
  },
  methods: {
    ...mapActions(['filterProductsByQuery']),
    customQuery() {
      this.$store.commit('setSearchQuery', this.localSearchQuery);
    },
  },
  mounted() {},
};
</script>

<style scoped>
input {
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus {
  outline: 1px solid #ca8465;
}
</style>
