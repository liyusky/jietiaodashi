<template>
  <!-- s  -->
  <section class="input">
    <div class="input-default" v-if="inputs.type === 'default'">
      <input v-model="inputText" type="text" :placeholder="inputs.placeholder">
      <i class="iconfont" :class="inputs.rightIcon" v-if="inputs.rightIcon" @click="clearInput"></i>
      <div class="default-code" v-if="inputs.rightText" @click="getCode">{{inputs.rightText}}</div>
    </div>
    <div class="input-text" v-if="inputs.type === 'text'">
      <div class="text-left">
        <i class="iconfont" :class="inputs.leftIcon"></i>
        <span class="left-text">{{inputs.leftText}}</span>
      </div>
      <input type="text" :placeholder="inputs.placeholder">
    </div>
    <div class="input-switch" v-if="inputs.type === 'switch'">
      <div class="switch-left">
        <i class="iconfont" :class="inputs.leftIcon"></i>
        <span class="left-text">{{inputs.leftText}}</span>
      </div>
      <div class="switch-right" :class="{'switch-active': switchShow}" @click="switchToggle">
        <div class="right-btn"></div>
      </div>
    </div>
    <div class="input-sides" v-if="inputs.type === 'sides'">
      <div class="sides-left">
        <i class="iconfont" :class="inputs.leftIcon"></i>
        <span class="left-text">{{inputs.leftText}}</span>
      </div>
      <!-- s 中间部分 -->
      <div class="sides-center" v-if="inputs.centerText">{{inputs.centerText}}</div>
      <!-- e 中间部分 -->
      <div class="sides-right" @click="openModal">
        <input type="text" v-model="inputs.selcetText" :placeholder="inputs.placeholder" :enabled="false">
        <i class="iconfont" :class="inputs.rightIcon" v-if="inputs.rightIcon"></i>
        <span class="right-text" v-if="inputs.rightText">{{inputs.rightText}}</span>
      </div>
    </div>
    <div class="input-center" v-if="inputs.type === 'center'">
      <div class="center-left">
        <i class="iconfont" :class="inputs.leftIcon"></i>
        <span class="left-text">{{inputs.leftText}}</span>
      </div>
      <div class="center-right" @click="openModal">
        <input type="text" :placeholder="inputs.placeholder">
        <div class="right-code" v-if="inputs.rightText" @click="getCode">{{inputs.rightText}}</div>
      </div>
    </div>
  </section>
  <!-- e  -->
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
  methods: {
    openModal () {
      this.$emit('OPEN_MODAL_EVENT')
    },
    switchToggle () {
      this.switchShow = !this.switchShow
    },
    clearInput () {
      this.$emit('CLEAR_INPUT_EVENT')
    },
    getCode () {
      this.$emit('GET_CODE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./inputs.scss";
</style>
