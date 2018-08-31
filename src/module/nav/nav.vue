<template>
  <!-- s  -->
  <ul class="nav">
    <li class="nav-item" :class="selected == item ? nav.active : ''" v-for="(item, index) in nav.content" :key="index">{{item}}</li>
  </ul>
  <!-- e  -->
</template>

<script>
export default {
  name: 'NavComponent',
  props: ['nav'],
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./nav.scss";
</style>
