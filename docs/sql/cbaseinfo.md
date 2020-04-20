#  物资基础数据

## 材料类别


### material_category

**材料类别表**

所在库： **platform**

字段说明：

| 属性名             | 类型         | 名称       | 主键|  说明 |
|:----------------- |:-------------| :----------|:---|:-----|
| org_id            | BIGINT | 添加人的组织机构id | 是| |
| id                | BIGINT | 主键 | 是 | |
| scope_org_id      | BIGINT | 隔离级别id | -- | 默认组织机构根节点 |
| parent_id         | BIGINT | 父级id | -- |  |
| full_id           | STRING | 主键链 | -- |  |
| full_id_ex        | STRING | 主键链 | -- |  |
| name              | STRING | 类别名称 | -- |  |
| full_name         | STRING | 类别全称 | -- |  |
| code              | STRING | 类别编码 | -- |  |
| order_no          | BIGINT | 排序 | -- |  |
| level             | BIGINT | 树级别 | -- |  |
| remark            | STRING | 备注 | -- |  |
| is_approve        | BOOLEAN| 是否审批 | -- |默认false  |
| unit              | STRING | 类别单位 | -- |  |
| type              | INT    | 类别类型 | --|0为消耗 1为周转|
| integrationId     | STRING | 第三方对接主键 | -- |  |
| is_discaded       | BOOLEAN| 类别状态 | -- |  |
| is_removed        | BOOLEAN| 删除标记 | -- |  |
| creator           | BIGINT | 添加人主键 | -- |  |
| reviser           | BIGINT | 修改人主键 | -- |  |
| created_at        | TIMESTAMP | 创建时间 | -- |  |
| updated_at        | TIMESTAMP | 修改时间 | -- |  |
| version           | BIGINT | 版本 | -- |  |



### material_scope

**材料类别隔离表**

所在库： **platform**

字段说明：

| 属性名        | 类型       | 名称           |  主键 |  说明 |
|:------------- |:----------| :--------------|:-----|:-----|
| id            | BIGINT    | 主键            | 是 ||
| org_id        | BIGINT    | 隔离的组织机构id | ||
| org_name      | STRING    | 隔离的组织名称   | ||
| creator_id    | BIGINT    | 添加人主键 | ||
| creator_name  | STRING    | 添加人 | ||
| created_at    | TIMESTAMP | 创建时间 | ||
| modifier_id   | BIGINT    | 修改人主键 | ||
| modifier_name | STRING    | 修改人 | ||
| updated_at    | TIMESTAMP | 修改时间 | ||
| is_removed    | BOOLEAN   | 删除标记 | ||
| version       | BIGINT    | 版本 | ||

## 材料信息


### material

**材料表**

所在库： **platform**

字段说明：

| 属性名               | 类型           | 名称 |  主键 |  说明 |
| ---------------------| ---- | ---- |  ---- |-----|
| org_id               | BIGINT | 添加人的组织机构id | 是 ||
| id                   | BIGINT | 主键 | 是 ||
| material_category_id | BIGINT | 材料类别id | ||
| code                 | STRING | 材料编码 | ||
| full_code            | STRING | 材料全编码 | ||
| name                 | STRING | 材料名称 | ||
| model                | STRING | 材料型号 | ||
| spec                 | STRING | 材料规格 | ||
| quality              | STRING | | ||
| unit                 | BIGINT | 材料单位 | ||
| remark               | STRING | 备注 | ||
| material_category_type| INT | 材料类型 | ||
| is_expired             | BOOLEAN | 材料状态 | ||
| is_removed             | BOOLEAN | 删除标记 | ||
| creator                | BIGINT | 添加人主键 | ||
| reviser                | BIGINT | 修改人主键 | ||
| created_at             | TIMESTAMP | 创建时间 | ||
| updated_at             | TIMESTAMP | 修改时间 | ||
| version                | BIGINT | 版本 | ||
| is_approve             | BOOLEAN | 是否审批 | |类别需要审批且已经审批的材料才有效|
| approve_date           | TIMESTAMP | 审批时间 | ||
| approver               | BIGINT | 审批人主键 | ||
| category_approve       | BOOLEAN | 是否需要审批 | | |
| approve_name           | STRING | 审批人 | ||
| create_name            | STRING | 添加人 | ||
| integration_id         | STRING | 第三方对接主键 | ||


### material_unit

**材料单位转化系数表**

所在库： **platform**

字段说明：

| 属性名             | 类型 | 名称  | 主键 | 说明 |
| ----------------  | ---- | ---- |  ---- |-----|
| org_id | BIGINT | 添加人的组织机构id | 是 ||
| id | BIGINT | 主键 | 是 ||
| material_id | BIGINT | 材料id | ||
| name | STRING | 材料名称 | ||
| unit | STRING | 单位名称 | ||
| factor | DOUBLE | 换算系数 | ||
| remark | STRING | 备注 | ||
| is_removed | BOOLEAN | 删除标记 | ||
| creator | BIGINT | 添加人主键 | ||
| reviser | BIGINT | 修改人主键 | ||
| created_at | TIMESTAMP | 创建时间 | ||
| updated_at | TIMESTAMP | 修改时间 | ||
| version | BIGINT | 版本 | ||

## 供应商


### company

**供应商（大库）**

所在库： **platform**

字段说明：

| 属性名             | 类型   | 名称 |  主键 |  说明 |
| ----------------  | ----   | ---- |  ---- |-----|
| id                | BIGINT | 主键 | 是 ||
| org_id            | BIGINT | 添加人的组织机构id | ||
| org_name          | STRING | 添加人的组织名称 | ||
| name              | STRING | 公司名称 | ||
| name_en           | STRING | 公司英文名称 | ||
| short_name        | STRING | 短名称 | ||
| credit_code       | STRING | 工程类型id | ||
| cooperation_types | BIGINT | 社会信用统一代码 | ||
| registered_capital| DOUBLE | 合作类型（位组合数值） | ||
| legal_person_name | STRING | 法人姓名 | ||
| business_scope    | STRING | 经营范围 | ||
| company_property  | STRING | 企业性质 | ||
| contact_person_name| STRING | 联系人姓名 | ||
| contact_person_position| STRING | 联系人职务 | ||
| phone_number        | STRING | 联系电话 | ||
| address             | STRING | 联系地址 | ||
| bank_deposit        | STRING | 开户银行 | ||
| bank_account        | STRING | 银行账号 | ||
| is_black_list       | BOOLEAN | 是否黑名单 | ||
| is_audited          | BOOLEAN | 是否审核 | ||
| is_approved         | BOOLEAN | 是否审批 | ||
| approve_state       | STRING | 审批状态 | ||
| approve_person_name | STRING | 审批人 | ||
| approve_time        | STRING | 审批时间 | ||
| remark              | STRING | 备注 | ||
| company_type        | STRING | 供应商类型 | ||
| integration_id      | STRING | 第三方对接主键 | ||
| original_id         | STRING | 原始ID | ||
| original_system_key | STRING | 数据来源系统键 | ||
| created_at          | TIMESTAMP | 创建时间 | ||
| is_removed          | BOOLEAN | 删除标志 | ||
| updated_at          | TIMESTAMP | 更新时间 | ||
| version             | BIGINT | 版本号 | ||


### company_scope

**供应商隔离级别**

所在库： **platform**

字段说明：

| 属性名        | 类型       | 名称           |  主键 |  说明 |
|:------------- |:----------| :--------------|:-----|:-----|
| id            | BIGINT    | 主键            | 是 ||
| org_id        | BIGINT    | 隔离的组织机构id | ||
| org_name      | STRING    | 隔离的组织名称   | ||
| creator_id    | BIGINT    | 添加人主键 | ||
| creator_name  | STRING    | 添加人 | ||
| created_at    | TIMESTAMP | 创建时间 | ||
| modifier_id   | BIGINT    | 修改人主键 | ||
| modifier_name | STRING    | 修改人 | ||
| updated_at    | TIMESTAMP | 修改时间 | ||
| is_removed    | BOOLEAN   | 删除标记 | ||
| version       | BIGINT    | 版本 | ||
### company_org

**供应商（小库，隔离级别数据）**

所在库： **platform**

字段说明：

| 属性名                  | 类型    | 名称 |  主键 |  说明 |
| ---------------------   | ----   | ---- |  ---- |-----|
| id                      | BIGINT | 主键   | 是 ||
| org_id                  | BIGINT | 添加人的组织机构id | 是 ||
| scope_org_id            | BIGINT | 设置隔离的组织机构id | 是 ||
| org_name                | STRING | 添加人的组织名称 | ||
| name                    | STRING | 公司名称 | ||
| name_en                 | STRING | 公司英文名称 | ||
| short_name              | STRING | 短名称 | ||
| credit_code             | STRING | 工程类型id | ||
| cooperation_types       | BIGINT | 社会信用统一代码 | ||
| registered_capital      | DOUBLE | 合作类型（位组合数值） | ||
| legal_person_name       | STRING | 法人姓名 | ||
| business_scope          | STRING | 经营范围 | ||
| company_property        | STRING | 企业性质 | ||
| contact_person_name     | STRING | 联系人姓名 | ||
| contact_person_position | STRING | 联系人职务 | ||
| phone_number            | STRING | 联系电话 | ||
| address                 | STRING | 联系地址 | ||
| bank_deposit            | STRING | 开户银行 | ||
| bank_account            | STRING | 银行账号 | ||
| is_black_list           | BOOLEAN | 是否黑名单 | ||
| is_audited              | BOOLEAN | 是否审核 | ||
| is_approved             | BOOLEAN | 是否审批 | ||
| approve_state           | STRING | 审批状态 | ||
| approve_person_name     | STRING | 审批人 | ||
| approve_time            | STRING | 审批时间 | ||
| remark                  | STRING | 备注 | ||
| company_type            | STRING | 供应商类型 | ||
| integration_id          | STRING | 第三方对接主键 | ||
| original_id             | STRING | 原始ID | ||
| original_system_key     | STRING | 数据来源系统键 | ||
| created_at              | TIMESTAMP | 创建时间 | ||
| is_removed              | BOOLEAN | 删除标志 | ||
| updated_at              | TIMESTAMP | 更新时间 | ||
| version                 | BIGINT | 版本号 | ||

## 基础数据


### g_data_dictionary

**字典管理**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| id            | BIGINT    | 主键id| -- |  |                             
| parent_id     | BIGINT    | 父id| -- |  |            
| full_id       | STRING    | 节点主键链| -- |  |            
| name          | STRING    | 字典名称| -- |  |            
| full_name     | STRING    | 字典节点名称链| -- |  |            
| level         | BIGINT    | 树级别| -- |  |            
| is_leaf       | BOOLEAN   | 是否为子节点| -- |  |
| is_tree       | BOOLEAN   | 是否树形结构| -- | 单位字典库（如果树形结构）  |   
| is_static     | BOOLEAN   | 是否静态| -- |  |        
| code          | STRING    | 编码| -- | 程序内部使用（不能修改） |            
| remark        | STRING    | 备注| -- |  |            
| sort_code     | BIGINT    | 排序| -- |  |            
| creator_id    | BIGINT    | 添加人主键| -- |  |
| creator_name  | STRING    | 添加人| -- |  |
| created_at    | TIMESTAMP | 创建时间| -- |  |
| modifier_id   | BIGINT    | 修改人主键| -- |  |
| modifier_name | STRING    | 修改人| -- |  |
| updated_at    | TIMESTAMP | 修改时间| -- |  |
| is_removed    | BOOLEAN   | 删除标记| -- |  |
| version       | BIGINT    | 版本| -- |  |

### g_statistic_category

**统计类别管理**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------- |:-------------| :-----|:-----|:-----|
| id            | BIGINT | 主键id| -- |  |                             
| parent_id     | BIGINT | 父id| -- |  |            
| full_id       | STRING | 主键链| -- |  |            
| name          | STRING | 名称| -- |  |            
| full_name     | STRING | 名称链| -- |  |            
| level         | BIGINT | 树级别| -- |  |            
| is_leaf       | BOOLEAN| 子节点| -- |  |                      
| material_unit | BIGINT | 单位| -- |  |            
| quantity_rate | DECIMAL(28, 4) | 数量倍率| -- |  |            
| money_rate    | DECIMAL(28, 4)  | 金额倍率| -- |  |
| dict_type     | STRING | 统计类别类型| -- | 字典表里面的code |         
| remark        | STRING | 备注| -- |  |   
| custome_code  | BIGINT | 自定义编码| -- | 程序内部使用  |           
| sort_code     | BIGINT | 排序| -- |  |            
| creator_id    | BIGINT | 添加人主键| -- |  |
| creator_name  | BIGINT | 添加人| -- |  |
| created_at    | TIMESTAMP | 创建时间| -- |  |
| modifier_id   | BIGINT | 修改人主键| -- |  |
| modifier_name | BIGINT | 修改人| -- |  |
| updated_at    | TIMESTAMP | 修改时间| -- |  |
| is_removed    | BOOLEAN  | 删除标记| -- |  |
| version       | BIGINT | 版本| -- |  |

### g_statistic_items

**统计材料信息**

所在库： **mtlp**

字段说明：

|                属性名        | 类型          |   名称 |  主键 |  说明 |
|:---------------------------- |:-------------| :-----|:-----|:-----|
| id            | BIGINT | 主键id| -- |  |
| category_id   | BIGINT | 统计类别id| -- |  |
| category_name | STRING | 统计类别名称| -- |  |
| category_full_name | STRING | 统计类别全称| -- |  |
| dict_type     | STRING | 统计类别类型| -- | 字典表里面的code | 
| material_category_id   | BIGINT | 材料类别id| -- |  |            
| material_category_name | STRING | 材料类别名称| -- |  |            
| material_category_full_name| STRING | 材料类别全称| -- |  |            
| remark        | STRING | 备注| -- |  |
| creator_id    | BIGINT | 添加人主键| -- |  |
| creator_name  | STRING | 添加人| -- |  |
| created_at    | TIMESTAMP | 创建时间| -- |  |
| modifier_id   | BIGINT | 修改人主键| -- |  |
| modifier_name | STRING | 修改人| -- |  |
| updated_at    | TIMESTAMP | 修改时间| -- |  |
| is_removed    | BOOLEAN  | 删除标记| -- |  |
| version       | BIGINT | 版本| -- |  |

### c_material_template

**常用材料模板**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:---------------------  |:---------------| :-----|:-----|:-----|
| id                     | BIGINT         | 主键id  | -- |  |                             
| org_id                 | BIGINT         | 复合主键组织机构id| -- |  | 
| template_name          | STRING         | 模板名称| -- | 公路工程、地铁工程、房建工程、铁路工程 |  
| material_id            | BIGINT         | 材料id  | -- |                               
| material_code          | STRING         | 材料编码| -- |  |            
| material_name          | STRING         | 材料名称| -- |  |            
| material_model         | STRING         | 规格型号| -- |  |            
| material_unit          | STRING         | 主单位| -- |  |            
| first_conversion_rate  | DECIMAL(28, 4) | 转换率1| -- |  |            
| first_auxiliary_unit   | STRING         | 辅单位1| -- |  |            
| second_conversion_rate | DECIMAL(28, 4) | 转换率2| -- |  |            
| second_auxiliary_unit  | STRING         | 辅单位2| -- |  |            
| class_id               | BIGINT         | 材料类别id| -- |  |            
| class_full_id          | STRING         | 材料类别主键链| -- |  |    
| class_type             | INT            | 材料类型| -- | 0是消耗 1是周转 |        
| bid_price              | DECIMAL(28, 10)| 投标价| -- |  |            
| cost_price             | DECIMAL(28, 10)| 责任成本价| -- |  |            
| purchase_price         | DECIMAL(28, 10)| 采购价或者计划价| -- |  |            
| is_weight              | BOOLEAN        | 是否称重材料| -- |  |            
| is_confirm             | BOOLEAN        | 是否到料确认| -- |  |            
| deduction_rate         | DECIMAL(28, 4) | 抵扣系数或者暗扣| -- |  |            
| loss_rate              | DECIMAL(28, 4) | 损耗系数| -- |  |            
| ori_material_id        | STRING         | 第三方对材料id| -- |  |            
| ori_class_id           | STRING         | 第三方对接材料类别id| -- |  |            
| ori_org_id             | STRING         | 第三方对接组织id| -- |  |            
| remark                 | STRING         | 备注| -- |  |            
| sort_code              | BIGINT         | 排序| -- |  |
| creator_id             | BIGINT         | 添加人主键| -- |  |
| creator_name           | STRING         | 添加人| -- |  |
| created_at             | TIMESTAMP      | 创建时间| -- |  |
| modifier_id            | BIGINT         | 修改人主键| -- |  |
| modifier_name          | STRING         | 修改人| -- |  |
| updated_at             | TIMESTAMP      | 修改时间| -- |  |
| is_removed             | BOOLEAN        | 删除标记| -- |  |
| version                | BIGINT         | 版本| -- |  |

### c_equipment

**机械设备信息**

所在库： **mtlp**

字段说明：

|     属性名        | 类型           | 名称 |  主键 |  说明 |
|:-----------------|:---------------| :-----|:-----|:-----|
| id               | BIGINT   | 主键id| -- |  |
| org_id           | BIGINT   | 组织机构主键| -- |  |
| org_name         | STRING   | 所属单位| -- |  |
| name             | STRING   | 设备名称| -- |  |
| model            | STRING   | 型号| -- |  |
| spec             | STRING   | 规格| -- |  |
| number_plate     | STRING   | 车牌号| -- |  |
| management_number| STRING   | 管理编号| -- |  |
| ori_equipment_id | STRING   | 第三方对接设备id| -- |  |
| ori_org_id       | STRING   | 第三方对接组织id| -- |  |
| remark           | STRING   | 备注| -- |  |
| creator_id       | BIGINT   | 添加人主键| -- |  |
| creator_name     | STRING   | 添加人| -- |  |
| created_at       | TIMESTAMP| 创建时间| -- |  |
| modifier_id      | BIGINT   | 修改人主键| -- |  |
| modifier_name    | STRING   | 修改人| -- |  |
| updated_at       | TIMESTAMP| 修改时间| -- |  |
| is_removed       | BOOLEAN  | 删除标记| -- |  |
| version          | BIGINT   | 版本| -- |  |

### g_people

**物资人员信息**

所在库： **mtlp**

字段说明：

|         属性名        | 类型      | 名称 |  主键 |  说明 |
|:---------------------|:----------| :-----|:-----|:-----|
| id                   | BIGINT    | 主键id| 是  |  |
| org_id               | BIGINT    | 组织机构主键| -- |  |
| org_name             | STRING    | 所属单位| -- |  |
| sort_code            | INT       | 排序| -- |  |
| name                 | STRING    | 姓名| -- |  |
| gender               | BOOLEAN   | 性别| -- | false 男，true 女 |
| hometown             | STRING    | 籍贯| -- |  |
| identification_number| STRING    | 身份证号码| -- |  |
| age                  | INT       | 年龄| -- |  |
| begin_date           | STRING    | 参加工作时间| -- |  |
| working_years        | DECIMAL(28, 4)| 从事物资工作年限| -- |  |
| first_degree         | STRING    | 第一学历| -- | 来源字典库 |
| graduated_school     | STRING    | 毕业学校| -- | 来源字典库 |
| major                | STRING    | 所学专业| -- |  |
| highest_education    | STRING    | 最高学历| -- |  |
| job_title            | STRING    | 职称| -- |  |
| employer             | STRING    | 工作单位| -- |  |
| post                 | STRING    | 岗位| -- |  |
| employment_properties|  STRING    | 用工性质| -- |  |
| contact_number       | STRING    | 联系电话| -- |  |
| qq_number            | STRING    | QQ号| -- |  |
| company_training     | STRING    | 参加集团公司培训情况| -- |  |
| material_certificate | BOOLEAN   | 是否取得材料员上岗证| -- |  |
| other_certificate    | BOOLEAN   | 是否取得其他资格证书| -- |  |
| issue_date           | STRING    | 物资部长/副部长红头文件下文时间| -- |  |
| creator_id           | BIGINT    | 添加人主键| -- |  |
| creator_name         | STRING    | 添加人| -- |  |
| created_at           | TIMESTAMP | 创建时间| -- |  |
| modifier_id          | BIGINT    | 修改人主键| -- |  |
| modifier_name        | STRING    | 修改人| -- |  |
| updated_at           | TIMESTAMP | 修改时间| -- |  |
| is_removed           | BOOLEAN   | 删除标记| -- |  |
| version              | BIGINT    | 版本| -- |  |


### g_system_doucument

**模块文档**

所在库： **mtlp**

字段说明：

| 属性名        | 类型      | 名称 |  主键 |  说明 |
|:----------   |:----------| :-----|:-----|:-----|
| id           | BIGINT | 主键id| 是 |  | 
| name         | STRING| 名称| -- |  |
| title        | STRING| 标题| -- |  |
| instructions | STRING| 说明| -- |  |            
| content      | STRING| 内容| -- |  |  
| remark       | STRING| 备注| -- |  | 
| is_enable    | BOOLEAN| 启用状态| -- |  |
| sort_code    | INT    | 排序| -- |  |
| creator_id   | BIGINT | 添加人主键| -- |  |
| creator_name | STRING| 添加人| -- |  |
| created_at   | TIMESTAMP|创建时间| -- |  |
| modifier_id  | BIGINT | 修改人主键| -- |  |
| modifier_name| STRING| 修改人| -- |  |
| updated_at   | TIMESTAMP|修改时间| -- |  |
| is_removed   | BOOLEAN|删除标记| -- |  |
| version      | BIGINT | 版本| -- |  |
### g_common_data_dictionary

**单位字典管理**

所在库： **mtlp**

字段说明：

|         属性名        | 类型      | 名称 |  主键 |  说明 |
|:---------------------|:----------| :-----|:-----|:-----|
| id            | BIGINT    | 主键id| -- |  |
| org_id                 | BIGINT         | 复合主键组织机构id| -- |  |                             
| parent_id     | BIGINT    | 父id| -- |  |            
| full_id       | STRING    | 节点主键链| -- |  |            
| name          | STRING    | 字典名称| -- |  |
| full_name     | STRING    | 字典节点名称链| -- |  |              
| dict_type     | STRING    | 字典类型| -- |  |            
| level         | BIGINT    | 树级别| -- |  |            
| is_leaf       | BOOLEAN   | 是否为子节点| -- |  |
| is_tree       | BOOLEAN   | 是否树形结构| -- |  |         
| code          | STRING    | 编码| -- |  |            
| remark        | STRING    | 备注| -- |  |            
| sort_code     | BIGINT    | 排序| -- |  |            
| creator_id    | BIGINT    | 添加人主键| -- |  |
| creator_name  | STRING    | 添加人| -- |  |
| created_at    | TIMESTAMP | 创建时间| -- |  |
| modifier_id   | BIGINT    | 修改人主键| -- |  |
| modifier_name | STRING    | 修改人| -- |  |
| updated_at    | TIMESTAMP | 修改时间| -- |  |
| is_removed    | BOOLEAN   | 删除标记| -- |  |
| version       | BIGINT    | 版本| -- |  |

### g_attachment

**附件表**

所在库： **mtlp**

字段说明：

|    属性名    | 类型    | 名称  |  主键 |  说明 |
|:-------------|:-------| :-----|:-----|:-----|
| id           | STRING | 主键| -- |  |
| org_id       | STRING | 组织机构| -- |  |
| order_id     | STRING | 主表主键| -- |  |
| product      | STRING | 产品名称| -- |  |
| module       | STRING | 模块名称| -- |  |
| name         | STRING | 附件名称| -- |  |
| url          | STRING | 附件地址| -- |  |
| size         | STRING | 附件大小| -- |  |
| type         | STRING | 附件类型| -- |  |
| remark       | STRING | 备注| -- |  |
| sort_code    | STRING | 排序| -- |  |
| is_disable   | BOOLEAN| 是否启用| -- |  |
| creator_id   | STRING | 添加人主键| -- |  |
| creator_name | STRING | 添加人| -- |  |
| created_at   | TIMESTAMP| 创建时间| -- |  |
| modifier_id  | STRING | 修改人主键| -- |  |
| modifier_name| STRING| 修改人| -- |  |
| updated_at   | TIMESTAMP| 修改时间| -- |  |
| is_removed   | BOOLEAN| 删除标记| -- |  |
| version      | STRING | 版本| -- |  |

### g_system_user_config

**用户打印配置（纸质大小设置等）**

所在库： **mtlp**

字段说明：

|         属性名        | 类型      | 名称 |  主键 |  说明 |
|:---------------------|:----------| :-----|:-----|:-----|
| id            | BIGINT   | 主键id| -- |  | 
| user_name     | STRING   | 名称| -- |  |
| user_id       | BIGINT   | 用户id| -- |  |
| instructions  | STRING   | 说明| -- |  |  
| print_template| STRING   | 模板| -- |  |       
| code          | STRING   | 编码| -- |  |                 
| content       | STRING   | 内容| -- |  |  
| remark        | STRING   | 备注| -- |  | 
| is_enable     | BOOLEAN  | 启用状态| -- |  |
| sort_code     | INT      | 排序| -- |  |
| creator_id    | BIGINT   | 添加人主键| -- |  |
| creator_name  | STRING   | 添加人| -- |  |
| created_at    | TIMESTAMP| 创建时间| -- |  |
| modifier_id   | BIGINT   | 修改人主键| -- |  |
| modifier_name | STRING   | 修改人| -- |  |
| updated_at    | TIMESTAMP| 修改时间| -- |  |
| is_removed    | BOOLEAN  | 删除标记| -- |  |
| version       | BIGINT   | 版本| -- |  |

## 常用数据管理


### c_material

**常用材料**

所在库： **mtlp**

字段说明：

| 属性名                 | 类型            | 名称 |  主键 |  说明 |
|:---------------------  |:---------------| :-----|:-----|:-----|
| id                     | BIGINT         | 主键id  | -- |  |                             
| org_id                 | BIGINT         | 复合主键组织机构id| -- |  |                           
| material_code          | STRING         | 材料编码| -- |  |            
| material_name          | STRING         | 材料名称| -- |  |            
| material_model         | STRING         | 规格型号| -- |  |            
| material_unit          | STRING         | 主单位| -- |  |            
| first_conversion_rate  | DECIMAL(28, 4) | 转换率1| -- |  |            
| first_auxiliary_unit   | STRING         | 辅单位1| -- |  |            
| second_conversion_rate | DECIMAL(28, 4) | 转换率2| -- |  |            
| second_auxiliary_unit  | STRING         | 辅单位2| -- |  |            
| class_id               | BIGINT         | 材料类别id| -- |  |            
| class_full_id          | STRING         | 材料类别主键链| -- |  |    
| class_type             | INT            | 材料类型| -- |  |        
| bid_price              | DECIMAL(28, 10)| 投标价| -- |  |            
| cost_price             | DECIMAL(28, 10)| 责任成本价| -- |  |            
| purchase_price         | DECIMAL(28, 10)| 采购价或者计划价| -- |  |            
| is_weight              | BOOLEAN        | 是否称重材料| -- |  |            
| is_confirm             | BOOLEAN        | 是否到料确认| -- |  |            
| deduction_rate         | DECIMAL(28, 4) | 抵扣系数或者暗扣| -- |  |            
| loss_rate              | DECIMAL(28, 4) | 损耗系数| -- |  |            
| ori_material_id        | STRING         | 第三方对材料id| -- |  |            
| ori_class_id           | STRING         | 第三方对接材料类别id| -- |  |            
| ori_org_id             | STRING         | 第三方对接组织id| -- |  |            
| remark                 | STRING         | 备注| -- |  |            
| sort_code              | BIGINT         | 排序| -- |  |
| creator_id             | BIGINT         | 添加人主键| -- |  |
| creator_name           | STRING         | 添加人| -- |  |
| created_at             | TIMESTAMP      | 创建时间| -- |  |
| modifier_id            | BIGINT         | 修改人主键| -- |  |
| modifier_name          | STRING         | 修改人| -- |  |
| updated_at             | TIMESTAMP      | 修改时间| -- |  |
| is_removed             | BOOLEAN        | 删除标记| -- |  |
| version                | BIGINT         | 版本| -- |  |
  
### c_supplier

**常用供应商**

所在库： **mtlp**

字段说明：

| 属性名         |    类型        | 名称  |  主键 |  说明 |
|:------------- |:---------------| :-----|:-----|:-----|
| id                  | BIGINT   | 主键id| -- |  | 
| org_id              | BIGINT   | 复合主键组织机构id| -- |  |   
| supplier_name       | STRING   | 供应商名称| -- |  | 
| supplier_abb_name   | STRING   | 供应商简称| -- |  |
| supplier_contact    | STRING   | 联系人| -- |  |
| supplier_phone      | STRING   | 联系电话| -- |  |
| supplier_org_code   | STRING   | 统一社会信用代码| -- |  |
| supplier_type_name  | STRING   | 供应商类别| -- |  |
| bank                | STRING   | 开户银行| -- |  |
| bank_account        | STRING   | 银行账号| -- |  |
| is_black_list       | BOOLEAN  | 是否是黑名单| -- |  |
| ori_supplier_id     | STRING   | 第三方对接供应商id| -- |  |
| ori_org_id          | STRING   | 第三方对接组织id| -- |  |
| remark              | STRING   | 备注| -- |  |
| sort_code           | BIGINT   | 排序| -- |  |
| creator_id          | BIGINT   | 添加人主键| -- |  |
| creator_name        | STRING   | 添加人| -- |  |
| created_at          | TIMESTAMP| 创建时间| -- |  |  
| modifier_id         | BIGINT   | 修改人主键| -- |  |
| modifier_name       | STRING   | 修改人| -- |  |
| updated_at          | TIMESTAMP| 修改时间| -- |  |
| is_removed          | BOOLEAN  | 删除标记| -- |  |
| version             | BIGINT   | 版本| -- |  |

### c_labour

**常用用料单位**

所在库： **mtlp**

字段说明：

|      属性名        |    类型     |   名称   |  主键 |  说明 |
|:----------------- |:------------| :--------|:-----|:-----|
| id                | BIGINT      | 主键id| -- |  | 
| org_id            | BIGINT      | 复合主键组织机构id| -- |  |   
| org_name          | STRING      | 组织名称| -- |  |
| labour_name       | STRING      | 用料单位名称| -- |  | 
| labour_abb_name   | STRING      | 用料单位简称| -- |  |
| labour_contact    | STRING      | 联系人| -- |  |
| labour_phone      | STRING      | 联系电话| -- |  |
| labour_org_code   | STRING      | 统一社会信用代码| -- |  |
| labour_type_name  | STRING      | 队伍类别| -- |  |
| is_black_list     | BIGINT      | 是否是黑名单| -- |  |
| ori_labour_id     | STRING      | 第三方对接用料单位id| -- |  |
| ori_org_id        | STRING      | 第三方对接组织id| -- |  |
| remark            | STRING      | 备注| -- |  |
| sort_code         | BIGINT      | 排序| -- |  |
| creator_id        | BIGINT      | 添加人主键| -- |  |
| creator_name      | STRING      | 添加人| -- |  |
| created_at        | TIMESTAMP   | 创建时间| -- |  |  
| modifier_id       | BIGINT      | 修改人主键| -- |  |
| modifier_name     | STRING      | 修改人| -- |  |
| updated_at        | TIMESTAMP   | 修改时间| -- |  |
| is_removed        | BIGINT      | 删除标记| -- |  |
| version           | BIGINT      | 版本| -- |  |

### c_gh

**工号管理**

所在库： **mtlp**

字段说明：

| 属性名        | 类型           | 名称 |  主键 |  说明 |
|:------------------ |:-----------| :-----|:-----|:-----|
| id                 | BIGINT     | 主键id| -- |  |                             
| org_id             | BIGINT     | 组织id| -- |  |                             
| parent_id          | BIGINT     | 父id| -- |  |                             
| full_id            | STRING     | 节点主键链 11|22| -- |  |            
| name               | STRING     | 工号名称| -- |  |            
| full_name          | STRING     | 工号节点名称链| -- | 用'|'把名称连接起来  |              
| level              | BIGINT     | 树级别| -- |  |            
| is_leaf            | BOOLEAN    | 是否为子节点| -- |  |            
| start_time         | STRING     | 开工时间| -- |  |            
| end_time           | STRING     | 结束时间| -- |  |            
| gh_state           | STRING     | 工号状态| -- |  |            
| is_delivery        | BOOLEAN    | 发料工号| -- |  |            
| is_check           | BOOLEAN    | 核算工号| -- |  |  
| delivery_id        | BIGINT     | 上级发料工号id| -- |  |
| delivery_name      | STRING     | 上级发料工号名称| -- |  |
| delivery_full_name | STRING     | 上级发料工号全称| -- |  |          
| remark             | STRING     | 备注| -- |  |    
| sort_code          | BIGINT     | 排序| -- |  |                    
| ori_gh_id          | STRING     | 第三方对接工号id| -- |  |            
| ori_org_id         | STRING     | 第三方对接组织id| -- |  |            
| creator_id         | BIGINT     | 添加人主键| -- |  |
| creator_name       | STRING     | 添加人| -- |  |
| created_at         | TIMESTAMP  | 创建时间| -- |  |
| modifier_id        | BIGINT     | 修改人主键| -- |  |
| modifier_name      | STRING     | 修改人| -- |  |
| updated_at         | TIMESTAMP  | 修改时间| -- |  |
| is_removed         | BOOLEAN    | 删除标记| -- |  |
| version            | BIGINT     | 版本| -- |  |


### c_gh_labour

**工队工号关系表**

所在库： **mtlp**

字段说明：

| 属性名        | 类型     | 名称 |  主键 |  说明 |
| id           | BIGINT   | 主键id| 是 |  |
| labour_id    | BIGINT   | 用料单位主键| -- |  |
| labour_name  | STRING   | 用料单位名称| -- |  |
| gh_id        | BIGINT   | 工号主键| -- |  |
| gh_full_id   | STRING   | 工号主键链| -- |  |
| gh_name      | STRING   | 工号名称| -- |  |
| gh_full_name | STRING   | 工号全称| -- |  |
| creator_id   | BIGINT   | 添加人主键| -- |  |
| creator_name | STRING   | 添加人| -- |  |
| created_at   | TIMESTAMP| 创建时间| -- |  |
| modifier_id  | BIGINT   | 修改人主键| -- |  |
| modifier_name| STRING   | 修改人| -- |  |
| updated_at   | TIMESTAMP| 修改时间| -- |  |
| is_removed   | BOOLEAN  | 删除标记| -- |  |
| version      | BIGINT   | 版本| -- |  |

## 系统配置


### g_system_setting

**系统配置**
表说明：主要是为了设置各个子系统使用的一些全局参数或者特殊设置

所在库： **mtlp**

字段说明：

| 属性名        | 类型          | 名称              |  主键 |  说明 |
|:------------- |:-------------|:------------------ |:----- |:-----|
| id            | BIGINT       | 主键               | 是    |      |
| product_code  | STRING       | 产品编码           | -- |  |
| name          | STRING       | 名称               | -- | | 
| instructions  | STRING       | json配置串         | -- | |
| content       | STRING       | 界面化json配置      |-- | | 
| remark        | STRING       | 备注               |-- | | 
| is_enable     | BOOLEAN      | 启用状态           |-- | |
| sort_code     | INT          | 排序               |-- | |
| creator_id    | BIGINT       | 添加人主键          |-- | |
| creator_name  | STRING       | 添加人              |-- | |
| created_at    | TIMESTAMP    | 创建时间            |-- | |
| modifier_id   | BIGINT       | 修改人主键          |-- | |
| modifier_name | STRING       | 修改人              |-- | |
| updated_at    | TIMESTAMP    | 修改时间            |-- | | 
| is_removed    | BOOLEAN      | 删除标识            |-- | true 删除 false 未删除 | 
| version       | BIGINT       | 版本                |-- |         |
| interfacial   | STRING       |                     |--  | 废弃字段 | 
| print_id      | BIGINT       | 打印主键id           |-- | 废弃字段 | 
| message_id    | BIGINT       | 消息id               |-- | 废弃字段 | 
| excel_id      | BIGINT       | 导出id               |-- | 废弃字段 | 
### g_system_excel

**excel导出配置**

所在库： **mtlp**

字段说明：

| 属性名        | 类型          | 名称  |  主键 |  说明 |
|:------------- |:-------------|:------------------ |:----- |:-----|
| id            | BIGINT       | 主键               | 是    |      |
| name          | STRING       | 名称               | -- | | 
| content       | STRING       | json配置           |-- | | 
| remark        | STRING       | 备注               |-- | | 
| is_enable     | BOOLEAN      | 启用状态           |-- | |
| sort_code     | INT          | 排序               |-- | |
| creator_id    | BIGINT       | 添加人主键          |-- | |
| creator_name  | STRING       | 添加人              |-- | |
| created_at    | TIMESTAMP    | 创建时间            |-- | |
| modifier_id   | BIGINT       | 修改人主键          |-- | |
| modifier_name | STRING       | 修改人              |-- | |
| updated_at    | TIMESTAMP    | 修改时间            |-- | | 
| is_removed    | BOOLEAN      | 删除标识            |-- | true 删除 false 未删除 | 
| version       | BIGINT       | 版本                |-- | | 
### g_system_print

**打印模板配置**

所在库： **mtlp**

字段说明：

| 属性名        | 类型          | 名称  |  主键 |  说明 |
|:------------- |:-------------|:------------------ |:----- |:-----|
| id            | BIGINT       | 主键               | 是    |      |
| name          | STRING       | 名称               | -- | | 
| content       | STRING       | json配置           |-- | | 
| remark        | STRING       | 备注               |-- | | 
| is_enable     | BOOLEAN      | 启用状态           |-- | |
| sort_code     | INT          | 排序               |-- | |
| creator_id    | BIGINT       | 添加人主键          |-- | |
| creator_name  | STRING       | 添加人              |-- | |
| created_at    | TIMESTAMP    | 创建时间            |-- | |
| modifier_id   | BIGINT       | 修改人主键          |-- | |
| modifier_name | STRING       | 修改人              |-- | |
| updated_at    | TIMESTAMP    | 修改时间            |-- | | 
| is_removed    | BOOLEAN      | 删除标识            |-- | true 删除 false 未删除 | 
| version       | BIGINT       | 版本                |-- | | 
### g_system_third_part

**第三方对接配置**

所在库： **mtlp**

字段说明：

| 属性名         | 类型         | 名称               |  主键 |  说明 |
|:------------- |:-------------|:------------------ |:----- |:-----|
| id            | BIGINT       | 主键               | 是    |      |
| name          | STRING       | 名称               | -- | | 
| content       | STRING       | json配置           |-- | | 
| remark        | STRING       | 备注               |-- | | 
| is_enable     | BOOLEAN      | 启用状态           |-- |true（默认） 启用 false未启用 |
| sort_code     | INT          | 排序               |-- | |
| creator_id    | BIGINT       | 添加人主键          |-- | |
| creator_name  | STRING       | 添加人              |-- | |
| created_at    | TIMESTAMP    | 创建时间            |-- | |
| modifier_id   | BIGINT       | 修改人主键          |-- | |
| modifier_name | STRING       | 修改人              |-- | |
| updated_at    | TIMESTAMP    | 修改时间            |-- | | 
| is_removed    | BOOLEAN      | 删除标识            |-- | true 删除 false（默认）未删除 | 
| version       | BIGINT       | 版本                |-- | | 

## 监控配置

### g_video_configure

**视频监控配置表**

所在库： **mtlp**

字段说明：

| 属性名             | 类型 | 名称  | 主键 | 说明 |
| ----------------  | ---- | ---- |  ---- |-----|
| id           | BIGINT | 主键 | 是 ||
| org_id       | BIGINT | 组织机构主键 | ||
| org_name     | STRING | 组织机构名称 | ||
| sort_code    | BIGINT | 序号 | ||
| remark       | STRING | 备注 | ||
| creator_id   | BIGINT | 添加人主键 | ||
| creator_name | STRING | 添加人 | ||
| created_at   | TIMESTAMP | 创建时间 | ||
| modifier_id  | BIGINT | 修改人主键 | ||
| modifier_name| STRING | 修改人 | ||
| updated_at   | TIMESTAMP | 修改时间 | ||
| is_removed   | BOOLEAN | 删除标记 | ||
| version      | BIGINT | 版本 | ||


### g_video_configure_item

**视频监控配置细表**

所在库： **mtlp**

字段说明：

| 属性名            | 类型 | 名称  | 主键 | 说明 |
| ----------------  | ---- | ---- |  ---- |-----|
| id                | BIGINT | 主键 | 是 ||
| order_id          | BIGINT | 主表主键 | 是 ||
| org_id            | BIGINT | 组织机构主键 | ||
| org_name          | STRING | 组织机构名称 | ||
| equipment_name    | STRING | 设备名称 | ||
| equipment_no      | STRING | 设备序列号 | ||
| equipment_channel | STRING | 设备通道 | ||
| rtmp_url          | STRING | RTMP播放地址 | ||
| hls_url           | STRING | HLS播放地址 | ||
| sort_code         | BIGINT | 序号 | ||
| remark            | STRING | 备注 | ||
| creator_id | BIGINT | 添加人主键 | ||
| creator_name | STRING | 添加人 | ||
| created_at | TIMESTAMP | 创建时间 | ||
| modifier_id | BIGINT | 修改人主键 | ||
| modifier_name | STRING | 修改人 | ||
| updated_at | TIMESTAMP | 修改时间 | ||
| is_removed | BOOLEAN | 删除标记 | ||
| version | BIGINT | 版本 | ||
