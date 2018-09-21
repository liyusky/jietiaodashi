<template>
  <!-- s 账单明细 -->
  <section class="account-balance">
    <TitleComponent :title="title" @OTHER_EVENT="target('transactions')"></TitleComponent>
    <div class="balance-card bg-white">
      <img class="card-portrait border-circle" src="http://iph.href.lu/150x150">
      <div class="color-black font-27">可用余额(元)</div>
      <div class="color-deep-black">
        <span class="font-51">¥</span>
        <span class="font-69">{{usableMoney}}</span>
      </div>
      <div class="color-deep-blue font-27">不可用余额 {{unusableMoney}}元</div>
    </div>
    <ButtonComponent class="balance-btn padding-horizontal-30 bg-white" :button="button" @LEFT_EVENT="target('withdraw')" @RIGHT_EVENT="target('recharge')"></ButtonComponent>
    <PullRefreshComponent :direction="'bottom'" v-if="detailList.length" @LOAD_MORE_EVENT="loadMore">
      <DetailListComponent class="bg-white margin-top-30" :detailList="detailList"></DetailListComponent>
    </PullRefreshComponent>
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
export default {
  name: 'AccountBalanceComponent',
  data () {
    return {
      pageCurrent: 1,
      usableMoney: 0,
      unusableMoney: 0,
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
    TitleComponent,
    PullRefreshComponent
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
