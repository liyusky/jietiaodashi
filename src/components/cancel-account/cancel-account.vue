<template>
  <!-- s 销账 -->
  <section class="cancel-account padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="account-board bg-blue color-white">
      <p>100.00</p>
      <p class="font-27">当前应收款（元）</p>
    </div>
    <div class="account-form bg-white border-bottom-1 padding-horizontal-30">
      <div class="form-itme border-bottom-1">
        <InputsComponent :inputs="cancelMountInput" @GET_INPUT_TEXT_EVENT="getCancelMOunt"></InputsComponent>
      </div>
      <div class="form-itme border-bottom-1">
        <InputsComponent :inputs="totalMountInput" @SWITCH_TOGGLE_EVENT="getTotalMOunt"></InputsComponent>
      </div>
      <div class="form-itme border-bottom-1">
        <InputsComponent :inputs="cancelReasonInput" @GET_INPUT_TEXT_EVENT="getCancelReason"></InputsComponent>
      </div>
    </div>
    <div class="account-tip padding-left-30">
      <TipComponent :tip="tip"></TipComponent>
    </div>
    <div class="account-button">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 销账 -->
</template>

<script>
// include dependence
import BoardComponent from '../../module/board/board.vue'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CancelAccountComponent',
  data () {
    return {
      cancelMount: '',
      totalMountShow: true,
      cancelReason: '',
      cancelMountInput: {
        type: 'slide',
        leftText: '销账金额',
        leftIcon: 'cong',
        placeholder: '请输入10的倍数',
        rightText: '元'
      },
      totalMountInput: {
        type: 'switch',
        leftText: '全额',
        leftIcon: 'cong'
      },
      cancelReasonInput: {
        type: 'slide',
        leftText: '销账原因',
        leftIcon: 'cong',
        placeholder: '其他方式收款',
        rightIcon: 'cong'
      },
      // start params
      'board': 'center',
      'button': {
        default: [{
          type: 'primary',
          text: '提交'
        }]
      },
      'inputs': 1,
      'tip': {
        type: 'default',
        content: '已阅读相关协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '销账'
      }
      // end params
    }
  },
  components: {
    // include components
    TitleComponent,
    TipComponent,
    InputsComponent,
    ButtonComponent,
    BoardComponent
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
@import "./cancel-account.scss";
</style>
