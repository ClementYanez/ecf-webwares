<template>
  <button :style="{ backgroundColor: color }">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 10px;
  color: white;
}
</style>
