<template>
    <div>
        <HeaderComponent/>
        <!-- fil d'arianne  -->
        <div class="contentproductdetails">
            <img class="productimage" v-if="productDetails.image" :src="require(`@/assets/${this.productDetails.image}`)" alt="">
            <div class="contentdetails">
                <h3 class="producttitre">{{this.productDetails.titre}}</h3>
                <p class="productmoq">à partir de {{ this.productDetails.moq }} exemplaires</p>
                <div class="barre"></div>
                <p class="productdescription">{{this.productDetails.description}}</p>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

    export default {
        data(){
            return{
                productDetails: {}
            }
        },
        components:{
            HeaderComponent,
            FooterComponent,
        },
            computed:{
            ...mapState([
                "productsList"
            ])

        },
        mounted(){
            let productId = parseInt(this.$route.params.id);
            this.productDetails = this.productsList.find((product) => product.id === productId)
        }
    }

</script>

<style scoped>
*, *::after, *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

.contentproductdetails{
    padding: 0 50px 0 50px;
    display: flex;
    justify-content: center;
    gap: 5%;
    margin: 30px 0 100px 0;
}

.productimage {
    width: 500px; height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

.contentdetails{
    padding: 20px;
    display: inline-block;
    text-align: left;
}

.producttitre{
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
}
.productmoq{
    color: black;
    margin-bottom: 10px;
}

.barre{
    height: 2px; width: 80%;
    background-color: #D9D9D9;
    border-radius: 2px;
    margin-bottom: 35px;
}

@media only screen and (max-width: 800px) {
    .contentproductdetails{
        display: flex;
        flex-direction: column;
    }

    .productimage{
        height: 300px; width: auto;
        object-fit: cover;
        margin-bottom: 10px;
    }
    .contentdetails{
        text-align: center;
    }
    .barre{
        margin: 0 auto 35px auto;
    }
}
</style>