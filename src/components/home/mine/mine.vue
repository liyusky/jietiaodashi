<template>
  <!-- s 我的 -->
  <section class="mine">
    <div class="mine-information padding-horizontal-24 margin-bottom-21">
      <div class="information-detail padding-vertical-15">
        <div class="detail-portrait" @click="gotoPage('personal-info')">
          <img src="https://api.vtrois.com/image/250x205">
        </div>
        <div class="detail-content">
          <p class="font-36 color-deep-black">{{'name'}}</p>
          <p class="font-24 color-light-black">借条ID: {{'id'}}</p>
        </div>
      </div>
      <div class="information-operation">
        <p class="operation-item">
          <i class="iconfont icon-cong margin-right-12"></i>
          <span class="font-27">消息</span>
        </p>
        <p class="operation-item">
          <i class="iconfont icon-cong margin-right-12"></i>
          <span class="font-27">设置</span>
        </p>
      </div>
    </div>
    <div class="mine-balance padding-horizontal-30 margin-bottom-21">
      <div class="balance-count">
        <p class="count-content">
          <span class="color-deep-black font-27">我的总资产（元）</span>
          <span class="color-deep-black font-60">0.00</span>
        </p>
        <i class="iconfont icon-chuyin color-grey"></i>
      </div>
      <div class="balance-detail">
        <div class="detail-item border-radius-12">
          <p class="font-30 color-white">借入</p>
          <p class="font-36 color-white">{{0.00}}</p>
        </div>
        <div class="detail-item border-radius-12">
          <p class="font-30 color-white">借出</p>
          <p class="font-36 color-white">{{0.00}}</p>
        </div>
      </div>
    </div>
    <div class="mine-billboard-list padding-left-30 bg-white">
      <BillboardComponent class="list-item padding-right-30" :billboard="item" v-for="(item, index) in billboard" :key="index" @OPERATION_EVENT="target"></BillboardComponent>
    </div>
    <TabComponent></TabComponent>
  </section>
  <!-- e 我的 -->
</template>

<script>
// include dependence
import Router from '../../../class/Router.class.js'
import BillboardComponent from '../../../module/billboard/billboard.vue'
import TabComponent from '../../../module/tab/tab.vue'
export default {
  name: 'MineComponent',
  data () {
    return {
      // start params
      'billboard': [
        {
          key: '收还款计划',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'account-statistic',
          border: true
        },
        {
          key: '我的银行卡',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'my-bank-card',
          border: true
        },
        {
          key: '常见问题',
          icon: 'chuyin',
          svg: 'cangjian',
          target: 'familar-question',
          border: true
        },
        {
          key: '在线客服',
          icon: 'chuyin',
          svg: 'cangjian',
          border: true
        },
        {
          key: '授信',
          svg: 'cangjian',
          icon: 'chuyin',
          target: 'credit',
          border: true
        },
        {
          key: '意见反馈',
          svg: 'cangjian',
          icon: 'chuyin',
          target: '',
          border: true
        }
      ],
      'tab': ''
      // end params
    }
  },
  components: {
    BillboardComponent,
    TabComponent
    // include components
  },
  created () {
    Router.mark()
  },
  methods: {
    target (page) {
      Router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./mine.scss";
</style>
