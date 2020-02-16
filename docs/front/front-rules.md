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

#### 主题变量 ???
   
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



## 组件

::: tip
使用了`@yearrow/vue-protal-framework-library`框架的站点页面都自动全局注册了`element-mini-ui`和`element-extension`组件库
:::

**element-mini-ui**

> 引入方式：全局引入

为了保证组件库的稳定性摘取element-ui主要组件并对样式和其中的组件做了扩展。   
[文档地址](https://ylsoftworkgroup.github.io/element-mini-ui/)


**element-extension**

> 引入方式：全局引入

该组件库基于element-mini-ui 基础上扩展了使用日常业务使用的组件。   
[文档地址](https://ylsoftworkgroup.github.io/element-extension/#/commonselect)


**业务组件库**

> 引入方式：按需手动注册 

站点开发过程中根据业务场景封装的适用于站点项目的组件    
在`src/web-content/components`目录下，组件清单详见具体文件夹readme.md。

**第三方组件**

项目中如果要引入第三方组件，评估组件大小，如果组件大于会给包增加大于`100K`的体积时考虑在`.html`头部挂载的方式引入。   
如果较小直接在页面中引用手动注册使用。



## 布局

### 常用技术

前端开发中布局中推荐使用css的`flex`布局技术。如果对flex布局不了解,[参考此教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


### 布局组件

1. `element-mini-ui`库中提供了 24 分栏方式布局组件[用法参考](https://element.eleme.cn/#/zh-CN/component/layout)

2. `element-extension`中提供了`flexbox`组件用于弹性布局[用法参考](https://ylsoftworkgroup.github.io/element-extension/#/flexbox)

3. `element-extension`中提供了`splitPanel`组件,可以手动拖拽改变容器大小，也方便布局。[用法参考](https://ylsoftworkgroup.github.io/element-extension/#/splitPanel)

### 布局规则

1. 确定要布局的容器。
2. 确定容器的布局元素。
3. 确定容器的主元素,主元素应遵守一下约定：    
    - 一个容器只能有一个主内容区域元素,主元素应尽量布局在中央位置辅助元素围绕在其周边；  
    - 如果是弹性布局方式,主元素一般为弹性元素，其他元素应有固定值;
4. 各元素之间应该使用css`margin`或`padding`属性给元素之间留出间距；间距值应该使用系统提供的间距变量。
    ```js
    const layoutGapS = '3px'
    const layoutGapB = '5px'
    const layoutGapL = '10px'
    ```
5. 元素应该尽量使用组件库中提供的容器组件来包裹,容器组件有：`toolbar`、`panel`、`pageheader`、`flexbox`、`splitPanel`

### 元素以及示例

> 布局元素指针对某个容器的内部的下级呈现单元区块。

#### 模块页面的布局示例： 

元素：

- header
- menu
- footer
- content
- appList

布局示例：

<div class="layout-container"
    style="flex-direction:column; margin:0px;">
    <div class="layout-items"
         style="height:40px;"
    >
    header
    </div>
    <div style="flex:1;background:#fff;display:flex;"
    >
        <div class="layout-items"
              style="width:80px;border: 2px dotted #E4E7ED;">
            menu
        </div>
        <div  style="flex:1;;background:#fff;display:flex;flex-direction:column;">
            <div class="layout-items"
                style="flex:1;"
            >
            content
            </div>
            <div class="layout-items"
                style="height:15px;"
            >
            footer
            </div>
        </div>
        <div class="layout-items"
              style="width:80px;border: 2px dotted #E4E7ED;">
            appList
        </div>
    </div>
   
</div>

::: warning
注意：模块页面的`header`,`menu`,`footer`,`appList`基础元素由`@yearrow/vue-protal-frameword-library`提供，menu和applist可伸缩。content元素为主区域，根据具体业务进行开发，其中content自带了默认的背景色。
:::

#### 页面布局

- page-header
- filter
- tool
- tip
- dataview

##### 操作类页面

操作类页面布局一般输入操作比较频繁，要求页面整个区域尽量减少通过滚动太浏览隐藏内容，我们一般要求操作内容是直观可见，如果内容较多，一般采用选项卡或者弹窗方式显示二级页面内容。

布局示例：


<div class="layout-container"
    style="flex-direction:column; margin:0px;">
    <div class="layout-items"
         style="height:25px;"
    >
    page-header
    </div>
    <div class="layout-items"
         style="height:35px;"
    >
    filter
    </div>
    <div class="layout-items"
         style="height:25px;"
    >
    tool
    </div>
    <div class="layout-items"
         style="height:15px;"
    >
    tip
    </div>
    <div class="layout-items"
            style="flex:1;overflow:auto;"
        > 
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
        dataview<br/>
    </div>
</div>


我们将这类布局称为`弹性布局方式`。

##### 展示类页面

展示类页面布局一般内容信息较多，展示信息较为丰富，类别较多，我们一般采用区块平铺的方式展示，有时候也借助弹窗或者二级页面展示二级内容信息。


布局示例：


<div >
    <div class="layout-items"
         style="height:25px;"
    >
    page-header
    </div>
    <div style="height:400px; margin:0px; overflow:auto;"> 
    <div class="layout-items"
         style="height:35px;"
    >
    filter
    </div>
    <div class="layout-items"
         style="height:100px;"
    > 
    dataview1
    </div>
    <div class="layout-items"
         style="height:15px;"
    >
    tip
    </div>
   <div class="layout-items"
            style="height:60px;"
        > 
        dataview2
    </div>
    <div class="layout-items"
            style="height:120px;"
        > 
        dataview3
    </div>
    <div class="layout-items"
            style="height:200px;"
        > 
        dataview4
    </div>
    </div>
</div>

我们将这类布局称为`流体布局方式`。


::: warning
1. 页面开发中，无论是一级页面还是二级页面等都应该有`page-header`元素，page-header标题应该是模块的路径，page-header元素不应该随页面内容滚动。
2. 应该适当的使用`tip`元素提示数据展示，或者功能操作。
3. `filter`、`tool`、`dataview`在使用时应该使用容器组件包裹，有时候为了紧凑性考虑，可以把不懂功能组件包裹在同一个容器内。
:::

实例展示：


> 其它局部容器的布局以及示例请参考场景中各个容器的规范说明。



## 场景

### 按钮及操作

#### 按钮

### 过滤器

#### 元素

#### 约定

#### 尺寸

#### 响应式辅助类

#### 示例

### 表单

#### 元素

- form-header
- tip
- control-items
- footer
- split-line
- is-close-btn



#### 约定

::: warning
1. 表单应该具有标题和关闭功能。
2. 复杂场景下应该适当的使用`tip`元素提示表单数据、验证，或者功能操作。
3. 如果是弹出层表单，一般要禁用掉。
:::


##### 页面表单

##### 弹窗表单


实例展示：

### 数据预备器


### 内容展示

### 

### 消息及状态

