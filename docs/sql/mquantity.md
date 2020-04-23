# 物资实物量管理
[投标量计划](#投标量计划)  
[工号总需用计划](#工号总需用计划)  
[月度需用计划](#月度需用计划)  
[物资临时计划](#物资临时计划)  
[周转物资计划](#周转物资计划)  
[混凝土签收](#混凝土签收)  
[供货申请](#供货申请)    
[收料登记](#收料登记)  
[库存](#库存)  
[发料登记](#发料登记)  
[施工队调拨](#施工队调拨)   
[盘点单](#盘点单)  

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
| supplier_id |	bigint | 供应商主键 | |缺少ori_supplier_id |
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


## 混凝土签收

### q_concrete_receive
**混凝土签收表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |缺少第三方对接id |
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
| is_submit | boolean |  | | |
| concrete_type |string |  | | |
| is_sign|boolean |  | | |
| submitter|string
| submit_date|string
| is_approve|string
| plan_code|string
| material_id | bigint | 材料id | |  |
| material_code| string  | 材料编码 |  | |
| material_name| string  | 材料名称 |  | |
| material_model| string  | 规格型号 |  | |
| material_unit| string  | 单位 | | |
| class_id | bigint | 类别id | | |
| class_full_id | string | 材料类别主键链 | | |
| ori_material_id |string|材料第三方对接id | | |
| ori_class_id |string|材料类别第三方对接id| | |
concrete_pump_type	string
slump	string
detail_target	string
plan_quantity	decimal(28,8)
change_quantity	decimal(28,8)
quantity	decimal(28,8)
apply_quantity	decimal(28,8)
applicant	string
apply_time	string
show_up_time	string
require	string
remark	string
is_expired	boolean
engineer_approve_quantity	decimal(28,8)
receive_method	int
receive_quantity	decimal(28,8)
receive_user	string
receive_time	string
| is_removed | bool | 删除状态 | | | 
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |

### q_concrete_receive_item
**混凝土签收明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
order_id  	bigint
org_name	string
receive_user	string
receive_time	string
plate_num	string
receive_item_quantity	decimal(28,8)
sort_code	int
creator_id	bigint
creator_name	string
created_at	timestamp
modifier_id	bigint
modifier_name	string
updated_at	timestamp
is_removed	boolean
version	bigint
receive_item_quantity_id	bigint

### q_concrete_receive_photo
**混凝土签收照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
receive_photo_id  	bigint
org_name	string
receive_photo_url	string
sort_code	int
creator_id	bigint
creator_name	string
created_at	timestamp
modifier_id	bigint
modifier_name	string
updated_at	timestamp
is_removed	boolean
version	bigint

## 收料登记

### q_receive
**收料登记主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_receive_gpy
**收料登记高拍仪**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_receive_more_material
**收料登记材料明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_receive_more_material_temp_data
**收料登记材料明细临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_receive_photo
**收料登记照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_receive_signature
**收料登记手机APP签名表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |


### q_receive_temp_data
**收料登记临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |


### q_receive_weight
**收料磅单关联字段表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

## 库存

### q_inventory
**实物量库存表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

## 发料登记

### q_delivery
**发料登记表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_more_material
**发料登记明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_temp_data
**发料临时表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_more_material_temp_data
**发料登记临时明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_photo
**发料照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_signature
**发料签名表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_delivery_weight
**发料磅单关联字段表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

## 施工队调拨

### q_labour_allot
**施工队调拨表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |


### q_labour_allot_item
**施工队调拨明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

## 盘点单

### q_check_store

**盘点单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_check_store_item

**盘点单从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |

### q_check_store_photo

**盘点单照片表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
