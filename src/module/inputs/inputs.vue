<template>
  <!-- s input组件 -->
  <section class="input" :class="inputs.type">
    <div class="left">
      <i class="iconfont left-icon" :class="inputs.leftIcon" v-if="inputs.leftIcon"></i>
      <div class="leftText" v-if="inputs.leftText">{{inputs.leftText}}</div>
    </div>
    <div class="right" @click="openModal">
      <div class="right-center" v-if="inputs.centerText">{{inputs.centerText}}</div>
      <input class="right-input" type="text" v-model="inputText" :placeholder="inputs.placeholder">
      <i class="iconfont right-icon" :class="inputs.rightIcon" v-if="inputs.rightIcon" @click="clearInput"></i>
      <p class="right-text" v-if="inputs.rightText" @click="getCode">{{inputs.rightText}}</p>
      <div class="right-switch" :class="{'switch-active': switchShow}" v-if="inputs.type === 'switch'" @click="switchToggle">
        <div class="switch-btn"></div>
      </div>
      <div class="right-rate" v-if="inputs.type === 'rate'">
        <input type="text" placeholder="0~36%">
        <span>%</span>
        <input type="text" placeholder="利率金额">
        <span>￥</span>
      </div>
    </div>
  </section>
  <!-- e  input组件-->
</template>

<script>
// inputs: {
//   type: 'default' / 'text' / 'slide' / 'icon' / 'switch' / 'center' / 'rate',
//   placeholder: ''
//   rightText: ''
//   rightIcon: ''
//   leftText: ''
//   leftIcon: '',
//   centerText: ''
// }
export default {
  name: 'InputComponent',
  props: ['inputs'],
  data () {
    return {
      inputText: '',
      switchShow: true
    }
  },
  methods: {
    openModal () {
      if (this.inputs.type !== 'center') return
      if (this.inputs.type !== 'default') return
      if (this.inputs.type !== 'swicth') return
      this.$emit('OPEN_MODAL_EVENT')
    },
    switchToggle () {
      if (this.inputs.type === 'switch') {
        this.switchShow = !this.switchShow
        this.$emit('SWITCH_TOGGLE_EVENT', this.switchShow)
      }
    },
    clearInput () {
      if (this.inputs.type === 'default') {
        this.inputText = ''
        return
      }
      this.$emit('CLEAR_INPUT_EVENT')
    },
    getCode () {
      if (this.inputs.type === 'center' || this.inputs.type === 'default') {
        this.$emit('GET_CODE_EVENT')
      }
    }
  },
  watch: {
    inputText (newValue, oldValue) {
      this.$emit('GET_INPUT_TEXT_EVENT', newValue)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./inputs.scss";
</style>
