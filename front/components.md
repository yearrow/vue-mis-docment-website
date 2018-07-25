## 布局组件

### layout

> 标签： `<yl-layout></yl-layout>` 

**作用:** 主要用于两栏弹性布局，嵌套使用可以处理复杂布局

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| direction| 布局方向 | String|'column' |column/row|
| border| 布局容器是否显示边框 | Boolean|false |false/true|

** 方法 **
暂无

** 事件 **
暂无

##### 用法示例
```html
                <yl-layout>
                    <div slot="fristbox" >
                         //第一部分插槽
                    </div>
                     <div slot="secondbox" class="flexbox">
                          //第二部分容器插槽
                     </div>
                </yl-layout>
```
---
### ColumnLay

> 标签： `<yl-columnLay></yl-columnLay>` 

**作用:** 主要用于两栏弹性布局,和layout功能类似，多了折叠左侧容器功能，该布局只能水平左右两栏布局。

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| leftWidth| 左边栏目宽度 | String|'auto' |auto/100px|
| hiddenLeft| 默认是否折叠左侧容器 | Boolean|false |false/true|
| border| 布局容器是否显示边框 | Boolean|false |false/true|

** 方法 **

| 方法名| 说明           |参数|
| ------------- |:-------------:| -----:|
| _showleft()| 折叠左侧容器 | --|


**  事件 **

暂无

##### 用法示例
```html
      <yl-columnlay>
              <div slot="left"  >
                        //左侧容器插槽
                </div>
                <div slot="right" >
                        //右侧容器插槽
                </div>
      </yl-columnlay>
```
---
### panel

> 标签： `<yl-panelpage></yl-panelpage>` 

**作用:** 包裹组件的面板

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| titleName| 面板标题 | String|'' |--|
| isZone|是否为区域面板，默认为页面面板| Boolean|false|--|
| theme|当设置为区域面板时可以设定主题| String||primary/info/success/warning/danger|
| heightNum|定义面板高度 | String|100%|100%/100px|
| widthNum| 定义面板高度 | String|auto|auto/100px|
| icon| 面板图标 | String|icon-pencil2|参见图标集|
| fullScreenIsShow|全屏显示（主要用于单个模块） | Boolean|false|--|
| helpIsShow|模块文档说明 | Boolean|true|--|
| reloadIsShow|刷新按钮，会触发刷新reload事件| Boolean|true|--|
| treeLoading|面板页面的遮罩层是否显示| Boolean|false|--|
| linkUrl| 跳转路径 | String|''|--|

** 方法 **

暂无


**  事件 **

| 事件名称| 说明           |参数|
| ------------- |:-------------:| -----:|
| reload| 点击刷新按钮触发此事件 | --|

##### 用法示例
```html
      <yl-panelpage :titleName="'功能管理'" >
        <div slot="content">
         </div>
     </yl-panelpage>
```
---

### renderContainerLay

> 此组件未能全局引入 

**作用:** 根据配置数据灵活配置布局

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| options| 渲染参数配置（具体见示例） | Array|[] |--|

** 方法 **

暂无


**  事件 **

暂无

##### 用法示例
```json
        "content": [ //具体配置
            {
                "isLeaf": false, //是否为子节点（不是子节点必须有‘childContent’节点）
                "position": { //占位配置 共24栏
                  "spanNum": 18
                },
                "style": "padding:10px", //父容器自定义样式
                "childContent": [ //子节点配置
                    { 
                        "isLeaf": true,  //是否为子节点
                        "position": {
                          "spanNum": 24
                        },
                        "style": "",
                        "panelZone": { //子节点可以配置panelZone具体配置参照panelpage
                          "titleName": "",
                          "icon": "icon-library",
                          "fullScreenIsShow": false,
                          "isZone": true,
                          "theme": "",
                          "heightNum": "300px"
                        },
                        "outParams": {}, //外来参数
                        "option": {} //具体配置参见具体选型的容器配置
                    }
                ]
            },
            {
                "isLeaf": false,
                "position": {
                  "spanNum": 6
                },
                "style": "padding:10px",
                "childContent": [
                ]
            }
        ]
```
---

### toolbar
> 标签： `<yl-toolbar></yl-toolbar>` 

**作用:** 主要用作工具条或者筛选框条

** 属性 **

暂无

** 方法 **

暂无

** 事件 **

暂无

##### 用法示例
```html
     <yl-toolbar  >
        <div slot="content">
         </div>
     </yl-toolbar>
```
---
##  数据表格组件

### Table

> 标签： `<yl-table></yl-table>` 

**作用:**  数据显示，集成分页组件，对接后台分页获取数据接口按照分页呈现数据

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| configs| 渲染参数配置（具体见示例） | Object| |--|
| input| 分页参数（具体见示例） | Object| |--|
| tableloading| table数据加载遮罩层 | Boolean|false |--|
| pagination| 分页数据配置（具体见示例） | Object| |--|

** 方法 **

参见 [elementUI table组件配置][1]


**  事件 **

参见 [elementUI table组件配置][1]

##### 用法示例（面向配置）

html配置
```html
     <yl-table ref="mainTable"
                                    @reload="_reload"
                                    @current-change="_currentChange"
                                    @selection-change="_selectionChange"
                                    @row-click="toggleRowSelection"
                                    :configs="tableInfoConf" 
                                    :input="mainInput.inputModel"
                                    :tableloading="mainTableLoading"
                                    :pagination="tableInfoConf.pagination" 
                                    >
                                        <template :slot="item.name" scope="scope" v-for="(item,index) in tableInfoConf.solSlotConf" > 
                                                <yl-tableSlotComs 
                                                    :key="index"
                                                    :option="item" 
                                                    :row="scope.row" 
                                                    :name="item.name"
                                                    @tableSlotEvent="_tableSlotEvent"
                                                    >
                                                </yl-tableSlotComs>
                                        </template>
                                </yl-table>
```

如果表格需要二级显示，可能需要在合适的地方加入动态容器的dialog,并且在配置中itemConf节点配置相关属性

```html  
 <!--动态容器-->
    <el-dialog ref="itemDialog" 
            v-model="itemFormVisible"
            :title="itemConf.dialogConf.title" 
            :size="itemConf.dialogConf.size"
            :top="itemConf.dialogConf.top" 
            :close-on-click-modal="false"
            :modal-append-to-body="false"
            lock-scroll >
                <yl-containercoms     
                    v-if="itemFormVisible"
                    :option="itemConf.option"
                    :outParams="itemConf.outParams"
                    >
                </yl-containercoms>
    </el-dialog>
```
input配置 

```json
{"maxResultCount":10,
 "draw":1,
 "sorting":"OrderCode desc",
 "skipCount":0,
 "queryConditionItem":[
                       {
                        "dataField":"OrgId",
                        "op":"EQ",
                        "dataValue":"ec0d0d88-be0e-4de2-b767-a75b011747d7",
                        "DataFieldTwo":"",
                        "TwoFieldRelation":"",
                        "relation":"and"
                        }]
 }
```
configs配置 （内部包含pagination配置）
```json
 tableInfoConf:{
    "table": { 
      "attr": { //table的属性
                 "attr": {
                                    "data": {}, //显示的数据对象,内部包含分页参数。
                                    "highlightCurrent": true,//是否高亮选中行
                                    "height":"",//Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string类型，则 Table 的高度受控于外部样式。
                                    "maxHeight":"",//Table 的最大高度
                                    "stripe":false, //是否为斑马纹 table
                                    "border":false, //是否带有纵向边框
                                    "fit":true, //列的宽度是否自撑开
                                    "showHeader":true,//是否显示表头
                                    "currentRowKey":"",  //当前行的 key，只写属性 String,Number
                                    "rowClassName":"",  //行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
                                    "rowStyle":"",  //行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
                                    "rowKey":"", //行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的
                                    "emptyText":"",//空数据时显示的文本内容，也可以通过 slot="empty" 设置
                                    "defaultExpandAll":false,//是否默认展开所有行，当 Table 中存在 type="expand" 的 Column 的时候有效
                                    "expandRowKeys":"",//可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
                                    "defaultSort":{},//默认的排序列的prop和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
                                    "tooltipEffect":"dark",//tooltip effect 属性
                                }
                             },
              }
    },
    "columns": [ //列配置属性
     {   //单选时配置方式
                                    "attr": { 
                                    "type": "index",  
                                    "label": "序号",
                                    "width": 80,
                                    "align": "center"
                                    }
                                },
                                 {  //多选时配置方式
                                    "attr": {  
                                    "type": "selection",  
                                    "label": "选择",
                                    "width": 80,
                                    "align": "center"
                                    }
                                },
                                 {  //常规列配置说明   
                                    "attr": { 
                                        "columnKey":"", //column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件
                                        "prop": "ghName",//对应列内容的字段名，也可以使用 property 属性
                                        "label": "名称", //显示的标题
                                        "width": 120,  //对应列的宽度
                                        "minWidth":120, //对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
                                        "fixed":"",  //列是否固定在左侧或者右侧，true 表示固定在左侧  true, left, right
                                        "renderHeader":"Function(h, { column, $index })", //列标题 Label 区域渲染使用的 Function
                                        "sortable":false, //对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
                                        "sortMethod":"Function(a, b)",  //对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个布尔值
                                        "resizable":true,//对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
                                        "formatter": "Function(row, column)", //用来格式化内容
                                        "showOverflowTooltip":true,//当内容过长被隐藏时显示 tooltip
                                        "align": "left", //left/center/right
                                        "headerAlign":"left",//表头对齐方式，若不设置该项，则使用表格的对齐方式  left/center/right
                                        "className": "className",  //列的 className
                                        "labelClassName":"",  //当前列标题的自定义类名
                                        "selectable":"",  //仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
                                        "reserveSelection":"",//仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。
                                        "filters":"Array[{ text, value }]",//数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。
                                        "filterMultiple":true,//数据过滤的选项是否多选
                                        "filterMethod":"Function(value, row)",//数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
                                        "filterValue":"Array",//选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
                                        "scopedSlot":"slotName"  //具名关联名称
                                    }
                                 },
                           ],
    "solSlotConf": [ //该节点为列渲染，详细配置参见渲染器中列具名渲染器
      {
        "type": "tag",
        "name": "isAudit",
        "elmentConfig": [
          {
            "type": "success",
            "value": true,
            "text": "已审核"
          },
          {
            "type": "danger",
            "value": false,
            "text": "未审核"
          }
        ],
        "eventconf": {
          "isOn": false,
          "event": "function(row,name){}"
        }
      },
      {
        "type": "view",
        "name": "viewSlot",
        "elmentConfig": [
          {
            "name": "querycontainer",
            "icon": "el-icon-search",
            "tipText": "查看明细",
            "isShow": true,
            "isContainer": true,
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
              "click": "function(row,name,_this){let inputArr=[],_api=_this.apiConf.getMainObjectForEdit,param={};inputArr.push({dataField:'Id',op:'EQ',dataValue:row.id});param.queryConditionItem=inputArr;_api.data=param;_this.fetchObject(_api).then(function(data){if(data.success){_this._printPage(data.result);};});}"
            }
          }
        ]
      }
    ],
    "itemConf": {
      "querycontainer": {
        "dialogConf": {
          "size": "small",
          "top": "10%",
          "title": "单据明细"
        },
        "outParams": {},
        "option": {
           //具体选型容器配置
          
        }
      }
    },
    "pagination": { //表格分页配置
      "pageSize": 5, //默认条目数
      "pageSizes": [ //可选条目数
        5,
        10,
        50
      ],
      "layout": "total, sizes, prev, pager, next, jumper" //控件布局排序
    }
  }
```

---

### onlytable

> 标签： `<yl-onlytable></yl-onlytable>` 

**作用:**  数据显示，没有分页组件，数据按照参数传入

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| configs| 渲染参数配置（同table组件） | Object| |--|
| tableData| 数据集 | Array| |--|
| tableloading| table数据加载遮罩层 | Boolean|false |--|

** 方法 **

参见 [elementUI table组件配置][1]


**  事件 **

参见 [elementUI table组件配置][1]

##### 用法示例（面向配置）
```html
<yl-onlytable 
        @current-change="_currentChange"
        :configs="tableConfig" 
        :tableData="tableData" 
        :tableloading="mainTableLoading"
        >
       //具名配置
 </yl-onlytable>
```


### TableR

> 标签： `<yl-tableR></yl-tableR>` 

**作用:**  数据显示，集成了分页组件，属于后分页，数据按照参数传入

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| configs| 渲染参数配置（同table组件） | Object| |--|
| tableData| 数据集 | Array| |--|
| tableloading| table数据加载遮罩层 | Boolean|false |--|
| pagination| 分页数据配置（具体见示例） | Object| |--|

** 方法 **

参见 [elementUI table组件配置][1]


**  事件 **

参见 [elementUI table组件配置][1]

##### 用法示例（面向配置）

```html
  <yl-tableR ref="queryTableR"
                                    @reload="_reload"
                                    @current-change="_currentChange"
                                    @selection-change="_selectionChange"
                                    @row-click="toggleRowSelection"
                                    :configs="tableInfoConf"
                                    :tableData="tableData" 
                                    :tableloading="mainTableLoading" 
                                    >
                                    <template :slot="item.name" scope="scope" v-for="(item,index) in tableInfoConf.solSlotConf"> 
                                            <yl-tableSlotComs 
                                                :key="index"
                                                :option="item" 
                                                :row="scope.row" 
                                                :name="item.name"
                                                @tableSlotEvent="_tableSlotEvent"
                                                >
                                            </yl-tableSlotComs>
                                    </template>
                            </yl-tableR>
```
----


## 表单组件

> 本系统的组件库引用饿了么的前段UI组件库 [elemntui][1]。 
在表单中大部分组件可直接引用使用，因着业务需求，也在其基础上封装了新表单组件


### commonselect

> 标签： `<yl-commonselect></yl-commonselect>` 

**作用:** 数据列表选择控件

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| apiConf| 数据请求的api配置 | Object|{url:"",query:[],maxRows:100, sorting:""}|--|
| lists| 要显示的辅助列 | Array| [] |--|
| initData| 给定的数据集 | Array|[] |--|
| defaultProps| 指定的显示列和显示值 | Object|{text:"", value:""} |--|
| clearable| 是否显示清除按钮 | Boolean|true |--|
| size| 控件的大小 | String|'' |large, small, mini|
| disabled| 控件的大小 | Boolean|false |--|
| placeholder| 控件的大小 | String|'' |---|

** 方法 **

暂无


**  事件 **

| 事件名| 说明           |参数|
| ------------- |:-------------:| -----:|
| getCurrentNode| 选中当前条目后触发 | node|
| clear| 点击清除按钮后触发 | node|

##### 用法示例

（异步请求数据例子--配置）
```json
     "elmentConfig": {
            "disabled": false,
            "placeholder": "请选择",
            "style": {
              "width": "100%"
            },
            "clearable": true,
            "defaultProps": {
              "text": "supplierName",
              "value": "id"
            },
            "apiConf": {
              "url": "/api/services/app/commonSupplier/getMainPageList",
              "query": [
                {
                  "key": "OrgId",
                  "op": "EQ",
                  "value": ""
                },
                {
                  "key": "IsBlackList",
                  "op": "EQ",
                  "value": 0
                }
              ],
              "sorting": "supplierName desc",
              "maxRows": 1000
            },
            "lists": []
          },
          "eventConf": {
            "isOn": true,
            "change": "function(node,_this,option){}",
            "method1": "function(node,_this){}"
          },
```
（给定数据配置--配置）

```json
     "elmentConfig": {
              "size": "small",
              "initData": [{"label":"大于0","value":"0"},
                        {"label":"等于0","value":"1"},
                        {"label":"小于0","value":"2"}
              ],
              "defaultProps": {
                "text": "label",
                "value": "value"
              },
              "placeholder": "请选择"
            },
            "eventConf": {
              "isOn": true,
              "change": "function(node,_this,option){if(node[0].label=='等于0')        {option.op='EQ';_this.searchModel.Quantity='0'}else if(node[0].label=='大于0'){option.op='GT';_this.searchModel.Quantity='0'}else if(node[0].label=='小于0'){option.op='LT';_this.searchModel.Quantity='0'}}",
              "init": "function(_this,option){_this.searchModel.Quantity='0'}"
             }
```
---

### singleupload

> 标签： `<yl-singleupload></yl-singleupload>` 

**作用:** 单文件数据上传控件

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| moduleName| 上传的模块标识码 | String| '' |--|
| action| 上传文件的请求地址 | String|--|--|
| allowSize| 上传文件大小限制 | Number|10M |--|
| allowFormat| 允许上传的格式 | Stiring|'' |'xml.docx.xlsx.jpeg'|
| size| 控件的大小 | String|'' |large, small, mini|
| disabled| 控件的大小 | Boolean|false |--|
| placeholder| 控件的大小 | String|'' |---|

** 方法 **

暂无


**  事件 **

| 事件名| 说明           |参数|
| ------------- |:-------------:| -----:|
| change| 上传文件后触发 | file|

### multipleupload

> 标签： `<yl-multipleupload></yl-multipleupload>` 

**作用:** 多文件上传控件

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| moduleName| 上传的模块标识码 | String| '' |--|
| action| 上传文件的请求地址 | String|--|--|
| allowSize| 上传文件大小限制 | Number|10M |--|
| allowFormat| 允许上传的格式 | Stiring|'' |'xml.docx.xlsx.jpeg'|
| drag| 是否启用拖拽上传 | Boolean|false |--|
| listType| 文件列表的类型 | String|''|text/picture/picture-card|
| fileList| 上传的文件列表, 例如: [{name: 'food.jpeg', url: ''},{name: 'food.jpeg', url: ''}]	 | Array|[] |---|

** 方法 **

暂无



**  事件 **

| 事件名| 说明           |参数|
| ------------- |:-------------:| -----:|
| change| 上传文件后触发 | file|

---

### editor

> 标签： `<yl-editor></yl-editor>` 

**作用:** 富文本编辑器

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| isPreView| 是否显示预览模块 | Boolean| false |--|
| editorOptions| 编辑器配置 | Object|参见wangEditor官网文档|--|
| content| 默认值或传入值 | String|'' |--|


** 方法 **

| 方法名| 说明           |参数|
| ------------- |:-------------:| -----:|
| setText| 给编辑器设置值 | html|



**  事件 **

| 事件名| 说明           |参数|
| ------------- |:-------------:| -----:|
| onchange| 内容改变之后触发 | html|

** 注意：** 如果要渲染html内容，只需要给渲染内容的块添加类名`w-e-text` 也可以写样式覆盖。
 
  editorOptions具体配置：
```json

    editorOptions:{
            menus:[ //菜单配置
               'head',  // 标题
                'bold',  // 粗体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ],
            colors:[  //颜色配置
                    '#000000',
                    '#eeece0'
                ],
            uploadImgMaxSize:3*1024*1024,   //图片大小配置 
          }
```

---




### tablEedit

> 标签： `<yl-tableedit></yl-tableedit>` 

**作用:** 明细编辑器

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |:-------------:| -----:|---:|---:|
| tableConfig| table表的配置项（参见yl-onlytable配置） | Object| {} |--|
| tableData| 表格呈现数据 | Array|[]|--|
| sumRowConf| 合计列配置 | Object|{} |--|
| mapConfig| 映射列配置 | Object|{} |--|
| addRowCount| 显示编辑最大条目 | Number|undefined |--|
| notRepeatFiled| 编辑条目去重字段 | String|''|--|

** 方法 **

暂无


**  事件 **

| 事件名| 说明           |参数|
| ------------- |:-------------:| -----:|
| delItem| 删除条目后触发| row|
| sumCount| 通过内部渲染组件的blur事件触发合计计算 | |
**注意** 给tableedit内部插入数据调用全局状态变量方法`this.setSelectRows(this.selectRows); ` 和`this.setType(this.dataType);`

配置说明

```json
  {
      "title": "明细编辑", //label标题
      "name": "items", //属性名称
      "type": "tablEedit", //类型
      "position": { 
        "spanNum": 24,  
        "alone": true 
      },
    "elmentConfig": { 
                        "sumRowConf": {  //合计列配置
                              "disable": false, //是否启用合计列
                              "sumText": "合计",  //合计显示文本
                              "items": {  //合计列项
                                "planQuantity": {
                                  "text": "数量合计", //显示名称
                                  "sumval": 0,  //合计初始值
                                  "capitalCol": false  //是否显示大写（注意：合计列中只有一列能配置为大写）             },
                                "lossQuantity": {
                                  "text": "损耗量合计",
                                  "sumval": 0,
                                  "capitalCol": false
                                },
                                "responseSum": {
                                  "text": "金额合计",
                                  "sumval": 0,
                                  "capitalCol": true
                                }
                              },
                              "eventConf": {
                                  "isOn": true,
                                  "sum": "function(_this,option){option.items.lossQuantity=9999.999}"  //合计列计算逻辑
                                }
                            },
                        "tableEditConfig": { //表格配置 （表格配置和模块中表格配置基本相同）
                                  "table": {  //表格属性配置=》参照表格配置（注意不包含data配置）
                                    "attr": {
                                      "highlightCurrent": true,
                                      "style": {
                                        "width": "100%",
                                        "height": "300px"
                                      }
                                    }
                                  },
                                  "columns": [ //列属性配置=》参照表格配置
                                    {
                                      "attr": {
                                        "type": "index",
                                        "label": "序号",
                                        "width": 65,
                                        "align": "center"
                                      }
                                    },
                                    {
                                      "attr": {
                                        "prop": "id",
                                        "label": "操作",
                                        "width": 65,
                                        "scopedSlot": "id"
                                      }
                                    }
                                  ],
                                  "solSlotConf": [ //具名配置=》参照表格配置
                                    {
                                      "type": "input",  
                                      "name": "planQuantity",
                                      "elmentConfig": {
                                        "type": "text",
                                        "size": "small",
                                        "disabled": false
                                      },
                                      "eventConf": {
                                        "isOn": true,
                                        "isSum":true, //是否blur事件之后触发合计列计算
                                        "init": "function(option,row){}",
                                        "blur":"function(node,option,row){}"
                                      }
                                    },
                                  ]
                         },
                        "tableEditMapConfig": //列映射配置  
                         {
                          "mapconf0":[   //具体映射配置  注意：映射名称起名规则：`mapconf`+该选材框类型。（一般在配置选材框中dataType中配置）
                              {
                                "prop": "id", //表中列属性
                                "isplace": false, //是否替换
                                "defaultval": "0", //默认值
                                "selprop": "" //选材框属性
                              },
                              {
                                "prop": "infoName",
                                "isplace": true,
                                "defaultval": "",
                                "selprop": "ghName",
                                "eventConf": {  //可以对映射来源列进行计算
                                        "isOn": true,
                                        //列计算逻辑写在calculate函数中
                                        "calculate": "function(model){return (model.bookOriginalValue-model.outAmortizeSum-model.outBookOriginalValue)}"
                                  }
                              },
                          ],
                          "mapconf1":[]  //多个映射配置
                         },
                         "addRowCount":20,//编辑栏最大显示行数
                         "notRepeatFiled":'infoName' //infoName列不能重复
                    }
 
   }

```
---

##  其他组件

### statisticsBlock

> 标签： `<yl-statisticsBlock></yl-statisticsBlock>` 

**作用:**  数据块展示，主要用于门户首页展示重要数据的统计汇总值

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |-------------| -----|---|---|
| backgroudColor| 背景颜色 | Object|{icon:"#0E80F7",content:"#409EFF"} |--|
| theme| 主题 | String| |primary/info/success/warning/danger|
| duration| 数字渲染时间 | Number|3000|--|
| number| 显示值 | Number| 0|--|
| unit| 单位 | String| |--|
| title|标题说明 | String| |--|
| linkUrl| 链接地址 | String| |--|
| icon| 显示图标 | String|'icon-sphere' |--|

** 方法 **
暂无


**  事件 **
暂无

##### 用法示例（面向配置）

json配置
```json

     {
              "type": "statisticsBlock",
              "elmentConfig": {
                "style": "",
                "theme": "info",
                "title": "上期结存",
                "number": 2432432,
                "unit": "元",
                "linkUrl": "/pages/commondatadictionary"
              },
              "eventConf": {
                "isOn": true,
                "init": "function(_this){初始化时执行一些业务逻辑}"
              }
  }


```
---

### commemt

> 标签： `<yl-commemt></yl-commemt>` 

**作用:**  评论组件，一般队业务针对业务对象进行引用

** 属性 **

| 参数        | 说明           |类型   |默认值|可选值|
| ------------- |-------------| -----|---|---|
| dataId| 业务对象关联主键 | String | ''|--|
| commentModule| 评论模块 | String|'' |--|
| maxContent| 评论框最大字数  | |Number|200|
| pageSize| 每页显示条目数| Number| 10|--|

** 方法 **
暂无


**  事件 **
暂无



##### 用法示例

solSlotConf配置

```json
     "solSlotConf": [
                {
                  "type": "view",
                  "name": "viewSlot",
                  "elmentConfig": [
                    {
                      "name": "commemt",
                      "icon": "icon-chat2",
                      "tipText": "评论",
                      "isShow": true,
                      "isContainer": true,
                      "eventConf": {
                        "isOn": true,
                        "click": "function(row,name,_this,conf){conf.option.elmentConfig.dataId=row.orderId};"
                      }
                    }
                  ]
                }
              ]
```


itemConf配置

```json
     "itemConf": [
            "commemt": {
              "dialogConf": {
                "size": "normal",
                "top": "10%",
                "title": "资源评论"
              },
              "option": {
                "type": "commemt",
                "elmentConfig": {
                  "style": "height:450px",
                  "dataId":"",
                  "commentModule":'模块code',
                  "maxContent":500,
                  "pageSize":10
                }
              }
            }
              ]
```

---


## 树组件

> 树组件 
树组件在是一个在PC端中使用频繁的组件，在框架中提供了四种组件形式，选择全部加载树组件、选择逐步加载树组件、panel全部加载树、panel逐步加载树。


### treeselect

> 标签： `<yl-treeselect></yl-treeselect>` 

**作用:** 树选择的基础组件


** 属性**

| 参数        | 说明           |类型   |默认值|
| ------------- |:-------------:| -----:|---:|
| treedata      | 绑定树的数据集合，（在逐步加载时为根节点数据集合） | Array|[ ] |
| loaddata      | 在逐步加载的集合中使用，每次加载逐步加载时将获取值传至该对象 |  Array|[ ] |
| isexpand      | 是否一次性展开（只针对一次性加载方式使用） | Boolean |false |
| defaultProps      | 该属性为element tree控件集成属性 | obj |{} |
| textOnly      | 只使用文本值时使用 | Boolean |false |
| stepByOne      | 是否为逐步加载模式 | Boolean |false |
| defaultText      | 默认文本值（只针对逐步加载模式适用） | String |'' |
| size      |控件样式大小（nomarl/small） | String |'nomarl' |	
| placeholder |输入提示文本 | String |'' |	
| disabled|是否禁用| Boolean |false |	
| readonly|是否只读| Boolean |false |	
| autofocus|是否聚焦| Boolean |false |	
| filterTextVisibe|是否显示检索框（只对全部加载树有效）| Boolean |false |
| displaytoolBar|是否显示工具栏（包含情况和重载功能）| Boolean |false |	
| nodeStateConf|树节点渲染配置| Object|{}|	


**方法**
暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode      | 节点点击时触发 |为当前选中节点的data对象|
| nodeExpend      | 节点展开时触发，（只在stepByOne为true时有效） | 为当前选中节点的node对象 |
| clear| 开启工具栏后的清除事件 | 为当前选中节点的node对象 |
| reload| 开启工具栏后的重载事件 | 为当前选中节点的node对象 |


##### 用法示例

（配置示例--全部加载）
```json
     "elmentConfig": {
            "disabled": false,
            "placeholder": "请选择",
            "style": {
              "width": "100%"
            },
            "textOnly": false,
            "size": "",
            "isexpand": false,
            "defaultProps": {
              "text": "text",
              "value": "id"
            },
            "filterTextVisibe":true,
            "displaytoolBar":true,
            "treedata":[]
          },
          "eventConf": {
            "isOn": true,
            "init": "function(_this,option){//加载数据方法}",
            "change": "function(node,_this,option){}",
            "method1": "function(node,_this){//清除回调}",
            "method2": "function(node,_this){//重载回调}"
          },
```

（配置示例--逐步加载）
```json
     "elmentConfig": {
            "disabled": false,
            "placeholder": "请选择",
            "style": {
              "width": "100%"
            },
            "textOnly": false,
            "size": "",
            "defaultProps": {
              "text": "text",
              "value": "id"
            },
            "displaytoolBar":true,
            "treedata":[],
            "loaddata":[],
            "defaultText":"",
            "stepByOne":true,
          },
          "eventConf": {
            "isOn": true,
            "init": "function(_this,option){//加载数据方法}",
            "change": "function(node,_this,option){}",
            "method1": "function(node,_this){//清除回调}",
            "method2": "function(node,_this){//重载回调}"
          },
```

---


### commonTree

> 标签： `<yl-commontree></yl-commontree>` 

**作用:** 选择树逐步加载控件


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| size      |控件样式大小（nomarl/small） | String |'nomarl' |	
| placeholder |输入提示文本 | String |'' |	
| disabled|是否禁用| Boolean |false |	
| readonly|是否只读| Boolean |false |	
| autofocus|是否聚焦| Boolean |false |	
| defaultText      | 默认文本值（只针对逐步加载模式适用） | String |'' |
| defaultProps      | 该属性为element tree控件集成属性 | obj |{} |
| textOnly      | 只使用文本值时使用 | Boolean |false |
| displaytoolBar|是否  显示工具栏（包含情况和重载功能）| Boolean |false |	
| nodeStateConf|树节点渲染配置| Object|{}|	
| code|模块代码| Stirng|''|
| orgId|组织机构ID| Stirng|''|

**方法**
暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode      | 节点点击时触发 |为当前选中节点的data对象|
| clear| 开启工具栏后的清除事件 | 为当前选中节点的node对象 |


##### 用法示例



（配置示例）
```json
     "elmentConfig": {
            "disabled": false,
            "placeholder": "请选择",
            "style": {
              "width": "100%"
            },
            "textOnly": false,
            "size": "",
            "defaultProps": {
              "text": "text",
              "value": "id"
            },
            "displaytoolBar":true,
            "defaultText":"",
            "code":"",
            "orgId":"",
          },
          "eventConf": {
            "isOn": true,
            "init": "function(_this,option){//加载数据方法}",
            "change": "function(node,_this,option){}",
            "method1": "function(node,_this){//清除回调}"
          },
```

---




### commonalltree

> 标签： `<yl-commonalltree></yl-commonalltree>` 

**作用:** 选择树全部加载控件


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| isexpand      | 是否一次性展开（只针对一次性加载方式使用） | Boolean |false |
| defaultProps      | 该属性为element tree控件集成属性 | obj |{} |
| textOnly      | 只使用文本值时使用 | Boolean |false |
| size      |控件样式大小（nomarl/small） | String |'nomarl' |	
| placeholder |输入提示文本 | String |'' |	
| disabled|是否禁用| Boolean |false |	
| readonly|是否只读| Boolean |false |	
| autofocus|是否聚焦| Boolean |false |	
| displaytoolBar|是否显示工具栏（包含情况和重载功能）| Boolean |false |	
| nodeStateConf|树节点渲染配置| Object|{}|	
| code|模块代码| Stirng|''|
| orgId|组织机构ID| Stirng|''|

**方法**
暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode      | 节点点击时触发 |为当前选中节点的data对象|
| clear| 开启工具栏后的清除事件 | 为当前选中节点的node对象 |


##### 用法示例



（配置示例）
```json
     "elmentConfig": {
            "disabled": false,
            "placeholder": "请选择",
            "style": {
              "width": "100%"
            },
            "textOnly": false,
            "size": "",
            "isexpand":false,
            "defaultProps": {
              "text": "text",
              "value": "id"
            },
            "displaytoolBar":true,
            "code":"",
            "orgId":"",
          },
          "eventConf": {
            "isOn": true,
            "init": "function(_this,option){//加载数据方法}",
            "change": "function(node,_this,option){}",
            "method1": "function(node,_this){//清除回调}"
          },
```

---



### commontreewithpanel

> 标签： `<yl-commontreewithpanel></yl-commontreewithpanel>` 

**作用:** 面板树逐步加载控件 一般用于过滤器控件


** 属性**


| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| nodeStateConf|树节点渲染配置| Object|{}|	
| expandOnClickNode|开启树行点击事件| Boolean|false|	
| highlightCurrent|是否显示选中高亮| Boolean|false|	
| panelWidth|panel宽度| String|'200px'|
| titleName|树标题名称| String|'通用逐步加载树'|	
| code|模块代码| Stirng|''|
| orgId|组织机构ID| Stirng|''|

**方法**
暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode      | 节点点击时触发 |为当前选中节点的data对象|


##### 用法示例



（配置示例）
```json
      {
        "type": "commontreewithpanel",
        "name": "O_Col26",
        "op": "EQ",
        "elmentConfig": {
          "nodeStateConf": [
            {
              "name": "isLeaf",
              "text": "子",
              "tagflag": true,
              "style": "primary",
              "leafflag": false
            }
          ],
          "code":"singleTable56",
          "highlightCurrent": true,
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){_this.searchModel.O_Col26=node.id; }",
          "init": "function(_this,option){option.elmentConfig.orgId=_this.guidOfNull();}"
        }
      }
```

---


### commonalltreewithpanel

> 标签： `<yl-commonalltreewithpanel></yl-commonalltreewithpanel>` 

**作用:** 面板树全部加载控件 一般用于过滤器控件


** 属性**

| 参数        | 说明           |类型   |默认值|  
| ------------- |:-------------:| -----:|---:|
| nodeStateConf|树节点渲染配置| Object|{}|	
| expandOnClickNode|开启树行点击事件| Boolean|false|	
| highlightCurrent|是否显示选中高亮| Boolean|false|	
| isexpand|是否展开| Boolean|false|		
| panelWidth|panel宽度| String|'200px'|
| titleName|树标题名称| String|'通用逐步加载树'|	
| code|模块代码| Stirng|''|
| orgId|组织机构ID| Stirng|''|

**方法**
暂无

** 事件**

| 名称        | 说明           |回调参数|
| ------------- |:-------------:| -----:|
| getCurrentNode      | 节点点击时触发 |为当前选中节点的data对象|


##### 用法示例



（配置示例）
```json
      {
        "type": "commonalltreewithpanel",
        "name": "O_Col26",
        "op": "EQ",
        "elmentConfig": {
          "nodeStateConf": [
            {
              "name": "isLeaf",
              "text": "子",
              "tagflag": true,
              "style": "primary",
              "leafflag": false
            }
          ],
          "code":"singleTable56",
          "highlightCurrent": true,
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){_this.searchModel.O_Col26=node.id; }",
          "init": "function(_this,option){option.elmentConfig.orgId=_this.guidOfNull();}"
        }
      }
```

---





