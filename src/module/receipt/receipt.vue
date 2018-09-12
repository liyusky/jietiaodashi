<template>
  <!-- s  -->
  <section class="receipt bg-white">
    <div class="receipt-target" @click="headerEvent">
      <img class="target-portrait border-radius-12" :src="receipt.portrait">
      <div class="target-info">
        <div class="info-goal">
          <p class="goal-account font-27 color-black">{{receipt.type}}</p>
          <p class="font-27 color-deep-black">
            <span>{{receipt.name}}</span>
            <i class="iconfont icon-chuyin color-blue" v-if="receipt.icon"></i>
          </p>
        </div>
        <div class="info-status">
          <i class="iconfont icon-chuyin font-27 margin-right-15"></i>
          <p class="font-24">{{receipt.status}}</p>
        </div>
      </div>
    </div>
    <div class="receipt-detail padding-horizontal-21 border-radius-12 font-24" @click="detailEvent">
      <div class="detail-item">
        <p class="item-message">
          <span class="color-light-grey">金额：</span>
          <span class="color-black">{{receipt.money}}元</span>
        </p>
        <p class="item-message">
          <span class="color-light-grey">借款时间：</span>
          <span class="color-black">{{receipt.start}}</span>
        </p>
      </div>
      <div class="detail-item">
        <p class="item-message">
          <span class="color-light-grey">利率：</span>
          <span  class="color-black">{{receipt.rate}}%</span>
        </p>
        <p class="item-message">
          <span class="color-light-grey">还款时间：</span>
          <span class="color-black">{{receipt.end}}</span>
        </p>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'ReceiptComponent',
  props: ['receipt'],
  methods: {
    headerEvent () {
      this.$emit('HEADER_EVENT')
    },
    detailEvent () {
      this.$emit('DETAIL_EVENT')
    },
  }
}
</script>

<style lang="sass" scoped>
@import "./receipt.scss";
</style>
