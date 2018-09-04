export default class Router {
  mark () {
    window.app.$store.commit('saveOrigin', window.app._route.name)
  }

  static push (params) {
    this.mark()
    window.app.$router.push(params)
  }
}
