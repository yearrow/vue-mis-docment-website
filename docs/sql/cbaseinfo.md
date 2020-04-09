#  物资基础数据

## 材料类别


### material_category

**材料类别表**

所在库： **platform**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| scope_ord_id | bigint  | 组织机构范围 |-- | |
| parent_id | bigint  | 父主键 |-- | |
| full_id | string  | 主键全称 |-- | |
| name | string  | 类别名称 |-- | |
| full_name | string  | 类别名称全称 |-- | |
| code | string  | 编码 |-- | |
| order_no | string  | 排序 |-- | |
| level | string  | 层级 |-- | |
| remark | string  | 备注 |-- | |
| is_removed | string  | 删除标识 |-- | |
| creator | string  | 添加人主键 |-- | |
| creator_at | timestamp  | 添加时间 |-- | |
| reviser | string  | 添加人 |-- | |
| updated_at | timestamp  | 更新时间 |-- | |
| version | bigint  | 版本号 |-- | |
| type | int  | 类别类型 |-- |0为消耗 1为周转 |
| unit | string  | 类别单位 |-- | |



### material_scope

**材料类别隔离表**

所在库： **platform**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|

## 材料信息
