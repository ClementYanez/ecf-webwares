<template>
    <HeaderComponent />
    <div class="global-container">
        <div class="livraison-container">
          <h2>Information de livraison</h2>
          <div>
            <p>Nom : {{ user.raisonSociale }}</p>
            <p>N° SIRET : {{  user.siret }}</p>
            <p>Email : {{ user.email }}</p>
            <p>Adresse : {{ user.adresse }}, {{ user.codePostal }} {{ user.ville }}</p>
          </div>
        </div>
    </div>
    <PaymentComponent />
    
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import PaymentComponent from '@/components/PaymentComponent.vue';
  
  
  export default {

    components: {
      HeaderComponent,
      PaymentComponent,
      
    },
    data() {
      return {
        user: {},
      };
    },
    created() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.user = user; // Récupérer les données de l'utilisateur connecté
      }
    },
  };
  </script>
  
  <style scoped>
.global-container{
    padding-top: 200px;
}

.livraison-container{
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ajusté pour aligner le contenu en haut */
  align-items: center;
  width: 40%;
  padding: 40px;
  margin: 0 auto;
  box-shadow: 0 0 10px #d9b596;
  }
  </style>
  