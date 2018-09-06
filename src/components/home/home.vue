<template>
  <!-- s  -->
  <section class="home">
    <router-view></router-view>

  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'HomeComponent',
  data () {
    return {
      // start params
      // end params
    }
  },
  components: {
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./home.scss";
</style>
