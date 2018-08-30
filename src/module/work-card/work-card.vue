<template>
  <!-- s  -->
  <section class="work-card padding-top-21">
    <img class="card-portrait" :src="workCard.portrait">
    <div class="color-black font-30">{{workCard.name}}</div>
    <div class="color-deep-black font-72 padding-bottom-39">{{workCard.money}}</div>
    <div class="color-light-grey font-24 padding-bottom-39" v-if="workCard.tip">{{workCard.tip}}</div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'WorkCardComponent',
  props: ['workCard']
}
</script>

<style lang="sass" scoped>
@import "./work-card.scss";
</style>
