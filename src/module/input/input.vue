<template>
  <!-- s  -->
  <section class="input">
    <div class="input-default">
      <input v-model="inputText" type="text" placeholder="输入内容">
      <i class="iconfont" :class="input.icon" v-show="input.icon"></i>
    </div>
    <div class="input-text">
      <span>手机号</span>
      <input type="text" placeholder="输入手机号">
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'InputComponent',
  data() {
    return {
      inputText: '',
    };
  },
};
</script>

<style lang="sass" scoped>
@import "./input.scss";
</style>
