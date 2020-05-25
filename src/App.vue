<!--  -->
<template>
  <div id="app">
    <div class="title">overAll --基于VUE,轻量无样式组件</div>
    <div class="capacity">
      <div class="nav" style="height:100%;overflow:auto">
        <div
          v-for="(item) in components"
          class="nav-block"
          :key="item.name"
          :class="active==item.name?'active-nav':''"
          @click="goToContent(item.name)"
        >
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="content">
        <div v-for="(item) in components" class="block" :ref="item.name" :key="item.name">
          <div class="cpm-name">{{item.name}}</div>
          <div class="intro">{{item.intro}}</div>
          <div :id="item.name"></div>
          <div class="playground">
            <div :id="`${item.name}-playground`"></div>
          </div>
          <div class="attr-title">参数</div>
          <table>
            <tr class="table-head">
              <th>参数名称</th>
              <th>参数类型</th>
              <th>参数描述</th>
            </tr>
            <tr class="table-body" v-for="(it,ky) in item.proper.params" :key="ky">
              <th width="30%">{{it.name}}</th>
              <th width="30%">{{it.type}}</th>
              <th width="30%">{{it.desc}}</th>
            </tr>
          </table>
          <div class="attr-title">方法</div>
          <table>
            <tr class="table-head">
              <th width="30%">方法名称</th>
              <th width="30%">方法类型</th>
              <th width="30%">方法描述</th>
            </tr>
            <tr class="table-body" v-for="(it,ky) in item.proper.function" :key="ky">
              <th>{{it.name}}</th>
              <th>{{it.type}}</th>
              <th>{{it.desc}}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import overAll from "./components";
import Vue from "vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: "ov-button"
    };
  },
  //监听属性 类似于data概念
  computed: {
    components() {
      return overAll.components;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goToContent(name) {
      this.$nextTick().then(() => {
        if (this.active === name) {
          return;
        }
        this.active = name;
        const top = this.$refs[this.active][0].offsetTop;
        const container = this.$el.querySelector(".content");
        container.scrollTop = top;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick().then(() => {
      const components = overAll.components;
      components.map((item, index) => {
        let Instance = Vue.extend(item.component);
        let instance = new Instance().$mount(`#${item.name}`)
        if(item['test']){
          let name = item['name']
          let testInstance = Vue.extend(item.test.component)
          new testInstance().$mount(`#${item.name}-playground`)
        }
      });
    });
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
.title {
  line-height: 80px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 30px;
  border-bottom: 1px solid #f1f1f1;
  font-weight: bold;
}
html,
body,
#app {
  height: 100%;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
#app {
  padding: 0 80px;
}
.capacity {
  width: 100%;
  position: relative;
  height: calc(100% - 81px);
}
.nav {
  padding: 10px;
  box-sizing: border-box;
  width: 20%;
  position: absolute;
}
.content {
  padding: 10px 20px;
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
  margin-left: 20%;
}
.block {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}
.block:last-of-type {
  margin-bottom: 30px;
}
.cpm-name {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
  line-height: 2em;
}
.intro {
  margin: 18px 0;
}
.nav-block {
  padding: 10px 20px;
  cursor: pointer;
}
.nav-block:hover {
  color: #409eff;
}
.table-body,
.table-head {
  width: 100%;
  text-align: left;
}
table {
  width: 100%;
}
.attr-title {
  margin: 20px 0;
  font-size: 22px;
  color: #1f2f3d;
}
.active-nav {
  color: #409eff;
}
.playground{
  padding: 20px 0;
}
</style>
