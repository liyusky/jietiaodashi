<template>
  <!-- s  -->
  <section class="TipComponent">
    <div class="TipComponent-center-hint" v-if="Tip.type === 'hint'">
      <i class="iconfont" :class="Tip.icon"></i>
      <span>{{Tip.content}}</span>
    </div>
    <div class="TipComponent-center-warn" v-if="Tip.type === 'warn'">
      <i class="iconfont" :class="Tip.icon"></i>
      <span>{{Tip.content}}</span>
    </div>
    <div class="TipComponent-center-borrow" v-if="Tip.type === 'borrow'">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="Tip.svg"></use>
      </svg>
      <span>{{Tip.content}}</span>
    </div>
    <div class="TipComponent-left-agree" @click="switchAgree" v-if="Tip.type === 'agree'">
      <i class="iconfont" :class="[Tip.icon, {switch: agresSwitch}]"></i>
      <span>{{Tip.content}}</span>
    </div>
    <div class="TipComponent-left-protocol" @click="switchProtocol" v-if="Tip.type === 'protocol'">
      <i class="iconfont" :class="[Tip.icon, {switch: protocolSwitch}]"></i>
      <span>{{Tip.content}}</span>
      <span @click.stop="gotoPage">{{Tip.protocol}}</span>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// Tip: {
//   type: 'hint': '蓝色tip'/'warn': '橘黄色tip'/'borrow': '借条tip'/'agree': '协议'/'protocol': '协议'
//   content: '', 传入文字消息
//   protocol: '', 协议名字
//   icon: '', 传入的蓝色和橘黄色的iconfont名,
//   svg: '', 传如的借条tip的svg iconfont名
// }
export default {
  name: 'TipComponentComponent',
  props: ['Tip'],
  data() {
    return {
      protocolSwitch: false,
      agresSwitch: false,
    };
  },
  methods: {
    switchAgree() {
      this.agresSwitch = !this.agresSwitch;
      this.$emit('SWITCH_AGREE_EVENT');
    },
    switchProtocol() {
      this.protocolSwitch = !this.protocolSwitch;
      this.$emit('SWITCH_PROTOCOL_EVENT');
    },
    gotoPage() {
      this.$emit('GOTOPAGE_EVENT');
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./tip-component.scss";
</style>
