export default class Account {
  static set info (account) {
    let customer = {
      name: account.Name,
      id: account.CardNo,
      portrait: account.Photo,
      certification: {
        id: account.IsIdentityPass,
        contact: account.IsContactPass,
        phone: account.IsPhonePass,
        zhima: account.IsZhiMaPass,
        bank: account.IsBankCardPass,
        report: account.IsCreditReportPass,
        payPassword: account.IsSetPaymentPwd
      }
    }
    this.save(customer)
  }

  static set portrait (portrait) {
    let account = {...window.app.$store.state.account}
    account.portrait = portrait
    this.save(account)
  }

  static get portrait () {
    let account = this.getAccount()
    return account.portrait
  }

  static get name () {
    let account = this.getAccount()
    return account.name
  }

  static get ID () {
    let account = this.getAccount()
    return account.id
  }

  static set ID (id) {
    let account = {...window.app.$store.state.account}
    account.id = id
    this.save(account)
  }

  static get bank () {
    let account = this.getAccount()
    console.log(account)
    return account.certification.bank
  }

  static get payPassword () {
    let account = this.getAccount()
    return account.certification.payPassword
  }

  static set id (id) {
    let account = {...window.app.$store.state.account}
    account.certification.id = id
    this.save(account)
  }

  static get id () {
    let account = this.getAccount()
    console.log(account)
    return account.certification.id
  }

  static set contact (contact) {
    let account = {...window.app.$store.state.account}
    account.certification.contact = contact
    this.save(account)
  }

  static set zhima (zhima) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = zhima
    this.save(account)
  }

  static set phone (phone) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = phone
    this.save(account)
  }

  static set bank (bank) {
    let account = {...window.app.$store.state.account}
    account.certification.zhima = bank
    this.save(account)
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
    this.save(account)
  }

  static save (account) {
    window.app.$store.commit('saveAccount', account)
    try {
      localStorage.setItem('account', JSON.stringify(account))
    } catch (error) {}
  }

  static getAccount () {
    let account = null
    try {
      account = JSON.parse(localStorage.getItem('account'))
    } catch (error) {}
    if (window.app.$store.state.account !== null) {
      account = {...window.app.$store.state.account}
    } else if (account !== null) {
      this.save(account)
    }
    return account
  }
}
