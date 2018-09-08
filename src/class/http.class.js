import axios from 'axios'
import Url from './url.class.js'
export default class Http {
  successCallback = null
  failCallback = null
  defaultCallback = null
  static send (args) {
    let instance = new Http()
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    args.data = args.data ? args.data : {}
    // let needTokenArr = ['SendSMS', 'RegistCustomer', 'LoginCustomer', 'mall', 'product', 'ModifyCustomerPwd']
    // if (!needTokenArr.includes(args.url)) {
    //   args.data.access_token = window.token
    // }
    axios({
      url: Url[args.url],
      method: 'post',
      // baseURL: 'http://api2.jietiaodashi.com',
      baseURL: 'http://101.37.27.97:8001',
      // baseURL: 'http://192.168.0.101:8082',
      headers: headers,
      params: args.data
    }).then(response => {
      console.log(args.url)
      console.log(response)
      instance.dispense(response.data)
      if (instance.defaultCallback) instance.defaultCallback()
    }).catch(() => {
      if (instance.defaultCallback) instance.defaultCallback()
    })
    return instance
  }
  dispense (response) {
    switch (response.code) {
      case 200:
        if (this.successCallback) this.successCallback(response.data)
        break
      case 401:
        window.vueModule.$router.push({ name: 'empower' })
        break
      default:
        if (this.failCallback) this.failCallback(response)
    }
  }
  success (callback) {
    this.successCallback = callback
    return this
  }
  fail (callback) {
    this.failCallback = callback
    return this
  }
  default (callback) {
    this.defaultCallback = callback
    return this
  }
}
// CardNo:null
// CustomerServiceOnline:"40010003"
// CustomerServiceTel:"4008315138"
// IsBankCardPass:false
// IsContactPass:false
// IsCreditReportPass:false
// IsIdentityPass:false
// IsPhonePass:false
// IsSetPaymentPwd:false
// IsZhiMaPass:false
// Name:null
// Nim_Accid:"17730127131"
// Nim_AssistantId:"99999999"
// Nim_Token:"b457254c8ee47ed5879db1ba93f0d477"
// Photo: null
// Token: ""30DE8D620685C4126C33A4D71A9F2F2CD49BC5EA8093A79E0AD2E762BEC435A96B39DE72264700D705A899E01839D4FF3F4634535E54AFEAB25551BD736AA688BFC9F53A87F47720AACF9D7704288AF30105B655CE82C4F4A3661BB4EC9476A0CDBF0D6577ACD32621B880CE8D15B85DC6D64DDCDAABE6667F50D8FC92DE6634C71AD455DA368A338F57F1D82AA4E3663C76683EDB70BCB1A2C42934040A0E272CF2F264F90181C901AC2467878085A8E67D5898CC1749C001F69CEFC19B2F57""
// WeiXin: "http://114.55.139.83:3698/Images/weixin.jpg"
// instance.dispense(response.data)
