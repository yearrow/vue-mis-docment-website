
# 文档写作语法

> 我们坚信写作写的是内容，所思所想，而不是花样格式。

## 标准语法

### 标题

标题是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可。

写法：
``` md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```


***以此类推，总共六级标题，建议在井号后加一个空格，并且标题不能有缩进。这是最标准的 Markdown 语法。***

---

### 粗体与斜体

**斜体**

写法：
```
 *斜体* 
```
效果： *是斜体* 

**粗体**

写法：
```
 **粗体**
```
效果：  **粗体** 
  
**加粗斜体**

写法：
```
 ***加粗斜体***
```
效果：  ***加粗斜体***


 ***粗体斜体写入的时候`*`号一定要紧挨着文字不能有空格***

---

### 列表

在 Markdown 下，列表的显示只需要在文字前加上` - `或 `* `即可变为无序列表 符号要和文字之间加上一个字符的空

写法：
```
 * 吃饭
 * 上班
 * 打豆豆
```
效果：  
 * 吃饭
 * 上班
 * 打豆豆

 或者

 写法：
```
 - 吃饭
 - 上班
 - 打豆豆
```
效果：  
 - 吃饭
 - 上班
 - 打豆豆

有序列表则直接在文字前加1. 2. 3. 符号要和文字之间加上一个字符的空格。

写法：
```
 1. 吃饭
 2. 上班
 3. 打豆豆
```
效果：  
 1. 吃饭
 2. 上班
 3. 打豆豆

---

### 引用

如果你需要引用一小段别处的句子，那么就要用引用的格式。

>例如这样


 ***只需要在文本前加入 > 这种尖括号（大于号）即可***

 ---

### 图片与链接

> 插入链接与插入图片的语法很像，区别在一个 !号

**图片**

写法：
```
![图片名称](http://图片网址)

```

效果：  

![](http://ww2.sinaimg.cn/large/6aee7dbbgw1efffa67voyj20ix0ctq3n.jpg)

**链接**

写法：
```
[链接名称](http://链接网址)

```

效果：  

[百度](http://www.baidu.com)


---



### 代码框

如果你只想高亮语句中的某个函数名或关键字，可以使用 \`function_name()\` 实现

通常我们会根据您的代码片段适配合适的高亮方法，但你也可以用 ``` 包裹一段代码，并指定一种语言

写法：

```
    ```javascript 语言
    $(document).ready(function () {
        alert('hello world');
    });
    ```
```

效果:

```javascript
    $(document).ready(function () {
        alert('hello world');
    });
```

***支持大部分开发语言，具体根据markdown编辑器而定。***


您也可以使用 4 空格缩进，再贴上代码，实现相同的的效果，使用 *tab* 键即可缩进。

    def g(x):
        yield from range(x, 0, -1)
        yield from range(x)


---


### 分割线
使用三个*号表示分割线或者三个---

写法：
```
 ---
 ***
```
效果： 
---
*** 

### 换行 

如果另起一行，只需在当前行结尾加 2 个空格  

如果是要起一个新段落，只需要空出一行即可。

---

### 表格

markdown的表格语法：

```

| Tables        | 居中           | 右对齐 |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $160000000 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```

效果：

| Tables        | 居中          | 右对齐  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $160000000 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## vuepress自定义样式

### Emoji

写法：
```
:tada: :100:

```
效果：

:tada: :100:

### 自定义容器

写法：
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

```
效果：

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

***你还可以自定义块的标题***

写法：
```
::: danger STOP
Danger zone, do not proceed
:::

```
效果：

::: danger STOP
Danger zone, do not proceed
:::


### 在代码块中高亮显示行

实现代码第四行高亮

写法：
```
    ``` js{4}
    export default {
    data () {
        return {
        msg: 'Highlighted!'
        }
    }
    }
    ```

```

效果：

 ``` js{4}
    export default {
    data () {
        return {
        msg: 'Highlighted!'
        }
    }
    }
```


