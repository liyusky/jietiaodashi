<template>
  <!-- s 充值 -->
  <section class="recharge padding-top-126">
    <TitleComponent :title="title" @OTHER_EVENT="gotoPage" @BACK_EVENT="back"></TitleComponent>
    <div class="recharge-content padding-left-30 bg-white">
      <div class="content-amount">
        <i class="iconfont icon-cong color-blue"></i>
        <span class="font-30 color-black">充值金额</span>
      </div>
      <div class="content-input border-bottom-1">
        <i class="iconfont icon-cong font-30 color-light-grey"></i>
        <input type="number" v-model="rechargeMoney">
        <!-- <InputsComponent :inputs="inputs" @GET_INPUT_TEXT_EVENT="getAmountInputText"></InputsComponent> -->
      </div>
      <div class="content-card">
        <div class="card-logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p class="font-33 color-black">中国银行</p>
        </div>
        <p class="card-number font-24 color-deep-grey"><span>123485546441316464</span>储蓄卡</p>
      </div>
    </div>
    <div class="recharge-button padding-horizontal-30">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="rechargeSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 充值 -->
</template>

<script>
// include dependence
import BM from '../../class/BM.class.js'
import Check from '../../class/Check.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'RechargeComponent',
  data () {
    return {
      rechargeMoney: '',
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即充值'
        }]
      },
      'title': {
        contentText: '充值',
        rightText: '限额说明'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    InputsComponent,
    TitleComponent
    // include components
  },
  methods: {
    gotoPage () {},
    rechargeSubmit () {
      if (!Check.money(this.amountNumber)) return
      BM.send({
        url: 'Recharge',
        data: {
          zh: Storage.phone,
          amt: this.rechargeMoney
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
@import "./recharge.scss";
</style>
