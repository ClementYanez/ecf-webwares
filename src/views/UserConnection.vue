<template>
  <div class="contain">
    <SidePanel>
      <h1>Connectez vous à votre compte WebWares</h1>
      <p>
        Vous n'avez pas encore de compte ?
        <router-link to="/user-inscription" class="btn-navbar"
          >S'inscrire</router-link
        >
      </p>
    </SidePanel>
    <div class="cont">
      <LoginUser />
    </div>
  </div>
</template>

<script>
import SidePanel from '@/components/SidePanel.vue';
import LoginUser from '@/components/LoginUser.vue';
export default {
  components: {
    LoginUser,
    SidePanel,
  },
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

.contain {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
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

@media screen and (max-width: 850px) {
    .contain {
        flex-direction: column;
        width: 100vw;
    }

    .legal {
        display: block;
        margin: 30px 100px;
    }

    .legal p {
        color: #626262;

    }

    .cont {
      display: flex;
    }
}
</style>
