<template>
  <div class="cont-side">
    <div class="raison-sociale">
      <h4>{{ raisonSocial }}</h4>
      <h3>Admin</h3>
    </div>
    <ul>
      <li class="link">
        <img
          :src="require('@/assets/icons/1user.svg')"
          alt="icône utilisateur"
          class="icon"
        />
        <router-link to="/admin-users" class="category-link"
          >Gestion des utilisateurs</router-link
        >
      </li>
      <li class="mobile-link">
        <img
          :src="require('@/assets/icons/1user.svg')"
          alt="icône utilisateur"
          class="icon"
        />
        <router-link to="/admin-users" class="category-link"
          >Utilisateurs</router-link
        >
      </li>
      <li class="link">
        <img
          :src="require('@/assets/icons/product.svg')"
          alt="icône produit"
          class="icon icon-product"
        />
        <router-link to="/admin-products" class="category-link"
          >Gestion des produits</router-link
        >
      </li>
      <li class="mobile-link">
        <img
          :src="require('@/assets/icons/product.svg')"
          alt="icône produit"
          class="icon icon-product"
        />
        <router-link to="/admin-products" class="category-link"
          >Produits</router-link
        >
      </li>
      <li class="link">
        <img
          :src="require('@/assets/icons/categories.svg')"
          alt="icône catégories"
          class="icon"
        />
        <router-link to="admin-categories" class="category-link"
          >Gestion des catégories</router-link
        >
      </li>
      <li class="mobile-link">
        <img
          :src="require('@/assets/icons/categories.svg')"
          alt="icône catégories"
          class="icon"
        />
        <router-link to="admin-categories" class="category-link"
          >Catégories</router-link
        >
      </li>
      <li class="link">
        <img
          :src="require('@/assets/icons/order.svg')"
          alt="icône commande"
          class="icon"
        />
        <router-link to="/admin-orders" class="category-link"
          >Gestion des commandes</router-link
        >
      </li>
      <li class="mobile-link">
        <img
          :src="require('@/assets/icons/order.svg')"
          alt="icône commande"
          class="icon"
        />
        <router-link to="/admin-orders" class="category-link"
          >Commandes</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raisonSocial: '',
    };
  },
  props: {
    texth1: String,
    textp: String,
  },
  beforeMount() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'));
      this.raisonSocial = user.raisonSociale;
    }
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

h4,
h3 {
  color: #f1f1f1;
}

.raison-sociale {
  margin-bottom: 20px;
  text-align: center;
}

li {
  list-style-type: none;
  font-size: calc(0.2vw + 16px);
  margin-bottom: 10px;
}

a {
  color: #f1f1f1;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #d9b596;
}

a:hover {
  color: #d9b596;
}
 
.cont-side {
    background-color: #592b02;
    width: 320px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
  width: 40px;
  margin-right: 10px;
  cursor: pointer;
}

.icon-product {
  width: 30px;
  margin: 7px 10px 0 9px;
}

.mobile-link {
  display: none;
}

@media screen and (max-width: 950px) {
  .cont-side {
    width: 100vw;
    height: auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin-right: 20px;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .link {
    display: none;
  }

  .mobile-link {
    display: inline;
  }
}
</style>
