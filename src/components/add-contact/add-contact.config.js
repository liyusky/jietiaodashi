module.exports = {
  content: '添加联系人',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Account': false,
    'BM': false,
    'Btn': false,
    'Check': false,
    'Hasten': false,
    'Http': false,
    'Mock': false,
    'Router': false,
    'Status': false,
    'Storage': false,
    'Time': false,
    'Type': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': `{
        type: 'default / text / slide / icon / switch / center',
        placeholder: '',
        rightText: '',
        rightIcon: '',
        leftText: '',
        leftIcon: '',
        style: 'input类型',
        maxLength: '',
        disabled: '',
        receiveInput: '默认内容'
      }`,
    'keyboard': false,
    'modal': 1,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '借条大师保障您的信息安全。',
        icon: 'chuyin'
      }`,
    'title': `{
        contentText: '添加联系人'
      }`,
    'without': false,
    'work-card': false
  }
}
