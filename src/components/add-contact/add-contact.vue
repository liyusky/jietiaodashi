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
        <InputsComponent :inputs="secondNameInput"  @GET_INPUT_TEXT_EVENT="getSecondContactName"></InputsComponent>
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
          <input type="text" v-model="secondPhone">
          <i class="iconfont icon-cong font-30 color-blue"></i>
        </div>
      </div>
    </div>
    <div class="contact-button padding-horizontal-30">
      <ButtonComponent :button="button" @SINGLE_SUBMIT_EVENT="addContactSubmit"></ButtonComponent>
    </div>
    <ModalComponent v-show="modalShow">
      <div class="modal-content">
        <div class="content-button">
          <button class="button" @click="cancel"><div>取消</div></button>
          <button class="button" @click="getRelation"><div>确认</div></button>
        </div>
        <nav class="content-nav">
          <ul class="nav-list">
            <li class="list-item" :class="{active: isIndex === index}" v-for="(item, index) in relationList" :key="index" @click="switchtRelation(item, index)">{{item}}</li>
          </ul>
        </nav>
      </div>
    </ModalComponent>
  </section>
  <!-- e 添加联系人 -->
</template>

<script>
// include dependence
import ButtonComponent from '../../module/button/button.vue'
import InputsComponent from '../../module/inputs/inputs.vue'
import ModalComponent from '../../module/modal/modal.vue'
import TipComponent from '../../module/tip/tip.vue'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'AddContactComponent',
  data () {
    return {
      firstName: '',
      secondName: '',
      firstRelation: '',
      seconRelation: '',
      firstPhone: '',
      secondPhone: '',
      relationList: ['父亲', '母亲', '哥哥', '姐姐', '弟弟', '妹妹', '爷爷', '奶奶', '配偶', '其他'],
      modalShow: false,
      relationMark: null,
      isIndex: 0,
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
    switchtRelation (item, index) {
      this.isIndex = index
    },
    cancel () {
      this.modalShow = false
    },
    getRelation () {
      this.modalShow = false
      if (this.relationMark === 'first') {
        this.firstRelation = this.relationList[this.isIndex]
      } else {
        this.seconRelation = this.relationList[this.isIndex]
      }
    },
    openModal (mark) {
      this.isIndex = 0
      this.relationMark = mark
      this.modalShow = true
    },
    addContactSubmit () {},
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
