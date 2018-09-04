<template>
  <!-- s 失信查询 -->
  <section class="credit-query padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <BoardComponent class="query-board bg-white border-bottom-1" :board="board">
      <img src="https://api.vtrois.com/image/750x300/ff8d7b">
      <h3 class="font-36 color-deep-black">今日有信，明日受用</h3>
    </BoardComponent>
    <InputsComponent class="query-input padding-horizontal-30 font-30" :inputs="inputs"></InputsComponent>
    <ButtonComponent class="query-button padding-horizontal-30" :button="button"></ButtonComponent>
  </section>
  <!-- e 失信查询 -->
</template>

<script>
// include dependence
import BoardComponent from '../../module/board/board.vue'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditQueryComponent',
  data () {
    return {
      // start params
      'board': 'center',
      'button': {
        default: [{
          type: 'primary',
          text: '立即查询'
        }]
      },
      'inputs': {
        type: 'default',
        placeholder: '输入查询对象的账号/身份证号'
      },
      'title': {
        contentText: '失信查询'
      }
      // end params
    }
  },
  components: {
    BoardComponent,
    ButtonComponent,
    InputsComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-query.scss";
</style>
