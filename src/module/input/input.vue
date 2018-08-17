<template>
  <!-- s  -->
  <section class="input">
    <div class="input-default" v-if="input.type === 'default'">
      <input v-model="inputText" type="text" :placeholder="text.placeholder">
      <i class="iconfont" :class="input.icon" v-show="input.icon"></i>
    </div>
    <div class="input-text" v-if="input.type === 'text'">
      <span>手机号</span>
      <input type="text" :placeholder="text.placeholder">
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'InputComponent',
  props: ['input'],
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
