export default class Check {
  static phone (phone) {
    phone = phone ? phone.replace(/\s+/g, '') : phone
    if (!phone) {
      this.show('请输入手机号')
      return false
    }
    if (phone.length < 11) {
      this.show('手机号长度不足11位')
      return false
    } else {
      let reg = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
      if (!reg.test(phone)) {
        this.show('手机号格式错误')
        return false
      }
      return true
    }
  }

  static code (code) {
    code = code ? code.replace(/\s+/g, '') : code
    if (!code) {
      this.show('请输入验证码')
      return false
    } else {
      let reg = new RegExp('^[0-9]{6}$', 'i')
      if (!reg.test(code)) {
        this.show('验证码格式错误')
        return false
      }
    }
    return true
  }

  static password (password) {
    password = password ? password.replace(/\s+/g, '') : password
    if (!password) {
      this.show('密码不能为空')
      return false
    } else {
      let pat = new RegExp(/^[a-zA-Z0-9]{6,16}$/)
      if (!pat.test(password)) {
        this.show('密码格式错误')
        return false
      }
    }
    return true
  }

  // check money
  static money (money) {
    money = money ? money.replace(/\s+/g, '') : money
    if (!money) {
      this.show('请输入金额')
      return false
    }
    if (!parseFloat(money)) {
      this.show('请输入大于0的金额')
      return false
    }
    if (isNaN(money)) {
      this.show('请输入数字')
      return false
    }
    let composition = money.split('.')
    if (composition[1] && composition[1].length > 2) {
      this.show('请注意金额格式')
      return false
    }
    return true
  }
  // check identityNumber
  static id (id) {
    id = id ? id.replace(/\s+/g, '') : id
    if (!id) {
      this.show('身份证号不能为空')
      return false
    } else {
      let reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
      if (!reg.test(id)) {
        this.show('身份证号错误')
        return false
      }
    }
    return true
  }
  static card (card) {
    card = card ? card.replace(/\s+/g, '') : card
    if (!card) {
      this.show('银行卡号不能为空')
      return false
    } else {
      return true
    }
  }

  static name (name) {
    name = name ? name.replace(/\s+/g, '') : name
    if (!name) {
      this.show('姓名不能为空')
      return false
    } else {
      return true
    }
  }

  static bank (bank) {
    bank = bank ? bank.replace(/\s+/g, '') : bank
    if (!bank) {
      this.show('银行卡号不能为空')
      return false
    } else {
      return true
    }
  }

  static show (message) {
    window.modal.$store.commit('saveError', {
      modal: true,
      message: message
    })
  }
}
