<template>
  <!-- s 当日收还款详情 -->
  <section class="account-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="detail-tip color-deep-grey bg-white border-bottom-1" :tip="tip"></TipComponent>
    <BillboardComponent class="detail-billboard padding-horizontal-30 bg-white border-bottom-1" :billboard="item" v-for="(item, index) in billboard" :key="index"></BillboardComponent>
    <ReceiptComponent class="margin-top-21" :receipt="item" v-for="(item, index) in receipt" :key="index" @HEADER_EVENT="chat(item)" @DETAIL_EVENT="showDetail(item.accId)"></ReceiptComponent>
  </section>
  <!-- e 当日收还款详情 -->
</template>

<script>
// include dependence
import Http from '../../class/undefined'
import Router from '../../class/Router.class.js'
import Status from '../../class/Status.enum.js'
import Storage from '../../class/Storage.class.js'
import Type from '../../class/Type.enum.js'
import BillboardComponent from '../../module/billboard/billboard.vue'
import ReceiptComponent from '../../module/receipt/receipt.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AccountDetailComponent',
  data () {
    return {
      pageIndex: 1,
      // start params
      'billboard': [
        {
          type: 'guide',
          key: '应收款(元)',
          value: '',
          dot: true
        },
        {
          type: 'guide',
          key: '应还款(元)',
          value: '',
          dot: true
        }
      ],
      'receipt': [],
      'tip': {
        type: 'center',
        content: ''
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
  },
  created () {
    this.init()
  },
  methods: {
    target (page) {
      Router.push(page)
    },
    init () {
      Http.send({
        url: 'IncomeRepaymentPlanDetail',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          planDate: Storage.date,
          pageIndex: this.pageIndex,
          pageSize: 10
        }
      }).success(data => {
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.tip.content = `当日汇总(共${data.totalNumber}笔)`
      this.billboard[0].value = data.totalIncomeAmount
      this.billboard[1].value = data.totalRepaymentAmount
      data.rows.forEach(item => {
        let receipt = {
          name: item.TargetName,
          type: Type[item.Type],
          portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
          rate: item.YearRate,
          start: item.LoanDate,
          end: item.RepaymentDate,
          money: item.Amount,
          status: Status[item.State],
          targetPhone: item.TargetPhone,
          accId: item.AccId
        }
        this.receipt.push(receipt)
      })
    },
    showDetail (id) {
      Storage.id = id
      Router.push('iou-detail')
    },
    chat (item) {
      Router.push('chat')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./account-detail.scss";
</style>
