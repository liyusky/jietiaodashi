<template>
  <!-- s 借款用途 -->
  <section class="purpose padding-top-126">
     <TitleComponent :title="title" @OTHER_EVENT="switchPurpose" @BACK_EVENT="back"></TitleComponent>
      <p class="purpose-title">借款用途</p>
      <div class="purpose-option">
        <div class="option-itme" :class="{active: setPurposeIndex === index}" v-for="(item, index) in optionList" :key="index" @click="setPurpose(index)">{{item}}</div>
      </div>
      <div class="purpose-detail">
        <textarea name="detail" v-model="opinion" maxlength="200" placeholder="建议详细描述周转详情：如所借资金周转去向，以及资金流转的方向和还款计划等"></textarea>
        <div class="detail-num">{{opinion.length}}/200</div>
      </div>
      <div class="purpose-upload">
        <div class="upload-photo">
          <div class="photo-add" v-if="!imgArr.length" @click="getImg">
            <i class="iconfont icon-cong"></i>
          </div>
          <div class="photo-default" v-if="imgArr.length" v-for="(item, index) in imgArr" :key="index">
            <img src="">
          </div>
        </div>
        <p class="upload-suggest">建议附加内容，户口本，学历证明，工资单，社保信息，营业执照，房产证明...</p>
      </div>
  </section>
  <!-- e 借款用途 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'PurposeComponent',
  data () {
    return {
      optionList: ['临时周转', '个体经营', '消费', '旅游', '装修', '教育', '结婚', '学习', '出行'],
      opinion: '',
      setPurposeIndex: 0,
      imgArr: [],
      // start params
      'title': {
        contentText: '借款用途',
        rightText: '保存'
      }
      // end params
    }
  },
  created () {
    Storage.purpose = null
  },
  methods: {
    getImg () {},
    setPurpose (index) {
      this.setPurposeIndex = index
    },
    switchPurpose () {
      if (!this.opinion) {
        alert('请输入借款用途详情')
        return
      }
      Storage.purpose = this.optionList[this.setPurposeIndex]
      Storage.opinion = this.opinion
      this.$router.push({
        name: 'wanna-borrow'
      })
      // Router.push('wanna-borrow')
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./purpose.scss";
</style>
