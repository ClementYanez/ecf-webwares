<template>
    <!-- SearchBar --> 
            <div class="cont-list">
                <FilAriane cat1="admin" cat2="Gestion des commandes" class="filarianne"/>
                <div v-for="(order, index) in globalList" :key="index">
                    <AdminOrderscartecomponent
                        :raisonSociale="order[1].raisonSociale"
                        :siret="order[1].siret"
                        :adresse="order[1].adresse"
                        :codePostal="order[1].codePostal"
                        :ville="order[1].ville"
                        :mail="order[1].email"
                        :panier="order[0]"
                        :totalPrice="order[2]"
                        :statut="order[3]"
                        :idCommande="index"
                    />
                </div>
            </div>
</template>

<script>
import AdminOrderscartecomponent from './AdminOrderscartecomponent.vue';
import FilAriane from './FilAriane.vue';

    export default {

        data(){
            return {
                globalList: [],
            }
        },

        components: {
            AdminOrderscartecomponent,
            FilAriane,
        },


        mounted() {
            this.globalList = JSON.parse(localStorage.getItem('adminOrderList'))
            console.log(this.globalList)
        },
    }
</script>

<style scoped>
*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.filarianne{
    align-self: flex-start;
    margin-left: 5%;
}

.cont-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto 50px auto;
    gap: 15px;
    width: 100%;
}

@media screen and (max-width : 950px){
    .filarianne{
    margin-left: 10%;
}
}
</style>