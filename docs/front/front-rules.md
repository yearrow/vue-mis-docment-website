#  前端开发规范
## 基础元素

该范围阐述的基础元素规范适用于前端开发中`element-mini-ui`、`element-extension`、`所有站点`。

### 色彩




#### 主色

<div class="color-block-large" 
    style="background:#2980B9">
    Primary 
    <br/> 
    #2980B9
</div>

<div style="display:flex;">
    <div class="color-block-tiny" style="background:#5a92c1">L1</div>
    <div class="color-block-tiny" style="background:#78a2c9">L2</div>
    <div class="color-block-tiny" style="background:#90b0d0">L3</div>
    <div class="color-block-tiny" style="background:#a4bdd8">L4</div>
    <div class="color-block-tiny" style="background:#b7cadf">L5</div>
    <div class="color-block-tiny" style="background:#c7d5e6">L6</div>
    <div class="color-block-tiny" style="background:#d7e1ec">L7</div>
    <div class="color-block-tiny" style="background:#e5ebf3">L8</div>
    <div class="color-block-tiny" style="background:#f2f5f9">L9</div>
</div>

#### 辅助色

>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<div class="color-block-normal" 
    style="background:#2FCB71">
    Success 
    <br/> 
    #2FCB71
</div>

<div style="display:flex;">
    <div class="color-block-tiny" style="background:#c8ecd2">L</div>
    <div class="color-block-tiny" style="background:#e5f5ea">Lr</div>
</div>

<div class="color-block-normal" 
    style="background:#F1C40F">
    Warning 
    <br/> 
    #F1C40F
</div>

<div style="display:flex;">
    <div class="color-block-tiny" style="background:#f9e9c6">L</div>
    <div class="color-block-tiny" style="background:#fcf4e4">Lr</div>
</div>


<div class="color-block-normal" 
    style="background:#E74C3C">
    Danger 
    <br/> 
    #E74C3C
</div>

<div style="display:flex;">
    <div class="color-block-tiny" style="background:#f6cbc9">L</div>
    <div class="color-block-tiny" style="background:#fae7e6">Lr</div>
</div>


<div class="color-block-normal" 
    style="background:#95A5A6">
    Info 
    <br/> 
    #95A5A6
</div>

<div style="display:flex;">
   <div class="color-block-tiny" style="background:#dbdfe0">L</div>
    <div class="color-block-tiny" style="background:#eef0f0">Lr</div>
</div>


#### 中性色

>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构

文本色

<div class="color-block-normal" 
    style="background:#303133">
    主要文字(textPrimary)  
    <br/> 
    #95A5A6
</div>

<div class="color-block-normal" 
    style="background:#606266">
    常规文字(textRegular)  
    <br/> 
    #95A5A6
</div>

<div class="color-block-normal" 
    style="background:#909399">
    次要文字(textSecondary) 
    <br/> 
    #95A5A6
</div>

<div class="color-block-normal" 
    style="background:#C0C4CC">
    占位文字(textPlaceholder) 
    <br/> 
    #95A5A6
</div>

边框色


<div class="color-block-normal" 
    style="background:#E4E7ED;color:#606266;">
    常规(borderColorB)  
    <br/> 
    #E4E7ED
</div>


<div class="color-block-normal" 
    style="background:#F2F6FC;color:#606266;">
    浅色(borderColorL) 
    <br/> 
    #F2F6FC
</div>

背景色

> 不同的区域之间叠加需用不同的背景色区分，体现出层次感。

<div class="color-block-normal" 
    style="background:#F5F7FA;color:#606266;">
    页面背景色(backgroundColorB) 
    <br/> 
    #F5F7FA
</div>
<div class="color-block-normal" 
    style="background:#FFFFFF;color:#606266;">
    页面背景色(backgroundColorL) 
    <br/> 
    #FFFFFF
</div>


::: tip
 所有的色值在使用时都定义为了全局变量，使用时在样式类中直接使用即可;
 请参照变量中的定义使用；
:::

色值变量：

```js
const variate = {
  white,
  black,
  primary,
  primaryL1,
  primaryL2,
  primaryL3,
  primaryL4,
  primaryL5,
  primaryL6,
  primaryL7,
  primaryL8,
  primaryL9,
  success,
  successL,
  successLr,
  info,
  infoL,
  infoLr,
  warning,
  warningL,
  warningLr,
  danger,
  dangerL,
  dangerLr,
  textPrimary,
  textRegular,
  textSecondary,
  textPlaceholder,
  borderColorB,
  borderColorL,
  backgroundColorB,
  backgroundColorL,
}
```

使用示例：

```css
.mian-page{
    background: $backgroundColorB;
    color: $textPrimary;
    border: 1px solider $borderColorL;
}
```

### 边框

#### 线条

<div class="only-block-normal"
    style="color:#606266;border:1px #DCDFE6 solid">
    实线
    <br/>
    border:1px #DCDFE6 solid
</div>


<div class="only-block-normal"
    style="color:#606266;border:2px #DCDFE6 dotted">
    虚线
    <br/>
    border:2px #DCDFE6 dotted
</div>

边框线条在全局中有公共类

```css
// 边框
.g-border-solid{
    border:1px $border solid;
}
.g-border-l-solid{
    border:1px $borderL solid;
}
.g-border-dotted{
    border:2px $border dotted;
}
.g-border-l-dotted{
    border:2px $borderL dotted;
}
```
#### 圆角


<div class="only-block-normal"
    style="color:#606266;border:1px #DCDFE6 solid;border-radius: 4px">
    正常圆角(borderRadiusBase)
    <br/>
    border-radius: 4px
</div>

<div class="only-block-normal"
    style="color:#606266;border:1px #DCDFE6 solid;border-radius: 2px">
    小圆角(borderRadiusSmall)
    <br/>
    border-radius: 2px
</div>

圆角以变量方式提供

变量

```js
const variate = {
  borderRadiusB,
  borderRadiusS,
}
```

使用示例：

```css
.div-demo{
    border-radius: $borderRadiusB;
}
```
#### 投影

<div class="only-block-normal"
    style="color:#606266;border-radius: 4px;box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
    正常投影
    <br/>
    .g-box-shadow-base
</div>


<div class="only-block-normal"
    style="color:#606266;border-radius: 4px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);">
    浅色投影
    <br/>
    .g-box-shadow-light
</div>

投影以公共类的方式提供：

```css
// 投影
.g-box-shadow-base{
   box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.g-box-shadow-light{
   box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
```

### 字体

为了和组件字体保持一致，采用`elment-ui`提供的字体

#### Font-family

```
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

#### 字号

| 场景        | 字号           | 变量 | 示例 |
| ------------- |:-------------:| -----:|-----:|
| 辅助文字      | 12px  | fontSize12 |<div style='font-size:12px;'>字号规范示例</div> |
| 正文（小）      | 13px  | fontSize13 |<div style='font-size:13px;'>字号规范示例</div> |
| 正文      | 14px  |fontSize14 |<div style='font-size:14px;'>字号规范示例</div> |
| 小标题      | 16px  | fontSize16 |<div style='font-size:16px;'>字号规范示例</div> |
| 标题     | 18px  | fontSize18 |<div style='font-size:18px;'>字号规范示例</div> |
| 主标题      | 22px  | fontSize22 |<div style='font-size:22px;'>字号规范示例</div> |

字号以变量方式提供

使用示例：

```css
.divdemo{
    font-size:$fontSize12;
}
```
#### 行高



<div class="color-block-normal"
    style="color:#606266;overflow:hidden;line-hight:1.5">
    行高示例行高示例行高示例行高示例行高示例行高示例行高示例行高示例行高示例行高
</div>

行高以变量方式提供

使用示例：

```css
.divdemo{
    line-height:$lineHeightB;
}
```

字体相关变量

```js
const variate = {
  fontSize12,
  fontSize13,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize22,
  lineHeightB,
}
```

### 图标

::: tip
所有的站点默认会引入`element-mini-ui`库,该库提供一套默认的公共图标库。各个站点根据需求在[阿里图标库](https://www.iconfont.cn/)中以站点建立项目扩展图标资源
:::

#### 图标库

站点的图标使用来源：

1. [element-mini-ui自带的图标](https://ylsoftworkgroup.github.io/element-mini-ui/#/icon)。
2. [阿里图标库](https://www.iconfont.cn/)建立项目下载的图标资源，一般存放在`src/styles/fonts/`目录下。


#### 用法

使用方法：

```html
    <span class="el-icon-right el-icon-loading"></span>
    <span class="el-icon-right el-icon-upload"></span>
    <span class="el-icon-right el-icon-plus" style="font-size:28px;color:blue;"></span>
```
效果 :

<span class="el-icon-right el-icon-loading"></span>
<span class="el-icon-right el-icon-upload"></span>
<span class="el-icon-right el-icon-plus" style="font-size:28px;color:blue;"></span>

辅助类：

可以使用 `el-icon-left`或者`el-icon-right`给图标增加边距


### 变量

#### 全局变量

站点中的全局变量

```js
const variate = {
  white,
  black,
  primary, // 主色
  primaryL1,
  primaryL2,
  primaryL3,
  primaryL4,
  primaryL5,
  primaryL6,
  primaryL7,
  primaryL8,
  primaryL9,
  success,
  successL,
  successLr,
  info,
  infoL,
  infoLr,
  warning,
  warningL,
  warningLr,
  danger,
  dangerL,
  dangerLr,
  textPrimary,
  textRegular,
  textSecondary,
  textPlaceholder,
  borderColorB,
  borderColorL,
  backgroundColorB,
  backgroundColorL,
  fontSize12,
  fontSize13,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize22,
  borderRadiusB,
  borderRadiusS,
  lineHeightB,
  theme, // 主题色
  themeFontActive
}
```

#### 主题变量
   
> 主题色根据具体的产品规定了不同产品之间某些区域的样式特殊化

```js
const theme = '#c56638'
const themeFontActive = '#eee'
```

### 公共类

```css

// 边框
.g-border-solid{
    border:1px $borderColorB solid;
}
.g-border-l-solid{
    border:1px $borderColorL solid;
}
.g-border-dotted{
    border:2px $borderColorB dotted;
}
.g-border-l-dotted{
    border:2px $borderColorL dotted;
}

// 边框投影
.g-box-shadow-base{
   box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.g-box-shadow-light{
   box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
```



## 布局

## 组件


## 场景

### 尺寸

### 常见布局

### 按钮及操作

### 过滤器

### 表单

### 内容展示

### 消息及状态

