<template>
  <!-- s  -->
  <section class="immediate-repayment padding-top-126">
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
        <p class="font-27 color-light-black">账户余额<span class="font-24 color-blue">58.00</span>元</p>
      </div>
    </div>
    <div class="repayment-tip padding-left-30">
      <TipComponent :tip="tip" @TOGGLE_SELECTED_EVENT="getTipToggle"></TipComponent>
    </div>
    <div class="repayment-button">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="payMentSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'ImmediateRepaymentComponent',
  data () {
    return {
      cancelMount: '',
      totalMountShow: true,
      cancelReason: '',
      tipToggle: true,
      cancelMountInput: {
        type: 'slide',
        leftText: '金额',
        leftIcon: 'cong',
        placeholder: '请输入10的倍数',
        rightText: '元',
        style: 'number'
      },
      totalMountInput: {
        type: 'switch',
        leftText: '全额',
        leftIcon: 'cong'
      },
      // start params
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
    },
    getTipToggle (toggle) {
      this.tipToggle = toggle
    },
    payMentSubmit () {
      if (!Check.money(this.cancelMount)) return
      if (!this.tipToggle) return
      Http.send({
        url: 'url',
        data: {}
      }).success(data => {
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./immediate-repayment.scss";
</style>
