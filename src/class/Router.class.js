export default class Router {
  mark () {
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    window.app.$router.push(params)
  }

  static back () {
  }
}
