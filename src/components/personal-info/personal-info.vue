<template>
  <!-- s  -->
  <section class="personal-info">
    <TitleComponent :title="title" @BACK_EVENT="back"></TitleComponent>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'PersonalInfoComponent',
  data () {
    return {
      // start params
      title: {
        contentText: '个人资料'
      }
      // end params
    }
  },
  components: {
    // include components
    TitleComponent
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./personal-info.scss";
</style>
