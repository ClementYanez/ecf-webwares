<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des produits" />
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
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('userLevel') !== 'ADMIN'
    ) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped></style>
