<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des Utilisateurs" />
  <SidePanelAdmin />
  <div></div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import TitleComponent from '@/components/TitleComponent.vue';
export default {
  components: {
    HeaderComponent,
    SidePanelAdmin,
    TitleComponent,
  },
  mounted() {
    let userLevel;
    if (localStorage.getItem('user')) {
      userLevel = JSON.parse(localStorage.getItem('user'));
      userLevel = userLevel.role;
    }

    if (!userLevel || userLevel !== 'ADMIN') {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped></style>
