<template>
  <!-- s undefined -->
  <section class="find">
    <TabComponent></TabComponent>
  </section>
  <!-- s  -->
</template>

<script>
// include dependence
import TabComponent from '../../module/tab/tab.vue'
export default {
  name: 'FindComponent',
  data () {
    return {}
  },
  components: {
    // include components
    TabComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./find.scss";
</style>
