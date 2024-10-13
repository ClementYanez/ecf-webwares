<template>
  <div>
    <h2>Nous contacter</h2>
    <form action="">
      <div id="form-container">
        <div>
          <label for="nom">Nom de société</label>
          <input type="text" placeholder="Nom de société" />
          <label for="email">Email</label>
          <input type="email" placeholder="Email" />
          <ButtonComponent text="Envoyer" color="#D9B596" />
        </div>

        <div>
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="50" rows="5"></textarea>
        </div>
      </div>
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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}
h2 {
  text-align: center;
}
#form-container {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 15px;
}

#form-container input,
textarea {
  border-radius: 5px;
  border: none;
  padding-left: 5px;
}

button {
  color: black;
}
</style>
