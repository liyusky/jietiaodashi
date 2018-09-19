<template>
  <!-- s 芝麻认证 -->
  <section class="zhima-credit padding-top-126">
    <iframe :src="url"></iframe>
  </section>
  <!-- e 芝麻认证 -->
</template>

<script>
// include dependence
import Http from '../../class/Http.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ZhimaCreditComponent',
  data () {
    return {
      url: '',
    }
  },
  components: {
    // include components
  },
  methods: {
    init () {
      Http.send({
        url: 'TransferALL',
        data: {
          token: Storage.token,
          phone: Storage.phone,
          id: Storage.oid
        }
      }).success(data => {
        this.formatData(data)
      }).fail(data => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./zhima-credit.scss";
</style>
