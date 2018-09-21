<template>
  <!-- s  -->
  <section class="city-select">
    <div class="select-title">
      <!-- <div @click="cancel">取消</div> -->
      <h3>选择地址</h3>
      <!-- <div @click="confrim">确认</div> -->
    </div>
    <nav class="select-nav">
      <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: province == item}" v-for="(item, index) in provinceList" :key="index" @click="selectProvince(item, index)">{{item}}</li>
        </ul>
      </div>
      <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: city == item}" v-for="(item, index) in cityList" :key="index" @click="selectCity(item)">{{item}}</li>
        </ul>
      </div>
      <!-- <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: area == item}" v-for="(item, index) in areaList" :key="index" @click="selectArea(item)">{{item}}</li>
        </ul>
      </div> -->
    </nav>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
import Citys from '../../../class/Citys.array.js'
export default {
  name: 'CitySelectComponent',
  data () {
    return {
      province: null,
      provinceList: null,
      city: null,
      cityList: null,
      cities: null,
      code: null
    }
  },
  components: {
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let result = {
        list: []
      }
      Citys.forEach(city => {
        result.list.push(city.name)
        result[city.name] = {
          list: []
        }
        city.cityList.forEach(area => {
          result[city.name].list.push(area.name)
          result[city.name][area.name] = area.code
        })
      })
      this.provinceList = result.list
      this.cities = result
    },
    selectProvince (item) {
      this.province = item
      this.cityList = this.cities[item].list
      this.city = null
    },
    selectCity (item) {
      this.city = item
      this.code = this.cities[this.province][item]
      if (this.code && this.city) this.$emit('SELECT_AREA_EVENT', [this.province, this.city].join(' '), this.code)
    }
    // confrim () {
    // },
    // cancel () {
    //   this.$emit('CANCEL_EVENT')
    // }
  }
}
</script>

<style lang="sass" scoped>
@import "./city-select.scss";
</style>
