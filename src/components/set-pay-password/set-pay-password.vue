<template>
  <!-- s 设置支付密码 -->
    <section class="set-pay-password padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="password-tip" :tip="tip"></TipComponent>
    <PayPasswordComponent class="password-pay-password" :payPassword="payPassword"></PayPasswordComponent>
    <ButtonComponent class="password-btn padding-horizontal-30" :button="button"></ButtonComponent>
  </section>
  <!-- e 设置支付密码 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import PayPasswordComponent from '../../module/pay-password/pay-password.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'SetPayPasswordComponent',
  data () {
    return {
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
        content: '输入新的支付密码'
      },
      'title': {
        contentText: '设置支付密码'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    PayPasswordComponent,
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./set-pay-password.scss";
</style>
