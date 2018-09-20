<template>
  <!-- s 选择投诉对象 -->
  <section class="complain-object">
    <TitleComponent :title="title"></TitleComponent>
    <div class="object-content padding-horizontal-30 bg-white" v-if="complainObjectList.length">
      <div class="content-item border-bottom-1" v-for="(item, index) in complainObjectList" :key="index" @click="selectComplainObject(item)">
        <div class="item-portrait">
          <img src="http://iph.href.lu/87x87">
        </div>
        <div class="item-detail padding-horizontal-30">
          <p class="font-30 color-black">{{item.name}}</p>
          <p class="font-27 color-deep-grey"><span>借条ID：</span><span>{{item.phone}}</span></p>
        </div>
      </div>
    </div>
    <WithoutComponent v-if="!complainObjectList.length"></WithoutComponent>
  </section>
  <!-- e 选择投诉对象 -->
</template>

<script>
// include dependence
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
import WithoutComponent from '../../module/without/without.vue'
export default {
  name: 'ComplainObjectComponent',
  data () {
    return {
      complainObjectList: [
        {
          imgUrl: '../../assets/images/master.png',
          name: '借条大师助手',
          phone: '17732651546'
        },
        {
          imgUrl: '../../assets/images/master.png',
          name: '17730127131',
          phone: '17730127131'
        }
      ],
      // start params
      'title': {
        contentText: '选择投诉对象'
      }
      // end params
    }
  },
  components: {
    TitleComponent,
    WithoutComponent
    // include components
  },
  created () {
    Storage.complianPhone = null
  },
  methods: {
    selectComplainObject (item) {
      Storage.complianPhone = item.phone
      Router.push('complain')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./complain-object.scss";
</style>
