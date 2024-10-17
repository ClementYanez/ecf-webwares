<template>
  <div>
    <div class="cont-global">
      <div class="cont-list">
        <div class="list" v-for="product in productTendance" :key="product.id">
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
      </div>
      <div class="cont-btn">
        <ButtonComponent
          color="#592B02"
          text="Voir plus"
          @click="goToProductList()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsComponent from './ProductsComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  data() {
    return {
      productTendance: [],
    };
  },
  components: {
    ProductsComponent,
    ButtonComponent,
  },
  methods: {
    goToProductList() {
      this.$router.push('/products-list/');
    },
  },

  mounted() {
    const productList = JSON.parse(localStorage.getItem('productsList'));

    this.productTendance = productList
      .sort((a, b) => b.nombreDeVente - a.nombreDeVente)
      .slice(0, 8);
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cont-global {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.cont-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 50px;
  width: 100%;
}

.cont-btn button {
  font-size: 2rem;
  box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.4);
}
</style>
