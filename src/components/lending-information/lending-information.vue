<template>
  <!-- s 出借信息 -->
  <section class="lending-information">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-content margin-top-30 chamfer">
      <TipComponent class="content-tip bg-grey border-radius-top-12" :tip="tip"></TipComponent>
      <div class="content-work-crad bg-white padding-horizontal-24">
        <WorkCardComponent class="border-bottom-1" :workCard="workCard"></WorkCardComponent>
      </div>
      <DetailListComponent class="content-detail-list bg-white padding-horizontal-24 font-27" :detailList="detailList"></DetailListComponent>
      <ButtonComponent class="content-button border-radius-bottom-12 bg-white padding-horizontal-24" :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 出借信息 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
import WorkCardComponent from '../../module/work-card/work-card.vue'
export default {
  name: 'LendingInformationComponent',
  data () {
    return {
      // start params
      'button': {
        default: [
          {
            type: 'primary',
            text: '展期'
          },
          {
            type: 'default',
            text: '销账'
          }
        ]
      },
      'detailList': [
        {
          type: 'default',
          key: '本金：',
          value: '0元'
        },
        {
          type: 'default',
          key: '年利率：',
          value: '10%'
        },
        {
          type: 'default',
          key: '借款日：',
          value: '2017-06-18'
        },
        {
          type: 'default',
          key: '到期日：',
          value: '2017-07-18'
        },
        {
          type: 'default',
          key: '其他费用：',
          value: '50元'
        }
      ],
      'tip': {
        type: 'center',
        content: '还有7天到期',
        icon: 'chuyin'
      },
      'title': {
        contentText: '出借信息'
      },
      'workCard': {
        portrait: '头像地址',
        name: '李艳霞',
        money: '1500.00',
        tip: '对方还款后，资金自动转入您的余额'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    DetailListComponent,
    TipComponent,
    TitleComponent,
    WorkCardComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./lending-information.scss";
</style>
