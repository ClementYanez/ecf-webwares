<template>
  <span> {{ filAriane }}</span>
</template>

<script>
export default {
  name: 'FilAriane',
  data() {
    return {
      filAriane: '',
    };
  },
  props: {
    cat1: String,
    cat2: String,
    cat3: String,
  },
  mounted() {
    if (this.cat3) {
      this.filAriane =
        'Accueil > ' + this.cat1 + ' / ' + this.cat2 + ' / ' + this.cat3;
    } else if (this.cat2) {
      this.filAriane = 'Accueil / ' + this.cat1 + ' / ' + this.cat2;
    } else {
      this.filAriane = 'Accueil / ' + this.cat1;
    }
    // this.filAriane =
    //   'Accueil > ' +
    //   this.cat1 +
    //   ' > ' +
    //   this.cat2 +
    //   ' > ' +
    //   this.cat3 +
    //   ' > ' +
    //   this.cat4;
  },
};
</script>

<style lang="scss" scoped></style>
