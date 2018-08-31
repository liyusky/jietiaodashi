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
    'button': `{
        default: [{
          type: 'primary',
          text: '下一步'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'inputs': `{
        type: 'default / text / slide / icon / switch / center',
        placeholder: '',
        rightText: '',
        rightIcon: '',
        leftText: '',
        leftIcon: ''
      }`,
    'modals': false,
    'pay-password': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '身份验证'
      }`,
    'work-card': false
  }
}
