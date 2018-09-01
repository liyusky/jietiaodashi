module.exports = {
  content: '展期',
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
          text: '同意展期'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': 1,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '同意相关协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '展期'
      }`,
    'work-card': false
  }
}
