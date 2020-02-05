###  前端开发规范


##### 文件命名
  模块名称和数据库名称保持一致，命名采用大驼峰命名（AssBss）法则，编辑界面统一用模块名称+Edit命名，如果需要add或者其他界面均以主模块+二级名称。

##### 文件夹命名
   文件夹命名用全部用采用小写。

##### 组件内部命名

    组件中内部方法均以_开始采用小驼峰方式命名。组件对外方法前不用加_。变量名均以小驼峰命名法则命名assBSS(小驼峰)。
    
##### css
   组件内部支持css语法或者styus编译语言语法。 

##### 脚手架文件结构

    public
        |__config 前端配置文件
        |__fonts  字体文件
        |__img    静态图片文件
        |__plugin 第三方插件
        |__style  外部全局样式
        |__theme  主题文件夹
        |__manifest pwa配置
    src  
        |__api  常用api文件
        |__common 常用函数库
        |__components 组件库
        |__directive 指令
        |__filters 过滤器
        |__lang  多语言
        |__mixns 混合封装
        |__ocomponents 业务组件
        |__pages 业务页面
        |__vuex  全局状态   
   




#### 功能\菜单命名规则：

   1. 功能管理： 功能编码    如果模块需要功能细分授权，以主表名去掉前缀再加's'为后缀为功能编码：`Table4Orders`
                           如果只属于模块授权，自定义名称再加's'为后缀为功能编码：`ReportPurchaseSums`。

   2. 菜单管理： 菜单编码    如果模块需要功能细分授权，以主表名去掉前缀全部小写为菜单编码：`table4Order`
                           如果只属于模块授权，自定义名称为菜单编码：`reportpurchasesum`。

   **注意： 功能代码和菜单代码在全表均不能重复。**

## 色彩
   
   ### 系统颜色
   
   **辅助色**
   
   除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

   *主色随着定制皮肤而变*
<el-row :gutter="12">
    <el-col :span="6">
        <el-card style="background:#67C23A;color:#fff;font-weight:500">Success <br/> #67C23A</el-card>
    </el-col>
    <el-col :span="6">
        <el-card style="background:#E6A23C;color:#fff;font-weight:500">Warning <br/> #E6A23C</el-card>
    </el-col>
    <el-col :span="6">
        <el-card style="background:#F56C6C;color:#fff;font-weight:500">Danger <br/> #F56C6C</el-card>
    </el-col>
    <el-col :span="6">
        <el-card style="background:#909399;color:#fff;font-weight:500">Info <br/> #909399</el-card>
    </el-col>
</el-row>

**中性色**

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
<el-row :gutter="12">
    <el-col :span="6">
        <el-card style="background:#303133;color:#fff;font-weight:500">主要文字 <br/> #303133</el-card>
        <el-card style="background:#606266;color:#fff;font-weight:500">常规文字 <br/> #606266</el-card>
        <el-card style="background:#909399;color:#fff;font-weight:500">次要文字 <br/> #909399</el-card>
        <el-card style="background:#C0C4CC;color:#fff;font-weight:500">占位文字 <br/> #C0C4CC</el-card>
    </el-col>
    <el-col :span="6">
        <el-card style="background:#DCDFE6;color:#000;font-weight:500">一级边框 <br/> #DCDFE6</el-card>
        <el-card style="background:#E4E7ED;color:#000;font-weight:500">二级边框 <br/> #E4E7ED</el-card>
        <el-card style="background:#EBEEF5;color:#000;font-weight:500">三级边框 <br/> #EBEEF5</el-card>
        <el-card style="background:#F2F6FC;color:#000;font-weight:500">四级边框 <br/> #F2F6FC</el-card>
    </el-col>
</el-row>


在系统中对应针对这些颜色提供了响应的样式类 

```css

.color-success {color: #67C23A;} 
.color-warning {color: #E6A23C;} 
.color-danger {color: #F56C6C;} 
.color-info {color: #909399;} 
.color-help {color:#b6d06c;} 

.text-primary{ color:#303133;} 
.text-regular{ color:#606266 ;} 
.text-secondary{ color:#909399;}
.text-placeholder{ color:#c0c4cc;}

.border-color-base{ color:#dcdfe6;}
.border-color-light{ color:#e4e7ed;}
.border-color-lighter{ color:#ebeef5;}
.border-color-extra-light{ color:#f2f6fc;}

```

   ### 皮肤定制配色
  
   在系统中有的颜色是随着定制皮肤二变化的，比如主色、主页的面板色、菜单背景色等。
   下面只列出常用的一些定制类名：


默认皮肤

```css

.color-primary {color:#409EFF;}  /*主色*/
.color-primary-light1 {color:rbga(64,158,255,0.8);} /*主色-减淡1*/
.color-primary-light2 {color:rbga(64,158,255,0.6);} /*主色-减淡2*/
.color-primary-light3 {color:rbga(64,158,255,0.4);} /*主色-减淡3*/
.color-primary-light4 {color:rbga(64,158,255,0.2);} /*主色-减淡4*/

.main-text-color /*主文字色 带hover效果*/
.main-static-color  /*主文字色 不带hover效果*/
.active-color  /*触发状态的背景色*/

```


## 尺寸



## 图标

### 图标库

系统的图标使用来源：

1. element官网自带的图标。
2. 系统集成的图标。在`public/font`文件夹下查看
3. [http://fontawesome.dashgame.com/](http://fontawesome.dashgame.com/) 官网的图标库


### 用法

```html
    <i class="图标类名"></i>
```

---

## 路径

在系统中引用图标或文件资源时需要有正确的引用路径。

> 一般图片等资源都存放在`src/common`或者`public`中。`src/common`下的资源文件会随程序一并打包。后期不能替换。

1. 访问`src/common`的资源路径: `../../common/`  如image下的某个图片：`../../common/image/login_user.png`

2. 访问`public`的资源路径: `./文件名`  如img下的某个图片：`./img/test.png`

3. 文件之间相互调用：

`@` 指向`src`目录；`./` 指向本目录；`../` 指向上层目录。

