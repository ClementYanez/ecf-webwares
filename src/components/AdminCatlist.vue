<template>
  <div class="cont-list">
    <div class="add-cat">
      <ButtonComponent
        text="Ajouter une catégorie"
        color="green"
        @click="addCat = !addCat"
      />
      <div v-show="addCat" class="add">
        <input
          type="text"
          placeholder="Nom de la nouvelle catégorie"
          v-model="newCat.name"
        />
        <ButtonComponent text="Ajouter" color="green" @click="addCategory" />
      </div>
    </div>
    <div class="cat-list">
      <h5 class="cat">Catégories</h5>
      <div class="col-end">
        <h5 class="modifier">Modifier</h5>
        <h5 class="supprimer">Supprimer</h5>
      </div>
    </div>
    <div
      v-show="this.adminSearchResult.length !== 0"
      class="category"
      v-for="category in this.adminSearchResult"
      :key="category.id"
    >
      <span
        ><h6>{{ category.name }}</h6>
      </span>
      <div class="svgs">
        <span class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="green"
            class="icon"
            @click="editCat(category)"
          >
            <path
              d="M360-360v-170l382-382q9-9 20-13t22-4q11 0 22.5 4.5T827-911l83 84q9 9 13.5 20t4.5 22q0 11-4.5 22.5T910-742L530-360H360Zm440-355 68-70-84-84-69 69 85 85ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405L300-555v255h252l288-288v408q0 24-18 42t-42 18H180Z"
            />
          </svg>
        </span>
        <span class="svg2">
          <svg
            fill="#b80a0a"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="delete-alt"
            stroke="#b80a0a"
            @click="deleteCategory(category.id)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z" />
              <path
                d="M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM11,17a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
    <!-- <div class="no-result" v-show="this.adminSearchResult.length === 0">
      Aucune catégories trouvée
    </div> -->
    <div class="edit" v-if="edit">
      <h5>Edition de la catégorie</h5>
      <input
        type="text"
        placeholder="Nom de la nouvelle catégorie"
        v-model="editingName"
      />
      <div class="cont-btn">
        <ButtonComponent text="Confirmer" color="green" @click="validate" />
        <ButtonComponent text="Annuler" color="red" @click="edit = !edit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';
export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      localCategories: [],
      edit: false,
      editing: '',
      editingId: '',
      editingName: '',
      addCat: false,
      newCat: {},
      lastId: 0,
    };
  },
  methods: {
    editCat(category) {
      this.edit = !this.edit;
      this.editing = category;
      this.editingName = category.name;
      this.editingId = category.id;
    },
    validate() {
      this.localCategories.forEach((category) => {
        if (category.id === this.editingId) {
          category.name = this.editingName;
        }
      });
      this.edit = !this.edit;
      this.$store.commit('setAdminSearchResult', [...this.localCategories]);
      localStorage.setItem(
        'categories',
        JSON.stringify([...this.localCategories])
      );
    },
    addCategory() {
      this.lastId++;
      this.newCat.id = this.lastId;
      this.localCategories.push(this.newCat);
      this.newCat = {};
      this.addCat = !this.addCat;
      localStorage.setItem(
        'categories',
        JSON.stringify([...this.localCategories])
      );
      this.$store.commit('setAdminSearchResult', [...this.localCategories]);
    },
    deleteCategory(id) {
      this.localCategories.forEach((category) => {
        if (category.id === id) {
          const index = this.localCategories.indexOf(category);
          this.localCategories.splice(index, 1);
        }
      });
      localStorage.setItem('categories', JSON.stringify(this.localCategories));
      this.$store.commit('setAdminSearchResult', this.localCategories);
    },
    ...mapMutations(['setAdminSearchResult', 'setAdminSearchQuery']),
  },
  computed: {
    ...mapState(['adminSearchResult', 'categories']),
  },
  mounted() {
    // localStorage.setItem('categories', JSON.stringify(this.categories));
    if (localStorage.getItem('categories')) {
      this.localCategories = JSON.parse(localStorage.getItem('categories'));
    } else {
      this.localCategories = this.categories;
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
    // localStorage.setItem('categories', JSON.stringify(this.categories));
    // let categories = JSON.parse(localStorage.getItem('categories'));
    // this.$store.commit('updateCategories', categories);
    localStorage.setItem('categories', JSON.stringify(this.localCategories));
    this.localCategories.forEach((category) => {
      this.lastId = category.id;
    });
  },
};
</script>

<style scoped>
.add-cat {
  margin-bottom: 20px;
}
.add {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 90%;
  box-shadow: 0px 0px 10px #8a8a8a7c;
  padding: 10px;
  border-radius: 10px;
}
.cont-list {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}
.cat-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 90%;
}
.cat-list:nth-child(2) {
  padding-left: 20px;
}
.col-end {
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 50px;
}
svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 90%;
  box-shadow: 0px 0px 10px #8a8a8a7c;
  border-radius: 5px;
  padding: 8px;
}
.svgs {
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 50px;
}
.category h6 {
  /* width: 300px; */
  margin-left: 20px;
  height: 100%;
  margin-top: 5px;
}
.svg {
  /* width: 300px; */
  /* text-align: center; */
  padding-right: 40px;
}
.svg2 {
  /* width: 300px; */
  /* text-align: end; */
  padding-right: 40px;
}
.edit {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #8a8a8a7c;
}
.cont-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
}
input {
  padding: 10px 10px 10px 20px;
  margin: 10px;
  width: 300px;
  height: 30px;
  border: 1px solid #d9b596;
  border-radius: 5px;
  font-size: 1rem;
}
.no-result {
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
}
</style>
