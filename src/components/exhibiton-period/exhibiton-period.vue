<template>
  <!-- s 展期 -->
  <section class="exhibiton-period">
    <TitleComponent :title="title"></TitleComponent>
  </section>
  <!-- e 展期 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ExhibitonPeriodComponent',
  data () {
    return {
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '同意展期'
        }]
      },
      'tip': {
        type: 'default',
        content: '同意相关协议',
        icon: 'cong',
        selected: 'true'
      },
      'title': {
        contentText: '展期'
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
@import "./exhibiton-period.scss";
</style>
