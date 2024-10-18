<template>
  <HeaderComponent />
  <TitleComponent title="Gestion des Utilisateurs" />
  <div class="contain">
    <div class="side-panel">
      <SidePanelAdmin />
    </div>
    <div class="list">
      <div class="leading">
        <FilAriane cat1="Gestion des utilisateurs" />
        <input type="text" class="searchbar" placeholder="Rechercher un utilisateur" v-model="search"
          @input="searchUser">
      </div>
      <div class="titles">
        <span>Utilisateurs</span>
        <div class="title-icons">
          <span>Modifier</span>
          <span>Supprimer</span>
        </div>
      </div>
      <div>
        <div v-for="(user, index) in resultSearch" :key="index">
          <div v-if="!deleteModal[index] && !modal[index] && !edit[index]" class="contain-line">
            <div class="contain-global">
              <h5>{{ user.raisonSociale }}</h5>
              <span><strong>SIRET : </strong>{{ user.siret }}</span>
              <span><strong>Adresse : </strong>{{ user.adresse }}
                {{ user.codePostal }} {{ user.ville }}</span>
              <span><strong>Email : </strong>{{ user.email }}</span>
              <div>
                <div class="role" @click="dropDownBoolean(index)">
                  <span><strong>Rôle : </strong>{{ user.role }}</span>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                        fill="#268000" />
                    </g>
                  </svg>
                  <div v-if="dropDownOpen[index]" class="dropdown-user">
                    <span @click="changeUser(index, user)">USER</span>
                    <span @click="changeAdmin(index)">ADMIN</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="contain-line">
              <div class="img" @click="editUserModal(index)">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                  fill="#268000">
                  <path
                    d="M360-360v-170l382-382q9-9 20-13t22-4q11 0 22.5 4.5T827-911l83 84q9 9 13.5 20t4.5 22q0 11-4.5 22.5T910-742L530-360H360Zm440-355 68-70-84-84-69 69 85 85ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405L300-555v255h252l288-288v408q0 24-18 42t-42 18H180Z" />
                </svg>
              </div>
              <div class="img">
                <img :src="require('@/assets/icons/deleteicon.svg')" class="icon" @click="deleteUserModal(index)" />
              </div>
            </div>
          </div>
          <div v-if="notAdmin[index]" class="alert">
            <p>
              Vous ne pouvez pas passer {{ user.raisonSociale }} en tant
              qu'utilisateur. Il doit y avoir au moins au administrateur.
            </p>
          </div>
          <div v-if="deleteModal[index]" class="confirm">
            <p>Êtes-vous sûr de vouloir supprimer {{ user.raisonSociale }} ?</p>
            <div class="buttons">
              <ButtonComponent text="Oui, supprimer" color="#CE1D1D" textColor="#f1f1f1" @click="deleteUser(index)" />
              <ButtonComponent text="Non, annuler" color="#333333" textColor="#f1f1f1"
                @click="deleteUserModal(index)" />
            </div>
          </div>
          <div v-if="!modal[index] && edit[index]">
            <div class="edit">
              <div class="edit-input">
                <p>Raison Sociale</p>
                <input type="text" v-model="user.raisonSociale" class="input" />
              </div>
              <div class="edit-input">
                <p>SIRET</p>
                <input type="text" v-model="user.siret" class="input" />
              </div>
              <div class="edit-input">
                <p>Email</p>
                <input type="text" v-model="user.email" class="input" />
              </div>
              <div class="edit-input">
                <p>Adresse</p>
                <input type="text" v-model="user.adresse" class="input-adresse" />
              </div>
              <div class="edit-input">
                <p>Code Postal</p>
                <input type="text" v-model="user.codePostal" class="input" />
              </div>
              <div class="edit-input">
                <p>Ville</p>
                <input type="text" v-model="user.ville" class="input" />
              </div>
              <div class="buttons">
                <ButtonComponent text="Modifier" color="#268000" textColor="#f1f1f1" @click="openModal(index)" />
                <ButtonComponent text="Non, annuler" color="#333333" textColor="#f1f1f1" @click="cancelEdit(index)" />
              </div>
            </div>
          </div>
          <div v-if="modal[index] && !edit[index]">
            <div class="confirm">
              <p>Êtes-vous sûr de vouloir modifier {{ user.raisonSociale }} ?</p>
              <div class="buttons">
                <ButtonComponent text="Oui, modifier" color="#268000" textColor="#f1f1f1" @click="editUser(index)" />
                <ButtonComponent text="Non, annuler" color="#333333" textColor="#f1f1f1" @click="cancelEdit(index)" />
              </div>
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
      userList: [],
      userListLocalStorage: [],
      dropDownOpen: [false],
      modal: [false],
      edit: [false],
      deleteModal: [false],
      notAdmin: [false],
      search: "",
      resultSearch: []
    };
  },
  methods: {
    searchUser() {
      if (this.search != "") {
        this.resultSearch = this.userList.filter((searching) => {
          return (
            searching.raisonSociale
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            searching.siret
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            searching.email
              .toLowerCase()
              .includes(this.search.toLowerCase())
          );
        });
      } else {
        this.resultSearch = this.userList;
      }
      console.log(this.resultSearch);

    },
    dropDownBoolean(i) {
      if (this.dropDownOpen[i] === false || !this.dropDownOpen[i]) {
        return (this.dropDownOpen[i] = true);
      } else {
        return (this.dropDownOpen[i] = false);
      }
    },
    openModal(i) {
      this.edit[i] = false;
      if (this.modal[i] === false || !this.modal[i]) {
        return (this.modal[i] = true);
      } else {
        return (this.modal[i] = false);
      }
    },
    editUserModal(i) {
      console.log(this.edit);
      if (this.edit[i] === false || !this.edit[i]) {
        return (this.edit[i] = true);
      } else {
        return (this.edit[i] = false);
      }
    },
    deleteUserModal(i) {
      if (this.deleteModal[i] === false || !this.deleteModal[i]) {
        return (this.deleteModal[i] = true);
      } else {
        return (this.deleteModal[i] = false);
      }
    },
    changeAdmin(i) {
      this.notAdmin[i] = false;
      this.resultSearch[i].role = 'ADMIN';
      localStorage.setItem('user_list', JSON.stringify(this.userList));
      this.$store.dispatch('loadUserDatabase');
    },
    changeUser(i, user) {
      let admin = this.userList.filter((user) => user.role === 'ADMIN');
      if (admin.length > 1 || user.role === 'USER') {
        this.notAdmin[i] = false;
        this.resultSearch[i].role = 'USER';
        localStorage.setItem('user_list', JSON.stringify(this.userList));
        this.$store.dispatch('loadUserDatabase');
      } else {
        this.notAdmin[i] = true;
        setTimeout(() => {
          this.notAdmin[i] = false;
        }, 3000);
      }
    },
    deleteUser(i) {
      this.userList.splice(i, 1);
      localStorage.setItem('user_list', JSON.stringify(this.userList));
      this.$store.dispatch('loadUserDatabase');
      this.deleteModal[i] = false;
    },
    editUser(i) {
      this.search = "";
      this.resultSearch = this.userList;
      localStorage.setItem('user_list', JSON.stringify(this.userList));
      this.$store.dispatch('loadUserDatabase');
      return (this.modal[i] = false);
    },
    cancelEdit(i) {
      this.userListLocalStorage =
        JSON.parse(localStorage.getItem('user_list')) ||
        this.$store.state.userDatabase;
      this.userList = this.userListLocalStorage;
      this.modal[i] = false;
      this.edit[i] = false;
    },
  },
  mounted() {
    this.userList =
      JSON.parse(localStorage.getItem('user_list')) ||
      this.$store.state.userDatabase;
    localStorage.setItem('user_list', JSON.stringify(this.userList));
    this.resultSearch = this.userList;
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

.contain {
  display: flex;
  min-height: 100vh;
}

.side-panel {
  display: flex;
}

.leading {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.searchbar:focus {
  outline: 1px solid #ca8465;
}

.list {
  width: 100vw;
  padding: 20px 100px;
  margin-bottom: 40px;
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

.icon-arrow {
  width: 20px;
}

.role {
  position: relative;
  cursor: pointer;
}

.dropdown-user {
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
  background-color: #592b02;
  color: #f1f1f1;
}

.icon {
  width: 40px;
}

.contain-line {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.contain-global {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 10px 20px;
  margin: 5px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #33333348;
  width: 100%;
  flex-wrap: wrap;
}

.edit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #592b027f;
}

.edit-input {
  width: 25%;
  margin: 10px 20px;
}

.edit input {
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #ca8465;
  width: 100%;
}

.edit input:focus {
  outline: 1px solid #592b02;
}

.confirm {
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #592b027f;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 10px;
}

.alert {
  color: #ce1d1d;
  font-weight: 600;
  margin: 10px 0;
}

@media screen and (max-width: 950px) {
  .contain {
    flex-direction: column;
  }

  .list {
    padding: 20px 60px;
  }
}

@media screen and (max-width: 645px) {

  .contain,
  .leading {
    flex-direction: column;
  }

  .img {
    width: auto;
    padding: 0 5px;
  }

  .list {
    padding: 20px 40px;
  }

}

@media screen and (max-width: 460px) {
  .list {
    padding: 20px 10px;
  }
}
</style>
