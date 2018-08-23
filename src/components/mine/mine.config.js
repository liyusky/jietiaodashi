module.exports = {
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
    'billboard-list': `[
        {
          type: 'guide',
          svg: 'cangjian',
          key: '我的银行卡',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '失信查询',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '常见问题',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '在线客服',
          icon: 'chuyin',
          target: ''
        },
        {
          type: 'guide',
          svg: 'cangjian',
          key: '授信',
          icon: 'chuyin',
          target: ''
        }
      ]`,
    'button': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'tip': false,
    'title': false
  }
}
