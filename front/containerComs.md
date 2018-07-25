## 容器组件

> 容器组件是指具有特定业务功能的组件，如数据编辑器、数据选择器、数据表格展示器、图表展示器、内容渲染器、评论插件等等。


#### selectContainer

> 数据选择框主要提供数据过滤和向制定模块插入数据功能，配置主要包含：基本信息配置、api配置、过滤器配置、表信息配置、功能信息配置

  数据选择框配置和模块配置再各项配置上结构相似，一次在文档中不会详细说明，只列出具体的配置结构和说明。

##### 基本信息配置

配置说明：包含弹出层的Dialog配置和布局配置

```json
 {
  "baseInfo": {  //基本信息
     "dialogConf": { //弹出层配置
      "size": "small", //弹框大小
      "top": "10%",   //距上部位置
      "title": "常用材料选材框",  //选材框名称
      "modalAppendToBody": false,  
      "closeOnClickModal": false,  //是否点击modal关闭
      "afterAddClose": true,//是否每次选择数据后关闭dialog
      "style":"height:450px", 
      "dataType":0,  //来源数据类型
      "isReport":false //选材框类型  true为报表类型，主要体现在过滤器和数据分页
    },
    "layout": {   //布局参考模块配置
     "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
  "apiConf": {
    "getMainPageList": {
      "url": "/api/services/app/gHConfig/getMainPageList",
      "method": "post",
      "data": {}
    },
  }
}
```

注意：所有的选材框内部调用方法名统一为`getMainPageList`,如果与俱来的方法名称不符合，配置时请采用`getMainPageList`更换配置中的路径和参数。

##### 过滤器配置

选择器过滤器配置与模块过滤器配置的结构相同

```json
{
 "filterConf": {
    "selfFilterConf": [],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
      "InfoName": "",
      "InfoModel": "",
      "OrgId": "",
      "ClassNodeBh":""
    },
    "sorting": " ",
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```

##### 表信息配置

配置说明：表信息配置和模块的表格配置相同。其配置结构如下：

```json
{
  "tableInfoConf": {
    "table": {
      "attr": {
        "data": {},
        "highlightCurrent": false
      }
    },
    "columns": [],
    "solSlotConf": [],
    "pagination":{},
    "InterceptEvent":{
      "rowclick":{  //表格行选中拦截事件
        "isOn":true,
        "event":"function(_this,currentrows){}"
      }
    }
  }
}
```

##### 功能信息配置

通常情况下，数据选择框的功能按钮包含 查询、选中确认功能；

```json
{
  "functionConf": {
    "funBtn": {
      "selectBtn": {
        "name": "select",
        "icon": "icon-plus",
        "type": "primary",
        "size": "small",
        "text": "确认",
        "disabled": false,
        "isShow": true,
        "eventConf": {
          "isOn": true,
          "click": "function(name,_this){_this._getSelectRows();}"
        },
        "permissionSetting": "show"
      }
    },
    "funState": {
      "eventConf": {
        "isOn": true,
        "click": "function(_selectRows,_this){}"
      }
    },
    "searchBtn": {
      "name": "query",
      "icon": "icon-magnifier",
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
```


**注意** 选中确认按钮

一般用于对选中的数据进行处理，在click中提供了`_this._getSelectRows();`,该方法一般要求和tableEdit控件搭配使用。
如果是数据选中框单独使用，则需要在click事件中自定义逻辑实现需求，其中`_this.selectRows`可以获取到选中数据集。

---



#### selectContainerR

> 报表数据选择框主要提供数据过滤和向制定模块插入数据功能，配置主要包含：基本信息配置、api配置、过滤器配置、表信息配置、功能信息配置

  报表数据选择框配置和`queryContainerR`结构相似，在文档中不会详细说明，只列出具体的配置结构和说明。

##### 基本信息配置

配置说明：包含弹出层的Dialog配置和布局配置

```json
 {
  "baseInfo": {  //基本信息
     "dialogConf": { //弹出层配置
      "size": "small", //弹框大小
      "top": "10%",   //距上部位置
      "title": "常用材料选材框",  //选材框名称
      "modalAppendToBody": false,  
      "closeOnClickModal": false,  //是否点击modal关闭
      "afterAddClose": true,//是否每次选择数据后关闭dialog
      "style":"height:450px", 
      "dataType":0,  //来源数据类型
      "isReport":false //选材框类型  true为报表类型，主要体现在过滤器和数据分页
    },
    "layout": {   //布局参考模块配置
     "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
   "apiConf": {
     "filterParams": {
      "procType": 0,  //返回类型
      "secondKeys": "",   //sql语句配置编码
      "secondOperates": "",
      "secondValues": "",  
      "procName": "Report_RoadWork"  //调用送出过程名称
    }
  }
}
```

注意：所有的选材框内部调用方法名统一为`getMainPageList`,如果与俱来的方法名称不符合，配置时请采用`getMainPageList`更换配置中的路径和参数。

##### 过滤器配置

选择器过滤器配置与模块过滤器配置的结构相同

```json
{
 "filterConf": {
    "selfFilterConf": [],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
      "InfoName": "",
      "InfoModel": "",
      "OrgId": "",
      "ClassNodeBh":""
    },
    "sorting": " ",
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```
注意：此接口一般获取数据后全部加载后再分页。


##### 表信息配置

配置说明：表信息配置和模块的表格配置相同。其配置结构如下：

```json
{
  "tableInfoConf": {
    "table": {
      "attr": {
        "data": {},
        "highlightCurrent": false
      }
    },
    "columns": [],
    "solSlotConf": [],
    "pagination":{}, //分页配置
    "InterceptEvent":{
      "rowclick":{  //表格行选中拦截事件
        "isOn":true,
        "event":"function(_this,currentrows){}"
      }
    }
  }
}
```

##### 功能信息配置

通常情况下，数据选择框的功能按钮包含 查询、选中确认功能；

```json
{
  "functionConf": {
    "funBtn": {
      "selectBtn": {
        "name": "select",
        "icon": "icon-plus",
        "type": "primary",
        "size": "small",
        "text": "确认",
        "disabled": false,
        "isShow": true,
        "eventConf": {
          "isOn": true,
          "click": "function(name,_this){_this._getSelectRows();}"
        },
        "permissionSetting": "show"
      }
    },
    "funState": {
      "eventConf": {
        "isOn": true,
        "click": "function(_selectRows,_this){}"
      }
    },
    "searchBtn": {
      "name": "query",
      "icon": "icon-magnifier",
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
```


**注意** 选中确认按钮

一般用于对选中的数据进行处理，在click中提供了`_this._getSelectRows();`,该方法一般要求和tableEdit控件搭配使用。
如果是数据选中框单独使用，则需要在click事件中自定义逻辑实现需求，其中`_this.selectRows`可以获取到选中数据集。

---

#### queryContainer

> 业务模块容器主要用于在一些报表或者业务模块的二级页面需要业务编辑功能时提供的可配置容器，可以实现与模块配置相同的功能，所以配置基本上和模块配置基本相同。

 **此容器已加入`containerComs`渲染器中**

##### 基本信息配置

配置说明：包含弹出层的Dialog配置和布局配置  

```json
 {
  "baseInfo": {  //基本信息
    "reportType": "querycontainer", 
     "panelpage": {    //模块嵌套面板配置  //在二级页面不需要配置该节点
        "titleName": "模块名称", //模块显示名称
        "icon": "icon-pencil2", //模块显示图标
        "reloadIsShow": false,  //模块页面刷新按钮
        "fullScreenIsShow": true,//模块页面全屏功能按钮
        "helpIsShow": true       //模块帮助功能按钮
    },
    "layout": {   //布局参考模块配置
      "border": true, 
      "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      },
       "init":{  //该初始化配置在只在一级页面有效
        "isOn":true,
        "event":"funciton(_this,option,outParams){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
  "apiConf": {
    "getItemPageList": {
                "url": "/api/services/app/table2Order/getItemPageList",
                "method": "post",
                "data": {}
              }
  }
}
```

注意：模块容器中数据调用的API一般为分页接口。

##### 过滤器配置

过滤器配置结构如下：

```json
{
 "filterConf": {
    "selfFilterConf": [],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
    },
    "sorting": " ",
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```

##### 表信息配置

配置说明：表信息配置和模块的表格配置相同。其配置结构如下：

```json
{
  "tableInfoConf": {
    "table": {
      "attr": {
        "data": {},
        "highlightCurrent": false
      }
    },
    "columns": [],
    "solSlotConf": [],
    "itemConf":{},
    "pagination":{
      "pageSize": 15,
      "pageSizes": [15,30,50],
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    "InterceptEvent":{
      "rowclick":{  //表格行选中拦截事件
        "isOn":true,
        "event":"function(_this,currentrows){}"
      }
    }
  }
}
```

##### 功能信息配置

功能节点配置如下：

```json
{
  "functionConf": {
       "funBtn": {
            //功能按钮配置区
        },
        "funState": {  //功能按钮状态控制
          "eventConf": {
            "isOn": true,
            "click": "function(_selectRows,_this){}"
          }
        },
        "formBtn": {
            //form表单按钮配置区
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "excelBtn": {
          "name": "excel",
          "icon": "icon-file-excel",
          "type": "success",
          "size": "small",
          "text": "Execl导出",
          "disabled": false,
          "isShow": true,
          "eventConf": {
            "isOn": true,
            "click": "function(name,_this){}"
          },
          "permissionSetting": "show"
          }
  }
}
```

##### 表单信息配置

如下是一个上传文件的表单配置：

```json
{
   "formConf": {
        "dialogConf": {
          "size": "large",
          "top": "12%",
          "title": "编辑附件",
          "afterAddClose": false
        },
        "formHeader": {
          "isShow": false,
          "title": ""
        },
        "formConfigs": {
          "tabpanelconf": {
            "disabled": true,
            "type": "",
            "style": "height:170px"
          },
            "formConfig": [
              {
                "title": "文件名称",
                "name": "attachName",
                "type": "inputText",
                "position": {
                  "spanNum": 24,
                  "alone": true
                },
                "elmentConfig": {
                  "type": "text",
                  "size": "",
                  "placeholder": ""
                },
                "rules": [
                    {
                      "required": true,
                      "message": "文件名称不能为空！",
                      "trigger": "blur"
                    }
                  ]
              },
                {
                "title": "文件路径",
                "name": "attachUrl",
                "type": "singleUpload",
                "position": {
                  "spanNum": 24,
                  "alone": true
                },
                "elmentConfig": {
                  "placeholder": "请上传附件",
                  "moduleName":"table2order&1",
                  "allowFormat":"rar|docx|xlsx|jpg|png",
                  "allowSize":10485760
                },
                "eventConf": {
                    "isOn": true,
                    "change": "function(node,_this){_this.formModel.order.attachModule=_this.menuCode;_this.formModel.order.attachType=node.raw.type;_this.formModel.order.attachSize=node.raw.size;_this.formModel.order.projectId=_this.getUserInfo().user.manageOrgId;_this.formModel.order.sO_Col12=_this.getGlobString1;}"
                  }
              },
              {
                "title": "文件描述",
                "name": "remark",
                "type": "inputText",
                "position": {
                  "spanNum": 24,
                  "alone": true
                },
                "elmentConfig": {
                  "type": "textarea",
                  "rows": 3
                }
              }
            ]
          },
          "formModel": {
            "order": {
              "id": "",
              "projectId": "",
              "attachName": "",
              "attachModule": "",
              "attachUrl": "",
              "attachSize": "",
              "attachType": "",
              "remark": ""
            },
            "items": [],
            "config": {
              "isGenerateCode": true
            }
          },
          "InterceptEvent": { //拦截事件
                "mounted": {
                  "isOn": true,
                  "event": "function(_this){}"
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
          },
           "WatchEvent": {  //监听拦截
                  "isOn": true,
                  "event": "function(_this){}"
              }
        }
}
```
---



#### queryContainerR


> 查询数据展示容器使用比较频繁，主要展示多种业务计算的报表结果集。因此查询API采用通用存储过程查询。数据一般是全部获取后在前端分页。


**此容器已加入`containerComs`渲染器中**

##### 基本信息配置


```json
 {
  "baseInfo": {  //基本信息
     "reportType": "querycontainerR",
     "panelpage": {    //模块嵌套面板配置  //在二级页面不需要配置该节点
        "titleName": "模块名称", //模块显示名称
        "icon": "icon-pencil2", //模块显示图标
        "reloadIsShow": false,  //模块页面刷新按钮
        "fullScreenIsShow": true,//模块页面全屏功能按钮
        "helpIsShow": true       //模块帮助功能按钮
    },
    "layout": {   //布局参考模块配置
      "border": true, 
      "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      },
       "init":{  //该初始化配置在只在一级页面有效
        "isOn":true,
        "event":"funciton(_this,option,outParams){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
  "apiConf": {
     "filterParams": {
      "procType": 0,  //返回类型
      "secondKeys": "",   //sql语句配置编码
      "secondOperates": "",
      "secondValues": "",  
      "procName": "Report_RoadWork"  //调用送出过程名称
    }
  }
}
```

注意：此接口一般获取数据后全部加载后再分页。

##### 过滤器配置

过滤器配置结构如下：

```json
{
 "filterConf": {
    "selfFilterConf": [
      {
        "type": "organizetreewithpanel",
        "name": "OrgId",
        "op": "#",    //值如果加单引号使用#，不加使用$
        "elmentConfig": {
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){}",
          "init": "function(_this,option){}"
        }
      }
    ],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [ ],
    "searchModel": {
    },
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```

##### 表信息配置

配置说明：表信息配置和模块的表格配置相同。其配置结构如下：

```json
{
  "tableInfoConf": {
    "table": {
      "attr": {
        "data": {},
        "highlightCurrent": false
      }
    },
    "columns": [],
    "solSlotConf": [],
    "itemConf":{},
    "pagination":{
      "pageSize": 15,
      "pageSizes": [15,30,50],
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    "InterceptEvent":{
      "rowclick":{  //表格行选中拦截事件
        "isOn":true,
        "event":"function(_this,currentrows){}"
      }
    }
  }
}
```

##### 功能信息配置

功能节点配置如下：

```json
{
  "functionConf": {
       "funBtn": {
            //功能按钮配置区
        },
        "funState": {  //功能按钮状态控制
          "eventConf": {
            "isOn": true,
            "click": "function(_selectRows,_this){if(_this.selectRows.length>0){_this.funBtnConf['add'].disabled=false;_this.funBtnConf['delete'].disabled=false;}else{ _this.funBtnConf['add'].disabled=false;_this.funBtnConf['delete'].disabled=true;}}"
          }
        },
        "formBtn": {
            //form表单按钮配置区
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "excelBtn": {
          "name": "excel",
          "icon": "icon-file-excel",
          "type": "success",
          "size": "small",
          "text": "Execl导出",
          "disabled": false,
          "isShow": true,
          "eventConf": {
            "isOn": true,
            "click": "function(name,_this){}"
          },
          "permissionSetting": "show"
          }
  }
}
```

---



#### queryChart


> 图表展示容器集成了echart图表，可参考echart配置所需图表。


**此容器已加入`containerComs`渲染器中**

##### 基本信息配置


```json
 {
  "baseInfo": {  //基本信息
     "reportType": "queryChart",
     "panelpage": {    //模块嵌套面板配置  //在二级页面不需要配置该节点
        "titleName": "模块名称", //模块显示名称
        "icon": "icon-pencil2", //模块显示图标
        "reloadIsShow": false,  //模块页面刷新按钮
        "fullScreenIsShow": true,//模块页面全屏功能按钮
        "helpIsShow": true       //模块帮助功能按钮
    },
    "layout": {   //布局参考模块配置
      "border": true, 
      "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      },
       "init":{  //该初始化配置在只在一级页面有效
        "isOn":true,
        "event":"funciton(_this,option,outParams){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
  "apiConf": {
     "filterParams": {
      "procType": 0,  //返回类型
      "secondKeys": "",   //sql语句配置编码
      "secondOperates": "",
      "secondValues": "",  
      "procName": "Report_RoadWork"  //调用送出过程名称
    }
  }
}
```

注意：此接口一般获取数据后全部加载后再分页。

##### 过滤器配置

过滤器配置结构如下：

```json
{
 "filterConf": {
    "selfFilterConf": [
      {
        "type": "organizetreewithpanel",
        "name": "OrgId",
        "op": "#",    //值如果加单引号使用#，不加使用$
        "elmentConfig": {
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){}",
          "init": "function(_this,option){}"
        }
      }
    ],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
    },
    "loadListen":{
      "isOn":true,  //是否开启定时刷新
      "Num":10000   //刷新时间间隔
    },
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后   
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```
**注意**  图表容器中的配置数据挂在示例对象的`options`下，配置数据初始化在拦截事件`afterLoad`中执行。
   
##### 图表信息配置

配置说明：表信息配置和模块的表格配置相同。其配置结构如下：

```json
{
  "tableInfoConf": {
    "options": {
        //图表配置  参照echart配置
    },
    "itemConf":{}, //二级页面配置
}
```

##### 功能信息配置

功能节点配置如下：

```json
{
  "functionConf": {
       "funBtn": {
            //功能按钮配置区
            "attachment": {
            "name": "attachment",
            "icon": "icon-attachment",
            "type": "primary",
            "size": "small",
            "text": "附件管理",
            "disabled": true,
            "isShow": true,
            "eventConf": {
              "isOn": true,
              "click": "function(name,_this){let conf=_this.tableInfoConf.itemConf.attachment;_this.itemConf=conf;_this.itemFormVisible=true;_this.setGlobString1(_this.selectRows[0].id);}"
            },
            "permissionSetting": "Table2Orders.ExecuteSqlTwo&1"
          }
        },
        "funState": {  //功能按钮状态控制
          "eventConf": {
            "isOn": true,
            "click": "function(_selectRows,_this){}"
          }
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "excelBtn": {
          "name": "excel",
          "icon": "icon-file-excel",
          "type": "success",
          "size": "small",
          "text": "Execl导出",
          "disabled": false,
          "isShow": true,
          "eventConf": {
            "isOn": true,
            "click": "function(name,_this){}"
          },
          "permissionSetting": "show"
          }
  }
}
```

---




#### htmlContainer


> html渲染容器提供了可配置的过滤器，获取的数据按照业务需求来自定义样式渲染。


**此容器已加入`containerComs`渲染器中**

##### 基本信息配置


```json
 {
  "baseInfo": {  //基本信息
     "reportType": "htmlContainer",
     "panelpage": {    //模块嵌套面板配置  //在二级页面不需要配置该节点
        "titleName": "模块名称", //模块显示名称
        "icon": "icon-pencil2", //模块显示图标
        "reloadIsShow": false,  //模块页面刷新按钮
        "fullScreenIsShow": true,//模块页面全屏功能按钮
        "helpIsShow": true       //模块帮助功能按钮
    },
    "layout": {   //布局参考模块配置
      "border": true, 
      "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "mounted":{  //mounted 拦截
        "isOn":true,
        "event":"function(_this){}"
      },
       "init":{  //该初始化配置在只在一级页面有效
        "isOn":true,
        "event":"funciton(_this,option,outParams){}"
      }
    }
  }
}
```

##### API配置

配置说明：数据选择框所用到的API

```json
{
  "apiConf": {
     "filterParams": {
      "procType": 0,  //返回类型
      "secondKeys": "",   //sql语句配置编码
      "secondOperates": "",
      "secondValues": "",  
      "procName": "Report_RoadWork"  //调用送出过程名称
    }
  }
}
```

注意：此接口一般获取数据后全部加载后再分页。

##### 过滤器配置

过滤器配置结构如下：

```json
{
 "filterConf": {
    "selfFilterConf": [
      {
        "type": "organizetreewithpanel",
        "name": "OrgId",
        "op": "#",    //值如果加单引号使用#，不加使用$
        "elmentConfig": {
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){}",
          "init": "function(_this,option){}"
        }
      }
    ],
    "searchFilterConf": {
      "up": [],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
    },
    "loadListen":{
      "isOn":true,  //是否开启定时刷新
      "Num":10000   //刷新时间间隔
    },
    "InterceptEvent":{
      "beforeLoad":{ //数据获取之前
        "isOn":true,
        "event":"function(_this,apiconf){}"
      },
      "afterLoad":{ //数据获取之后   
        "isOn":true,
        "event":"function(_this){}"
      }
    }
  }
}
```
**注意**  html代码数据挂在示例对象的`content`下，配置数据初始化在拦截事件`afterLoad`中执行。
   
##### 展示信息配置

配置说明：

```json
{
  "tableInfoConf": {
    "content": {
        //html内容配置
    },
    "itemConf":{}, //二级页面配置
}
```

##### 功能信息配置

功能节点配置如下：

```json
{
  "functionConf": {
       "funBtn": {
            //功能按钮配置区
        },
        "funState": {  //功能按钮状态控制
          "eventConf": {
            "isOn": true,
            "click": "function(_selectRows,_this){if(_this.selectRows.length>0){_this.funBtnConf['add'].disabled=false;_this.funBtnConf['delete'].disabled=false;}else{ _this.funBtnConf['add'].disabled=false;_this.funBtnConf['delete'].disabled=true;}}"
          }
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "searchBtn": {  //查询按钮
          "name": "query",
          "icon": "icon-plus",
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
        },
        "excelBtn": {
          "name": "excel",
          "icon": "icon-file-excel",
          "type": "success",
          "size": "small",
          "text": "Execl导出",
          "disabled": false,
          "isShow": true,
          "eventConf": {
            "isOn": true,
            "click": "function(name,_this){}"
          },
          "permissionSetting": "show"
          }
  }
}
```

---





#### complexContainer


> 综合报表容器其本质只是提供了一种布局方式，其各个内部的展示还是具体的容器。

**此容器已加入`containerComs`渲染器中**



##### 基本信息配置


```json
 {
  "baseInfo": {  //基本信息
     "reportType": "complexContainer",
     "panelpage": {    //模块嵌套面板配置  //在二级页面不需要配置该节点
        "titleName": "模块名称", //模块显示名称
        "icon": "icon-pencil2", //模块显示图标
        "reloadIsShow": false,  //模块页面刷新按钮
        "fullScreenIsShow": true,//模块页面全屏功能按钮
        "helpIsShow": true       //模块帮助功能按钮
    },
    "layout": {   //布局参考模块配置
      "border": true, 
      "columnlay": {  
        "hiddenLeft": false, 
        "upToolFilter": {
          "visiable": true
        },
        "downToolFilter": {
          "visiable": false
        },
        "toolFunction": {
          "visiable": true
        }
      }
    },
    "InterceptEvent":{
      "init":{  //该初始化配置在只在一级页面有效
        "isOn":true,
        "event":"funciton(_this,option,outParams){}"
      }
    }
  }
}
```


   
#####  布局配置

配置说明：

```json
{
    "tableInfoConf": {
              "content": [
                {
                  "isLeaf": false,
                  "position": {
                    "spanNum": 24
                  },
                  "style": "",
                  "childContent": [
                    {
                      "isLeaf": true,
                      "position": {
                        "spanNum": 24
                      },
                      "style": "height:300px",
                      "outParams": {
                        "firstKeys": [
                          "OrderId"
                        ],
                        "firstValues": []
                      },
                      "option": {
                        "type": "querycontainerR",
                        "elmentConfig": {
                          "style": "height:450px",
                          "baseInfoConf": {},
                          "apiConf": {},
                          "filterConf": {},
                          "tableInfoConf": {},
                          "functionConf": {}
                        },
                        "InterceptEvent": {
                          "init": {
                            "isOn": true,
                            "event": "function(_this,option,outParams){outParams.firstValues[0]=_this.outParams.row.orderId}"
                          }
                        }
                      }
                    },
                    {
                      "isLeaf": true,
                      "position": {
                        "spanNum": 24
                      },
                      "style": "height:300px;margin-top:150px;",
                      "option": {
                        "type": "commemt",
                        "elmentConfig": {
                          "style": "",
                          "id": ""
                        },
                        "InterceptEvent": {
                          "init": {
                            "isOn": true,
                            "event": "function(_this,option,outParams){option.elmentConfig.dataId=_this.outParams.row.orderId;option.elmentConfig.commentModule='施工资料查询';}"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
}
```
---