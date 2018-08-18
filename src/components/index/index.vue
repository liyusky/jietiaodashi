<template>
  <!-- s  -->
  <section class="index"></section>
  <!-- e  -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'IndexComponent',
  data () {
    return {
      // start params
      'tip': {
        type: 'default center',
        content: '传入文字消息',
        protocol: '协议名字',
        icon: '传入的iconfont名',
        svg: '传入借条tip的svg名',
        selected: 'false true',
        theme: 'blue red'
      },
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
    TipComponent,
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
