<template>
  <div class="cont">
    <div class="cont-form">
      <label for="login">Email</label>
      <input type="text" id="email" placeholder="Email" v-model="email" />
      <label for="motdepasse">Mot de passe</label>
      <input
        type="password"
        id="motdepasse"
        name=""
        placeholder="Mot de passe"
        v-model="motdepasse"
      />
      <ButtonComponent text="Connexion" color="#CA8465" @click="connectUser" />
      <p v-if="alert" class="alert">Email ou mot de passe incorrect</p>
      <div class="line"></div>
      <p class="no-account">
        Vous n'avez pas de compte ? <br />
        Créez-en un maintenant.
      </p>
      <ButtonComponent text="Créer un compte" color="grey" @click="redirectToSignIn"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  data() {
    return {
      email: '',
      motdepasse: '',
      alert: false,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    connectUser() {
      this.userDatabase.filter((element) => {
        if (
          element.email === this.email &&
          element.motDePasse === this.motdepasse
        ) {
          localStorage.setItem('user', JSON.stringify(element));
          this.alert = false;
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
        }

        if (localStorage.getItem('user') === null) {
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 5000);
        }
      });
    },
    redirectToSignIn(){
      this.$router.push('/user-inscription');
    }
  },
  computed: {
    ...mapState(['userDatabase']),
  },
  created() {
        this.$store.dispatch("loadUserDatabase")
    }
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cont {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}

h1,
p {
  text-align: center;
  color: #f1f1f1;
}

a {
  color: #d9b596;
}

/* .cont-info {
  background-color: #592b02;
  height: 100vh;
  width: 30%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cont-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}

.icon {
  width: 40px;
}

.logo {
  fill: #f1f1f1;
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
}

.legal {
  font-size: 0.8rem;
} */

.cont-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  width: 500px;
}
.alert {
  background-color: rgb(190, 78, 78);
  color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
}

.line {
  width: 100%;
  border-bottom: 1px solid #8f8f8f;
  margin-top: 50px;
}

.no-account {
  color: black;
  font-weight: 500;
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
input {
  padding: 10px 10px 10px 20px;
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}
label {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
