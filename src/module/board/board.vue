<template>
  <!-- s  -->
  <section class="board">
    <slot></slot>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'BoardComponent',
}
</script>

<style lang="sass" scoped>
@import "./board.scss";
</style>
