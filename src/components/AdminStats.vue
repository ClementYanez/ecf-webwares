<template>
  <div class="cont-global">
    <h4>Statistiques</h4>
    <div class="stats">
      <div>
        <p>Paniers</p>
        <p>{{ panier }}</p>
      </div>
      <div>
        <p>Commandes</p>
        <p>{{ commande }}</p>
      </div>
      <div>
        <p>Ratio de conversion</p>
        <p>{{ ratio }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panier: 0,
      commande: 0,
      ratio: 0,
      orders: [],
    };
  },
  mounted() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith('panier')) {
        this.panier++;
      }
      if (localStorage.key(i).includes('adminOrderList')) {
        this.orders = JSON.parse(localStorage.getItem('adminOrderList'));
        this.commande = this.orders.length;
        console.log(this.orders);
      }
      this.ratio = (this.panier / this.commande) * 100;
    }
  },
};
</script>

<style scoped>
.cont-global {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #8a8a8a7c;
  height: 200px;
}
.stats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  gap: 20px;
  text-align: center;
}
</style>
