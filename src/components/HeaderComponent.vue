<template>
    <nav class="desktop">
        <img :src="require('@/assets/icons/loupe.svg')" alt="Logo" />
        <div class="nav-links">
            <img :src="require('@/assets/icons/home.svg')" alt="icône accueil" class="icon" />
            <router-link to="/" class="nav-link">Produits</router-link>
            <div class="categories-container">
                <div class="categories-btn">
                    <span>Catégories</span>
                    <img :src="require('@/assets/icons/arrow-down.svg')" alt="icône flèche vers le bas"
                        class="icon-arrow" />
                </div>
                <div class="categories">
                    <router-link to="/" class="category-link">Catégorie 1</router-link>
                    <router-link to="/" class="category-link">Catégorie 2</router-link>
                    <router-link to="/" class="category-link">Catégorie 3</router-link>
                    <router-link to="/" class="category-link">Catégorie 4</router-link>
                </div>
            </div>
        </div>
        <div>
            <router-link to="/" class="btn-navbar">Se connecter</router-link>
            <router-link to="/" class="btn-navbar">S'inscrire</router-link>
        </div>
        <div class="icon-user-cart">
            <img :src="require('@/assets/icons/cart.svg')" alt="icône panier" class="icon" />
            <img :src="require('@/assets/icons/user.svg')" alt="icône utilisateur" class="icon" />
        </div>
    </nav>
    <nav class="mobile">
        <img :src="require('@/assets/icons/loupe.svg')" alt="Logo" />
        <img :src="require('@/assets/icons/burger.svg')" alt="Logo" class="icon" @click="menuDropDown" />
        <div v-if="openMenuDropDown" class="nav-links-mobile">
            <div class="icons-mobile">
                <img :src="require('@/assets/icons/home.svg')" alt="icône accueil" class="icon" />
                <router-link to="/" class="nav-link">Accueil</router-link>
            </div>
            <div class="icons-mobile">
                <img :src="require('@/assets/icons/products.svg')" alt="icône accueil" class="icon" />
                <router-link to="/" class="nav-link">Produits</router-link>
            </div>
            <div class="categories-container">
                <div v-if="!openDropDown" class="categories-btn icons-mobile" @click="dropDown">
                    <img :src="require('@/assets/icons/arrow-down.svg')" alt="icône flèche vers le bas"
                        class="icon-arrow-mobile" />
                    <img :src="require('@/assets/icons/categories.svg')" alt="icône catégories" class="icon" />
                    <span>Catégories</span>
                </div>
                <img v-if="openDropDown" :src="require('@/assets/icons/arrow-down.svg')" alt="icône flèche vers le bas"
                    class="icon-arrow-up" @click="dropUp()" />
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
                <img :src="require('@/assets/icons/cart.svg')" alt="icône panier" class="icon" />
                <router-link to="/">Panier</router-link>
            </div>
            <div class="icons-mobile">
                <img :src="require('@/assets/icons/user.svg')" alt="icône utilisateur" class="icon" />
                <router-link to="/">Mon compte</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            openDropDown: false,
            openMenuDropDown: false,
        }
    },
    methods: {
        dropDown() {
            this.openDropDown = true;
        },
        dropUp() {
            this.openDropDown = false;
        },
        menuDropDown() {
            if (this.openMenuDropDown === false) {
                this.openMenuDropDown = true
            } else {
                this.openMenuDropDown = false
            }
        },
    }
}
</script>

<style scoped>
nav {
    background-color: #592B02;
    margin-bottom: 20px;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    width: 48px;

}

.icon-arrow {
    width: 40px;
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
    filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg) brightness(120%) contrast(80%);
}

.icon-user-cart {
    display: flex;
    gap: 20px;
}

.categories-container {
    position: relative;
}

.categories {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #592B02;
    padding: 20px 0;
    width: 240px;
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
}

.nav-links,
.categories-btn {
    display: flex;
    align-items: center;
}

.nav-link:hover,
.categories-btn:hover span {
    color: #D9B596;
}

.categories-btn:hover img {
    filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg) brightness(120%) contrast(80%);
}

.category-link:hover {
    background-color: #f1f1f1;
    color: #191919;
}

.categories-container:hover .categories {
    display: flex;
    animation: animate 300ms ease-in-out;
}


.btn-navbar {
    background-color: #f1f1f1;
    color: #191919;
    padding: 10px 20px;
    border-radius: 10px;
    text-align: center;
}

.btn-navbar:hover {
    background-color: #D9B596
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
    background-color: #592B02;
    border-radius: 10px;
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
    color: #D9B596;
    filter: invert(40%) sepia(50%) saturate(350%) hue-rotate(345deg) brightness(120%) contrast(80%);
}

.icon-arrow-mobile {
    width: 40px;
    position: absolute;
    left: -40px;
}

.icon-arrow-up {
    width: 40px;
    background-color: #CA8465;
    transform: rotate(180deg);
    border-radius: 10px;
    cursor: pointer;
}

.categories-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #592B02;
    padding: 20px 0;
    border-radius: 10px;
    z-index: 999;
}
</style>