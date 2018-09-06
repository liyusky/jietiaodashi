<template>
  <!-- s  -->
  <section class="home">
    <router-view></router-view>
    <TabComponent :path="$route.path"></TabComponent>
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
