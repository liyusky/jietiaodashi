module.exports = {
  content: '借入',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Data': false,
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': `''`,
    'inputs': false,
    'modals': false,
    'nav': `{
        content: ['当前', '已还清'],
        active: ''
      }`,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借入'
      }`,
    'work-card': false
  }
}
