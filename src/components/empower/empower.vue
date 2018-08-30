<template>
  <!-- s undefined -->
  <section class="empower">
    <div class="empower-header">
      <img src="https://api.vtrois.com/image/750x582">
    </div>
    <div class="empower-tab">
      <div class="tab-nav">
        <div class="nav-item" :class="{'badge-active': switchShow}" @click="switchCode"><span>验证码登录</span></div>
        <div class="nav-item" :class="{'badge-active': !switchShow}" @click="switchPassword"><span>密码登录</span></div>
      </div>
      <div class="tab-form">
        <div class="form-item form-phone">
          <input type="text" v-model="phoneText" maxlength="11" placeholder="输入手机号">
        </div>
        <div class="form-item form-code" v-if="switchShow">
          <input type="text" v-model="codeText" maxlength="6" placeholder="请输入验证码">
          <button @click="getCode" :disabled="codeDisabled"><div>{{getCodeText}}</div></button>
        </div>
        <div class="form-item form-password" v-if="!switchShow">
          <input type="password" v-model="passwordText" placeholder="输入密码">
          <i class="iconfont icon-cong" v-if="passwordText" @click="clearPasswordText"></i>
        </div>
        <div class="form-button">
          <ButtonComponent :button="button" @SUBMIT_EVENT="submit"></ButtonComponent>
        </div>
        <div class="form-forget" v-if="!switchShow"><span @click="gotpage('forget-password')">忘记密码</span></div>
      </div>
    </div>
  </section>
  <!-- e undefined -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
export default {
  name: 'EmpowerComponent',
  data () {
    return {
      placeholder: '',
      phoneText: '',
      passwordText: '',
      codeText: '',
      getCodeText: '获取验证码',
      switchShow: true,
      codeDisabled: false,
      // start params
      'button': {
        default: {
          type: 'primary',
          text: '登录'
        }
      }
      // end params
    }
  },
  components: {
    // include components
    ButtonComponent
  },
  methods: {
    switchCode () {
      this.switchShow = true
    },
    switchPassword () {
      this.switchShow = false
    },
    clearPasswordText () {
      this.passwordText = ''
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
    submit () {},
    gotpage (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./empower.scss";
</style>
