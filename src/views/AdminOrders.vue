<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des commandes" />
  <div class="cont-content">
    <div class="panel">
      <SidePanelAdmin/>
    </div>
    <AdminOrderscore />
  </div>
  <div></div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import AdminOrderscore from '@/components/AdminOrderscore.vue';

export default {
  components: {
    HeaderComponent,
    SidePanelAdmin,
    TitleComponent,
    AdminOrderscore,
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

<style scoped>
.cont-content {
  display: flex;
  min-height: 69vh;
}

.panel {
  display: flex;
}

@media screen and (max-width: 950px) {
  .cont-content {
    flex-direction: column;
  }
}
</style>
