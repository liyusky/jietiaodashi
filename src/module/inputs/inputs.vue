<template>
  <!-- s  -->
  <section class="input">
    <div class="input-default" v-if="inputs.type === 'default'">
      <input v-model="inputText" type="text" :placeholder="inputs.placeholder">
      <i class="iconfont" :class="inputs.icon" v-show="inputs.icon"></i>
    </div>
    <div class="input-text" v-if="inputs.type === 'text'">
      <span class="text-content">{{inputs.contentText}}</span>
      <input type="text" :placeholder="inputs.placeholder">
    </div>
    <div class="input-sides" v-if="inputs.type === 'sides'">
      <span class="sides-content">{{inputs.contentText}}</span>
      <div class="sides-left" @click="openModal">
        <input type="text" v-model="inputs.selcetText" :placeholder="inputs.placeholder" :enabled="false">
        <i class="iconfont" :class="inputs.icon" v-if="inputs.icon"></i>
        <span class="left-text" v-if="inputs.leftText">{{inputs.leftText}}</span>
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
      inputText: ''
    }
  },
  methods: {
    openModal () {
      this.$emit('OPEN_MODAL_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./inputs.scss";
</style>
