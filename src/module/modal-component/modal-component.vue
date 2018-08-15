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
      <div class="default-button" @click="modalDefault">知道了</div>
    </div>
    <div class="ModalComponent-group">
      <div class="group-title">
        <p>温馨提示</p>
      </div>
      <div class="group-content">
        <p>封建礼教房间安静法兰克肌肤解放军按时交房案件房间安静静安枫景阿里将了</p>
      </div>
      <div class="group-button">
        <div class="button-left">知道了</div>
        <div class="button-right">知道了</div>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import ButtonComponent from '../button-component/button-component.vue';

export default {
  name: 'ModalComponent',
  props: ['modal'],
  data() {
    return { };
  },
  methods: {
    modalDefault() {
      this.$emit('MODAL_DEFAULT_EVENT');
    },
  },
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="sass" scoped>
@import "./modal-component.scss";
</style>
