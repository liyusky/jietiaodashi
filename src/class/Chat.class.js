export default class Chat {
  static nim = null
  static success = null
  static init (account, token) {
    let configMap = new Map([
      ['dev', ''],
      ['test', ''],
      ['pre', ''],
      ['online', 'bd632f1fc00a5c0a1af35ebf05c7f9e7']
    ])
    let environment = 'online'
    let config = {
      appKey: configMap.get(environment),
      account: account,
      token: token,
      debug: true
    }
    window.app.$store.commit('saveNim', window.NIM.getInstance(config))
  }

  static info (account) {
    this.refresh()
    this.nim.getUser({
      account: account,
      done: (error, user) => {
        if (error) return this
        if (this.success) this.success(user)
        return this
      }
    })
    return this
  }

  static refresh () {
    this.nim = window.app.$store.state.nim
  }

  static set success (success) {
    this.success = success
  }

  static get friends () {
    this.nim.getFriends({
      done: (error, user) => {
        if (error) return []
        if (user) return user
      }
    })
  }

  static get blacklist () {
    this.nim.getRelations({
      done: (error, relation) => {
        if (error) return []
        if (relation) return relation
      }
    })
  }

  static set addBlack (account) {
    this.nim.addToBlacklist({
      account: account,
      done: (error, relation) => {
        if (error) {
          return false
        } else {
          return true
        }
      }
    })
  }

  static set removeBlack (account) {
    this.nim.removeFromBlacklist({
      account: account,
      done: (error, relation) => {
        if (error) {
          return false
        } else {
          return true
        }
      }
    })
  }
}
