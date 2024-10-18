<template>
  <div>
    <HeaderComponent />
    <TitleComponent title="Gestion des produits" />

    <div class="flex-need">
      <SidePanelAdmin class="side-panel" />

      <div class="products-container">
        <div class="product-list">
          <!-- Formulaire d'ajout de produit -->
          <div v-if="showForm" class="add-product-form">
            <h3>Ajouter un nouveau produit</h3>
            <form @submit.prevent="handleSave(newProduct)">
              <label for="titre">Titre:</label>
              <input
                type="text"
                v-model="newProduct.titre"
                id="titre"
                required
              />

              <label for="description">Description:</label>
              <textarea
                v-model="newProduct.description"
                id="description"
                required
              ></textarea>

              <label for="categorie">Catégorie:</label>
              <select v-model="newProduct.categorieId" id="categorie" required>
                <option value="" disabled>Sélectionnez une catégorie</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select> 
              <label for="prix">Prix:</label>
              <input
                type="number"
                v-model="newProduct.prix"
                id="prix"
                step="0.01"
                required
              />

              <label for="moq">Quantité minimum (MOQ):</label>
              <input type="number" v-model="newProduct.moq" id="moq" required />

              <div class="add-product-buttons">
              <button class="ajout-prod-btn-enregistrer" type="submit">Enregistrer le produit</button>
              <button class="ajout-prod-btn-annuler" type="button" @click="toggleForm">Annuler</button>
            </div>
            </form>
          </div>

          <div class="product-item">
            <div class="leading">
              <FilAriane cat1="Administration" cat2="Produits" />
              <input
                type="text"
                class="searchbar"
                placeholder="Rechercher un produit"
                v-model="search"
                @input="searchProduct"
              />
            </div>

            <div class="titles">
        <span>Liste des produits</span>
        <div class="title-icons">
          <span>Modifier</span>
          <span>Supprimer</span>
        </div>
      </div>
      <div><ButtonComponent text="Ajouter un produit" color="green" @click="toggleForm" /></div>
      <div v-for="(product, index) in resultSearch.length ? resultSearch : productsList" :key="index">

              <div  v-if="editingProduct && editingProduct.id === product.id" class="product-update">
    <!-- Formulaire de modification -->
    <h3>Modifier le produit</h3>
    <form @submit.prevent="saveProduct">
    <div class="form-group">
      <label for="edit-titre">Titre:</label>
      <input type="text" v-model="editingProduct.titre" class="input-field">
    </div>
    
    <div class="form-group">
      <label for="edit-description">Description :</label>
      <textarea v-model="editingProduct.description" class="input-field"></textarea>
    </div>
    
    <div class="form-group">
      <label for="edit-categorie">Catégorie :</label>
      <select v-model="editingProduct.categorieId" class="input-field">
                <option value="" disabled>Sélectionnez une catégorie</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select> 
      
    </div>
    
    <div class="form-group">
      <label for="edit-prix">Prix :</label>
      <input type="number" v-model="editingProduct.prix" step="0.01" class="input-field">
    </div>
    
    <div class="form-group">
      <label for="edit-moq">Quantité minimum (MOQ):</label>
      <input type="number" v-model="editingProduct.moq" class="input-field">
    </div>
    
    <div class="form-actions">
      <button type="submit" class="save-btn">Enregistrer les modifications</button>
      <button type="button" class="cancel-btn" @click="editingProduct = null">Annuler</button>
    </div>
  </form>
  </div>
  <div v-else>
              <div class="infos-actions">
                <div class="product-info">
                  <img :src="require(`@/assets/${product.image}`)" alt="Product Image"
                    class="product-image" />
                  <!-- <p v-else>Aucune image disponible</p> -->
                  <h5>{{ product.titre }}</h5>
                  <p>{{ getFirstSevenWords(product.description) }}</p>
                  <p><strong>Catégorie</strong> : {{ getCategoryName(product.categorieId) }}</p>
                  <p><strong>Prix TTC /u</strong> : {{ product.prix }}€</p>
                  <p><strong>Quantité minimum</strong> : {{ product.moq }}</p>
                </div>
                <div class="product-actions">
                  <svg xmlns="http://www.w3.org/2000/svg" @click="startEditing(product)" height="30px"
                    viewBox="0 -960 960 960" width="30px" fill="green" class="icons-global">
                    <path
                      d="M360-360v-170l382-382q9-9 20-13t22-4q11 0 22.5 4.5T827-911l83 84q9 9 13.5 20t4.5 22q0 11-4.5 22.5T910-742L530-360H360Zm440-355 68-70-84-84-69 69 85 85ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405L300-555v255h252l288-288v408q0 24-18 42t-42 18H180Z" />
                  </svg>
                  <img :src="require('@/assets/icons/deleteicon.svg')" class="delete-icon icons-global" @click="confirmDelete(product)"
                    />
                  </div>

                  <div class="form-group">
                    <label for="edit-description">Description :</label>
                    <textarea
                      v-model="editingProduct.description"
                      class="input-field"
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <label for="edit-categorie">Catégorie :</label>
                    <input
                      type="text"
                      v-model="editingProduct.categorieId"
                      class="input-field"
                    />
                  </div>

                  <div class="form-group">
                    <label for="edit-prix">Prix :</label>
                    <input
                      type="number"
                      v-model="editingProduct.prix"
                      step="0.01"
                      class="input-field"
                    />
                  </div>

                  <div class="form-group">
                    <label for="edit-moq">Quantité minimum (MOQ):</label>
                    <input
                      type="number"
                      v-model="editingProduct.moq"
                      class="input-field"
                    />
                  </div>

                  <div class="form-actions">
                    <button type="submit" class="save-btn">
                      Enregistrer les modifications
                    </button>
                    <button
                      type="button"
                      class="cancel-btn"
                      @click="editingProduct = null"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
              <div v-else>
                <div class="infos-actions">
                  <div class="product-info">
                    <img
                      :src="require(`@/assets/${product.image}`)"
                      alt="Product Image"
                      class="product-image"
                    />
                    <!-- <p v-else>Aucune image disponible</p> -->
                    <h5>{{ product.titre }}</h5>
                    <p>{{ getFirstSevenWords(product.description) }}</p>
                    <p>
                      <strong>Catégorie</strong> : {{ product.categorieId }}
                    </p>
                    <p><strong>Prix TTC /u</strong> : {{ product.prix }}€</p>
                    <p><strong>Quantité minimum</strong> : {{ product.moq }}</p>
                  </div>
                  <div class="product-actions">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      @click="startEditing(product)"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="green"
                      class="icons-global"
                    >
                      <path
                        d="M360-360v-170l382-382q9-9 20-13t22-4q11 0 22.5 4.5T827-911l83 84q9 9 13.5 20t4.5 22q0 11-4.5 22.5T910-742L530-360H360Zm440-355 68-70-84-84-69 69 85 85ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405L300-555v255h252l288-288v408q0 24-18 42t-42 18H180Z"
                      />
                    </svg>
                    <img
                      :src="require('@/assets/icons/deleteicon.svg')"
                      class="delete-icon icons-global"
                      @click="confirmDelete(product)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Div de confirmation de suppression -->
          <div v-if="productToDelete" class="confirmation-dialog">
            <p>
              Êtes-vous sûr de vouloir supprimer
              <strong>{{ productToDelete.titre }}</strong> ?
            </p>

            <div class="delete-buttons">
              <button
                class="bton-delete-modal delete-modal-confirm"
                @click="handleDeleteConfirmation"
              >
                Oui, supprimer
              </button>
              <button
                class="bton-delete-modal delete-modal-cancel"
                @click="cancelDelete"
              >
                Non, annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { mapActions } from 'vuex';
import FilAriane from '@/components/FilAriane.vue';
export default {
  components: {
    HeaderComponent,
    SidePanelAdmin,
    TitleComponent,
    ButtonComponent,
    FilAriane,
  },
  data() {
    return {
      search: '',
      resultSearch: [],
      selectedProduct: null,
      showModal: false,
      showAddForm: false,
      newProduct: {
        titre: '',
        description: '',
        categorieId: '',
        prix: null,
        moq: null,
        image: 'no-image.png',
      },
      showForm: false,
      editingProduct: null,
      productToDelete: null,
      categories: [],
    };
  },
  methods: {
    ...mapActions(['loadProductsList']),

    searchProduct() {
      if (this.search !== '') {
        this.resultSearch = this.productsList.filter((product) => {
          const titleMatches =
            product.titre &&
            product.titre.toLowerCase().includes(this.search.toLowerCase());
          const descriptionMatches =
            product.description &&
            product.description
              .toLowerCase()
              .includes(this.search.toLowerCase());
          const categoryMatches =
            product.categorieId &&
            product.categorieId
              .toString()
              .toLowerCase()
              .includes(this.search.toLowerCase());

          return titleMatches || descriptionMatches || categoryMatches;
        });
      } else {
        this.resultSearch = this.productsList;
      }
      console.log(this.resultSearch);
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
      if (!this.showAddForm) {
        this.newProduct = {
          titre: '',
          description: '',
          categorieId: '',
          prix: null,
          moq: null,
        };
      }
    },

    handleSave(product) {
      if (
        !product.titre ||
        !product.description ||
        product.prix === null ||
        product.moq === null
      ) {
        alert('Veuillez remplir tous les champs obligatoires !');
        return;
      }

      this.productsList.push({ ...product });
      localStorage.setItem('productsList', JSON.stringify(this.productsList));
      this.toggleForm();
    },

    confirmDelete(product) {
      this.productToDelete = product;
    },

    handleDeleteConfirmation() {
      if (this.productToDelete) {
        const productIdToDelete = this.productToDelete.id;

        this.$store.dispatch('deleteProduct', productIdToDelete);

        this.productToDelete = null;
      }
    },

    cancelDelete() {
      this.productToDelete = null;
    },

    getFirstSevenWords(description) {
      if (!description) return '';
      return (
        description.split(' ').slice(0, 7).join(' ') +
        (description.split(' ').length > 7 ? '...' : '')
      );
    },

    startEditing(product) {
      console.log('Modification du produit', product);
      this.editingProduct = { ...product };
    },

    saveProduct() {
      const productIndex = this.productsList.findIndex(
        (p) => p.id === this.editingProduct.id
      );

  startEditing(product) {
    console.log('Modification du produit', product);
    this.editingProduct = { ...product }; 
  },
  
  saveProduct() {
    
    const productIndex = this.productsList.findIndex(p => p.id === this.editingProduct.id);
    
    if (productIndex !== -1) {
      
      this.productsList.splice(productIndex, 1, { ...this.editingProduct });
      
      
      localStorage.setItem('productsList', JSON.stringify(this.productsList));
      
      
      this.editingProduct = null;
    }
  },

  getCategoryName(categorieId) {
    const category = this.categories.find(cat => cat.id === categorieId);
    return category ? category.name : 'Non spécifié'; // Retourne 'Non spécifié' si aucune catégorie n'est trouvée
  },

  },

  computed: {
    productsList() {
      return this.$store.state.productsList;
    },
  },

  mounted() {
    let userLevel;

    const user = localStorage.getItem('user');
    if (user) {
      userLevel = JSON.parse(user).role;
    }

 
  const storedProducts = localStorage.getItem('productsList');
  if (localStorage.getItem('productsList')) {
    const productsList = JSON.parse(storedProducts);
    this.$store.commit('setProductsList', productsList); 
  } else {
    this.$store.commit('setProductsList', []);
  }

  const storedCategories = localStorage.getItem('categories');
  if (storedCategories) {
    this.categories = JSON.parse(storedCategories);
  }

}

    const storedProducts = localStorage.getItem('productsList');
    if (localStorage.getItem('productsList')) {
      const productsList = JSON.parse(storedProducts);
      this.$store.commit('setProductsList', productsList);
    } else {
      this.$store.commit('setProductsList', []);
    }
  },
};
</script>

<style scoped>
.flex-need {
  display: flex;
}


.products-container {
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
}

.product-list {
  display: flex;
  flex-direction: column;
  margin: 40px;
}

.product-item {
  display: flex;
  flex-direction: column;
}

.infos-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image {
  width: 50px;
  height: auto;
}

.product-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px #33333361;
  border-radius: 8px;
  background-color: #fff;
  max-width: 90%;
  width: 100%;
  justify-content: space-between;
}
.button-container {
  margin-top: 20px;
  align-self: center;
}

.leading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.searchbar {
  padding: 10px 10px 10px 20px;
  margin: 30px 10px;
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}

.delete-buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 10px;
}

.bton-delete-modal {
  border: none;
  color: white;
  border-radius: 8px;
}

.delete-modal-confirm {
  background-color: rgb(206, 29, 29);
}

.delete-modal-cancel {
  background-color: rgb(51, 51, 51);
}

button {
  width: auto;

  padding: 10px 20px;
  margin-bottom: 20px;
}

.product-image-container {
  display: flex;
  align-items: center;
}

.titles {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 20px 0;
}

.title-icons {
  display: flex;
  width: 80px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

p,
h5 {
  margin: 0;
}

.product-actions {
  display: flex;
  justify-content: space-between;
}

.product-update {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px #33333361;
  border-radius: 8px;
  background-color: #fff;
  max-width: 90%;
  width: 100%;
  justify-content: space-between;
}

.edit-product-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.edit-product-form h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.input-field {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  max-height: 40px; 
  overflow: hidden;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  max-height: 80px;
  min-height: 40px; 
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.save-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.delete-icon {
  width: 30px;
}

.icons-global {
  cursor: pointer;
  margin: 0 20px;
}

@media screen and (max-width: 480px) {
  .titles{
    display: none;
  }
}

@media screen and (max-width: 950px) {
  .flex-need {
    flex-direction: column;
  }

}
.add-product-form {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.add-product-form h3 {
  margin-bottom: 15px;
}

.add-product-form form {
  display: flex;
  flex-direction: column;
}

.add-product-form label {
  margin-bottom: 5px;
}

.add-product-form input,
.add-product-form textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product-form button {
  padding: 10px 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


.confirmation-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Pour que la boîte de dialogue soit au-dessus du contenu */
}

.ajout-prod-btn-enregistrer{
  background-color: green;
  margin-right: 10px;
}

.ajout-prod-btn-annuler{
  background-color: rgb(51, 51, 51);
}
</style>
