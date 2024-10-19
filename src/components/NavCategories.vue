<template>
    <div v-if="desktopOK && !mobileOK" class="cat-list">
        <div class="category" v-for="category in this.localCategories" :key="category.id">
            <span class="cat" @click="getProductsByCategory(category.id)">{{
                category.name
            }}</span>
        </div>
    </div>
    <div v-if="mobileOK && !desktopOK" class="cat-list-mobile">
        <div class="category" v-for="category in this.localCategories" :key="category.id">
            <span class="cat" @click="getProductsByCategory(category.id)">{{
                category.name
                }}</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    props: {
        desktopOK: Boolean,
        mobileOK: Boolean,
    },
    data() {
        return {
            disp: 'none',
            localCategories: [],
            // categories: [],
        };
    },
    computed: {
        ...mapState([
            'categories',
            'filteredCategory',
            'filteredProductsList',
            'filteredProductsListByCategory',
        ]),
        ...mapMutations(['changeCategory']),
    },
    methods: {
        ...mapActions(['filterProductsByCategory', 'resetCategory']),
        getProductsByCategory(id) {
            // this.$store.commit('changeCategory', id);
            if (id === this.filteredCategory) {
                this.$store.dispatch('filterProductsByCategory', null);
            } else {
                this.$store.dispatch('filterProductsByCategory', id);
            }
        },
        resetCat() {
            // this.$store.dispatch('resetCategory');
            this.$store.dispatch('filterProductsByCategory', null);
        },
    },

    mounted() {
        if (
            !localStorage.getItem('categories') ||
            localStorage.getItem('categories') === ''
        ) {
            this.localCategories = this.categories;
            localStorage.setItem('categories', JSON.stringify(this.localCategories));
            this.$store.dispatch('filterProductsByCategory', null);
        } else {
            this.localCategories = JSON.parse(localStorage.getItem('categories'));
            this.$store.dispatch('filterProductsByCategory', null);
            // this.categories = JSON.parse(localStorage.getItem('categories'));
        }
    },
};
</script>

<style scoped>
.cat-list {
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

.category {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    margin: 0;
}

.cat {
    margin: 0;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    color: #f1f1f1;
    cursor: pointer;
}

.cat:hover {
    background-color: #f1f1f1;
    color: #191919;
}

.cat-list-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #592b02;
    padding: 20px 0;
    border-radius: 10px;
    z-index: 999;
    color: #f1f1f1;
    font-size: 1.2rem;
    font-weight: 600;
}
</style>