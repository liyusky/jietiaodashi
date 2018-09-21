import axios from 'axios'
import Url from './url.class.js'
export default class BM {
  successCallback = null
  failCallback = null
  defaultCallback = null
  static send (args) {
    let instance = new BM()
    // let headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    args.data = args.data ? args.data : {}
    axios({
      url: Url[args.url],
      method: 'post',
      // baseURL: 'http://101.37.27.97:8099',
      baseURL: 'https://www.jiebayidai.com:9595',
      // headers: headers,
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
    switch (response.resp_code) {
      case '0000':
        if (this.successCallback) this.successCallback(response.results)
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
