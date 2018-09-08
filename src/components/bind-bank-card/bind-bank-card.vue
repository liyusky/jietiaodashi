<template>
  <!-- s 绑定银行卡 -->
  <section class="bind-bank-card padding-top-126">
    <TitleComponent :title="title" @BACK_EVENT="backPage"></TitleComponent>
    <div class="card-hint padding-horizontal-30">
      <p class="font-24 color-light-black">请绑定持卡人本人的银行卡，借条大师保证您的用卡安全</p>
    </div>
    <div class="card-form padding-horizontal-30 bg-white">
      <div class="form-item">
        <InputsComponent :inputs="cardHolderInput"></InputsComponent>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="identityNumberInput"></InputsComponent>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="cardNumberInput" @GET_INPUT_TEXT_EVENT="getCardNumber"></InputsComponent>
      </div>
      <div class="form-item" @click="gotoPage('select-bank-card')">
        <InputsComponent :inputs="selectBankInput"></InputsComponent>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="openAccountInput" @click="getOpenAccount"></InputsComponent>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="phoneNumberInput" @GET_INPUT_TEXT_EVENT="getPhoneNumber"></InputsComponent>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">图片验证码</p>
        <div class="item-right">
          <input type="text" v-model="imgCode" placeholder="请输入图片验证码">
          <div class="right-img-code"></div>
        </div>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">手机验证码</p>
        <div class="item-right">
          <input type="text" v-model="codeNumber" placeholder="请输入手机验证码">
          <button class="button font-21 color-blue bg-white" @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
        </div>
      </div>
    </div>
    <div class="card-button padding-horizontal-30">
      <ButtonComponent :button="button" @click="bindSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 绑定银行卡 -->
</template>

<script>
// include dependence
import { mapMutations } from 'vuex'
import Check from '../../class/Check.class.js'
import Http from '../../class/Http.class.js'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BindBankCardComponent',
  data () {
    return {
      cardNumber: '',
      phoneNumber: '',
      selectBank: '',
      openAccount: '',
      codeNumber: '',
      imgCode: '',
      getCodeText: '获取验证码',
      codeDisabled: false,
      openAccountShow: false,
      cardHolderInput: {
        type: 'text',
        rightIcon: 'cong',
        leftText: '持卡人',
        receiveInput: '张xx',
        dsiabled: 'true'
      },
      identityNumberInput: {
        type: 'text',
        placeholder: '输入身份证号',
        leftText: '身份证',
        receiveInput: '342222199812121010',
        dsiabled: 'true'
      },
      cardNumberInput: {
        type: 'text',
        placeholder: '请输入银行卡号',
        leftText: '卡号',
        maxLength: '19',
        style: 'number'
      },
      selectBankInput: {
        type: 'slide',
        placeholder: '请选择银行',
        leftText: '银行',
        rightIcon: 'cong',
        dsiabled: 'true'
      },
      openAccountInput: {
        type: 'slide',
        placeholder: '请选择开户地区',
        leftText: '开户地区',
        rightIcon: 'cong',
        dsiabled: 'true'
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
          text: '确认绑定'
        }]
      },
      'title': {
        contentText: '绑定银行卡'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    InputsComponent,
    TitleComponent
    // include components
  },
  created () {
    if (this.$store.state.route === '/select-bank-card') {
      this.selectBankInput.placeholder = this.$store.state.card.key
      this.selectBank = this.$store.state.card.key
      return
    }
    this.selectBankInput.placeholder = '请选择银行'
    this.selectBank = ''
  },
  methods: {
    getCode () {
      if (!Check.phone(this.phoneNumber)) return // phone is not correct
      this.waitOneMinute()
      Http.send({
        url: 'url',
        data: {}
      }).success(data => {
      }).fail(data => {
      })
    },
    bindSubmit () {
      if (!Check.card(this.cardNumber)) return // card is not correct
      if (!Check.phone(this.phoneNumber)) return // phone is not correct
      if (!Check.imgCode(this.imgCode)) return // imgCode is not correct
      if (!Check.code(this.codeNumber)) return // code is not correct
      if (!this.selectBank) return
      if (!this.openAccount) return
      Http.send({
        url: 'url',
        data: {}
      }).success(data => {
      }).fail(data => {
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
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    },
    getOpenAccount () {
      this.openAccountShow = true
    },
    getCardNumber (text) {
      this.cardNumber = text
    },
    getPhoneNumber (text) {
      this.phoneNumber = text
    },
    closeModal () {
      this.openAccountShow = false
    },
    backPage () {
      if (this.$store.state.route === '/select-bank-card') {
        this.$router.push({
          name: 'index'
        })
        return
      }
      this.$router.back(-1)
    },
    // start mutations
    ...mapMutations(['saveOrigin', 'saveRoute'])
    // end mutations
  }
}
</script>

<style lang="sass" scoped>
@import "./bind-bank-card.scss";
</style>
