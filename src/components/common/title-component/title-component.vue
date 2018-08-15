<template>
  <!-- s  -->
  <section class="TitleComponent">
    <div class="TitleComponent-left">
      <div class="left-content" @click="back">
        <i class="iconfont icon-arrow-left"></i>
        <span v-if="Title.leftText">{{Title.leftText}}</span>
      </div>
    </div>
    <div class="TitleComponent-content">{{Title.contentText}}</div>
    <div class="TitleComponent-right">
      <div class="right-content" @click="otherBtn">
        <span v-if="Title.rightText">{{Title.rightText}}</span>
        <i class="iconfont" :class="Title.icon" v-if="Title.icon"></i>
        <svg class="icon" v-if="Title.svg" aria-hidden="true">
          <use xlink:href="#icon-gerenziliao"></use>
        </svg>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
  // Title: {
  //   contentText: '', 中间内容
  //   leftText: '', 左边箭头后文字
  //   rightText: '', 右边文字内容
  //   icon: '', 右边icon
  //   svg: '', 右边svg
  // },
export default {
  name: 'TitleComponentComponent',
  props: ['Title'],
  data() {
    return {};
  },
  methods: {
    otherBtn() {
      this.$emit('OTHER_EVENT');
    },
    back() {
      this.$emit('BACK_EVENT');
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./title-component.scss";
</style>
