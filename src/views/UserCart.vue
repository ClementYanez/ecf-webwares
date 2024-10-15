<template>
    <HeaderComponent />
    <div class="contain-list">
        <div v-for="product in cart" :key="product.id">
            <LineInfos :image="product.image" :title="product.titre" :minQte="product.moq" :priceOne="product.prix"
                :totalLine="product.quantity * product.prix" :productQte="product.quantity" />
        </div>
    </div>
    <div class="totalFinal">
        <span>Total TTC :</span>
        <span>{{ totalTtc }}</span>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import LineInfos from '@/components/LineInfos.vue';
export default {
    components: {
        HeaderComponent,
        LineInfos,
    },
    data() {
        return {
            cart: [],
            totalTtc: ""
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem("user"));
        let userId = user.id;
        this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`));
    }
}
</script>

<style scoped>
.contain-list {
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.totalFinal {
    margin-top: 20px;
    margin-right: calc(30vw + 50px);
    display: flex;
    justify-content: end;
    font-weight: 600;
    font-size: 1.3rem;
}
</style>