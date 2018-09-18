export default class Router {
  note = ['account-balance', 'my-bank-card']
  static mark () {
    console.log(window.app)
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    let account = window.app.$store.state.account
    if (typeof params === 'string') {
      params = {
        name: params
      }
    }
    if (account.certification.bank && this.note.includes(params.name)) {
      params = {
        name: 'credit'
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
