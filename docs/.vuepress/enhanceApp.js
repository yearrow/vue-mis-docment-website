/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-03 17:47:35
 * @LastEditTime: 2020-02-20 14:45:13
 */


import ElementUi from 'element-mini-ui'
// import ElementExtension from 'element-extension'
import 'element-mini-ui/lib/theme/index.css'
import components from './components'
import './styles/index'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  for(var key in components){    
      Vue.component('yl-'+key, components[key])
  }  
  Vue.use(ElementUi)
  // Vue.use(ElementExtension)
}
