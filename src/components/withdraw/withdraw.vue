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
        <InputsComponent :inputs="inputs" @GET_INPUT_TEXT_EVENT="getAmountInputText"></InputsComponent>
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
      <div class="content-introduce">
        <p class="">当前账户可提现金额<span>2200</span>,<span>全部提现</span></p>
        <p class="">最低提现金额为5元，提现的手续费=3元+提现金额*0.6%，不足1元按1元收取</p>
      </div>
    </div>
    <div class="withdraw-button padding-horizontal-30">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 提现 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'WithdrawComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即提现'
        }]
      },
      'inputs': {
        type: 'icon',
        placeholder: '请输入金额',
        leftIcon: 'cong'
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
    InputsComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./withdraw.scss";
</style>
