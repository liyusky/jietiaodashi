<template>
  <!-- s  -->
  <section class="message font-30" :class="isMine ? 'text-right' : 'text-left'" v-html="setHtml()"></section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'MessageComponent',
  props: ['content', 'isMine'],
  data () {
    return {
    }
  },
  components: {
    // include components
  },
  // computed: {
  //   content (newValue) {
  //     this.setHtml()
  //   }
  // },
  methods: {
    setHtml () {
      let html = ''
      this.content.forEach(item => {
        if (item) {
          html += `<span>${item}</span>`
        } else {
          html += `<img src="${item}">`
        }
      })
      return html
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./message.scss";
</style>
