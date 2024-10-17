<template>
  <div class="hero">
    <div>
      <h4>Bienvenue sur</h4>
      <h1>WebWares</h1>
    </div>
    <h4>Votre solution de commande en ligne simplifiée.</h4>
  </div>
</template>

<script>
export default {
  name: 'HeaderHero',
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
  color: white;
  background-image: url('../assets/heropage.png');
  background-position: 100% 80%;
  background-size: cover;
  height: 400px;
  padding: 310px 0 180px 0;
}
h1 {
  font-size: 5rem;
}
h1,
h4 {
  text-shadow: 2px 2px 10px #5a4a3d;
}
</style>
