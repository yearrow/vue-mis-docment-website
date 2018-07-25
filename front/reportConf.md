## 报表配置




### 普通报表配置

> 普通报表概念相对与集成报表，一般只需要用一种容器的展现方式来渲染数据，普通报表完全能够解决你的需求！
在菜单配置中配置关键字为`supperreport`，报表配置一级组件为`containerComs`动态容器渲染。因此具体报表容器配置请参考容器组件。


**表组件中可以配置的容器组件有：**

`querycontainerR` 

名称： 报表数据展示容器

`querycontainer` 

名称： 模块数据展示容器

`queryChart` 

名称： 图表数据展示容器

`htmlContainer` 

名称： html展示容器


**配置节点对应问题：**

可配置节点参照具体容器的配置而定。节点包含：

1. `baseInfo`节点   
2. `apiConf`节点
3. `filterConf`节点
4. `tableInfoConf`节点
5. `functionConf`节点
6. `formConf`节点 （目前只有`querycontainer`才会用到）


### 报表集配置


> 报表集和报表最大的区别在于提供了公共筛选器和独立筛选器,数据显示区域提供了多tab页，各个tab页中的容器由`containerComs`配置决定，报表集主要用作正对一个业务点，使用不同的报表形式来分析业务情况，如：使用数据表格查看具体数据、使用chart图表直观预测业务方向、使用html静态页面来回执结果展示。
在菜单配置中配置关键字为`reportassemble`。


**配置节点对应问题：**

可配置节点参照具体容器的配置而定。节点包含：

1. `baseInfo`节点   
2. `filterConf`节点 （公共过滤器）
3. `tableInfoConf`节点 （各个page的配置）


#### 全局配置

配置说明：

```json

"baseInfo": {
    "reportType": 1,
    "panelpage": {
      "titleName": "报表名称",
      "icon": "icon-pencil2",
      "reloadIsShow": false,
      "fullScreenIsShow": true,
      "helpIsShow": true
    },
    "layout": {
       "border": false,
        "columnlay": {
           "hiddenLeft": false,
            "upToolFilter": {
                "visiable": true
            },
            "downToolFilter": {
                "visiable": false
            }
        }
    },
    "InterceptEvent":{  //拦截事件
      "mounted":{
        "isOn":true,
        "event":"function(_this){}"
      }
    },
    "WatchEvent":{
        "isOn":false,
        "event":"function(_this){}" //监听getGlobString2变量
    }
  }

```




#### 公共过滤器配置

> 公共过滤器部分过滤条件会和各个容器过滤条件合并。

注意：如果容器为模块数据容器，公共过滤器配置需要在模块容器的`beforereload`拦截事件中重新格式化。

配置说明：

```json

  "filterConf": {
    "selfFilterConf": [
      {
        "type": "organizetreewithpanel",
        "name": "OrgId",
        "op": "$",
        "elmentConfig": {
          "panelWidth": "200px"
        },
        "eventConf": {
          "isOn": true,
          "change": "function(node,_this){ }",
          "init": "function(_this,option){ }"
        }
      }
    ],
    "searchFilterConf": {
      "up": [
       
        {
          "type": "inputText",
          "name": "OrderCode",
          "op": "#",
          "elmentConfig": {
            "size": "small",
            "type": "text",
            "placeholder": "请输入单据编号"
          },
          "eventConf": {
            "isOn": true,
            "init": "function(_this,option){}"
          }
        }
      ],
      "down": []
    },
    "inputArr": [],
    "searchModel": {
      "OrgId": "",
      "OrderCode": "",
      "OrderDate": ""
    }
  }

```

#### 展示容器配置

展示容器中通过`containerComs`容器渲染器来渲染配置。

配置说明：
```json

"tableInfoConf": {
    "activeName": "tab1",  //默认展开项
    "type": "border-card",  //选项面板类型
    "closable": false,   //是否开启关闭按钮
    "tabList": [   
         
      {
        "tabpaneConf": {  //选项子项配置
          "label": "html渲染容器", //显示名称
          "name": "tab1",  //code
          "disabled": false, //是否禁用
          "closable": false  //是否显示关闭
        },
        "childModuleConf": { 
            //具体的容器配置   参照容器组件配置
          "option": {
            "type": "htmlRaw",  //容器类型
            "elmentConfig": {
              "content": "<p>我是html渲染内容</p>" 
            },
            "eventConf":{
              "isOn":true,
              "init":"function(_this,option){option.elmentConfig.content=`<h1>${_this.getUserInfo().user.realName}</h1>`;}"
            }
            
          }
        }
      },
      {
        "tabpaneConf": {
          "label": "报表容器展示器",
          "name": "tab2",
          "disabled": false,
          "closable": false
        },
        "childModuleConf": {
          "option": {
            "type": "querycontainerR",
            "elmentConfig": {
              "style": "",
              "baseInfoConf": {
               },
              "apiConf":{
               },
              "filterConf": {
               },
              "tableInfoConf": {  
              }
            },
            "eventConf":{
                "isOn":false,
                "init":"function(_this,option){}"
              }
          }
        }
      }
    ]
  }
  ```

  
### 综合报表配置

>在系统中针对不同权限范围的不同角色配置相应的门户。门户通过`renderContainerLay`组件来布局，其末级节点通过`containerComs`容器渲染器来渲染配置。
在菜单配置中配置关键字为`home`。

**配置节点对应问题：**

可配置节点参照具体容器的配置而定。节点包含：

1. `baseInfo`节点   
2. `tableInfoConf`节点 

### 门户配置

>在系统中针对不同权限范围的不同角色配置相应的门户。门户通过`renderContainerLay`组件来布局，其末级节点通过`containerComs`容器渲染器来渲染配置。
在菜单配置中配置关键字为`home`。


```json

{
  "homeType": 0,  //homeType为0时或启用配置路由的页面，为1时会渲染配置
  "modulePage": {
    "routerUrl": "/weight/mainPage"
  },
  "configPage": {
      "panelpage": {
      "titleName": "系统门户",
      "icon": "icon-library",
      "fullScreenIsShow": true,
      "helpIsShow": false
    },
    "outParams":{}, //外来参数
    "InterceptEvent": { //在这里执行一些公共数据的访问，可以通过outParams传入各个容器
              "init": {
                "isOn": true,
                "event": "function(_this,option){}"
              }
            },
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
  }

}
```






