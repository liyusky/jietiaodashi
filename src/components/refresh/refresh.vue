<template>
  <!-- s  -->
  <section class="refresh padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="refresh-content" id="refresh">
      <PullRefreshComponent :parent="refresh" :direction="'bottom'">
        <div class="content">
          <div class="content-item" v-for="(item, index) in 5" :key="index">
            <img src="../../assets/images/index-banner.gif">
          </div>
        </div>
      </PullRefreshComponent>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import PullRefreshComponent from '../../module/pull-refresh/pull-refresh.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'RefreshComponent',
  data () {
    return {
      // start params
      'pullRefresh': '',
      'title': {
        contentText: '下拉刷新'
      }
      // end params
    }
  },
  components: {
    PullRefreshComponent,
    TitleComponent
    // include components
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "./refresh.scss";
</style>
