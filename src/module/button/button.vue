<template>
  <!-- s  -->
  <section class="button" :class="button.type">
    <div class="button-group" v-if="button.group">
      <button :class="button.group[0].class" @click="left">
        <div>{{button.group[0].text}}</div>
      </button>
      <div class="group-interval"></div>
      <button :class="button.group[1].class" @click="right">
        <div>{{button.group[1].text}}</div>
      </button>
    </div>
    <button v-if="button.default" :class="item.type" v-for="(item, index) in button.default" :key="index" @click="submit(index)">
      <div class="button-content">{{item.text}}</div>
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
    submit (index) {
      this.$emit('SUBMIT_EVENT', index)
    },
    left () {
      this.$emit('LEFT_EVENT')
    },
    right () {
      this.$emit('RIGHT_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./button.scss";
</style>
