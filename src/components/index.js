//工具引入
import {
  Packing
} from './packingComponent'
import {
  Proper,
  ButtonProper,
  MessageProper,
  FormProper,
  InputProper
} from './proper'
import tests from '../test'
import {MountValidator} from './validator'

//组件引入
import button from './button'
import form from './form'
import input from './input'
import city from './city'
import message from './message'
import select from './select'

const componentContainer = new Array()
const overAll = new Object()

//组件封装  存入数组
componentContainer.push(new Packing(button, 'ov-button', '这是一个button组件,也可以作为卡片类组件使用', new ButtonProper()))
componentContainer.push(new Packing(form,'ov-form','这是一个表单组件',new FormProper()))
componentContainer.push(new Packing(input, 'ov-input', '这是一个input组件,通常情况下，应当处理 callback 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。',new InputProper()))
componentContainer.push(new Packing(select,'ov-select','下拉菜单组件'))
componentContainer.push(new Packing(city, 'ov-city', '这是一个city组件'))
componentContainer.push(new Packing(message, 'ovNotice', '使用this.ovNotice调用消息通知',new MessageProper()))

//将测试环境和组件合并
mergeTestComponent(componentContainer, tests)

//挂载至overAll对象
overAll.components = componentContainer

//实现混入
overAll.install = function (Vue) {
  Vue.mixin({
    created() {
      //拿到最上层组件
      overAll.components.map(item => {
        if (item['component']['isFunction']) {
          Object.keys(item['component']['function']).map(fun=>{
            this[fun] = item['component']['function'][fun]
          })
          
        } else {
          if (this.$options.overAll) {
            Vue.component(item.name, item.component)
          }
        }
      })

    }
  })
}
MountValidator(overAll)
function mergeTestComponent(componentArray, tests) {
  tests.map(item => {
    const res = componentArray.find((cpm) => {
      return cpm.name === item.name
    })
    if (Object.keys(res).length) {
      res['test'] = item
    }
  })
}
export default overAll