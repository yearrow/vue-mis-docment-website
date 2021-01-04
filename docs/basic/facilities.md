# 常用公共功能


## excel导入/导出

## 打印

## app打印
### 使用步骤
  1、前端站点引入选择打印机 choose-printer.vue 页面， 路由名称和路径为 choosePrinter。 打印单据的时候打印机判断没有连接打印机，或者连接失效，会跳转到打印页面

  2、引用 import print from '@yearrow/js-bluetooth-print-library'

  3、注意首页 检查一下版本号和蓝牙是否打开

  ```
   mounted () {
      print.checkVersion(this) // 检查版本号
      print.checkPrinter(this) // 检查蓝牙是否打开，初始化打印机名称
   }  
  ``` 
  
  4、获取蓝牙名称 const name = this.cache.getItem('DEVICE_NAME')

### 打印模板
#### 1、printOrder 打印单据流式模式（针式、热敏打印机都支持） 超过打印纸的宽度就自动换行
    使用配置说明 
        const templateData = {
          order: {
            id:805597885583360,
            supplierName: '天水田烨矿业有限公司',
            orderCode: '收料-20200800001',
            orgName: '北海西村港跨海大桥工程',
            exitTime: '2020-07-24 11:12:59',
            plateNumber: '陕A.123456',
            maker: '王晓燕',
            makerDate: '2020-07-24' 
          },
          orderItem:[{
            materialName:'钢管',
            materialModel :'中型',
            netQuantity:8229.7806,
            materialUnit:'吨',
            remark:'测试备注',
            id:805597886205952 
          },
          {
            materialName:'钢管1',
            materialModel :'中型1',
            netQuantity:8229.7806,
            materialUnit:'吨',
            remark:'测试备注',
            id:805597886205953 
          }]
        }

        
        const templateConf = {
            titleName: '收料单',
            signature: '送料人：       收料人：       监收人：     ',
            orderModel: [{
              prop: 'supplierName',
              label: '供应商'
            },{
              prop: 'exitTime',
              label: '入库时间'
            }, {
              prop: 'plateNumber',
              label: "车牌号"
            }],
            itemsModel: [{
              prop: 'materialName',
              label: '材料名称'
            }, {
              prop: 'materialModel',
              label: '规格型号'
            }, {
              prop: "netQuantity,materialUnit",
              label: '数    量'
            }, {
              prop: 'remark',
              label: '备    注'
            }]
          }
        print.printOrder( this, templateConf, templateData)

#### 2、printMaterialQRCode （热敏打印机）材料二维码打印，（打印类似左边显示内容，右边显示二维码都可以使用此模板）
  const templateData = [{
            materialName:'钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管钢管',
            materialModel :'钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#钢管钢管钢1#',
            materialUnit:'吨吨吨吨吨吨吨',
            id:805597886205952 
          }]
        const templateConf = [{
              prop: 'materialName',
              label: '材料名称',
              maxLins: 3,
              fontNum: 18
            }, {
              prop: 'materialModel',
              label: '规格型号',
              maxLins: 5,
              fontNum: 7,
              rightQRCode: true
            }, {
              prop: "materialUnit",
              label: '单   位',
              maxLins: 1,
              fontNum: 5
            }]
        print.printMaterialQRCode( this, templateConf, templateData)

#### 3、printOrderTable 支持热敏打印机（中间是表格的样子）  
  const templateData = {
          order: {
            id:805597885583360,
            supplierName: '天水田烨矿业有限公司',
            orderCode: '收料-20200800001',
            orgName: '北海西村港跨海大桥工程名字很长名字很长名字很长名字很长名字很长',
            exitTime: '2020-07-24 11:12:59',
            plateNumber: '陕A.123456',
            maker: '王晓燕',
            makerDate: '2020-07-24' 
          },
          orderItem:[{
            materialName:'钢管名字很长名字很长名字很长',
            materialModel :'规格型号名字很长名字很长',
            netQuantity: 1250.7806,
            materialUnit:'立方米',
            remark:'测试备注数据',
            id:805597886205952 
          },
          {
            materialName:'钢管1',
            materialModel :'中型1',
            netQuantity: 8229.7806,
            materialUnit:'根',
            remark:'测试备注数据',
            id:805597886205953 
          }]
        }
        
        const templateConf = {
            titleName: '收料单',
            signature: '送料人：       收料人：       监收人：     ',
            orderModel: [{
              prop: 'supplierName',
              label: '供应商'
            },{
              prop: 'exitTime',
              label: '入库时间'
            }, {
              prop: 'plateNumber',
              label: "车牌号"
            }],
            itemsModel: [{
              prop: 'materialName,materialModel',
              label: '材料信息',
              widthStart: 0,  // 第一列起始位0 
              fontNum: 10     // 打印10个汉字，超过换行
            }, {
              prop: "netQuantity,materialUnit",
              label: '数量',
              widthStart: 250, // 第二列从250点开始打印
              fontNum: 6  // 打印6个汉字，超过换行
            }, {
              prop: 'remark',
              label: '备注',
              widthStart: 410, // 第三列从410点开始打印
              fontNum: 5 // 打印5个汉字，超过换行
            }]
          }

        print.printOrderTable( this, templateConf, templateData)       
