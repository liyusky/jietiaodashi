<template>
  <!-- s 修改支付密码 -->
  <section class="modefy-pay-password padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="password-tip" :tip="tip"></TipComponent>
    <PayPasswordComponent class="password-input" :payPassword="payPassword"></PayPasswordComponent>
    <ButtonComponent class="password-btn padding-horizontal-30" :button="button" @SUBMIT_EVENT="submit"></ButtonComponent>
    <KeyboardComponent @PRESS_EVENT="input" @REMOVE_EVENT="remove"></KeyboardComponent>
  </section>
  <!-- e 修改支付密码 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
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
      oldPassword: [],
      newPassword: [],
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
  created () {
    this.init()
  },
  methods: {
    init () {
      switch (Storage.paySet.type) {
        case 'modify':
          this.tip.content = '请输入原始支付密码'
          this.title.contentText = '修改支付密码'
          this.submit = modify
          break
        case 'forget':
          this.tip.content = '请输入新的支付密码'
          this.title.contentText = '设置新支付密码'
          this.submit = forget
          break
      }
    },
    input (number) {
      if (this.payPassword.length < 6) this.payPassword.push(number)
    },
    submit () {},
    modify () {
      if (mark) {
        this.oldPayment = this.payPassword;
      } else {
        this.newPassword = this.payPassword;
      }
      Http.send({
        url: 'UpdatePaymentPwd',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          oldPaymentPwd: this.oldPassword.join(''),
          newPaymentPwd: this.newPassword.join('')
        }
      }).success(data => {
        this.payPassword = []
        this.tip.content = '设置新的支付密码'
      }).fail(data => {
      })
    },
    forget () {
      Http.send({
        url: 'ForgetPaymentPwd',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          cardholder: Storage.paySet.cardholder,
          cardNumber: Storage.paySet.cardNumber,
          idNumber: Storage.paySet.idNumber,
          smsCode: Storage.paySet.smsCode,
          graphCode: Storage.paySet.smsCode,
          paymentPwd: this.payPassword.join('')
        }
      }).success(data => {
      }).fail(data => {
      })
    },
    remove () {
      if (this.payPassword.length > 0) this.payPassword.pop()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./modefy-pay-password.scss";
</style>
