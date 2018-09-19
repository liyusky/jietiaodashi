<template>
  <!-- s 运营商认证 -->
  <section class="operator-credit padding-top-126"></section>
  <!-- e 运营商认证 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'OperatorCreditComponent',
  data () {
    return {
      // start params
      'title': {
        contentText: '运营商认证'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    // start mutations
    
    // end mutations
  }
}
</script>

<style lang="sass" scoped>
@import "./operator-credit.scss";
</style>
