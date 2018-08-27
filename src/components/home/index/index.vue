<template>
  <!-- s  首页-->
  <section class="index">
    <header class="index-header">
      <div class="header-bg">
        <img src="https://api.vtrois.com/image/750x405">
      </div>
      <div class="header-list">
        <div class="list-item">
          <i class="iconfont icon-cong"></i>
          <p>消息</p>
        </div>
        <div class="list-item">
          <i class="iconfont icon-cong"></i>
          <p>消息</p>
        </div>
      </div>
    </header>
    <nav class="index-nav">
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>找出借人</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>贷款超市</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>借条中心</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>失信查询</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>仲裁进度</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>在线客服</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>我要投诉</p>
      </div>
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>催收保障</p>
      </div>
    </nav>
    <div class="index-message">
      <div class="message-left">
        <img src="https://api.vtrois.com/image/123x30">
      </div>
      <div class="message-right">
        <p>155****4568，张**成功借款1500元</p>
      </div>
    </div>
    <div class="index-activity">
      <div class="activity-find">
        <img src="https://api.vtrois.com/image/750x180">
      </div>
      <div class="activity-invite">
        <img src="https://api.vtrois.com/image/750x160">
      </div>
    </div>
  </section>
  <!-- e  首页-->
</template>

<script>
// import ModalsComponent from '../../../module/modals/modals.vue'
// import InputsComponent from '../../../module/inputs/inputs.vue'

export default {
  name: 'IndexComponent',
  data () {
    return {
      // start    params
      // end params
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
