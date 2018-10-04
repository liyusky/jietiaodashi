<template>
  <!-- s 视频通话 -->
  <section class="call">
    <div class="call-video border-bottom-1 bg-white" @click="videoCall">
      <i class="iconfont icon-video color-light-grey font-48"></i>
      <span class="color-black font-33">视频通话</span>
    </div>
    <div class="call-voice bg-white" @click="voiceCall">
      <i class="iconfont icon-phone1 color-light-grey font-48"></i>
      <span class="color-black font-33">语音通话</span>
    </div>
    <div class="call-cancel bg-white" @click="cancel"><span>取消</span></div>
  </section>
  <!-- e 视频通话 -->
</template>

<script>
// include dependence
export default {
  name: 'VideoCallComponent',
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
    videoCall () {
      this.$emit('VIDEO_CALL_EVENT')
    },
    voiceCall () {
      this.$emit('VOICE_CALL_EVENT')
    },
    cancel () {
      this.$emit('CANCEL_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./call.scss";
</style>
