<template>
  <nav>
    <ul>
      <li>Accueil</li>
      <li>Catégories</li>
      <li>Produits</li>
      <li></li>
    </ul>
    <ul>
      <li>Connexion</li>
    </ul>
  </nav>
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
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
