<template>
  <!-- s 借出 -->
  <section class="lend-list padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <NavComponent class="list-nav font-30 bg-white" :nav="nav"></NavComponent>
    <BoardComponent class="list-board color-white padding-left-30">
      <div class="board-tip font-27">
        <p class="margin-right-15">当前金额（元）</p>
        <i class="iconfont icon-chuyin font-39"></i>
      </div>
      <div class="font-72">51.9584.53</div>
      <div class="font-27">应付利息 0元</div>
      <ImageBgComponent :imageBg="imageBg"></ImageBgComponent>
    </BoardComponent>
    <ReceiptComponent :receipt="item" v-for="(item, index) in receipt" :key="index"></ReceiptComponent>
  </section>
  <!-- e 借出 -->
</template>

<script>
// include dependence
import BoardComponent from '../../module/board/board.vue'
import ImageBgComponent from '../../module/image-bg/image-bg.vue'
import NavComponent from '../../module/nav/nav.vue'
import ReceiptComponent from '../../module/receipt/receipt.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'LendListComponent',
  data () {
    return {
      // start params
      'imageBg': 'https://api.vtrois.com/image/750x300/ff8d7b',
      'nav': {
        content: ['当前', '已收回'],
        active: ''
      },
      'receipt': [{
        name: '幸福不会远',
        type: '借出',
        portrait: 'https://api.vtrois.com/image/81/fff7db/e62991',
        rate: '0',
        start: '2017-11-30',
        end: '2017-12-01',
        money: '200',
        status: '已受理'
      }],
      'title': {
        contentText: '借出'
      }
      // end params
    }
  },
  components: {
    BoardComponent,
    ImageBgComponent,
    NavComponent,
    ReceiptComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./lend-list.scss";
</style>
