<template>
  <button :style="{ backgroundColor: color }">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
    url: String,
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 10px 20px;
  color: #f1f1f1;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
}

button:active {
  box-shadow: 0px 0px 10px #57575770;
}
</style>
