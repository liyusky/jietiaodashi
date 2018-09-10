export default class Router {
  static mark () {
    console.log(window.app)
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    if (typeof params === 'string') {
      params = {
        name: params
      }
    }
    window.app.$router.push(params)
  }

  static back (params) {
    let origin = null
    if (!params) {
      origin = window.app.$store.state.origin
      params = {...origin}
    }
    window.app.$router.back()
  }
}
