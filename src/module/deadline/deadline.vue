<template>
  <!-- s  -->
  <section class="deadline">
    <div class="deadline-content">
      <div class="content-button">
        <button @click="cancel"><div>取消</div></button>
        <button @click="selectData"><div>确认</div></button>
      </div>
      <nav class="content-nav">
        <div class="nav-area">
          <ul class="area-list">
            <li class="list-item" :class="{active: year === item}" v-for="(item, index) in yearList" :key="index" @click="selectYear(item, index)">{{item}}</li>
          </ul>
          <ul class="area-list">
            <li class="list-item" :class="{active: mouth === item}" v-for="(item, index) in mouthList" :key="index" @click="selectMouth(item, index)">{{item}}</li>
          </ul>
          <ul class="area-list">
            <li class="list-item" :class="{active: day === item}" v-for="(item, index) in dayList" :key="index" @click="selectDay(item, index)">{{item}}</li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import data from '../../data/data.js'
// include dependence
export default {
  name: 'DeadlineComponent',
  data () {
    return {
      yearList: ['2018', '2019', '2020'],
      mouthList: [],
      dayList: [],
      mouth: '',
      day: '',
      year: '',
      yearStr: '',
      mouthStr: '',
      dayStr: ''

      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  created () {
    this.mouth = ''
    this.day = ''
    this.year = ''
  },
  methods: {
    selectYear (item, index) {
      this.mouth = ''
      this.day = ''
      this.year = item
      this.mouthList = []
      for (var key in data[item]) {
        this.mouthList.push(key)
      }
    },
    selectMouth (item, index) {
      this.day = ''
      this.mouth = item
      this.dayList = data[this.year][item]
    },
    selectDay (item, index) {
      this.day = item
    },
    selectData () {
      if (!this.year) return
      if (!this.mouth) return
      if (!this.day) return
      var y = parseInt(this.year)
      var m = parseInt(this.mouth)
      var d = parseInt(this.day)
      this.$emit('SELECT_DATA_EVENT', y, m, d)
    },
    cancel () {
      this.$emit('CANCEL_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./deadline.scss";
</style>
