<template>
  <!-- s  -->
  <section class="billboard" @click="operation">
    <div class="billboard-icon" v-if="billboard.svg">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-' + billboard.svg"></use>
      </svg>
    </div>
    <div class="billboard-content font-30" :class="{'border-bottom-1': billboard.border}">
      <div class="content-key color-deep-black">
        <p class="key-dot font-69 color-blue" v-if="billboard.dot">·</p>
        <p>{{billboard.key}}</p>
      </div>
      <div class="content-value">
        <p v-if="billboard.value">{{billboard.value}}</p>
        <i class="iconfont color-grey" v-if="billboard.icon" :class="'icon-' + billboard.icon"></i>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'BillboardComponent',
  props: ['billboard'],
  methods: {
    operation () {
      this.$emit('OPERATION_EVENT', this.billboard.target)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./billboard.scss";
</style>
