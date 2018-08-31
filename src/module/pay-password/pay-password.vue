<template>
  <!-- s  -->
  <section class="pay-password">
    <ul class="password-list">
      <li class="list-item font-60 bg-white" v-for="index in 6" :key="index">{{isNaN(payPassword[index - 1]) ? '' : '•'}}</li>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'PayPasswordComponent',
  props: ['payPassword']
}
</script>

<style lang="sass" scoped>
@import "./pay-password.scss";
</style>
