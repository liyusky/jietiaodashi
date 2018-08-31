<template>
  <!-- s  -->
  <section :class="board ? 'board-' + board : 'board-default'">
    <slot></slot>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'BoardComponent',
  props: ['board']
}
</script>

<style lang="sass" scoped>
@import "./board.scss";
</style>
