<template>
  <div>
    <HeaderComponent />
    <!-- fil d'arianne  -->
    <div class="contentproductdetails">
      <img class="productimage" v-if="productDetails.image" :src="this.localImage" alt="" />
      <!-- <img
        class="productimage"
        v-if="productDetails.image"
        :src="require(`@/assets/${this.productDetails.image}`)"
        alt=""
      /> -->
      <div class="contentdetails">
        <h3 class="producttitre">{{ this.productDetails.titre }}</h3>
        <p v-if="userLevel">
          {{ this.productDetails.prix }}€/u à partir de
          {{ this.productDetails.moq }} exemplaires
        </p>
        <p v-else class="productmoq">
          à partir de {{ this.productDetails.moq }} exemplaires
        </p>
        <div class="barre"></div>
        <p class="productdescription">{{ this.productDetails.description }}</p>
        <div class="prix" v-if="userLevel">
          <p>Prix TTC : {{ this.productDetails.prix }}€</p>
          <p>Prix HT : {{ this.prixHt }}€</p>
          <label for="qte">Quantité : </label>
          <input id="qte" type="number" :value="this.productDetails.moq" />
          <div class="btns" v-if="!selected">
            <ButtonComponent text="Ajouter au panier" color="#CA8465" @click="addProductToCart(productDetails)" />
          </div>
          <div class="btns" v-if="selected">
            <ButtonComponent text="Déjà dans le panier" color="#9c9c9c" />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  data() {
    return {
      productDetails: {},
      user: '',
      userLevel: '',
      prixHt: '',
      panier: [],
      selected: false,
      localImage: '',
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  },
  computed: {
    ...mapState(['productsList']),
  },
  methods: {
    addProductToCart(product) {
      // let user = JSON.parse(localStorage.getItem('user'));
      // let userName = user.id;
      if (localStorage.getItem(`panier_${this.user.id}`)) {
        this.panier = JSON.parse(
          localStorage.getItem(`panier_${this.user.id}`)
        );
      }
      product.quantity = product.moq;
      console.log(this.minQuantity);

      this.panier.push(product);

      this.$store.commit('addToCart', product);
      localStorage.setItem(
        `panier_${this.user.id}`,
        JSON.stringify([...this.panier])
      );
      this.selected = true;
    },
  },
  // watch: {
  //   panier: {
  //     handler() {
  //       localStorage.setItem(
  //         `panier_${this.user.id}`,
  //         JSON.stringify(this.panier)
  //       );
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    let productId = parseInt(this.$route.params.id);
    if (localStorage.getItem('productsList')) {
      this.productDetails = JSON.parse(
        localStorage.getItem('productsList')
      ).find((product) => product.id === productId);
    } else {
      this.productDetails = this.productsList.find(
        (product) => product.id === productId
      );
    }
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userLevel = this.user.role;
      this.prixHt = (this.productDetails.prix / 1.2).toFixed(2);
    }
    if (localStorage.getItem(`panier_${this.user.id}`)) {
      this.panier = JSON.parse(localStorage.getItem(`panier_${this.user.id}`));
      this.panier.forEach((element) => {
        if (element.id === this.productDetails.id) {
          this.selected = true;
        }
      });
    }
    if (this.productDetails.image.includes('base64')) {
      // const temp = this.image.replace(/^url\('|'\)$/g, '');
      // const temp = this.image.replace(/data:image\/jpeg;base64,([^,]+)/, '$1');
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   this.localImage = e.target.result;
      // };
      // reader.readAsDataURL(new Blob([temp], { type: 'image/jpeg' }));
      // this.localImage = this.image;
      this.localImage = this.productDetails.image;
      this.bool = true;
      console.log(this.image);
    } else {
      this.localImage = require(`@/assets/${this.productDetails.image}`);
      this.bool = false;
      console.log(this.image);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
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
}

.contentproductdetails {
  padding: 150px 50px 50px 50px;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.productimage {
  width: 500px;
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

.prix {
  margin-top: 50px;
  margin-bottom: 100px;
}

.prix p {
  font-weight: 600;
}

input {
  padding: 10px 10px 10px 20px;
  width: 70px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
  margin-top: 20px;
}

.btns {
  margin-top: 100px;
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

  .btns {
    margin-top: 40px;
  }
}
</style>
