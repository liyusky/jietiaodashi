<template>
  <!-- s 绑定银行卡 -->
  <section class="bind-bank-card padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="card-hint padding-horizontal-30">
      <p class="font-24 color-light-black">请绑定持卡人本人的银行卡，借条大师保证您的用卡安全</p>
    </div>
    <div class="card-form padding-horizontal-30 bg-white">
      <div class="form-item">
        <p class="font-30 color-black">持卡人</p>
        <div class="item-right">
          <input type="text" v-model="cardName" disabled>
          <i class="iconfont icon-cong font-30"></i>
        </div>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">身份证</p>
        <div class="item-right">
          <input type="text" v-model="idNumber" disabled>
        </div>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">银行</p>
        <div class="item-slide">
          <input type="text" v-model="bankCardName" placeholder="请选择银行" disabled>
          <i class="iconfont icon-cong font-30"></i>
        </div>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">开户地区</p>
        <div class="item-slide">
          <input type="text" v-model="accountArea" placeholder="请输入开户地区" disabled>
          <i class="iconfont icon-cong font-30"></i>
        </div>
      </div>
      <div class="form-item">
        <p class="font-30 color-black">手机号</p>
        <div class="item-right">
          <input type="text" v-model="phoneNumber" placeholder="请输入银行预留手机号">
        </div>
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
          <button class="button font-21 color-light-blue bg-white" @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
        </div>
      </div>
    </div>
    <div class="card-button padding-horizontal-30">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 绑定银行卡 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BindBankCardComponent',
  data () {
    return {
      cardName: '张玉',
      idNumber: '342222199801020125',
      phoneNumber: '',
      accountArea: '',
      codeNumber: '',
      bankCardName: '',
      imgCode: '',
      getCodeText: '获取验证码',
      codeDisabled: false,
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
  methods: {
    getCode () {
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
@import "./bind-bank-card.scss";
</style>
