<!--  -->
<template>
  <div :class="['ov-select-style',selectStyle]">
    <div :class="[ovClass]" ref="target" @click="appearSelect">{{optionValue}}</div>
    <!-- 放置额外内容的地方 -->
    <slot></slot>
    <div class="animate-box" :style="`width:${boxWidth}px;height:${boxHeight}px`" ref="outerBox">
      <div
        :class="['hidden-option-box',isHidden?hiddenClass?hiddenClass:'default-hidden-class':'',isAppear?appearClass?appearClass:'default-appear-class':'']"
        :style="`transition:${this.durationTime};max-height:${this.maxHeight}px`"
        ref="optionBox"
      >
        <div
          :class="[optionClass]"
          @click="changeOption(item,index)"
          v-for="(item,index) in data"
          :key="item.value"
        >{{item.option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    "ov-class": String,
    "option-class": String,
    "select-style": String,
    "hidden-class": String, //弹框出现时加入的css样式
    "appear-class": String, //弹框消失时出现的css样式
    data: {
      type: Array,
      default: []
    },
    duration: {
      type: Number,
      default: 300
    },
    maxHeight: {
      type: Number,
      default: 200
    }
  },
  components: {},
  data() {
    //这里存放数据
    return {
      optionValue: "",
      boxHeight: 0,
      boxWidth: 0,
      isHidden: true,
      isAppear: false
    };
  },
  //监听属性 类似于data概念
  computed: {
    durationTime() {
      return (this.duration / 1000).toFixed(2) + "s";
    }
  },
  //监控data中的数据变化
  watch: {
    data() {
      let height = this.$refs["optionBox"].offsetHeight;
      this.boxHeight = height;
    }
  },
  //方法集合
  methods: {
    changeOption(option, index) {
      this.optionValue = option.option;
      this.$emit("change", option, index);
      this.hidden();
    },
    hidden() {
      this.isAppear = false;
      this.isHidden = true;
    },
    appear() {
      this.isAppear = true;
      this.isHidden = false;
    },
    formatHTML() {
      this.optionValue = this.data[0].option;
      let height = this.$refs["optionBox"].offsetHeight;
      let width = this.$refs["optionBox"].offsetWidth;
      this.boxHeight = height;
      this.boxWidth = width;
    },
    appearSelect() {
      if (this.isHidden) {
        this.appear();
      } else {
        this.hidden();
      }
    },
    windowFeedBack(target){
      console.log(this);
      // console.log(target.isEqualNode(this.$refs['otpionBox']));
      if(!target.isEqualNode(this.$refs["target"])){
        this.hidden()
      }
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.formatHTML();
    window.onclick = (e)=>{//需要混入
      this.windowFeedBack(e.target)
    }
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
.ov-select-style {
  /* overflow: hidden; */
  position: relative;
}
.hidden-option-box {
  top: 0;
  overflow: auto;
  /* transition: 0.3s; */
  /* transform: translateY(100%); */
  position: absolute;
}
.animate-box {
  overflow: hidden;
  top: 100%;
  position: absolute;
  display: block;
}
.default-hidden-class {
  top: -100%;
  opacity:0;
}
.default-appear-class {
  top: 0;
  opacity: 1;
}
</style>