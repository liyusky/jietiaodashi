<template>
  <!-- s  home-->
  <section class="home">
    <router-view></router-view>
    <TabComponent :path="$route.path"></TabComponent>
  </section>
  <!-- e  home-->
</template>

<script>
// include dependence
import TabComponent from '../../common/tab/tab.vue'
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
    TabComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./home.scss";
</style>
