export default class Account {
  static set info (account) {
    window.app.$store.commit('saveAccount', {
      name: account.Name,
      id: account.CardNo,
      portrait: account.Photo,
      nim: {
        id: account.Nim_Accid,
        token: account.Nim_Token
      },
      certification: {
        id: account.IsIdentityPass,
        contact: account.IsContactPass,
        phone: account.IsPhonePass,
        zhima: account.IsZhiMaPass,
        bank: account.IsBankCardPass,
        report: account.IsCreditReportPass,
        payPassword: account.IsSetPaymentPwd
      }
    })
  }

  static get certificate () {
    this.refresh()
    if (this.certification.id) {
      return false
    }
    if (this.certification.bank) {
      return false
    }
  }

  static get name () {
    return window.app.$store.state.account.name
  }

  static get bank () {
    return window.app.$store.state.account.certification.bank
  }

  static get payPassword () {
    return window.app.$store.state.account.certification.payPassword
  }

  static set id (id) {
    let account = {...window.app.$store.state.account}
    account.certification.id = id
    window.app.$store.commit('saveAccount', account)
  }

  static get id () {
    return window.app.$store.state.account.certification.id
  }

  static set contact (contact) {
    let account = {...window.app.$store.state.account}
    account.certification.contact = contact
    window.app.$store.commit('saveAccount', account)
  }

  static set zhima (zhima) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = zhima
    window.app.$store.commit('saveAccount', account)
  }

  static set phone (phone) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = phone
    window.app.$store.commit('saveAccount', account)
  }

  static set bank (bank) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = bank
    window.app.$store.commit('saveAccount', account)
  }

  static set credit (credit) {
    let account = {...window.app.$store.state.account}
    account.certification.id = account.IsIdentityPass
    account.certification.contact = account.IsContactPass
    account.certification.phone = account.IsPhonePass
    account.certification.zhima = account.IsZhiMaPass
    account.certification.bank = account.IsBankCardPass
    account.certification.report = account.IsCreditReportPass
    account.certification.payPassword = account.IsSetPaymentPwd
    window.app.$store.commit('saveAccount', account)
  }
}
