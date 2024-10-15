<template>
    <div class="hero">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'TitleComponent',
    props: {
        title: String
    }
};
</script>

<style scoped>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    text-align: center;
    color: white;
    background-image: url('../assets/heropage.png');
    background-position: 100% 80%;
    background-size: cover;
    height: 200px;
    position: relative;
    top: 100px;
}

h1 {
    font-size: calc(2vw + 20px);
    text-shadow: 0px 0px 10px #333;
}
</style>