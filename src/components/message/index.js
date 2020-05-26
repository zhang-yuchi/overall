import message from './template.vue'
import Vue from 'vue'

function ovNotice(props){
  const vm = new Vue({
    render(createElement){
      return createElement(message,{props})
    }
  }).$mount()
  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]
  comp.remove = ()=>{
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  console.log(vm);
  vm.comp = comp
  return comp
}

export default {
  isFunction:true,
  function:{
    'ovNotice':ovNotice
  }
}