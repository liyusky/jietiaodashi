<template>
  <!-- s  -->
  <section class="home">
    <router-view></router-view>
    <TabComponent></TabComponent>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import TabComponent from '../../module/tab/tab.vue'
export default {
  name: 'HomeComponent',
  data () {
    return {
      // start params
      'tab': ''
      // end params
    }
  },
  components: {
    TabComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./home.scss";
</style>
