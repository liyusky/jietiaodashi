export default class Storage {
  static set origin (origin) {
    this.save('origin', origin)
  }

  static get origin () {
    return this.getOut('origin')
  }

  static set id (id) {
    this.save('id', id)
  }

  static get id () {
    return this.getOut('id')
  }

  static set oid (oid) {
    this.save('oid', oid)
  }

  static get oid () {
    return this.getOut('oid')
  }

  static set token (token) {
    this.save('token', token)
  }

  static get token () {
    return this.getOut('token')
  }

  static set phone (phone) {
    this.save('phone', phone)
  }

  static get phone () {
    return this.getOut('phone')
  }

  static set name (name) {
    this.save('name', name)
  }

  static get name () {
    return this.getOut('name')
  }

  static set paySet (paySet) {
    this.save('paySet', paySet)
  }

  static get paySet () {
    return this.getOut('paySet')
  }

  static set publishObject (publishObject) {
    this.save('publishObject', publishObject)
  }

  static get publishObject () {
    return this.getOut('publishObject')
  }

  static set purpose (purpose) {
    this.save('purpose', purpose)
  }

  static get purpose () {
    return this.getOut('purpose')
  }

  static set opinion (opinion) {
    this.save('opinion', opinion)
  }

  static get opinion () {
    return this.getOut('opinion')
  }

  static set payedMoney (payedMoney) {
    this.save('payedMoney', payedMoney)
  }

  static get payedMoney () {
    return this.getOut('payedMoney')
  }

  static set gapMoney (gapMoney) {
    this.save('gapMoney', gapMoney)
  }

  static get gapMoney () {
    return this.getOut('gapMoney')
  }

  static set borrowId (borrowId) {
    this.save('borrowId', borrowId)
  }

  static get borrowId () {
    return this.getOut('borrowId')
  }

  static set borrowOrigin (borrowOrigin) {
    this.save('borrowOrigin', borrowOrigin)
  }

  static get borrowOrigin () {
    return this.getOut('borrowOrigin')
  }
  // 可用余额
  static set usableMoney (usableMoney) {
    this.save('usableMoney', usableMoney)
  }

  static get usableMoney () {
    return this.getOut('usableMoney')
  }
  // 失信查询结果
  static set credtiQuery (credtiQuery) {
    this.save('credtiQuery', credtiQuery)
  }

  static get credtiQuery () {
    return this.getOut('credtiQuery')
  }

  static set account (account) {
    this.save('account', account)
  }

  static get account () {
    return this.getOut('account')
  }
  // 投诉对象 complianPhone
  static set complianPhone (complianPhone) {
    this.save('complianPhone', complianPhone)
  }

  static get complianPhone () {
    return this.getOut('complianPhone')
  }

  static get info () {
    return this.getOut('info')
  }

  static set error (error) {
    this.save('error', error)
  }

  static set bank (bank) {
    this.save('bank', bank)
  }

  static get bank () {
    return this.getOut('bank')
  }

  static set forget (forget) {
    this.save('forget', forget)
  }

  static get forget () {
    return this.getOut('forget')
  }

  static clear () {
    for (const item in window.app.$store.mutations) window.app.$store.commit(item, null)
    try {
      for (const item in localStorage) localStorage[item] = ''
    } catch (error) {}
  }

  static getsaveInLocalStorage (name) {
    try {
      localStorage.getItem(name)
    } catch (error) {}
  }

  static save (name, content) {
    window.app.$store.commit('save' + name.substring(0, 1).toUpperCase() + name.substring(1), content)
    try {
      let result = content
      if (typeof content === 'object') result = JSON.stringify(content)
      localStorage.setItem(name, result)
    } catch (error) {}
  }

  static getOut (name) {
    let result = null
    try {
      result = localStorage.getItem(name)
      if (typeof JSON.parse(result) === 'object') result = JSON.parse(result)
    } catch (error) {}
    if (window.app.$store.state[name] !== null) {
      result = window.app.$store.state[name]
    } else if (result !== null) {
      this.save(name, result)
    }
    return result
  }
}
