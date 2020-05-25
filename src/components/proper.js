class Proper {
  constructor() {
    this.ovClass = {
      type:'String',
      desc:"对应于组件内部的样式,将会全部挂载至外部编写",
      test:"overall-class"
    },
    transferHump(this)
  }

}
class ButtonProper extends Proper{
  constructor(){
    super()
    this.ovClass = {
      type:'String',
      desc:"对应于组件内部的样式,将会全部挂载至外部编写",
    },
    this.clickClass = {
      type:"String",
      desc:"当按钮被点击时将会触发的类",
    }
    this.callback = {
      type:'Function',
      desc:"按钮被点击时将会触发的回调函数",
    }
    transferHump(this)
  }
}
//转换驼峰
function transferHump(obj){
  Object.keys(obj).map(key=>{
    obj[key].name = _transferHump(key)
  })
}
function _transferHump(field){
  // console.log(field);
  const reg = /[A-Z]/g
  let res = field.search(reg)
  while(res!==-1){
    let char = field[res]
    let newChar = '-'+char.toLowerCase();
    field = field.replace(char,newChar);
    res = field.search(reg)
  }
  return field
}
export {
  Proper,
  ButtonProper
}
