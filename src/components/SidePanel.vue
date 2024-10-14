<template>
  <div class="cont-info">
    <img
      :src="require('@/assets/icons/arrow_back.svg')"
      alt="icône arrière"
      class="icon"
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
      <h1>Connectez vous à votre compte WebWares</h1>
      <p>
        Vous n'avez pas encore de compte ?
        <router-link to="/user-inscription" class="btn-navbar"
          >S'inscrire</router-link
        >
      </p>
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
export default {};
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
  width: 30%;
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

.cont-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  width: 500px;
}
.alert {
  background-color: rgb(190, 78, 78);
  color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
}

.line {
  width: 100%;
  border-bottom: 1px solid #8f8f8f;
  margin-top: 50px;
}

.no-account {
  color: black;
  font-weight: 500;
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
input {
  padding: 10px 10px 10px 20px;
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}
label {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
