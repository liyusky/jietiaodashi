<template>
  <!-- s 展期状态 -->
  <section class="exhibition-status bg-white padding-top-126 padding-horizontal-30">
    <TitleComponent :title="title"></TitleComponent>
    <div class="status-tip border-bottom-1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cong"></use>
      </svg>
      <p class="tip-text font-27 padding-horizontal-21">您的10.02元待还款可展期到2017年12月28日，生效后展期期间将按年利率1%计算利息</p>
    </div>
    <div class="status-detail-list bg-white border-bottom-1">
      <DetailListComponent :detailList="detailList"></DetailListComponent>
    </div>
    <div class="status-button">
      <ButtonComponent :button="button"></ButtonComponent>
    </div>
  </section>
  <!-- e 展期状态 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ExhibitionStatusComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '确认'
        }]
      },
      'detailList': [
        {
          type: 'default',
          key: '展期日期',
          value: '2017年12月14日'
        },
        {
          type: 'default',
          key: '展期利率',
          value: '10%'
        }
      ],
      'title': {
        contentText: '展期状态'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    ButtonComponent,
    DetailListComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    switchToggle () {
      this.switchShow = !this.switchShow
    },
    init () {
      Http.send({
        url: 'DelayDetail',
        data: {
          token: Storage.token,
          id: Storage.id
        }
      }).success(data => {
        this.detailList[0].value = data.DelayDate
        this.detailList[1].value = data.YearRate
        this.detailList[2].value = data.AmountReturned
        this.detailList[3].value = data.CreateTime
      }).fail(data => {
      })
    },
    submit () {
      Http.send({
        url: 'ConfirmDelay',
        data: {
          token: Storage.token,
          id: Storage.id,
          state: '1、确认，2、拒绝'
        }
      }).success(data => {
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibition-status.scss";
</style>
