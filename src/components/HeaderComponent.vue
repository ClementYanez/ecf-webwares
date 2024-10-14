<template>
  <nav class="desktop">
    <svg
      enable-background="new 0 0 24 24"
      height="24px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 24 24"
      width="24px"
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
    <div class="nav-links">
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link
        to="/products-list"
        class="nav-link"
        @click="goToProductsList"
        >Produits</router-link
      >
      <div class="categories-contain">
        <div class="categories-btn">
          <span>Catégories</span>
          <img
            :src="require('@/assets/icons/arrow-down.svg')"
            alt="icône flèche vers le bas"
            class="icon-arrow"
          />
        </div>
        <div class="categories">
          <p to="/products-list" class="category-link" @click="setCategory(1)">
            Mobilier d'intérieur
          </p>
          <p to="/products-list" class="category-link" @click="setCategory(2)">
            Luminaires
          </p>
          <p to="/products-list" class="category-link" @click="setCategory(3)">
            Tapis
          </p>
          <p to="/products-list" class="category-link" @click="setCategory(4)">
            Objets de décoration
          </p>
        </div>
      </div>
      <div v-if="userRole === 'ADMIN'" class="categories-contain">
        <div class="line"></div>
        <div class="categories-btn">
          <span>Admin</span>
          <img
            :src="require('@/assets/icons/arrow-down.svg')"
            alt="icône flèche vers le bas"
            class="icon-arrow"
          />
        </div>
        <div class="categories">
          <router-link to="/admin-panel" class="category-link"
            >Gestion des utilisateurs</router-link
          >
          <router-link to="/admin-products" class="category-link"
            >Gestion des produits</router-link
          >
          <router-link to="admin-categories" class="category-link"
            >Gestion des catégories</router-link
          >
          <router-link to="/admin-orders" class="category-link"
            >Gestion des commandes</router-link
          >
        </div>
      </div>
    </div>
    <div v-if="!user" class="buttons">
      <router-link to="/user-connection">
        <ButtonComponent
          text="Se connecter"
          color="#f1f1f1"
          textColor="#191919"
        />
      </router-link>
      <router-link to="/user-inscription">
        <ButtonComponent
          text="S'inscrire"
          color="#f1f1f1"
          textColor="#191919"
        />
      </router-link>
    </div>
    <img
      v-if="userRole === 'USER'"
      :src="require('@/assets/icons/cart.svg')"
      alt="icône panier"
      class="icon cart"
    />
    <div v-if="userRole">
      <img
        :src="require('@/assets/icons/user.svg')"
        alt="icône utilisateur"
        class="icon"
        @click="userDropDown"
      />
      <div v-if="openUserDropDown" class="deconnect">
        <ButtonComponent
          text="Se déconnecter"
          color="#f1f1f1"
          textColor="#191919"
          @click="deleteUSer"
        />
      </div>
    </div>
  </nav>
  <!-- <nav class="mobile">
    <svg
      enable-background="new 0 0 24 24"
      height="24px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 24 24"
      width="24px"
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
    <img
      :src="require('@/assets/icons/burger.svg')"
      alt="Logo"
      class="icon"
      @click="menuDropDown"
    />
    <div v-if="openMenuDropDown" class="nav-links-mobile">
      <div class="icons-mobile">
        <img
          :src="require('@/assets/icons/home.svg')"
          alt="icône accueil"
          class="icon"
        />
        <router-link to="/" class="nav-link">Accueil</router-link>
      </div>
      <div class="icons-mobile">
        <img
          :src="require('@/assets/icons/products.svg')"
          alt="icône accueil"
          class="icon"
        />
        <router-link to="/" class="nav-link">Produits</router-link>
      </div>
      <div class="categories-container">
        <div
          v-if="!openDropDown"
          class="categories-btn icons-mobile"
          @click="dropDown"
        >
          <img
            :src="require('@/assets/icons/arrow-down.svg')"
            alt="icône flèche vers le bas"
            class="icon-arrow-mobile"
          />
          <img
            :src="require('@/assets/icons/categories.svg')"
            alt="icône catégories"
            class="icon"
          />
          <span>Catégories</span>
        </div>
        <img
          v-if="openDropDown"
          :src="require('@/assets/icons/arrow-down.svg')"
          alt="icône flèche vers le bas"
          class="icon-arrow-up"
          @click="dropUp()"
        />
        <div v-if="openDropDown" class="categories-mobile">
          <router-link to="/" class="category-link">Catégorie 1</router-link>
          <router-link to="/" class="category-link">Catégorie 2</router-link>
          <router-link to="/" class="category-link">Catégorie 3</router-link>
          <router-link to="/" class="category-link">Catégorie 4</router-link>
        </div>
      </div>
      <router-link to="/" class="btn-navbar">Se connecter</router-link>
      <router-link to="/" class="btn-navbar">S'inscrire</router-link>
      <div class="icons-mobile">
        <img
          :src="require('@/assets/icons/cart.svg')"
          alt="icône panier"
          class="icon"
        />
        <router-link to="/">Panier</router-link>
      </div>
      <div class="icons-mobile">
        <img
          :src="require('@/assets/icons/user.svg')"
          alt="icône utilisateur"
          class="icon"
        />
        <router-link to="/">Mon compte</router-link>
      </div>
    </div>
  </nav> -->
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      openDropDown: false,
      openMenuDropDown: false,
      openUserDropDown: false,
      user: '',
      userRole: '',
    };
  },
  methods: {
    goToProductsList() {
      this.$store.commit('changeCategory', '');
      this.$store.dispatch('filterProductsByCategory', null);
      this.$router.push('/products-list');
    },
    setCategory(id) {
      this.$store.commit('changeCategory', id);
      this.$store.dispatch('filterProductsByCategory', id);
      this.$router.push('/products-list');
    },
    dropDown() {
      this.openDropDown = true;
    },
    dropUp() {
      this.openDropDown = false;
    },
    menuDropDown() {
      if (this.openMenuDropDown === false) {
        this.openMenuDropDown = true;
      } else {
        this.openMenuDropDown = false;
      }
    },
    userDropDown() {
      if (this.openUserDropDown === false) {
        this.openUserDropDown = true;
      } else {
        this.openUserDropDown = false;
      }
    },
    ...mapActions(['logOut']),
    deleteUSer() {
      localStorage.removeItem('user');
      this.user = '';
      this.userRole = '';
      location.reload();
    },
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userRole = this.user.role;
    }
  },
};
</script>

<style scoped>
.router-link-active {
  color: #d9b596;
}

nav {
  position: fixed;
  width: 100%;
  background-color: #592b02;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
}

.icon {
  width: 48px;
}

.icon-arrow {
  width: 40px;
}

a:hover {
  cursor: pointer;
}

a,
span {
  text-decoration: none;
  color: #f1f1f1;
  font-size: 20px;
  font-weight: 500;
  margin-left: 25px;
}

span,
.icon-arrow,
.icon {
  cursor: pointer;
}

.icon:hover {
  filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg)
    brightness(120%) contrast(80%);
}

.categories-contain {
  position: relative;
  display: flex;
  justify-content: center;
}

.categories {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #592b02;
  padding: 20px 0;
  width: 280px;
  border-radius: 10px;
  position: absolute;
  top: 40px;
  left: -35px;
  z-index: 999;
}

.category-link {
  margin: 0;
  padding: 10px;
  width: 100%;
  text-align: center;
  color: #f1f1f1;
  cursor: pointer;
}

.nav-links,
.categories-btn {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
}

.nav-link:hover,
.categories-btn:hover span {
  color: #d9b596;
}

.categories-btn:hover img {
  filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg)
    brightness(120%) contrast(80%);
}

.category-link:hover {
  background-color: #f1f1f1;
  color: #191919;
}

.categories-contain:hover .categories {
  display: flex;
  animation: animate 300ms ease-in-out;
}

.buttons {
  display: flex;
}

.deconnect {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #592b02;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 80px;
  right: 5px;
  z-index: 999;
}

.btn-navbar {
  background-color: #f1f1f1;
  color: #191919;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
}

.btn-navbar:hover {
  background-color: #d9b596;
}

.line {
  width: 3px;
  height: 50px;
  background-color: #f1f1f1;
  margin-left: 20px;
}

.cart {
  position: absolute;
  right: 110px;
}

@keyframes animate {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}

.mobile {
  position: relative;
  padding: 10px 40px;
}

.nav-links-mobile {
  position: absolute;
  top: 60px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 30px 50px;
  background-color: #592b02;
  border-radius: 10px;
  z-index: 999;
}

.mobile a,
.mobile span {
  margin: 0;
}

.icons-mobile {
  display: flex;
  align-items: center;
  gap: 5px;
}

.icons-mobile:hover {
  color: #d9b596;
  filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg)
    brightness(120%) contrast(80%);
}

.icon-arrow-mobile {
  width: 40px;
  position: absolute;
  left: -40px;
}

.icon-arrow-up {
  width: 40px;
  background-color: #ca8465;
  transform: rotate(180deg);
  border-radius: 10px;
  cursor: pointer;
}

.categories-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #592b02;
  padding: 20px 0;
  border-radius: 10px;
  z-index: 999;
}

svg {
  /* background-color: white; */
  fill: white;
  width: 60px;
  height: 60px;
}
</style>
