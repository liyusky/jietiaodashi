<template>
  <!-- s 忘记密码 -->
  <section class="forget-password">
    <TitleComponent :title="title" @BACK_EVENT="backPage('empower')"></TitleComponent>
    <div class="password-form">
      <div class="form-item form-phone">
        <input type="text" v-model="phoneNumber" maxlength="11" placeholder="输入手机号">
      </div>
      <div class="form-item form-code">
        <input type="text" v-model="codeText" maxlength="6" placeholder="请输入验证码">
        <button class="button font-21 color-blue bg-white" @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
      </div>
      <div class="form-item form-password" >
        <input type="password" v-model="passwordNumber" placeholder="请输入新的登录密码">
        <i class="iconfont icon-cong" v-if="passwordNumber" @click="clearpasswordNumber"></i>
      </div>
      <div class="form-item form-password" >
        <input type="password" v-model="AgainPasswordNumber" placeholder="请再次输入新的登录密码">
        <i class="iconfont icon-cong" v-if="AgainPasswordNumber" @click="clearAgainPasswordNumber"></i>
      </div>
    </div>
    <div class="password-button">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="findPasswordSubmit"></ButtonComponent>
    </div>
  </section>
  <!-- e 忘记密码 -->
</template>

<script>
// include dependence
import Check from '../../class/Check.class.js'
import Http from '../../class/Http.class.js'
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ForgetPasswordComponent',
  data () {
    return {
      placeholder: '',
      phoneNumber: '',
      passwordNumber: '',
      AgainPasswordNumber: '',
      codeText: '',
      getCodeText: '获取验证码',
      switchShow: true,
      codeDisabled: false,
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '提交'
        }]
      },
      'title': {
        contentText: '忘记密码'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    TitleComponent
    // include components
  },
  methods: {
    backPage (page) {
      this.$router.push({
        name: page
      })
    },
    clearpasswordNumber () {
      this.passwordNumber = ''
    },
    clearAgainPasswordNumber () {
      this.AgainPasswordNumber = ''
    },
    getCode () {
      if (!Check.phone(this.phoneNumber)) return // phone is not correct
      this.waitOneMinute()
      Http.send({
        url: 'SendSMS',
        data: {
          phone: this.phoneNumber,
          type: 6
        }
      }).success(data => {
        console.log(data)
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
    findPasswordSubmit () {
      if (!Check.phone(this.phoneNumber)) return
      if (!Check.code(this.codeText)) return
      if (!Check.password(this.passwordNumber)) return
      if (!Check.password(this.AgainPasswordNumber)) return
      if (this.passwordNumber !== this.AgainPasswordNumber) {
        alert('密码不一致')
        return
      }
      Http.send({
        url: 'FindPassword',
        data: {
          phone: this.phoneNumber,
          password: this.passwordNumber,
          verificationCode: this.codeText
        }
      }).success(data => {

      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./forget-password.scss";
</style>
