export default class Router {
  static unauthorized = ['account-balance', 'my-bank-card']
  static certification = ['add-contact', 'bind-bank-card', 'zhima-credit', 'identity-verification', 'operator-credit']
  static mine = ['mine']
  static mark () {
    window.app.$store.commit('saveOrigin', window.app._route)
  }

  static push (params) {
    this.mark()
    if (typeof params === 'string') {
      params = {
        name: params
      }
    }
    if (this.unauthorized.includes(params.name)) {
      if (window.app.$store.state.account.certification.bank) {
        params = {
          name: 'credit'
        }
      }
    }
    window.app.$router.push(params)
  }

  static back (params) {
    let origin = null
    if (!params) {
      origin = window.app.$store.state.origin
      params = {...origin}
    } else if (this.unauthorized.includes(params.name)) {
      params = {
        name: 'credit'
      }
    } else if (this.mine.includes(params.name)) {
      params = {
        name: 'mine'
      }
    }
    window.app.$router.push(params)
    // window.app.$router.back()
  }
}
