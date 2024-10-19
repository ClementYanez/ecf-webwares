<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des catégories" />
  <div class="cont-global">
    <div class="cont-panel">
      <SidePanelAdmin />
    </div>
    <div class="cont-core">
      <div class="cont-searcharianne">
        <FilAriane cat1="Administration" cat2="Catégories" />
        <AdminSearch placeholder="Rechercher une catégorie" localstorage="categories" class="searchbar"/>
      </div>
      <div class="cont-list">
        <AdminCatlist />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import AdminCatlist from '@/components/AdminCatlist.vue';
import AdminSearch from '@/components/AdminSearch.vue';
import FilAriane from '@/components/FilAriane.vue';
export default {
  components: {
    HeaderComponent,
    SidePanelAdmin,
    TitleComponent,
    AdminCatlist,
    AdminSearch,
    FilAriane,
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
.cont-global {
  display: flex;
  min-height: 68vh;
}
.cont-panel{
  display: flex;
}

.cont-core{
  width: 100%
}
.cont-searcharianne{
  padding: 20px 60px 20px 60px;
  position: relative;
}
.searchbar{
  position: absolute;
  right: 5%;
  top: -14px;
}

@media screen and (max-width : 1100px) {
  .searchbar{
    top: 30px;
  }
  .cont-list{
    padding-top: 30px;
  }
}

@media screen and (max-width : 950px) {
  .cont-global {
    flex-direction: column;
    align-items: center;
  }
  .cont-searcharianne{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
  .searchbar{
    position: static;
  }
  .cont-list{
    padding-top: 0px;
  }
}

@media screen and (max-width : 460px) {
  .searchbar{
    width: 100%;
  }
}
</style>
