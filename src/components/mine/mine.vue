<template>
  <!-- s 我的 -->
  <section class="mine">
    <div class="mine-information padding-horizontal-24 margin-bottom-21">
      <div class="information-detail padding-vertical-15">
        <div class="detail-portrait">
          <img src="">
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
    <div class="mine-billboard-list">
      <BillboardListComponent :billboardList="billboardList" @OPERATION_EVENT="target"></BillboardListComponent>
    </div>
  </section>
  <!-- e 我的 -->
</template>

<script>
// include dependence
import BillboardListComponent from '../../module/billboard-list/billboard-list.vue'
export default {
  name: 'MineComponent',
  data () {
    return {
      // start params
      'billboardList': [
        {
          type: 'guide',
          svg: 'cangjian',
          key: '我的银行卡',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '失信查询',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '常见问题',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '在线客服',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '授信',
          icon: 'chuyin',
          target: ''
        }
      ]
      // end params
    }
  },
  components: {
    BillboardListComponent
    // include components
  },
  methods: {
    target (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./mine.scss";
</style>
