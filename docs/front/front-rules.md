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
  lineHeightE,
  layoutGapS,
  layoutGapB,
  layoutGapL
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

/*边框*/ 
.g-border-solid{
    border:1px $borderColorB solid;
}
.g-border-l-solid{
    border:1px $borderColorL solid;
}
.g-border-b-dotted{
    border:2px $borderColorB dotted;
}
.g-border-l-dotted{
    border:2px $borderColorL dotted;
}

/*边框投影*/ 
.g-box-shadow-base{
   box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.g-box-shadow-light{
   box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 危险按钮偏移类 */
.g-button-margin-left {
    margin-left: 50px !important;
}

 /* 工具条按钮有浮动 */
.g-button-float-right {
    float: right;
    margin-left:auto;
}

/* 容器的内边距 */
.g-container-padding {
    padding: $layoutGapB;
    box-sizing: border-box;
}
/*容器内边距头部免除*/
.g-container-padding-nontop {
    padding: $layoutGapB;
    padding-top: 0px;
    box-sizing: border-box;
}

/*填充容器样式*/
.g-container-full-fill {
    width:100%;
    height:100%;
}

/*保存后关闭的浮动按钮*/
.g-form-save-close-float {
    float: left;
    padding: $layoutGapL;
}
 
/* 表单底部样式 */
.g-dialog-footer {
    text-align: right;
}

/* tabPanel样式 */
.g-tab-panel-base {
    box-sizing: border-box;
    padding: $layoutGapB;
    padding-top: 0px;
    background:$backgroundColorL;
    height: 100%;
    display: flex;
    flex-direction: column
}

/* 移除边框样式 */
.g-clear-border {
    border: none !important;
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
[文档地址](https://ylsoftworkgroup.github.io/element-extension/)


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

1. 确定要布局的容器,并确定容器布局方式为弹性布局还是流体布局。
2. 确定容器内的布局元素，并规划布局位置以及尺寸。
3. 各元素之间应该使用css`margin`或`padding`属性给元素之间留出间距；间距值应该使用系统提供的间距变量。
    ```js
    const layoutGapS = '3px'
    const layoutGapB = '5px'
    const layoutGapL = '10px'
    ```
4. 元素应该尽量使用组件库中提供的容器组件来包裹,容器组件有：`toolbar`、`panel`、`flexbox`、`splitPanel`、`pageheader`
5. 布局之后检查并消除元素之间的重复间隔或重复边框问题。

### 模块和页面布局

> 布局元素指针对某个容器的内部的下级呈现单元区块。

#### 模块页面的布局示例： 

- header
- menu
- footer
- appList
- content


#### 约定

::: warning
1. 模块页面的`header`,`menu`,`footer`,`appList`基础元素由`@yearrow/vue-protal-frameword-library`提供，menu和applist可伸缩。content元素为主区域，根据具体业务进行开发，其中content自带了默认的背景色。
2. 模块content内容部分也就是模块的根组件，需引入样式类`class="page-main"`。
:::


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



#### 页面布局

- page-heade
- filter
- tool
- alert
- dataview

#### 约定
::: warning
1. 页面开发中，无论是一级页面还是二级页面等都应该有`page-header`元素，page-header标题应该是模块的路径，page-header元素不应该随页面内容滚动。
2. 应该适当的使用`tip`元素提示数据展示，或者功能操作。
3. `filter`、`tool`、`dataview`在使用时应该使用容器组件包裹，有时候为了紧凑性考虑，可以把不同功能组件包裹在同一个容器内。
4. 页面上的区块之间应该留有间隙，间隙尺寸应该为`const layoutGapL = '10px'`,区块容器内部和组件之间也应该有间隔，间隔见具体容器要求。
:::


##### 操作类页面

操作类页面布局一般输入操作比较频繁，要求页面整个区域尽量减少通过滚动太浏览隐藏内容，我们一般要求操作内容是直观可见，如果内容较多，一般采用选项卡或者弹窗方式显示二级页面内容。

> 你应该考虑使用`flex-box`组件布局操作类页面。

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



实例展示：

   **弹性布局方式示例**   
  ![示例](/YlDocument/img/front-rules/page-1.png)

     **流体布局方式示例**   
  ![示例](/YlDocument/img/front-rules/page-2.png)

> 其它局部容器的布局以及示例请参考场景中各个容器的规范说明。



## 场景

### 按钮及操作

#### 约定


- 按钮类型的定义：

  - 主要功能按钮：业务场景上规定的主要功能按钮，如：添加、修改、审核、保存、确认等之类。   
    
    ##### 示例

    <div style="display:flex">
    <el-button 
        type="primary" 
        size="small" 
        class="el-icon-add" 
        > 主主要功能
    </el-button>

    <el-button 
        type="primary" 
        size="small" 
        plain 
        class="el-icon-edit"> 次主要功能
    </el-button>
    </div>

    ```html
    <el-button 
        type="primary" 
        size="small" 
        class="el-icon-add" 
        > 主主要功能
    </el-button>

    <el-button 
        type="primary" 
        size="small" 
        plain 
        class="el-icon-edit"> 次主要功能
    </el-button>
    ```

  - 警告功能按钮：一些逆向的业务操作或者对其他业务有影响的操作，如：撤销审核、撤销审批等之类。

    ##### 示例

    <div style="display:flex;">
    <el-button 
        type="warning" 
        size="small" 
        class="el-icon-select"> 主警告
    </el-button>

    <el-button 
        type="warning" 
        size="small" 
        plain
        plain class="el-icon-select"> 次警告
    </el-button>
    </div>

    ```html
    <el-button 
        type="warning" 
        size="small" 
        class="el-icon-select"> 主警告
    </el-button>

    <el-button 
        type="warning" 
        size="small" 
        plain
        plain class="el-icon-select"> 次警告
    </el-button>
    ```
  - 危险功能按钮：一些危险的业务操作，一般会对数据造成不可逆或者可逆过程很复杂的影响。 如：删除、冲红等。
  
    ##### 示例

    <div style="display:flex;">
    <el-button 
        type="danger" 
        size="small" 
        class="el-icon-delete" > 主危险
    </el-button>

    <el-button 
        type="danger" 
        size="small" 
        plain 
        class="el-icon-delete" > 次危险
    </el-button>
    </div>

    ```html
    <el-button 
        type="danger" 
        size="small" 
        class="el-icon-delete" > 主危险
    </el-button>

    <el-button 
        type="danger" 
        size="small" 
        plain 
        class="el-icon-delete" > 次危险
    </el-button>
    ```
  - 普通功能按钮：业务上实现的一个对主要业务功能进行补充的功能，如：查询、参数设置、选材按钮等。
  
    ##### 示例

    <div style="display:flex;">
    <el-button 
        type="info" 
        size="small" 
        class="el-icon-search"> 主普通功能
    </el-button>

    <el-button 
        type="info" 
        size="small" 
        plain 
        class="el-icon-search"> 次普通功能
    </el-button>
    </div>

    ```html
    <el-button 
        type="info" 
        size="small" 
        class="el-icon-search"> 主普通功能
    </el-button>

    <el-button 
        type="info" 
        size="small" 
        plain 
        class="el-icon-search"> 次普通功能
    </el-button>
    ```
  - 辅助功能按钮：实现的一些不影响业务数据的功能，如数据导出、打印之类按钮。
  
    ##### 示例

    <div style="display:flex;">
    <el-button 
        type="success" 
        size="small" 
        class="el-icon-file-excel-fill"> 主辅助功能
    </el-button>

    <el-button 
        type="success" 
        size="small" 
        plain 
        class="el-icon-file-excel-fill"> 次辅助功能
    </el-button>
    </div>

    ```html
    <el-button 
        type="success" 
        size="small" 
        class="el-icon-file-excel-fill"> 主辅助功能
    </el-button>

    <el-button 
        type="success" 
        size="small" 
        plain 
        class="el-icon-file-excel-fill"> 次辅助功能
    </el-button>
    ```

  - 文本按钮： 提示框或表单中的取消操作, 如：取消、重置、关闭按钮。
  
    ##### 示例

    <div style="display:flex;">
    <el-button 
        type="text" 
        size="small" > 取消按钮 
    </el-button>
    </div>

    ```html
    <el-button 
        type="text" 
        size="small" > 取消按钮 
    </el-button>

    ```
- 在一个视图中只能有一个`主要动作按钮`。
- 只有存在主要动作按钮时，才会出现`次要动作按钮`。
- 若存在主要动作按钮，一般动作、辅助动作、危险动作和警告动作也只能使用次动作按钮。  
- 警告功能按钮和危险操作按钮在布局上应该远离操作按钮组，应该使用`g-button-margin-left` 辅助类实现。

  **示例**
  ![示例](/YlDocument/img/front-rules/btn-1.png)

- 危险的操作按钮须使用`Popover`提示框组件让用户确认后再执行。
 
  **示例**   
  ![示例](/YlDocument/img/front-rules/btn-2.png)
  
- 当button被封装到组件中被使用时，应该使用`mini`尺寸。   
- 直接应用到页面的功能按钮没有特殊要求的一般尺寸都为`small`。
- 按钮在使用时应该搭配图标使用，搭配图标时图标在前文字在后,文字图标之间留一空格距离，文本按钮不需要图标，常用按钮按照推荐要求使用。
- 一些对数据进行写入的操作，在执行时应该启用按钮的`loading`属性，避免发起多次写入操作请求。如：保存、提交、撤销等按钮。
- 按钮使用时应该包裹在`toolBar`、`panel` 等容器中，不建议直接暴露在外部中使用。


#### 常用按钮要求

主功能按钮

- 添加 <el-button type="primary" size="small" class="el-icon-add" > 添加</el-button>

```html
<el-button type="primary" size="small" class="el-icon-add" > 添加</el-button>
```

- 编辑 <el-button type="primary" size="small"  class="el-icon-edit"> 编辑</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-edit"> 编辑</el-button>
```

- 保存  <el-button type="primary" size="small"  class="el-icon-save"> 保存</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-save"> 保存</el-button>
```


- 确定  <el-button type="primary" size="small"  class="el-icon-circle-check-outline"> 确定</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-circle-check-outline"> 确定</el-button>
```

- 提交 <el-button type="primary" size="small"  class="el-icon-submit"> 提交</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-submit"> 提交</el-button>
```

- 审批 <el-button type="primary" size="small"  class="el-icon-approve"> 审批</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-approve"> 审批</el-button>
```


普通功能按钮

- 查询   <el-button type="info" size="small"  class="el-icon-search"> 查询</el-button>

```html
<el-button type="primary" size="small"  class="el-icon-search"> 查询</el-button>
```
- 选材  <el-button type="info" size="small"  class="el-icon-select"> 选材</el-button>

```html
<el-button type="info" size="small"  class="el-icon-select"> 选材</el-button>
```

- 设置  <el-button type="info" size="small"  class="el-icon-setting"> 设置</el-button>

```html
<el-button type="info" size="small"  class="el-icon-setting"> 设置</el-button>
```

辅助功能按钮

- 导出   <el-button type="success" size="small"  class="el-icon-excel"> 导出</el-button>

```html
 <el-button type="success" size="small"  class="el-icon-excel"> 导出</el-button>
```

- 打印 <el-button type="success" size="small"  class="el-icon-printer"> 打印</el-button>

```html
 <el-button type="success" size="small"  class="el-icon-printer"> 打印</el-button>
```


警告按钮

- 撤销提交  <el-button type="warning" size="small"  class="el-icon-undo"> 撤销提交</el-button>

```html
 <el-button type="warning" size="small"  class="el-icon-undo"> 撤销提交</el-button>
```

- 撤销审批 <el-button type="warning" size="small"  class="el-icon-cancel"> 撤销审批</el-button>

```html
 <el-button type="warning" size="small"  class="el-icon-cancel"> 撤销审批</el-button>
```

危险功能按钮

- 删除   <el-button type="danger" size="small"  class="el-icon-delete"> 删除</el-button>

```html
 <el-button type="danger" size="small"  class="el-icon-delete"> 删除</el-button>
```

#### 示例

有关按钮的使用以及布局以及使用请参考`element-extension`的[tool-bar](https://ylsoftworkgroup.github.io/element-extension/#/tool-bar),示例或 [panel](https://ylsoftworkgroup.github.io/element-extension/#/panel)示例,


### 过滤器

#### 元素
- form
- label
- controller
- searchButton
- filterPanel
- flexBox

#### 约定

- 过滤器应该使用tool-bar组件的`filter`和`more`插槽进行包裹。
- 过滤器控件默认使用`small`尺寸。
- 过滤器控件应该包裹在`form`组件中,显示控件label,label不能换行,布局时考虑响应式布局,多行布局时，应该考虑各列之间纵向对齐,响应式布局时需要可参照一下代码实现`:xs="24" :sm="12" :md="8" :lg="6" :xl="4"`。

  **示例**   
  ![示例](/YlDocument/img/front-rules/filter-1.png)

- 如果过滤器布局为了紧凑考虑，可以不显示控件label。（只在控件占不满一行时考虑）。

  **示例**   
  ![示例](/YlDocument/img/front-rules/filter-2.png)

- 有时候考虑紧凑型布局过滤器可以考虑和功能按钮混合布局。

    **示例**   
  ![示例](/YlDocument/img/front-rules/filter-3.png)

- 使用过滤器面板时，应该考虑使用flex-box将过滤器面板放置固定区域，并设置可折叠。

- 过滤器中有可触发change、click事件的控件，应该在该事件中直接进行查询访问（如：select\button等组件）。



#### 示例

有关过滤器使用请参考`element-extension`的[tool-bar](https://ylsoftworkgroup.github.io/element-extension/#/tool-bar)示例或[flex-box](https://ylsoftworkgroup.github.io/element-extension/#/flex-box)示例。

### 表单

#### 元素

- pageHeader
- formHeader
- controller
- alert
- footer
- isCloseBtn
- submitButton
- close


#### 约定

- 表单中控件尺寸应该使用`small`。
- 表单中控件应该显示控件label，并且label不能出现换行。
- 表单中应该适当的使用`alert`元素进行操作提示。
- 表单中控件纵向布局应该对齐，保证布局工整。
- 表单组件应该标记必填项、根据业务需求使用进行表单验证。
- 表单组件验证提示应该开启from组件的`status-icon`属性，form组件尺寸为`small`。
- 表单中应该尽量提供`isCloseBtn`提高数据录入便捷性。

##### 页面表单

- 页面表单应该有pageHeader组件，在其slot中提供关闭功能。
- 表单页面布局使用弹性弹性布局方式,弹性布局考虑使用`flex-box`组件布局。
- 页面表单中的布局应该考虑响应式布局,响应式布局时需要可参照一下代码实现`:xs="24" :sm="12" :md="8" :lg="6" :xl="4"`。
- 页面组件中提交、取消、选材等应该使用`tool-bar`容器包裹。

  **示例**   
  ![示例](/YlDocument/img/front-rules/form-3.png)

##### 弹窗表单

- 弹窗表单应该使用`dialog`或者`drawer`作为载体。
- 弹窗表单应该有标题和关闭按钮。
- 弹出层表单一般要禁用掉点击遮罩关闭弹窗功能,禁用ESC按钮关闭。

 ```HTML
    <!-- dialog属性示例 -->
    <el-dialog
      title="一列编辑demo"
      :visible.sync="smallDialogVisible"
      modal-append-to-body 
      append-to-body 
      :close-on-click-modal="false" 
      :close-on-press-escape="false" 
      width="450px"> 
      <small-edit v-if="smallDialogVisible" ref="smallForm" @close="_close" />  <!-- 使用v-if 销毁表单组件 -->
    </el-dialog>

     <!-- drawer属性示例 -->
    <el-drawer
      title="drawer"
      size="80%"
      append-to-body
      :close-on-press-escape="false"
      destroy-on-close 
      :modal-append-to-body="false" 
      :visible.sync="drawer"
      direction="btt">
      <select-items />
    </el-drawer>
 ```
- 因为弹窗表单都是固定宽度，表单布局不考虑响应式布局。
- 弹窗组件在布局上只接受一列和两列布局，如果要三列以上布局，考虑使用页面布局。
- 表单弹窗宽度，一列宽度为`450px`，两列宽度为`720PX`。
- 表单弹窗高度根据内容而定，尽量不要超过视口弹窗高度,如果输入项过多，考虑使用tabPanel分隔内容。
- 如果弹窗组件有弹出弹窗的操作，请尽量将此表单改为页面表单（尽量避免弹窗嵌套）。

   **一列示例**   
  ![示例](/YlDocument/img/front-rules/form-2.png)

  **两列示例**   
  ![示例](/YlDocument/img/front-rules/form-1.png)



### 数据预选器

- filterPanel
- flexBox
- toolBar
- filter
- dataSelecter
- isCloseBtn
- alert

#### 约定

- 数据预选器应该使用`dialog`或者`drawer`作为载体。
- 数据预选器应该有标题和关闭按钮。
- 应该尽量提供`isCloseBtn`提高数据选择的便捷性。
- 对于复杂的预选功能应该适当的使用`alert`元素进行操作提示。
- 数据预先器一般分为过滤区域和预选区域，在布局上要清晰。
- 树面板应该使用flexBox进行包裹。

 **示例**   
  ![示例](/YlDocument/img/front-rules/select-items-1.png)


### 内容展示

- onlyTable
- table
- tableNext
- tableReport
- list
- listNext
- listReport
- chart
- statisticalBlock
- ...

#### 约定

- 单个页面上可以有多个内容展示区。
- 内容展示区应该使用`panel`或者`tabPanel`包裹。
- 相同业务不同展示方式的可以放置在同一区域,同一区域的内容数据过滤共享一套过滤器，如果有各自过滤器，区块应该使用tabPanel分割区域。
- table和list区块在数据预加载期间应该考虑有`loading`效果，statisticalBlock、chart之类的区块在数据加载期间应该有`默认值`不能出现`空白区域`。
- 容器和展示组件之间应该保持间距，间隔应该遵守`const layoutGapB = '5px'`。
- 内容展示组件应该尽可能对重要信息做样式渲染，突出重要信息。

 **示例**   
 ![示例](/YlDocument/img/front-rules/container-2.png)


---

- table和list之类组件约定
    - table和list有按钮列时,按钮使用应该遵守按钮使用规范,不建议在按钮列中使用危险操作。
    - table和list中建议辅助类和普通类的功能按钮列可前置（嵌套的功能按钮尺寸为mini）,主要功能按钮、警告类列应后置在冻结列中（多个按钮操作尽量占用一列）,table按钮列应该居中显示。
    - table和lis布局应尽量紧凑,使用尺寸`small`。
    - table应该尽可能使用多级列头显示数据层级关系。
    - table中操作列内容应该居中显示。


   **示例**   
  ![示例](/YlDocument/img/front-rules/container-1.png)


### 消息及状态

#### 约定

- message
- messageBox
- alert 
- popover
- notification

#### 约定
 
- 消息类型的约定

  - 成功类消息使用`success`
  - 警告类消息使用`warning`
  - 一般提示类消息使用`info`
  - 异常类消息使用`error`

- 消息提示方式的约定

  - message 一般使用在主动发送请求后,返回的各类消息,或操作过程中的信息提示。
  - messageBox 和 popover 主要用于任务执行过程中给予用户的选择提示。 在按钮的操作提示中推荐使用popover的提示方式,
  - alert 主要用在页面、表单、预选器中进行辅助说明提示。
  - notification 一般用在由服务端主动发送给用户的通知消息，主要使用在预警类或者数据更新提示类的消息中。



