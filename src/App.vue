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
      Chat.init(chat.id, chat.token)
    },
    '$store.state.sdk': function (sdk) {
      let chat = this.$store.state.chat
      if (sdk && chat !== null) Chat.init(chat.id, chat.token)
    }
  }
}
</script>

<style>

</style>
