<template>
  <!-- s 我的银行卡 -->
  <section class="my-bank-card padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <ul class="card-list padding-horizontal-30">
      <li class="list-item bg-white">
        <div class="item-detail">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <div class="detail-name color-black">
            <p class="font-33">{{myBankList.BankName}}</p>
            <p class="font-27">储蓄卡</p>
          </div>
        </div>
        <p class="item-card color-deep-black">{{myBankList.BankCard}}</p>
      </li>
    </ul>
    <div class="card-hint font-30 color-light-black padding-horizontal-30">
      <p>温馨提示</p>
      <p>1、账户只能绑定一张银行卡，开户即绑卡；</p>
      <p>2、更换银行卡需注销账户，注销前请确认系统无有效借条以及账户余额为零；</p>
      <p>3、注销成功后需借条大师审核，时间在1个工作日内，审核通过即可重新绑卡。</p>
    </div>
  </section>
  <!-- e 我的银行卡 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Mock from '../../class/Mock.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'MyBankCardComponent',
  data () {
    return {
      myBankList: null,
      // start params
      'title': {
        contentText: '我的银行卡'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'BankCardList',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.myBankList = Mock.myBank
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./my-bank-card.scss";
</style>
