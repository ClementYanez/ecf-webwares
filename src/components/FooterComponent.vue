<template>
  <div class="footer py-4 sticky-footer">
    <div class="container-fluid">
      <div
        class="row d-flex align-items-center justify-content-center mb-5 h-100 text-center"
      >
        <FormulaireComponent />
      </div>
      <div
        class="row d-flex align-items-start justify-content-center h-100 text-center"
      >
        <!-- Ajout de h-100 -->
        <!-- Section des liens légaux -->
        <div class="col-md-3 mb-3 mb-md-0">
          <h5>Pages Légales</h5>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li>
              <router-link to="/legal-disclaimers"
                >Mentions légales</router-link
              >
            </li>
            <li>
              <router-link to="/legal-privacy"
                >Politique de confidentialité</router-link
              >
            </li>
            <li>
              <router-link to="/legal-terms"
                >Conditions d'utilisation</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
          <h5>Nous contacter</h5>
          <ul
            class="list-unstyled d-flex flex-column justify-content-center gap-3"
          >
            <li>web.wares@gmail.com</li>
            <li>0145454545</li>
            <li>125 Avenue Jean-Jaurès, 75019 Paris</li>
          </ul>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
          <h5>Map</h5>
          <ul
            class="list-unstyled d-flex flex-column justify-content-center gap-3"
          >
            <li>Products</li>
            <li>Product1</li>
            <li>Product2</li>
            <li>Product3</li>
            <li>Product4</li>
          </ul>
        </div>
        <!-- Section des icônes des réseaux sociaux -->
        <div class="col-md-3 mb-3 mb-md-0">
          <h5>Nous suivre sur les réseaux</h5>
          <ul class="list-unstyled d-flex justify-content-center gap-3">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="X (Twitter)"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row text-center">
        <!-- Section du texte central -->
        <div class="col-md-12 mb-3 mb-md-0">
          <p>Site créé avec Vue par la team CLFV</p>
          <p>Tous droits réservés &copy; {{ new Date().getFullYear() }}</p>
        </div>
      </div>
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
};
</script>

<style scoped>
.footer {
  background-color: #d9b596;
  color: black;
}

h5 {
  color: black;
}

.sticky-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  /* z-index: 10; */
}

.footer a {
  color: black;
}

.bi {
  font-size: 25px;
}

.row {
  width: 100%;
}
</style>
