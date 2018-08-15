<template>
  <!-- s  -->
  <ul class="detail-list">
    <li class="list-item-default" v-if="detail.type == 'default'" v-for="(item, index) in detail.content" :key="index">
      <p>{{item.key}}</p>
      <p>{{item.value}}</p>
    </li>
    <li class="list-item-double" v-if="detail.type == 'double'" v-for="(item, index) in detail.content" :key="index">
      <ul class="item-content">
        <li class="content-tip" v-for="(unit, index) in item" :key="index">
          <p>{{unit.key}}</p>
          <p>{{unit.value}}</p>
        </li>
      </ul>
      <div class="item-icon">
        <i class="iconfont"></i>
      </div>
    </li>
  </ul>
  <!-- e  -->
</template>

<script>
export default {
  name: 'DetailListComponent',
  props: ['detail'],
  data () {
    return {
      detail: {
        type: 'default/double',
        content: [
          {
            key: '',
            value: ''
          }
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./detail-list.scss";
</style>
