# markdown语法简介

>我们坚信写作写的是内容，所思所想，而不是花样格式。

>— Ulysses for Mac


## 标题

标题是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可。
    # 一级标题
    ## 二级标题
    ### 三级标题
以此类推，总共六级标题，建议在井号后加一个空格，这是最标准的 Markdown 语法。

## 粗体与斜体
Markdown 的粗体和斜体也非常简单，\*这里是斜体\* \*\*这里是粗体\*\*   \*\*\*这里是粗斜体\*\*\*。
例如：

*这里是斜体* 
**这里是粗体**
***这里是粗斜体***

## 列表
熟悉 HTML 的同学肯定知道有序列表与无序列表的区别，在 Markdown 下，列表的显示只需要在文字前加上 - 或 * 即可变为无序列表，有序列表则直接在文字前加1. 2. 3. 符号要和文字之间加上一个字符的空格。
![](http://ww4.sinaimg.cn/large/6aee7dbbgw1effew5aftij20d80bz3yw.jpg)

## 引用
如果你需要引用一小段别处的句子，那么就要用引用的格式。
>例如这样

只需要在文本前加入 > 这种尖括号（大于号）即可
![](http://ww3.sinaimg.cn/large/6aee7dbbgw1effezhonxlj20e009c3yu.jpg)

## 图片与链接
插入链接与插入图片的语法很像，区别在一个 !号

图片为：`![图片名称](http://图片网址)`

链接为：`[链接名称](http://链接网址)`

![](http://ww2.sinaimg.cn/large/6aee7dbbgw1efffa67voyj20ix0ctq3n.jpg)




## 代码框
如果你只想高亮语句中的某个函数名或关键字，可以使用 \`function_name()\` 实现

通常我们会根据您的代码片段适配合适的高亮方法，但你也可以用 ``` 包裹一段代码，并指定一种语言

```javascript
$(document).ready(function () {
    alert('hello world');
});
```
支持的语言：actionscript, apache, bash, clojure, cmake, coffeescript, cpp, cs, css, d, delphi, django, erlang, go, haskell, html, http, ini, java, javascript, json, lisp, lua, markdown, matlab, nginx, objectivec, perl, php, python, r, ruby, scala, smalltalk, sql, tex, vbscript, xml

您也可以使用 4 空格缩进，再贴上代码，实现相同的的效果

    def g(x):
        yield from range(x, 0, -1)
        yield from range(x)

图例：
![](http://ww3.sinaimg.cn/large/6aee7dbbgw1effg1lsa97j20lt0a8dgs.jpg)
使用 *tab* 键即可缩进。


## 分割线
使用三个*号表示分割线或者三个---

示例： 
*** 

## 换行/分隔符
如果另起一行，只需在当前行结尾加 2 个空格

在当前行的结尾加 2 个空格  
这行就会新起一行
如果是要起一个新段落，只需要空出一行即可。

如果你有写分割线的习惯，可以新起一行输入三个减号 -：



## 表格

markdown的表格比较累人

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
