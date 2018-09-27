<template>
  <!-- s 账单明细 -->
  <section class="account-balance">
    <TitleComponent :title="title" @OTHER_EVENT="target('transactions')"></TitleComponent>
    <div class="balance-card bg-white">
      <img class="card-portrait border-circle" src="../../assets/images/balance.gif">
      <div class="color-black font-27">可用余额(元)</div>
      <div class="color-deep-black">
        <span class="font-51">¥</span>
        <span class="font-69">{{usableMoney}}</span>
      </div>
      <div class="color-blue font-27">不可用余额 {{unusableMoney}}元</div>
    </div>
    <ButtonComponent class="balance-btn padding-horizontal-30 bg-white" :button="button" @LEFT_EVENT="target('withdraw')" @RIGHT_EVENT="target('recharge')"></ButtonComponent>
    <div class="balance-title bg-white padding-horizontal-30">
      <span class="font-30 color-black">收支明细</span>
    </div>
    <div class="balance-list bg-white">
      <PullRefreshComponent :direction="'bottom'" v-if="detailList.length" @LOAD_MORE_EVENT="loadMore">
        <DetailListComponent class="bg-white" :detailList="detailList"></DetailListComponent>
      </PullRefreshComponent>
      <WithoutComponent v-if="!detailList.length"></WithoutComponent>
    </div>
  </section>
  <!-- e 账单明细 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import Time from '../../class/Time.class.js'
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import PullRefreshComponent from '../../module/pull-refresh/pull-refresh.vue'
import TitleComponent from '../../module/title/title.vue'
import WithoutComponent from '../../module/without/without.vue'
export default {
  name: 'AccountBalanceComponent',
  data () {
    return {
      pageCurrent: 1,
      usableMoney: 0,
      unusableMoney: 0,
      detailList: [],
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
    TitleComponent,
    PullRefreshComponent,
    WithoutComponent
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
          pageSize: 20
        }
      }).success(data => {
        this.formatData(data)
      }).fail(data => {
      })
      BM.send({
        url: 'queryBalance',
        data: {
          jyrq: Time.current('YYYYMMDD'),
          zh: Storage.phone
        }
      }).success(data => {
        data = data.results
        this.usableMoney = data[0].ca_balance
        this.unusableMoney = data[0].cf_balance
        Storage.usableMoney = this.usableMoney
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
        this.pageCurrent++
      })
    },
    target (page) {
      Router.push(page)
    },
    loadMore () {
      this.init()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./account-balance.scss";
</style>
