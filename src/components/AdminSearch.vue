<template>
  <input
    type="text"
    :placeholder="placeholder"
    v-model="localSearchQuery"
    @input="search"
  />
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'SearchbarComponent',
  data() {
    return {
      localSearchQuery: '',
      localDatabase: [],
      localDatabaseResult: [],
    };
  },
  props: {
    placeholder: String,
    localstorage: String,
  },
  computed: {
    ...mapState([
      'filteredProductsListByCategory',
      'searchQuery',
      'adminSearchResult',
      'adminSearchQuery',
    ]),
    ...mapMutations(['setAdminSearchDatabase', 'setAdminSearchQuery']),
  },
  methods: {
    customQuery() {
      this.$store.commit('adminSetSearchQuery', this.localSearchQuery);
    },
    search() {
      this.$store.commit(
        'setAdminSearchResult',
        JSON.parse(localStorage.getItem(this.localstorage))
      );
      console.log(this.adminSearchQuery);

      if (this.localSearchQuery === '') {
        this.$store.commit(
          'setAdminSearchResult',
          JSON.parse(localStorage.getItem(this.localstorage))
        );
      } else {
        this.localDatabaseResult = this.adminSearchResult.filter((search) => {
          return search.name
            .toLowerCase()
            .includes(this.localSearchQuery.toLowerCase());
        });

        this.$store.commit('setAdminSearchResult', [
          ...this.localDatabaseResult,
        ]);
      }
    },
  },
  mounted() {
    this.localDatabase = JSON.parse(localStorage.getItem(this.localstorage));
    this.$store.commit(
      'setAdminSearchResult',
      JSON.parse(localStorage.getItem(this.localstorage))
    );
  },
};
</script>

<style scoped>
input {
  padding: 10px 10px 10px 20px;
  margin: 30px 10px;
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
