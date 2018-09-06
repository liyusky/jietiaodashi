export default class Check {
  static phone (phone) {
    phone = phone ? phone.replace(/\s+/g, '') : phone
    if (!phone) {
      // Title.text = '请输入手机号'
      // dialogShow = true
      return false
    }
    if (phone.length < 11) {
      // Title.text = '手机号长度不足11位'
      // dialogShow = true
      return false
    } else {
      let reg = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
      if (!reg.test(phone)) {
        // Title.text = '手机号格式错误'
        // dialogShow = true
        return false
      }
      return true
    }
  }

  static code (code) {
    code = code ? code.replace(/\s+/g, '') : code
    if (!code) {
      // Title.text = '请输入验证码'
      // dialogShow = true
      return false
    } else {
      let reg = new RegExp('^[0-9]{6}$', 'i')
      if (!reg.test(code)) {
        // Title.text = '验证码格式错误'
        // dialogShow = true
        return false
      }
    }
    return true
  }

  static password (password) {
    password = password ? password.replace(/\s+/g, '') : password
    if (!password) {
      // Title.text = '密码不能为空'
      // dialogShow = true
      return false
    } else {
      let pat = new RegExp(/^[a-zA-Z0-9]{6,16}$/)
      if (!pat.test(password)) {
        // Title.text = '密码格式错误'
        // dialogShow = true
        return false
      }
    }
    return true
  }

  // check money
  static money (money) {}
}
