<template>
    <div class="cont-global-global">
        <div class="cont-global-carte">
            <div class="cont-info-carte">
                <div class="part1">
                    <h2 class="raisonsociale">{{ raisonSociale }}</h2>
                    <h3 class="p-bas siret">{{ siret }}</h3>
                </div>
                <div class="part2">
                    <p class="codepostalVille">{{ codePostal }}, {{ ville }}</p>
                    <p class="p-bas adresse">{{ adresse }}</p>
                </div>
               <div class="part3">
                 <p class="mail">{{ mail }}</p>

                <!-- Dropdown statut -->
                <div class="box1-statut" @click="dropDownBoolean()">
                    <span><strong>Statut : </strong> {{ statutAffichage }}</span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#268000" /></g></svg>

                    <div v-if="dropDownFlag" class="dropdown-statut">
                        <span @click="changeStatut('En cours')" class="dropdown-options">En cours</span>
                        <div class="barre barrestatut"></div>
                        <span @click="changeStatut('Livrée')" class="dropdown-options">Livrée</span>
                        <div class="barre barrestatut"></div>
                        <span @click="changeStatut('Annulée')" class="dropdown-options">Annulée</span>
                    </div>
                </div>


            </div>
        </div>

            <!-- partie Voir Détails -->
            <div class="cont-details" v-if="this.flagDetails">
                <div v-for="(produit, index) in  panier " :key="index">
                        <div class="ligne-achats">
                            <p class="elem-gauche">{{ produit.titre }} ({{ produit.prix }}€) x {{ produit.quantity }}</p>
                            <p class="elem-droite">Total : {{ (produit.prix*produit.quantity).toFixed(2) }}€</p>
                            <div class="barre"></div>
                        </div>
                    </div>
                    <div class="totaux">
                        <p class="total totalht">Prix total (HT) : {{ totalHt() }}€</p>
                        <p class="total totalttc">Prix total (TTC) : <strong>{{ totalTtc() }}€</strong></p>
                    </div>
            </div>
        </div>
        <ButtonComponent text="Voir détails" color="#d9b583" class="voir-details" @click="showDetails()"/>
    </div>

</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
    data(){
        return {
            flagDetails: false,
            dropDownFlag: false,
            statutDetails: this.statut,
            statutAffichage: this.statut,
        }
    },

    components: {
        ButtonComponent,
    },

  props: {
    raisonSociale: String,
    siret: String,
    adresse: String,
    codePostal: String,
    ville: String,
    mail: String,
    panier: Array,
    totalPrice: String,
    statut: String,
    idCommande: Number,
  },

  methods: {
    showDetails() {
        this.flagDetails = !this.flagDetails;
    },

    totalHt() {
        let cleanPrixTotal = this.totalPrice.replace(/"/g, '');
        let prixTotalNumber = parseFloat(cleanPrixTotal);
        let totalHt = (prixTotalNumber / 1.2).toFixed(2);

        return totalHt;
    },

    totalTtc() {
        let cleanPrixTotal = this.totalPrice.replace(/"/g, '');
        return cleanPrixTotal;
    },

    dropDownBoolean(){
        this.dropDownFlag = !this.dropDownFlag
    },

    changeStatut(nouveauStatut){
            this.statutDetails = nouveauStatut;
            let ordersList = JSON.parse(localStorage.getItem('adminOrderList'));
            ordersList[this.idCommande][3] = nouveauStatut;
            this.statutAffichage = nouveauStatut;

            localStorage.setItem('adminOrderList',JSON.stringify(ordersList))
        }
    },
};
</script>

<style scoped>
*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.cont-global-global{
    display: flex;
    position: relative;
}

.cont-global-carte{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cont-info-carte{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    border-radius: 10px;
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.267);
    height: auto; width: 60vw;
    padding: 20px;
}

.raisonsociale{
    color: #592b02;
}
.siret{
    font-size: 1.2rem;
}


.part1, .part2, .part3{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
}
.part1{
    align-items: flex-start;
}
.part2{
    align-items: flex-start;
}
.part3{
    align-items: flex-end;
}

/* partie détails */
.voir-details{
    height: 40px; width: auto;
    position: relative;
    top: 45px;
    margin-left: 20px;
}

.cont-details{
    margin: 0 auto 0 auto;
    min-width: 90%;
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
    
    border-radius: 20px;
    border: 1px solid #d9b596;
}

.ligne-achats{
    width: 100%;
    margin-bottom: 10px;
    
    position: relative;
}

.elem-droite{
    position: absolute;
    top: 0;
    right: 0;
}

.elem-gauche{
    position: relative;
    top: 0;
    left: 0;
}

.totaux{
    margin-top: 20px;
    text-align: center;
}

.total{
    font-size: 1.2rem;
}
.totalttc{
    color: #592b02;
}

.barre{
    background-color: rgb(216, 216, 216);
    width: 100%; height: 2px;
    border-radius: 2px;
    margin: 5px auto 0 auto;
}

/* Dropdown */
.icon-arrow {
  width: 20px;
}

.role {
  position: relative;
  cursor: pointer;
}

.box1-statut{
    position: relative;
}

.dropdown-statut {
    padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #33333361;
  right: 0;
  cursor: pointer;
  z-index: 999;
}

.dropdown-user span {
  font-weight: 600;
  padding: 15px;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
}

.dropdown-user span:hover {
  background-color: #592B02;
  color: #f1f1f1
}

.barrestatut{
    margin-top: 0;
}

.dropdown-options:hover{
    font-weight: bold;
}

@media screen and (max-width: 1350px){
    .voir-details{
    height: 65px; width: 90px;
    top: 35px;
}
}

@media screen and (max-width: 1230px) {
    
    .cont-info-carte{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    }

    .voir-details{
    height: 65px; width: 90px;
    position: relative;
    top: 120px;
    margin-left: 20px;
}
    .mail{
        align-self: flex-start;
    }

    .part1{
    align-items: flex-start;
    }
    .part2{
        align-items: flex-start;
    }
    .part3{
        align-items: flex-end;
    }

.cont-details{
    min-width: 100%;
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
    
    border-radius: 20px;
    border: 1px solid #d9b596;
}
    
}

@media screen and (max-width: 950px) {
    .cont-global-carte{
        width: 90vw;
        position: relative;
    }

    .cont-info-carte{
    width: 90%;
    }

    .voir-details{
    height: 40px; width: auto;
    position: absolute;
    top: 30px; right: 10%;
}
}

@media screen and (max-width: 500px) {
    .cont-global-carte{
        width: 100vw;
        position: relative;
    }

    .cont-info-carte{
    width: 100%;
    }

/* details */
.voir-details{
    top: 0; right: 0;
}
    .cont-details{
    padding: 20px;
}

.ligne-achats{
    width: 100%;
    margin-bottom: 10px;
    text-align: center;

    font-size: 0.9rem;
    
}

.elem-droite{
    position: relative;
}

.part1{
    margin-top: 20px;
    }


}

</style>