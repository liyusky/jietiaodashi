<template>
  <!-- s 当日收还款详情 -->
  <section class="account-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="detail-tip color-deep-grey bg-white border-bottom-1" :tip="tip"></TipComponent>
    <BillboardComponent class="detail-billboard padding-horizontal-30 bg-white border-bottom-1" :billboard="item" v-for="(item, index) in billboard" :key="index"></BillboardComponent>
    <ReceiptComponent class="margin-top-21" :receipt="receipt"></ReceiptComponent>
  </section>
  <!-- e 当日收还款详情 -->
</template>

<script>
// include dependence
import BillboardComponent from '../../module/billboard/billboard.vue'
import ReceiptComponent from '../../module/receipt/receipt.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AccountDetailComponent',
  data () {
    return {
      // start params
      'billboard': [
        {
          type: 'guide',
          key: '应收款(元)',
          value: '545.48.24',
          dot: true
        },
        {
          type: 'guide',
          key: '应还款(元)',
          value: '无',
          dot: true
        }
      ],
      'receipt': {
        name: '幸福不会远',
        type: '借出',
        portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
        rate: '0',
        start: '2017-11-30',
        end: '2017-12-01',
        money: '200',
        status: '已受理'
      },
      'tip': {
        type: 'center',
        content: '当日汇总(共50笔)'
      },
      'title': {
        contentText: '2018年5月17日收还款'
      }
      // end params
    }
  },
  components: {
    BillboardComponent,
    ReceiptComponent,
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./account-detail.scss";
</style>
