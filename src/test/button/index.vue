<!--  -->
<template>
  <div class>
    <ov-button
      ov-class="normal-class"
      @callback="clickCallback"
      click-class="click"
      :duration="300"
    >全部</ov-button>
    <ov-button
      ov-class="unactive-class"
      @callback="clickCallback"
      click-class="normal-click"
      :duration="300"
    >虫害</ov-button>
    <ov-button
      ov-class="normal-class"
      :disabled="true"
      forbidden-class="forbidden-class"
      @callback="clickCallback"
      click-class="normal-click"
      :duration="300"
      style="margin-left:30px;"
    >禁止</ov-button>
    <ov-button style="margin-left:30px">无样式</ov-button>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    clickCallback(ev) {
      console.log(ev);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.normal-class {
  background-color: rgb(11, 174, 174);
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;
}
.unactive-class {
  margin-left: 30px;
  background-color: white;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  color: #333;
  border: 1px solid rgb(196, 196, 196);
  cursor: pointer;
  transition: 0.3s linear;
}
.forbidden-class {
  background-color: gray;
  cursor: no-drop;
}
.click {
  background-color: #0a9494;
  border: none;
}
.normal-click {
  background-color: #f1f1f1;
}
</style>