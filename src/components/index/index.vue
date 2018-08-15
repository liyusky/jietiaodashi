<template>
  <!-- s  -->
  <section class="index">
    <TipComponent :Tip="Tip"></TipComponent>
  </section>
  <!-- e  -->
</template>

<script>
import TipComponent from '../../components/common/tip-component/tip-component.vue';

export default {
  name: 'IndexComponent',
  data() {
    return {
      Tip: {
        type: 'protocol',
        content: '已收到还款',
        protocol: '《协议》',
        icon: 'icon-dui',
        svg: '',
      },
    };
  },
  methods: {},
  components: {
    TipComponent,
  },
};
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
