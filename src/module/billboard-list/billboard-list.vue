<template>
  <!-- s 指示栏 -->
  <ul class="billboard-list">
    <li class="list-item" v-for="(item, index) in billboardList" :key="index" @click="operation(item)">
      <div class="item-icon" v-if="item.svg">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#icon-' + item.svg"></use>
        </svg>
      </div>
      <div class="item-content">
        <div class="item-key color-deep-black">{{item.key}}</div>
        <div class="item-value">
          <p v-if="item.value">{{item.value}}</p>
          <i class="iconfont color-grey" v-if="item.icon" :class="'icon-' + item.icon"></i>
        </div>
      </div>
    </li>
  </ul>
  <!-- e 指示栏 -->
</template>

<script>
// billboardList: [
//   {
//     type: 'guide',
//     svg: '',
//     key: '',
//     value: '',
//     icon: '',
//     target
//   }
// ]
export default {
  name: 'BillboardListComponent',
  props: ['billboardList'],

  methods: {
    operation (item) {
      this.$emit('OPERATION_EVENT', item.target)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./billboard-list.scss";
</style>
