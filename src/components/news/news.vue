<template>
  <!-- s 消息 -->
  <section class="news bg-write">
    <TitleComponent :title="title"></TitleComponent>
    <div class="news-tip padding-left-30">
      <div class="tip-content border-bottom-1">
        <div class="content-sign active-sign border-radius-12 color-white">
          <i class="iconfont icon-chuyin font-51"></i>
          <div class="sign-badge font-24 border-circle">1</div>
        </div>
        <div class="content-message padding-horizontal-30">
          <div class="content-title">
            <p class="font-33 color-black">精选活动</p>
            <p class="font-24 color-light-grey">11:15</p>
          </div>
          <div class="font-27 color-light-grey">定期将售馨，用加息卡预期年化收益达7%！</div>
        </div>
      </div>
      <div class="tip-content border-bottom-1">
        <div class="content-sign system-sign border-radius-12 color-white">
          <i class="iconfont icon-chuyin font-51"></i>
          <div class="sign-badge font-24 border-circle">1</div>
        </div>
        <div class="content-message padding-horizontal-30">
          <div class="content-title">
            <p class="font-33 color-black">系统消息</p>
            <p class="font-24 color-light-grey">11:15</p>
          </div>
          <div class="font-27 color-light-grey">您于2017-10-29 15：:33在其他客户端登录</div>
        </div>
      </div>
    </div>
  </section>
  <!-- e 消息 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'NewsComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '消息'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./news.scss";
</style>
