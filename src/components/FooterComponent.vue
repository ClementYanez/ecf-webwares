<template>
  <div class="footer">
    <div>
      <FormulaireComponent />
    </div>
    <div class="columns">
      <!-- Section des liens légaux -->
      <div class="column">
        <h5>Pages Légales</h5>
        <ul>
          <li>
            <router-link to="/legal-disclaimers">Mentions légales</router-link>
          </li>
          <li>
            <router-link to="/legal-privacy">Politique de confidentialité</router-link>
          </li>
          <li>
            <router-link to="/legal-terms">Conditions d'utilisation</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h5>Nous contacter</h5>
        <ul>
          <li>web.wares@gmail.com</li>
          <li>0145454545</li>
          <li>125 Avenue Jean-Jaurès, 75019 Paris</li>
        </ul>
      </div>
      <div class="column">
        <h5>Map</h5>
        <ul class="links">
          <li @click="up"><router-link to="/" class="nav-link">Accueil</router-link></li>
          <li @click="up"><router-link to="/products-list" class="nav-link">Produits</router-link></li>
          <li @click="setCategory(1)"> Mobilier d'intérieur</li>
          <li @click="setCategory(2)"> Luminaires </li>
          <li @click="setCategory(3)"> Tapis </li>
          <li @click="setCategory(4)"> Objets de décoration </li>
        </ul>
      </div>
      <div class=" column">
        <h5>Nous suivre sur les réseaux</h5>
        <ul class="social-media">
          <li>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" aria-label="X (Twitter)">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Section du texte central -->

    <div class="rights">
      <p>Site créé avec Vue par la team CLFV</p>
      <p>Tous droits réservés &copy; {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script>
import FormulaireComponent from './FormulaireComponent.vue';
export default {
  name: 'FooterComponent',

  components: {
    FormulaireComponent,
  },
  methods: {
    setCategory(id) {
      this.$store.commit('changeCategory', id);
      this.$store.dispatch('filterProductsByCategory', id);
      this.$router.push('/products-list');
      let rootElement = document.documentElement;
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    up() {
      let rootElement = document.documentElement;
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
}

.footer {
  background-color: #d9b596;
  color: #191919;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h5 {
  color: #191919;
}

.footer a {
  color: #191919;
}

.columns {
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  padding: 30px 0;
}

.column {
  margin-top: 20px;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.social-media {
  display: flex;
  gap: 20px;
}

.social-media i {
  font-size: 2rem;
}

.links li {
  text-decoration: underline;
  cursor: pointer;
}

.rights {
  text-align: center;
}

@media screen and (max-width: 700px) {
  .columns {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .column {
    width: 200px;
  }
}
</style>
