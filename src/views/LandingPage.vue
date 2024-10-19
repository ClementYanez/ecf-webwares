<template>
  <div>
    <HeaderComponent />
    <HeaderHero />
    <LandingconnectedComponent v-if="userLevel" />
    <LandingComponent v-else />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderHero from '@/components/HeaderHero.vue';
import LandingComponent from '@/components/LandingComponent.vue';
import LandingconnectedComponent from '@/components/LandingconnectedComponent.vue';

import { mapState } from 'vuex';

export default {
  data() {
    return {
      user: '',
      userLevel: '',
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderHero,
    LandingComponent,
    LandingconnectedComponent,
  },

  computed: {
    ...mapState(['productsList']),
  },

  mounted() {
    if (localStorage.getItem('productsList') === null) {
      localStorage.setItem('productsList', JSON.stringify(this.productsList));
    }

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userLevel = this.user.role;
    }
  },
};
</script>

<style scoped></style>
