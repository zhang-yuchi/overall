import button from './button'
let map = {
  'ov-button':'ov-button',
}
//引入
const tests = new Array()
tests.push(packingTestComponent(button,map['ov-button']))

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