#  前端开发规范
## 基础元素

该范围阐述的基础元素规范适用于前端开发中`element-mini-ui`、`element-extension`、`所有站点`。

### 色彩

   #### 系统颜色
   
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

 #### 皮肤定制配色
  
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



### 尺寸

### 文字

### 边框

### 阴影

### 间距

### 图标


#### 图标库

系统的图标使用来源：

1. element官网自带的图标。
2. 系统集成的图标。在`public/font`文件夹下查看
3. [http://fontawesome.dashgame.com/](http://fontawesome.dashgame.com/) 官网的图标库


#### 用法

```html
    <i class="图标类名"></i>
```



### 全局参数

```postcss

```

---


## 布局

## 组件


## 场景

### 常见布局

### 按钮及操作

### 过滤器

### 表单

### 内容展示

### 消息及状态

