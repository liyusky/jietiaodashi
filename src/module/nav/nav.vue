<template>
  <!-- s  -->
  <ul class="nav">
    <li class="nav-item" :class="selected === item ? nav.active : ''" v-for="(item, index) in nav.content" :key="index" @click="select(index, item)">{{item}}</li>
  </ul>
  <!-- e  -->
</template>

<script>
export default {
  name: 'NavComponent',
  props: ['nav'],
  data () {
    return {
      selected: this.nav.content[0]
    }
  },
  methods: {
    select (index, item) {
      this.selected = item
      this.$emit('SELECTED_EVENT', index)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./nav.scss";
</style>
