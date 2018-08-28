<template>
  <!-- s 我的 -->
  <section class="friend">
    <TabComponent></TabComponent>
  </section>
  <!-- e 我的 -->
</template>

<script>
// include dependence
import TabComponent from '../../module/tab/tab.vue'
export default {
  name: 'FriendComponent',
  data () {
    return {
      // start param
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
@import "./friend.scss";
</style>
