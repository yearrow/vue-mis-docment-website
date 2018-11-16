# 组件渲染器

**渲染器配置说明**

> 渲染器在配置中充当了组件的衔接工作，同过渲染器来定义规定好的参数口渲染出不同的组件。目前包含的渲染器有一下几种：`renderComs`控件渲染器,`renderTableRowComs`明细编辑器行内渲染器,`tableSlotComs`表列具名渲染器,`renderSelComs`树选择器渲染器,`containerComs`容器渲染器.

## renderComs

** 说明：**  `renderComs`控件渲染器主要根据传入配置渲染控件相关配置，主要作用于表单生成渲染，过滤器生成渲染。



**控件配置说明**

### `inputNum`

inputNum输入框配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "inputNum", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "maxlength":10000,
                       "minlength":0,
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "placeholder":"", //输入提示字符
                       "icon":"",  //图标
                       "rows":"",  //行数 textarea 有效 
                       "readonly":"", //是否可读
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "blur": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                                                       //参数说明：node为undefind在input控件中无用，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```
---
### `inputText`

inputText输入框配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "inputText", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "maxlength":10000,
                       "minlength":0,
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "type":"text", // text/textarea
                       "placeholder":"", //输入提示字符
                       "icon":"",  //图标
                       "rows":"",  //行数 textarea 有效 
                       "readonly":"", //是否可读
                       "autofocus":"", //是否自动聚焦
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "blur": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}",  //enter键 配置回调函数类型和函数函数体
                                                       //参数说明：node为undefind在input控件中无用，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `span`

span标签渲染组件

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "span", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `switch`

switch开关配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "switch", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "width":120,   //switch 的宽度（像素）
                       "disabled":false,   //是否禁用
                       "onColor":"small",//switch 打开时的背景色
                       "offColor":false, //switch 关闭时的背景色
                       "onText":"text", // switch 打开时的文字
                       "offText":"", //switch 关闭时的文字
                       "offValue":"",  //switch 关闭时的值
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //配置回调函数类型和函数函数体
                                                        //参数说明：node为为change事件之后的参数，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `singleUpload`

上传组件（单）配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "singleUpload", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small",//大小
                        :disabled:""  //是否可用
                        :placeholder:"" 
                        :allowFormat:"" //允许格式 'xml.docx.xlsx.jpeg'
                        :moduleName:""  //模块名称
                        :allowSize:"" //上传大小
                        :action:""  //请求地址 （默认为空）
                        :style:{} 
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //配置回调函数类型和函数函数体
                                                        //参数说明：node为为change事件之后的参数，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```


---

### `multipleUpload`

上传组件（多）配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "multipleUpload", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small",//大小
                        "disabled":""  //是否可用
                        "placeholder":"" 
                        "allowFormat":"" //允许格式 'xml.docx.xlsx.jpeg'
                        "moduleName":""  //模块名称
                        "allowSize":"" //上传大小
                        "action":""  //请求地址 （默认为空）
                        "drag":false //是否启用拖拽上传
                        "fileList":""  //上传的文件列表, 例如: [{name: 'food.jpeg', url: ''},{name: 'food.jpeg', url: ''}]
                        "listType":""  //文件列表的类型 （text/picture/picture-card）
                        "style":{} 
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //配置回调函数类型和函数函数体
                                                        //参数说明：node为为change事件之后的参数，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```
---
### `inputNumber`

计数器配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "inputNumber", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "min":0,   //设置计数器允许的最小值
                       "max":100000, //设置计数器允许的最大值
                       "step":1,//计数器步长
                       "disabled":false, //是否禁用
                       "size":"small", //计数器尺寸
                       "controls":"true", //是否使用控制按钮
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                                                       //参数说明：node为改变以后的值，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `datePicker`

日期控件配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datePicker", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "type":"date",//显示类型  year/month/date/week/ datetime/datetimerange/daterange
                       "disabled":false, //是否禁用
                       "size":"small", //输入框尺寸
                       "placeholder":"", //占位内容
                       "format":"yyyy-MM-dd", //时间日期格式化
                       "align":"left", //对齐方式
                       "defaultValue":"", //可选，DatePicker打开时默认显示的时间
                       "editable":true, //文本框可输入
                       "clearable":true, //是否显示清除按钮
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                                                       //参数说明：node为格式化后的值，_this为模块表单的实例对象。
                     "init": "function(_this,option){}"
                    }
   }

```
---

### `timePicker`

时间控件配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "timePicker", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "type":"date",//显示类型  year/month/date/week/ datetime/datetimerange/daterange
                       "disabled":false, //是否禁用
                       "size":"small", //输入框尺寸
                       "placeholder":"", //占位内容
                       "format":"yyyy-MM-dd", //时间日期格式化
                       "align":"left", //对齐方式
                       "editable":true, //文本框可输入
                       "clearable":true, //是否显示清除按钮
                       "start":true, //开始时间
                       "end":true, //结束时间
                       "step":"00:30", //间隔时间
                       "minTime":"00:00", //最小时间，小于该时间的时间段将被禁用
                       "maxTime":"", //最大时间，大于该时间的时间段将被禁用
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                                                       //参数说明：node为格式化后的值，_this为模块表单的实例对象。
                     "init": "function(_this,option){}"
                    }
   }

```
---


### `commonselect`

通用选择器配置
```json
  {
    "name": "", //绑定对象属性 
    "type": "commonselect", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "clearable":false, //是否显示清除
                        "initData":"", /初始化数据集合
                        "apiConf":"", //请求参数配置
                        "defaultProps":"", //绑定模型
                        "lists":"", //要显示的辅助列
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体、参数说明：node为选中值，_this为模块表单的实例对象。
                    "method1": "function(node,_this,option){}", 
                    "init": "function(_this,option){}"
                    }
   }

```
---
### `tableEdit`

明细编辑器配置
```json
  {
    "name": "", //绑定对象属性 
    "type": "tableEdit", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "tableConfig":{}, //table表的配置项（参见yl-onlytable配置）
                        "tableData":[], //表格呈现数据
                        "sumRowConf":{}, //合计列配置
                        "mapConfig":{}, //映射列配置
                        "addRowCount":undefined, /显示编辑最大条目
                        "notRepeatFiled":"", //编辑条目去重字段
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "delItem": "function(row){}",  //当前行对象
                    "sumCount": "function(){}", 
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `editor`

富文本编辑器配置
```json
  {
    "name": "", //绑定对象属性 
    "type": "editor", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "isPreView":false, //是否显示预览模块
                        "editorOptions":"", //编辑器配置 参见wangEditor官网文档	
                        "content":"", //默认值或传入值
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体、参数说明：node为选中值，_this为模块表单的实例对象。
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `treeselect`

选择树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "treeselect", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "defaultText":"", //是否有默认值  执针对逐步加载方式
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "stepByOne":false, //是否逐步加载模式
                        "treedata":[], //绑定初始值
                        "loaddata":[], //二次加载数据， 只针对逐步加载时有效
                        "isexpand":true, //是否展开  只针对一次性加载时有效
                        "defaultProps":{},  //绑定的对象结构
                        "textOnly":false,  //文本模式
                        "displaytoolBar":false,  //是否开启工具栏
                        "filterTextVisibe":true, //是否显示筛选框
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //blur 配置回调函数类型和函数函数体
                                                     
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `commonTree`

通用逐步选择树配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "commonTree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "defaultText":"", //是否有默认值  执针对逐步加载方式
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "displaytoolBar":false,  //是否开启工具栏
                        "code":"",  //树加载编码
                        "orgId":"",  //组织结构编码
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}"  //清除事件回调                                
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `commonAllTree`

通用逐步选择树配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "commonAllTree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "isexpand":false, //是否默认展开
                        "filterVisibe":false, //是否显示过滤框                                                  
                        "displaytoolBar":false,  //是否开启工具栏
                        "code":"",  //树加载编码
                        "orgId":"",  //组织结构编码
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}"  //清除事件回调                                
                    "init": "function(_this,option){}"
                    }
   }

```
---


### `comdatadictionary`

常用字典库控件配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "comdatadictionary", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "code":"",//字典编码
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "placeholder":"", //输入提示字符
                       "readonly":"", //是否可读
                       "nodeStateConf":{}, //树渲染配置
                       "filterVisibe":false, //是否显示过滤框
                       "isexpand":false,//是否展开
                       "displaytoolBar":false,  //是否开启工具栏
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change配置回调函数类型和函数函数体       
                    "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```

---


### `datadictionaryfortree`

全局字典树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datadictionaryfortree", //控件类型，在renderComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "code":"", //父级编码
                        "size":"small", //控件尺寸
                        "isexpand":false, //是否一次性展开  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "displaytoolBar":false,  //是否开启工具栏
                        "style":{},  //样式
                        "filterVisibe":true //是否显示筛选框
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---
### `datadictionaryforsel`

全局字典选择控件配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datadictionaryforsel", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "code":"", //父级编码
                        "size":"small", //控件尺寸
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "clearable":"", //占位字符
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this,option){}",  //change 配置回调函数类型和函数函数体、参数说明：node为选中值，_this为模块表单的实例对象。
                    "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `organizeTree`

组织机构树按权限全部加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "organizeTree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "isexpand":false, //是否一次性展开  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                         "displaytoolBar":false,  //是否开启工具栏
                        "style":{},  //样式
                        "filterVisibe":true //是否显示筛选框
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---
### `organizeAllTree`

组织机构树全部加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "organizeAllTree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "isexpand":false, //是否一次性展开  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                         "displaytoolBar":false,  //是否开启工具栏
                        "style":{},  //样式
                        "filterVisibe":true //是否显示筛选框
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `ghtree`

工号树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "ghtree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "defaultText":"", //是否有默认值  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "displaytoolBar":false,  //是否开启工具栏
                        "filterVisibe":true, //是否显示筛选框
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                     "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `standardghtree`

标准工号树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "standardghtree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "defaultText":"", //是否有默认值  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "displaytoolBar":false,  //是否开启工具栏
                        "filterVisibe":true, //是否显示筛选框
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                     "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `materialclasstree`

材料类别树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "materialclasstree", //控件类型，在renderComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "defaultText":"", //是否有默认值  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "displaytoolBar":false,  //是否开启工具栏
                        "filterVisibe":true, //是否显示筛选框
                        "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                     "method1": "function(node,_this,option){}"  //清除事件回调
                    "init": "function(_this,option){}"
                    }
   }

```


---



## renderTableRowComs

** 说明：**  `renderTableRowComs`明细编辑行内渲染器主要根据传入配置渲染控件相关配置，主要作用于tableEdit行内控件渲染。




**控件配置说明**

### `inputNum`

inputNum输入框配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "inputNum", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "maxlength":10000,
                       "minlength":0,
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "placeholder":"", //输入提示字符
                       "icon":"",  //图标
                       "readonly":"", //是否可读
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "blur": "function(node,option,row,_this){}", 
                    "init": "function(option,row,_this){}"
                    }
   }

```
---

### `inputText`

inputText输入框配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "inputText", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "maxlength":10000,
                       "minlength":0,
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "placeholder":"", //输入提示字符
                       "icon":"",  //图标
                       "readonly":"", //是否可读
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "blur": "function(node,option,row,_this){}", 
                    "init": "function(option,row,_this){}"
                    }
   }

```
---


---

### `switch`

switch开关配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "switch", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "width":120,   //switch 的宽度（像素）
                       "disabled":false,   //是否禁用
                       "onColor":"small",//switch 打开时的背景色
                       "offColor":false, //switch 关闭时的背景色
                       "onText":"text", // switch 打开时的文字
                       "offText":"", //switch 关闭时的文字
                       "offValue":"",  //switch 关闭时的值
                       "style":{},  //样式
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}",  
                    "init": "function(option,row,_this){}"
                    }
   }

```

---

### `singleUpload`

上传组件（单）配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "singleUpload", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small",//大小
                        :disabled:""  ,//是否可用
                        :placeholder:"" ,
                        :allowFormat:"", //允许格式 'xml.docx.xlsx.jpeg'
                        :moduleName:"" , //模块名称
                        :allowSize:"", //上传大小
                        :action:""  //请求地址 （默认为空）
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}", 
                    "init": "function(option,row,_this){}"
                    }
   }

```

---

### `datePicker`

日期控件配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datePicker", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "type":"date",//显示类型  year/month/date/week/ datetime/datetimerange/daterange
                       "disabled":false, //是否禁用
                       "size":"small", //输入框尺寸
                       "placeholder":"", //占位内容
                       "format":"yyyy-MM-dd", //时间日期格式化
                       "align":"left", //对齐方式
                       "defaultValue":"", //可选，DatePicker打开时默认显示的时间
                       "editable":true, //文本框可输入
                       "clearable":true, //是否显示清除按钮
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}", 
                     "init": "function(option,row,_this){}"
                    }
   }

```

---

### `comdatadictionary`

常用字典库控件配置

```json
  
  {
    "name": "", //绑定对象属性 
    "type": "comdatadictionary", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                       "code":"",//字典编码
                       "size":"small",//大小
                       "disabled":false, //是否可用
                       "placeholder":"", //输入提示字符
                       "readonly":"", //是否可读
                       "nodeStateConf":{}, //树渲染配置
                       "filterVisibe":false, //是否显示过滤框
                       "isexpand":false,//是否展开
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}", 
                    "init": "function(option,row,_this){}"
                    }
   }

```

---


### `datadictionaryfortree`

全局字典树配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datadictionaryfortree", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "code":"", //父级编码
                        "size":"small", //控件尺寸
                        "isexpand":"", //是否一次性展开  
                        "readonly":false, //选入框是否只读
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "autofocus":false, //是否聚焦
                        "nodeStateConf":[], //树渲染配置
                        "filterVisibe":true //是否显示筛选框
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}",
                    "init": "function(option,row,_this){}"
                    }
   }

```
---
### `datadictionaryforsel`

全局字典选择控件配置
```json
  
  {
    "name": "", //绑定对象属性 
    "type": "datadictionaryforsel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "code":"", //父级编码
                        "size":"small", //控件尺寸
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}",
                    "init": "function(option,row,_this){}"
                    }
   }

```

---

### `select`

选择器配置
```json
  {
    "name": "", //绑定对象属性 
    "type": "select", //控件类型，在renderSelComs组件中是唯一的。
    "elmentConfig": { //控件的配置 控件的配置根据特定控件的参数而定，配置参照元素配置 
                        "size":"small", //控件尺寸
                        "disabled":false, //是否禁用
                        "placeholder":"", //占位字符
                        "clearable":false, //是否显示清除按钮
                        "data":[{           //绑定数据集
                                "label":"",
                                "value":""
                                }]
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,option,row,_this){}", 
                    "init": "function(_this,option){}"
                    }
   }

```
---


### `format`

文本渲染器配置
```json
{
          "type": "format",
          "name": "",
          "eventConf": {
            "isOn": true,
            "format": "function(option,row,_this){return '<b style=\"color:red;\">'+row.infoName+'</b>'}"
          }
        },
                
```


## tableSlotComs

** 说明：**  `tableSlotComs`表列具名渲染器 主要根据传入配置渲染表格列样式，主要作用于表格列样式渲染。




**控件配置说明**

### 文本渲染

**tag**

```json

    {  
        "type": "tag",  
        "name": "isLeaf",  //具名关联名称
            "elmentConfig": [  //标签配置数组
                {
                    "type": "primary",  //主题
                    "value": true,   //值
                    "text": "是"   //显示文本
                },
                {
                    "type": "danger",  
                    "value": false,
                    "text": "否"
                }
            ]
    }
```
---

### 按钮组渲染

**button**

```json

      {  
        "type": "button",  
        "name": "buttonSlot",  //具名关联名称
        "elmentConfig": [  //元素配置数组
          {
            "name": "add",  //按钮名称
            "icon": "icon-plus", //图标
            "type": "primary", //主题
            "size": "small", //大小
            "text": "添加", //文本
            "disabled": false, //是否可用
            "isShow": true, //是否显示
            "eventConf": {   //控件回调函数配置
                            "ison": true,  //是否开启回调函数
                            "click": "function(row,name,_this){}",  //change 配置回调函数类型和函数函数体
                         }
          },   
          {
           "name": "edit",
            "icon": "icon-pencil",
            "type": "primary",
            "size": "small",
            "text": "修改",
            "disabled": true,
            "isShow": true,
            "eventConf": {   //控件回调函数配置
                            "ison": true,  //是否开启回调函数
                            "click": "function(row,name,_this){}",  //change 配置回调函数类型和函数函数体
                         }
          },    
        ],
      },


```
---

### 图表按钮组渲染

**view**

```json


 {  
        "type": "view",  
        "name": "viewSlot",  //具名关联名称
        "elmentConfig": [  
          { 
            "name": "querycontainer", //容器类型
            "icon": "el-icon-search", //图表
            "tipText": "查看明细", //提示文字
            "isShow": true,  //是否显示
            "isContainer": true, //是在子容器中显示
            "eventConf": {
              "isOn": true,
              "click": "function(row,name,_this,conf){conf.outParams.list=[];conf.outParams.list.push({'key':'OrderId','op': 'EQ','value': row.id})}"
            }
          },   
          {
            "name": "print",
            "icon": "icon-printer",
            "tipText": "打印预览",
            "isShow": true,
            "eventConf": {
              "isOn": true,
                  "click": "function(row,name,_this){}"
            }
          },   
          {
                "name": "approve",
                "icon": "icon-sitemap",
                "isShow": true,
                "tipText": "审批流程",
                "eventConf": {
                  "isOn": true,
                  "click": "function(row,name,_this){_this._state(row.id);}"
                }
          },    
        ],
      },
```
---

### 文本格式化

**format**

```json
{      //处理日期格式示例
        "type": "format",  //类型名称
        "name": "beginDateSlot", //具名关联名称
        "eventConf": {
          "isOn": true, 
          "format": "function(row,option,_this){console.log(row);return _this.globalFunObject.formatDate(row.beginDate,'YYYY-MM-DD');}" //返回值通过函数返回
        }
      }
      
      //处理单元内文本示例
      { 
        "type": "format",
        "name": "ghNameSlot",
        "eventConf": {
          "isOn": true,
          "format": "function(row,option,_this){return row.attName+row.ghName}"
        }
      },
```
---


## renderSelComs

** 说明：**  `renderSelComs`树选择渲染器根据不同树渲染需要的panel树，在业务树中都使用`commonAllPanelTree`和`commonPanelTree`来渲染。

---

### `commontreewithpanel`

通用树逐步加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "commontreewithpanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                        "titleName":"", //面板标题
                        "code":"", //编码
                        "orgId":""  //组织机构
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```


---

### `commonalltreewithpanel`

通用树全部加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "commonalltreewithpanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                        "isexpand":false, //是否展开
                        "titleName":"", //面板标题
                        "code":"", //编码
                        "orgId":""  //组织机构
                       
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `organizetreewithpanel`

组织机构按照权限加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "organizetreewithpanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                        "isexpand":false, //是否展开
                       
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```

---

### `materialclasstreewithpanel`

材料类别逐步加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "materialclasstreewithpanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                       
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `ghTreeWithPanel`

工号树逐步加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "ghTreeWithPanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                       
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```
---

### `standardghtreewithpanel`

标准工号树逐步加载配置

```json
  {
    "name": "", //绑定对象属性 
    "type": "standardghtreewithpanel", //控件类型，在renderSelComs组件中是唯一的。
    "op": "EQ", //配置过滤条件
    "elmentConfig": { 
                        "highlightCurrent":"small", //是否高亮选中行
                        "expandOnClickNode":false, //是否在点击节点的时候展开或者收缩节点  
                        "panelWidth":'200px', //面板宽度
                        "nodeStateConf":{}, //节点配置
                       
                    },
    "eventConf": {   //控件回调函数配置
                    "isOn": true,  //是否开启回调函数
                    "change": "function(node,_this){}",  //blur 配置回调函数类型和函数函数体
                    "init": "function(_this,option){}"
                    }
   }

```
---



## containerComs

** 说明：**  `containerComs`容器渲染器根据配置渲染具体容器。


### `querycontainer`

**业务模块容器配置**

一级页面配置

```json
  {
      "baseInfo":{},
      "apiConf":{},
      "filterConf":{},
      "tableInfoConf":{},
      "functionConf":{},
      "formConf":{}
  }

```

二级页面配置

```json
  {
    "option":{
      "type":"querycontainer",
      "elmentConfig":{
          "baseInfo":{},
          "apiConf":{},
          "filterConf":{},
          "tableInfoConf":{},
          "functionConf":{},
          "formConf":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option,outParams){}"
        }
      }
    },
    "outParams":{},  //外部参数
  }

```
---

### `querycontainerR`

**查询数据容器配置**

一级页面配置

```json
  {
      "baseInfo":{},
      "apiConf":{},
      "filterConf":{},
      "tableInfoConf":{},
      "functionConf":{}
  }

```

二级页面配置

```json
  {
    "option":{
      "type":"querycontainerR",
      "elmentConfig":{
          "baseInfo":{},
          "apiConf":{},
          "filterConf":{},
          "tableInfoConf":{},
          "functionConf":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option,outParams){}"
        }
      }
    },
    "outParams":{},  //外部参数
  }

```
---


### `queryChart`

**图表展示容器配置**

一级页面配置

```json
  {
      "baseInfo":{},
      "apiConf":{},
      "filterConf":{},
      "tableInfoConf":{},
      "functionConf":{}
  }

```

二级页面配置

```json
  {
    "option":{
      "type":"queryChart",
      "elmentConfig":{
          "baseInfo":{},
          "apiConf":{},
          "filterConf":{},
          "tableInfoConf":{},
          "functionConf":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option,outParams){}"
        }
      }
    },
    "outParams":{},  //外部参数
  }

```
---



### `htmlContainer`

**html渲染展示容器配置**

一级页面配置

```json
  {
      "baseInfo":{},
      "apiConf":{},
      "filterConf":{},
      "tableInfoConf":{},
      "functionConf":{}
  }

```

二级页面配置

```json
  {
    "option":{
      "type":"htmlContainer",
      "elmentConfig":{
          "baseInfo":{},
          "apiConf":{},
          "filterConf":{},
          "tableInfoConf":{},
          "functionConf":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option,outParams){}"
        }
      }
    },
    "outParams":{},  //外部参数
  }

```
---



### `complexContainer`

**html渲染展示容器配置**

一级页面配置

```json
  {
      "baseInfo":{},
      "tableInfoConf":{}
  }

```

二级页面配置

```json
  {
    "option":{
      "type":"complexContainer",
      "elmentConfig":{
          "tableInfoConf":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option,outParams){}"
        }
      }
    },
    "outParams":{},  //外部参数
  }

```
---



### `htmlRaw`

**html字符串渲染**


二级页面配置

```json
  {
    "option":{
      "type":"htmlRaw",
      "elmentConfig":{
          "content":{},
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option){}"
        }
      }
    }
  }

```
---




### `commemt`

**评论插件**


二级页面配置

```json
  {
    "option":{
      "type":"commemt",
      "elmentConfig":{
          "dataId":"",
          "commentModule":"",
          "maxContent":"",
          "pageSize":"",
          "style":{}
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option){}"
        }
      }
    }
  }

```
---


### `statisticsBlock`
 

 **数据显示块**


二级页面配置

```json
  {
    "option":{
      "type":"statisticsBlock",
      "elmentConfig":{
          "backgroudColor":"",
          "theme":"",
          "duration":"",
          "number":"",
          "unit":"",
          "title":"",
          "linkUrl":"",
          "icon":"",
          "style":{}
      },
      "eventConf":{
        "isOn":true,
        "event":"function(_this){}"
      },
      "InterceptEvent":{
        "init":{  //初始化
          "isOn":true,
          "event":"function(_this,option){}"
        }
      }
    }
  }

```
---