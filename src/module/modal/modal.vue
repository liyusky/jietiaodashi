<template>
  <!-- s  -->
  <section class="modal">
    <div class="modal-bg" @click="close"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'ModalComponent',
  methods: {
    close () {
      this.$emit('CLOSE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./modal.scss";
</style>
