<template>
  <!-- s 催收详情 -->
  <section class="collection-detail padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="detail-hint bg-white">
      <div class="hint-user border-bottom-1">
        <div class="user-img">
          <img src="http://iph.href.lu/120x150">
        </div>
        <div class="user-info font-27 color-black">
          <p class="info-loan "><span></span><span>{{operation}}</span></p>
          <p class="info-sign"><span>{{name}}</span><i class="iconfont icon-cong font-30 color-blue"></i></p>
        </div>
        <div class="user-tip">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cong"></use>
          </svg>
          <p class="font-24 color-black">{{state}}{{overdueDay}}</p>
        </div>
      </div>
    </div>
    <DetailListComponent class="detail-list bg-white padding-horizontal-30 font-27" :detailList="detailList"></DetailListComponent>
    <div class="detail-progress bg-white">
      <div class="progress-title padding-horizontal-30 border-bottom-1">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cong"></use>
        </svg>
        <p class="font-27 color-black">平台电话催收中</p>
      </div>
      <div class="progress-item border-bottom-1" v-for="(item, index) in collectionProgress" :key="index">
        <div class="item-status">
          <div class="status-badge" :class="{'status-active': index === 0}"></div>
        </div>
        <div class="item-detail">
          <div class="detail-time">
            <p class="time font-33">{{item.CreateTime}}</p>
            <div class="time-badge"><span class="font-21">平台</span></div>
          </div>
          <p class="detail-remark font-27">{{item.TypeName}}</p>
          <p class="detail-text font-27 color-black">{{item.Remark}}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- e 催收详情 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Stata from '../../class/Stata.Collection.js'
import Storage from '../../class/Storage.class.js'
import DetailListComponent from '../../module/detail-list/detail-list.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CollectionDetailComponent',
  data () {
    return {
      operation: '',
      name: '',
      state: '',
      overdueDay: '',
      collectionProgress: [],
      // start params
      'detailList': [
        {
          type: 'default',
          key: '催收金额',
          value: ''
        }, {
          type: 'default',
          key: '打赏比例',
          value: ''
        }, {
          type: 'default',
          key: '到期时间',
          value: ''
        }
      ],
      'title': {
        contentText: '催收详情'
      }
      // end params
    }
  },
  components: {
    DetailListComponent,
    TitleComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'LoanCollectionProgress',
        data: {
          token: Storage.token,
          id: Storage.id,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
      }).fail(data => {
      })
    },
    formatData (data) {
      this.name = data.TargetName
      this.operation = data.Operation
      this.state = Stata[data.Stata]
      // this.overdueDay = data.OverdueDay ? data.OverdueDay + '天' : ''
      this.detailList[0].value = data.Amount + '元'
      this.detailList[1].value = data.Scale + '%'
      this.detailList[2].value = data.ExpireDate
      this.collectionProgress = data.CollectionProgress
      this.accId = data.Accid
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./collection-detail.scss";
</style>
