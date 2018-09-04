<template>
  <!-- s 查询结果 -->
  <section class="credit-query-result padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="result-content margin-top-30 chamfer">
      <TipComponent class="content-tip bg-grey border-radius-top-12" :tip="tip"></TipComponent>
      <BoardComponent class="content-board bg-white border-bottom-1 font-30" :board="board">
        <img class="border-radius-12" src="https://api.vtrois.com/image/90x90/ff8d7b">
        <div class="board-message color-light-grey">
          <p class="color-black">
            <span>李艳霞当前有超过</span>
            <span class="color-red">45</span>
            <span>天的逾期</span>
          </p>
          <p>手机号：158****2555</p>
          <p>身份证号：340824199888658956</p>
        </div>
      </BoardComponent>
      <DetailListComponent class="content-detail-list bg-white font-30 border-bottom-1" :detailList="detailList"></DetailListComponent>
      <div class="content-note color-deep-grey font-24 bg-white border-radius-bottom-12">
        <h3 class="color-black font-27">违约上传后果</h3>
        <p>
          <span class="color-black">买房买车难：</span>
          <span>难以在银行、小额贷款公司等金融机构申请房贷车贷。</span>
        </p>
        <p>
          <span class="color-black">信用消费难：</span>
          <span>违约记录同步各家银行，从此再难办理信用卡。</span>
        </p>
        <p>
          <span class="color-black">开办公司难：</span>
          <span>开办企业难以从银行获批贷款，业务开展障碍重重。</span>
        </p>
        <p>
          <span class="color-black">污点洗白难：</span>
          <span>征信信息全网发布，一经上传难以消除。</span>
        </p>
      </div>
    </div>
  </section>
  <!-- e 查询结果 -->
</template>

<script>
// include dependence
import BoardComponent from '../../module/board/board.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditQueryResultComponent',
  data () {
    return {
      // start params
      'board': 'center',
      'detailList': [
        {
          type: 'default',
          key: '总逾期笔数',
          value: '10笔'
        },
        {
          type: 'default',
          key: '总逾期金额',
          value: '8848.00元'
        },
        {
          type: 'default',
          key: '最长逾期天数',
          value: '58天'
        }
      ],
      'tip': {
        type: 'center',
        content: '查询结果'
      },
      'title': {
        contentText: '查询结果'
      }
      // end params
    }
  },
  components: {
    BoardComponent,
    DetailListComponent,
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-query-result.scss";
</style>
