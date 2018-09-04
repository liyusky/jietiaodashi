<template>
  <!-- s 收还款计划 -->
  <section class="account-statistic padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <ul class="statistic-list font-30 bg-white">
      <li class="list-title color-deep-grey border-bottom-1 padding-horizontal-30">
        <div>日期</div>
        <div>还款</div>
        <div>收款</div>
      </li>
      <li class="list-item color-deep-black border-bottom-1 padding-horizontal-30" v-for="(item, index) in statistic" :key="index">
        <div>{{item.time}}</div>
        <div>{{item.pay}}</div>
        <div>{{item.receive}}</div>
      </li>
    </ul>
    <div class="statistic-count padding-horizontal-30 font-30 color-deep-black bg-white">
      <div>合计</div>
      <div>
        <p>1254.3万</p>
      </div>
      <div>154.3万</div>
    </div>
  </section>
  <!-- e 收还款计划 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AccountStatisticComponent',
  data () {
    return {
      statistic: [
        {
          time: '今天',
          pay: '100',
          receive: '1000'
        }
      ],
      // start params
      'title': {
        contentText: '收还款'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./account-statistic.scss";
</style>
