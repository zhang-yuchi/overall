import button from './button'
import message from './message'
import form from './form'
import input from './input'
let map = {
  'ov-button':'ov-button',
  'ovNotice':"ovNotice",
  'ov-form':'ov-form',
  'ov-input':'ov-input'
}
//引入
const tests = new Array()
tests.push(packingTestComponent(button,map['ov-button']))
tests.push(packingTestComponent(message,map['ovNotice']))
tests.push(packingTestComponent(form,map['ov-form']))
tests.push(packingTestComponent(input,map['ov-input']))
//封装TestComponent
function packingTestComponent(cpm,name){
  if(!name){
    throw new Error("name取值不能为空")
  }
  return{
    component:cpm,
    name
  }
}
export default tests