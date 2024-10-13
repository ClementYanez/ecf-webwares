<template>
  <div>
    <HeaderComponent />
    <HeaderHero />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderHero from '@/components/HeaderHero.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderHero,
  },
};
</script>

<style scoped></style>
