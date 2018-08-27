<template>
  <!-- s  -->
  <ul class="detail-list">
    <li class="list-item" v-for="(item, index) in detailList" :key="index">
      <div class="item-title padding-left-30" v-if="item.type == 'title'">{{item.content}}</div>
      <div class="item-default" v-else-if="item.type == 'default'">
        <p>{{item.key}}</p>
        <p>{{item.value}}</p>
      </div>
      <div class="item-total" v-else-if="item.type == 'total'">
        <div class="total-content">
          <div class="content-time font-30">{{item.time}}</div>
          <div class="content-balance color-light-grey font-24">
            <p class="balance-item margin-right-24">
              <span>支出</span>
              <span>¥{{item.pay}}</span>
            </p>
            <p class="balance-item">
              <span>收入</span>
              <span>¥{{item.income}}</span>
            </p>
          </div>
        </div>
        <i class="iconfont font-36" v-if="item.icon" :class="'icon-' + item.icon"></i>
      </div>
      <div class="item-double padding-left-30" v-else-if="item.type == 'double'">
        <div class="item-content border-bottom-1">
          <div class="content-tip">
            <p class="font-27">{{item.title}}</p>
            <p class="font-30">{{item.count}}</p>
          </div>
          <div class="content-tip color-light-grey font-24">
            <p>{{item.time}}</p>
            <p>{{item.remnant}}</p>
          </div>
        </div>
        <div class="item-icon border-bottom-1" v-if="item.icon">
          <i class="iconfont" :class="'icon-' + item.icon"></i>
        </div>
      </div>
    </li>
  </ul>
  <!-- e  -->
</template>

<script>
// detailList: {
//   type: 'default / double',
//   content: [ //default
//     {
//       key: '',
//       value: ''
//     }
//   ]
//   content: [ //double
//     [
//        {
//          key: '',
//          value: ''
//        }
//     ]
//     {
//       key: '',
//       value: ''
//     }
//   ]
// }
export default {
  name: 'DetailListComponent',
  props: ['detailList']
}
</script>

<style lang="sass" scoped>
@import "./detail-list.scss";
</style>
