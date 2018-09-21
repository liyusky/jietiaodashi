export default class Error {
  static show (message) {
    window.modal.$store.commit('saveError', {
      modal: true,
      message: message
    })
  }
}
