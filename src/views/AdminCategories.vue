<template>
    <HeaderComponent />
    <TitleComponent title="Gestion des catégories" />
    <SidePanelAdmin />
    <div>

    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import TitleComponent from '@/components/TitleComponent.vue';
export default {
    components: {
        HeaderComponent,
        SidePanelAdmin,
        TitleComponent
    }
}
</script>

<style scoped></style>