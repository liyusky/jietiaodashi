<template>
  <!-- s 添加联系人 -->
  <section class="add-contact padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <TipComponent class="contact-tip padding-horizontal-30 font-24" :tip="tip"></TipComponent>
    <div class="contact-form padding-horizontal-30  bg-white ">
      <div class="form-item border-bottom-1">
        <InputsComponent :inputs="firstNameInput" @GET_INPUT_TEXT_EVENT="getFirstContactName"></InputsComponent>
      </div>
      <div class="form-item border-bottom-1">
        <div class="item-left">
          <i class="iconfont icon-cong color-blue"></i>
          <span class="font-30 color-black">与你的关系</span>
        </div>
        <div class="itme-default" @click="openModal('first')">
          <span class="font-30 color-light-grey">{{firstRelation ? firstRelation: '请选择'}}</span>
          <i class="iconfont icon-cong font-30 color-light-grey"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong color-blue"></i>
          <span class="font-30 color-black">联系人手机</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="firstPhone">
          <i class="iconfont icon-cong font-30 color-blue"></i>
        </div>
      </div>
    </div>
    <div class="contact-form padding-horizontal-30  bg-white ">
      <div class="form-item border-bottom-1">
        <InputsComponent :inputs="secondNameInput" @GET_INPUT_TEXT_EVENT="getSecondContactName"></InputsComponent>
      </div>
      <div class="form-item border-bottom-1">
        <div class="item-left">
          <i class="iconfont icon-cong color-blue"></i>
          <span class="font-30 color-black">与你的关系</span>
        </div>
        <div class="itme-default" @click="openModal('second')">
          <span class="font-30 color-light-grey">{{seconRelation ? seconRelation: '请选择'}}</span>
          <i class="iconfont icon-cong font-30 color-light-grey"></i>
        </div>
      </div>
      <div class="form-item">
        <div class="item-left">
          <i class="iconfont icon-cong color-blue"></i>
          <span class="font-30 color-black">联系人手机</span>
        </div>
        <div class="itme-default">
          <input type="text" v-model="secondPhone" maxlength="11">
          <i class="iconfont icon-cong font-30 color-blue"></i>
        </div>
      </div>
    </div>
    <div class="contact-button padding-horizontal-30">
      <ButtonComponent :button="button" @SUBMIT_EVENT="submit"></ButtonComponent>
    </div>
    <ModalComponent v-show="modalShow">
      <div class="modal-content padding-horizontal-30">
        <ul class="content-list">
          <li class="list-item border-radius-12" v-for="(item, index) in relationList" :key="index" @click="getRelation(item)">{{item}}</li>
        </ul>
        <div class="content-btn color-red border-radius-12" @click="cancel">取消</div>
      </div>
    </ModalComponent>
  </section>
  <!-- e 添加联系人 -->
</template>

<script>
// include dependence
import Account from '../../class/Account.class.js'
import Check from '../../class/Check.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import ModalComponent from '../../module/modal/modal.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AddContactComponent',
  data () {
    return {
      mark: null,
      firstName: '',
      secondName: '',
      firstRelation: '',
      seconRelation: '',
      firstPhone: '',
      secondPhone: '',
      relationList: null,
      modalShow: false,
      firstNameInput: {
        type: 'text',
        leftText: '联系人姓名',
        leftIcon: 'cong',
        placeholder: '请输入姓名'
      },
      secondNameInput: {
        type: 'text',
        leftText: '联系人姓名',
        leftIcon: 'cong',
        placeholder: '请输入姓名'
      },
      // start params
      'button': {
        default: [{
          type: 'primary',
          text: '确认添加'
        }]
      },
      'tip': {
        type: 'default',
        content: '借条大师保障您的信息安全。',
        icon: 'chuyin'
      },
      'title': {
        contentText: '添加联系人'
      }
      // end params
    }
  },
  components: {
    InputsComponent,
    ModalComponent,
    TipComponent,
    TitleComponent,
    ButtonComponent
    // include components
  },
  methods: {
    cancel () {
      this.modalShow = false
    },
    getRelation (item) {
      switch (this.mark) {
        case 'first':
          this.firstRelation = item
          break
        case 'second':
          this.seconRelation = item
          break
      }
      this.modalShow = false
    },
    openModal (mark) {
      switch (mark) {
        case 'first':
          this.relationList = ['父亲', '母亲', '配偶']
          this.relationList.splice(this.relationList.findIndex(item => item === this.seconRelation), 1)
          break
        case 'second':
          this.relationList = ['父亲', '母亲', '配偶', '亲戚', '朋友']
          this.relationList.splice(this.relationList.findIndex(item => item === this.firstRelation), 1)
          break
      }
      this.mark = mark
      this.modalShow = true
    },
    submit () {
      if (Check.name(this.firstName) && Check.phone(this.firstPhone)) {
        // 请检查第一个联系人的姓名与电话号码
        return false
      }
      if (Check.name(this.secondName) && Check.phone(this.secondPhone)) {
        // 请检查第二个联系人的姓名与电话号码
        return false
      }
      Http.send({
        url: 'ContactsAuth',
        data: {
          token: Storage.token,
          userPhone: Storage.phone,
          contactList: [
            JSON.stringify({
              ContactPhone: this.firstPhone,
              ContactName: this.firstName,
              Relationship: this.firstRelation
            }),
            JSON.stringify({
              ContactPhone: this.secondPhone,
              ContactName: this.secondName,
              Relationship: this.seconRelation
            })
          ],
          telList: null
        }
      }).success(data => {
        if (data.IsContactPass) {
          Router.push('zhima-creadit')
          Account.contact = data.IsContactPass
        } else {
          Router.back()
        }
      }).fail(data => {
      })
    },
    getFirstContactName (text) {
      this.firstName = text
    },
    getSecondContactName (text) {
      this.secondName = text
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./add-contact.scss";
</style>
