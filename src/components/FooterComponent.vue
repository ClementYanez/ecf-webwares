<template>
    <div class="footer py-4 sticky-footer">
      <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center h-100 text-center"> <!-- Ajout de h-100 -->
          <!-- Section des liens légaux -->
          <div class="col-md-4 mb-3 mb-md-0">
            <ul class="list-unstyled d-flex flex-column flex-md-row justify-content-center gap-3">
              <li><router-link to="/legal-disclaimers">Mentions légales</router-link></li>
              <li><router-link to="/legal-privacy">Politique de confidentialité</router-link></li>
              <li><router-link to="/legal-terms">Conditions d'utilisation</router-link></li>
            </ul>
          </div>
  
          <!-- Section du texte central -->
          <div class="col-md-4 mb-3 mb-md-0">
            <p>Site créé avec Vue par la team CLFV</p>
            <p>Tous droits réservés &copy; {{ new Date().getFullYear() }}</p>
          </div>
  
          <!-- Section des icônes des réseaux sociaux -->
          <div class="col-md-4">
            <h5>Nous suivre sur les réseaux</h5>
            <ul class="list-unstyled d-flex justify-content-center gap-3">
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #D9B596;
    color: black;
  }
  
  h5 {
    color: black;
  }
  
  .sticky-footer {
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 10;
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
  