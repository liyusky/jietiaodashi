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
        <img src="../../assets/images/activity-find.gif">
      </div>
      <div class="activity-invite">
        <img src="../../assets/images/activity-invite.gif">
      </div>
    </div>
    <TabComponent :path="$route.path"></TabComponent>
    <!-- <ModalsComponent :modal="modal"></ModalsComponent> -->
    <div class="inputs" v-for="(item, index) in inputs" :key="index">
      <InputsComponent :inputs="item"></InputsComponent>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import TabComponent from '../../common/tab/tab.vue'
import ModalsComponent from '../../module/modals/modals.vue'
import InputsComponent from '../../module/inputs/inputs.vue'

export default {
  name: 'IndexComponent',
  data () {
    return {
      // start    params
      modal: {
        type: 'default',
        title: '温馨提示',
        contentText: '附近奥利弗警方对解放军拉萨肌肤',
        firstName: '取消',
        secondName: '确认'
      },
      inputs: [
        {
          type: 'default',
          placeholder: '输入手机号'
        },
        {
          type: 'default',
          placeholder: '输入手机号',
          rightIcon: 'icon-wode'
        },
        {
          type: 'default',
          placeholder: '输入手机号',
          rightText: '发送验证码'
        },
        {
          type: 'icon',
          leftIcon: 'icon-wode',
          placeholder: '输入手机号'
        },
        {
          type: 'text',
          leftIcon: 'icon-wode',
          placeholder: '输入手机号',
          leftText: '手机号'
        },
        {
          type: 'switch',
          leftIcon: 'icon-wode',
          leftText: '手机号'
        },
        {
          type: 'slide',
          leftIcon: 'icon-wode',
          leftText: '手机号',
          placeholder: '输入手机号',
          rightIcon: 'icon-dui'
        },
        {
          type: 'slide',
          leftIcon: 'icon-wode',
          leftText: '手机号',
          placeholder: '输入手机号',
          rightText: '天'
        },
        {
          type: 'slide',
          leftIcon: 'icon-wode',
          leftText: '手机号',
          placeholder: '输入手机号',
          rightText: '天',
          centerText: '14343254'
        },
        {
          type: 'center',
          leftIcon: 'icon-wode',
          placeholder: '输入手机号',
          leftText: '手机号',
          rightText: '发送验证码'
        }
      ]
      // // type: 'default',
      // // type: 'switch',
      // // type: 'icon',
      // // type: 'slide',
      // type: 'center',
      // leftIcon: 'icon-wode',
      // // rightIcon: 'icon-dui',
      // placeholder: '输入手机号',
      // leftText: '手机号',
      // code: '发送验证码'
      // // centerText: '201656655'
      // end params
    }
  },
  methods: {},
  components: {
    TabComponent,
    ModalsComponent,
    InputsComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
