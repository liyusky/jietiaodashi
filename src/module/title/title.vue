<template>
  <!-- s  -->
  <section class="title">
    <div class="title-left">
      <div class="left-content" @click="back">
        <i class="iconfont icon-cong"></i>
        <span v-if="title.leftText">{{title.leftText}}</span>
      </div>
    </div>
    <div class="title-content">{{title.contentText}}</div>
    <div class="title-right">
      <div class="right-content" @click="otherBtn">
        <span v-if="title.rightText">{{title.rightText}}</span>
        <i class="iconfont" :class="title.icon" v-if="title.icon"></i>
        <svg class="icon" v-if="title.svg" aria-hidden="true">
          <use :xlink:href="title.svg"></use>
        </svg>
      </div>
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
