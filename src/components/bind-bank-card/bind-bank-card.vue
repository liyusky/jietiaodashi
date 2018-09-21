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
        <InputsComponent :inputs="identityNumberInput" @GET_INPUT_TEXT_EVENT="getId"></InputsComponent>
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
      <!-- <div class="form-item">
        <p class="font-30 color-black">手机验证码</p>
        <div class="item-right">
          <input type="text" v-model="codeNumber" placeholder="请输入手机验证码">
          <button class="button font-21 color-blue bg-white" @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
        </div>
      </div> -->
    </div>
    <TipComponent class="card-tip" :tip="tip"></TipComponent>
    <div class="card-button padding-horizontal-30">
      <ButtonComponent :button="button" @SUBMIT_EVENT="submit"></ButtonComponent>
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
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import ModalComponent from '../../module/modal/modal.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BindBankCardComponent',
  data () {
    return {
      cardNumber: '',
      phoneNumber: '',
      selectBank: '',
      openAccount: '',
      id: '',
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
        placeholder: '请输身份证号',
        leftText: '身份证'
      },
      phoneNumberInput: {
        type: 'text',
        placeholder: '输入手机号',
        leftText: '手机号',
        style: 'number'
      },
      cardNumberInput: {
        type: 'text',
        placeholder: '请输入银行卡号',
        leftText: '卡号',
        maxLength: '19',
        style: 'number'
      },
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '确认绑定'
        }]
      },
      'tip': {
        type: 'default',
        content: '提现密码，登录密码默认手机号后6位，你可在设置中修改'
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
    ModalComponent,
    TipComponent
    // include components
  },
  created () {
    this.cardHolderInput.receiveInput = Storage.name
    if (Storage.bank) this.selectBank = Storage.bank.key
  },
  methods: {
    submit () {
      if (!Check.id(this.id)) return
      if (!Check.bank(this.cardNumber)) return
      if (!Check.phone(this.phoneNumber)) return
      if (!this.selectBank) return
      if (!this.openAccount) return
      alert(Storage.name)
      BM.send({
        url: 'BindCard',
        data: {
          userPhone: Storage.phone,
          xm: Storage.name,
          sfz: this.id,
          sj: this.phoneNumber,
          khhdm: this.code,
          khh: Storage.bank.target,
          zh: this.cardNumber
        }
      }).success(data => {
        Storage.bank = null
        document.getElementById('iframe').innerHTML = data
        document.forwardForm.submit()
      }).fail(data => {
      })
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
    getId (text) {
      this.id = text
    },
    closeModal () {
      this.modalShow = false
    },
    getArea (area, code) {
      this.openAccount = area
      alert(code)
      this.code = code
      this.modalShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./bind-bank-card.scss";
</style>
