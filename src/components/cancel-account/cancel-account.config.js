module.exports = {
  content: '',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': false,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '销账'
      }`,
    'work-card': `{
        name: '姓名',
        money: '名字'
      }`
  }
}
