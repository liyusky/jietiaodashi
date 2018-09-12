export default class Storage {
  static set origin (origin) {
    window.app.$store.commit('saveOrigin', origin)
  }

  static get origin () {
    return window.app.$store.state.token
  }

  static set id (id) {
    window.app.$store.commit('saveId', id)
  }

  static get id () {
    return window.app.$store.state.id
  }

  static set oid (oid) {
    window.app.$store.commit('saveOid', oid)
  }

  static get oid () {
    return window.app.$store.state.oid
  }

  static set token (token) {
    window.app.$store.commit('saveToken', token)
  }

  static get token () {
    return window.app.$store.state.token
  }

  static set phone (phone) {
    window.app.$store.commit('savePhone', phone)
  }

  static get phone () {
    return window.app.$store.state.phone
  }

  static set name (name) {
    window.app.$store.commit('saveName', name)
  }

  static get name () {
    return window.app.$store.state.name
  }

  static set paySet (paySet) {
    window.app.$store.commit('savePaySet', paySet)
  }

  static get paySet () {
    return window.app.$store.state.paySet
  }
}
