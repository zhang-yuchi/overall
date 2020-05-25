import {
  Packing
} from './packingComponent'
import {Proper,ButtonProper} from './proper'
import tests from '../test'

import button from './button'
import input from './input'
import city from './city'

const componentContainer = []
const overAll = {}

//组件封装  存入数组
componentContainer.push(new Packing(button, 'ov-button', '这是一个button组件', new ButtonProper()))
componentContainer.push(new Packing(input, 'ov-input', '这是一个input组件'))
componentContainer.push(new Packing(city, 'ov-city', '这是一个city组件'))

//将测试环境和组件合并
mergeTestComponent(componentContainer,tests)

//挂载至overAll对象
overAll.components = componentContainer

//实现混入
overAll.install = function (Vue) {
  Vue.mixin({
    created() {
      if (this.$options.overAll) {
        //拿到最上层组件
        overAll.components.map(item => {
          Vue.component(item.name, item.component)
        })
      }
    }
  })
}
function mergeTestComponent(componentArray,tests){
  tests.map(item=>{
    const res = componentArray.find((cpm)=>{
      return cpm.name===item.name
    }) 
    if(Object.keys(res).length){
      res['test'] = item
    }
  })
}
export default overAll