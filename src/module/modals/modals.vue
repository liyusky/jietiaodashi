<template>
  <!-- s  -->
  <section class="modals">
    <div :class="'modals-' + modal.type">
      <div class="title">
        <p>{{modal.title}}</p>
      </div>
      <div class="content">
        <p>{{modal.contentText}}</p>
        <div class="content-input" v-if="modal.type === 'code'">
          <div class="input-code">
            <input v-model="code" type="text" maxlength="6" placeholder="输入验证码" @input="codeInputChange">
            <i class="iconfont icon-cong" v-show="clearCodeShow" @click="clearCode"></i>
          </div>
          <div class="input-getcode">
            <button class="getcode-btn" :class="{active: getCodeShow}" :disabled="codeDisabled" @click="getCodeMessage"><div>{{getCodeText}}</div></button>
          </div>
        </div>
        <div class="content-tip" v-if="modal.tip">
          <Tip :tip="modal.tip"></Tip>
        </div>
      </div>
      <div class="button">
        <button @click="firstBtnClick"><div>{{modal.firstName}}</div></button>
        <button v-if="modal.type != 'default'" @click="secondBtnClick"><div>{{modal.secondName}}</div></button>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// modal: {
//   type: '', 'default'默认'/'group'双按钮 /'code':验证码
//   title: '', 头部提示信息
//   contentText: '', 中间提示内容
//   firstName: '' 第一个按钮名
//   secondName: '' 第二个按钮名
//   tip: {...} tip提示框参数
// },
import Tip from '../tip/tip.vue'

export default {
  name: 'ModalsComponent',
  props: ['modal'],
  data () {
    return {
      code: '',
      clearCodeShow: false,
      getCodeShow: false,
      getCodeText: '发送验证码',
      codeDisabled: false
    }
  },
  methods: {
    firstBtnClick () {
      this.$emit('FIRST_BTN_CLICK_EVENT')
    },
    secondBtnClick () {
      this.$emit('SECOND_BTN_CLICK_EVENT', this.code)
    },
    // 验证码清除按钮显示
    codeInputChange () {
      if (this.code.length > 0) {
        this.clearCodeShow = true
      } else {
        this.clearCodeShow = false
      }
    },
    // 点击获取验证码按钮
    getCodeMessage () {
      this.codeDisabled = true
      this.getCodeShow = true
      this.getCodeText = '120秒后重发'
      let time = 120
      let animation = setInterval(() => {
        time--
        if (time > 0) {
          this.getCodeText = `${time}秒后重发`
        } else {
          this.getCodeShow = false
          this.getCodeText = '发送验证码'
          clearInterval(animation)
          this.codeDisabled = false
        }
      }, 1000)
    },
    clearCode () {
      this.code = ''
      this.clearCodeShow = false
    }
    // 验证码提交
    // modalCodeSumit () {
    //   let reg = /^[0-9]{6}$/
    //   if (!this.code) {
    //     alert('请输入验证码')
    //     return
    //   }
    //   if (!reg.test(this.code)) {
    //     alert('验证码错误')
    //     return
    //   }
    //   this.$emit('MODAL_SUBMIT_EVENT')
    // }
  },
  components: {
    Tip
  }
}
</script>

<style lang="sass" scoped>
@import "./modals.scss";
</style>
