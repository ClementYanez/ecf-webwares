<template>
  <div class="container">
    <SidePanel />
    <div class="container-form">
      <UserFormComponent />
    </div>
  </div>
</template>

<script>
import SidePanel from '@/components/SidePanel.vue';
import UserFormComponent from '@/components/UserFormComponent.vue';
export default {
  components: {
    UserFormComponent,
    SidePanel,
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

.container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}

.container-form {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
