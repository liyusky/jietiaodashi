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
  }
}
export default mutations
