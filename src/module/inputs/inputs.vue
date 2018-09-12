<template>
  <!-- s input组件 -->
  <section class="inputs" :class="inputs.type">
    <div class="left">
      <i class="iconfont left-icon" :class="'icon-' + inputs.leftIcon" v-if="inputs.leftIcon"></i>
      <div class="leftText" v-if="inputs.leftText">{{inputs.leftText}}</div>
    </div>
    <div class="right">
      <input class="right-input" :type="inputs.style ? inputs.style : 'text'" :maxlength="inputs.maxLength" :disabled="inputs.dsiabled" v-model="inputText" :placeholder="inputs.placeholder">
      <i class="iconfont right-icon" :class="'icon-' + inputs.rightIcon" v-if="inputs.rightIcon" @click="clearInput"></i>
      <p class="right-text" v-if="inputs.rightText">{{inputs.rightText}}</p>
      <div class="right-switch" :class="{'switch-active': switchShow}" v-if="inputs.type === 'switch'" @click="switchToggle">
        <div class="switch-btn"></div>
      </div>
    </div>
  </section>
  <!-- e  input组件-->
</template>

<script>
export default {
  name: 'InputComponent',
  props: ['inputs'],
  data () {
    return {
      inputText: '',
      switchShow: true
    }
  },
  created () {
    this.inputText = this.inputs.receiveInput
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
      if (this.inputs.type !== 'default') return
      this.inputText = ''
      this.$emit('CLEAR_INPUT_EVENT')
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
