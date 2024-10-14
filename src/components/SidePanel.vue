<template>
  <div class="cont-info">
    <img
      :src="require('@/assets/icons/arrow_back.svg')"
      alt="icône arrière"
      class="icon"
      @click="goBack"
    />
    <div class="cont-title">
      <svg
        class="logo"
        enable-background="new 0 0 24 24"
        height="60px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 24 24"
        width="60px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="M19.7,0.5H4.3c-2.1,0-3.8,1.7-3.8,3.8v15.4c0,2.1,1.7,3.8,3.8,3.8h15.4c2.1,0,3.8-1.7,3.8-3.8V4.3   C23.5,2.2,21.8,0.5,19.7,0.5z M19.1,16.9c0,0.3-0.2,0.5-0.5,0.5H8.4c-1.9,0-3.5-1.6-3.5-3.5V7.1c0-0.3,0.2-0.5,0.5-0.5h2.8   c0.3,0,0.5,0.2,0.5,0.5v6.1c0,0.1,0,0.1,0.1,0.1h1.5l0-6.2c0-0.3,0.2-0.5,0.5-0.5h2.6c0.3,0,0.5,0.2,0.5,0.5v6.2h1.6V7.1   c0-0.3,0.2-0.5,0.5-0.5h2.8c0.3,0,0.5,0.2,0.5,0.5V16.9z"
          />
        </g>
      </svg>
      <slot></slot>
    </div>
    <div class="legal">
      <p>
        WebWares.fr - Politique relative aux cookies et Charte de protection des
        données
      </p>
      <p>© Inter WebWares Systems B.V. 1999-2024</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texth1: String,
    textp: String,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
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

h1,
p {
  text-align: center;
  color: #f1f1f1;
}

a {
  color: #d9b596;
}

.cont-info {
  background-color: #592b02;
  height: 100vh;
  width: 45%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cont-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}

.icon {
  width: 40px;
  cursor: pointer;
}

.logo {
  fill: #f1f1f1;
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
}

.legal {
  font-size: 0.8rem;
}
</style>
