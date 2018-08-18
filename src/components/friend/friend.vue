<template>
  <!-- s  -->
  <section class="friend"></section>
  <!-- e  -->
</template>

<script>
// include dependence
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'FriendComponent',
  data () {
    return {
      // start param
      // end params
    }
  },
  components: {
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./friend.scss";
</style>
