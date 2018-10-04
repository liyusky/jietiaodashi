<template>
  <!-- s  -->
  <section class="more bg-white">
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="addBlackList">
      <i class="iconfont icon-heimingdan font-54"></i>
      <span class="font-30">加入黑名单</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="deleteFriedn">
      <i class="iconfont icon-shanchuhaoyou font-54"></i>
      <span class="font-30">删除好友</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="shareCard">
      <i class="iconfont icon-fenlei font-54"></i>
      <span class="font-30">分享名片</span>
    </div>
    <div class="more-item padding-horizontal-30 color-deep-grey" @click="complaint">
      <i class="iconfont icon-jinggaozhuyi font-54"></i>
      <span class="font-30">投诉他</span>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'MoreComponent',
  data () {
    return {
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    addBlackList () {},
    deleteFriedn () {},
    shareCard () {},
    complaint () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./more.scss";
</style>
