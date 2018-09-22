<template>
  <!-- s 身份验证 -->
  <section class="identity-verification">
    <TitleComponent :title="title"></TitleComponent>
    <div class="verification-tip">
      <p>请输入相关银行卡信息验证身份</p>
    </div>
    <div class="verification-bank">
      <div class="bank-info">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p class="bank-name">{{cardName}}<span>({{bankCard}})</span></p>
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
      </div>
    </div>
    <div class="verification-button">
      <ButtonComponent :button="button" @SUBMIT_EVENT="identitySubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 身份验证 -->
</template>

<script>
// import InputsComponent from '../../module/inputs/inputs.vue'
// include dependence
import Check from '../../class/Check.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IdentityVerificationComponent',
  data () {
    return {
      bankCard: '',
      cardName: '',
      cardNumber: '',
      identityNumber: '',
      codeNumber: '',
      graphCode: '1234',
      paymentPwd: '265465',
      getCodeText: '获取验证码',
      codeDisabled: false,
      cardHolderInput: {
        type: 'text',
        rightIcon: 'tishi2',
        leftText: '持卡人',
        receiveInput: '',
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
        leftText: '身份证'
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
  created () {
    this.init()
    this.cardHolderInput.receiveInput = Storage.name
  },
  methods: {
    init () {
      Http.send({
        url: 'BankCardList',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      let card = data[0].BankCard.slice(-4, data[0].BankCard.length)
      this.bankCard = card
      this.cardName = data[0].BankName
    },
    getCardNumber (text) {
      this.cardNumber = text
    },
    getIdentityNumber (text) {
      this.identityNumber = text
    },
    getCode () {
      this.waitOneMinute()
      Http.send({
        url: 'SendSMS',
        data: {
          phone: Storage.phone,
          type: 3
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
      })
    },
    identitySubmit () {
      if (!Check.card(this.cardNumber)) return
      if (!Check.id(this.identityNumber)) return
      if (!Check.code(this.codeNumber)) return
      Http.send({
        url: 'ForgetPaymentPwd',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          cardholder: Storage.name,
          cardNumber: this.cardNumber,
          idNumber: this.identityNumber,
          smsCode: this.codeNumber,
          paymentPwd: this.paymentPwd
        }
      }).success(data => {
        console.log(data)
        Router.push('')
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
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./identity-verification.scss";
</style>
