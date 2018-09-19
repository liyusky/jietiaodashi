<template>
  <!-- s  -->
  <section class="zhima-credit padding-top-126">
    <iframe :src="url"></iframe>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
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
