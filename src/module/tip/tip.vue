<template>
  <!-- s  -->
  <section class="tip">
    <div class="tip-center-hint" v-if="tip.type === 'hint'">
      <i class="iconfont" :class="tip.icon"></i>
      <span>{{tip.content}}</span>
    </div>
    <div class="tip-center-warn" v-if="tip.type === 'warn'">
      <i class="iconfont" :class="tip.icon"></i>
      <span>{{tip.content}}</span>
    </div>
    <div class="tip-center-borrow" v-if="tip.type === 'borrow'">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="tip.svg"></use>
      </svg>
      <span>{{tip.content}}</span>
    </div>
    <div class="tip-left-agree" @click="switchAgree" v-if="tip.type === 'agree'">
      <i class="iconfont" :class="[tip.icon, {switch: agresSwitch}]"></i>
      <span>{{tip.content}}</span>
    </div>
    <div class="tip-left-modal" @click="switchModal" v-if="tip.type === 'modal'">
      <i class="iconfont" :class="[tip.icon, {switch: modalSwitch}]"></i>
      <span>{{tip.content}}</span>
    </div>
    <div class="tip-left-protocol" @click="switchProtocol" v-if="tip.type === 'protocol'">
      <i class="iconfont" :class="[tip.icon, {switch: protocolSwitch}]"></i>
      <span>{{tip.content}}</span>
      <span @click.stop="gotoPage">{{tip.protocol}}</span>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// tip: {
  //   type: 'hint': '中间提示tip'/'warn': '中间警告tip'/'borrow': '中间借条提示tip'/'agree': '右边tip'/'protocol': '右边带协议tip'
//   content: '', 传入文字消息
//   protocol: '', 协议名字
//   icon: '', 传入的iconfont名,
//   svg: '', 传入借条tip的svg名
// }
export default {
  name: 'TipComponent',
  props: ['tip'],
  data() {
    return {
      protocolSwitch: false,
      agresSwitch: false,
      modalSwitch: false,
    };
  },
  methods: {
    switchAgree() {
      this.agresSwitch = !this.agresSwitch;
      if (this.agresSwitch) this.$emit('SWITCH_AGREE_EVENT', this.agresSwitch);
    },
    switchModal() {
      this.modalSwitch = !this.modalSwitch;
      if (this.modalSwitch) this.$emit('SWITCH_MODAL_EVENT', this.modalSwitch);
    },
    switchProtocol() {
      this.protocolSwitch = !this.protocolSwitch;
      if (this.protocolSwitch) this.$emit('SWITCH_PROTOCOL_EVENT', this.protocolSwitch);
    },
    gotoPage() {
      this.$emit('GOTOPAGE_EVENT');
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./tip.scss";
</style>
