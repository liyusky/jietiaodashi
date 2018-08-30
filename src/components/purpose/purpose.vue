<template>
  <!-- s  -->
  <section class="purpose">
     <TitlteComponent :title="title" @OTHER_EVENT="savePurpose" @BACK_EVENT="back"></TitlteComponent>
      <p class="purpose-title">借款用途</p>
      <div class="purpose-option">
        <div class="option-itme" :class="{active: setPurposeIndex === index}" v-for="(item, index) in optionList" :key="index" @click="setPurpose(index, item)">{{item}}</div>
      </div>
      <div class="purpose-detail">
        <textarea name="detail" v-model="textareaNum" maxlength="200" placeholder="建议详细描述周转详情：如所借资金周转去向，以及资金流转的方向和还款计划等"></textarea>
        <div class="detail-num">{{textareaNum.length}}/200</div>
      </div>
      <div class="purpose-upload">
        <div class="upload-photo">
          <div class="photo-add" v-if="!imgArr.length" @click="getImg">
            <i class="iconfont icon-cong"></i>
          </div>
          <div class="photo-default" v-if="imgArr.length" v-for="(item, index) in imgArr" :key="index">
            <img src="../../../assets/images/index-banner.gif">
          </div>
        </div>
        <p class="upload-suggest">建议附加内容，户口本，学历证明，工资单，社保信息，营业执照，房产证明...</p>
      </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'PurposeComponent',
  data () {
    return {
      // start params
      // end params
    }
  },
  created () {},
  methods: {
    getImg () {},
    setPurpose (index, item) {
      this.purposeText = item
      this.setPurposeIndex = index
    },
    savePurpose () {
      this.$emit('SAVE_PURPOSE_EVENT', this.purposeText)
    },
    back () {
      this.$emit('BACK_EVENT')
    }
  },
  components: {
    // include components
    TitlteComponent
  }
}
</script>

<style lang="sass" scoped>
@import "./purpose.scss";
</style>
