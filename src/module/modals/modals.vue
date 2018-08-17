<template>
  <!-- s  -->
  <section class="modals">
    <div class="modals-default" v-if="modal.type === 'default'">
      <div class="default-title common-title">
        <p>{{modal.title}}</p>
      </div>
      <div class="default-content common-content">
        <p>{{modal.contentText}}</p>
      </div>
      <button class="default-button common-button" @click="modalDefault">{{modal.btnName[0]}}</button>
    </div>
    <div class="modals-group" v-if="modal.type === 'group'">
      <div class="group-title common-title">
        <p>{{modal.title}}</p>
      </div>
      <div class="group-content common-content">
        <p>{{modal.contentText}}</p>
        <div class="content-tip" v-if="modal.tip">
          <Tip :tip="modal.tip"></Tip>
        </div>
      </div>
      <div class="group-button common-button">
        <button class="button-left" @click="modalGroupCancle">{{modal.btnName[0]}}</button>
        <button class="button-right" @click="modalGroupSumit">{{modal.btnName[1]}}</button>
      </div>
    </div>
    <div class="modals-code" v-if="modal.type === 'code'">
      <div class="code-title common-title">
        <p>{{modal.title}}</p>
      </div>
      <div class="code-content common-content">
        <p>{{modal.contentText}}</p>
        <div class="content-input">
          <div class="input-code">
            <input v-model="code" type="text" maxlength="6" placeholder="输入验证码" @input="codeInputChange">
            <i class="iconfont icon-delete" v-show="clearCodeShow" @click="clearCode"></i>
          </div>
          <div class="input-getcode">
            <button class="getcode-btn" :class="{active: getCodeShow}" :disabled="codeDisabled" @click="getCodeMessage"><div>{{getCodeText}}</div></button>
          </div>
        </div>
      </div>
      <div class="code-button common-button">
        <button class="button-left" @click="modalCodeCancle" >{{modal.btnName[0]}}</button>
        <button class="button-right" :disabled="submitDisabled" @click="modalCodeSumit">{{modal.btnName[1]}}</button>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// modal: {
//   type: 'code', modal 类型 'code'验证码 /'default'默认提示框/ 'group'两个按钮
//   title: '', 头部提示信息
//   contentText: '', 中间提示内容
//   btnName: ['取消', '确认'], 按钮名
//   tip: null,
//   tip: {...} tip提示框参数
// },
import Tip from '../tip/tip.vue';

export default {
  name: 'ModalsComponent',
  props: ['modal'],
  data() {
    return {
      code: '',
      clearCodeShow: false,
      getCodeShow: false,
      getCodeText: '发送验证码',
      submitDisabled: false,
      codeDisabled: false,
    };
  },
  methods: {
    modalDefault() {
      this.$emit('MODAL_DEFAULT_EVENT');
    },
    modalGroupCancle() {
      this.$emit('MODAL_CANCLE_EVENT');
    },
    modalGroupSumit() {
      this.$emit('MODAL_DEFAULT_EVENT');
    },
    // 验证码提交
    modalCodeSumit() {
      let reg = /^[0-9]{6}$/;
      if (!this.code) {
        alert('请输入验证码');
        return;
      }
      if (!reg.test(this.code)) {
        alert('验证码错误');
        return;
      }
      this.submitDisabled = true;
      this.$emit('MODAL_SUBMIT_EVENT');
    },
    // 验证码取消
    modalCodeCancle() {
      this.$emit('MODAL_SUBMIT_EVENT');
    },
    // 验证码清楚按钮显示
    codeInputChange() {
      if (this.code.length > 0) {
        this.clearCodeShow = true;
      } else {
        this.clearCodeShow = false;
      }
    },
    // 点击获取验证码按钮
    getCodeMessage() {
      this.codeDisabled = true;
      this.getCodeShow = true;
      this.getCodeText = '120秒后重发';
      let time = 120;
      let animation = setInterval(() => {
        time--;
        if (time > 0) {
          this.getCodeText = `${time}秒后重发`;
        } else {
          this.getCodeShow = false;
          this.getCodeText = '发送验证码';
          clearInterval(animation);
          this.codeDisabled = false;
        }
      }, 1000);
      // 获取验证码
    },
    clearCode() {
      this.code = '';
      this.clearCodeShow = false;
    },
  },
  components: {
    Tip,
  },
};
</script>

<style lang="sass" scoped>
@import "./modals.scss";
</style>
