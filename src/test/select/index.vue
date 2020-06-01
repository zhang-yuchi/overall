<!--  -->
<template>
  <div class>
    <ov-select
      :data="data"
      ov-class="select-style"
      select-style="select-content"
      option-class="option-style"
      @change="change"
    ></ov-select>
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
      data: [
        {
          option: "小新",
          value: "xinjiang"
        },
        {
          option: "正南",
          value: "zhengnan"
        },
        {
          option: "阿呆",
          value: "adai"
        },
        {
          option: "风间",
          value: "fengjian"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change(value, index) {
      this.ovNotice({
        content: `你当前选中的对象是${this.data[index].option}  它的值为${value.value}`
      });
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
.option-style {
  padding: 10px;
  line-height: 15px;
  width: 100px;
  cursor: pointer;
  background-color: white;
}
.option-style:hover {
  background-color: #f1f1f1;
}
.select-style {
  cursor: pointer;
  padding: 10px;
  min-width: 100px;
  width: 100px;
  /* text-align: center; */
}
.select-content {
  
}
</style>