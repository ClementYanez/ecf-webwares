<template>
  <HeaderComponent />
  <div class="contain-list">
    <div class="list" v-for="product in this.cart" :key="product.id">
      <LineInfos
        :image="product.image"
        :title="product.titre"
        :minQte="product.moq"
        :priceOne="product.prix"
        :productQte="product.quantity"
        :product="product"
        @total="totalPanier"
      />
      <img
        :src="require('@/assets/icons/deleteicon.svg')"
        class="icon"
        @click="deleteProduct(product.id)"
      />
    </div>
  </div>
  <div class="totalFinal" v-if="!oui">Votre panier est vide</div>
  <div class="totalFinal" v-else>
    <router-link to="/order-payement">
      <ButtonComponent text="Procéder au paiement" color="#CA8465" />
    </router-link>
    <div>
      <span>Total HT :</span>
      <span>Total TTC :</span>
    </div>
    <div>
      <span>{{ totalHt }}€</span>
      <span>{{ totalTtc }}€</span>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import LineInfos from '@/components/LineInfos.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  components: {
    HeaderComponent,
    LineInfos,
    ButtonComponent,
  },
  data() {
    return {
      cart: [],
      totalTtc: 0,
      totalHt: 0,
      oui: false,
    };
  },
  methods: {
    deleteProduct(id) {
      let user = JSON.parse(localStorage.getItem('user'));
      let userId = user.id;
      this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`));
      this.cart.forEach((element, index) => {
        if (element.id === id) {
          this.cart.splice(index, 1);
          localStorage.setItem(
            `panier_${userId}`,
            JSON.stringify([...this.cart])
          );
        }
      });
      this.totalPanier();
      if (this.cart.length <= 0) {
        localStorage.removeItem(`panier_${userId}`);
        location.reload();
      }
    },
    totalPanier() {
      this.totalTtc = 0;
      let user = JSON.parse(localStorage.getItem('user'));
      let userId = user.id;
      this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`));
      this.cart.forEach((element) => {
        this.totalTtc += Number(element.value);
      });
      this.totalTtc = this.totalTtc.toFixed(2);
      this.totalHt = (this.totalTtc / 1.2).toFixed(2);
      localStorage.setItem(`panier_${userId}`, JSON.stringify([...this.cart]));
      localStorage.setItem('value', JSON.stringify(this.totalTtc));
    },
  },
  mounted() {
    this.totalTtc = 0;
    let user = JSON.parse(localStorage.getItem('user'));
    let userId = user.id;
    if (localStorage.getItem(`panier_${userId}`)) {
      this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`));
      this.cart.forEach((element) => {
        this.totalTtc += Number(element.value);
      });
      this.totalTtc = this.totalTtc.toFixed(2);
      this.totalHt = (this.totalTtc / 1.2).toFixed(2);
      this.cart.total = this.totalTtc;
      localStorage.setItem(`panier_${userId}`, JSON.stringify([...this.cart]));
      localStorage.setItem('value', JSON.stringify(this.totalTtc));
      this.oui = true;
    } else {
      this.oui = false;
    }
  },
};
</script>

<style scoped>
.contain-list {
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.totalFinal {
  margin-top: 20px;
  margin-right: calc(30vw + 50px);
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 50px;
}
.icon {
  width: 40px;
  margin: 0 20px;
}
.list {
  display: flex;
  flex-direction: row;
}
.totalFinal div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-right: 20px;
}
button {
  margin-bottom: 10px;
  margin-right: 50px;
}
</style>
