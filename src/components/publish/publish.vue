<template>
  <!-- s 借条发布期 -->
  <section class="publish">
    <TitleComponent :title="title" @OTHER_EVENT="savePublish" @BACK_EVENT="back"></TitleComponent>
      <div class="publish-form">
       <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong"></i>
          <span>借条发布期</span>
        </div>
        <div class="item-default">
          <input type="text" v-model="publishData" :placeholder="placeholder">
          <span>天</span>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <span>自动续借</span>
          <i class="iconfont icon-cong"></i>
        </div>
        <div class="item-switch" :class="{'switch-active': switchShow}" @click="switchToggle">
          <div class="switch-btn"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- e 借条发布期 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'PurposeComponent',
  data () {
    return {
      publishData: '',
      placeholder: '20',
      switchShow: false,
      // start params
      'title': {
        contentText: '借条发布期'
      }
      // end params
    }
  },
  created () {},
  methods: {
    switchToggle () {
      this.switchShow = !this.switchShow
      // this.$emit('SWITCH_TOGGLE_EVENT', this.switchShow)
    },
    savePublish () {
      this.publishData = this.publishData ? this.publishData : this.placeholder
      // this.$emit('SAVE_PUBLISH_EVENT', this.publishData, this.switchShow)
      this.publishData = ''
    },
    back () {
      // this.$emit('BACK_EVENT')
      this.$router.push({
        name: 'borrow'
      })
      this.publishData = ''
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./publish.scss";
</style>
