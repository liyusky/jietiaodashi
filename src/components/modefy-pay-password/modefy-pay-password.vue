<template>
  <!-- s 修改支付密码 -->
  <section class="modefy-pay-password"></section>
  <!-- e 修改支付密码 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ModefyPayPasswordComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '中间内容',
        leftText: '左边箭头后文字',
        rightText: '右边文字内容',
        icon: '右边icon',
        svg: '右边svg'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./modefy-pay-password.scss";
</style>
