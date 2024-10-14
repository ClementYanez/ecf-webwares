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
</style>
