<template>
  <!-- s  -->
  <section class="publish">
    <div class="publish-content">
      <div class="content-button">
        <button class="button" @click="cancel"><div>取消</div></button>
        <button class="button" @click="getDay"><div>确认</div></button>
      </div>
      <nav class="content-nav">
        <ul class="nav-list">
          <li class="list-item" :class="{active: isIndex === index}" v-for="(item, index) in dayList" :key="index" @click="switchtDay(item, index)">{{item}}</li>
        </ul>
      </nav>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
// include dependence
export default {
  name: 'PublishComponent',
  data () {
    return {
      dayList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      isIndex: null,
      selectDay: ''
      // start params
      // end params
    }
  },
  components: {
    // include components
  },
  methods: {
    switchtDay (item, index) {
      this.isIndex = index
      this.selectDay = item
    },
    cancel () {
      this.$emit('CANCEL_PUBLISH_EVENT')
    },
    getDay () {
      this.$emit('SELECT_PUBLISH_EVENT', this.selectDay)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./publish.scss";
</style>
