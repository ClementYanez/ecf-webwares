<template>
    <div class="contain">
        <SidePanel>
            <h1>Créez un compte WebWares</h1>
            <p>
                Vous avez déjà un compte ?
                <router-link to="/user-connection" class="btn-navbar">Se connecter</router-link>
            </p>
        </SidePanel>
        <div class="contain-form">
            <UserFormComponent />
        </div>
        <div class="legal">
            <p>
                WebWares.fr - Politique relative aux cookies et Charte de protection des
                données
            </p>
            <p>© Inter WebWares Systems B.V. 1999-2024</p>
        </div>
    </div>
</template>

<script>
import UserFormComponent from '@/components/UserFormComponent.vue';
import SidePanel from '@/components/SidePanel.vue';
export default {
  components: {
      UserFormComponent,
      SidePanel
  }
}

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

.contain-form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.legal {
    display: none;
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
}
</style>
