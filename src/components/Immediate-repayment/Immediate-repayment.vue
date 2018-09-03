<template>
  <!-- s 立即还款 -->
  <section class="Immediate-repayment padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="repayment-board bg-blue color-white">
      <p>100.00</p>
      <p class="font-27">应还总额（元）</p>
    </div>
    <div class="repayment-form bg-white border-bottom-1 padding-horizontal-30">
      <div class="form-itme border-bottom-1">
        <InputsComponent :inputs="cancelMountInput" @GET_INPUT_TEXT_EVENT="getCancelMOunt"></InputsComponent>
      </div>
      <div class="form-itme  border-bottom-1">
        <InputsComponent :inputs="totalMountInput" @SWITCH_TOGGLE_EVENT="getTotalMOunt"></InputsComponent>
      </div>
      <div class="form-balance">
        <p class="font-27 color-light-black">账户余额<span class="font-24 color-light-blue">58.00</span>元</p>
      </div>
    </div>
    <div class="repayment-tip padding-left-30">
      <TipComponent :tip="tip"></TipComponent>
    </div>
    <div class="repayment-button">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 立即还款 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ImmediateRepaymentComponent',
  data () {
    return {
      cancelMount: '',
      totalMountShow: true,
      cancelReason: '',
      cancelMountInput: {
        type: 'slide',
        leftText: '金额',
        leftIcon: 'cong',
        placeholder: '请输入10的倍数',
        rightText: '元'
      },
      totalMountInput: {
        type: 'switch',
        leftText: '全额',
        leftIcon: 'cong'
      },
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即还款'
        }]
      },
      'tip': {
        type: 'default',
        content: '已阅读并同意相关协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '立即还款'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    InputsComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  methods: {
    getCancelMOunt (text) {
      this.cancelMount = text
    },
    getTotalMOunt (switchShow) {
      this.totalMountShow = switchShow
    },
    getCancelReason (text) {
      this.cancelReason = text
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./Immediate-repayment.scss";
</style>
