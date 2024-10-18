<template>
  <div class="contain-form">
    <h2>Nous contacter</h2>
    <form class="form">
      <div class="col-left">
        <label for="nom">Nom de société</label>
        <input type="text" placeholder="Nom de société" />
        <label for="email">Email</label>
        <input type="email" placeholder="Email" />
        <ButtonComponent text="Envoyer" color="#CA8465" class="btn-desktop" />
      </div>
      <div class="col-right">
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <ButtonComponent text="Envoyer" color="#CA8465" class="btn-mobile" />
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
.contain-form {
  width: 100%;
}

h2 {
  text-align: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}

.form input,
textarea {
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
}

.col-right textarea {
  width: 100%;
  height: 170px;
}

.col-left,
.col-right {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.col-right {
  width: 400px;
  height: 100%;
}

.col-left {
  width: 250px;
}

button {
  color: #191919;
  margin-top: 20px;
  width: 150px;
}

.btn-mobile {
  display: none;
}

@media screen and (max-width: 950px) {

  .col-left,
  .col-right {
    width: 100%;
  }

  .form input,
  textarea {
    width: 100%;
  }

  .btn-desktop {
    display: none;
  }

  .btn-mobile {
    display: block;
  }
}
</style>
