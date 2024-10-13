<template>
  <HeaderComponent />
  <div class="cont-top">
    <SearchbarComponent placeholder="Rechercher ..." />
  </div>
  <div class="cont-global">
    <CategoriesList />
    <div class="cont-list">
      <div class="list" v-for="product in productsList" :key="product.id">
        <ProductsComponent
          :name="product.titre"
          :price="product.prix"
          :description="product.description"
          :image="product.image"
          :minQte="product.moq"
          :id="product.id"
        />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import { mapState } from 'vuex';
import SearchbarComponent from '@/components/SearchbarComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import CategoriesList from '@/components/CategoriesList.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductsComponent,
    CategoriesList,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
  },
  computed: {
    ...mapState(['productsList']),
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
  padding: 0 12%;
  padding-top: 100px;
}
</style>
