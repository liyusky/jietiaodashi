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
        <InputsComponent :inputs="cardHolder" :receiveInput="cardName"></InputsComponent>
      </div>
      <div class="bank-item">
        <InputsComponent :inputs="cardNumber" @GET_INPUT_TEXT_EVENT="getCardNumber"></InputsComponent>
      </div>
    </div>
    <div class="verification-form">
      <div class="form-item">
        <InputsComponent :inputs="identityNumber" @GET_INPUT_TEXT_EVENT="getIdentityNumber"></InputsComponent>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="phoneNumber" @GET_INPUT_TEXT_EVENT="getPhoneNumber"></InputsComponent>
      </div>
    </div>
    <div class="verification-button">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 身份验证 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IdentityVerificationComponent',
  data () {
    return {
      cardHolder: {
        type: 'text',
        placeholder: '输入持卡人',
        rightIcon: 'cong',
        leftText: '持卡人'
      },
      cardNumber: {
        type: 'text',
        placeholder: '请输入银行卡号',
        leftText: '卡号'
      },
      identityNumber: {
        type: 'text',
        placeholder: '输入身份证号',
        leftText: '身份证'
      },
      phoneNumber: {
        type: 'text',
        placeholder: '输入手机号',
        leftText: '手机号'
      },
      cardName: '张玉',
      cardNumberText: '',
      phoneNumberText: '',
      identityNumberText: '',
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '下一步'
        }]
      },
      'inputs': {
        type: 'default / text / slide / icon / switch / center',
        placeholder: '',
        rightText: '',
        rightIcon: '',
        leftText: '',
        leftIcon: ''
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
      this.cardNumberText = text
    },
    getIdentityNumber (text) {
      this.identityNumberText = text
    },
    getPhoneNumber (text) {
      this.phoneNumberText = text
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
