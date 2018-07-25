# 易龙平台后台接口说明

> 易龙后台API接口采用`webapi`的方式统一向外开放接口。接口详细列表一般为：`后台IP+Port+/swagger/ui/index`。

## 通用业务表接口说明

*说明*
  后台通用表被设计为与业务无关。所有的通用表根据常见的业务类型划分为四种类型，其中包括`基础单表`、`业务单表`、`树形单表`、`普通主从表`、`业务主从表`、`中间表`。

##### 表命名说明：

  1. 基础单表 
     命名规则： `Material_BasicTable`+表序号

     **用途**： 主要用于存放一些基础信息数据，与业务数据无关的信息。 

  2. 业务单表 
     命名规则： `Material_SingleTable`+表序号

     **用途**： 存放单条业务数据。

  3. 树形单表 
     命名规则： `SingleTree_SingleTable`+表序号

     **用途**： 存放具有树形结构的数据，其中规定特定字段为树节点特定属性，参照以下列表使用。

     针对单表树模板来说以下列为树属性对应列：
       - V_Col6---名称
       - V_Col7---树截取Code
       - V_Col8---预留属性1
       - V_Col9---预留属性2
       - V_Col10---全称
       - B_Col17---是否为子节点
       - B_Col18---预留布尔类型一
       - B_Col19---预留布尔类型二 
       - O_Col26---父节点ID

  4. 普通主从表 
     命名规则： `Material_Table`+表序号+`Order` 与 `Material_Table`+表序号+`Item`

      **用途**： 存贮主从结构的单据数据。

  5. 业务主从表 
     命名规则： `LMaterial_Table`+表序号+`Order` 与 `LMaterial_Table`+表序号+`Item`

     **用途**： 存储主从结构的单据数据，主从表中附带业务字段。
    

##### 表列命名说明：
   
  **通用列命名规范：**

       - `I_`  表示int类型字段
       - `O_`  表示guid类型字段
       - `D_`  表示decimal类型字段
       - `B_`  表示boolean类型字段
       - `V_`  表示varchar类型字段

> 针对主从结构、从表的通用字段加`I`表示。

  **特殊字段用途说明**

      - `Id`           用于单表结构的主键
      - `OrderId`      用于主从结构主表主键
      - `ItemId`        用于主从结构从表主键
      - `OrgId`         用于存放组织机构主键
      - `SortCode`      排序码
      - `DataType`      单表数据类型
      - `DataId`        单表数据来源主键
      - `OrderBarCode`  用于主从结构主表单据唯一键
      - `OrderDataType`  主从结构主表类型
      - `OrderDataId`   主从结构主表数据来源主键
      - `OrderDate`     单据日期
      - `OrderCode`     单据编号
      - `OrgName`       组织机构名称
      - `IsState`       审批状态码
      - `IsAudit`       审核标识
      - `Auditor`       审核人
      - `AuditDate`     审核时间



---
## 普通单表API接口

**getMainAllList**

调用地址：`api/services/app/singleTable10/getMainAllList`

> 功能说明: 获取符合条件的所有数据

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/getMainAllList',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":[{}],  //返回的数据列表
            "error":null,
            "unAuthorizedRequest":false
       }
  ```

**getMainPageList**

调用地址：`api/services/app/singleTable10/getMainPageList`

> 功能说明: 按照分页获取符合条件的数据

权限: `AbpClientAuthorize`

调用示例： 
 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/getMainPageList',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            maxResultCount:10,
            skipCount:0,
            draw:1,
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
 ```
 *通常在调用分页获取数据时，框架中封装了InputModel对象，调用方式如下*

```javascript
    var inputArr=[                                            
                    {
                        key:"AttachName",
                        op:"LIKE",
                        value:this.searchModel.attachName,
                        TwoFieldRelation:"",
                        dataFieldTwo:"",
                        relation:"",
                    }
               ]; 
    this.mainInput.sorting="";         
    this.mainInput.addqueryConditionItem(inputArr); //mainInput为inputModel的实例化对象
    fetch({
        url:'api/services/app/singleTable10/getMainPageList',
        method:'post',
        data:this.mainInput.inputModel
    }).then(data=>{
    
    }).catch(err=>{
    })
 ```


返回值：  
  ```json
        {
            "success":true,
            "result":{
                "draw": 1, 
                "recordsTotal": 0,
                "recordsFiltered": 0, 
                "data": []
            },  //返回的数据列表
            "error":null,
            "unAuthorizedRequest":false
       }
  ```


**getMainObjectForEdit**

调用地址：`api/services/app/singleTable10/getMainObjectForEdit`

> 功能说明: 获取符合条件的第一个对象

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/getMainObjectForEdit',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":{
                 order:{ //返回查询对象
                 }
            },  
            "error":null,
            "unAuthorizedRequest":false
       }
  ```

**createOrUpdateMainObject**

调用地址：`api/services/app/singleTable10/createOrUpdateMainObject`

> 功能说明: 添加或者修改一个对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/createOrUpdateMainObject',
        method:'post',
        data:{
            "order": {
                id:"",  //如果有id属性视为修改，没有视为添加
            },
            permissionType: 0
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```



**CreateMainList**

调用地址：`api/services/app/singleTable10/CreateMainList`

> 功能说明: 添加或者修改一个对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/CreateMainList',
        method:'post',
        data:{
             items: [
                        {},
                    ],
             permissionType: 0
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```


**deleteMainObject**

调用地址：`api/services/app/singleTable10/deleteMainObject`

> 功能说明: 删除符合条件的对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/deleteMainObject',
        method:'post',
        data:{
             id:"",
             queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
             permissionType: 0
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```

**ExecuteSqlOne**

调用地址：`api/services/app/singleTable10/ExecuteSqlOne`

> 功能说明: 调用存储过程

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/ExecuteSqlOne',
        method:'post',
        data:{
              "procType": 0, //0是返回值为影响行数，1是返回值类型为数据集合
              "firstKeys": "string", //存过过程的参数名集合以，分割
              "firstValues": "string",//存过过程的参数值集合以，分割，如果值需要加单引                号需要用$符号包裹，不需要用#号包裹
              "secondKeys": "string", //调用系统中配置的sql语句时的sql语句标识 
              "secondOperates": "string", //暂时无用
              "secondValues": "string", //暂时无用
              "procName": "string" //执行存储过程名称
            }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": {
                        "result": 5, //影响行数
                        "items": null,  //结果集
                        "firstOutput": 0, //输出参数1
                        "secondOutput": "",  //输出参数2
                        "resultType": 1
                    },
            "error":null,
            "unAuthorizedRequest":false
          }
  ```


**ExecuteSqlTwo**

调用地址：`api/services/app/singleTable10/ExecuteSqlTwo`

> 功能说明: 调用存储过程

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/ExecuteSqlTwo',
        method:'post',
        data:{
              procType: 0, 
              firstKeys: "string", 
              firstValues: "string",
              secondKeys: "string", 
              secondOperates: "string", 
              secondValues: "string",
              procName: "string"
            }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": {
                        "result": 5, //影响行数
                        "items": null,  //结果集
                        "firstOutput": 0, //输出参数1
                        "secondOutput": "",  //输出参数2
                        "resultType": 1
                    },
            "error":null,
            "unAuthorizedRequest":false
          }
  ```

> 说明： `ExecuteSqlThree`、`ExecuteSqlFour`、`ExecuteSqlFive`、调用和功能与`ExecuteSqlTwo`相同。

---

##### 树形表API接口

相较于单表结构，树形结构表只是多了些树形数据获取的API，其他API与单表相同。


**GetTreeListByParent**

调用地址：`api/services/app/singleTable10/GetTreeListByParent`

> 功能说明: 根据父节点加载子节点

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/GetTreeListByParent',
        method:'post',
        data:{
              parentId: 0, 
              orgId: "string", 
            }
    }).then(data=>{

    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": [
                        //树形结构数据
                        { 
                          "parent":"父主键",
                          "id":"主键",
                          "text":"名称",
                          "fullName":"全称",
                          "funcCode":"截取的编号",
                          "code":"扩展属性一",
                          "commonDataOne":"扩展属性二",
                          "funcName":"扩展属性三",
                          "isCheck":"扩展布尔值一",
                          "isDelivery":"扩展布尔值二",
                          "isLeaf":"是否叶子节点",
                          "children":[
                            ...
                          ]
                        }
                    ],
            "error":null,
            "unAuthorizedRequest":false
          }
  ```


**GetTreeList**

调用地址：`api/services/app/singleTable10/GetTreeList`

> 功能说明: 按照树形结构获取所有数据

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/GetTreeList',
        method:'post',
        data:{
              parentId: 0, 
              orgId: "string", 
            }
    }).then(data=>{

    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": [
                        //树形结构数据
                        { 
                          "parent":"父主键",
                          "id":"主键",
                          "text":"名称",
                          "fullName":"全称",
                          "funcCode":"截取的编号",
                          "code":"扩展属性一",
                          "commonDataOne":"扩展属性二",
                          "funcName":"扩展属性三",
                          "isCheck":"扩展布尔值一",
                          "isDelivery":"扩展布尔值二",
                          "isLeaf":"是否叶子节点",
                          "children":[
                            ...
                          ]
                        }
                    ],
            "error":null,
            "unAuthorizedRequest":false
          }
  ```

## 主从表接口




相较于单表结构，主从结构表API相对较多，调用方式基本和单表类似。


**getMainAllList**

调用地址：`api/services/app/table38Order/getMainAllList`

> 功能说明: 查询符合条件的所有主表信息集合

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/getMainAllList',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":[{}],  //返回的数据列表
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---

**getMainPageList**

调用地址：`api/services/app/table38Order/getMainPageList`

> 功能说明: 按照分页获取符合条件的主表数据

权限: `AbpClientAuthorize`

调用示例： 
 
 ```javascript
    fetch({
        url:'api/services/app/singleTable10/getMainPageList',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            maxResultCount:10,
            skipCount:0,
            draw:1,
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
 ```
 *通常在调用分页获取数据时，框架中封装了InputModel对象，调用方式如下*

```javascript
    var inputArr=[                                            
                    {
                        key:"AttachName",
                        op:"LIKE",
                        value:this.searchModel.attachName,
                        TwoFieldRelation:"",
                        dataFieldTwo:"",
                        relation:"",
                    }
               ]; 
    this.mainInput.sorting="";         
    this.mainInput.addqueryConditionItem(inputArr); //mainInput为inputModel的实例化对象
    fetch({
        url:'api/services/app/singleTable10/getMainPageList',
        method:'post',
        data:this.mainInput.inputModel
    }).then(data=>{
    
    }).catch(err=>{
    })
 ```


返回值：  
  ```json
        {
            "success":true,
            "result":{
                "draw": 1, 
                "recordsTotal": 0,
                "recordsFiltered": 0, 
                "data": []
            },  //返回的数据列表
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---


**getItemAllList**

调用地址：`api/services/app/table38Order/getItemAllList`

> 功能说明: 查询符合条件的所有从表信息集合

权限: `AbpClientAuthorize`

调用方式参见 `getMainAllList`

---


**getItemPageList**

调用地址：`api/services/app/table38Order/getItemPageList`

> 功能说明: 按照分页查询符合条件的从表信息集合

权限: `AbpClientAuthorize`

调用方式参见 `getMainPageList`

---


**getAllList**

调用地址：`api/services/app/table38Order/getAllList`

> 功能说明: 查询所有符合条件的主从关联表信息集合

权限: `AbpClientAuthorize`

调用方式参见 `getMainAllList`

---


**getAllPageList**

调用地址：`api/services/app/table38Order/getAllPageList`

> 功能说明: 分页查询符合条件的主从关联表信息集合

权限: `AbpClientAuthorize`

调用方式参见 `getMainPageList`

---



**getMainObjectForEdit**

调用地址：`api/services/app/table38Order/getMainObjectForEdit`

> 功能说明: 获取符合条件的第一个主从对象

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/getMainObjectForEdit',
        method:'post',
        data:{
            queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
            sorting: ''
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":{
                 order:{ //返回查询对象
                 },
                 items:[
                     {}, //明细列表集合
                 ]
                 
            },  
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---

**createOrUpdateMainObject**
 
调用地址：`api/services/app/table38Order/createOrUpdateMainObject`

> 功能说明: 添加或者修改一个主从对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/createOrUpdateMainObject',
        method:'post',
        data:{
            "order": {
                id:"",  //如果有id属性视为修改，没有视为添加
            },
            "items": [
              {},  //明细表对象
            ],
            "config": {
                isGenerateCode: false  //如果生成编号为true
            },
            permissionType: 0  //权限标识
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---




**deleteMainObject**

调用地址：`api/services/app/table38Order/deleteMainObject`

> 功能说明: 删除符合条件的主从对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/deleteMainObject',
        method:'post',
        data:{
             id:"",
             queryConditionItem: [{
                        dataField:"ShortName", //条件属性
                        TwoFieldRelation:"",//两列关系运算符（+-*/）
                        dataFieldTwo:"", //计算列二
                        op:"LIKE",//条件关系
                        dataValue:"",//条件值
                        relation:"and" //条件链接关系(and\or)
                }],
             permissionType: 0
        }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---


**deleteItemObject**

调用地址：`api/services/app/table38Order/deleteItemObject`

> 功能说明: 删除符合条件的从表中的对象

权限: `AbpAuthorize`

调用请参考`deleteMainObject` 
 
---

**auditObject**

调用地址：`api/services/app/table38Order/auditObject`

> 功能说明: 审核对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
            url:'api/services/app/table38Order/auditObject',
            method:'post',
            data:{
                  procName: "string", //执行存储过程名称 //如果是配置的统一调用：Pr_CommonProc
                  tableName: "string", //数据库表名
                  id: "string", //
                  orgId: "string",
                  permissionType: 0
                }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":{
                "errorResult":"审核成功！",
                "result":1
            },
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---


**unAuditObject**

调用地址：`api/services/app/table38Order/unAuditObject`

> 功能说明: 撤销审核对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
            url:'api/services/app/table38Order/unAuditObject',
            method:'post',
            data:{
                  procName: "string", //执行存储过程名称 //如果是配置的统一调用：Pr_CommonProc_Un
                  tableName: "string", //数据库表名
                  id: "string", //
                  orgId: "string",
                  permissionType: 0
                }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":{
                "errorResult":"撤销审核成功！",
                "result":1
            },
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---


**approveMainObject**

调用地址：`api/services/app/table38Order/approveMainObject`

> 功能说明: 审批对象

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
            url:'api/services/app/table38Order/approveMainObject',
            method:'post',
            data:{
                  "tableName": "string", //数据库表名
                  "isState": 0,  
                  "stateText": "string", 
                  "stateDesc": "string",
                  "orgId": "string",
                  "orderId": "string",
                  "dealOptions": "string", 
                  "permissionType": 0
                }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值：  
  ```json
        {
            "success":true,
            "result":null,
            "error":null,
            "unAuthorizedRequest":false
       }
  ```
---

**ExecuteSqlOne**

调用地址：`api/services/app/table38Order/ExecuteSqlOne`

> 功能说明: 调用存储过程

权限: `AbpClientAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/ExecuteSqlOne',
        method:'post',
        data:{
              "procType": 0, //0是返回值为影响行数，1是返回值类型为数据集合
              "firstKeys": "string", //存过过程的参数名集合以，分割
              "firstValues": "string",//存过过程的参数值集合以，分割，如果值需要加单引                号需要用$符号包裹，不需要用#号包裹
              "secondKeys": "string", //调用系统中配置的sql语句时的sql语句标识 
              "secondOperates": "string", //暂时无用
              "secondValues": "string", //暂时无用
              "procName": "string" //执行存储过程名称
            }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": {
                        "result": 5, //影响行数
                        "items": null,  //结果集
                        "firstOutput": 0, //输出参数1
                        "secondOutput": "",  //输出参数2
                        "resultType": 1
                    },
            "error":null,
            "unAuthorizedRequest":false
          }
  ```


**ExecuteSqlTwo**

调用地址：`api/services/app/table38Order/ExecuteSqlTwo`

> 功能说明: 调用存储过程

权限: `AbpAuthorize`

调用示例： 
 ```javascript
    fetch({
        url:'api/services/app/table38Order/ExecuteSqlTwo',
        method:'post',
        data:{
              procType: 0, 
              firstKeys: "string", 
              firstValues: "string",
              secondKeys: "string", 
              secondOperates: "string", 
              secondValues: "string",
              procName: "string"
            }
    }).then(data=>{
    
    }).catch(err=>{
    })
    
 ```

返回值： 
 
  ```json
        {
            "success": true, 
            "result": {
                        "result": 5, //影响行数
                        "items": null,  //结果集
                        "firstOutput": 0, //输出参数1
                        "secondOutput": "",  //输出参数2
                        "resultType": 1
                    },
            "error":null,
            "unAuthorizedRequest":false
          }
  ```

> 说明： `ExecuteSqlThree`、`ExecuteSqlFour`、`ExecuteSqlFive`、调用和功能与`ExecuteSqlTwo`相同。

---





## 系统功能性接口说明

##### token获取接口

##### 登录请求接口

##### 用户信息请求接口

##### 请求菜单接口

##### 角色转化/系统漫游

##### 文件上传下载接口说明：

##### 通用存储过程接口说明：

##### 单据编号接口说明

## 前端调用API说明：

##### inputModel对象

> inputModel对象是针对分页方法封装的参数对象。使用时需要实例化，具体结构如下：

**属性**
1. maxResultCount  //总条目数
2. draw     //当前页
3. sorting  //排序方式
4. skipCount  //跳过条目数
5. queryConditionItem  //条件集合数组

**方法**

`addqueryConditionItem`  给`queryConditionItem`中添加对象。

参数： items 其结构如下：

```json
        {
            key:"AttachName",
            op:"LIKE",
            value:this.searchModel.attachName,
            TwoFieldRelation:"",
            dataFieldTwo:"",
            relation:"",
        }
        
```

> 关于items中的`结构是为了在lamada表达试中构造过滤条件使用，其说明如下：


| op   | 说明   | 
| ---- |------:|
| EQ | 等于 |      
| NEQ |不等于  |      
| GT | 大于 |        
| GTE | 大于等于 |         
| LT | 小于 |         
| LTE | 小于等于 |       
| LIKE | 模糊匹配 |        
| LIKEL | 头部匹配 |         
| LIKER | 尾部匹配 |        
| TreeLeft | 以某种关键字截取 |  
| BGT | 大于（字符类型） | 
| SGT | 小于（字符类型）  | 
     

| TwoFieldRelation   | 说明   | 
| ---- |------:|
| + | 加法 |      
| - | 减法 |      
| * | 乘法 |      
| / | 除法 | 


调用示例：

 ```javascript

 //引入
 import imputModel from 'api/inputmodel.js';

 //实例化
 let mainInput=new imputModel();

 //构造条件 
 var inputArr=[                                            
                    {
                        key:"AttachName",
                        op:"LIKE",
                        value:this.searchModel.attachName,
                        TwoFieldRelation:"",
                        dataFieldTwo:"",
                        relation:"",
                    }
               ]; 
               
    this.mainInput.sorting="";     
       
    //mainInput为inputModel的实例化对象 
    this.mainInput.addqueryConditionItem(inputArr); 
    
    //调用
    fetch({
        url:'api/services/app/singleTable10/getMainPageList',
        method:'post',
        data:this.mainInput.inputModel
    }).then(data=>{

    }).catch(err=>{
    })
```

---

##### fetch对象

```js
function fetch(options,axiosConfig={baseURL:'',authorization:'',formatData:false}){
  
}
```
> `fetch`对象是在axios插件基础上封装的后台调用方法，其参数说明如下：



**参数：**

1. options：请求配置，主要包含：
   ```json
        {
            "url":"", //请求路径
            "method":"get", //请求方法
            "data":{} //请求参数
        }
   ```
2. axiosConfig：请求额外配置：包含：

     ```json
        {
            "baseURL":"",  //请求地址和端口号
            "authorization":"", //请求权限 注意：（如果为none不带authorization在请求头部）
            "formatData":false //是否格式化请求数据
        }
   ```





