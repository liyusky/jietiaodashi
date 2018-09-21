<template>
  <!-- s 选择所属银行 -->
  <section class="select-bank-card padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="card-tip padding-left-30" :tip="tip"></TipComponent>
    <div class="card-billboard padding-left-30 bg-white " v-for="(item, index) in billboard" :key="index" @click="selectBankCard(item, index)">
      <BillboardComponent class="billboard-item font-33 border-bottom-1 color-black padding-right-30 " :billboard="item" ></BillboardComponent>
    </div>
  </section>
  <!-- e 选择所属银行 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import BillboardComponent from '../../module/billboard/billboard.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'SelectBankCardComponent',
  data () {
    return {
      // start params
      'billboard': [
        {
          svg: 'gongshangyinhang',
          key: '中国工商银行',
          target: '0102'
        }, {
          svg: 'nongyeyinhang',
          key: '中国农业银行',
          target: '0103'
        }, {
          svg: 'zhongguoyinhang',
          key: '中国银行',
          target: '0104'
        }, {
          svg: 'jiansheyinhang',
          key: '中国建设银行',
          target: '0105'
        }, {
          svg: 'jiaotongyinhang',
          key: '交通银行',
          target: '0301'
        }, {
          svg: 'zhongxinyinhang',
          key: '中信银行',
          target: '0302'
        }, {
          svg: 'guangdayinhang',
          key: '中国光大银行',
          target: '0303'
        }, {
          svg: 'huaxiayinhang',
          key: '华夏银行',
          target: '0304'
        }, {
          svg: 'youchuyinhang',
          key: '邮政储蓄',
          target: '0403'
        }, {
          svg: 'xingyeyinhang',
          key: '兴业银行',
          target: '0309'
        }, {
          svg: 'zhaoshangyinhang',
          key: '招商银行',
          target: '0308'
        }, {
          svg: 'pinganyinhang',
          key: '平安银行股份有限公司',
          target: '0307  '
        }, {
          svg: 'guangdongfazhanyinhang',
          key: '广东发展银行',
          target: '0306'
        }, {
          svg: 'yinhang-shanghaipudongfazhan-',
          key: '上海浦东发展银行',
          target: '0310'
        }, {
          svg: 'zhongguominshengyinhang',
          key: '中国民生银行',
          target: '0305'
        }
      ],
      'tip': {
        type: 'default',
        content: '常用'
      },
      'title': {
        contentText: '选择所属银行'
      }
      // end params
    }
  },
  components: {
    BillboardComponent,
    TipComponent,
    TitleComponent
    // include components
  },
  created () {
    Storage.bank = null
  },
  methods: {
    selectBankCard (item, index) {
      Storage.bank = item
      Router.push('bind-bank-card')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./select-bank-card.scss";
</style>
