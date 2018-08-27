<template>
  <!-- s  -->
  <section class="title color-black">
    <div class="title-left" @click="back">
      <i class="iconfont icon-cong font-39"></i>
      <span class="font-30" v-if="title.leftText">{{title.leftText}}</span>
    </div>
    <div class="title-content font-36">{{title.contentText}}</div>
    <div class="title-right">
      <span class="font-30" v-if="title.rightText">{{title.rightText}}</span>
      <i class="iconfont font-39" :class="title.icon" v-if="title.icon"></i>
      <svg class="icon" v-if="title.svg" aria-hidden="true">
        <use :xlink:href="title.svg"></use>
      </svg>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'titleComponent',
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    otherBtn () {
      this.$emit('OTHER_EVENT')
    },
    back () {
      this.$emit('BACK_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./title.scss";
</style>
