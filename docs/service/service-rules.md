### 服务端开发规范

#### 命名规范

##### 数据库命名规范

1. 表命名规范

```
  示例： g_table_name  
  g_  全局公共表名称
  c_  常用库表名称
  q_  实物量管控表名称
  m_  账务管控表名称
  t_  周转材料表名称
  temp_  中间缓存表名称

  ```
2. 列名称规范

  ```
  
  
  继承列（所有表具有）
  id     主键  
  creator_id 添加人主键
  creator_name 添加人
  created_at 添加时间
  modifier_id 修改人主键
  modifier_name 修改人
  updated_at 修改时间
  is_removed 是否删除
  version 版本号
  
  按需使用
  sort_code 排序
  is_active 状态
  is_static 是否静态
  org_id  组织机构主键 （业务表具有）
  order_id 主表主键 （主从明细表具有）

  树形表具有
  parent_id 父节点主键
  full_id 节点主键链
  full_name 节点名称链
  level 层级
  is_leaf 子节点

  材料信息相关列
  material_id 材料唯一标识
  material_name 材料名称
  material_model 规格型号
  material_unit 单位名称
  class_id 类别主键
  class_full_id 类别主键链

  数量、单价、金额相关列
  taxRate: { type: Sequelize.DECIMAL(28, 4) }, // 税率
  taxFreePrice: { type: Sequelize.DECIMAL(28, 8) }, // 不含税单价
  taxFreeSum: { type: Sequelize.DECIMAL(28, 4) }, // 不含税金额
  taxIncludedPrice: { type: Sequelize.DECIMAL(28, 8) }, // 含税单价
  taxIncludedSum: { type: Sequelize.DECIMAL(28, 4) }, // 含税金额
  taxAmount: { type: Sequelize.DECIMAL(28, 4) }, // 税额
  bookPrice: { type: Sequelize.DECIMAL(28, 8) }, // 账面价
  bookSum: { type: Sequelize.DECIMAL(28, 4) }, // 账面金额
  difference: { type: Sequelize.DECIMAL(28, 4) }, // 差额
  
  对接列
  ori_org_id 对接第三方组织主键
  ori_class_id 对接第三方材料类别主键
  ori_material_id 对接第三方材料信息主键
  ori_supplier_id 对接第三方供应商主键
  ori_labour_id 对接第三方用料单位主键
  ori_gh_id 对接第三方工号主键
  ori_order_id 对接第三方单据主键

  双主键的话，orgId创建表的时候必须当道第一列
  如:
  create table if not exists m_gh_plan
  (                       
      org_id                                BIGINT                          NOT NULL     COMMENT '组织机构主键', 
      id                                    BIGINT                          NOT NULL     COMMENT '主键id',      org_name                              STRING                                       COMMENT '组织机构名称'
  ...
  ```
3. 脚本语法规范

   脚本都按小写命名
   
   脚本: 1、查询语句尽量不要出现复杂的计算语句影响性能问题。
         2、查询语句的时候先缩小查询范围，在进行关联查询。

   使用事务注意事项：
      1、使用事物的时候内部不要写逻辑的，会影响性能问题，尽量在事务外部处理。
      2、事务内部尽量不要出现查询的语句。
      3、事务内部尽量不要出现for循环语句。

 ##### 服务端规范

 1. 文件名命名

 model 层
 
 基于数据库表名称 `_` 替换为 `-` 
 
 > 示例：c_gh => c-gh.js
 
 service 层

 基于数据库表名称 `_` 替换为 `-` +`-service` 
 
 > 示例：c_gh => c-gh-service.js

 router 层

  如果api数量过大建议分多个路由文件

  命名规则基于数据库表名称 `_` 替换为 `-` +`-route` 


2. 函数命名

  规则：小驼峰   
 > 示例 getUserName()

3. 变量名称   

  规则：小驼峰   

 > 示例  userName

4. api命名规范

 api路径全小写

```js

.get('items', Func) // 根据指定条件获取列表
.get('items/:id', Func) // 根据ID获取单条信息
.get('items/:id/:orgid', Func) // 根据双主键获取单条信息
.post('items-params', Func) //根据条件获取列表信息 
.get('items-bulking', Func) //增量获取数据  参数说明 limit: 15,  //增量获取的条目数 缺省时默认值为200 orgId: 123, //组织机构ID  version: 123


.post('items', Func) // 添加单条数据
.post('items-bulking', Func) // 添加多条数据
.put('items/:id', Func)  // 修改单条信息
.delete('items/:id', Func) // 删除单条信息
.delete('items/:id/:orgid', Func) // 删除单条信息

```

5. 服务层命名

```
  queryItems 根据指定条件获取列表
  getItem 根据ID获取单条信息
  queryItemsParams 根据条件获取列表信息
  queryItemsBulking 增量获取数据 
  
  createItem 添加单条数据
  createItems 添加多条数据
  updateItem 修改单条信息
  deleteItem 删除单条信息

```

6. 服务层代码规范
   复杂业务逻辑写上说明
   如： 提交收料单： 
      1、动态表是否已经结转了，结转返回，没有继续 
      2、获取发料单查看是否已经提交，提交了返回，未提交继续
      3、获取材料详情查看是否有发料，有发料返回所有发料单，没有继续
      4、处理库存
      5、修改收料单提交状态。
   model 层字段必须写上说明，没有使用字段需要列出来，枚举类型的一定写上代表的意思。
   如：serviceType: { type: Sequelize.INTEGER }, // 业务类型（新增） 调入（20） 收料   （10） 调入退（-21） 收料退（-11）预点（30）  
      storeRoomName: { type: Sequelize.STRING }, // 成本科目（没用字段） 
  通过id获取某一条数据的时候，如果是orgId也是主键的时候必须带上orgId.
  如下面不许用出现这种：  
   service.get('m-delivery-order/:id', async function (ctx, next) {
    await mDeliveryService.getMDelivery(ctx, Models)
  })    
  必须下面这种： 
  service.get('m-delivery-order/:id/:orgid', async function (ctx, next) {
    await mDeliveryService.getMDelivery(ctx, Models)
  })  
