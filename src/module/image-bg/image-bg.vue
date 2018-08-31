<template>
  <!-- s  -->
  <section class="image-bg">
    <img :src="image">
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'ImageBgComponent',
  props: ['imageBg'],
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./image-bg.scss";
</style>
