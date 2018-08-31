<template>
  <!-- s  -->
  <section class="cancel-account">
    <TitleComponent :title="title"></TitleComponent>
    <WorkCardComponent :workCard="workCard"></WorkCardComponent>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
import WorkCardComponent from '../../module/work-card/work-card.vue'
export default {
  name: 'CancelAccountComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '销账'
      },
      'workCard': {
        portrait: '头像地址',
        name: '姓名',
        money: '名字'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    WorkCardComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./cancel-account.scss";
</style>
