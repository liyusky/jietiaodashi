<template>
  <!-- s  -->
  <section class="more bg-white">
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="addFriend('add-friend')">
      <i class="iconfont icon-jiahaoyou font-54"></i>
      <span class="font-30">添加好友</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="relationTel">
      <i class="iconfont icon-dianhua font-54"></i>
      <span class="font-30">联系电话</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="onlineService">
      <i class="iconfont icon-kefu1 font-54"></i>
      <span class="font-30">在线客服</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="weChatAccount">
      <i class="iconfont icon-fenlei font-54"></i>
      <span class="font-30">微信公众号</span>
    </div>
    <div class="more-item padding-horizontal-30 border-bottom-1 color-deep-grey" @click="shareFriend">
      <i class="iconfont icon-fenlei font-54"></i>
      <span class="font-30">分享好友</span>
    </div>
    <div class="more-item padding-horizontal-30 color-deep-grey" @click="wannaComplaint('complain')">
      <i class="iconfont icon-jinggaozhuyi font-54"></i>
      <span class="font-30">我要投诉</span>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import Router from '../../../../class/Router.class.js'
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
    addFriend (page) {
      Router.push(page)
    },
    relationTel () {},
    onlineService () {},
    weChatAccount () {},
    shareFriend () {},
    wannaComplaint (page) {
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./more.scss";
</style>
