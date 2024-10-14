<template>
    <div>
        <form v-if="!successAccount" @submit.prevent="submitUser">
            <label for="">Raison Sociale</label>
            <input type="text" placeholder="Raison Sociale" v-model="userInfo.raisonSociale"
                :class="{ 'input-error': !verifError.raisonSociale }">
            <p v-if="!verifError.raisonSociale" class="error">Veuillez entrer une raison sociale valide</p>
            <label for="">Numéro de SIRET valide</label>
            <input type="text" placeholder="00000000000000" v-model="userInfo.siret"
                :class="{ 'input-error': !verifError.siret }">
            <p v-if="!verifError.siret" class="error">Veuillez entrer un SIRET valide</p>
            <label for="">Adresse complète</label>
            <input type="text" placeholder="Rue" v-model="userInfo.adresse"
                :class="{ 'input-error': !verifError.adresse }">
            <div class="zip-city">
                <input type="text" placeholder="Code postal" class="zip" v-model="userInfo.codePostal"
                    :class="{ 'input-error': !verifError.codePostal }">
                <input type="text" placeholder="Ville" class="city" v-model="userInfo.ville"
                    :class="{ 'input-error': !verifError.ville }">
            </div>
            <p v-if="!verifError.adresse" class="error">Veuillez entrer une adresse valide</p>
            <p v-if="!verifError.codePostal" class="error">Veuillez entrer un code postal valide</p>
            <p v-if="!verifError.ville" class="error">Veuillez entrer une ville valide</p>
            <label for="">Adresse email</label>
            <input type="email" placeholder="Adresse email" v-model="userInfo.email"
                :class="{ 'input-error': !verifError.email }">
            <p v-if="!verifError.email" class="error">Veuillez entrer un email valide</p>
            <label for="">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" v-model="userInfo.motDePasse"
                :class="{ 'input-error': !verifError.motDePasse }">
            <p class="mdp-info">Au moins 8 caractères : une majuscule, une minuscule, un chiffre et un caractère spécial
            </p>
            <p v-if="!verifError.motDePasse" class="error">Veuillez entrer un mot de passe valide</p>
            <label for="">Confirmer le mot de passe</label>
            <input type="password" placeholder="Mot de passe" v-model="confirmPassword"
                :class="{ 'input-error': !verifError.confirmPassword }">
            <p v-if="!verifError.confirmPassword" class="error">Veuillez entrer le même mot de passe</p>
            <button type="submit">Confirmer</button>
        </form>
        <div v-if="successAccount">
            <p class="success-message">Votre compte est bien créé. Vous recevrez bientôt par mail vos informations de
                connexion.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                id: 3,
                role: 'USER'
            },
            regexRaisonSociale: /^[a-zA-Z0-9\s.,-]{3,}$/,
            regexSiret: /^[0-9]{14}$/,
            regexAdresse: /^[\dA-Za-zÀ-ÖØ-öø-ÿ'-.,\s]+$/,
            regexCodePostal: /[0-9]/,
            regexEmail: /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            regexPassword: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&/])[A-Za-z\d@$!%*#?&/]{8,}$/,
            confirmPassword: "",
            verifError: {
                raisonSociale: true,
                siret: true,
                adresse: true,
                codePostal: true,
                ville: true,
                email: true,
                motDePasse: true,
                confirmPassword: true
            },
            successAccount: false,
        }
    },
    methods: {
        newId() {
            if (localStorage.getItem("user_list")) {
                let userList = JSON.parse(localStorage.getItem("user_list"));
                let index = userList.length - 1;
                this.userInfo.id = userList[index].id +1;
                console.log(userList);
                
                console.log(this.userInfo.id);
                return this.userInfo.id
            } else {
                console.log(this.userInfo.id);
                return this.userInfo.id
                
                
            }
        },
        submitUser() {
            if (this.regexRaisonSociale.test(this.userInfo.raisonSociale) && this.userInfo.raisonSociale) {
                this.verifError.raisonSociale = true
            } else {
                this.verifError.raisonSociale = false;
            }
            if (this.regexSiret.test(this.userInfo.siret)) {
                this.verifError.siret = true
            } else {
                this.verifError.siret = false
            }
            if (this.regexAdresse.test(this.userInfo.adresse) && this.userInfo.adresse) {
                this.verifError.adresse = true
            } else {
                this.verifError.adresse = false
            }
            if (this.regexCodePostal.test(this.userInfo.codePostal)) {
                this.verifError.codePostal = true
            } else {
                this.verifError.codePostal = false
            }
            if (this.regexAdresse.test(this.userInfo.ville) && this.userInfo.ville) {
                this.verifError.ville = true
            } else {
                this.verifError.ville = false
            }
            if (this.regexEmail.test(this.userInfo.email)) {
                this.verifError.email = true
            } else {
                this.verifError.email = false
            }
            if (this.regexPassword.test(this.userInfo.motDePasse)) {
                this.verifError.motDePasse = true
            } else {
                this.verifError.motDePasse = false
            }
            if (this.userInfo.motDePasse === this.confirmPassword) {
                this.verifError.confirmPassword = true
            } else {
                this.verifError.confirmPassword = false
            }
            let hasFalseValue = Object.values(this.verifError).some(value => value === false);
            if (hasFalseValue) {
                return
            } else {
                this.newId();
                this.successAccount = true;
                let userDataBase = [];
                if(localStorage.getItem("user_list")){
                    userDataBase = JSON.parse(localStorage.getItem("user_list"));
                } else{
                    userDataBase = this.$store.state.userDatabase;
                }
                userDataBase.push(this.userInfo);
                localStorage.setItem("user_list", JSON.stringify(userDataBase));
            }
        }
    }
}

</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

button {
    border: none;
    padding: 10px 20px;
    color: #f1f1f1;
    background-color: #CA8465;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
}

button:hover {
    background-color: #592B02;
}

button:active {
    box-shadow: 0px 0px 10px #57575770;
}

input {
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #D9B596;
    width: 250px;
    padding: 5px 10px;
}

input:focus {
    outline: 1px solid #CA8465;
}

.success-message {
    text-align: center;
}

.zip-city {
    display: flex;
    gap: 10px;
}

.zip-city .zip {
    width: 100px;
}

.zip-city .city {
    width: 140px;
}

.mdp-info {
    font-size: 0.7rem;
    color: #592B02;
}

.error {
    font-size: 0.8rem;
    color: #bf0e0e;
    margin: 0;
}

.input-error {
    border: 1px solid #bf0e0e;
}
</style>