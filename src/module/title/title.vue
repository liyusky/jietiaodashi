<template>
  <!-- s  -->
  <section class="title color-black">
    <div class="title-left" @click="back">
      <i class="iconfont icon-cong font-39"></i>
      <span class="font-30" v-if="title.leftText">{{title.leftText}}</span>
    </div>
    <div class="title-content font-36">{{title.contentText}}</div>
    <div class="title-right" @click="otherBtn">
      <span class="font-30" v-if="title.rightText">{{title.rightText}}</span>
      <i class="iconfont font-39" :class="['icon-' + title.icon]" v-if="title.icon"></i>
      <svg class="icon" v-if="title.svg" aria-hidden="true">
        <use :xlink:href="title.svg"></use>
      </svg>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import Router from '../../class/Router.class.js'
export default {
  name: 'titleComponent',
  props: ['title'],
  methods: {
    otherBtn () {
      this.$emit('OTHER_EVENT')
    },
    back () {
      Router.back()
      // this.$emit('BACK_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./title.scss";
</style>
