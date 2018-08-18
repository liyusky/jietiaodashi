<template>
  <!-- s  -->
  <section class="index">
    <header class="index-header">
      <div class="header-bg">
        <img src="../../assets/images/index-banner.gif">
      </div>
      <div class="header-list">
        <div class="list-item">
          <i class="iconfont icon-haoyou1"></i>
          <p>消息</p>
        </div>
        <div class="list-item">
          <i class="iconfont icon-add"></i>
          <p>消息</p>
        </div>
      </div>
    </header>
    <nav class="index-nav">
      <div class="nav-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tixian"></use>
        </svg>
        <p>找人出借</p>
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
        <img src="../../assets/images/msg.gif">
      </div>
      <div class="message-right">
        <p>155****4568，张**成功借款1500元</p>
      </div>
    </div>
    <div class="index-activity">
      <div class="activity-find">
        <img src="">
      </div>
      <div class="activity-invite">
        <img src="">
      </div>
    </div>
    <TabComponent :path="$route.path"></TabComponent>
    <ButtonComponent :button="button"></ButtonComponent>
  </section>
  <!-- e  -->
</template>

<script>
import TabComponent from '../../common/tab/tab.vue'
import ButtonComponent from '../../module/button/button.vue'

export default {
  name: 'IndexComponent',
  data () {
    return {
      // start    params
      inputs: {
        // type: 'text',
        // type: 'sides',
        type: 'center',
        leftText: '开户地区',
        placeholder: '请输入手机验证码',
        leftIcon: '',
        selcetText: '',
        rightText: '发送验证码',
        centerText: 'jfjalfdjjfks'
        // rightIcon: 'icon-arrow-right'
      },
      button: {
        type: 'group-default',
        firstName: '确认',
        secondName: '取消'
      }
      // end params
    }
  },
  components: {
    TabComponent,
    ButtonComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
