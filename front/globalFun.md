# 方法 对象

## 全局变量

---

## 全局方法

### 自定义表单验证

>目前element中直提供了不能为空的表单验证，输入类型的表单验证需要自行定义。框架中提供了常用的表单验证

0. 校验是否为空  `this.checkIsNull`
1. 校验整数  `this.checkInt`
2. 校验浮点数  `this.checkdecimal`
3. 校验邮箱格式  `this.checkemail`
4. 校验电话号码  `this.checkphoneNum`
5. 校验Url  `this.checkurl`



##### 单独校验是否输入类型用法(代码示例)

```javascript

export default {
    data(){
    return{
            rules: {    
                        userName: [
                            {  validator: this.checkInt, trigger: 'blur' }
                        ], 
                },
           }
    }
}
```

##### 单独校验是否输入类型用法(配置示例)

```javascript
{
              "title": "用户邮箱",
              "name": "userEmail",
              "type": "inputText",
              "position": {
                "spanNum": 24,
                "alone": false,
                "style": ""
              },
              "elmentConfig": {
                "type": "text"
              },
              "eventConf": {
                "isOn": true,
                "blur": "function(node,_this){}",
                "init": "function(_this,option){let obj={};obj.validator=_this.checkemail;obj.trigger='blur';obj.message='请输入邮箱格式！';option.rules.push(obj)}"
              },
              "rules": [
                {
                  "required": true,
                  "message": "材料名称不能为空！",
                  "trigger": "blur"
                }
              ]
            },
```

** 注意:在配置页面中检验输入特殊类型时需要在控件的init事件中给rules对象加入验证规则 **

---

### 判断字段重复

> 字段重复判断封装至全局函数中，调用`this.IsJudgeRepeat`来实现重复验证；   
参数通过rule传入，一共四个参数，以`|`分割。  
参数分别是：数据库表名|验证列（以逗号分割）|验证值（以逗号分割）|原值。


##### 用法 （代码示例）

```javascript

export default {
    data(){
        
    return{
            rules: {
                        userName: [ 
                            //验证规则直接调用
                            {validator: this.commonJudgeRepeat, trigger: 'blur' }
                        ], 
                },
           }
    },
    methods:{
        commonJudgeRepeat(rule, value, callback){
                let columnName='userName',columnValue='';
                for(let item in this.formModel){
                    if(columnName.indexOf(item)>=0){
                        columnValue=columnValue+this.formModel[item]+','
                    }
                }
                columnValue=columnValue.substring(0,columnValue.length-1)
                let str=`Authority_User|${columnName}|${columnValue}|${this.formModel.ouserName}`;
                this.IsJudgeRepeat(str,value, callback);
            } 
    }
}
```


##### 用法 （配置示例）

```javascript
    //在控件的init事件中配置初始化方法：
   {
         
          "title": "材料名称",
          "name": "infoName",
          "type": "inputText",
          "position": {
            "spanNum": 24,
            "alone": false,
            "style": ""
          },
          "elmentConfig": {
            "placeholder": "请输入材料名称",
            "type": "text"
          },
          "eventConf": {
            "isOn": true,
            "blur": "function(node,_this){}",
            "init": "function(_this,option){let obj={};obj.validator=_this.commonJudgeRepeat;obj.message='材料名称不能重复';obj.trigger='blur';option.rules[1]=obj;}"
          },
          "rules": [
            {
              "required": true,
              "message": "材料名称不能为空！",
              "trigger": "blur"
            }
          ]
      },


//在表单的拦截事件中给`_this.repeatFileds`赋值要判断重复的字段。
    {
  "InterceptEvent": {
       "beforeDataRender": {
        "isOn": true,
        "event": "function(_this){_this.repeatFileds='infoName'}"  
      },
    }
    }
```



---


### 获取单号

>获取单号的方法`this.generateOrderCode`为全局方法 调用时记着要在编码管理模块配置才能生效
 

**参数说明：fn(tableName,orderDate,callback,orderType=0,value='',sortCode='')**

1. tableName 对应模块表名称
2. orgId     生成单号的组织机构编号
3. orderDate 对应的单据日期（格式 YYYY/YYYY-MM）
4. callback  回调函数
5. orderType 单据类型，和模块配置中orderType要对应
6. value     扩展列的值
7. sortCode  扩展列的排序值


##### 用法

(代码示例)
```javascript

export default {
 
    this.generateOrderCode('PL_GHInitialPlanOrder',this.formModel.order.orgId,val,    
    (val)=>{
             this.formModel.order.orderCode=val;
     });
}


```

(配置示例)  --在动态模块中进一步对调用单号进行了封装，配置时按照一下方式配置即可：
`_getCode(val,type)`
```javascript

export default {
   //页面初始化中调用：
   "InterceptEvent": {
      "mounted": {
           "isOn": true,
            "event": "function(_this){_this._getCode(_this.formModel.order.orderDate,0);}"
          },
    }
    
      //账期控件change事件中调用：
       "eventConf": {
            "isOn": true,
            "change": "function(node,_this){_this.formModel.order.orderDate=node;_this._getCode(node,0)}",
          },
           
}
```
 
---




### 日期格式化

>全局函数中引入了`monment.js` 调用`this.formatDate`提供对日期进行格式化操作。


**参数说明：formatDate(val,dateformat)**

1. val  格式话对应的值
2. dateformat  格式化参数（参照monment.js官网）

##### 用法示例

```javascript

export default {
       this.formatDate(this.formModel.order.orderDate,"YYYY-MM");
}


```



---


### 获取用户信息

>全局函数中提供`this.getUserInfo()`函数来全局调用当前用户信息。


##### 对象说明：

```json

{
    "user": {
        "realName": "超级管理员",   //用户姓名
        "gender": "男", //性别
        "userName": "admin", //用户账号
        "emailAddress": "853458083@qq.com", //用户邮箱地址
        "manageOrgId": "ec0d0d88-be0e-4de2-b767-a75b011747d7", //组织机构主键
        "manageOrgName": "中国中铁集团有限公司", //组织机构名称
        "companyId":"ec0d0d88-be0e-4de2-b767-a75b011747d7", //管理单位主键
        "companyName":"中国中铁集团有限公司",  //管理单位名称
        "roleId": "8136d43a-3d32-4c8b-9da4-a75b011747e5", //角色主键
        "roleName": "超级管理员", // 角色名称
        "realOrgId":"", //如果是项目部工区 该值为项目部主键
        "lastLoginTime": "2017-04-27T13:50:58.927+08:00", //上次登录时间
        "id": "5d6c9789-806f-403d-aaed-a75b01174814", //用户主键
        "orgCategory": "集团公司" //用户组织机构属性
    },
    "userDataRanges": [  //用户权限范围
        {
            "id": "ec0d0d88-be0e-4de2-b767-a75b011747d7",
            "text": "中国中铁集团公司"
        }
    ],
    "userRoles": [ //用户角色范围
        {
            "id": "8136d43a-3d32-4c8b-9da4-a75b011747e5",
            "text": "Admin"
        }
    ]
}

```
---
### 获取当前模块对象

> 全局函数中封装了`getTableName(url='')`方法来返回模块对象

 参数： url为当前模块的访问路径，一般通过路由对象`this.$route.path`获取
 返回值：promise对象
 
---
### 执行通用存储过程方法

> 全局函数中封装了`commonSqlExcute(params)`方法来执行存储过程
 参数： params具体属性如下：
 返回值：promise对象      
       ```json
            {
              "procType": 0, //0是返回值类型为数据集合，1是返回值为影响行数
              "firstKeys": "string", //存过过程的参数名集合以，分割
              "firstValues": "string",/存过过程的参数值集合以，分割，如果值需要加单引号需要用$符号包裹，不需要用#号包裹
              "secondKeys": "string", //调用系统中配置的sql语句时的sql语句标识 
              "secondOperates": "string", //暂时无用
              "secondValues": "string", //暂时无用
              "procName": "string", //执行存储过程名称
              "orderDataType": 0 
            }
       ```
      
---

### 使用async封装的异步请求

> 全局函数中封装了`asyncFunc(apiConf,errText='')`方法来调用异步请求 (仅支持在代码中使用)

 返回值：promise对象
 参数： 
     1.apiConf为异步请求参数，具体参数结构以调用的api决定。
     2.errText为错误提示信息
     
---

### 获取审批状态信息

> 全局函数中封装了`getApproveInfo(tableName='')`方法来调用异步请求

 返回值：promise对象
 参数：tableName为对应模块表名称 

---

### 生成guid字符串

* 全局函数中提供`this.newGuid()`生成guid唯一字符串
* 全局函数中提供`this.guidOfNull()`生成空的guid字符串


---

### execl导入导出

##### 导入方法

> 全局函数中提供了`importToJsonData`方法来支持execl导入功能

**参数：**
1. files： 传入文件对象
2. callback: 回调函数，参数为导入文件的json数据字符串。

调用示例：

``` javascript
    const files = evt.target.files;  //evt为事件方法参数
			if(files && files[0]){
				this.importToJsonData(files[0],(data)=>{
					this.data=data;
				});
			}
```


---


##### 导出方法

> 全局函数中提供了`exportHtmlToExcel`方法来支持execl导出功能

**参数：**
1. str： 导出文件的html拼接字符串
2. fileConf: fileConf为导出文件的配置参数详细说明如下：

    ```json
           { 
            "fileName":"导出文档", //导出文件名
            "titleName":"测试报表",  //报表标题
            "withDate":true,  //是否带导出日期
            "withReportHeader":true, //是否显示报表头
            "HeaderColspan":15,  //表头合并列数
            "blobType":"application/vnd.ms-excel",  //导出文件格式
            "docType":".xls" //导出文件后缀
           }
    ```


调用示例：

``` javascript
    let Str=`
			<table style=\"border: 1px solid black;\">
				<tr>
					<td align=\"center\"  colspan=\"14\" height=\"40\"> <span style=\"font-size: 20px;\"><b><u> 钢筋需用计划</u></b></span></td>
				</tr>
				<tr>
					<td nowrap colspan=\"3\"> 计划单位:</td>
					<td nowrap colspan=\"5\" align=\"left\">计划日期:</td>
					</td><td nowrap align=\"left\" colspan=\"6\">设计编号：</td>
				</tr>
			</table>
			`;
    this.exportHtmlToExcel(Str,{withDate:false}) //配置参数可忽略

```

> 为了方便调用，特别封装了`exportCommonTemplate`方法只需要传入数据集即可，该方法可以满足格式简单需求。


**参数：**

1. ColumnConf： 导出文件的html拼接字符串
2. DataList： 传入数据数组
3. titleName：导出文件标题


调用示例

```javascript
     this.exportCommonTemplate([
     {"attr":{"align":"center","label":"表","type":"selection","width":80}}],    [{"columnExplain":"","mouduleTableName":"TS_TSingleTable01"
     }],"测试报表")
```

---

## 常用工具方法