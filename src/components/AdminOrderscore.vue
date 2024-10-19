<template>
    <!-- SearchBar -->
    <div class="cont-list">
        <FilAriane cat1="admin" cat2="Gestion des commandes" class="filarianne" />

        <input type="text" class="searchbar" placeholder="Rechercher une commande" v-model="search" @input="searchUser">

        <div v-for="(order, index) in resultSearch" :key="index">
            <AdminOrderscartecomponent :raisonSociale="order[1].raisonSociale" :siret="order[1].siret"
                :adresse="order[1].adresse" :codePostal="order[1].codePostal" :ville="order[1].ville"
                :mail="order[1].email" :panier="order[0]" :totalPrice="order[2]" :statut="order[3]"
                :idCommande="order[4]" :listeRecherche="resultSearch" />
        </div>
    </div>
</template>

<script>
import AdminOrderscartecomponent from './AdminOrderscartecomponent.vue';
import FilAriane from './FilAriane.vue';

export default {

    data() {
        return {
            globalList: [],
            search: "",
            resultSearch: [],
        }
    },

    methods: {
        searchUser() {
            if (this.search != "") {
                this.globalList = JSON.parse(localStorage.getItem('adminOrderList'))
                this.resultSearch = this.globalList.filter((searching) => {
                    return (
                        searching[1].raisonSociale
                        .toLowerCase()
                        .includes(this.search.toLowerCase()) ||
                        searching[1].siret
                        .toLowerCase()
                        .includes(this.search.toLowerCase()) ||
                        searching[1].email
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                    );
                }
            );
            } else {
                this.resultSearch = this.globalList;
            }
        },
    },

    components: {
        AdminOrderscartecomponent,
        FilAriane,
    },


    mounted() {
        this.globalList = JSON.parse(localStorage.getItem('adminOrderList'))
        this.resultSearch = this.globalList;
    },
}
</script>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.filarianne {
    align-self: flex-start;
    justify-self: flex-start;
    margin-left: 5%;
    position: absolute;
    top: 0px;
}

.searchbar{
    align-self: flex-end;
    position: absolute;
    top: 0;
    margin-right: 5%;
    width: 220px;
}

.cont-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 50px auto;
    gap: 15px;
    width: 100%;
    position: relative;
    padding: 40px;
    padding-top: 90px;
}

@media screen and (max-width: 1230px) {
    .searchbar {
        top: 40px;
    }
}

@media screen and (max-width : 950px) {
    .filarianne {
        margin-left: 10%;
    }

    .cont-list {
        padding-top: 120px;
    }
}

@media screen and (max-width : 500px) {
    .cont-list {
        padding-top: 80px;
    }

    .filarianne {
        position: relative;
        top: -60px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    .searchbar {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        top: -60px;
        width: 80%;
        text-align: center
    }
}

@media screen and (max-width: 382px) {
    .cont-list {
        padding: 40px;
        padding-top: 70px;
    }
}
</style>