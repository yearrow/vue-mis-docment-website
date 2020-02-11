#  基础规范


## 命名规范

开发对象取名一般以英文语义为主，尽量使用比较明确的字面意思描述开发对象，开发对象的命名规则根据具体的对象而定，具体要求如下：

### 常用的命名规范

#### 下划线命名法

变量名使用下划线分割小写字母的方式命名,简称`ass_bss`

示例：
```
material_categories
```
#### 帕斯卡命名法（PascalCase）

变量名称之间使用首字母大写的命名方式,简称`AssBss`

示例：
```
MaterialCategories
```
#### 驼峰命名法（camelCase）


变量名称之间使用首字母大写的命名方式,第一个字母首字母为小写,简称`assBss`

示例：
```
materialCategories
```

#### 中划线链接命名法

变量名使用中划线分割小写字母的方式命名,简称`ass-bss`

示例：
```
material-categories
```
### 项目

项目的命名均采用中划线链接命名法

示例：

```
aaa-bbb-project
```

#### 站点项目

站点名称中的code也采用`ass-bss`方式命名

PC站点命名如下：  

**node-[aa-bb]-website**

移动端站点命名如下：  

**node-[aa-bb]-app-website**

示例：

```
node-maccount-website 
node-mquantity-app-website 
```

#### 服务项目

服务端命名规则如下：

**node-[aa-bb]-service**

```
node-maccount-service
node-mquantity-app-service 
```

#### 前端组件库

前端组件库命名规则如下：

**vue-[aa-bb]-library**

```
vue-protal-framework-library
vue-protal-app-framework-library
```

> 上传至梦诚私有仓库：`@yearrow/vue-[aa-bb]-library`

#### 一般库


一般库命名规则如下：

**js-[aa-bb]-library**

```
js-common-utils-library
js-lodop-print-library
```
> 上传至梦诚私有仓库：`@yearrow/js-[aa-bb]-library`   

### 目录

目录的命名均采用中划线链接命名法

示例：

```
 web-content
 home-page
```

### 文件

文件的命名均采用中划线链接命名法

示例：

```
 plugin-config.js
 home-page.html
 global-style.pcss
 logo-64*64.png
```

### 类

类的命名均采用帕斯卡命名法（PascalCase）

示例：

``` js
export class DrawComponent {
    constructor(params) {
    }
}

```

### 函数

类的命名均采用驼峰命名法（camelCase）

示例：

``` js
export function drawTable {
}

```

>有时候会根据使用环境区分内部函数还是外部函数，如果是内部函数在函数名前加`_`

示例：

``` js

export class DrawComponent {
    constructor(params) {
    }

    drawTable() {
        // ...
    }
    _everyPageShow() {
        // ...
    }
}

```

### 变量

变量的命名均采用驼峰命名法（camelCase）

> 这里所说的变量范围主要指`js\ts\vue`语法的命名

示例：

``` js
const listData = []
let lastUpdater = 'mlc'

```

**注意**

有时候会定义一些全局变量或高频使用的变量，这些变量名允许加`$`起到强调的作用

示例：

```js
const $http = // ...
const $primaryColor = // ... 
```

### 样式类

样式类采用中划线命名方式

示例：

```css
.page-main{
  height:100%;
  width:100%;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.yl-message-text{
  padding:10px;
}

```


## 数据库

数据库中的变量均采用下划线命名法（ass_bss）

### 表命名规范

命名规则：

- g_[name]  全局公共表名称
- c_[name]  常用库表名称
- q_[name]  实物量管控表名称
- m_[name]  账务管控表名称
- t_[name]  周转材料表名称
- temp_[name]  中间缓存表名称

示例：

```sql
  g_table_name  
```
### 列名称规范

继承列（所有表具有）

  ```
  id     主键  
  creator_id 添加人主键
  creator_name 添加人
  created_at 添加时间
  modifier_id 修改人主键
  modifier_name 修改人
  updated_at 修改时间
  is_removed 是否删除
  version 版本号
  ```

继承列（按需使用）

  ```
  sort_code 排序
  is_active 状态
  is_static 是否静态
  org_id  组织机构主键 （业务表具有）
  order_id 主表主键 （主从明细表具有）
  ```

 继承列（树形表具有）

  ```
  parent_id 父节点主键
  full_id 节点主键链
  full_name 节点名称链
  level 层级
  is_leaf 子节点
  ```

  专有列（材料信息相关列）

  ```
  material_id 材料唯一标识
  material_name 材料名称
  material_model 规格型号
  material_unit 单位名称
  class_id 类别主键
  class_full_id 类别主键链
  ```

  专有列(数量、单价、金额相关列)

  ```
  tax_rate: DECIMAL(28, 4),  税率
  tax_free_price:DECIMAL(28, 8), 不含税单价
  tax_free_sum: DECIMAL(28, 4),  不含税金额
  tax_included_price:DECIMAL(28, 8),  含税单价
  tax_included_sum: DECIMAL(28, 4),  含税金额
  tax_amount: DECIMAL(28, 4), 税额
  book_price: DECIMAL(28, 8), 账面价
  book_sum:  DECIMAL(28, 4)}, 账面金额
  difference: DECIMAL(28, 4), 差额
  ```

  专有列(对接列)
  
  ```
  ori_org_id 对接第三方组织主键
  ori_class_id 对接第三方材料类别主键
  ori_material_id 对接第三方材料信息主键
  ori_supplier_id 对接第三方供应商主键
  ori_labour_id 对接第三方用料单位主键
  ori_gh_id 对接第三方工号主键
  ori_order_id 对接第三方单据主键
  ```

 ### 表创建

 #### 实体表创建

  > 双主键的话，orgId创建表的时候必须当道第一列

  示例:
  
  ```sql
  create table if not exists m_demo_table
  (                       
    org_id              BIGINT     NOT NULL                 COMMENT '组织机构主键', 
    id                  BIGINT     NOT NULL                 COMMENT '主键id',  
    string STRING                                           COMMENT 'string类型'
    filed_decimal       DECIMAL(28, 4)                      COMMENT 'decimal类型',
    filed_integer       INTEGER                             COMMENT 'integer类型',
    is_removed          BOOLEAN    NOT NULL  DEFAULT false  COMMENT '删除标记',
    creator_id          BIGINT                              COMMENT '添加人主键',
    creator_name        STRING                              COMMENT '添加人',
    created_at          TIMESTAMP                           COMMENT '创建时间',
    modifier_id         BIGINT                              COMMENT '修改人主键',
    modifier_name       STRING                              COMMENT '修改人',
    updated_at          TIMESTAMP                           COMMENT '修改时间',
	version             BIGINT                              COMMENT '版本',
    primary key (org_id,id)
  )
  comment '实体表示例'
  stored as kudu;  
  ```

  #### 事务表创建

  示例:
  
  ```sql
  create table if not exists m_demo_table
  (                       
    org_id              BIGINT     NOT NULL                 COMMENT '组织机构主键', 
    id                  BIGINT     NOT NULL                 COMMENT '主键id',  
    string STRING                                           COMMENT 'string类型'
    filed_decimal       DECIMAL(28, 4)                      COMMENT 'decimal类型',
    filed_integer       INTEGER                             COMMENT 'integer类型',
    is_removed          BOOLEAN    NOT NULL  DEFAULT false  COMMENT '删除标记',
    creator_id          BIGINT                              COMMENT '添加人主键',
    creator_name        STRING                              COMMENT '添加人',
    created_at          TIMESTAMP                           COMMENT '创建时间',
    modifier_id         BIGINT                              COMMENT '修改人主键',
    modifier_name       STRING                              COMMENT '修改人',
    updated_at          TIMESTAMP                           COMMENT '修改时间',
	version             BIGINT                              COMMENT '版本',
    __action            STRING     NULL DEFAULT 'insert'    COMMENT '对应的操作',
    primary key (__trans_id,org_id,id)
  )
  comment '事务表示例'
  stored as kudu;  
  ```  

## 元数据配置

>元数据中命名采用`ass-bss`命名规则


| 项        | 名称规范（采用`ass-bss`命名规则） | 举例          | 唯一性 | 属于产品 |
| ------------- |:-------------:| -----:|-----:|-----:|
| 产品编码  | 产品名称简称单字母|cbaseinfo | 全局唯一 | 是|
| 功能包编码| 产品编码-功能包名称-pack| cbaseinfo-base-pack |  全局唯一|是|
| 模块编码 | 产品编码-模块名称|cbaseinfo-supplier  |   全局唯一 |是|
| 模块地址 | /产品编码/模块名称.html|/cbaseinfo/supplier.html|   全局唯一 |是|
| 模块权限编码 | 模块编码-功能编码|cbaseinfo-supplier-add|   全局唯一 |是|
| 菜单设定 | 菜单根据使用组织属性命名|项目及拌合站通用|  ---|跨产品设置|
| 角色设定 | 具体角色名|项目部材料员，公司领导|  ---|跨产品设置|
| 应用配置 | 根据具体功能项命名，移动端以应用结尾| 物资账务管理系统，混凝土签收应用|  ---|跨产品设置|

## 文件夹目录结构

规范中只列出项目文件结构骨架

### 站点项目

```
    dist/
        web-content/
                   asset/
                        fonts/  字体文件
                        images/  图片资源
                        plugins/ 插件
                        *.js  打包的js文件
                        *.css 打包的css文件      
                   lib/ 拷贝的库文件
                   *.html  打包的html文件
        app.js  项目启动文件
    src/
        controllers/
                    router/       服务路由文件
                    service/      服务文件
                    index.js      项目启动文件
                    .henhouserc   代理配置文件
                    bootstrap.yml 项目配置文件
        web-content/
                    asset/
                        fonts/   字体文件
                        images/  图片资源
                        plugins/ 插件
                    components/  项目自定义组件
                    mixins/ 混合组件
                    utils/  项目功能函数
                    modules/
                            home-page/ 
                                      components/ 页面组件
                                      store/ 全局状态文件
                                      app.vue   (使用router时具有) 
                                      router.js (使用router时具有) 
                                      home-page.html
                                      index.js  
                            template.html 通用的html页面
                    .eslintrc   eslint配置
        .eslintrc   eslint配置
    iwop-pack-local.config.js  本地开发配置打包配置
    iwop-pack.config.js  打包配置
    babel.config.js babel配置文件 
    dockerfile  部署docker配置
    package.json
    .gitignore 
    .vscode/
            settings.json 编辑器配置
            launch.json 调试配置
```
### 服务项目

```
    dist/
        app.js
    src/
        sql/          脚本备份
        model/        实体文件
        router/       服务路由文件
        service/      服务文件
        utils/        功能函数       
        index.js      项目启动文件
        bootstrap.yml 项目配置文件
    .eslintrc   eslint配置
    README.md   服务说明
    dockerfile  部署docker配置
    nodemon.json 热更新配置
    package.json
    .gitignore
    .vscode/
            settings.json 编辑器配置
            launch.json 调试配置
```









