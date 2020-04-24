# 物资实物量管理

## 投标量计划

### m_master_plan
**投标量计划主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
|org_name | string | 组织机构名称| | |
|order_date| string | 账期 | | |
|order_code| string | 单号 | | |
|plan_type| string | 计划类型 | | |
|ori_org_id| string | 第三方组织机构id | | |
|maker| string | 制单人 | | |
|maker_accord| string | 编制依据 | | |
|maker_date| string | 制单时间 | | |
|remark| string | 备注 | | |
|is_approved| bool | 审批状态 | | 投标计划暂时没有审批 |
|approver| string | 审批人 | | |
|approve_date| string | 审批时间 | | |
|is_audit| bool | 审核状态 | | |
|auditor| string | 审核人 | | |
|audit_date| string | 审核时间 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
|recorded_date|  string | 入账时间 | | |
|check_date_time| string | | | 拟删除 |
|total_price| decimal(28,4) | | | 拟删除 |


### m_master_plan_item
**投标量计划明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id  | bigint | 主表主键 |是  | |
| org_name | string  | 组织机构名称 | | |
| plan_quantity  |  decimal(28,4)  | 计划量  | | |
| item_remark| string  | 明细备注 | |  |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| ori_material_id | string | 对接第三方材料id | | | 
| ori_class_id | string | 对接第三方材料类别id | | | 
| ori_common_id | string | 对接第三方材料通用信息 | | | 
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| sort_code | int | 排序| | |
| loss_rate |  decimal(28,4)   | 损耗率 | | 拟删除 |
| loss_num |  decimal(28,4)   | 损耗量  | | 拟删除 |
| book_price | decimal(28,8)  | 计划价 | | 拟删除 |
| book_sum  |  decimal(28,4)  | 计划金额  | | 拟删除 |

### m_master_plan_summary
**投标量计划缓存**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name | string | 组织机构名称 | | |
| quantity | decimal(28,4) | 计划数量 | | |
| use_quantity | decimal(28,4) | 已使用计划数量 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | |
| ori_org_id | string | 第三方组织机构id | | |
| ori_material_id | string | 对接第三方材料id | | | 
| ori_class_id | string | 对接第三方材料类别id | | | 
| ori_common_id | string | 对接第三方材料通用信息 | | | 
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| book_price | decimal(28,8)  | 计划价 | | 拟删除 |
| book_sum  |  decimal(28,4)  | 计划金额  | | 拟删除 |
| use_book_sum | decimal(28,4)  | 已使用计划金额 | | 拟删除 |

## 工号总需用计划

### m_gh_plan
**工号总需用计划主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name | string | 组织机构名称| | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| plan_type | string | 计划类型  | | |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| ori_org_id | string |  组织机构对接第三方主键  | | |
| total_price | string | 合计金额 | | |
| maker | string | 制单人 | | |
| maker_accord | string | 编制依据 | | |
| maker_date | string | 编制时间  | | |
| remark | string | 备注 | | |
| is_approved | string | 审批状态  | | |
| approver | string | 审批人 | | |
| approve_date | string | 审批时间 | | |
| is_audit | string | 审核状态 | | |
| auditor | string | 审核人 | | |
| audit_date | string | 审核时间 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| recorded_date | string | 入账日期 | | |
| ori_order_id | string | 第三方对接单据主键 | | 缺少字段 |
| check_date_time | string |  | | 拟删除|

### m_gh_plan_item
**工号总需用计划明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id| bigint | 主表主键 | 是| |
| item_data_id| bigint | 总需用量汇总表id | |
| org_name| string | 组织机构名称 | |
| loss_rate| decimal(28,4) | 损耗率 | |
| loss_num | decimal(28,4) | 损耗数量 | |
| plan_quantity | decimal(28,4) | 计划数量 | |
| quantity | decimal(28,4) | 总数量| |
| book_price | decimal(28,8) |  计划价| |
| book_sum | decimal(28,4) | 计划金额 | |
| item_remark | decimal(28,4) | 备注 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| ori_material_id | string | 对接第三方材料id | | | 
| ori_class_id | string | 对接第三方材料类别id | | | 
| ori_common_id | string | 对接第三方材料通用信息 | | | 
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| sort_code | int | 排序 | |
| ori_order_id | string | 第三方对接单据主键 | | 缺少字段 |
| ori_item_id | string | 第三方对接明细主键 | | 缺少字段 |

### m_gh_plan_check
**工号总需用计划核算工号缓存表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| org_name| string | 组织机构名称 | |
| quantity | decimal(28,4) | 计划数量 | | |
| use_quantity | decimal(28,4) | 已使用计划数量 | | |
| book_price | decimal(28,8) |  计划价| |
| book_sum | decimal(28,4) | 计划金额 | |
| use_book_sum|	decimal(28,4) | 已使用金额 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| ori_org_id | string | 第三方组织机构id | | |
| ori_material_id | string | 对接第三方材料id | | | 
| ori_class_id | string | 对接第三方材料类别id | | | 
| ori_common_id | string | 对接第三方材料通用信息 | | | 
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |


### m_gh_plan_delivery
**工号总需用计划发料工号缓存表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| org_name| string | 组织机构名称 | |
| quantity | decimal(28,4) | 计划数量 | | |
| use_quantity | decimal(28,4) | 已使用计划数量 | | |
| book_price | decimal(28,8) |  计划价| |
| book_sum | decimal(28,4) | 计划金额 | |
| use_book_sum|	decimal(28,4) | 已使用金额 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| ori_org_id | string | 第三方组织机构id | | |
| ori_material_id | string | 对接第三方材料id | | | 
| ori_class_id | string | 对接第三方材料类别id | | | 
| ori_common_id | string | 对接第三方材料通用信息 | | | 
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |

## 月度需用计划

### q_plan_month
**月度需用计划表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| maker | string | 制单人 | | |
| maker_date | string | 编制时间  | | |
| remark | string | 备注 | | |
| is_submit| boolean | 提交状态 | |
| submitter| string | 提交人| |
| submit_date|string | 提交时间| |
| is_approve| string | 审批状态 || 未使用|
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| recorded_date	|string | 入账日期| |

### q_plan_month_item
**月度需用计划明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| order_id      | bigint | 主表主键 |是 | |
| id  |	bigint | 主键 |是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| quantity|	decimal(28,4) |需求数量 | |
| technical_standard|	string | 技术标准 | |
| arrival_place|	string | 到货地点 | |
| arrival_time|	string | 到货时间| |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| remark | string | 备注 | | |
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| sort_code|	int | 排序| |
| ori_item_id | string | 第三方对接明细主键 | | 缺少字段 |
| ori_material_id | string | 对接第三方材料id | | 缺少字段 | 
| ori_class_id | string | 对接第三方材料类别id | | 缺少字段 | 
| ori_common_id | string | 对接第三方材料通用信息 | | 缺少字段 | 

## 物资临时计划

### q_plan_temporary
**物资临时计划表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| maker | string | 制单人 | | |
| maker_date | string | 编制时间  | | |
| remark | string | 备注 | | |
| is_submit| boolean | 提交状态 | |
| submitter| string | 提交人| |
| submit_date|string | 提交时间| |
| is_approve| string | 审批状态 || 未使用|
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| recorded_date	|string | 入账日期| |

### q_plan_temporary_item
**物资临时计划明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id      | bigint | 主表主键 |是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| quantity|	decimal(28,4) |需求数量 | |
| technical_standard|	string | 技术标准 | |
| arrival_place|	string | 到货地点 | |
| arrival_time|	string | 到货时间| |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| remark | string | 备注 | | |
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| sort_code|	int | 排序| |
| ori_item_id | string | 第三方对接明细主键 | | 缺少字段 |
| ori_material_id | string | 对接第三方材料id | | 缺少字段 | 
| ori_class_id | string | 对接第三方材料类别id | | 缺少字段 | 
| ori_common_id | string | 对接第三方材料通用信息 | | 缺少字段 | 

## 周转物资计划

### q_plan_turnover
**周转物资计划表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| maker | string | 制单人 | | |
| maker_date | string | 编制时间  | | |
| remark | string | 备注 | | |
| is_submit| boolean | 提交状态 | |
| submitter| string | 提交人| |
| submit_date|string | 提交时间| |
| is_approve| string | 审批状态 || 未使用|
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| recorded_date	|string | 入账日期| |

### q_plan_turnover_item
**周转物资计划明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id      | bigint | 主表主键 |是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| quantity|	decimal(28,4) |需求数量 | |
| technical_standard|	string | 技术标准 | |
| arrival_place|	string | 到货地点 | |
| enter_time|	string|预计进场时间
| exit_time|	string|预计退场时间
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| remark | string | 备注 | | |
| ori_org_id | string | 第三方组织机构id | | |
| ori_order_id|	string | 第三方组单据id | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| sort_code|	int | 排序| |
| ori_item_id | string | 第三方对接明细主键 | | 缺少字段 |
| ori_material_id | string | 对接第三方材料id | | 缺少字段 | 
| ori_class_id | string | 对接第三方材料类别id | | 缺少字段 | 
| ori_common_id | string | 对接第三方材料通用信息 | | 缺少字段 | 

## 供货申请

### q_supply
**供货申请主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| supplier_id |	bigint | 供应商主键 | | |
| supplier_name | string | 供应商名称 | | |
| supplier_contact | string | 供应商联系人 | | |
| supplier_phone| string | 供应商电话 | | |
| receive_contact| string | 项目联系人 | | |
| receive_phone| string | 项目联系电话 | | |
| receive_at| timestamp | 到料日期 | | |
| remark | string | 备注 | | |
| is_expired|boolean| 作废状态 | | |
| is_confirm|boolean| 确认状态 | | |
| is_send|boolean| 发送状态 | | |
| is_submit|boolean| 提交状态 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| recorded_date	|string | 入账日期| |
| ori_org_id | string | 第三方组织机构id | |  缺少字段  |
| ori_order_id | string | 第三方对接单据主键 | | 缺少字段 |
| ori_supplier_id | string | 对接第三方供应商信息 | | 缺少字段 | 


### q_supply_item
**供货申请明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 | 缺少第三方对接id |
| id      | bigint | 主键 |是 | |
| order_id      | bigint | 主表主键 |是 | |
| material_id | bigint | 材料id | | 缺少第三方对接id |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| quantity|	decimal(28,4) |申请数量 | |
| actual_quantity|decimal(28,4) | 实际数量 | | |
| price|decimal(28,4) | 价格 | | |
| tax_rate|decimal(28,4) | 税率 | | |
| manufacturer|string | 生产厂商 | | |
| batch_no|string | 炉批号 | | |
| skill_card_no|string | 技证号 | | |
| test_report_no|string | 实验报告号 | | |
| test_commission_no|string | 试验委托号 | | |
| item_bar_code	|string |条码 | | |
| material_remark|string | 材料备注 | | |
| request|string | 供货要求 | | |
| item_remark|string | 备注 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| ori_material_id | string | 对接第三方材料id | | 缺少字段 | 
| ori_class_id | string | 对接第三方材料类别id | | 缺少字段 | 
| ori_common_id | string | 对接第三方材料通用信息 | | 缺少字段 | 
| ori_order_id | string | 第三方对接单据主键 | | 缺少字段 |
| ori_item_id | string | 第三方对接明细主键 | | 缺少字段 |
| ori_org_id | string | 第三方组织机构id | |  缺少字段 |

## 混凝土签收

### q_concrete_receive
**混凝土签收表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 | |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| recorded_date	|string | 入账日期| | |
| labour_id	|bigint |用料单位主键 | | |
| labour_name| string|用料单位名称 | | |
| ori_labour_id |string|用料单位第三方主键 | | |
| supplier_id |bigint|供应商主键 | | |
| supplier_name |string|供应商名称 | | |
| ori_supplier_id |string|供应商第三方主键 | | |
| gh_id | bigint | 工号id  | | |
| gh_name | string | 工号名称 | | |
| gh_full_name | string | 工号全程  | | |
| ori_gh_id | string | 工号对接第三方主键 | | |
| is_submit | boolean | 是否提交 | | |
| submitter|string | 提交人 | | |
| submit_date|string | 提交时间 | | |
| concrete_type |string | 混凝土类型 | | |
| is_sign|boolean |  | |意义不明 |
| is_approve|string | 审批状态 | | |
| plan_code|string | 计划编号 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | |
| ori_material_id |string|材料第三方对接id | | |
| ori_class_id |string|材料类别第三方对接id| | |
| concrete_pump_type |string | 混凝土输送泵类型 | | |
| slump |string | 塌落度 | | |
| detail_target |string | 施工地点 | | |
| plan_quantity |decimal(28,8) | 计划数量 | | |
| change_quantity |decimal(28,8) | 变更数量 | | |
| quantity | decimal(28,8) | 计划总数量 | | |
| apply_quantity |decimal(28,8) | 申请数量 | | |
| applicant |string | 申请人(制单人) | | |
| apply_time |string | 申请时间（制单时间） | | |
| show_up_time |string | 到场时间 | | |
| require |string | 要求 | | |
| remark |string | 备注 | | |
| is_expired |boolean | 是否作废 | | |
| engineer_approve_quantity |decimal(28,8) | 工程部审批数量 | | |
| receive_method |int | 签收方式 | | |
| receive_quantity |decimal(28,8) | 签收总量 | | |
| receive_user |string | 签收人 | | |
| receive_time |string | 签收时间 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
| ori_org_id | string | 第三方组织机构id | |  缺少字段 |

### q_concrete_receive_item
**混凝土签收明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id | bigint | 主表主键 |是 | |
| org_name |string| 组织机构名称 | | |
| receive_user|string| 签收人 | | |
| receive_time|string| 签收时间 | | |
| plate_num|string| 车牌号 | | |
| receive_item_quantity_id|bigint| 运单主键 | | |
| receive_item_quantity|decimal(28,8)| 运单方量 | | |
| sort_code|int| 排序 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |

### q_concrete_receive_photo
**混凝土签收照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| receive_photo_id |bigint | 明细签收照片id | | |
| org_name|string|组织机构名称 | | |
| receive_photo_url|string | 照片路径 | | |
| sort_code|int| 排序 | | |
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |

## 收料登记

### q_receive
**收料登记主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| print_times|int | 打印次数 | | |
| plate_number|string | 车牌 | | |
| supplier_id|bigint | 供应商主键 | | |
| supplier_name|string | 供应商名称 | | |
| exit_time | string | 出场时间 | | |
| weight_type | string | 区分直进直出、普通进料标识 | |  |
| is_red | boolean | 是否冲红（0） | | |
| is_affirm | boolean | 是否只留影像资料| | |
| is_audit | boolean | 审核状态 | | |
| auditor | string | 审核人 | | |
| audit_date | string | 审核时间 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_supplier_id | string | 对接第三方供应商id | | |
| ori_order_id | string | 对接第三方单据id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| order_bar_code | string | 单据条码 | | |
| longitude | decimal(18,6) | 经度 | | |
| latitude | decimal(18,6) | 纬度 | | |
| recorded_date | string | 入账日期 | | |
| order_data_id | bigint | 引用单据id| | |
| enter_time | string | 进场时间 | | 拟删除 |
| sort_time | string | 排序时间 | | 拟删除 |
| class_id | bigint | 类别id | | 拟删除|
| org_code | string | 组织机构编码| | 已删除|
| material_id | bigint | 材料id | |已删除  |
| material_code| string  | 材料编码 |  | 已删除|
| material_name| string  | 材料名称 |  | 已删除|
| material_model| string  | 规格型号 |  | 已删除|
| material_unit| string  | 单位 | | 已删除|
| class_full_id | string | 材料类别主键链 | | 已删除|
| manufacturer|string |生产厂商 | |已删除 |
| batch_no|string | 炉批号 | | 已删除 |
| test_report_no|string | 实验报告号 | | 已删除 |
| discern_plate_number|string | 识别车牌 | | 已删除 |
| labour_id|bigint | 用料单位主键 | | 已删除 |
| labour_name|string | 用料单位名称 | | 已删除 |
| rebar_org_id|bigint | 钢筋加工中心组织机构 | | 已删除 |
| rebar_org_name|string | 钢筋加工中心组织机构名称 | | 已删除 |
| gh_id | bigint | 工号id  | | 已删除 |
| gh_full_id | string | 工号全称主键链| | 已删除 |
| gh_name | string | 工号名称 | | 已删除 |
| gh_full_name | string | 工号全程  | | 已删除 |
| ori_gh_id | string | 工号对接第三方主键 | | 已删除 |
| rough_quantity | decimal(28,4) | 毛重 | | 已删除 |
| tare_quantity | decimal(28,4) | 皮重| | 已删除 |
| conversion_rate | decimal(28,4) | 转化率 | | 已删除 |
| deduct_rate | decimal(28,4) | 扣率 | | 已删除 |
| deduct_quantity | decimal(28,4) | 扣吨 | | 已删除 |
| ori_net_quantity | decimal(28,4) | 原始净重 | | 已删除 |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | 已删除 |
| main_net_quantity | decimal(28,4) | 净重主单位 | | 已删除 |
| warn_times|int | 预警次数 | | 已删除 |
| auxiliary_unit | string | 辅单位 | | 已删除 |
| stockbin_full_name | string | 料仓全称 | | 已删除 |
| stockbin_name | string | 料仓名称 | | 已删除 |
| is_return | boolean | 是否退料 | | 已删除 |
| is_exit | boolean | 进出场状态 | | 已删除 |
| is_tare | boolean | 是否称皮重 | | 已删除 |
| is_upload | boolean | 是否上传 | | 已删除 |
| is_multiplication | boolean | 为乘法计算 | | 已删除 |
| is_shoud_affirm | boolean | 是否需要做到料确认 | | 已删除 |
| is_use_ori_net_quantity | boolean | 是否启用原始净重（待定） | | 已删除 |
| deduction_rate | decimal(28,4) | 抵扣系数（暗扣）（待定） | | 已删除 |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | 已删除|
| ori_rebar_org_id | string | 对接第三方钢筋加工中心组织机构id | | 已删除 |
| ori_material_id | string | 对接第三方材料id | |  已删除 |
| ori_common_id | string | 对接第三方材料通用id | | 已删除 |
| ori_class_id | string | 对接第三方材料类别id | | 已删除 |
| ori_labour_id | string | 对接第三方用料单位id | | 已删除 |
| statistic_class_id | bigint | 统计类主键 | | 已删除 |
| statistic_class_name | string | 统计类名称 | | 已删除 |
| eq_code | string | 手持机编码 | | 已删除|
| storage_place | string | 存放地 | |已删除 |
| skill_card_no | string | 技证号 | |已删除 |
| is_new | boolean | 是否新进料 | |已删除 |
| receive_price | decimal(28,8) | 收料单价 | |已删除 |
| waybill_weight | decimal(28,8) | 运单重量 | |已删除 |
| is_account_check | boolean | 是否对账 | | 已删除 |
| account_check_date | string | 对账日期 | | 已删除 |

### q_receive_more_material
**收料登记材料明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id|bigint| 主表主键 | 是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| manufacturer|string |生产厂商 | | |
| batch_no|string | 炉批号 | | |
| test_report_no|string | 实验报告号 | | |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | |
| rough_quantity | decimal(28,4) | 原毛重，现在应收数量 | | |
| conversion_rate | decimal(28,4) | 转化率 | | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| ori_net_quantity | decimal(28,4) | 原始净重 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| main_net_quantity | decimal(28,4) | 净重主单位 | | |
| remark|string | 备注 | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| item_bar_code	|string |条码 | | |
| is_accounted|boolean| 对账状态 | | |
| accountor|string| 对账人 | | |
| account_date|string| 对账时间 | | |
| account_order_id|bigint| 对账单号ID | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| storage_place | string | 存放地 | | |
| skill_card_no | string | 技证号 | | |
| receive_price | decimal(28,8) | 收料单价 | | |
| sort_code|int| 排序 | | |
| waybill_weight | decimal(28,8) | 运单重量 | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| is_red | boolean | 冲红状态 | | |
| submit_date | string| 入账时间 | | |
| tax_rate | decimal(28,4)| 税率 | | |
| tax_free_price | decimal(28,8)| 不含税单价 | | |
| tax_free_sum | decimal(28,4)| 不含税金额 | | |
| tax_included_price | decimal(28,8)| 含税单价 | | |
| tax_included_sum | decimal(28,4)| 含税金额 | | |
| tax_amount | decimal(28,4)| 税额 | | |
| account_quantity | decimal(28,4)| 对账数量 | | |
| item_data_id | bigint| 冲红时存原始单据明细id | | |
| check_state | int| 核对状态 0未核对  1已核对 | | |
| is_new | boolean | 是否新进料 | |拟删除 |
| statistic_class_id | bigint | 统计类主键 | | 已删除 |
| statistic_class_name | string | 统计类名称 | | 已删除 |
| plate_number|string | 车牌 | | 已删除 |
| tare_quantity | decimal(28,4) | 皮重 | | 已删除 |

### q_receive_photo
**收料登记照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id |bigint| 主表主键 | | |
| camera_position|string| 摄像机位置 | | |
| photo_type|string| 照片类型（入场、出场） | | |
| camera_code|string| 摄像机编码 | | |
| photo_base64|string| 照片BASE64码 | | |
| photo_url|string| 照片路径 | | |
| item_remark|string| 备注 | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

### q_receive_gpy
**收料登记高拍仪**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id | bigint	| 主表主键 | | |
| gpy_remark | string | 备注 | | |	
| gpy_weight_type | string | 磅单类型(pt dl zc ) | | |
| gpy_photo_base64 | string	| 照片Bse64码 | | |
| gpy_photo_url | string |  照片路径 | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

### q_receive_signature
**收料登记手机APP签名表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id |bigint| 主表主键 | | |
| signature_type| string |签名人1、2、3、4 | |
| photo_base64|string| 照片BASE64码 | | |
| photo_url|string| 照片路径 | | |
| item_remark|string| 备注 | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |


### q_receive_temp_data
**收料登记临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_code | string| 组织机构编码 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| recorded_date | string | 入账日期 | | |
| weight_type | string | 区分直进直出、普通进料标识 | |  |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| print_times|int | 打印次数 | | |
| plate_number|string | 车牌 | |  |
| supplier_id|bigint | 供应商主键 | | |
| supplier_name|string | 供应商名称 | | |
| exit_time | string | 出场时间 | | |
| is_red | boolean | 冲红状态 | | |
| is_audit | boolean | 审核状态 | | |
| auditor | string | 审核人 | | |
| audit_date | string | 审核时间 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_supplier_id | string | 对接第三方供应商id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| order_data_id | bigint | 引用单据id| | |
| warn_times|int | 预警次数 | | 拟删除 |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | |拟删除 |


### q_receive_more_material_temp_data
**收料登记材料明细临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id|bigint| 主表主键 | 是 | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| is_marched| boolean | 是否匹配条码 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | |
| rough_quantity | decimal(28,4) | 原毛重，现在应收数量 | | |
| conversion_rate | decimal(28,4) | 转化率 | | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| ori_net_quantity | decimal(28,4) | 原始净重 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| main_net_quantity | decimal(28,4) | 净重主单位 | | |
| waybill_weight | decimal(28,8) | 运单重量 | | |
| item_bar_code	|string |条码 | | |
| remark|string | 备注 | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| tare_quantity | decimal(28,4) | 皮重 | | 拟删除 |

### q_receive_weight
**收料磅单关联字段表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| discern_plate_number|string | 识别车牌 | | |
| stockbin_full_name | string | 料仓全称 | |  |
| stockbin_name | string | 料仓名称 | |  |
| enter_time | string | 进场时间 | |  |
| exit_time|string| 出场时间 | |  |
| sort_time | string | 排序时间 | |  |
| is_return | boolean | 是否退料 | | |
| is_exit | boolean | 进出场状态 | |  |
| is_tare | boolean | 是否称皮重 | |  |
| is_multiplication | boolean | 为乘法计算 | |  |
| is_use_ori_net_quantity | boolean | 是否启用原始净重（待定） | |  |
| deduction_rate | decimal(28,4) | 抵扣系数（暗扣）（待定） | |  |
| rough_quantity | decimal(28,4) | 毛重| | |
| tare_quantity |decimal(28,4) | 皮重| | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| waybill_weight | decimal(28,8) | 运单重量 | | |
| order_bar_code | string | 单据条码 | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

## 库存

### q_inventory
**实物量库存表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| item_bar_code	|string |条码 | | |
| supplier_id|bigint | 供应商主键 | | |
| supplier_name|string | 供应商名称 | | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| quantity|decimal(28,4)| 库存数量 | | |
| ori_supplier_id | string | 对接第三方供应商id | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| eq_code | string | 手持机编码 | | 拟删除|
| statistic_class_id | bigint | 统计类主键 | | 拟删除 |
| statistic_class_name | string | 统计类名称 | | 拟删除 |
| manufacturer|string |生产厂商 | | 拟删除|
| batch_no|string | 炉批号 | | 拟删除|
| test_report_no|string | 实验报告号 | |拟删除 |
| storage_place | string | 存放地 | | 拟删除 |
| skill_card_no | string | 技证号 | | 拟删除 |
| is_upload | boolean | 是否上传 | | 拟删除 |
| ori_order_id | string	| 上传前OrderId | | 拟删除 |
| ori_item_id | string 	| 上传前id | | 拟删除 |

## 发料登记

### q_delivery
**发料登记表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| id      | bigint | 主键 |是 | |
| org_id      | bigint | 组织机构编码 | |  |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| print_times|int | 打印次数 | | |
| plate_number|string | 车牌 | | |
| labour_id|bigint | 用料单位主键 | |  |
| labour_name|string | 用料单位名称 | |  |
| gh_id | bigint | 工号id  | |  |
| gh_full_id | string | 工号全称主键链| |  |
| gh_name | string | 工号名称 | |  |
| gh_full_name | string | 工号全程  | |  |
| ori_gh_id | string | 工号对接第三方主键 | |  |
| exit_time|string| 出场时间 | |  |
| weight_type | string | 区分直进直出、普通进料标识 | |  |
| is_account_check | boolean | 是否对账 | | |
| is_red | boolean | 冲红状态 | | |
| is_affirm | boolean | 是否只留影像资料| | |
| is_audit | boolean | 审核状态 | | |
| auditor | string | 审核人 | | |
| audit_date | string | 审核时间 | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| order_bar_code | string | 单据条码 | | |
| longitude | decimal(18,6) | 经度 | | |
| latitude | decimal(18,6) | 纬度 | | |
| recorded_date | string | 入账日期 | | |
| allot_id | bigint | 施工队调拨单id | | |
| order_data_id | bigint | 引用单据id| | |
| material_type | string | 材料类型| | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_labour_id | string | 对接第三方用料单位id | |  |
| org_code | string| 组织机构编码 || 已删除|
| material_id | bigint | 材料id | | 已删除 |
| material_code| string  | 材料编码 |  |已删除 |
| material_name| string  | 材料名称 |  |已删除 |
| material_model| string  | 规格型号 |  |已删除 |
| material_unit| string  | 单位 | |已删除 |
| class_id | bigint | 类别id | |已删除 |
| class_full_id | string | 材料类别主键链 | |已删除 | 
| auxiliary_unit|string | 辅单位 | | 已删除 |
| warn_times|int | 预警次数 | | 已删除 |
| discern_plate_number|string | 识别车牌 | | 已删除|
| enter_time | string | 进场时间 | | 已删除 |
| sort_time | string | 排序时间 | | 已删除 |
| is_return | boolean | 是否退料 | | 已删除 |
| is_exit | boolean | 进出场状态 | | 已删除 |
| is_tare | boolean | 是否称皮重 | | 已删除 |
| is_upload | boolean | 是否上传 | | 已删除 |
| is_multiplication | boolean | 为乘法计算 | | 已删除 |
| is_shoud_affirm | boolean | 是否需要做到料确认 | | 已删除 |
| is_concrete|boolean| 混凝土材料 | | 已删除 |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | 已删除|
| rough_quantity | decimal(28,4) | 原毛重，现在应收数量 | | 已删除 |
| conversion_rate | decimal(28,4) | 转化率 | | 已删除 |
| deduct_rate | decimal(28,4) | 扣率 | | 已删除 |
| deduct_quantity | decimal(28,4) | 扣吨 | | 已删除 |
| ori_net_quantity | decimal(28,4) | 原始净重 | | 已删除 |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | |已删除 |
| main_net_quantity | decimal(28,4) | 净重主单位 | |已删除 |
| tare_quantity | decimal(28,4) | 皮重 | |已删除 |
| statistic_class_id | bigint | 统计类主键 | | 已删除 |
| statistic_class_name | string | 统计类名称 | | 已删除 |
| ori_material_id | string | 对接第三方材料id | | 已删除  |
| ori_common_id | string | 对接第三方材料通用id | | 已删除 |
| ori_class_id | string | 对接第三方材料类别id | | 已删除 |
| eq_code | string | 手持机编码 | | 已删除|
| manufacturer|string |生产厂商 | | 已删除|
| batch_no|string | 炉批号 | | 已删除|
| test_report_no|string | 实验报告号 | |已删除 |
| storage_place | string | 存放地 | | 已删除 |
| skill_card_no | string | 技证号 | | 已删除 |
| is_new | boolean | 是否新进料 | |已删除 |
| receive_price | decimal(28,8) | 收料单价 | |已删除 |

### q_delivery_more_material
**发料登记明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| id      | bigint | 主键 |是 | |
| org_id      | bigint | 组织机构编码 |  |  |
| order_id | bigint | 主表主键 | |  |  |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| item_bar_code	|string |条码 | | |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | |
| conversion_rate | decimal(28,4) | 转化率 | | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| main_net_quantity | decimal(28,4) | 净重主单位 | | |
| remark|string | 备注 | | |
| is_accounted|boolean| 对账状态 | | |
| accountor|string| 对账人 | | |
| account_date|string| 对账时间 | | |
| account_order_id|bigint| 对账单号ID | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| sort_code|int| 排序 | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| is_red | boolean | 冲红状态 | | |
| submit_date | string| 入账时间 | | |
| check_quantity|decimal(28,4) |盘点数量|| 未使用|
| list_sale|decimal(28,4)| 应列销量| |未使用|
| item_data_id|bigint|冲红时存原始单据明细id|||
| statistic_class_id | bigint | 统计类主键 | | 已删除 |
| statistic_class_name | string | 统计类名称 | | 已删除 |
| eq_code | string | 手持机编码 | | 已删除|
| manufacturer|string |生产厂商 | | 已删除|
| batch_no|string | 炉批号 | | 已删除|
| test_report_no|string | 实验报告号 | |已删除 |
| storage_place | string | 存放地 | | 已删除 |
| skill_card_no | string | 技证号 | | 已删除 |
| is_new | boolean | 是否新进料 | |已删除 |
| receive_price | decimal(28,8) | 收料单价 | |已删除 |
| tare_quantity | decimal(28,4) | 皮重 | |已删除 |
| ori_net_quantity | decimal(28,4) | 原始净重 | | 已删除 |
| rough_quantity | decimal(28,4) | 原毛重，现在应收数量 | | 已删除|
| plate_number|string | 车牌 | | 已删除|

### q_delivery_photo
**发料照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | |  |
| id      | bigint | 主键 |是 | |
| order_id      | bigint | 主表主键 | | |
| camera_position|string| 摄像机位置 | | |
| photo_type|string| 照片类型（入场、出场） | | |
| camera_code|string| 摄像机编码 | | |
| photo_base64|string| 照片BASE64码 | | |
| photo_url|string| 照片路径 | | |
| item_remark|string| 备注 | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

### q_delivery_signature
**发料签名表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 |  |  |
| id      | bigint | 主键 |是 | |
| order_id |bigint| 主表主键 | | |
| signature_type| string |签名人1、2、3、4 | |
| photo_base64|string| 照片BASE64码 | | |
| photo_url|string| 照片路径 | | |
| item_remark|string| 备注 | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

### q_delivery_temp_data
**发料临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_code | string| 组织机构编码 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| recorded_date|  string | 入账时间 | | |
| weight_type | string | 区分直进直出、普通进料标识 | |  |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| print_times|int | 打印次数 | | |
| plate_number|string | 车牌 | | |
| labour_id|bigint | 用料单位主键 | |  |
| labour_name|string | 用料单位名称 | |  |
| gh_id | bigint | 工号id  | |  |
| gh_full_id | string | 工号全称主键链| |  |
| gh_name | string | 工号名称 | |  |
| gh_full_name | string | 工号全程  | |  |
| ori_gh_id | string | 工号对接第三方主键 | |  |
| exit_time|string| 出场时间 | |  |
| is_red | boolean | 冲红状态 | | |
| is_audit | boolean | 审核状态 | | |
| auditor | string | 审核人 | | |
| audit_date | string | 审核时间 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_labour_id | string | 对接第三方用料单位id | |  |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| order_data_id | bigint |直进直出存收料表id |||
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | |拟删除 |
| warn_times|int | 预警次数 | | 拟删除 |

### q_delivery_more_material_temp_data
**发料登记临时明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| order_id      | bigint | 主表主键 |是 | |
| id      | bigint | 主键 |是 | |
| service_type |int | 业务类型 | | |
| order_type | int |操作类型 1冲红（-1）2补录4正常 | | |
| is_marched|boolean |是否匹配条码 | |  |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| net_quantity | decimal(28,4) | 最终净值（决定是取地磅称重还是手填的净值）| | |
| conversion_rate | decimal(28,4) | 转化率 | | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| main_net_quantity | decimal(28,4) | 净重主单位 | | |
| rough_quantity | decimal(28,4) | 毛重| | |
| tare_quantity |decimal(28,4) | 皮重| | |
| item_bar_code	|string |条码 | | |
| remark|string | 备注 | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 上传前OrderId | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

### q_delivery_weight
**发料磅单关联字段表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| discern_plate_number|string | 识别车牌 | | |
| enter_time | string | 进场时间 | |  |
| exit_time|string| 出场时间 | |  |
| sort_time | string | 排序时间 | |  |
| is_return | boolean | 是否退料 | |  |
| is_exit | boolean | 进出场状态 | |  |
| is_tare | boolean | 是否称皮重 | |  |
| is_upload | boolean | 是否上传 | |  |
| is_multiplication | boolean | 为乘法计算 | |  |
| is_concrete|boolean| 混凝土材料 | |  |
| rough_quantity | decimal(28,4) | 毛重| | |
| tare_quantity |decimal(28,4) | 皮重| | |
| deduct_rate | decimal(28,4) | 扣率 | | |
| deduct_quantity | decimal(28,4) | 扣吨 | | |
| auxiliary_net_quantity | decimal(28,4) | 辅单位净重 | | |
| order_bar_code | string | 单据条码 | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

## 施工队调拨

### q_labour_allot
**施工队调拨表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| recorded_date|  string | 入账时间 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| allot_out_id | bigint| 调出施工队id | | |
| allot_out_name | string| 调出施工队名称 | | |
| allot_int_id | bigint| 调入施工队id | | |
| allot_int_name | string| 调入施工队名称 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_allot_out_id | string| 第三方调出施工队id | | |
| ori_allot_int_id | string| 第三方调入施工队id | | |
| ori_order_id | string	| 第三方主键id | | |
| is_submit | boolean | 是否提交 | | |
| submitter|string | 提交人 | | |
| submit_date|string | 提交时间 | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |


### q_labour_allot_item
**施工队调拨明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| order_id  | bigint | 主表主键 | 是| | 
| id      | bigint | 主键 |是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| manufacturer|string |生产厂商 | | 拟删除|
| batch_no|string | 炉批号 | | 拟删除|
| test_report_no|string | 实验报告号 | |拟删除 |
| skill_card_no | string | 技证号 | | 拟删除 |
| quantity | double | 调拨数量 | |数据类型有问题  | 
| remark|string | 备注 | | |
| item_bar_code	|string |条码 | | |
| sort_code|int| 排序 | | |
| ori_material_id | string | 对接第三方材料id | |   |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_item_id | string 	| 上传前id | | |
| ori_order_id | string	| 第三方主键id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |

## 盘点单

### q_check_store

**盘点单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name| string | 组织机构名称 | |
| order_date | string | 账期 | | |
| order_code | string | 单号 | | |
| order_bar_code | string | 单据条码 | | |
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | |
| maker |string | 制单人 | | |
| maker_date|string | 制单时间 | | |
| remark|string | 备注 | | |
| is_finish| boolean| 结束盘点 | | | 
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_order_id | string	| 第三方主键id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| check_type|string|0是项目部，1是工队 | | |
| recorded_date|  string | 入账时间 | | |
| eq_code | string | 手持机编码 | | 已删除|
| is_upload | boolean | 是否上传 | | 已删除 |
| is_audit | boolean | 审核状态 | |已删除 |
| auditor | string | 审核人 | |已删除 |
| audit_date | string | 审核时间 | |已删除 |
| ori_material_id | string | 对接第三方材料id | | 已删除  |
| ori_labour_id | string | 对接第三方用料单位id | | 已删除 |
| ori_common_id | string | 对接第三方材料通用id | |  已删除|
| ori_class_id | string | 对接第三方材料类别id | |已删除  |
| is_check_finished|boolean| 完成状态 | | 已删除|

### q_check_store_item

**盘点单从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| order_id | bigint |主表主键 | 是| | | 
| id      | bigint | 主键 |是 | |
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | | 
| auxiliary_unit|string | 辅单位 | | |
| net_quantity| decimal(28,4)| 实际盘点数量| | | 
| inventory_quantity|decimal(28,4)| 理论盘点量（结束盘点的时候更新一下）| | | 
| labour_id|bigint | 用料单位主键 | |  |
| labour_name|string | 用料单位名称 | |  |
| item_remark|string| 备注 | | |
| ori_org_id | string | 对接第三方组织机构id | | |
| ori_material_id | string | 对接第三方材料id | |  |
| ori_labour_id | string | 对接第三方用料单位id | |  |
| ori_common_id | string | 对接第三方材料通用id | |  |
| ori_class_id | string | 对接第三方材料类别id | |  |
| ori_order_id | string	| 第三方主键id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| ori_item_id | string 	| 第三方对接明细id | | |
| has_sale|decimal(28,4)|已列销量（列销单更新） | | | 
| residue_quantity|decimal(28,4)|剩余列销量（列销单更新） | | | 
| last_check_quantity|decimal(28,4)| 上期盘点数量 | | | 
| last_labour_rest_quantity|decimal(28,4)| 上期工队剩余消耗量 | | | 
| labour_consume_quantity|decimal(28,4)| 本期工队消耗量 | | | 
| sort_code|int| 排序 | | |
| order_date | string | 账期 | |已删除 |
| order_code | string | 单号 | | 已删除|
| order_bar_code | string | 单据条码 | |已删除 |
| eq_code | string | 手持机编码 | | 已删除|
| order_origin |int |单据来源 或者0代表磅单 1代表pda 2 pc | | 已删除 |
| manufacturer|string |生产厂商 | | 已删除|
| batch_no|string | 炉批号 | | 已删除|
| test_report_no|string | 实验报告号 | |已删除 |
| storage_place|string| 存放地| | 已删除| 
| statistic_class_id | bigint | 统计类主键 | | 已删除 |
| statistic_class_name | string | 统计类名称 | | 已删除 |

### q_check_store_photo

**盘点单照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| order_id | bigint |主表主键 | 是| | | 
| photo_base64|string| 照片BASE64码 | | |
| photo_url|string| 照片路径 | | |
| item_remark|string| 备注 | | |
| ori_item_id | string 	| 第三方对接明细id | | |
| ori_order_id | string	| 第三方主键id | | |
| is_removed | bool | 删除状态 | | | 
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| camera_position|string| 摄像机位置 | | 已删除 |
| photo_type|string| 照片类型（入场、出场） | |已删除 |
| camera_code|string| 摄像机编码 | | 已删除|
