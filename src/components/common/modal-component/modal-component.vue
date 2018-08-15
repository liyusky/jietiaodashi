<template>
  <!-- s  -->
  <section class="ModalComponent">
    <div class="ModalComponent-default">
      <div class="default-title">
        <p>温馨提示</p>
      </div>
      <div class="default-content">
        <p>封建礼教房间安静法兰克肌肤解放军按时交房案件房间安静静安枫景阿里将了</p>
      </div>
      <div class="default-button">
        <ButtonComponent :button="button"></ButtonComponent>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import ButtonComponent from '../button-component/button-component.vue'
export default {
  name: 'ModalComponent',
  data() {
    return {
      button: {
        type: 'full',
        content: ['我知道了'],
      },
    };
  },
  components: {
    ButtonComponent,
  }
};
</script>

<style lang="sass" scoped>
@import "./modal-component.scss";
</style>
