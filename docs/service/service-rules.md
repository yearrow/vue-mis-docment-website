# 服务端规范

## 路由规范


 路由路径采用中化线命名规范

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
## 服务

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

### 服务层代码规范

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

## 实体模型


## 事务


## 脚本

   脚本都按小写命名
   
   脚本: 1、查询语句尽量不要出现复杂的计算语句影响性能问题。
         2、查询语句的时候先缩小查询范围，在进行关联查询。

   使用事务注意事项：
      1、使用事物的时候内部不要写逻辑的，会影响性能问题，尽量在事务外部处理。
      2、事务内部尽量不要出现查询的语句。
      3、事务内部尽量不要出现for循环语句。



