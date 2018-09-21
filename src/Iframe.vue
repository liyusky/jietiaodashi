<template>
  <div id="iframe">
    <div class="content"></div>
  </div>
</template>

<script>
import 'vuex'
export default {
  name: 'Iframe',
  data () {
    return {
      // show: false,
      // tip: {
      //   type: 'center',
      //   content: ''
      // },
      // button: {
      //   default: [{
      //     type: 'full',
      //     text: '确认'
      //   }]
      // }
    }
  },
  watch: {
    '$store.state.iframe': function (content) {
      document.getElementById('content').innerHTML = content
    }
  },
  components: {
    // include components
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
@import "./iframe.scss";
</style>
