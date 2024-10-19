<template>
  <div class="contain-all-line">
    <div class="contain-global">
      <div class="img">
        <img :src="localImage" />
      </div>
      <div class="contain-infos-line">
        <span class="title-item">{{ title }}</span>
        <div class="qte">
          <span class="text-qte">Qté : </span>
          <input
            type="number"
            :min="minQte"
            v-model="productQuantity"
            v-if="productQte"
          />
          <span v-if="qte">{{ qte }}</span>
        </div>
        <span class="price-one">{{ priceOne }} € /u</span>
        <div class="prix-ht-line">
          <p>{{ prixHT }} €</p>
          <p>(HT)</p>
        </div>
      </div>
      <div class="prix-ttc-line">
        <p>{{ totalLine }} €</p>
        <p>(TTC)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    minQte: Number,
    priceOne: Number,
    productQte: Number,
    product: Object,
    qte: Number,
    lineValue: Number,
  },
  data() {
    return {
      prixHT: '',
      productQuantity: 0,
      totalLine: '',
      prod: {},
      localImage: '',
    };
  },
  mounted() {
    let panier;
    let user;
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
      panier = JSON.parse(localStorage.getItem(`panier_${user.id}`));
    }
    this.prixHT = (this.priceOne / 1.2).toFixed(2);
    this.totalLine = (this.productQuantity * this.priceOne).toFixed(2);
    this.prod.value = this.totalLine;
    if (this.productQte) {
      this.productQuantity = this.productQte;
    } else if (this.lineValue) {
      this.productQuantity = this.qte;
    }
    this.prod = this.product;
    panier.forEach((element) => {
      if (element.id === this.prod.id) {
        element.quantity = this.productQuantity;
        element.value = this.totalLine;
        localStorage.setItem(`panier_${user.id}`, JSON.stringify([...panier]));
      }
    });
    if (this.image.includes('base64')) {
      this.localImage = this.image;
    } else {
      this.localImage = require(`@/assets/${this.image}`);
    }
  },

  watch: {
    productQuantity: {
      handler() {
        this.totalLine = (this.productQuantity * this.priceOne).toFixed(2);
        this.prod.value = this.totalLine;
        this.prod.quantity = this.productQuantity;
        let user = JSON.parse(localStorage.getItem('user'));
        let panier = JSON.parse(localStorage.getItem(`panier_${user.id}`));
        panier.forEach((element) => {
          if (element.id === this.prod.id) {
            element.quantity = this.productQuantity;
            element.value = this.totalLine;
            localStorage.setItem(
              `panier_${user.id}`,
              JSON.stringify([...panier])
            );
          }
        });
        this.$emit('total', this.totalLine);
      },
    },
  },
};
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
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  margin: 5px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #33333348;
  width: 75vw;
}

.contain-infos-line {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 65%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.img {
  width: 100px;
  height: 100px;
}

.title-item {
  font-weight: 600;
  width: 20%;
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
  width: 20%;
  text-align: center;
}

.prix-ht-line p,
.prix-ttc-line p {
  margin: 0;
}

.prix-ht-line {
  color: #ca8465;
}

.prix-ttc-line {
  font-weight: 600;
  color: #592b02;
}

.icon {
  width: 40px;
  margin: 0 20px;
}

@media screen and (max-width: 950px) {
  .contain-infos-line {
    flex-direction: column;
  }

  .img {
    width: 20%;
  }

  .price-one,
  .prix-ht-line,
  .prix-ttc-line,
  .title-item,
  .qte {
    width: 60%;
    text-align: start;
  }

  .qte {
    display: inline-block;
  }

  .prix-ttc-line {
    width: 20%;
    text-align: center;
  }
}

@media screen and (max-width: 450px) {
  .contain-global {
    flex-direction: column;
    justify-content: center;
  }

  .img {
    display: none;
  }

  .contain-infos-line {
    width: 100%;
  }

  .price-one,
  .prix-ht-line,
  .prix-ttc-line,
  .title-item,
  .qte {
    width: 100%;
    text-align: start;
  }

  .prix-ttc-line {
    text-align: start;
  }

  .tot {
    display: none;
  }
}
</style>
