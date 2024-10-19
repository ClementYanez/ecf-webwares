<template>
  <div class="cont-global">
    <div class="cont-image">
      <div class="color-gradient"></div>
      <div v-for="product in lastImages" :key="product.id" class="image-product">
        <img :src="getImagePath(product.image)" :alt="product.titre" class="image-unique" />
        <img />
      </div>
      <div class="fondu"></div>
    </div>

    <div class="cont-info">
      <h3>Inscrivez-vous dès maintenant et commencez à remplir vos stocks !</h3>
      <ButtonComponent text="Inscrivez-vous" color="#CA8465" @click="redirectToSignup" />
      <p>
        Ou connectez-vous
        <u style="cursor: pointer" @click="redirectToLogin">ici</u> et commencez
        vos achats immédiatement !
      </p>
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
      if (image.includes('base64')) {
        return image;
      } else {
        return require(`@/assets/${image}`);
      }
    },
    redirectToSignup() {
      this.$router.push('/user-inscription'); // Route vers la page d'inscription
    },
    redirectToLogin() {
      this.$router.push('/user-connection'); // Route vers la page de connexion
    },
    // getOpacityStyle(index) {
    //   const totalImages = this.lastImages.length;
    //   const opacity = 1 - (index / totalImages);
    //   return {
    //     opacity: opacity.toFixed(2),
    //   };
    // },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cont-global {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
}

.cont-image {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;
}

.color-gradient {
  background: linear-gradient(to bottom, #ffffff00 0%, #ffffff48 50%, #ffffffd7 100%);
  width: 140px;
  height: 800px;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
}

.image-unique {
  height: 200px;
  width: 140px;
  object-fit: cover;
  object-position: center;
}

.cont-info {
  max-width: 35%;
  height: 100%;
  padding: 80px;
  border-radius: 15px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

/* Effet de survol */
.cont-info:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 950px) {
  .cont-global {
    flex-direction: column;
    justify-content: center;
  }

  .cont-image {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;
    max-width: 600px;
  }

  .cont-info {
    max-width: 550px;
    margin: 0 20px;
  }

  .color-gradient {
    background: linear-gradient(to right, #ffffff00 0%, #ffffff48 50%, #ffffffd7 100%);
    width: 600px;
    height: 200px;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }
}

@media only screen and (max-width: 650px) {

  .image-unique {
    width: 80px;
    height: 130px;
  }

  .color-gradient {
    width: 320px;
    height: 130px;
  }

  .cont-info {
    max-width: 350px;
    margin: 0 20px;
  }
}
</style>
