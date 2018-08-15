<template>
  <!-- s  -->
  <section class="ButtonComponent">
    <button class="ButtonComponent-default" v-if="button.type === 'default'" @click="defaultSubmit"><div>{{button.content[0]}}</div></button>
    <button class="ButtonComponent-full" v-if="button.type === 'full'" @click="fullSubmit"><div>{{button.content[0]}}</div></button>
    <button class="ButtonComponent-default-inverse" v-if="button.type === 'inverse'" @click="inverseSubmit"><div>{{button.content[0]}}</div></button>
    <div class="ButtonComponent-group" v-if="button.type === 'group'">
      <button class="group-left" @click="leftSubmit"><div>{{button.content[0]}}</div></button>
      <button class="group-right" @click="rightSubmit"><div>{{button.content[1]}}</div></button>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'ButtonComponentComponent',
  props: ['button'],
  data() {
    return {};
  },
  methods: {
    defaultSubmit() {
      this.$emit('DEFAULT_SUBMIT_EVENT');
    },
    fullSubmit() {
      this.$emit('FULL_SUBMIT_EVENT');
    },
    inverseSubmit() {
      this.$emit('INVERSE_SUBMIT_EVENT');
    },
    leftSubmit() {
      this.$emit('LEFT_SUBMIT_EVENT');
    },
    rightSubmit() {
      this.$emit('RIGHT_SUBMIT_EVENT');
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./button-component.scss";
</style>
