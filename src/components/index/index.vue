<template>
  <!-- s  -->
  <section class="index">
    <TitleComponent :Title="Title" @BACK_EVENT="back" @OTHER_EVENT="otherBtn"></TitleComponent>
  </section>
  <!-- e  -->
</template>

<script>
import TitleComponent from '../../components/common/TitleComponent/TitleComponent.vue';

export default {
  name: 'IndexComponent',
  data() {
    return {
      Title: {
        contentText: '订单详情',
        leftText: '首页',
        rightText: '',
        icon: 'icon-tongxunlu',
        svg: '',
      },
    };
  },
  methods: {
    otherBtn() {
      console.log(1);
    },
    back() {
      this.$router.back(-1);
    },
  },
  components: {
    TitleComponent,
  },
};
</script>

<style lang="sass" scoped>
@import "./index.scss";
</style>
