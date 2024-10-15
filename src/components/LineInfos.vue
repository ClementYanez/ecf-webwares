<template>
    <div class="contain-all-line">
        <div class="contain-global">
            <div class="img">
                <img :src="require(`@/assets/${image}`)" />
            </div>
            <div class="contain-infos-line">
                <span class="title-item">{{ title }}</span>
                <div class="qte">
                    <span class="text-qte">Qté : </span>
                    <input type="number" :min="minQte" v-model="productQuantity" />
                </div>
                <span class="price-one">{{ priceOne }} € /u</span>
                <div class="prix-ht-line">
                    <p>{{ prixHT }} €</p>
                    <p>(HT)</p>
                </div>
            </div>
            <div class="prix-ttc-line">
                <p> {{ totalLine }} €</p>
                <p>(TTC)</p>
            </div>
        </div>
        <img :src="require('@/assets/icons/deleteicon.svg')" class="icon" />
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        minQte: Number,
        priceOne: Number,
        totalLine: Number,
        productQte: Number
    },
    data() {
        return {
            prixHT: "",
            productQuantity: this.productQte
        }
    },
    mounted() {
        this.prixHT = (this.priceOne / 1.2).toFixed(2);

    }
}
</script>

<style scoped>
.contain-all-line {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contain-global {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px 20px;
    margin: 5px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #33333348;
    width: fit-content;
}

.contain-infos-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

img {
    width: 100%;
    height: 100%;
}

.img {
    width: 100px;
    height: 100px;
}

.title-item {
    font-weight: 600;
    width: calc(10vw + 20px);
}

.text-qte {
    margin-right: 10px;
}

.qte {
    display: flex;
    justify-content: center;
    align-items: center;
}

.qte input {
    width: 70px;
    padding: 5px;
    height: 35px;
}

.price-one,
.prix-ht-line,
.prix-ttc-line {
    width: calc(7vw + 20px);
    text-align: center;
}

.prix-ht-line p,
.prix-ttc-line p {
    margin: 0;
}

.prix-ht-line {
    color: #CA8465;
}

.prix-ttc-line {
    font-weight: 600;
    color: #592B02;
}

.icon {
    width: 40px;
    margin: 0 20px;
}

@media screen and (max-width: 750px) {
    .contain-global {
        width: 70vw;
    }

    .contain-infos-line {
        flex-direction: column;
    }

    .price-one,
    .prix-ht-line,
    .prix-ttc-line,
    .title-item,
    .qte {
        width: 150px;
        text-align: start;
    }

    .qte {
        display: inline-block;
    }
}
</style>