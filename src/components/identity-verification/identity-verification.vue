<template>
  <!-- s 身份验证 -->
  <section class="identity-verification">
    <TitleComponent :title="title" @BACK_EVENT="backPage"></TitleComponent>
    <div class="verification-tip">
      <p>请输入相关银行卡信息验证身份</p>
    </div>
    <div class="verification-bank">
      <div class="bank-info">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p class="bank-name">中国银行储蓄卡<span>(5866)</span></p>
        <i class="iconfont icon-cong"></i>
      </div>
      <div class="bank-item">
        <InputsComponent :inputs="cardHolderInput"></InputsComponent>
      </div>
      <div class="bank-item">
        <InputsComponent :inputs="cardNumberInput" @GET_INPUT_TEXT_EVENT="getCardNumber"></InputsComponent>
      </div>
    </div>
    <div class="verification-form">
      <div class="form-item">
        <InputsComponent :inputs="identityNumberInput" @GET_INPUT_TEXT_EVENT="getIdentityNumber"></InputsComponent>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">手机验证</p>
        <div class="item-right">
          <input type="number" v-model="codeNumber" placeholder="请输入手机验证码">
          <button class="button font-21 color-blue bg-white" @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
        </div>
        <!-- <InputsComponent :inputs="phoneNumber" @GET_INPUT_TEXT_EVENT="getPhoneNumber"></InputsComponent> -->
      </div>
    </div>
    <div class="verification-button">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="identitySubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 身份验证 -->
</template>

<script>
// import InputsComponent from '../../module/inputs/inputs.vue'
// include dependence
import Check from '../../class/Check.class.js'
import Http from '../../class/undefined'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IdentityVerificationComponent',
  data () {
    return {
      cardNumber: '',
      cardHolder: '张玉',
      phoneNumber: '',
      identityNumber: '',
      codeNumber: '',
      graphCode: '1234',
      paymentPwd: '265465',
      getCodeText: '获取验证码',
      codeDisabled: false,
      cardHolderInput: {
        type: 'text',
        rightIcon: 'cong',
        leftText: '持卡人',
        receiveInput: this.cardHolder,
        dsiabled: 'true'
      },
      cardNumberInput: {
        type: 'text',
        placeholder: '请输入银行卡号',
        leftText: '卡号',
        maxLength: '19',
        style: 'number'
      },
      identityNumberInput: {
        type: 'text',
        placeholder: '输入身份证号',
        leftText: '身份证',
        style: 'number'
      },
      phoneNumberInput: {
        type: 'text',
        placeholder: '输入手机号',
        leftText: '手机号',
        style: 'number'
      },
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '下一步'
        }]
      },
      'title': {
        contentText: '身份验证'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    InputsComponent,
    ButtonComponent
    // include components
  },
  methods: {
    getCardNumber (text) {
      this.cardNumber = text
    },
    getIdentityNumber (text) {
      this.identityNumber = text
    },
    getPhoneNumber (text) {
      this.phoneNumber = text
    },
    getCode () {
      // if (!Check.phone(this.phoneNumber)) return // phone is not correct
      this.waitOneMinute()
      Http.send({
        url: 'url',
        data: {}
      }).success(data => {
      }).fail(data => {
      })
    },
    identitySubmit () {
      if (!Check.card(this.cardNumber)) return // card is not correct
      if (!Check.identity(this.identityNumber)) return // identity is not correct
      if (!Check.code(this.codeNumber)) return // code is not correct
      Http.send({
        url: 'ForgetPaymentPwd',
        data: {
          token: this.$store.state.token,
          phone: this.$store.state.token,
          cardholder: this.cardHolder,
          cardNumber: this.cardNumber,
          idNumber: this.identityNumber,
          smsCode: this.codeNumber,
          graphCode: this.graphCode,
          paymentPwd: this.paymentPwd
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
        console.log(data)
      })
    },
    waitOneMinute () {
      this.codeDisabled = true
      this.getCodeText = '60秒后重发'
      let time = 60
      let animation = setInterval(() => {
        time--
        if (time > 0) {
          this.getCodeText = `${time}秒后重发`
        } else {
          this.getCodeText = '发送验证码'
          clearInterval(animation)
          this.codeDisabled = false
        }
      }, 1000)
    },
    backPage () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./identity-verification.scss";
</style>
