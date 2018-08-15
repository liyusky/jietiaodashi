<template>
  <!-- s  -->
  <section class="index">
    <ModalComponent :Tip="Tip"></ModalComponent>
  </section>
  <!-- e  -->
</template>

<script>
import ModalComponent from '../../components/common/modal-component/modal-component.vue';

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
    ModalComponent,
  },
};
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
