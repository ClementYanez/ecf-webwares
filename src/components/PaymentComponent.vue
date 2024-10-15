<template>
    <div class="payment-container">
      <div class="form-group">
  <h4>Paiement par CB</h4>

  <!-- Les inputs Prénom et Nom -->
  <div class="name-fields">
    <input type="text" v-model="firstName" placeholder="Prénom" class="input-name" />
    <input type="text" v-model="lastName" placeholder="Nom" class="input-name" />
  </div>
  <p v-if="errorMessages.firstName" class="error-message">{{ errorMessages.firstName }}</p>
  <p v-if="errorMessages.lastName" class="error-message">{{ errorMessages.lastName }}</p>

  <!-- Les inputs Numéro de carte bleue et CVC -->
  <div class="card-fields">
    <input type="text" v-model="cardNumber" placeholder="Numéro de carte bleue" class="input-card" />
    <input type="text" v-model="cvc" placeholder="CVC" class="input-cvc" />
  </div>
  <p v-if="errorMessages.cardNumber" class="error-message">{{ errorMessages.cardNumber }}</p>
  <p v-if="errorMessages.cvc" class="error-message">{{ errorMessages.cvc }}</p>
</div>
      <ButtonComponent text="Confirmer la commande" color="#CA8465" @click="confirmCommand" />
      <p v-if="errorMessages.length" class="error-message">
  <span v-for="(error, index) in errorMessages" :key="index">{{ error }}<br /></span>
</p>

    </div>
  </template>
  

  <script>
  import ButtonComponent from '@/components/ButtonComponent.vue';
  
  export default {
    components: {
      ButtonComponent,
    },
    data() {
  return {
    firstName: '',
    lastName: '',
    cardNumber: '',
    cvc: '',
    errorMessages: {
      firstName: '',
      lastName: '',
      cardNumber: '',
      cvc: ''
    },
  };
},
methods: {
  confirmCommand() {
    // Réinitialiser les messages d'erreur
    this.errorMessages = {
      firstName: '',
      lastName: '',
      cardNumber: '',
      cvc: ''
    };

    // Vérification des conditions
    if (!/^[a-zA-Z]+$/.test(this.firstName)) {
      this.errorMessages.firstName = 'Le prénom doit contenir au moins une lettre.';
    }
    if (!/^[a-zA-Z]+$/.test(this.lastName)) {
      this.errorMessages.lastName = 'Le nom doit contenir au moins une lettre.';
    }
    if (!/^\d{16}$/.test(this.cardNumber)) {
      this.errorMessages.cardNumber = 'Le numéro de carte bleue doit contenir exactement 16 chiffres.';
    }
    if (!/^\d{3}$/.test(this.cvc)) {
      this.errorMessages.cvc = 'Le CVC doit contenir exactement 3 chiffres.';
    }

    // Si des erreurs existent, ne pas procéder au paiement
    if (Object.values(this.errorMessages).some(msg => msg !== '')) {
      return;
    }

  },
}

  };
  </script>

<style scoped>
.payment-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ajusté pour aligner le contenu en haut */
  align-items: center;
  padding-top: 100px;
  width: 40%;
  margin: 0 auto;
}

.payment-container button{
    display: flex;
    align-self: flex-end;
    margin-top: 20px;
}

.form-group {
  width: 80%; /* Ajuste la largeur globale de la section formulaire */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacement entre les groupes */
}

.name-fields {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espacement entre les deux inputs Prénom et Nom */
}

.card-fields {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espacement entre les deux inputs */
}

.input-name, .input-card, .input-cvc {
  outline: none;
  width: 48%; /* Appliquer pour chaque input */
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d9b596; /* Ajout d'une bordure de 2px avec la couleur uniforme */
  box-shadow: 0 0 5px #d9b596;
}

.input-card {
  width: 70%; /* Ajuste la largeur spécifique */
}

.input-cvc {
  width: 18%; /* Ajuste la largeur spécifique */
}

/* Ajoutez du style pour le message d'erreur, si nécessaire */
.error-message {
  color: red;
  margin-top: 10px;
}
</style>

