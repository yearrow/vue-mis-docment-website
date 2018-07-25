## 业务组件

> 业务组件包含具体的业务逻辑，根据具体的业务场景使用。

###  全局字典库

#### datadictionaryforsel

> 局部引入
> 配置标签： `<yl-datadictionaryforsel></yl-datadictionaryforsel>` 

**作用:** 平行全局字典库


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|false| Boolean|false|
| size|控件大小| String|''|	
| code|字典编码| Stirng|''|
| clearable|清除| Boolean|false|
**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentvalue| 选中项时触发 |为当前选中节点的data的值|
| clear| 清除数据时触发 |----|
说明： 该组件已加入至`renderComs`和`renderTableRowComs`渲染器中。



#### datadictionaryfortree

> 局部引入
> 配置标签： `<yl-datadictionaryfortree></yl-datadictionaryfortree>` 

**作用:** 树形全局字典库


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| code|字段编码| Stirng|''|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|
**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`和`renderTableRowComs`渲染器中。

---

### 单位字典库


#### comdatadictionary

> 局部引入
> 配置标签： `<yl-comdatadictionary></yl-comdatadictionary>` 

**作用:** 树形单位字典库


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| code|字段编码| Stirng|''|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`和`renderTableRowComs`渲染器中。

---

### 组织机构树


#### organizeAllTree

> 局部引入
> 配置标签： `<yl-organizealltree></yl-organizealltree>` 

**作用:**  加载全部的组织机构树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|
**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`渲染器中。



#### organizeTree

> 局部引入
> 配置标签： `<yl-organizetree></yl-organizetree>` 

**作用:**  根据权限加载组织机构树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|
**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`渲染器中。


#### organizetreewithpanel

> 局部引入
> 配置标签： `<yl-organizetreewithpanel></yl-organizetreewithpanel>` 

**作用:**  根据权限加载组织机构面板树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| expandOnClickNode|是否在点击节点的时候展开或者收缩节点|Boolean|false|
| highlightCurrent|是否高亮选中行|Boolean|false|
| panelWidth|面板宽度| String|200px|
| nodeStateConf|节点配置| Object|{}|
| isexpand|是否默认展开| Boolean|false|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|

说明： 该组件已加入至`renderSelComs`渲染器中。

---

### 菜单树 


#### menuItemTree

> 局部引入
> 配置标签： `<yl-menuItemTree></yl-menuItemTree>` 

**作用:**  根据加载全部菜单树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|
**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|




#### menuItemTreeWithPanel

> 局部引入
> 配置标签： `<yl-menuItemTreeWithPanel></yl-menuItemTreeWithPanel>` 

**作用:**  加载全部菜单面板树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| expandOnClickNode|是否在点击节点的时候展开或者收缩节点|Boolean|false|
| highlightCurrent|是否高亮选中行|Boolean|false|
| panelWidth|面板宽度| String|200px|
| nodeStateConf|节点配置| Object|{}|
| isexpand|是否默认展开| Boolean|false|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|



---
###  角色树  


#### roleTree

> 局部引入
> 配置标签： `<yl-roleTree></yl-roleTree>` 

**作用:**  根据角色加载相应的角色树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

---

### 省市管理

#### provinceCitySelTree

> 局部引入
> 配置标签： `<yl-provinceCitySelTree></yl-provinceCitySelTree>` 

**作用:**  加载全部的省市数据


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| isexpand|是否默认展开| Boolean|false|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

---

### 材料类别树


#### materialClassTree

> 局部引入
> 配置标签： `<yl-materialclasstree></yl-materialclasstree>` 

**作用:**  逐步加载材料类别信息树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| defaultText|初始默认值| String|''|


**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`渲染器中。


#### materialclasstreewithpanel

> 局部引入
> 配置标签： `<yl-materialclasstreewithpanel></yl-materialclasstreewithpanel>` 

**作用:**  逐步加载材料类别信息面板


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| expandOnClickNode|是否在点击节点的时候展开或者收缩节点|Boolean|false|
| highlightCurrent|是否高亮选中行|Boolean|false|
| panelWidth|面板宽度| String|200px|
| nodeStateConf|节点配置| Object|{}|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|

说明： 该组件已加入至`renderSelComs`渲染器中。

---
  
### 工号树


#### ghtree

> 局部引入
> 配置标签： `<yl-ghtree></yl-ghtree>` 

**作用:**  逐步加载工号信息树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| defaultText|初始默认值| String|''|


**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`渲染器中。


#### ghTreeWithPanel

> 局部引入
> 配置标签： `<yl-ghtreewithpanel></yl-ghtreewithpanel>` 

**作用:**  逐步加载工号树信息面板


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| expandOnClickNode|是否在点击节点的时候展开或者收缩节点|Boolean|false|
| highlightCurrent|是否高亮选中行|Boolean|false|
| panelWidth|面板宽度| String|200px|
| nodeStateConf|节点配置| Object|{}|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|

说明： 该组件已加入至`renderSelComs`渲染器中。

---
  

### 标准工号树


#### standardghtree

> 局部引入
> 配置标签： `<yl-standardghtree></yl-standardghtree>` 

**作用:**  逐步加载标准工号信息树


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| placeholder|提示文本| Stirng|''|		
| disabled|是否禁用| Boolean|false|
| size|控件大小| String|''|	
| readonly|是否只读|Boolean|false|
| autofocus|是否聚焦|Boolean|false|
| nodeStateConf|树节点渲染配置| Object|{}|
| displaytoolBar|是否显示工具栏| Boolean|false|
| filterVisibe|是否显示过滤框| Boolean|false|
| defaultText|初始默认值| String|''|


**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|
| clear| 清除选中项时触发|为当前选中节点的data的值|

说明： 该组件已加入至`renderComs`渲染器中。


#### standardghtreewithpanel

> 局部引入
> 配置标签： `<yl-standardghtreewithpanel></yl-standardghtreewithpanel>` 

**作用:**  逐步加载标准工号树信息面板


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| expandOnClickNode|是否在点击节点的时候展开或者收缩节点|Boolean|false|
| highlightCurrent|是否高亮选中行|Boolean|false|
| panelWidth|面板宽度| String|200px|
| nodeStateConf|节点配置| Object|{}|

**方法**

暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中节点时触发 |为当前选中节点的data的值|

说明： 该组件已加入至`renderSelComs`渲染器中。

---
  
