#  物资账务管理系统
[合同主表](#合同主表)  
[合同变更主表](#合同变更主表)
[合同从表](#合同从表)
[合同汇总明细表](#合同汇总明细表)
[扣款管理主表](#扣款管理主表)
[扣款管理从表](#扣款管理从表)
[发料单主表](#发料单主表)
[发料单明细表](#发料单明细表)
[发料单明细表从表](#发料单明细表从表)
[发料汇总单主表](#发料汇总单主表)
[发料单明细汇总表](#发料单明细汇总表)
[发料单类别汇总表](#发料单类别汇总表)
[工队月应耗量主表](#工队月应耗量主表)
[工队月应耗量从表](#工队月应耗量从表)
[工号月应耗量主表](#工号月应耗量主表)
[工号月应耗量从表](#工号月应耗量从表)
[库存表](#库存表)
[结转表](#结转表)
[支付管理](#支付管理)
[收料单主表](#收料单主表)
[收料单明细表](#收料单明细表)
[收料汇总单主表](#收料汇总单主表)
[收料单明细汇总表](#收料单明细汇总表)
[收料单类别汇总表](#收料单类别汇总表)
[收料单发票汇总表](#收料单发票汇总表)
[对账单主表](#对账单主表)
[对账单明细表](#对账单明细表)


## 合同主表

### m_contract
**合同主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name      | STRING | 组织机构名称 | | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|material_type_code| STRING | 材料类型code | | |
|material_type | STRING | 材料类型 | |  |
|contract_name| STRING  | 合同名称 |  | |
|contract_code| STRING  | 合同Code |  | |
|contract_type| STRING  | 合同类型 |  | |
|purchase_method| STRING  | 采购方式 | | |
|contract_price| DECIMAL(28, 4) | 合同金额 | | |
|change_price| DECIMAL(28, 4) | 变更金额 | | |
|order_date| STRING | 单据日期 | | |
|recorded_date| STRING | 编制时间 | | |
|order_code| STRING | 单号 | | |
|contract_content| STRING | 合同内容 | |  |
|main_purchase| STRING | 组织采购主体 | | |
|contract_object| STRING | 合同标的物 | | |
|remark| STRING | 备注 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|is_closed| BOOLEAN | 封闭状态 | | |
|is_approved| BOOLEAN | 审批状态 | | |
|approver| STRING | 审批人 | | |
|approve_date| STRING | 审批时间 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 机构对接 | | |
|ori_order_id| STRING | 对接合同ID | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| BOOLEAN | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |



## 合同变更主表

### m_contract_change
**合同变更主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|supplier_name| STRING | 供应商名称 | | |
|supplier_id| BIGINT | 供应商Id | | |
|material_type_code| STRING | 材料类型code | | |
|material_type | STRING | 材料类型 | |  |
|contract_name | STRING | 合同名称 | |  |
|contract_code| STRING  | 合同Code |  | |
|contract_type| STRING  | 合同类型 |  | |
|contract_id| BIGINT  | 主合同ID |  | |
|change_code| STRING  | 变更编号 |  | |
|full_code| STRING  | 合同编号全称 | | |
|change_price| DECIMAL(28, 4) | 变更金额 | | |
|purchase_method| STRING | 采购方式 | | |
|contract_price| DECIMAL(28, 4) | 合同金额 | | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | | |
|recorded_date| STRING | 编制时间 | | |
|contract_content| STRING | 合同内容 | | |
|main_purchase| STRING | 组织采购主体 | | |
|contract_object| STRING | 合同标的物 | | |
|remark| STRING | 备注 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|is_approved| BOOLEAN | 审批状态 | | |
|approver| STRING | 审批人 | | |
|approve_date| STRING | 审批时间 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 机构对接 | | |
|ori_order_id| STRING | 对接合同ID | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| BOOLEAN | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |


## 合同从表

### m_contract_item
**合同从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id     | BIGINT | 合同主表主键 |是 | |
|change_order_id     | BIGINT | 变更合同主键 | | |
|item_type| INT | 合同类型 | | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 材料类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity| DECIMAL(28, 4) | 数量 | | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|item_remark|  STRING  | 备注 | | |
|ori_material_id| STRING | 材料对接主键 | | |
|ori_class_id| STRING | 材料类别对接主键 | | |
|ori_item_id| STRING | 上传之前的主键 | | |
|ori_order_id| STRING | 上传之前的order主键 | | |
|is_audit| BOOLEAN | 判断变更合同是不是审批或审核 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|item_data_type| INT | 选材方式 | |待删除 |
|item_data_id | BIGINT | 选材来源ID | | 待删除 |
|ori_common_id| STRING | | |待删除 |


## 合同汇总明细表

### m_contract_sum_detail
**合同汇总明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|contract_id    | BIGINT | 合同ID | | |
|supplier_id    | BIGINT | 供应商Id | | |
|supplier_name    | STRING | 供应商名称 | | |
|contract_name    | STRING | 合同名称 | | |
|contract_code    | STRING | 合同Code | | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 材料类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity| DECIMAL(28, 4) | 数量 | | |
|use_quantity| DECIMAL(28, 4) | 使用数量 | | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|use_tax_free_sum| DECIMAL(28,4) | 使用不含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|item_remark|  STRING  | 备注 | | |
|is_closed| STRING |  | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 机构对接 | | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|ori_common_id| STRING | 材料信息其他预留主键 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |

## 扣款管理主表

### m_deductions
**扣款管理主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name| STRING | 组织机构名称 | | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | | |
|recorded_date| STRING | 入账时间 | | |
|maker| STRING | 制单人 | | |
|maker_accord| STRING | 制单依据 | | |
|maker_date| STRING | 制单日期 | | |
|remark| STRING | 主表备注 | | |
|is_submit| BOOLEAN | 提交 | | |
|submitor| STRING | 提交人 | | |
|submit_date| STRING | 提交时间 | | |
|ori_org_id| STRING | 对接第三方组织机构 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |

## 扣款管理从表

### m_deductions_item
**扣款管理从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id | BIGINT | 主表主键| | |
|org_name | STRING | 组织机构名称| | |
|labour_name | STRING | 用料单位名称| | |
|labour_id | BIGINT | 用料单位Id| | |
|deduct_sum| DECIMAL(28, 4) | 扣款金额 | | |
|deduct_instructions| STRING | 扣款说明 | | |
|ori_common_id| STRING | 材料信息其他预留主键 | | |
|ori_labour_id| STRING | 对接第三方用料单位 | | |
|remark| STRING | 备注 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|material_id | BIGINT | 材料id | |待删除 |
|material_code| STRING  | 材料编码 |  |待删除 |
|material_name| STRING  | 材料名称 |  |待删除 |
|material_model| STRING  | 规格型号 |  |待删除 |
|material_unit| STRING  | 单位 | | 待删除|
|class_id| BIGINT | 类别id | |待删除 |
|class_full_id| STRING | 材料类别主键链 | |待删除 |
|ori_material_id| STRING | 材料信息varchar主键 | |待删除 |
|ori_class_id| STRING | 材料类别varchar主键 | |待删除 |

## 发料单主表

### m_delivery_order
**发料单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|labour_name | STRING | 用料单位名称| | |
|labour_id | BIGINT | 用料单位Id| | |
|gh_name | STRING | 工号名称| | |
|gh_id | BIGINT | 工号id| | |
|gh_full_name | STRING | 工号全称| | |
|total_amount | DECIMAL(28, 4) | 合计金额| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 入账时间 | | |
|order_data_type| INTEGER | 单据类型 | | 限额发料 1 、超发2、其他0 |
|service_type| INTEGER | 业务类型 | | |
|order_type| INTEGER | 操作类型 | | |
|is_refund| INTEGER | 状态（普通模式下退料的状态标记） | | |
|is_rush| INTEGER | 状态（普通模式下冲红或冲预点状态标记）1 | | |
|material_type| STRING | 材料类型 | | |
|material_type_code| STRING | 材料类型code | | |
|is_summary | BOOLEAN | 发料汇总状态| | |
|order_data_id | BIGINT | 存冲红、退料功能生产的主表id| | |
|order_data_code | STRING | 存冲红、退料功能单号| | |
|prepoint_id| BIGINT | (收)预点ID | | |
|prepoint_code| STRING | (收)预点单号 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|is_approved| BOOLEAN | 审批状态 | | |
|approver| STRING | 审批人 | | |
|approve_date| STRING | 审批时间 | | |
|ori_gh_id| STRING | 对接第三方工号 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_labour_id| STRING | 对接第三方用料单位 | | |
|is_deduction | BOOLEAN | 是否扣款| | |
|remark| STRING | 备注 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|is_offset| BOOLEAN | 冲（退）状态 | | 待删除|
|store_room_name | STRING | 成本科目| | 待删除 |
|store_room_full_name | STRING | 成本科目全称| | 待删除 |
|store_room_id | BIGINT | 成本科目Id| | 待删除 |

## 发料单明细表

### m_delivery_order_item
**发料单明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id     | BIGINT | 主键 |是 | |
|service_type| INTEGER | 业务类型（新增） | | |
|order_type| INTEGER | 操作类型（新增） | | |
|is_refund| INTEGER | 状态（普通模式下退料的状态标记） | | |
|is_rush| INTEGER | 状态（普通模式下冲红或冲预点状态标记）1 | | |
|org_name | STRING | 组织机构名称| | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|store_room_name | STRING | 成本科目(来源库存)| | |
|store_room_full_name | STRING | 成本科目全称(来源库存)| | |
|store_room_id | BIGINT | 成本科目Id(来源库存)| | |
|manufacturer| STRING | 生产厂商 | | |
|batch_no| STRING | 炉批号 | | |
|storage_room| STRING | 存放地 | | |
|item_bar_code| STRING | 条码 | | |
|info_remark| STRING | 材料备注 | | |
|quantity | DECIMAL(28, 4) | 数量| | |
|book_price | DECIMAL(28, 8) | 核算价| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|lssue_price | DECIMAL(28, 8) | 发料价| | |
|lssue_sum | DECIMAL(28, 4) | 发料金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|item_remark | STRING | 备注| | |
|delivery_item_id| BIGINT | 发料登记明细主键 | |  |
|prepoint_id| BIGINT | (收)预点ID | | |
|prepoint_code| STRING | (收)预点单号 | | |
|ori_material_id| STRING | 材料预留对接 | | |
|ori_class_id| STRING | 预留对接材料类别ID | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|inventory_id| BIGINT | 库存主键id | | 待删除|
|store_id| BIGINT | 来源ID | |待删除 |
|refund_delivery_quantity| DECIMAL(28, 4) | 退发量| | |
|refund_delivery_price| DECIMAL(28, 8) | 退发价 | | |
|refund_delivery_sum| DECIMAL(28, 4) | 退发金额 | | |
|is_offset| BOOLEAN | 冲（退）状态 | | 待删除 |


## 发料单明细表从表

### m_delivery_order_after_item
**发料单明细表从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id     | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|store_id | BIGINT | 来源ID| | |
|prepoint_id| BIGINT | (收)预点ID | | |
|prepoint_code| STRING | (收)预点单号 | | |
|is_offset| BOOLEAN | 冲（退）状态 | | |
|plan_quantity| DECIMAL(28, 4) | 计划数量 | | |
|kl_picking_quantity| DECIMAL(28, 4) | 开累领料量 | | |
|need_picking_quantity| DECIMAL(28, 4) | 待领数量 | | |
|quantity | DECIMAL(28, 4) | 数量| | |
|book_price | DECIMAL(28, 8) | 核算价| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|lssue_price | DECIMAL(28, 8) | 发料价| | |
|lssue_sum | DECIMAL(28, 4) | 发料金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|item_remark | STRING | 备注| | |
|ori_material_id| STRING | 材料预留对接 | | |
|ori_class_id| STRING | 预留对接材料类别ID | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|manufacturer| STRING | 生产厂商 | |待删除 |
|batch_no| STRING | 炉批号 | | 待删除|
|storage_room| STRING | 存放地 | |待删除 |
|info_remark| STRING | 材料备注 | | 待删除|
|item_bar_code| STRING | 条码 | |待删除 |
|store_room_name | STRING | 成本科目(来源库存)| |待删除 |
|store_room_full_name | STRING | 成本科目全称(来源库存)| | 待删除|
|store_room_id | BIGINT | 成本科目Id(来源库存)| |待删除 |

## 发料汇总单主表

### m_delivery_summary
**发料汇总单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|labour_name | STRING | 用料单位名称| | |
|labour_id | BIGINT | 用料单位Id| | |
|recorded_date| STRING | 入账时间 | | |
|service_type| INTEGER | 业务类型（新增） | | |
|order_type| INTEGER | 操作类型（新增） | | |
|is_deduction | BOOLEAN | 是否扣款| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|lssue_sum | DECIMAL(28, 4) | 发料金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|is_submit| BOOLEAN | 提交 | | |
|submitor| STRING | 提交人 | | |
|submit_date| STRING | 提交时间 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |

## 发料单明细汇总表

### m_delivery_summary_item
**发料单明细汇总表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id   | BIGINT | 主表主键 | 是 |  |
|delivery_order_id| BIGINT | 发料单id | |  |
|delivery_order_code| STRING | 发料单编号 | |  |
|delivery_maker| STRING | 制单人 | |  |
|delivery_maker_date| STRING | 制单日期 | |  |
|delivery_recorder_date| STRING | 出库时间 | | |
|book_price | DECIMAL(28, 8) | 核算价| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|lssue_price | DECIMAL(28, 8) | 发料价| | |
|lssue_sum | DECIMAL(28, 4) | 发料金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |


## 发料单类别汇总表

### m_delivery_summary_store_room
**发料单类别汇总表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id   | BIGINT | 主表主键 | 是 |  |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|cost_item_name | STRING | 费用项目名称| | |
|cost_item_code | STRING | 费用项目code| | |
|calculate_item_name | STRING | 核算项目名称| | |
|calculate_item_code | STRING | 核算项目code| | |
|book_price | DECIMAL(28, 8) | 核算价| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|lssue_price | DECIMAL(28, 8) | 发料价| | |
|lssue_sum | DECIMAL(28, 4) | 发料金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |


## 工队月应耗量主表

### m_gd_monthconsumption
**工队月应耗量主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 入账时间 | | |
|labour_name | STRING | 用料单位名称| | |
|labour_id | BIGINT | 用料单位Id| | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_labour_id| STRING | 对接第三方用料单位 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|maker| STRING | 制单人 | | |
|remark| STRING | 主表备注 | | |
|maker_date| STRING | 制单日期 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |


## 工队月应耗量从表

### m_gd_monthconsumption_item
**工队月应耗量从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id     | BIGINT | 主键 |是 | |
|item_id | BIGINT | 来源ID | |  |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|quantity | DECIMAL(28, 4) | 数量| | |
|use_quantity | DECIMAL(28, 4) | 应耗量| | |
|jc_quantity | DECIMAL(28, 4) | 节超| | |
|ori_labour_id| STRING | 对接第三方用料单位 | | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|ori_common_id| STRING | 材料信息其他预留主键sV_Col5 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_item_id| STRING |  | | |
|ori_order_id| STRING | 对接第三方主键 | | |
|item_remark | STRING | 备注| | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|ori_gh_id| STRING | 对接第三方工号 | | 待删除|


## 工号月应耗量主表

### m_gh_monthconsumption
**工号月应耗量主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|gh_id | BIGINT | 工号id| | |
|gh_name | STRING | 工号名称| | |
|gh_full_name | BIGINT | 工号全称| | |
|ori_gh_id| STRING | 对接第三方工号 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 编制时间 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|maker| STRING | 制单人 | | |
|remark| STRING | 主表备注 | | |
|maker_date| STRING | 制单日期 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |


## 工号月应耗量从表

### m_gh_monthconsumption_item
**工号月应耗量从表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_id     | BIGINT | 主键 |是 | |
|item_id | BIGINT | 来源ID | |  |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|quantity | DECIMAL(28, 4) | 数量| | |
|book_price | DECIMAL(28, 8) | 核算价| | |
|book_sum | DECIMAL(28, 4) | 核算金额| | |
|use_quantity | DECIMAL(28, 4) | 应耗量| | |
|jc_quantity | DECIMAL(28, 4) | 节超| | |
|ori_material_id| STRING | 【常用材料】预留 | | |
|ori_class_id| STRING | 预留对接材料类别ID | | |
|ori_common_id| STRING | 【通用】预留 | | |
|ori_gh_id| STRING | 【工号】预留 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_item_id| STRING |  | | |
|ori_order_id| STRING | 上传之前的磅单主键 | | |
|item_remark | STRING | 明细备注| | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|ori_labour_id| STRING | 【常用用料单位】预留 | | 待删除 |


## 库存表

### m_inventory
**库存表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|order_date| STRING | 入账时间 | | |
|store_id | BIGINT | 来源ID | |对账单明细主键|
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity | DECIMAL(28, 4) | 数量| | |
|use_quantity | DECIMAL(28, 4) | 已发数量| | |
|book_price | DECIMAL(28, 8) | 账面价| | |
|book_sum | DECIMAL(28, 4) | 账面金额| | |
|use_book_sum | DECIMAL(28, 4) | 已发账面金额| | |
|item_bar_code | STRING | 条码| | |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|manufacturer| STRING | 生产厂商 | | |
|batch_no| STRING | 炉批号 | | |
|storage_room| STRING | 存放地 | | |
|item_remark | STRING | 明细备注| | |
|tax_deduction | BIGINT | 是否扣税| | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|ori_common_id| STRING | 材料信息其他预留主键sV_Col5 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |m_inv
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|item_type | INT | 库存来源（暂时没用） | |待删除 |


## 结转表

### m_month_settle_accounts
**结转表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|order_date| STRING | 结转月份 | | |
|item_bar_code | STRING | 条码| | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity | DECIMAL(28, 4) | 数量| | |
|book_price | DECIMAL(28, 8) | 账面价| | |
|book_sum | DECIMAL(28, 4) | 账面金额| | |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|manufacturer| STRING | 生产厂商 | | |
|batch_no| STRING | 炉批号 | | |
|storage_room| STRING | 存放地 | | |
|item_remark | STRING | 明细备注| | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|ori_common_id| STRING | 材料信息其他预留主键sV_Col5 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |m_inv
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |
|item_type | INT | 库存来源（暂时没用） | | 待删除 |
|store_id | BIGINT | 来源ID（暂时没用）| | 待删除|
|supplier_name | STRING | 供应商名称| |  待删除|
|supplier_id| BIGINT | 供应商Id | | 待删除 |


## 支付管理

### m_payment
**支付管理**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | BIGINT | 组织机构编码 | 是 |  |
|id      | BIGINT | 主键 |是 | |
|org_name | STRING | 项目部名称 | | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|material_type_code| STRING | 材料类型code | | |
|material_type | STRING | 材料类型 | |  |
|contract_name| STRING | 合同名称 | | |
|contract_id| BIGINT | 合同id | | |
|contract_code| STRING | 合同Code | | |
|payment_date| STRING | 付款日期 | | |
|payment_code| STRING | 付款单号 | | |
|payment_type| STRING | 付款方式 | | |
|payment_nature| STRING | 付款性质 | | |
|payment_sum| DECIMAL(28, 4) | 付款金额 | | |
|remark| STRING | 备注 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 机构对接 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| BIGINT | 添加人 | | |
|creator_name| STRING | 添加人姓名 | | |
|created_at| TIMESTAMP | 添加时间 | | |
|modifier_id| BIGINT | 修改人 | | |
|modifier_name| STRING | 修改人姓名 | | |
|updated_at| TIMESTAMP | 修改时间 | | |
|version| BIGINT | 版本号 | | |




## 收料单主表

### m_receive_order
**收料单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 入账时间 | | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|contract_id| BIGINT | 合同id | | |
|contract_code| STRING | 合同Code | | |
|purchase_method| STRING | 采购方式 | | |
|settlement_method| STRING | 结算方式 | | |
|service_type| INTEGER | 业务类型（新增） | | |
|order_type| INTEGER | 操作类型（新增） | | |
|is_summary | BOOLEAN | 发料汇总状态| | |
|invoice_number | STRING | 发票号| | |
|tax_deduction | BIGINT | 是否扣税| | |
|total_amount | DECIMAL(28, 4) | 合计金额| | |
|order_data_id | BIGINT | 新增 存冲红、退料功能生产的主表id| | |
|order_data_code | STRING | 新增 存冲红、退料功能单号| | |
|is_refund| INTEGER | 状态（普通模式下退料的状态标记） | | |
|is_rush| INTEGER | 状态（普通模式下冲红或冲预点状态标记）1 | | |
|remark| STRING | 备注 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|is_audit| BOOLEAN | 审核 | | |
|auditor| STRING | 审核人 | | |
|audit_date| STRING | 审核时间 | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_order_id| STRING | 对接收料单ID | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
|order_data_type| INTEGER | 单据类型 | | 待删除 |
|store_room_name | STRING | 成本科目| | 待删除 |
|store_room_full_name | STRING | 成本科目全称| | 待删除 |
|store_room_id | BIGINT | 成本科目Id| | 待删除 |
|is_offset| BOOLEAN | 冲（退）状态 | | 待删除 |
|sort_code| INTEGER | 排序 | | 待删除 |

## 收料单明细表

### m_receive_order_item
**收料单明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|order_id     | bigint | 主键 |是 | |
|service_type| INTEGER | 业务类型（新增） | | |
|order_type| INTEGER | 操作类型（新增） | | |
|item_data_type| INTEGER | 选材来源 | | |
|item_data_id| INTEGER | 来源ID | | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity| DECIMAL(28, 4) | 数量 | | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|book_price | DECIMAL(28, 8) | 账面价| | |
|book_sum | DECIMAL(28, 4) | 账面金额| | |
|difference | DECIMAL(28, 4) | 差额| | |
|item_bar_code| STRING | 条码 | | |
|store_room_name | STRING | 成本科目(来源库存)| | |
|store_room_full_name | STRING | 成本科目全称(来源库存)| | |
|store_room_id | BIGINT | 成本科目Id(来源库存)| | |
|manufacturer| STRING | 生产厂商 | | |
|batch_no| STRING | 炉批号 | | |
|storage_room| STRING | 存放地 | | |
|item_remark| STRING | 备注 | | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|ori_common_id| STRING | 材料信息其他预留主键sV_Col5 | | |
|ori_item_id| STRING | 上传之前的主键 | | |
|ori_order_id| STRING | 上传之前的order主键 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |


## 收料汇总单主表

### m_receive_summary
**收料汇总单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 点验日期 | | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|is_submit| BOOLEAN | 提交 | | |
|submitor| STRING | 提交人 | | |
|submit_date| STRING | 提交时间 | | |
|contract_id| BIGINT | 合同id | | |
|contract_code| STRING | 合同Code | | |
|tax_deduction | BIGINT | 是否扣税| | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|maker| STRING | 制单人 | | |
|maker_date| STRING | 制单日期 | | |
|ori_supplier_id| STRING | 对接第三方供应商 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_order_id| STRING | 对接第三方 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |

## 收料单明细汇总表

### m_receive_summary_item
**收料单明细汇总表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|order_id   | BIGINT | 主表主键 | 是 |  |
|receive_order_id| BIGINT | 收料单Id | |  |
|receive_order_code| STRING | 收料单code | |  |
|receive_maker| STRING | 制单人 | |  |
|receive_maker_date| STRING | 制单日期 | |  |
|receive_recorder_date| STRING | 入库时间 | | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |


## 收料单类别汇总表

### m_receive_summary_store_room
**收料单类别汇总表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|order_id   | BIGINT | 主表主键 | 是 |  |
|store_room_name | STRING | 成本科目| | |
|store_room_full_name | STRING | 成本科目全称| | |
|store_room_id | BIGINT | 成本科目Id| | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |



## 收料单发票汇总表

### m_receive_summary_invoice
**收料单发票汇总表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|order_id   | BIGINT | 主表主键 | 是 |  |
|special_ticket | BOOLEAN | 是否增值税专用票| | |
|invoice_icategory | STRING | 发票类别| | |
|invoice_code | STRING | 发票代码| | |
|invoice_banks | STRING | 发票票号| | |
|invoice_state | BOOLEAN | 开票状态| | |
|invoice_date | STRING | 发票日期| | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount|  DECIMAL(28,4)  | 税额 | | |
|item_remark| STRING | 备注 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |



## 对账单主表

### m_reconciliation
**对账单主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|order_date| STRING | 单据日期 | | |
|order_code| STRING | 单号 | |  |
|recorded_date| STRING | 入账时间 | | |
|supplier_name | STRING | 供应商名称| | |
|supplier_id| BIGINT | 供应商Id | | |
|ori_supplier_id| STRING | 供应商对接 | | |
|ori_org_id| STRING | 对接第三方组织 | | |
|ori_order_id| STRING | 对接收料单ID | | |
|accountor| STRING | 对账人 | | |
|account_tim| STRING | 对账时间 | | |
|account_state| BOOLEAN | 对账状态 | | |
|remark| STRING | 备注 | | |
|maker| STRING | 制单人 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |
|begin_date | STRING | 起始时间| | 待删除 |
|end_date | STRING | 结束时间| | 待删除 |


## 对账单明细表

### m_reconciliation_item
**对账单明细表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
|org_id      | bigint | 组织机构编码 | 是 |  |
|id      | bigint | 主键 |是 | |
|order_id     | bigint | 主键 |是 | |
|org_name | STRING | 组织机构名称| | |
|service_type| INTEGER | 业务类型（新增） | | |
|order_type| INTEGER | 操作类型（新增） | | |
|material_id | BIGINT | 材料id | |  |
|material_code| STRING  | 材料编码 |  | |
|material_name| STRING  | 材料名称 |  | |
|material_model| STRING  | 规格型号 |  | |
|material_unit| STRING  | 单位 | | |
|class_id| BIGINT | 类别id | | |
|class_full_id| STRING | 材料类别主键链 | | |
|quantity| DECIMAL(28, 4) | 数量 | | |
|tax_rate|  DECIMAL(28,4)  | 税率 | | |
|tax_free_price|  DECIMAL(28,8)  | 不含税单价 | |  |
|tax_free_sum| DECIMAL(28,4) | 不含税金额 | | |
|tax_included_price|  DECIMAL(28,8)  | 含税单价 | | |
|tax_included_sum| DECIMAL(28,4) | 含税金额 | | |
|tax_amount| DECIMAL(28,4) | 税额 | | |
|order_bar_code| STRING | 条码 | | |
|manufacturer| STRING | 生产厂商 | | |
|batch_no| STRING | 炉批号 | | |
|storage_place| STRING | 存放地 | | |
|item_remark| STRING | 备注 | | |
|entry_state| BOOLEAN | 入账状态 | | |
|ori_material_id| STRING | 材料信息varchar主键 | | |
|ori_class_id| STRING | 材料类别varchar主键 | | |
|sort_code| INTEGER | 排序 | | |
|is_removed| bool | 删除状态 | | |
|creator_id| bigint | 添加人 | | |
|creator_name| string | 添加人姓名 | | |
|created_at| timestamp | 添加时间 | | |
|modifier_id| bigint | 修改人 | | |
|modifier_name| string | 修改人姓名 | | |
|updated_at| timestamp | 修改时间 | | |
|version| bigint | 版本号 | | |