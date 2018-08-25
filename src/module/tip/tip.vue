<template>
  <!-- s  -->
  <section class="tip" :class="['tip-' + tip.type, 'tip-theme-' + tip.theme]" @click="toggleSelected">
    <i class="iconfont" v-if="tip.icon" :class="['icon-' + tip.icon, {selected: tip.selected}]"></i>
    <svg v-if="tip.svg" class="icon" aria-hidden="true">
      <use :xlink:href="tip.svg"></use>
    </svg>
    <span class="tip-content" v-if="tip.content">{{tip.content}}</span>
    <span class="tip-protocol" v-if="tip.protocol" @click.stop="protocol">《{{tip.protocol}}》</span>
  </section>
  <!-- e  -->
</template>

<script>
// tip: {
//   type: 'default':  default  / center
//   content: '', 传入文字消息
//   protocol: '', 协议名字
//   icon: '', 传入的iconfont名,
//   svg: '', 传入借条tip的svg名
//   selected: 'false'
//   theme: ''  blue  /  red
// }
export default {
  name: 'TipComponent',
  props: ['tip'],
  data () {
    return {
      protocolSwitch: false,
      agresSwitch: false,
      modalSwitch: false
    }
  },
  methods: {
    switchModal () {
      this.modalSwitch = !this.modalSwitch
      if (this.modalSwitch) this.$emit('SWITCH_MODAL_EVENT', this.modalSwitch)
    },
    switchProtocol () {
      this.protocolSwitch = !this.protocolSwitch
      if (this.protocolSwitch) this.$emit('SWITCH_PROTOCOL_EVENT', this.protocolSwitch)
    },
    protocol () {
      this.$emit('TRAGET_PROTOCOL_EVENT')
    },
    toggleSelected () {
      if (typeof this.tip.selected !== 'undefined') {
        this.tip.selected = !this.tip.selected
        this.$emit('TOGGLE_SELECTED_EVENT', this.tip.selected)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./tip.scss";
</style>
