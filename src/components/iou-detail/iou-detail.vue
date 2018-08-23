<template>
  <!-- s  -->
  <section class="iou-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-content padding-horizontal-24">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IouDetailComponent',
  data () {
    return {
      // start params
      'button': {
        default: {
          type: 'default',
          text: '销账'
        },
        group: [
          {
            text: '同意',
            class: 'primary'
          },
          {
            text: '拒绝',
            class: 'danger'
          }
        ]
      },
      'detailList': [
        {
          type: 'total',
          time: '2012-11-11',
          pay: '11111',
          income: '22222',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }
      ],
      'title': {
        contentText: '欠条详情'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    DetailListComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-detail.scss";
</style>
