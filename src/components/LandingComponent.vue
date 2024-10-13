<template>
    <div class="container">
      <div class="row">
        <!-- Colonne pour les images à gauche -->
         <!-- Colonne pour les images à gauche -->
      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <div class="img-container">
        <div v-for="product in lastImages" :key="product.id" class="image-wrapper">
          <img :src="getImagePath(product.image)" :alt="product.titre" class="custom-img">
          <img  />
        </div>
        </div>
      </div>
  
        <!-- Colonne pour le texte à droite -->
        <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-start mt-5 text-center">
            <div class="box-shadow">
          <h3>Inscrivez-vous dès maintenant et commencez à remplir vos stocks !</h3>
          <ButtonComponent
          text="Inscrivez-vous"
          color="#CA8465" />
          <p>Ou connectez-vous <u style="cursor: pointer">ici</u> et commencez vos achats immédiatement !</p>
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';
    export default {
        components: {
            ButtonComponent,
        },
        computed: {
    ...mapGetters(['lastImagesByCategory']),
    lastImages() {
      return this.lastImagesByCategory;
    },
  },
  methods: {
    getImagePath(image) {
      // Dynamique avec require pour les assets
      return require(`@/assets/${image}`);
    },
    // getOpacityStyle(index) {
    //   const totalImages = this.lastImages.length;
    //   const opacity = 1 - (index / totalImages);
    //   return {
    //     opacity: opacity.toFixed(2),
    //   };
    // },
  },
    }
</script>

<style scoped>
  .row {
    height: 100%;
  }

  .img-container{
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .custom-img {
  width: 170px; /* Taille des images */
  height: auto; /* Conserve les proportions */
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Appliquer progressivement plus de transparence */
.image-wrapper:nth-child(1) img {
  opacity: 1; /* Premier élément totalement visible */
}

.image-wrapper:nth-child(2) img {
  opacity: 0.7; /* Deuxième élément légèrement transparent */
}

.image-wrapper:nth-child(3) img {
  opacity: 0.3; /* Troisième élément plus transparent */
}

.image-wrapper:nth-child(4) img {
  opacity: 0.2; /* Quatrième élément encore plus transparent */
}




/* Styles pour la colonne avec box-shadow */
.box-shadow {
  background-color: white; /* Assure que l'arrière-plan soit blanc */
  padding: 80px; /* Ajoute de l'espace intérieur */
  border-radius: 15px; /* Arrondit les coins */
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.3); /* Box shadow */
  transition: box-shadow 0.3s ease; /* Transition pour un effet lors du survol */
  display: flex; /* Ne prend que la largeur et la hauteur nécessaires */
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 150px;
  margin-left: auto; /* Centre horizontalement */
  margin-right: auto; /* Centre horizontalement */
  width: 100%;
  height: 400px;
}

.box-shadow h3{
    font-size: 1.5rem;
}

.box-shadow button{
    width: fit-content;
    margin: 0 auto 60px;
}


/* Effet de survol */
.box-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Augmente l'ombre au survol */
}
</style>