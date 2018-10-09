const mutations = {
  saveNim (state, nim) {
    state.nim = nim
  },
  saveSDK (state, sdk) {
    state.sdk = sdk
  },
  saveChat (state, chat) {
    state.chat = chat
  },
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
    state.publishObject = publishObject
  },
  // clearPublishObject (state, publishObject) {
  //   state.publishObject = publishObject
  // },
  // 保存借款用途
  savePurpose (state, purpose) {
    state.purpose = purpose
  },
  // 保存借款用途建议
  saveOpinion (state, opinion) {
    state.opinion = opinion
  },
  // 保存银行卡
  saveBankBank (state, bank) {
    state.bank = bank
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
  },
  saveAccount (state, account) {
    state.account = account
  },
  // 保存投诉对象
  saveComplianPhone (state, complianPhone) {
    state.complianPhone = complianPhone
  },
  saveInfo (state, info) {
    state.info = info
  },
  saveError (state, error) {
    state.error = error
  },
  saveIframe (state, iframe) {
    state.iframe = iframe
  },
  saveBank (state, bank) {
    state.bank = bank
  },
  saveForget (state, forget) {
    state.forget = forget
  },
  saveWannaInfo (state, wannaInfo) {
    state.wannaInfo = wannaInfo
  },
  savePersonalInfo (state, personalInfo) {
    state.personalInfo = personalInfo
  },
  // 保存聊天对象
  saveChatObject (state, chatObject) {
    state.chatObject = chatObject
  },
  // 保存当前聊天对象的最新消息
  saveMessage (state, message) {
    state.message = message
  },
  // 保存消息
  saveSessions (state, sessions) {
    state.sessions = sessions
  },
  // 保存当前会话
  saveUpdatesession (state, updatesession) {
    state.updatesession = updatesession
  }
}
export default mutations
