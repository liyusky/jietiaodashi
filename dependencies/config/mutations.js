const mutations = {
  saveOrigin (state, origin) {
    state.origin = origin
  },
  // 保存借款用途
  savePurpose (state, purpose) {
    state.purpose = purpose
  },
  // 保存路由来源
  saveRoute (state, route) {
    state.route = route
  },
  // 保存银卡卡
  saveBankCard (state, card) {
    this.state.card = card
  },
  saveToken (state, token) {
    state.token = token
  },
  savePhone (state, phone) {
    state.phone = phone
  },
  saveName (state, name) {
    state.name = name
  },
  saveId (state, id) {
    state.id = id
  },
  saveOid (state, oid) {
    state.oid = oid
  },
  savePaySet (state, paySet) {
    state.paySet = paySet
  },
  // 保存选择的发布对象
  savePublishObject (state, friendList) {
    state.friendList.push(friendList)
  },
  clearPublishObject (state) {
    state.friendList = []
  }
}
module.exports = mutations
