<template>
  <!-- s 转账记录 -->
  <section class="transfer-record padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="record-list" v-for="(item, index) in record" :key="index">
      <TipComponent class="list-time padding-left-30" v-if="item.type === 'time'" :tip="item.content"></TipComponent>
      <TipComponent class="list-balance bg-white padding-left-30 border-bottom-1" v-else-if="item.type === 'balance'" :tip="item.content"></TipComponent>
      <div class="list-detail padding-left-30 bg-white" v-else-if="item.type === 'detail'">
        <div class="detail-portrait border-bottom-1">
          <img class="border-circle" src="http://iph.href.lu/750x150">
        </div>
        <div class="detail-message padding-horizontal-30 border-bottom-1">
          <div class="message-title">
            <p class="font-33 color-black">转账-转给{{item.account}}</p>
            <p class="font-24 color-light-grey">{{item.money}}</p>
          </div>
          <div class="font-27 color-light-grey">{{item.time}}</div>
        </div>
      </div>
    </div>
  </section>
  <!-- e 转账记录 -->
</template>

<script>
// include dependence
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'TransferRecordComponent',
  data () {
    return {
      record: [
        {
          type: 'time',
          content: {
            type: 'default',
            content: '11月'
          }
        },
        {
          type: 'balance',
          content: {
            type: 'default',
            content: '支出129.00  收入0.00'
          }
        },
        {
          type: 'detail',
          account: '可可豆',
          money: '-150.00',
          time: '11月2日 15:38'
        },
        {
          type: 'detail',
          account: '可可豆',
          money: '-150.00',
          time: '11月2日 15:38'
        }
      ],
      // start params
      'title': {
        contentText: '转账记录'
      }
      // end params
    }
  },
  components: {
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./transfer-record.scss";
</style>
