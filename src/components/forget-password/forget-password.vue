<template>
  <!-- s  -->
  <section class="forget-password">
    <TitleComponent :title="title" @BACK_EVENT="backPage('empower')"></TitleComponent>
    <div class="password-form">
      <div class="form-item form-phone">
        <input type="text" v-model="phoneText" maxlength="11" placeholder="输入手机号">
      </div>
      <div class="form-item form-code">
        <input type="text" v-model="codeText" maxlength="6" placeholder="请输入验证码">
        <button @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
      </div>
      <div class="form-item form-password" >
        <input type="password" v-model="passwordText" placeholder="请输入新的登录密码">
        <i class="iconfont icon-cong" v-if="passwordText" @click="clearPasswordText"></i>
      </div>
      <div class="form-item form-password" >
        <input type="password" v-model="AgainPasswordText" placeholder="请再次输入新的登录密码">
        <i class="iconfont icon-cong" v-if="AgainPasswordText" @click="clearAgainPasswordText"></i>
      </div>
    </div>
    <div class="password-button">
      <ButtonComponent :button="button" @SUBMIT_EVENT="submit"></ButtonComponent>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ForgetPasswordComponent',
  data () {
    return {
      placeholder: '',
      phoneText: '',
      passwordText: '',
      AgainPasswordText: '',
      codeText: '',
      getCodeText: '获取验证码',
      switchShow: true,
      codeDisabled: false
      // start params
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
    },
    clearPasswordText () {
      this.passwordText = ''
    },
    clearAgainPasswordText () {
      this.AgainPasswordText = ''
    },
    submit () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./forget-password.scss";
</style>
