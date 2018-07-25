## 模块配置

> 模块配置根据公司日常业务处理中单据方式实现的动态模块容器。能够实现单表业务单次编辑、单表多次编辑、主从表编辑业务。
在菜单配置中配置关键字为`suppermodule`。

###  基本信息配置  

> 说明 基本信息配置主要针对一个容器的全局信息配置 如：容器的名称，图标，帮助文档,页面布局配置等。

```json
   {
        "baseInfo": {  //所有的配置项均在根节点下
                    "moduleType":1,  //模块类型  分为 1单表结构，2为典型的主从表类，3为编辑多条明细单表结构信息。 
                    "panelpage": {      //模块嵌套面板配置
                        "titleName": "模块名称", //模块显示名称
                        "icon": "icon-pencil2", //模块显示图标
                        "reloadIsShow": false,  //模块页面刷新按钮
                        "fullScreenIsShow": true,//模块页面全屏功能按钮
                        "helpIsShow": true       //模块帮助功能按钮
                     },
                    "layout": {  //布局配置
                        "border": false,
                        "columnlay": {   
                            "hiddenLeft": false,   //左侧筛选块是否显示
                            "upToolFilter": {      //上部筛选器工具条配置
                                "visiable": true   //是否显示
                            },
                            "downToolFilter": {       //下部筛选器工具条配置
                                "visiable": true      //是否显示
                            },
                            "toolFunction": {    //功能按钮工具条配置
                                "visiable": true     //是否显示
                            }
                         }
                     },
                    "InterceptEvent":{  //主页面拦截事件
                        "mounted":{
                            "isOn": false,
                            "event": "function(_this){}"
                        }
                     },
                    "WatchEvent":{   //主页面会watch事件
                        "isOn": true,
                        "event": "function(_this){}"
                     }
        }
    }

```
---

###  Api配置  


> 说明 API实现配置模块中所有和后台交互数据结构的配置。


```json
    
    {
            "apiConf": {   //一个表中的api配置包含3个基本参数
                "getMainPageList": {   //api方法名
                    "url": "/api/services/app/gh/getMainPageList",  //请求路径
                    "method": "post",  //请求方式 默认为post
                    "data": {}          //请求参数
                },
                "deleteData": {
                    "url": "/api/services/app/gh/DeleteGH",
                    "method": "post",
                    "data": {}
                }
            }
    }

```


> 注意：在不同模块中对应的api名称根据具体功能应该是相同的。因此，在配置不容模块时，方法名称不应该改变。文档中列举了常用的方法名称。



#### api常规方法

| 方法名称        | 请求方式     | 参数  |作用说明  |返回值|
| ------------- |:-------------:| -----:|-----:|-----:|
| getMainAllList |post  |lambda筛选数组,sorting排序字符串 | 根据筛选条件获取主表列表数据 ||
| getMainPageList |post  |lambda筛选数组,sorting排序字符串,draw,skipCount,maxResultCount | 按条件分页获取主表列表数据 ||
| getItemAllList |post  | 只适用于主从结构lambda筛选数组,sorting排序字符串 | 根据筛选条件获取明细表列表数据 ||
| getItemPageList |post  |lambda筛选数组,sorting排序字符串,draw,skipCount,maxResultCount | 按条件分页获取明细表列表数据 ||
| getAllList |post  | 只适用于主从结构lambda筛选数组,sorting排序字符串 | 根据筛选条件获取主从表列表数据 ||
| getAllPageList |post  | 只适用于主从结构lambda筛选数组,sorting排序字符串,draw,skipCount,maxResultCount | 按条件分页获取主从表列表数据 ||
| createOrUpdateMainObject |post  | 如果是单表，参数为包裹的model对象，如果是主从结构主表，主要参数为时候主表model对象以及从表列表数组对象 | 添加或者修改表信息 ||
| createOrUpdateItemObject |post  | 只适用于主从结构，参数为包裹的model对象， | 添加或者修改从表信息 ||
| createMainList |post  | 参数为item包裹的对象数组 | 主要适用于单边多条信息编辑 ||
| deleteMainObject |post  | 参数为主表ID与lamad表达式数组 | 如果是单表，按条件删除条目，如果是主从结构，参数主表和对应从表 ||
| deleteItemObject |post  | 只适用于主从结构，参数为主表ID与lamad表达式数组 | 按条件删除从表条目 ||
| getMainObjectForEdit |post  | 参数为lamad表达式数组,sorting排序字符串 | 根据条件获取列表信息 ||
| auditObject |post  | 参数为主表id，orgid | 审核单据信息 ||
| unAuditObject |post  | 参数为主表id，orgid | 撤销审核单据信息 ||
| approveMainObject |post  |  | 审批单据信息 ||
| getApproveStateObject |post  |  | 获取审批状态 ||
| GetBasicTreeListParent |post  | 参数为包含属性parentId和orgId的对象 | 根据上级节点获取子节点列表信息 ||
| GetBasicTreeList |post  | 参数为包含属性orgId的对象 | 获取所有树结构信息 ||
| ExecuteSqlOne |post  |  | 扩展api方法一 （没有权限标识）||
| ExecuteSqlTwo |post  |  | 扩展api方法二 （有权限标识）||
| ExecuteSqlThree |post  |  | 扩展api方法三 (有权限标识）||
| ExecuteSqlFour |post  |  | 扩展api方法四 （有权限标识）||
| ExecuteSqlFive |post  |  | 扩展api方法五 （有权限标识）||
--- 

> 说明:
  针对单表树模板来说以下列为树属性对应列：
        V_Col6---名称
        V_Col7---树截取Code
        V_Col8---预留属性1
        V_Col9---预留属性2
        V_Col10---全称
        B_Col17---是否为子节点
        B_Col18---预留布尔类型一
        B_Col19---预留布尔类型二
        
 **注意：**     关于API调用请参考后台API调用文档

---

###  过滤器配置 

> 过滤器配置主要包括数据过滤条件配置、查询功能配置、数据排序配置。

#### 过滤条件配置

##### 模块过滤器

> 模块的过滤器主要是针对`getMainPageList`方法的参数和sorting做配置，最终会生成lambda数组和sorting配置。


1. `inputArr`节点配置

   这种方式一般在模块初始化时筛选器的值就已经绑定定，在界面操作中值也不会发生变化。

   配置方式

```json
    {
        "filterConf": {
            "": [  //绑定的值参照过滤器下方的lambda表达式构造说明配置
                            {
                                "key": "SupplierId",
                                "op": "EQ",
                                "value": "f21da119-b97d-4537-a522-a7ac0121334c",
                                "DataFieldTwo":"OutQuantity",运算对象
                                "TwoFieldRelation":"-", //支持+-*/四种运算
                            },
                            {
                                "key": "ContractID",
                                "op": "EQ",
                                "value": "f21da119-b97d-4537-a522-a7ac0121334c",
                                "eventConf": {
                                            "isOn": true,
                                            "init": "function(option,_this){option.value=_this.globalFunObject.getUserInfo().user.manageOrgId;}"
                                            }
                            },
                 ],
        }
   }

```

注意 `inputArr`中定义的初始值有三种方式赋予：
    1. 直接在value中传入默认值，这种方式适用与一直常量,如：`"value": "f21da119-b97d-4537-a522-a7ac0121334c"`。
    2. 定义一个工厂函数返回默认值，如配置第二条所示。参数 option为配置当前对象，_this为vue实例。
   



2. `selfFilterConf`节点配置

> 这种方式一般筛选器的值是随着控件的事件改变的。改变后一般会重新触发数据请求。
  `这种筛选方式规定只有包含panel的tree组件采用这种方式配置`

    配置方式
   
```json
    {
        "filterConf": {
            "selfFilterConf": [  //筛选器内部配置采用控件渲染器渲染，其配置说明参照控件渲染器配置进行配置
                    {
                        "val": "426559c4-4fea-4f73-89a5-a79b00c43116",  
                        "type": "ghTreeWithPanel", 
                        "name": "ParentId", 
                        "op": "EQ",
                        "DataFieldTwo":"OutQuantity",运算对象
                        "TwoFieldRelation":"-", //支持+-*/四种运算
                        "elmentConfig": {
                            "nodeStateConf": []
                        },
                        "eventConf": {
                            "isOn": true,
                            "change": "function(node,_this){ }"
                        }
                   },
               ]
          }
     }

```

3. `searchFilterConf`节点配置

>  这种方式筛选器的值通过控件操作改变后不会立即触发数据请求，统一由查询功能来触发
   `有时候因为筛选器控件过多，因此需要多个工具条来布局，在模块容器中我们预留了两个工具条来布局筛选控件`
    
    配置方式
   
```json
    {
        "filterConf": {
            "searchFilterConf":{
                "up": [  //筛选器内部配置采用控件渲染器渲染，其配置说明参照控件渲染器配置进行配置
                            {
                                "title": "父节点",
                                "name": "parentId",
                                "type": "ghtree",
                                "op":   "EQ",
                                "DataFieldTwo":"OutQuantity",//运算对象
                                "TwoFieldRelation":"-", //支持+-*/四种运算
                                "position": {
                                    "spanNum": 12,
                                    "alone": false,
                                    "style": ""
                                },
                                "elmentConfig": {
                                    "placeholder": "选择上级工号",
                                    "readonly": true
                                },
                            },
                         ],
                "down": [  
                            {
                                "title": "计量单位",
                                "name": "mUnit",
                                "type": "input",
                                "op":   "EQ",
                                "position": {
                                    "spanNum": 12,
                                    "alone": true,
                                    "style": ""
                                },
                                "elmentConfig": {
                                    "type": "text"
                                },
                             }
                         ]
               }
                        
         }
     }

```

#### 过滤模型配置

 searchModel是过滤对象模型，`searchFilterConf`的过滤器控件直接绑定至该数据模型；

 模型配置如下：

 ```json
     {
        "searchModel":{
                "OrgId":"",
                "OrderDate":"",
                "OrderCode":"",
            }
    }
 ```

 注意: 模型的初始值不建议写在对象结构中，应该通过控件的init函数初始化初始值。


#### `sorting`节点

 排序配置针对sorting配置

    配置说明：
```json
   {
    "filterConf":{
        "sorting":  "GHName asc,GHState desc"
        }
   }
```
#### `InterceptEvent`节点

拦截方法节点，在一些内部api调用前后添加业务逻辑

    配置说明：
```json
   "InterceptEvent":{
      "beforeLoad":{  //数据加载前拦截
        "isOn":false,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据加载后拦截
        "isOn":false,
        "event":"function(_this,apiconf){}"
      }
    }
    
```



        
### 表信息配置  

> 表格是一个模块在pc端一般都会用到的控件，表格配置包含以下内容：

#### `table`节点配置

  配置方式

```json
   {
        "tableInfoConf": {
                    "table": {
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
   }

```

#### `columns`节点配置

> `columns`节点主要针对表列的配置，其配置参照element官网table的相关配置。

 配置方式
```json
   {
        "tableInfoConf": {
                  "columns": [
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
                           ]
           }
}

```
#### `solSlotConf`节点配置

> `solSlotConf`节点配置主要是对表格列具名渲染配置。

 整体配置方式
 
```json
"solSlotConf": [
      {  //文本渲染
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
        ],
      },
      {  //按钮组渲染
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
       {  //预览，打印，审批列渲染
        "type": "view",  
        "name": "viewSlot",  //具名关联名称
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
          },
          {
            "name": "execl",
            "icon": "icon-file-excel",
            "tipText": "导出Execl",
            "isShow": true,
            "eventConf": {
              "isOn": true,
              "click": "function(row,name,_this){let inputArr=[],_api=_this.apiConf.getMainObjectForEdit,param={};inputArr.push({dataField:'Id',op:'EQ',dataValue:row.id});param.queryConditionItem=inputArr;_api.data=param;_this.fetchObject(_api).then(function(data){if(data.success){_this._exportExecl(data.result);};});}"
            }
          } 
          {
            "name":"approve", //审批
            "icon": "icon-sitemap", //图标
            "isShow": true, //是否显示
            "eventConf": {   //控件回调函数配置
                            "isOn": true,  //是否开启回调函数
                            "click": "function(row,name,_this){_this._state(row.id);}",
                         }
          }   
        ],
      },
      {  //文本格式化
        "type": "format",  
        "name": "isLeaf",  //具名关联名称
        "eventConf": {
          "isOn": false,
          "format": "function(row,option,_this){}"  //当前行，当前前元素配置，当前vue实例
        },
      },
    ]
```

#### `itemConf`节点配置

> `itemConf`节点配置节点通过`containerComs`容器渲染，具体配置参照容器渲染器。


展示一个明细配置器

```json

"itemConf": {
         "querycontainer": {  //弹出框配置
        "dialogConf": {
          "size": "large",
          "top": "10%",
          "title": "单据明细"
        },
        "outParams": {}, //外部参数传入
        "option": {
          "type": "querycontainer",//容器类型
          "elmentConfig": {
            "style": "height:450px",
            "baseInfoConf": {
              "panelpage":{
                "titleName":"点收单明细"
              },
              "layout": {
                "border": true,
                "columnlay": {
                  "hiddenLeft": true,
                  "upToolFilter": {
                    "visiable": true
                  },
                  "downToolFilter": {
                    "visiable": false
                  },
                  "toolFunction": {
                    "visiable": false
                  }
                }
              }
            },
            "apiConf": {
              "getItemPageList": {
                "url": "/api/services/app/table2Order/getItemPageList",
                "method": "post",
                "data": {}
              }
            },
            "filterConf": {
              "selfFilterConf": [],
              "searchFilterConf": {
                "up": [
                  {
                    "val": "",
                    "type": "inputText",
                    "name": "InfoName",
                    "op": "LIKE",
                    "elmentConfig": {
                      "size": "small",
                      "disabled": false,
                      "type": "text",
                      "placeholder": "请输入材料名称",
                      "icon": "",
                      "readonly": false
                    }
                  },
                  {
                    "val": "",
                    "type": "inputText",
                    "name": "InfoModel",
                    "op": "LIKE",
                    "elmentConfig": {
                      "size": "small",
                      "type": "text",
                      "disabled": false,
                      "placeholder": "请输入规格型号",
                      "icon": "",
                      "readonly": false
                    }
                  }
                ],
                "down": []
              },
              "inputArr": [],
              "searchModel": {
                "InfoName": "",
                "InfoModel": "",
                "OrderId": ""
              },
              "sorting": "InfoModel desc"
            },
            "tableInfoConf": {
              "table": {
                "attr": {
                  "data": {},
                  "highlightCurrent": false
                }
              },
              "columns": [
                {
                  "attr": {
                    "type": "index",
                    "label": "序号",
                    "width": 80,
                    "align": "center",
                    "headerAlign": "center"
                  }
                },
                {
                  "attr": {
                    "prop": "infoName",
                    "label": "材料名称",
                    "width": 120
                  }
                }
              ],
              "solSlotConf": []
            },
            "functionConf":{
               "searchBtn": {
                    "name": "query",
                    "icon": "el-icon-search",
                    "type": "primary",
                    "size": "small",
                    "text": "查询",
                    "disabled": false,
                    "isShow": true,
                    "eventConf": {
                      "isOn": true,
                      "click": "function(name,_this){_this._reload();}"
                    },
                    "permissionSetting": "show"
                  }
            }
          }
        }
      },
      },
    

```


#### `approveConf`节点配置
> `approveConf`节点配置审批状态dialog弹出框配置。

```json
"approveConf":{  
      "dialogConf": {
        "size": "small",
        "top": "10%",
        "title": "审批状态查看"
      }
      
    }
```


#### `pagination`节点配置
>主要配置table分页默认条数以及分页布局

```json
{
    "pagination":{
                        "pageSize":10,
                        "pageSizes":[10,20,50],
                        "layout":"total, sizes, prev, pager, next, jumper"
                    }
}
```


#### `InterceptEvent`节点配置

>主要配置相关拦截事件

```json
{
   "InterceptEvent":{
      "rowclick":{  //表格数据行选中时的拦截事件
        "isOn":true,
        "event":"function(_this,rows){}"
      }
    }
}
```

---


###  功能配置

>  一个模块由多个功能组成。如，数据查询、添加对象、编辑对象、删除对象，审核对象等等。
不同的功能触发事件不同。像数据查询、翻页功能属于过滤器范畴，已在过滤器中配置。
功能配置主要针对模块的 添加、修改、删除、审核、撤销审核、审批、扩展功能（预留三个）等功能进行配置，主要针对按钮的渲染样式配置，和api的调用配置在回调函数中体现。

#### 编辑功能配置

> 一般来说，编辑功能配置主要包含： 添加、修改、删除、审核、审批、等功能。

  配置说明：模块中的编辑功能按钮在布局上一般都放在工具条上，因此配置时配置为数组形式
    
```json
  {
  "functionConf": {
    "funBtn":[  
         {  //按钮配置项
            "name": "add",  //属性名称
            "icon": "icon-plus", //图标
            "type": "primary", //主题
            "size": "small", //大小
            "text": "添加", //文本
            "disabled": false,  //是否可用
            "isShow": true, //是否可见
            "eventConf": {
                            "isOn": true,
                            "click": "function(name,_this){ _this._add();}"  //功能事件 参数为当前功能名称，模块主界面的vue示例
                        },
            "permissionSetting": "Materials.Consume.Plan.GHInitialPlanOrders.Create" //权限控制标识  如果功能按钮不受权限控制 配置为 isShow
        },
     
    ]
  }
}
```

#### 查询功能配置

> 查询功能配置查询功能按钮。

    配置说明：
```json
   {
    "functionConf":{
            "searchBtn": {  //按钮配置项
                "name": "query",  //属性名称
                "icon": "icon-plus", //图标
                "type": "primary", //主题
                "size": "small", //大小
                "text": "查询", //文本
                "disabled": false,  //是否可用
                "isShow": true, //是否可见
                "eventConf": {
                                "isOn": true,
                                "click": "function(name,_this){ _this._reload();}"  //功能事件 参数为当前功能名称，模块主界面的vue示例
                            },
                "permissionSetting": "isShow" //权限控制标识  如果功能按钮不受权限控制 配置为 isShow
            },
        }
   }

```


#### Form表单按钮配置

> Form表单按钮配置主要包含：保存、重置、选材等，以数组方式配置

```json
  {
  "functionConf": {
  "formBtn":[  
         {  
            "name": "reset",  //属性名称
            "icon": "icon-plus", //图标
            "type": "", //主题
            "size": "small", //大小
            "text": "重置", //文本
            "disabled": false,  //是否可用
            "isShow": true, //是否可见
            "eventConf": {
                            "isOn": true,
                            "click": "function(name,_this){ _this._resetForm();}"  //功能事件 参数为当前功能名称，模块编辑界面的vue实例
                        },
            "permissionSetting": "isShow" //权限控制标识  如果功能按钮不受权限控制 配置为 isShow
        },
        {  
            "name": "save",  //属性名称
            "icon": "icon-plus", //图标
            "type": "primary", //主题
            "size": "small", //大小
            "text": "提交", //文本
            "loading":false,//加载状态
            "disabled": false,  //是否可用
            "isShow": true, //是否可见
            "eventConf": {
                            "isOn": true,
                            "click": "function(name,_this){ _this._submitForm();}"  //功能事件 参数为当前功能名称，模块编辑界面的vue实例
                        },
            "permissionSetting": "isShow" //权限控制标识  如果功能按钮不受权限控制 配置为 isShow
        },
         {  
            "name": "select",  //属性名称
            "icon": "icon-plus", //图标
            "type": "primary", //主题
            "size": "small", //大小
            "text": "提交", //文本
            "disabled": false,  //是否可用
            "isShow": true, //是否可见
            "eventConf": {
                            "isOn": true,
                            "click": "function(name,_this){ _this._onSelect('常用材料选材框');}"  //功能事件 参数为数据选择器名称，模块编辑界面的vue实例
                        },
            "permissionSetting": "isShow" //权限控制标识  如果功能按钮不受权限控制 配置为 isShow
        },
    ]
  }
}
```
注意：按钮中如果配置了`loading`属性，在调用中API过程中需要该表对应的loading属性。

#### 功能状态

> 功能配置中我们预留了一个funState对象，通过内部的回调函数来编辑按钮行选中的状态控制。

  配置说明：模块中的功能按钮在布局上一般都放在工具条上
    
```json
  {
     "functionConf": {
            "funState": {  
                "eventConf": {
                    "isOn": true,
                    "click": "function(selectRows，_this){}"  //参数 选中行对象数组、主模块vue实例
                    }
                }
  }
}
```
---

###  Form表单配置

Form表单一般在dialog中呈现，其配置如下：

####  Form表单的dialog配置

配置说明：

```json
 {
  "formConf": {
    "dialogConf": {  
      "size": "small", //大小
      "top": "10%",  //距离顶部位置
      "title": "工号信息编辑",  //标题
      "modalAppendToBody": false,  //是否附加至body标签
      "closeOnClickModal": false, //是否点击遮罩层关闭
      "afterAddClose":false  //是否显示添加后关闭选择框。
    }
  }
}
```

####  Form表单的头部信息配置

配置说明：一般来书 头部信息主要用于主从结构单据，其结构如下：

```json
 {
  "formConf": {
    "formHeader": {  //表头结构
      "isShow": true,  //是否显示
      "litteTitle": "一局电务公司", //副标题
      "title": "工号总需用计划"  //主标题
    },
  }
}
```

#### 表单部分配置

form表单分两种类型：

##### 带tabPanel的Form表单框

```json
{
  "formConf": {
    "formConfigs": {  
        "tabpanelconf": { //总体配置
            "disabled": false, //是否为tabpanel类表单， 默认是
            "type": "", //tabpanel的类型
            "style": "height:300px" //form高度，默认为auto
        },
        "tabConfigs": [
            {
            "tabpanel": { //各个分页的tabpanel配置
                "title": "基本信息", //标题
                "disabled":false,  //是否可用
            },
            "formConfig": [  //元素配置  参照控件渲染器配置
                {
                "val": "",
                "title": "父节点",
                "name": "parentId",
                "type": "ghtree",
                "position": {
                    "spanNum": 12,
                    "alone": false,
                    "style": ""
                },
                "elmentConfig": {
                    "placeholder": "选择上级工号",
                    "readonly": true
                },
                "eventConf": {
                    "isOn": true,
                    "change": "function(node,_this){_this.formModel.fullName=node.fullName;}",
                },
                "rules": [
                    {
                    "required": true,
                    "message": "上级工号不能为空",
                    "trigger": "change"
                    }
                ]
                },
                {
                    "val": "",
                    "title": "标准工号",
                    "name": "sId",
                    "type": "treeselect",
                    "position": {
                        "spanNum": 12,
                        "alone": false,
                        "style": ""
                },
                "elmentConfig": {
                    "placeholder": "选择标准工号",
                    "readonly": true,
                    "defaultProps": {
                    "children": "children",
                    "label": "text",
                    "id": "id",
                    "funcCode": "funcCode"
                    },
                    "treedata": []
                },
                "rules": [
                    {
                    "required": true,
                    "message": "标准工号不能为空",
                    "trigger": "change"
                    }
                 ]
                }
            ]
            },
            {
            "tabpanel": {
                "title": "其他信息"
            },
            "formConfig": [
                {
                "val": "",
                "title": "计量单位",
                "name": "mUnit",
                "type": "input",
                "position": {
                    "spanNum": 12,
                    "alone": true,
                    "style": ""
                },
                "elmentConfig": {
                    "type": "text"
                },
                "rules": [
                    {
                    "required": true,
                    "message": "计量单位",
                    "trigger": "blur"
                    }
                ]
                }
            ]
            }
        ]
       }
 }
}
```

##### 经典Form表单框

```json
{
  "formConf":{
      "formConfigs": {
      "tabpanelconf": {
        "disabled": true,  //disabled属性为true表示不带tabpanel
        "type": "",
        "style":"height:300px"  //form表单高度
      },
      "formConfig": [  //formConfig内部配置参照控件渲染器
            {
              "val": "",
              "title": "用料单位名称",
              "name": "labourName",
              "type": "input",
              "position": {
            "spanNum": 12,
                "alone": true,
                "style": ""
              },
       "elmentConfig": {
                "type": "text"
              },
              "rules": [{
                  "required": true,
                  "message": "用料单位不能为空！",
                  "trigger": "blur"
                }
              ]
            },
            {
              "val": "",
          "title": "联系人",
              "name": "labourContact",
              "type": "input",
              "position": {
                "spanNum": 12,
                "alone": true,
                "style": ""
           },
              "elmentConfig": {
                "type": "text"
              },
              "rules": [
                {
                  "required": true,
                  "message": "联系人不能为空！",
                  "trigger": "blur"
                }
              ]
            }
        ]
    },
  }
}
```

注意：  `form表单中的元素的双向绑定对象为FormModel对象。`

####  FormModel对象

> formModel对象是和后台数据交互的载体，一般不同模型结构数据，formModel的结构也不一样

注意： 不要在formModel中初始化值，应该在控件的init方法中初始化。

##### 单表的formModel结构

```json
    "formModel": {
               "order":{ 
                    "labourName":"",
                    "orgId":"",
                    "orgName":"",
                    "labourContact":"",
                    "labourPhone":"",
                    "labourFax":"",
                    "labourTypeName":"",
                    "labourOrgCode":"",
                    "remark":""
                 }
    }
```
##### 单表编辑多条的formModel结构

```json
    "formModel": {
               "order":{   //注意：order内的属性是明细对应的通用属性，在保存之前要赋值到明细对应的列
                    "labourName":"",
                    "orgId":"",
                    "orgName":"",
                    "labourContact":"",
                    "labourPhone":"",
                    "labourFax":"",
                    "labourTypeName":"",
                    "labourOrgCode":"",
                    "remark":""
                 },
                 "items":[
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",},
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",},
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",}
                   ],
                 
    }
```
##### 主从表的formModel结构

```json
    "formModel": {
               "order":{ 
                    "labourName":"",
                    "orgId":"",
                    "orgName":"",
                    "labourContact":"",
                    "labourPhone":"",
                    "labourFax":"",
                    "labourTypeName":"",
                    "labourOrgCode":"",
                    "remark":""
                 },
                 "items":[
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",},
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",},
                    { "labourName":"", "orgId":"", "orgName":"", "labourContact":"", "labourPhone":"",}
                   ],
                  "config":{
                        "isGenerateCode": true  //是否生成单号
                  } 
    }
```



####  InterceptEvent对象

> 该对象中配置拦截方法，注意：拦截方法提供了form表单的vue实例。


```JSON
 "InterceptEvent": {
      "mounted": {
        "isOn": true,
        "event": "function(_this){ if(_this.selectRow.id===undefined){_this._getCode(_this.formModel.order.orderDate)}}"
      },
      "beforeDataRender": {
        "isOn": true,
        "event": "function(_this){}"
      },
      "beforeSubmit": {
        "isOn": true,
        "event": "function(_this){}"
      },
       "afterSubmit": {
        "isOn": true,
        "event": "function(_this){}"
      }
```


#### WatchEvent对象

在WatchEvent中监听了 getGlobString2的值，可以根据getGlobString2的值变化编辑逻辑。

```json
 "WatchEvent": {
        "isOn": true,
        "event": "function(_this){}"
    }
```
---


### 业务模块实例预留变量
    
#### 预留属性

##### `selfFilterItem`
   
`selfFilterItem`主要用于存放筛选器中的`selfFilterConf`的默认值和选中值。

##### `refList`
   
`refList`对象上挂在了表单组件的对象实例，用于访问表单组件对象交互操作。

##### `extensionObj`
   
`extensionObj`主要为实例中提供的空对象，用于存放中间变量对象。

##### `funBtnConf`

`funBtnConf`对象为模块的功能按钮对象数组。

##### `fetchObject`

`fetchObject`类似于fetch，用于异步数据请求。

##### `utilObject`

`utilObject` 包含众多工具方法，供编写逻辑使用。

##### `globConf`

`globConf` 全局配置对像。

##### `logicMethods`

`logicMethods` 系统逻辑函数对像。

##### `getGlobObject1`,`getGlobObject2`,`getGlobString1`,`getGlobString2`,`getGlobArray1`

以上属性为全局属性，在任何function(_this){}中调用`_this.getGlobObject1`可以获取存储在对象中的值。
在框架中提供了两个object类型，两个String类型，一个Array类型。
该属性与`setGlobObject1`,`setGlobObject2`,`setGlobString1`,setGlobString2`,`setGlobalArray1`方法对应。


#### 预留方法

1. _add()

说明：添加按钮调用方法

2. _edit()

说明： 修改按钮调用方法

3. _delete()

说明： 删除按钮调用方法

4. _audit()

说明： 审核内置方法


5. _unAudit()

说明： 撤销审核内置方法


6. _approve()

说明： 审批内置方法

7. _state(id)

说明： 查看审批状态内置方法

---


