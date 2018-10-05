export default class Chat {
  static nim = null
  static successCallback = null
  static blacklistAccounts = null
  static init (account, token) {
    let config = {
      appKey: 'bd632f1fc00a5c0a1af35ebf05c7f9e7',
      account: account,
      token: token,
      // onmsg: (msg) => {
      //   if 当前聊天对象 = 消息发来的对象
      //       处理消息内容
      //       switch 消息类型
      //         处理数据
      //         window.app.$store 存储数据 (chat 页面 监听并添加到 messages 中)
      //  else
      //       给对应对象 添加未读消息 标记
      //       window.app.$store 对象账号 (消息页面 监听并添加未读消息数)

      // },
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
    console.log(operation)
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
