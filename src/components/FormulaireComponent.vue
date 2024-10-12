<template>
  <div>
    <form action="">
      <label for="nom">Nom de société</label>
      <input type="text" placeholder="Nom de société" />
      <label for="email">Email</label>
      <input type="email" placeholder="Email" />
      <label for="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <ButtonComponent text="Envoyer" color="#D9B596" />
    </form>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style scoped></style>
