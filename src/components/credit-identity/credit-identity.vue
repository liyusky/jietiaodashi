<template>
  <!-- s 身份认证 -->
  <section class="credit-identity">
    <TitleComponent :title="title"></TitleComponent>
    <div class="identity-upload">
      <div class="upload-title">
        <p class="font-24 color-light-grey">提交身份证信息，进行身份认证</p>
      </div>
      <div class="upload-content">
        <div class="content-item">
          <div class="item-img">
            <img src="http://iph.href.lu/195x50">
          </div>
          <p class="font-27 color-deep-grey">身份证人像面</p>
        </div>
        <div class="content-item">
          <div class="item-img">
            <img src="http://iph.href.lu/195x50">
          </div>
          <p class="font-27 color-deep-grey">身份证国徽面</p>
        </div>
        <div class="content-item" @click="popUDFaceCheck">
          <div class="item-img">
            <img src="http://iph.href.lu/195x50">
          </div>
          <p class="font-27 color-deep-grey">人脸识别</p>
        </div>
      </div>
    </div>
    <div class="identity-detail">
      <div class="detail-title">
        <p class="font-27 color-black">身份证信息</p>
      </div>
      <div class="detail-form">
        <div class="form-item">
          <span class="font-27 color-deep-grey">姓名</span>
          <input type="text" v-model="cardName" :disabled="inputDisabled">
        </div>
        <div class="form-item">
          <span class="font-27 color-deep-grey">身份证号</span>
          <input v-model="cardId" :disabled="inputDisabled">
        </div>
        <div class="form-item">
          <span class="font-27 color-deep-grey">有效期</span>
          <input type="text" v-model="indata" :disabled="inputDisabled">
        </div>
      </div>
    </div>
    <div class="identity-button">
      <ButtonComponent :button="button" @SUBMIT_EVENT="identitySubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 身份认证 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditIdentityComponent',
  data () {
    return {
      cardName: 'xxxxxxx',
      cardId: 'xxxxx',
      indata: 'xxxx',
      cardFront: 'xxx',
      cardBack: 'xxxx',
      livingPhoto: 'http://www.baidu.com',
      sex: '男',
      inputDisabled: false,
      info: this.$store.state.info,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即提交'
        }]
      },
      'title': {
        contentText: '身份认证'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    ButtonComponent
    // include components
  },
  created () {
    if (!this.cardFront || !this.cardBack || !this.livingPhoto) {
      // this.inputDisabled = true
    }
  },
  methods: {
    identitySubmit () {
      if (!this.cardName) return
      if (!this.cardId) return
      if (!this.indata) return
      Http.send({
        url: 'IdentityAuth',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          cardFront: this.cardFront,
          cardBack: this.cardBack,
          livingPhoto: this.livingPhoto,
          name: this.cardName,
          cardNo: this.cardId,
          sex: this.sex
        }
      }).success(data => {
        Router.push('add-contact')
      }).fail(data => {
        console.log(data)
      })
    },
    popUDFaceCheck () {
      try {
        appJsInterface.popUDFaceCheck()
      } catch (error) {}
    }
  },
  watch: {
    info: function (info) {
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-identity.scss";
</style>
