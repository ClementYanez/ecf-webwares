<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des catégories" />
  <div class="cont-global">
    <SidePanelAdmin />
    <div class="cont-liste">
      <div class="searchbar">
        <div class="ariane">
          <FilAriane cat1="Administration" cat2="Catégories" />
        </div>
        <AdminSearch
          placeholder="Rechercher une catégorie"
          localstorage="categories"
        />
      </div>
      <AdminCatlist />
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
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
}
.cont-liste {
  /* padding-top: 100px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* margin-left: 10%; */
  width: 80%;
}
.searchbar {
  /* height: 50px; */
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.ariane {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
</style>
