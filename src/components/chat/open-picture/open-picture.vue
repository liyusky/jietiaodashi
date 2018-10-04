<template>
  <!-- s  -->
  <section class="open-picture bg-white">
    <div class="picture-title padding-horizontal-30"><span>图片</span></div>
    <div class="picture-switch padding-horizontal-30 border-bottom-1" @click="takePicture"><span>拍摄</span></div>
    <div class="picture-switch padding-horizontal-30" @click="selectPicture"><span>从手机相册选择</span></div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'OpenPictureComponent',
  data () {
    return {
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    takePicture () {
      this.$emit('TAKE_PICTURE_EVENT')
    },
    selectPicture () {
      this.$emit('SELECT_PICTURE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./open-picture.scss";
</style>
