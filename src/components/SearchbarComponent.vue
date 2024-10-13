<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
};
</script>

<style scoped>
input {
  padding: 10px 10px 10px 20px;
  margin: 30px 10px;
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus {
  outline: 1px solid #ca8465;
}
</style>
