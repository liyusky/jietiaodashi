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
        if (this.success) this.succeed(user)
        return this
      }
    })
    return this
  }

  static refresh () {
    this.nim = window.app.$store.state.nim
  }

  static set succeed (succeed) {
    this.succeed = succeed
  }

  static get friends () {
    this.nim.getFriends({
      done: (error, user) => {
        if (error) return []
        if (user) return user
      }
    })
  }

  static set localSessions (lastSessionId) {
    this.nim.getLocalSessions({
      lastSessionId: lastSessionId,
      limit: 100,
      done: (error, localSessions) => {
        if (error) return []
        if (localSessions) return localSessions
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
