import Account from './Account.class.js'
export default class Chat {
  static nim = null
  static successCallback = null
  static blacklistAccounts = null

  static set key (key) {
    window.app.$store.commit('saveChat', {
      id: key.Nim_Accid,
      token: key.Nim_Token,
      target: null
    })
  }

  static set target (target) {
    let key = {...window.app.$store.state.chat}
    key.target = target
    window.app.$store.commit('saveChat', key)
  }

  static get target () {
    let target = window.app.$store.state.chat.target
    return target
  }

  static init () {
    let key = window.app.$store.state.chat
    let config = {
      appKey: 'bd632f1fc00a5c0a1af35ebf05c7f9e7',
      account: key.id,
      token: key.token,
      onmyinfo: info => {
        Account.portrait = info.avatar
      },
      onmsg: message => {
        if (window.app.$store.state.chat.target.id === message.from) {
          window.app.$store.commit('saveMessage', message)
        } else {}
      },
      onsessions: sessions => {
        console.log(sessions)
      },
      onupdatesession: onupdatesession => {
        console.log(onupdatesession)
      },
      debug: false
    }
    if (window.NIM) window.app.$store.commit('saveNim', window.NIM.getInstance(config))
  }

  static refresh () {
    this.nim = window.app.$store.state.nim
  }

  static getUserInfo (account) {
    let operation = new Operation()
    this.refresh()
    if (account instanceof Array) {
      this.nim.getUsers({
        accounts: account,
        done: (error, user) => {
          if (error) return operation
          if (operation.successCallback) operation.successCallback(user)
          return operation
        }
      })
    } else {
      this.nim.getUser({
        account: account,
        done: (error, users) => {
          if (error) return operation
          if (operation.successCallback) operation.successCallback(users)
          return operation
        }
      })
    }
    return operation
  }

  static getFriends () {
    let operation = new Operation()
    this.refresh()
    this.nim.getFriends({
      done: (error, friends) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(friends)
        return operation
      }
    })
    return operation
  }

  static getBlacklist () {
    let operation = new Operation()
    this.refresh()
    this.nim.getRelations({
      done: (error, relation) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(relation.blacklist)
        return operation
      }
    })
    return operation
  }

  static set addBlack (account) {
    this.refresh()
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
    this.refresh()
    this.nim.removeFromBlacklist({
      account: account,
      done: error => {
        if (error) {
          return false
        } else {
          return true
        }
      }
    })
  }

  static set friend (account) {
    this.refresh()
    this.nim.applyFriend({
      account: account,
      done: error => {
        if (error) {
          return false
        } else {
          return true
        }
      }
    })
  }

  static passFriendApply (msg, account) {
    let operation = new Operation()
    this.refresh()
    this.nim.passFriendApply({
      idServer: msg.idServer,
      account: account,
      done: error => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback()
        return operation
      }
    })
    return operation
  }

  static rejectFriendApply (msg, account) {
    let operation = new Operation()
    this.refresh()
    this.nim.rejectFriendApply({
      idServer: msg.idServer,
      account: account,
      done: error => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback()
        return operation
      }
    })
    return operation
  }

  static deleteFriend (account) {
    let operation = new Operation()
    this.refresh()
    this.nim.deleteFriend({
      account: account,
      done: error => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback()
        return operation
      }
    })
    return operation
  }

  static sendText (account, content) {
    let operation = new Operation()
    this.refresh()
    this.nim.sendText({
      scene: 'p2p',
      to: account,
      text: content,
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }

  static sendFile (fileInput) {
    let operation = new Operation()
    this.refresh()
    this.nim.sendFile({
      scene: 'p2p',
      to: 'account',
      type: 'image',
      fileInput: fileInput,
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }

  static createMainIOU (account, content) {
    let operation = new Operation()
    this.refresh()
    this.nim.sendCustomMsg({
      scene: 'p2p',
      to: account,
      text: JSON.stringify({
        type: 1,
        data: {}
      }),
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }

  static createAttachmentIOU (account, content) {
    let operation = new Operation()
    this.refresh()
    this.nim.sendCustomMsg({
      scene: 'p2p',
      to: account,
      text: JSON.stringify({
        type: 1,
        data: {}
      }),
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }

  static historyMsgs (account) {
    let operation = new Operation()
    this.refresh()
    this.nim.getHistoryMsgs({
      scene: 'p2p',
      to: account,
      reverse: true,
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }

  static localSessions (lastSessionId) {
    let operation = new Operation()
    this.refresh()
    this.nim.getLocalSessions({
      lastSessionId: lastSessionId,
      limit: 100,
      done: (error, msg) => {
        if (error) return operation
        if (operation.successCallback) operation.successCallback(msg)
        return operation
      }
    })
    return operation
  }
}

class Operation {
  successCallback = null
  failCallback = null
  success (callback) {
    this.successCallback = callback
  }

  fail (callback) {
    this.failCallback = callback
  }
}
