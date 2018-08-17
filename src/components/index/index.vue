<template>
  <!-- s  -->
  <section class="index">
    <ModalComponent :modal="modal" v-show="modalShow"></ModalComponent>
  </section>
  <!-- e  -->
</template>

<script>
import ModalComponent from '../../module/modals/modals.vue';

export default {
  name: 'IndexComponent',
  data() {
    return {
      modal: {
        // type: 'default',
        // type: 'group',
        type: 'code',
        title: '温馨提示',
        contentText: '基督教负担是解放军都说了房间都是减肥',
        btnName: ['取消', '确认'],
        tip: {
          type: 'agree',
          content: '不在显示',
          icon: 'icon-dui',
        },
      },
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
