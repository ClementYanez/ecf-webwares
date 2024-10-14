<template>
  <div class="merdum">
    <img :src="require(`@/assets/${image}`)" />
    <h4>{{ name }}</h4>
    <div v-if="userLevel">
      <p>{{ price }}€/u pour {{ minQte }} unités minimum</p>
      <p>{{ description }}</p>
      <div class="btns">
        <ButtonComponent text="Détails" color="#CA8465" @click="getDetails" />
        <input type="number" :value="minQte" />
        <img
          :src="require('@/assets/icons/cart.svg')"
          alt="icône panier"
          class="icon"
        />
      </div>
    </div>
    <div v-else>
      <p>{{ minQte }} unités minimum</p>
      <p>{{ description }}</p>
      <div class="btns">
        <ButtonComponent
          text="Détails du produit"
          color="#CA8465"
          @click="getDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  data() {
    return {
      productId: this.id,
      user: '',
      userLevel: '',
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
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userLevel = this.user.role;
      console.log(this.userLevel);
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
  box-sizing: border-box;
  width: 350px;
  height: 450px;
  text-align: center;
  position: relative;
}
img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}
p {
  margin: 0px 5px;
}
button {
  bottom: 0px;
  left: auto;
  right: auto;
  /* margin-top: 10px; */
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
.btns {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
