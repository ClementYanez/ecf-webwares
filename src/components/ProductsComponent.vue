<template>
  <div class="merdum">
    <!-- <img :src="require(`@/assets/${image}`)" v-if="!bool" />
    <img :src="image" v-if="bool" /> -->
    <img :src="localImage" alt="" />
    <h4>{{ name }}</h4>
    <div v-if="userLevel">
      <p>{{ price }}€/u pour {{ minQte }} unités minimum</p>
      <p>{{ description }}</p>
      <div class="btns">
        <ButtonComponent text="Détails" color="#CA8465" @click="getDetails" />
        <input type="number" :min="minQte" v-model="minQuantity" />
        <img v-if="!selected" :src="require('@/assets/icons/cart.svg')" alt="icône panier" class="icon"
          @click="addProductToCart(this.product)" />
        <img v-if="selected" :src="require('@/assets/icons/cart.svg')" alt="icône panier" class="icon-selected" />
      </div>
    </div>
    <div v-else>
      <p>{{ minQte }} unités minimum</p>
      <p>{{ description }}</p>
      <div class="btns">
        <ButtonComponent text="Détails du produit" color="#CA8465" @click="getDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  data() {
    return {
      productId: this.id,
      user: '',
      userLevel: '',
      panier: [],
      minQuantity: this.minQte,
      selected: false,
      bool: false,
      localImage: '',
    };
  },
  components: {
    ButtonComponent,
  },
  props: {
    name: String,
    price: Number,
    description: String,
    image: String,
    minQte: Number,
    id: Number,
    url: String,
    product: Object,
  },
  name: 'ProductsComponent',
  computed: {
    ...mapState(['productsList']),
  },
  methods: {
    getDetails() {
      let prodID = this.id;
      if (this.url === 'product-details') {
        this.$router.push({ name: this.url, params: { id: prodID } });
      } else {
        this.$router.push({ name: this.url });
      }
    },
    ...mapActions(['addToCart']),
    ...mapMutations(['addToCart', 'setCarttoLocalStorage']),
    addProductToCart(product) {
      // let user = JSON.parse(localStorage.getItem('user'));
      // let userName = user.id;
      if (localStorage.getItem(`panier_${this.user.id}`)) {
        this.panier = JSON.parse(
          localStorage.getItem(`panier_${this.user.id}`)
        );
      }
      product.quantity = this.minQuantity;

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
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userLevel = this.user.role;
    }
    if (localStorage.getItem(`panier_${this.user.id}`)) {
      this.panier = JSON.parse(localStorage.getItem(`panier_${this.user.id}`));
      this.panier.forEach((element) => {
        if (element.id === this.productId) {
          this.selected = true;
        }
      });
    }
    this.minQuantity = this.minQte;
    if (this.image.includes('base64')) {
      // const temp = this.image.replace(/^url\('|'\)$/g, '');
      // const temp = this.image.replace(/data:image\/jpeg;base64,([^,]+)/, '$1');
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   this.localImage = e.target.result;
      // };
      // reader.readAsDataURL(new Blob([temp], { type: 'image/jpeg' }));
      // this.localImage = this.image;
      this.localImage = this.image;
      this.bool = true;
      console.log(this.image);
    } else {
      this.localImage = require(`@/assets/${this.image}`);
      this.bool = false;
      console.log(this.image);
    }
  },
};
</script>

<style scoped>
.merdum {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  box-sizing: border-box;
  width: 350px;
  height: auto;
  text-align: center;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}

p {
  margin: 0px 5px;
}

input {
  padding: 10px 10px 10px 20px;
  width: 70px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}

.icon {
  width: 45px;
  height: 45px;
  background-color: #ca8465;
  padding: 5px;
  border-radius: 8px;
  transform: translate(0, 10%);
}

.icon-selected {
  width: 45px;
  height: 45px;
  background-color: #a3a3a3;
  padding: 5px;
  border-radius: 8px;
  transform: translate(0, 10%);
}

.btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

@media screen and (max-width: 950px) {
  .merdum {
    width: 300px;
  }
}
</style>
