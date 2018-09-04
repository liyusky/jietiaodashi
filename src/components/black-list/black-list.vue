<template>
  <!-- s  -->
  <section class="black-list padding-top-126 bg-white">
    <TitleComponent :title="title"></TitleComponent>
    <div class="list-item padding-horizontal-30 border-bottom-1" v-for="(item, index) in blacklist" :key="index">
      <img class="item-portrait" src="">
      <div class="item-detail">
        <p class="font-30 color-black">张卡ad</p>
        <button class="detail-btn font-24 color-blue border-radius-12 bg-white" v-if="!item.remove">
          <div>解除黑名单</div>
        </button>
        <p class="font-27 color-light-grey" v-if="item.remove">已移出黑名单</p>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'BlackListComponent',
  data () {
    return {
      blacklist: [
        {
          remove: false
        },
        {
          remove: true
        }
      ],
      // start params
      'title': {
        contentText: '黑名单'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  }
}
</script>

<style lang="sass" scoped>
@import "./black-list.scss";
</style>
