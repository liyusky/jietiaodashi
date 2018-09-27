<template>
  <!-- s  -->
  <section class="iou-sort" @click="closeModal">
    <div class="sort-content">
      <div class="content-item padding-horizontal-30 bg-white border-bottom-1" v-for="(item, index) in sortList" :key="index" @click.stop="selectSort(index)">
        <span class="font-27 color-black">{{item}}</span>
        <i class="iconfont icon-yes color-blue" v-if="isIndex === index"></i>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'IouSortComponent',
  data () {
    return {
      isIndex: 0,
      sortList: ['放款时间降序', '还款期从近到远', '还款期从远到近', '期限从短到长 ', '期限从长到短']
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    selectSort (index) {
      this.isIndex = index
      this.$emit('SORT_EVENT', index)
    },
    closeModal () {
      this.$emit('CLOSE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-sort.scss";
</style>
