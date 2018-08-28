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
  props: ['yearList', 'data'],
  data () {
    return {
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    selectYear (item, index) {
      this.mouth = ''
      this.day = ''
      this.year = item
      this.mouthList = []
      for (var key in this.data[item]) {
        this.mouthList.push(key)
      }
      this.yearStr = item
    },
    selectMouth (item, index) {
      this.day = ''
      this.mouth = item
      this.dayList = this.data[this.year][item]
      this.mouthStr = item
    },
    selectDay (item, index) {
      this.day = item
      this.dayStr = item
    },
    selectData () {
      if (!this.yearStr) return
      if (!this.mouthStr) return
      if (!this.dayStr) return
      // var date = new Date()
      var y = parseInt(this.yearStr)
      var m = parseInt(this.mouthStr)
      var d = parseInt(this.dayStr)
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
