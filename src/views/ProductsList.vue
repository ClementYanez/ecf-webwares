<template>
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductsComponent from '@/components/ProductsComponent.vue';
import CategoriesList from '@/components/CategoriesList.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductsComponent,
    CategoriesList,
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
</style>
