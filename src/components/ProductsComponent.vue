<template>
  <div class="merdum">
    <img :src="require(`@/assets/${image}`)" />
    <h4>{{ name }}</h4>
    <p>{{ minQte }} unités minimum</p>
    <p>{{ description }}</p>
    <ButtonComponent
      text="Détails du produit"
      color="#CA8465"
      @click="getDetails"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  data() {
    return {
      productId: this.id,
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
  },
  name: 'ProductsComponent',
  computed: {
    ...mapState(['productsList']),
  },
  methods: {
    getDetails() {
      let prodID = this.id;
      this.$router.push({ name: 'product-details', params: { id: prodID } });
    },
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
  position: absolute;
  bottom: 0px;
  transform: translate(-50%, -50%);
  left: auto;
  right: auto;
  margin-top: 10px;
}
</style>
