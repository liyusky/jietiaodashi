module.exports = {
  content: '转账',
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
          text: '确定转账'
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
        contentText: '转账',
        rightText: '转账记录'
      }`,
    'work-card': false
  }
}
