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
// include dependence
export default {
  name: 'DeadlineComponent',
  data () {
    return {
      currentYear: (new Date()).getFullYear(),
      currentMonth: (new Date()).getMonth(),
      yearList: [],
      mouthList: [],
      dayList: [],
      mouth: '',
      day: '',
      days: [],
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
    this.init()
  },
  methods: {
    init () {
      let year = (new Date()).getFullYear() * 1
      this.yearList = [year, year + 1, year + 2]
      this.setMouth()
      this.setDays()
    },
    setMouth (year = (new Date()).getFullYear()) {
      let [mouthList, mouth] = [[], 0]
      if (year === this.currentYear) mouth = (new Date()).getMonth() * 1
      while (mouth < 12) {
        mouthList.push(mouth + 1)
        mouth++
      }
      this.mouthList = mouthList
    },
    setDays (year = (new Date()).getFullYear(), mouth = (new Date()).getMonth()) {
      let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        days[1] = 29
      }
      let [dayList, day] = [[], 1]
      if (year === this.currentYear && mouth === this.currentMonth) day = (new Date()).getDate()
      while (day <= days[mouth]) {
        dayList.push(day)
        day++
      }
      this.dayList = dayList
    },
    selectYear (item, index) {
      this.mouth = null
      this.day = null
      this.year = item
      this.setMouth(this.year)
    },
    selectMouth (item, index) {
      if (!this.year) return
      this.day = null
      this.mouth = item
      this.setDays(this.year, item - 1)
    },
    selectDay (item, index) {
      if (!this.mouth) return
      this.day = item
    },
    selectData () {
      if (!this.year) return
      if (!this.mouth) return
      if (!this.day) return
      this.$emit('SELECT_DATA_EVENT', this.year, this.mouth, this.day)
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
