

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import components from './components'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  for(var key in components){    
      Vue.component('yl-'+key, components[key])
  }  
  Vue.use(Element)
}
