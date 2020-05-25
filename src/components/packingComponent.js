import {Proper} from './proper'
class Packing {
  constructor(component, name, desc, proper) {
    this.component = component
    this.name = name
    this.intro = desc
    this.proper = {
      'params':[],
      'function':[]
    }
    if(!proper){
      proper = new Proper()//若没有proper则会返回一个父级的proper
    }
    Object.keys(proper).map(key=>{
      const item = proper[key]
      if(item.type==='Function'){
        this.proper['function'].push(item)
      }else{
        this.proper['params'].push(item)
      }
    })

  }
}

export {
  Packing
}