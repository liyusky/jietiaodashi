<template>
  <!-- s 绑定银行卡 -->
  <section class="bind-bank-card padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
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
      <div class="form-item" border-bottom-1 @click="gotoPage('select-bank-card')">
        <p class="font-30 color-black">银行</p>
        <div class="itme-default">
          <span class="font-30 color-light-grey">{{selectBank ? selectBank: '请选择银行'}}</span>
          <i class="iconfont icon-cong font-30 color-light-grey"></i>
        </div>
      </div>
      <div class="form-item" border-bottom-1>
        <p class="font-30 color-black">开户地区</p>
        <div class="itme-default" @click="getOpenAccount">
          <span class="font-30 color-light-grey">{{openAccount ? openAccount: '请选择开户地区'}}</span>
          <i class="iconfont icon-cong font-30 color-light-grey"></i>
        </div>
      </div>
      <div class="form-item">
        <InputsComponent :inputs="phoneNumberInput" @GET_INPUT_TEXT_EVENT="getPhoneNumber"></InputsComponent>
      </div>
      <!-- <div class="form-item">
        <p class="font-30 color-black">图片验证码</p>
        <div class="item-right">
          <input type="text" v-model="imgCode" placeholder="请输入图片验证码">
          <div class="right-img-code"></div>
        </div>
      </div> -->
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
    <ModalComponent v-show="modalShow" @CLOSE_EVENT="closeModal">
      <CitySelect @SELECT_AREA_EVENT="getArea"></CitySelect>
    </ModalComponent>
     <!-- <CitySelect :provinceList="provinceList" :cities="cities" @SELECT_AREA_EVENT="getArea"></CitySelect> -->
  </section>
  <!-- e 绑定银行卡 -->
</template>

<script>
import CitySelect from './city-select/city-select.vue'
// include dependence
import BM from '../../class/BM.class.js'
import Check from '../../class/Check.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import ModalComponent from '../../module/modal/modal.vue'
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
      getCodeText: '获取验证码',
      codeDisabled: false,
      modalShow: false,
      code: null,
      cardHolderInput: {
        type: 'text',
        rightIcon: 'cong',
        leftText: '持卡人',
        receiveInput: '',
        dsiabled: 'true'
      },
      identityNumberInput: {
        type: 'text',
        leftText: '身份证',
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
    TitleComponent,
    CitySelect,
    ModalComponent
    // include components
  },
  created () {
    this.cardHolderInput.receiveInput = Storage.name
    this.identityNumberInput.receiveInput = Storage.id
    if (Storage.card) {
      this.selectBank = Storage.card.key
    }
  },
  methods: {
    getCode () {
      if (!Check.phone(this.phoneNumber)) return // phone is not correct
      this.waitOneMinute()
      Http.send({
        url: 'SendSMS',
        data: {
          phone: Storage.phone,
          type: 1
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
        console.log(data)
      })
    },
    bindSubmit () {
      if (!Check.card(this.cardNumber)) return // card is not correct
      if (!Check.phone(this.phoneNumber)) return // phone is not correct
      if (!Check.code(this.codeNumber)) return // code is not correct
      if (!this.selectBank) return
      if (!this.openAccount) return
      BM.send({
        url: 'BindCard',
        data: {
          userPhone: Storage.phone,
          xm: Storage.name,
          zjlx: 0,
          sfz: Storage.id,
          sj: this.phoneNumber,
          khhdm: this.code,
          khh: Storage.card.key,
          zh: this.cardNumber,
          pwd: '密码'
        }
      }).success(data => {
        Router.back()
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
      Router.push(page)
    },
    getOpenAccount () {
      this.modalShow = true
    },
    getCardNumber (text) {
      this.cardNumber = text
    },
    getPhoneNumber (text) {
      this.phoneNumber = text
    },
    closeModal () {
      this.modalShow = false
    },
    getArea (area, code) {
      this.openAccount = area
      this.code = code
      this.modalShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./bind-bank-card.scss";
</style>
