<template>
  <!-- s 提现 -->
  <section class="withdraw padding-top-126">
    <TitleComponent :title="title" @BACK_EVENT="backPage" @OTHER_EVENT="gotoPage"></TitleComponent>
    <div class="withdraw-content padding-left-30 bg-white">
      <div class="content-amount">
        <i class="iconfont icon-cong color-blue"></i>
        <span class="font-30 color-black">提现金额</span>
      </div>
      <div class="content-input border-bottom-1">
        <!-- <InputsComponent :inputs="inputs" ref="inputs" @GET_INPUT_TEXT_EVENT="getAmountInputText"></InputsComponent> -->
        <i class="iconfont icon-cong font-30 color-light-grey"></i>
        <input type="number" v-model="withdrawMoney">
      </div>
      <div class="content-card border-bottom-1">
        <div class="card-logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p class="font-33 color-black">中国银行</p>
        </div>
        <p class="card-number font-24 color-deep-grey"><span>123485546441316464</span>储蓄卡</p>
      </div>
      <div class="content-introduce font-24 color-black">
        <p>当前账户可提现金额<span>{{usableMoney}}</span>，<span class="color-blue" @click.stop="allWithout">全部提现</span></p>
        <p>最低提现金额为5元，提现的手续费=3元+提现金额*0.6%，不足1元按1元收取</p>
      </div>
    </div>
    <div class="withdraw-tip">
      <span class="font-24 color-deep-grey">24小时内到账</span>
    </div>
    <div class="withdraw-button padding-horizontal-30">
      <ButtonComponent :button="button"  @SUBMIT_EVENT="withdrawSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 提现 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Check from '../../class/Check.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'WithdrawComponent',
  data () {
    return {
      withdrawMoney: '',
      usableMoney: 0,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即提现'
        }]
      },
      'title': {
        contentText: '提现',
        rightText: '限额说明'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    // InputsComponent,
    TitleComponent
    // include components
  },
  created () {
    this.usableMoney = Storage.usableMoney
  },
  methods: {
    backPage () {
      this.$router.back(-1)
    },
    gotoPage () {},
    allWithout () {
      this.withdrawMoney = this.usableMoney
    },
    withdrawSubmit () {
      if (!Check.money(this.amountNumber)) return
      BM.send({
        url: 'Withdraw',
        data: {
          zh: Storage.phone,
          amt: this.withdrawMoney
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./withdraw.scss";
</style>
