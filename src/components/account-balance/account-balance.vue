<template>
  <!-- s 账单明细 -->
  <section class="account-balance">
    <TitleComponent :title="title"></TitleComponent>
    <div class="balance-card bg-white">
      <img class="card-portrait border-circle" src="https://api.vtrois.com/image/141/fff7db/e62991">
      <div class="color-black font-27">可用余额(元)</div>
      <div class="color-deep-black">
        <span class="font-51">¥</span>
        <span class="font-69">{{0}}</span>
      </div>
      <div class="color-deep-blue font-27">不可用余额 {{0}}元</div>
    </div>
    <ButtonComponent class="balance-btn padding-horizontal-30 bg-white" :button="button" @LEFT_EVENT="target('withdraw')" @RIGHT_EVENT="target('recharge')"></ButtonComponent>
    <DetailListComponent class="bg-white margin-top-30" :detailList="detailList"></DetailListComponent>
  </section>
  <!-- e 账单明细 -->
</template>

<script>
// include dependence
import Http from '../../class/undefined'
import Mock from '../../class/Mock.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AccountBalanceComponent',
  data () {
    return {
      pageCurrent: 1,
      // start params
      'button': {
        group: [
          {
            text: '提现',
            class: 'primary'
          },
          {
            text: '充值',
            class: 'default'
          }
        ]
      },
      'detailList': [{
      type: 'title',
      content: '本月收支明细'
    }],
      'title': {
        contentText: '账户余额',
        rightText: '收支明细'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    DetailListComponent,
    TitleComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'ThisMonthTransferALL',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          pageCurrent: this.pageCurrent,
          pageSize:20
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    formatData (data) {
      data.Rows.forEach(item => {
        let detail = {
          type: 'double',
          title: item.tranTypeName,
          count: item.amount,
          time: item.transferTime,
          remnant: item.balance_new
        }
        this.detailList.push(detail)
      })
    },
    target (page) {
      Router.push(page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./account-balance.scss";
</style>
