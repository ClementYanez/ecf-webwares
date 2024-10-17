<template>
  <HeaderComponent />
  <div class="cont-top">
    <!-- <FilAriane cat1="Produits" /> -->
    <SearchbarComponent
      placeholder="Rechercher ..."
      @search="filterProductByQuery"
    />
  </div>
  <div class="cont-global">
    <CategoriesList />
    <div class="cont-list">
      <div
        v-show="filteredProductsList.length !== 0"
        class="list"
        v-for="product in filteredProductsList"
        :key="product.id"
      >
        <ProductsComponent
          :name="product.titre"
          :price="product.prix"
          :description="product.description"
          :image="product.image"
          :minQte="product.moq"
          :id="product.id"
          :product="product"
          url="product-details"
        />
      </div>
      <div class="no-result" v-show="filteredProductsList.length === 0">
        Aucun produit ne correspond à votre recherche
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import SearchbarComponent from '@/components/SearchbarComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import CategoriesList from '@/components/CategoriesList.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// import FilAriane from '@/components/FilAriane.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductsComponent,
    CategoriesList,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    // FilAriane,
  },
  computed: {
    ...mapState([
      'productsList',
      'filteredProductsListByCategory',
      'filteredCategory',
      'filteredProductsList',
    ]),
    ...mapGetters(['filterProductByQuery']),
    ...mapMutations(['resetSearch']),
  },
  methods: {
    ...mapActions(['filterProductsByCategory']),
    filterProducts(query) {
      this.filteredUsers = this.users.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(query.toLowerCase()) ||
          user.lastName.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
        );
      });
    },
  },
  mounted() {
    if (localStorage.getItem('productsList')) {
      this.$store.dispatch(
        'filterProductsByCategory',
        JSON.parse(localStorage.getItem('productsList'))
      );
    } else {
      this.$store.dispatch('filterProductsByCategory', this.productsList);
      localStorage.setItem('productsList', JSON.stringify(this.productsList));
    }
    this.$store.commit('resetSearch');
  },
};
</script>

<style scoped>
.cont-global {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cont-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 50px;
  width: 80%;
}
.cont-top {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 15%;
  padding-top: 100px;
}
.no-result {
  font-weight: 600;
}
</style>
