<template>
    <div>
        <form action="">
            <label for="">Raison Sociale</label>
            <input type="text" placeholder="Raison Sociale">
            <label for="">Numéro de SIRET valide</label>
            <input type="text" placeholder="00000000000000">
            <label for="">Adresse complète</label>
            <input type="text" placeholder="Rue">
            <div class="zip-city">
                <input type="text" placeholder="Code postal" class="zip">
                <input type="text" placeholder="Ville" class="city">
            </div>
            <label for="">Adresse email</label>
            <input type="email" placeholder="Adresse email">
            <label for="">Mot de passe</label>
            <input type="password" placeholder="Mot de passe">
            <p class="mdp-info">Au moins une majuscule et une minuscule</p>
            <label for="">Confirmer le mot de passe</label>
            <input type="password" placeholder="Mot de passe">
            <button>Confirmer</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        userInfo: Object,
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
</style>