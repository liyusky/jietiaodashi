module.exports = {
  content: '身份验证',
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
    'button': `{
        default: [{
          type: 'primary',
          text: '下一步'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': 1,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '身份验证'
      }`,
    'work-card': false
  }
}
