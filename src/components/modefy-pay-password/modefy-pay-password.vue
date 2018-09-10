<template>
  <!-- s 修改支付密码 -->
  <section class="modefy-pay-password padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="password-tip" :tip="tip"></TipComponent>
    <PayPasswordComponent class="password-input" :payPassword="payPassword"></PayPasswordComponent>
    <ButtonComponent class="password-btn padding-horizontal-30" :button="button"></ButtonComponent>
    <KeyboardComponent @PRESS_EVENT="input"></KeyboardComponent>
  </section>
  <!-- e 修改支付密码 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import KeyboardComponent from '../../module/keyboard/keyboard.vue'
import PayPasswordComponent from '../../module/pay-password/pay-password.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ModefyPayPasswordComponent',
  data () {
    return {
      mark: true,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '完成'
        }]
      },
      'payPassword': [],
      'tip': {
        type: 'center',
        content: '请输入原始支付密码'
      },
      'title': {
        contentText: '修改支付密码'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    KeyboardComponent,
    PayPasswordComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  methods: {
    input (number) {
      if (this.mark && this.payPassword.length < 6) this.payPassword.push(number)
      if (this.payPassword.length === 6) this.submit()
    },
    submit () {
      this.mark = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./modefy-pay-password.scss";
</style>
