<template>
  <!-- s 借入 -->
  <section class="borrow-list padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <NavComponent class="list-nav font-30" :nav="nav"></NavComponent>
    <div class="list-board color-white padding-left-30">
      <div class="font-27">
        <span class="margin-top-21">当前金额（元）</span>
        <i class="iconfont icon-chuyin"></i>
      </div>
      <div class="font-72">51.9584.53</div>
      <div class="font-27">已付利息 1.5710.00元</div>
      <ImageBgComponent :imageBg="imageBg"></ImageBgComponent>
    </div>
  </section>
  <!-- e 借入 -->
</template>

<script>
// include dependence
import ImageBgComponent from '../../module/image-bg/image-bg.vue'
import NavComponent from '../../module/nav/nav.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BorrowListComponent',
  data () {
    return {
      // start params
      'imageBg': '',
      'nav': {
        content: ['当前', '已还清'],
        active: ''
      },
      'title': {
        contentText: '借入'
      }
      // end params
    }
  },
  components: {
    NavComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./borrow-list.scss";
</style>
