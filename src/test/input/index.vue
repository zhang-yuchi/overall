<!--  -->
<template>
  <div class>
    <ov-input
      :formData="form"
      trigger="blur"
      validator="LoginValidator"
      field="account"
      v-model="form.account"
      @callback="back"
      item-class="item-style-form"
      ov-class="input-style-form"
      placeholder="用户名"
      style="margin-right:30px;"
      tips-class="error"
      focus-class="focus-input"
      tips-enter-style="error-in"
      tips-outer-style="error-out"
      :in-time="300"
      :out-time="300"
    >
      <div slot="head" class="header-icon">H</div>
      <div slot="tail" class="tail-icon">T</div>
    </ov-input>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import overAll from "../../components";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
        account: "",
        password: ""
      },
      validator: null,
      // overAll:null
      check: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    back(res) {
      res.formData[res.field] = res.value;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.overAll = overAll;
    this.validator = overAll.LoginValidator;
    setTimeout(() => {
      this.check = !this.check;
    }, 1000);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {} //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
};
</script>
<style>
.form-style {
  /* padding: 10px; */
  margin-top: 10px;
  /* border: 1px solid black; */
}
.item-style-form {
  position: relative;
  display: inline-block;
}
.input-style-form {
  width: 100%;
  border: 1px solid #ccc;
  transition: 0.3s;
  outline: none;
  padding: 10px 30px;
  box-sizing: border-box;
  border-radius: 10px;
}
.header-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.tail-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}
.error {
  position: absolute;
  color: red;
  bottom: 0px;
  z-index: -1;
  /* transform: translateY(100%); */
}
.focus-input {
  border-color: rgb(11, 174, 174);
}
.error-in {
  animation: tipsIn 0.3s forwards;
}
.error-out {
  animation: tipsOut 0.3s forwards;
}
@keyframes tipsIn {
  form {
    /* margin-top:-30px;
     */
    transform: translateY(50%);
  }
  to {
    /* margin-top: 10px; */
    transform: translateY(100%);
  }
}
@keyframes tipsOut {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
</style>