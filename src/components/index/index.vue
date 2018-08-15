<template>
  <!-- s  -->
  <section class="index">
    <ModalComponent :modal="modal" v-show="modalShow" @MODAL_DEFAULT_EVENT="closeModal"></ModalComponent>
  </section>
  <!-- e  -->
</template>

<script>
import ModalComponent from '../../module/modals/modals.vue';

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
      modal: {},
      modalShow: true,
    };
  },
  methods: {
    closeModal() {
      this.modalShow = false;
    },
  },
  components: {
    ModalComponent,
  },
};
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
