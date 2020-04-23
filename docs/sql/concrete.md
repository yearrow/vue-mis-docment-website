#  混凝土核算
[原材默认匹配](#原材默认匹配)  
[原材时间段匹配](#原材时间段匹配)
[半成品默认匹配](#半成品默认匹配)
[半成品按配比编号匹配](#半成品按配比编号匹配)
[混凝土理论配合比](#混凝土理论配合比)
[混凝土理论配合比明细](#混凝土理论配合比明细)
[混凝土补录主表](#混凝土补录主表)
[混凝土补录明细表](#混凝土补录明细表)
[废料回收主表](#废料回收主表)
[废料回收明细表](#废料回收主表)
[混凝土盘点主表](#混凝土盘点主表)
[混凝土盘点明细表](#混凝土盘点明细表)
[提取明细表](#废料回收主表)
[提取盘表](#提取盘表)
[提取车表](#提取车表)
[提取手工表](#提取手工表)


## 原材默认匹配

### q_mapping_materials
**原材默认匹配**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id| bigint | 组织机构编码 | 是 |  |
| id| bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| material| STRING | 机楼原材料名称 | | |
| pro_line| STRING | 生产线 | | |
| material_id | BIGINT | 材料id | |  |
| material_code | STRING | 材料编码 |  | |
| material_name | STRING | 材料名称 |  | |
| material_model | STRING | 规格型号 |  | |
| material_unit | STRING | 单位 | | |
| auxiliary_unit | STRING | 辅单位 | | |
| conversion_rate | DECIMAL(28, 4) | 转换率 | | |
| class_id | BIGINT | 类别id | | |
| is_matching | STRING | 备注 | | |
| first_extract_time | DATE | 首次提取时间 | |  |
| ori_class_id | STRING | 预留对接材料类别ID | | |
| ori_material_id | STRING | 材料预留对接 | | |
| remark| STRING | 备注 | | |
| sort_code | INTEGER | 排序 | | |
| is_removed | bool | 删除状态 | | |
| creator_id | bigint | 添加人 | | |
| creator_name | string | 添加人姓名 | | |
| created_at | timestamp | 添加时间 | | |
| modifier_id | bigint | 修改人 | | |
| modifier_name | string | 修改人姓名 | | |
| updated_at | timestamp | 修改时间 | | |
| version | bigint | 版本号 | | |
| class_full_id | STRING | 材料类别主键链 | |待删除 |


## 原材时间段匹配

### q_mapping_materials_detail
**原材时间段匹配**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT | 组织机构主键 |是 | |  
| id | BIGINT | 主键id | 是 | |        
| org_name | STRING | 组织机构名称 | | |           
| order_date | STRING | 单据日期 | | |          
| material | STRING | 机楼原材料名称 | | |          
| pro_line | STRING | 生产线 | | |          
| material_id | BIGINT | 材料主键 | | |         
| material_code | STRING | 材料编码 | | |          
| material_name | STRING | 材料名称 | | |         
| material_model| STRING | 规格型号 | | |          
| material_unit | STRING | 主单位 | | |         
| auxiliary_unit | STRING | 辅单位 | | | 
| conversion_rate | DECIMAL(28, 4) | 转换率 | | |   
| class_id| BIGINT | 材料类别id | | |         
| class_full_id | STRING | 材料类别主键链 | | |
| is_matching | BOOLEAN | 匹配状态 | | |
| begin_date | STRING | 开始时间 | | |
| end_date | STRING | 结束时间 | | |
| first_extract_time | DATE| 首次提取时间 | | |
| ori_class_id | STRING | 预留对接材料类别ID | | | 
| ori_material_id | STRING | 材料预留 | | |
| remark | STRING | 主表备注 | | |   
| sort_code| INTEGER | 排序 | | |
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT | 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |


## 半成品默认匹配

### q_mapping_concrete
**半成品默认匹配**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id      | bigint | 组织机构编码 | 是 |  |
| id      | bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| material| STRING | 机楼原材料名称 | | |
| bet_lev| STRING | 混凝土标号 | | |
| pro_line| STRING | 生产线 | | |
| material_id | BIGINT | 材料id | |  |
| material_code | STRING  | 材料编码 |  | |
| material_name | STRING  | 材料名称 |  | |
| material_model | STRING  | 规格型号 |  | |
| material_unit | STRING  | 单位 | | |
| class_id | BIGINT | 类别id | | |
| is_matching | STRING | 匹配状态 | | |
| first_extract_time| DATE | 首次提取时间 | |  |
| ori_class_id | STRING | 预留对接材料类别ID | | |
| ori_material_id | STRING | 材料预留对接 | | |
| remark | STRING | 备注 | | |
| sort_code | INTEGER | 排序 | | |
| is_removed | bool | 删除状态 | | |
| creator_id | bigint | 添加人 | | |
| creator_name | string | 添加人姓名 | | |
| created_at | timestamp | 添加时间 | | |
| modifier_id | bigint | 修改人 | | |
| modifier_name | string | 修改人姓名 | | |
| updated_at | timestamp | 修改时间 | | |
| version | bigint | 版本号 | | |
| class_full_id | STRING | 材料类别主键链 | |待删除 |
| order_date | STRING | 账期 | |待删除 |


## 半成品按配比编号匹配

### q_mapping_concrete_detail
**半成品按配比编号匹配**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT| 组织机构主键 |是 | |  
| id | BIGINT| 主键id | 是 | |        
| org_name | STRING | 组织机构名称 | | |  
| material | STRING | 机楼原材料名称 | | | 
| bet_lev | STRING | 混凝土标号 | | |              
| pro_line | STRING | 生产线 | | |          
| material_id | BIGINT | 材料主键 | | |         
| material_code | STRING | 材料编码 | | |          
| material_name | STRING | 材料名称 | | |         
| material_model| STRING | 规格型号 | | |          
| material_unit | STRING | 主单位 | | |          
| class_id| BIGINT | 材料类别id | | |         
| is_matching | BOOLEAN| 匹配状态 | | |
| first_extract_time | DATE| 首次提取时间 | | |
| ori_class_id | STRING | 预留对接材料类别ID | | | 
| ori_material_id | STRING | 材料预留 | | |
| remark | STRING | 主表备注 | | |   
| sort_code| INTEGER | 排序 | | |
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT | 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |
| order_date| STRING| 单据日期 | | 待删除|   
| class_full_id | STRING | 材料类别主键链 | | 待删除|
| begin_date | STRING| 开始时间 | | 待删除|
| end_date | STRING| 结束时间 | | 待删除|



## 混凝土理论配合比

### q_dosage_ratio
**混凝土理论配合比**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | bigint | 组织机构编码 | 是 |  |
| id  | bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| dosageratio_name| STRING | 配比名称 | | |
| material_id | BIGINT | 材料id | |  |
| material_code | STRING  | 材料编码 |  | |
| material_name | STRING  | 材料名称 |  | |
| material_model | STRING  | 规格型号 |  | |
| material_unit | STRING  | 单位 | | |
| class_id| BIGINT | 类别id | | |
| impermeability | STRING | 抗渗等级 | | |
| antifreeze | STRING | 抗冻等级 | |  |
| aggregate_material | STRING | 集料（一级、二级、三级） | | |
| admixture | STRING | 掺合料 | | |
| quantity |  DECIMAL(28, 4) | 盘方量 | | |
| collapse | STRING | 坍塌度 | | |
| apparent_density| STRING | 表观密度 | | |
| water_binder_ratio | STRING | 水胶比 | | |
| sand_coarse_aggregate_ratio | STRING | 砂石比 | | |
| maker | STRING | 制单人 | | |
| maker_date | STRING | 制单日期 | | 
| remark | STRING | 主表备注 | | 
| is_audit | BOOLEAN | 审核（默认为false)| | 
| auditor | STRING | 审核人 | | 
| audit_date | STRING | 审核时间 | | 
| is_removed | bool | 删除状态 | | |
| creator_id | bigint | 添加人 | | |
| creator_name | string | 添加人姓名 | | |
| created_at | timestamp | 添加时间 | | |
| modifier_id | bigint | 修改人 | | |
| modifier_name | string | 修改人姓名 | | |
| updated_at | timestamp | 修改时间 | | |
| version | bigint | 版本号 | | |
| class_full_id | STRING | 材料类别主键链 | |待删除 |


## 混凝土理论配合比明细

### q_dosage_ratio_item
**混凝土理论配合比明细**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT| 组织机构主键 |是 | |  
| id | BIGINT| 主键id | 是 | |      
| order_id | BIGINT| 主表主键 | 是 | |          
| material_id | BIGINT| 材料主键 | | |         
| material_code | STRING| 材料编码 | | |          
| material_name | STRING| 材料名称 | | |         
| material_model| STRING| 规格型号 | | |          
| material_unit | STRING| 主单位 | | |          
| class_id| BIGINT | 材料类别id | | |         
| auxiliary_unit | STRING| 辅单位 | | |
| quantity | DECIMAL(28, 4)| 配比量（kg） | | |
| item_remark | STRING | 备注 | | | 
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT| 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |
| class_full_id | STRING | 材料类别主键链 | | 待删除|


## 混凝土补录主表

### q_manual_supplement
**混凝土补录主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | bigint | 组织机构编码 | 是 |  |
| id  | bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| order_date| STRING | 单据日期 | | |
| is_productionsystem| BOOLEAN | 是否经由生产系统 | | |
| bet_lev| STRING | 混凝土标号 | |  |
| prod_mete| STRING |生产方量 | | |
| order_code| STRING | 单据编号 | | |
| dat_tim| STRING | 生产时间 | | |
| pro_line| STRING | 生产线 | | |
| supplement_tim| STRING | 补录时间 | | |
| reciepe_no| STRING | 配比编号 | | |
| cons_pos| STRING | 施工部位 | | |
| labour_name| STRING | 收料单位 | | |
| vehicle| STRING | 车牌号 | | |
| maker| STRING | 制单人 | | |
| remark| STRING | 主表备注 | | 
| is_audit| BOOLEAN | 审核（默认为false)| | 
| auditor| STRING | 审核人 | | 
| audit_date| STRING | 审核时间 | | 
| is_removed| bool | 删除状态 | | |
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |
| material_id | BIGINT | 材料id | |待删除  |
| material_code| STRING  | 材料编码 |  |待删除 |
| material_name| STRING  | 材料名称 |  |待删除 |
| material_model| STRING  | 规格型号 |  | 待删除|
| material_unit| STRING  | 单位 | | 待删除|
| class_id| BIGINT | 类别id | | 待删除|
| class_full_id| STRING | 材料类别主键链 | |待删除 |



## 混凝土补录明细表

### q_manual_supplement_item
**混凝土补录明细表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT| 组织机构主键 |是 | |  
| id | BIGINT| 主键id | 是 | |      
| order_id | BIGINT| 主表主键 | 是 | |          
| material_id | BIGINT| 材料主键 | | |         
| material_code | STRING| 材料编码 | | |          
| material_name | STRING| 材料名称 | | |         
| material_model| STRING| 规格型号 | | |          
| material_unit | STRING| 主单位 | | |     
| material | STRING| 原材名称 | | |        
| fact_amnt | DECIMAL(28, 4)| 材料实耗量 | | |
| residual_quantity | DECIMAL(28, 4)| 剩余补录量 | | |
| item_remark | STRING | 备注 | | | 
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT| 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |
| class_full_id | STRING | 材料类别主键链 | | 待删除|
| remark | STRING | 备注 | |待删除 | 



## 废料回收主表

### q_waste_
**废料回收主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | bigint | 组织机构编码 | 是 |  |
| id  | bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| order_date| STRING | 单据日期 | | |
| is_productionsystem| BOOLEAN | 是否经由生产系统 | | |
| bet_lev| STRING | 混凝土标号 | |  |
| prod_mete| STRING |生产方量 | | |
| order_code| STRING | 单据编号 | | |
| recycle_date| STRING | 回收时间 | | |
| maker| STRING | 制单人 | | |
| maker_date| STRING | 制单日期 | | |
| remark| STRING | 主表备注 | | 
| is_audit| BOOLEAN | 审核（默认为false)| | 
| auditor| STRING | 审核人 | | 
| audit_date| STRING | 审核时间 | | 
| is_removed| bool | 删除状态 | | |
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |


## 废料回收明细

### q_waste_item
**废料回收明细**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT| 组织机构主键 |是 | |  
| id | BIGINT| 主键id | 是 | |      
| order_id | BIGINT| 主表主键 | 是 | |          
| material_id | BIGINT| 材料主键 | | |         
| material_code | STRING| 材料编码 | | |          
| material_name | STRING| 材料名称 | | |         
| material_model| STRING| 规格型号 | | |          
| material_unit | STRING| 主单位 | | |     
| class_id | STRING | 材料类别id | | |
| conversion_rate | DECIMAL(28, 4)| 转换率 | | |        
| quantity | DECIMAL(28, 4)| 重量 | | |
| recycle_quantity | DECIMAL(28, 4)| 回收方量 | | |
| item_remark | STRING | 备注 | | | 
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT| 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |
| class_full_id | STRING | 材料类别主键链 | | 待删除|
| remark | STRING | 备注 | |待删除 | 



## 混凝土盘点主表

### q_material_check
**混凝土盘点主表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | bigint | 组织机构编码 | 是 |  |
| id  | bigint | 主键 |是 | |
| org_name | STRING | 组织机构名称| | |
| order_date| STRING | 单据日期 | | |
| order_code| STRING | 单据编号 | | |
| check_date_time| STRING | 盘点时间 | | |
| maker| STRING | 制单人 | | |
| maker_date| STRING | 制单日期 | | |
| remark| STRING | 主表备注 | | 
| is_audit| BOOLEAN | 审核（默认为false)| | 
| auditor| STRING | 审核人 | | 
| audit_date| STRING | 审核时间 | | 
| is_removed| bool | 删除状态 | | |
| creator_id| bigint | 添加人 | | |
| creator_name| string | 添加人姓名 | | |
| created_at| timestamp | 添加时间 | | |
| modifier_id| bigint | 修改人 | | |
| modifier_name| string | 修改人姓名 | | |
| updated_at| timestamp | 修改时间 | | |
| version| bigint | 版本号 | | |




## 混凝土盘点明细表

### q_material_check_item
**混凝土盘点明细表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT| 组织机构主键 |是 | |  
| id | BIGINT| 主键id | 是 | |      
| order_id | BIGINT| 主表主键 | 是 | |          
| material_id | BIGINT| 材料主键 | | |         
| material_code | STRING| 材料编码 | | |          
| material_name | STRING| 材料名称 | | |         
| material_model| STRING| 规格型号 | | |          
| material_unit | STRING| 主单位 | | |     
| class_id | STRING | 材料类别id | | |
| auxiliary_unit | STRING | 辅单位 | | |
| conversion_rate | DECIMAL(28, 4)| 转换率 | | |        
| reference_quantity | DECIMAL(28, 4)| 参考库存量 | | |
| quantity | DECIMAL(28, 4)| 盘点数量辅单位 | | |
| item_remark | STRING | 备注 | | | 
| creator_id | BIGINT | 添加人主键 | | |
| creator_name| STRING | 添加人 | | |
| created_at| TIMESTAMP | 创建时间 | | |
| modifier_id | BIGINT| 修改人主键 | | |
| modifier_name| STRING | 修改人 | | |
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT | 版本 | | |
| class_full_id | STRING | 材料类别主键链 | | 待删除|




## 提取明细表

### q_dosage
**提取明细表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT | 组织机构主键 | 是 | |      
| id | BIGINT | 主键 | 是 | |  
| org_name | STRING | 组织机构名称 | | | 
| pro_line | STRING | 生产线 | | | 
| station | STRING | 拌合站名称 | | | 
| schedule_id | STRING | 调度号 | | | 
| task_no | STRING | 任务编号 | | | 
| cons_pos | STRING | 施工部位 | | | 
| bet_lev | STRING | 强度等级 | | | 
| hnt_material_id | BIGINT | 材料唯一标识 | | | 
| hnt_material_code | STRING | 材料编码 | | | 
| hnt_material_name | STRING | 材料名称 | | | 
| hnt_material_model | STRING | 规格型号 | | | 
| hnt_material_unit | STRING | 单位名称 | | | 
| hnt_class_idBIGINT | 类别主键 | | | 
| hnt_class_full_id | STRING | 类别主键链 | | | 
| hnt_statistic_class_id | BIGINT | 统计类别主键 | | | 
| hnt_statistic_class_name | STRING| 统计类别名称 | | |  
| hnt_ori_material_idSTRING | 混凝土【常用材料】预留 | | | 
| hnt_ori_class_id | STRING | 混凝土预留对接材料类别ID | | | 
| vehicle | STRING | 车牌 | | | 
| driver | STRING | 司机 | | | 
| pie_cnt | INT| 盘数 | | | 
| project_name | STRING| 工程名称 | | | 
| customer | STRING| 客户名称 | | | 
| dat_tim | STRING| 生产时间 | | |    
| operator | STRING | 操作员 | | | 
| lands | STRING | 坍塌度 | | | 
| plan_mete | DECIMAL(28, 4) | 计划方量 | | | 
| mor_mete | DECIMAL(28, 4) | 砂浆方量 | | | 
| prod_mete | DECIMAL(28, 4) | 生产方量 | | | 
| reciepe_no | STRING| 配比编号 | | |  
| pour | STRING| 卸料方式 | | | 
| qualitor | STRING | 质检员 | | | 
| wat_full | DECIMAL(28, 4) | 含水率 | | |   
| piece_id | STRING | 盘号 | | | 
| pie_amnt | DECIMAL(28, 4) | 盘方量 | | | 
| trans_mete | DECIMAL(28, 4) | 运单方量 | | | 
| dosage_id | STRING | 剂量号 | | | 
| fim_tim | STRING | 打料时间 | | | 
| plan_amn | DECIMAL(28, 4) | 材料计划量 | | | 
| fact_amnt | DECIMAL(28, 4) | 材料实耗量 | | | 
| material | STRING| 原材名称 | | | 
| material_id | BIGINT| 材料唯一标识 | | | 
| material_code | STRING| 材料编码 | | | 
| material_name | STRING| 材料名称 | | | 
| material_model | STRING| 规格型号 | | | 
| material_unit | STRING| 单位名称 | | | 
| auxiliary_unit | STRING| 辅单位 | | | 
| conversion_rate | DECIMAL(28, 4)| 转化率 | | | 
| class_id | BIGINT | 类别主键 | | | 
| class_full_id | STRING| 类别主键链 | | | 
| statistic_class_id | BIGINT| 统计类别主键 | | | 
| statistic_class_name | STRING| 统计类别名称 | | | 
| ori_org_id | STRING | 对接组织机构 | | |    
| ori_material_id | STRING| 【常用材料】预留 | | | 
| ori_class_id | STRING| 预留对接材料类别ID | | |   
| creator_id | BIGINT| 添加人主键 | | | 
| creator_name | STRING| 添加人 | | | 
| created_at | TIMESTAMP | 创建时间 | | | 
| modifier_id | BIGINT| 修改人主键 | | | 
| modifier_name | STRING| 修改人 | | | 
| updated_at | TIMESTAMP | 修改时间 | | |
| is_removed | BOOLEAN | 删除标记 | | |
| version | BIGINT| 版本 | | |




## 提取盘表

### q_piece
**提取盘表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT | 组织机构主键 | 是 | |      
| id | BIGINT | 主键 | 是 | |  
| org_name | STRING | 组织机构名称 | | | 
| pro_line | STRING | 生产线 | | | 
| station | STRING | 拌合站名称 | | | 
| schedule_id | STRING | 调度号 | | | 
| task_no | STRING | 任务编号 | | | 
| cons_pos | STRING | 施工部位 | | | 
| bet_lev | STRING | 强度等级 | | | 
| vehicle | STRING | 车牌 | | | 
| driver | STRING | 司机 | | | 
| pie_cnt | INT| 盘数 | | | 
| project_name | STRING| 工程名称 | | | 
| customer | STRING| 客户名称 | | | 
| dat_tim | STRING| 生产时间 | | |    
| operator | STRING | 操作员 | | | 
| lands | STRING | 坍塌度 | | | 
| plan_mete | DECIMAL(28, 4) | 计划方量 | | | 
| mor_mete | DECIMAL(28, 4) | 砂浆方量 | | | 
| prod_mete | DECIMAL(28, 4) | 生产方量 | | | 
| reciepe_no | STRING| 配比编号 | | |  
| pour | STRING| 卸料方式 | | | 
| qualitor | STRING | 质检员 | | | 
| wat_full | DECIMAL(28, 4) | 含水率 | | |   
| piece_id | STRING | 盘号 | | | 
| pie_amnt | DECIMAL(28, 4) | 盘方量 | | | 
| trans_mete | DECIMAL(28, 4) | 运单方量 | | | 
| ori_org_id | STRING | 对接组织机构 | | |   
| creator_id | BIGINT| 添加人主键 | | | 
| creator_name | STRING| 添加人 | | | 
| created_at | TIMESTAMP | 创建时间 | | | 
| modifier_id | BIGINT| 修改人主键 | | | 
| modifier_name | STRING| 修改人 | | | 
| updated_at | TIMESTAMP | 修改时间 | | | 
| is_removed | BOOLEAN | 删除标记 | | | 
| version | BIGINT| 版本 | | | 
| material_id | BIGINT| 材料唯一标识 | | 待删除 | 
| material_code | STRING| 材料编码 | | 待删除 | 
| material_name | STRING| 材料名称 | | 待删除 | 
| material_model | STRING| 规格型号 | | 待删除 | 
| material_unit | STRING| 单位名称 | | 待删除 | 
| class_id | BIGINT | 类别主键 | | 待删除 | 
| class_full_id | STRING| 类别主键链 | | 待删除 | 
| statistic_class_id | BIGINT| 统计类别主键 | | 待删除 | 
| statistic_class_name | STRING| 统计类别名称 | | 待删除 |  
| ori_material_id | STRING| 【常用材料】预留 | | 待删除 | 
| ori_class_id | STRING| 预留对接材料类别ID | | 待删除 |   



## 提取车表

### q_produce
**提取车表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT | 组织机构主键 | 是 | |      
| id | BIGINT | 主键 | 是 | |  
| org_name | STRING | 组织机构名称 | | | 
| pro_line | STRING | 生产线 | | | 
| station | STRING | 拌合站名称 | | | 
| schedule_id | STRING | 调度号 | | | 
| task_no | STRING | 任务编号 | | | 
| cons_pos | STRING | 施工部位 | | | 
| bet_lev | STRING | 强度等级 | | | 
| material_id | BIGINT| 材料唯一标识 | | | 
| material_code | STRING| 材料编码 | | | 
| material_name | STRING| 材料名称 | | | 
| material_model | STRING| 规格型号 | | | 
| material_unit | STRING| 单位名称 | | | 
| class_id | BIGINT | 类别主键 | | | 
| class_full_id | STRING| 类别主键链 | | | 
| statistic_class_id | BIGINT| 统计类别主键 | | | 
| statistic_class_name | STRING| 统计类别名称 | | | 
| vehicle | STRING | 车牌 | | | 
| driver | STRING | 司机 | | | 
| pie_cnt | INT| 盘数 | | | 
| project_name | STRING| 工程名称 | | | 
| customer | STRING| 客户名称 | | | 
| dat_tim | STRING| 生产时间 | | |    
| operator | STRING | 操作员 | | | 
| lands | STRING | 坍塌度 | | | 
| plan_mete | DECIMAL(28, 4) | 计划方量 | | | 
| mor_mete | DECIMAL(28, 4) | 砂浆方量 | | | 
| prod_mete | DECIMAL(28, 4) | 生产方量 | | | 
| reciepe_no | STRING| 配比编号 | | |  
| car_amnt |  DECIMAL(28, 4) | 车方量 | | | 
| pour | STRING| 卸料方式 | | | 
| qualitor | STRING | 质检员 | | | 
| wat_full | DECIMAL(28, 4) | 含水率 | | |   
| accountor | STRING | 对账人 | | | 
| account_tim | TIMESTAMP | 对账时间 | | | 
| account_state | BOOLEAN | 对账人 | | |   
| trans_mete | DECIMAL(28, 4) | 运单方量 | | | 
| ori_org_id | STRING | 对接组织机构 | | |    
| ori_material_id | STRING| 【常用材料】预留 | | | 
| ori_class_id | STRING| 预留对接材料类别ID | | |   
| creator_id | BIGINT| 添加人主键 | | | 
| creator_name | STRING| 添加人 | | | 
| created_at | TIMESTAMP | 创建时间 | | | 
| modifier_id | BIGINT| 修改人主键 | | | 
| modifier_name | STRING| 修改人 | | | 
| updated_at | TIMESTAMP | 修改时间 | | | 
| is_removed | BOOLEAN | 删除标记 | | | 
| version | BIGINT| 版本 | | | 



## 提取手工表

### q_manual
**提取车表**

所在库： **mtlp**

字段说明：

| 属性名         | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| org_id | BIGINT | 组织机构主键 | 是 | |      
| id | BIGINT | 主键 | 是 | |  
| org_name | STRING | 组织机构名称 | | | 
| pro_line | STRING | 生产线 | | | 
| station | STRING | 拌合站名称 | | | 
| dat_tim | STRING| 生产时间 | | | 
| material | STRING | 原材名称 | | | 
| fact_amnt | DECIMAL(28, 4) | 材料实耗量 | | | 
| wat_full | DECIMAL(28, 4) | 含水率 | | |   
| operator | STRING | 操作员 | | | 
| dosage_id | STRING | 剂量号 | | | 
| material_id | BIGINT| 材料唯一标识 | | | 
| material_code | STRING| 材料编码 | | | 
| material_name | STRING| 材料名称 | | | 
| material_model | STRING| 规格型号 | | | 
| material_unit | STRING| 单位名称 | | | 
| auxiliary_unit | STRING| 辅单位 | | | 
| conversion_rate  | DECIMAL(28, 4)| 转换率 | | | 
| class_id | BIGINT | 类别主键 | | | 
| class_full_id | STRING| 类别主键链 | | | 
| statistic_class_id | BIGINT| 统计类别主键 | | | 
| statistic_class_name | STRING| 统计类别名称 | | | 
| ori_material_id | STRING| 【常用材料】预留 | | | 
| ori_class_id | STRING| 预留对接材料类别ID | | |   
| creator_id | BIGINT| 添加人主键 | | | 
| creator_name | STRING| 添加人 | | | 
| created_at | TIMESTAMP | 创建时间 | | | 
| modifier_id | BIGINT| 修改人主键 | | | 
| modifier_name | STRING| 修改人 | | | 
| updated_at | TIMESTAMP | 修改时间 | | | 
| is_removed | BOOLEAN | 删除标记 | | | 
| version | BIGINT| 版本 | | | 
