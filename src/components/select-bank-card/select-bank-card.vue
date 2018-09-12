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
import { mapMutations } from 'vuex'
import Router from '../../class/Router.class.js'
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
          svg: 'chuyin',
          key: '中国工商银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '农业银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '中国银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '建设银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '交通银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '中信银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '光大银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '华夏银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '邮政储蓄',
          target: ''
        }, {
          svg: 'chuyin',
          key: '恒丰银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '农村合作社',
          target: ''
        }, {
          svg: 'chuyin',
          key: '徽商银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '浦发银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '兴业银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '招商银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '平安股份有限公司',
          target: ''
        }, {
          svg: 'chuyin',
          key: '广东发展银行',
          target: ''
        }, {
          svg: 'chuyin',
          key: '民生银行',
          target: ''
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
  methods: {
    selectBankCard (item, index) {
      this.saveBankCard(item)
      Router.push('bind-bank-card')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./select-bank-card.scss";
</style>
