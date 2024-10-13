<template>
  <div>
    <HeaderComponent />
    <HeaderHero />
    <LandingComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderHero from '@/components/HeaderHero.vue';
import LandingComponent from '@/components/LandingComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderHero,
    LandingComponent,
  },
};
</script>

<style scoped></style>
