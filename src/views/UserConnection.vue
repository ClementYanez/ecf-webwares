<template>
  <div class="cont">
    <LoginUser />
  </div>
</template>

<script>
import LoginUser from '@/components/LoginUser.vue';
export default {
  components: {
    LoginUser,
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cont {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
