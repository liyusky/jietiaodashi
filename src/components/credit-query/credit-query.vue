<template>
  <!-- s 失信查询 -->
  <section class="credit-query padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <BoardComponent class="query-board bg-white border-bottom-1" :board="board">
      <img src="../../assets/images/query.png">
      <h3 class="font-36 color-deep-black">今日有信，明日受用</h3>
    </BoardComponent>
    <InputsComponent class="query-input padding-horizontal-30 font-30" :inputs="inputs" @GET_INPUT_TEXT_EVENT="getInputText"></InputsComponent>
    <div class="query-button">
      <ButtonComponent class=" padding-horizontal-30" :button="button" @SUBMIT_EVENT="getCredit"></ButtonComponent>
    </div>
  </section>
  <!-- e 失信查询 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import BoardComponent from '../../module/board/board.vue'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditQueryComponent',
  data () {
    return {
      credit: '',
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
  },
  methods: {
    getCredit () {
      if (!this.credit) return
      Http.send({
        url: 'DiscreditQuery',
        data: {
          token: Storage.token,
          key: this.credit
        }
      }).success(data => {
        console.log(data)
        Storage.credtiQuery = data
        Router.push('credit-query-result')
      }).fail(data => {
      })
    },
    getInputText (text) {
      this.credit = text
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-query.scss";
</style>
