<template>
  <!-- s 好友聊天 -->
  <section class="chat">
    <TitleComponent :title="title"></TitleComponent>
    <div class="chat-time">
      <div class="time font-24 color-white">15:09</div>
    </div>
    <ul class="chat-list">
      <li class="list-item">
        <!-- s 默认 -->
        <section class="item-default">
          <div class="default-portrait">
            <img src="http://iph.href.lu/90x90">
          </div>
          <div class="default-say bg-white">
            <p class="say-text font-30 color-black">我通过了你的朋友验证请求，现在我们可以开始聊天了</p>
          </div>
        </section>
        <!-- e 好友聊天 -->
        <!-- s 文字信息 -->
        <section class="item-text">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <!-- <div class="say-itme">
                <p class="say-text"></p>
                <img src="">
              </div> -->
              <p class="say-text">你好，我是你的新朋友</p>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <p class="say-text">你好，我是你的新朋友</p>
            </div>
          </div>
        </section>
        <!-- e 文字信息-->
        <!-- s 图片信息 -->
        <section class="item-image">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <img src="http://iph.href.lu/590x190">
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <img src="http://iph.href.lu/390x290">
            </div>
          </div>
        </section>
        <!-- e 好友聊天 -->
        <!-- s 语音信息 -->
        <section class="item-voice">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-seconds font-30 color-light-grey">15"</div>
              <i class="iconfont icon-cong font-33 color-white"></i>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <i class="iconfont icon-cong font-33 color-light-grey"></i>
              <div class="say-seconds font-30 color-light-grey">15"</div>
            </div>
          </div>
        </section>
        <!-- e 语音信息 -->
        <!-- s 转账 -->
        <section class="item-transfer">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">转账</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">转账</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
          </div>
        </section>
        <!-- e 转账 -->
        <!-- s 欠条 -->
        <section class="item-iou">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">像你打了个欠条</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">像你打了个欠条</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
          </div>
        </section>
        <!-- e 欠条 -->
        <!-- s 借条 -->
        <section class="item-receipt">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">像你打了个借条</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <div class="say-detail">
                <i class="iconfont icon-cong"></i>
                <div class="detail-text">
                  <p class="text-price">1000元</p>
                  <p class="text-title">像你打了个借条</p>
                </div>
              </div>
              <div class="say-origin">借条大师-转账</div>
            </div>
          </div>
        </section>
        <!-- e 借条 -->
        <!-- s 信用报告 -->
        <section class="item-credit">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-detail">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cong"></use>
                </svg>
                <p class="detail-title">戴安娜信用报告</p>
              </div>
              <div class="say-origin">信用报告</div>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <div class="say-detail">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cong"></use>
                </svg>
                <p class="detail-title">戴安娜信用报告</p>
              </div>
              <div class="say-origin">信用报告</div>
            </div>
          </div>
        </section>
        <!-- e 信用报告 -->
        <!-- s 个人名片 -->
        <section class="item-card">
          <div class="waiter" v-if="true">
            <div class="waiter-say">
              <div class="say-detail">
                <div class="detail-img">
                  <img src="http://iph.href.lu/90x90">
                </div>
                <div class="detail-text">
                  <p class="text-name">欧冰倩</p>
                  <p class="text-id">借条ID: 12424</p>
                </div>
              </div>
              <div class="say-origin">个人名片</div>
            </div>
            <div class="waiter-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
          </div>
          <div class="customer" v-if="false">
            <div class="customer-portrait">
              <img src="http://iph.href.lu/90x90">
            </div>
            <div class="customer-say">
              <div class="say-detail">
                <div class="detail-img">
                  <img src="http://iph.href.lu/90x90">
                </div>
                <div class="detail-text">
                  <p class="text-name">欧冰倩</p>
                  <p class="text-id">借条ID: 12424</p>
                </div>
              </div>
              <div class="say-origin">个人名片</div>
            </div>
          </div>
        </section>
        <!-- e 个人名片 -->
      </li>
    </ul>
    <div class="chat-input">
      <div class="input-eara">
        <i class="iconfont icon-cong" :class="{'icon-jianyu' : inputType}" @click="toggleInputType"></i>
        <div class="eara-content bg-white">
          <div class="content-text" v-if="!inputType">
            <input type="text">
          </div>
          <div class="content-voice" v-if="inputType">
            <span>按住说话</span>
          </div>
        </div>
        <i class="iconfont icon-cong"></i>
        <i class="iconfont icon-cong" @click="switchMore"></i>
      </div>
      <!-- <div class="input-emoji"></div> -->
      <div class="input-more" v-if="switchMoreShow">
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">图片</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">视频通话</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">语音通话</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">我要借</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">打欠条</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">转账</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">信用报告</p>
        </div>
        <div class="more-item">
          <div class="item-icon bg-white">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cong"></use>
            </svg>
          </div>
          <p class="font-24">个人名片</p>
        </div>
      </div>
    </div>
  </section>
  <!-- e 好友聊天 -->
</template>

<script>
// include dependence
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'ChatComponent',
  data () {
    return {
      title: {
        contentText: 'Name',
        leftText: '好友',
        icon: 'cong'
      },
      inputType: false,
      switchMoreShow: false
      // start params
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  methods: {
    toggleInputType () {
      this.inputType = !this.inputType
    },
    switchMore () {
      this.switchMoreShow = !this.switchMoreShow
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./chat.scss";
</style>
