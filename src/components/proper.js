class Proper {
  constructor() {
    this.ovClass = {
      type:'String',
      desc:"对应于组件内部的样式,将会全部挂载至外部编写,使用时请务必考虑优先级",
    },
    transferHump(this)
  }

}
class ButtonProper extends Proper{
  constructor(){
    super()
    this.clickClass = {
      type:"String",
      desc:"当按钮被点击时将会触发的类",
    }
    this.duration = {
      type:"Number",
      desc:"按钮点击并还原的时间"
    }
    this.disabled = {
      type:'Boolean',
      desc:"按钮是否可点击的参数"
    }
    this.forbiddenClass = {
      type:"String",
      desc:"按钮在禁止时所使用的类名"
    }
    this.callback = {
      type:'Function',
      desc:"按钮被点击时将会触发的回调函数",
    }
    transferHump(this)
  }
}
class MessageProper{
  constructor(){
    this.duration = {
      type:'Number',
      desc:"代表弹窗持续时间"
    }
    this.noticeClass = {
      type:"String",
      desc:"消息框样式"
    }
    this.screenClass = {
      type:'String',
      desc:"消息框位置相关样式"
    }
    this.content = {
      type:"String",
      desc:"消息框内容"
    }
    this.autoClose = {
      type:'String',
      desc:"是否自动关闭",
      noHump:true
    }
    transferHump(this)
  }
}
//转换驼峰
function transferHump(obj){
  Object.keys(obj).map(key=>{
    if(!obj[key]['noHump']){
      obj[key].name = _transferHump(key)
    }else{
      obj[key].name = key
    }

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
  ButtonProper,
  MessageProper
}
