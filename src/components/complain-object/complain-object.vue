<template>
  <!-- s 选择投诉对象 -->
  <section class="complain-object padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
  </section>
  <!-- e 选择投诉对象 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ComplainObjectComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '选择投诉对象'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "./complain-object.scss";
</style>
