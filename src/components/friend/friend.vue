<template>
  <!-- s 好友 -->
  <section class="friend">
    <TabComponent></TabComponent>
  </section>
  <!-- e 好友 -->
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
