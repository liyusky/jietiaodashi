const mutations = {
  saveOrigin (state, origin) {
    state.origin = origin
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
  savePublishObject (state, publishObject) {
    state.publishObject.push(publishObject)
  },
  clearPublishObject (state, publishObject) {
    state.publishObject = publishObject
  },
  // 保存借款用途
  savePurpose (state, purpose) {
    state.purpose = purpose
  },
  // 保存借款用途建议
  saveOpinion (state, opinion) {
    state.opinion = opinion
  },
  // 保存银卡卡
  saveBankCard (state, card) {
    state.card = card
  },
  savePayedMoney (state, payedMoney) {
    state.payedMoney = payedMoney
  },
  saveGapMoney (state, gapMoney) {
    state.gapMoney = gapMoney
  },
  // 保存借条id
  saveBorrowId (state, borrowId) {
    state.borrowId = borrowId
  },
  // 借条来源
  saveBorrowOrigin (state, borrowOrigin) {
    state.borrowOrigin = borrowOrigin
  },
  // 可用余额
  saveUsableMoney (state, usableMoney) {
    state.usableMoney = usableMoney
  },
  // 信用查询结果
  saveCreditQuery (state, credtiQuery) {
    state.credtiQuery = credtiQuery
  }
}
export default mutations
