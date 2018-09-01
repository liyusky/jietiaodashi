<template>
  <!-- s 立即还款 -->
  <section class="Immediate-repayment"></section>
  <!-- e 立即还款 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ImmediateRepaymentComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '立即还款'
        }]
      },
      'tip': {
        type: 'default',
        content: '已阅读并同意相关协议'
      },
      'title': {
        contentText: '立即还款'
      }
      // end params
    }
  },
  components: {
    ButtonComponent,
    InputsComponent,
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./Immediate-repayment.scss";
</style>
