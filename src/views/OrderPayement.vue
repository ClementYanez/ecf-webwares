<template>
  <HeaderComponent />
  <div class="global-container">
    <div>
      <div v-for="product in cart" :key="product.id">
        <LineInfos
          :image="product.image"
          :title="product.titre"
          :priceOne="product.prix"
          :qte="product.quantity"
          :product="product"
          :lineValue="product.value"
        />
      </div>
      <div class="totalFinal">
        <div>
          <span>Total HT :</span>
          <span>Total TTC :</span>
        </div>
        <div>
          <span>{{ totalHt }}€</span>
          <span>{{ totalTtc }}€</span>
        </div>
      </div>
    </div>
    <div class="livraison-container">
      <h2>Information de livraison</h2>
      <div>
        <p>Nom : {{ user.raisonSociale }}</p>
        <p>N° SIRET : {{ user.siret }}</p>
        <p>Email : {{ user.email }}</p>
        <p>
          Adresse : {{ user.adresse }}, {{ user.codePostal }} {{ user.ville }}
        </p>
      </div>
    </div>
  </div>
  <PaymentComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import PaymentComponent from '@/components/PaymentComponent.vue';
import LineInfos from '@/components/LineInfos.vue';

export default {
  components: {
    HeaderComponent,
    PaymentComponent,
    LineInfos,
  },
  data() {
    return {
      user: {},
      total: 0,
      cart: [],
      totalTtc: 0,
      totalHt: 0,
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user; // Récupérer les données de l'utilisateur connecté
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.cart = JSON.parse(localStorage.getItem(`panier_${user.id}`));
    this.totalTtc = JSON.parse(localStorage.getItem('value'));
    this.totalHt = (this.totalTtc / 1.2).toFixed(2);
  },
};
</script>

<style scoped>
.global-container {
  padding-top: 200px;
}

.livraison-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ajusté pour aligner le contenu en haut */
  align-items: center;
  width: 40%;
  padding: 40px;
  margin: 0 auto;
  box-shadow: 0 0 10px #d9b596;
}
.totalFinal {
  margin-right: calc(30vw + 50px);
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 50px;
  margin-bottom: 50px;
}
.totalFinal div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-right: 20px;
}
</style>
