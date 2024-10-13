<template>
  <div>
    <!-- headercomponent -->
    <!-- fil d'arianne  -->
    <div class="contentproductdetails">
      <img
        class="productimage"
        :src="require(`@/assets/${productImage}`)"
        alt=""
      />
      <div class="contentdetails">
        <h3 class="producttitre">{{ productTitre }}</h3>
        <p class="productmoq">à partir de {{ productMoq }} exemplaires</p>
        <div class="barre"></div>
        <p class="productdescription">{{ productDescription }}</p>
      </div>
    </div>
    <!-- footercomponent -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      productTitre: (state) => state.productDetails.titre,
      productMoq: (state) => state.productDetails.moq,
      productDescription: (state) => state.productDetails.description,
      productImage: (state) => state.productDetails.image,
    }),
  },
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.contentproductdetails {
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.productimage {
  width: auto;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
}

.contentdetails {
  padding: 20px;
  display: inline-block;
  text-align: left;
}

.producttitre {
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}
.productmoq {
  color: black;
  margin-bottom: 10px;
}

.barre {
  height: 2px;
  width: 80%;
  background-color: #d9d9d9;
  border-radius: 2px;
  margin-bottom: 35px;
}

@media only screen and (max-width: 800px) {
  .contentproductdetails {
    display: flex;
    flex-direction: column;
  }

  .productimage {
    height: 300px;
    width: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .contentdetails {
    text-align: center;
  }
  .barre {
    margin: 0 auto 35px auto;
  }
}
</style>
