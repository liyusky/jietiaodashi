<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Chat from './class/Chat.class.js'
export default {
  name: 'App',
  watch: {
    '$store.state.chat': function (chat) {
      Chat.init()
    },
    '$store.state.sdk': function (sdk) {
      let chat = this.$store.state.chat
      if (sdk && chat !== null) Chat.init()
    }
  }
}
</script>

<style>

</style>
