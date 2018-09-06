export default class Router {
  static mark () {
    console.log(window.app._route)
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    window.app.$router.push(params)
  }

  static back (params) {
    if (!params) params = window.app.$store.state.origin
    window.app.$router.push(params)
  }
}
