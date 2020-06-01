<!--  -->
<template>
<div class=''>
      <ov-button
      ov-class="normal-class"
      @callback="clickCallback"
      click-class="click"
      style="margin-right:30px"
      :duration="300"
    >点击出现弹窗</ov-button>
    <ov-button
      ov-class="normal-class"
      @callback="clickCustom"
      click-class="click"
      :duration="300"
    >点击出现自定义弹窗</ov-button>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  clickCallback(ev){
    let cm = this['ovNotice']({
      duration:1000,
      content:"弹窗测试",
      autoClose:true,
    });
  },
  clickCustom(){
    let cm = this.ovNotice({
      content:"自定义弹窗样式",
      'notice-class':"custom-notice",
      'screen-class':'custom-screen',
      autoClose:false
    })
    setTimeout(()=>{
      cm.remove()
    },5000)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {}, //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
}
</script>
<style>
.ov-screen{
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%);
}
.ov-notice{
  padding: 15px 30px;
  background-color: #333;
  opacity: 0.7;
  color: white;
  border-radius: 15px;
}
.custom-screen{
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.custom-notice{
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  background-color: #f2f2f2;
  color: #333;
}
</style>