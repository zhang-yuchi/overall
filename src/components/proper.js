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
      desc:"代表弹窗持续时间,若autoClose为true,则不会关闭;默认时间为1s"
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
      type:'Boolean',
      desc:"是否自动关闭",
      noHump:true
    }
    transferHump(this)
  }
}
class FormProper extends Proper{
  constructor(){
    super()
    this.formData = {
      type:"Object",
      desc:"作为校验的表单对象",
      noHump:true
    }
    transferHump(this)
  }
}
class InputProper extends Proper{
  constructor(){
    super()
    this.ovClass = {
      type:"String",
      desc:"输入框样式"
    }
    this.itemClass = {
      type:"String",
      desc:"输入框外部容器样式"
    },
    this.tipsClass = {
      type:'String',
      desc:"错误提示框样式"
    },
    this.error = {
      type:'String',
      desc:"错误提示文本"
    },
    this.field = {
      type:"String",
      desc:"所属表单字段"
    },
    this.placeholder = {
      type:'String',
      desc:"占位符"
    }
    this.formData = {
      type:'Object',
      desc:"从父组件引入的form表单,若需要使用校验则必传"
    }
    this.trigger = {
      type:"String",
      desc:"触发校验的方式,支持input和blur"
    }
    this.validator = {
      type:"String",
      desc:"触发校验的校验器,传入字符串,在validator中定义"
    }
    this.field = {
      type:"String",
      desc:"字段名称"
    }
    this.vModel = {
      type:"String",
      desc:"传入绑定的值 如 form.account"
    }
    this.tipsEnterStyle = {
      type:"String",
      desc:"input错误框显示动画,需要自行传入动画css"
    }
    this.tipsOuterStyle = {
      type:"String",
      desc:"input错误提示框消失动画,需要自行传入动画css"
    }
    // this.inTime = {
    //   type:"String",
      
    // }
    this.outTime = {
      type:"String",
      desc:"input错误提示框消失的持续时间,当超过这个时间后,将移除tips-outer-style类并将错误信息置为空"
    }
    this.callback = {
      type:"Function",
      desc:"返回参数"
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
  MessageProper,
  FormProper,
  InputProper
}
