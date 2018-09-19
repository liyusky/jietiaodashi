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
}
