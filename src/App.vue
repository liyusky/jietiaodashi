<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapMutations(['saveRoute'])
  },
  watch: {
    '$route' (to, from) {
      this.saveRoute(from.path)
    }
  }
}
</script>

<style>

</style>
