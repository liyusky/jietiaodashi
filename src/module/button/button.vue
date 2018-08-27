<template>
  <!-- s  -->
  <section class="button" :class="button.type">
    <div class="button-group" v-if="button.group">
      <button :class="item.class" v-for="(item, index) in button.group" :key="index">
        <div>{{item.text}}</div>
      </button>
    </div>
    <button v-if="button.default" :class="button.default.type">
      <div class="button-content">{{button.default.text}}</div>
    </button>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['button'],
  data () {
    return {}
  },
  methods: {
    firstSubmit () {
      this.$emit('FIRST_SUBMIT_EVENT')
    },
    secondSubmit () {
      this.$emit('SECOND_SUBMIT_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./button.scss";
</style>
