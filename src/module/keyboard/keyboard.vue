<template>
  <!-- s  -->
  <section class="keyboard">
    <li class="keyboard-item" v-for="(number, index) in 9" :key="index" @click="press(number)">{{number}}</li>
    <li class="keyboard-item"></li>
    <li class="keyboard-item" @click="press(0)">0</li>
    <li class="keyboard-item" @click="remove">
      <i class="iconfont icon-huitui"></i>
    </li>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'KeyboardComponent',
  methods: {
    press (number) {
      this.$emit('PRESS_EVENT', number)
    },
    remove () {
      this.$emit('REMOVE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./keyboard.scss";
</style>
