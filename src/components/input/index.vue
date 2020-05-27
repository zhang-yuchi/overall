<!--  -->
<template>
  <div :class="[itemClass]">
    <div class="ov-input-block">
      <!-- 用于表单前的小icon -->
      <slot name="head"></slot>
      <input
        v-model="FormValue"
        :placeholder="placeholder"
        @input="trigger==='input'?check():noop()"
        @blur="trigger==='blur'?check():noop()"
        :class="[ovClass]"
      />
      <!-- 用于表单后的小icon -->
      <slot name="tail"></slot>
    </div>
    
    <!-- 错误提示的div -->
    <div :class="[tipsClass]">{{Inputerror}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import overAll from "../index";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    "ov-class": String,
    "item-class": String,
    "tips-class": String,
    error: String,
    value:String,
    placeholder: String,
    formData: Object,
    field: String,
    validator: String,
    trigger: String
  },
  components: {},
  data() {
    //这里存放数据
    return {
      FormValue:this.value,
      Inputerror:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    check() {
      // let value = this.value;
      const validate = overAll.check(this.formData, this.field, this.validator);
      if(validate&&validate.length>0){
        this.Inputerror = validate[0]
      }else{
        this.Inputerror = ""
      }
      this.$emit('callback',{
        formData:this.formData,
        field:this.field,
        value:this.FormValue
      })
      // console.log(value);
      
    },
    noop() {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.value);
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
<style lang='less'>
.ov-input-block{
  position: relative;
}
</style>