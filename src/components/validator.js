class Validator {
  validate(formdata) {
    let res = []
    Object.keys(this).map(key => {
      if (this[key] instanceof Array) {
        const Rules = this[key]
        if(!formdata[key]){
          formdata[key] = ""
        }
        res.push(Rules.map(rule => {
          return rule.verify(formdata[key], rule.rule, key)
        }))
      }
    })
    return flattenResult(res)
  }
}
function flattenResult(res) {
  let flattenResult = new Object()
  res.map(i=>{
    return i.filter(k=>{
      return k
    })
  }).map(item => { //item是一个数组
    if (item[0]) {
      const key = item[0].field //从item[0]拿到字段名
      let msgs = new Array()
      flattenResult[key] = new Object()
      item.map(i => {
        msgs.push(i.msg)
      })
      flattenResult[key] = msgs
    }

  })
  return flattenResult
}
class Rule {
  constructor(rule, tips, opt) {
    this.rule = rule
    this.tips = tips
    this.opt = opt
  }
  verify(value, rule, field) {
    if (!this[rule](value, field)) {
      return MsgSender.Send(this.tips, field)
    }
  }
  //验证长度是否符合
  isLength(value) {
    //长度验证规则  接受 max 和 min 参数
    let max = parseInt(this.opt.max)
    let min = parseInt(this.opt.min)
    if (max) {
      if (value.length > max) {
        return false
      }
    }
    if (min) {
      if (value.length < min) {
        return false
      }
    }
    return true
  }
  //验证是否是邮箱
  isEmail(value) {
    const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return emailReg.test(value)
  }
  //验证是否是手机号
  isPhone(value){
    const phoneReg = /^1[3456789]\d{9}$/
    return phoneReg.test(value)
  }
  //验证是否是身份证
  isIdentity(value){
    const idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return idReg.test(value)
  }
}
class MsgSender {
  constructor(msg, field) {
    this.msg = msg
    this.field = field
  }
  static Send = function (msg, field) {
    return {
      msg,
      field
    }
  }
}
class LoginValidator extends Validator {
  constructor() {
    super()
    this.account = [
      new Rule('isLength', '用户名长度过短', {
        min: 6
      }),
      new Rule('isEmail','用户名不符合邮箱规范')
    ]
    this.password = [
      new Rule('isLength', '密码长度过短', {
        min: 7
      })
    ]
  }
}
function MountValidator(overAll) {
  overAll.validators = {
    LoginValidator
  }

  overAll.check = (formdata,field,validator)=>{
    //校验单个表单项
    if(typeof validator !== 'string'){
      console.warn('we need a string validator name for this param')
    }
    // console.log(new overAll.validators[validator]().validate(formdata));
    return new overAll.validators[validator]().validate(formdata)[field]
  }
  overAll.checkAll = (formdata,validator)=>{
    //校验所有表单项
    if(typeof validator !== 'string'){
      console.warn('we need a string validator name for this param')
    }
    return new overAll.validators[validator]().validate(formdata)
  }
}
export {
  MountValidator
}