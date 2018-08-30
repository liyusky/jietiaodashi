<template>
  <!-- s  -->
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
    <div class="mine-billboard-list">
      <BillboardListComponent :billboardList="billboardList" @OPERATION_EVENT="target"></BillboardListComponent>
    </div>
    <TabComponent></TabComponent>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import BillboardListComponent from '../../module/billboard-list/billboard-list.vue'
import TabComponent from '../../module/tab/tab.vue'
export default {
  name: 'MineComponent',
  data () {
    return {
      // start params
      'billboardList': [
        {
          type: 'guide',
          svg: '',
          key: '',
          value: '',
          icon: '',
          target: ''
        }
      ],
      'tab': ''
      // end params
    }
  },
  components: {
    BillboardListComponent,
    TabComponent
    // include components
  },
  methods: {
    target (page) {
      this.$router.push({
        name: page
      })
    },
    gotoPage (page) {
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
