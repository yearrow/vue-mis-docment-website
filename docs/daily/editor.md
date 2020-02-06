# vscode 开发配置说明

（文章尾部包含完整 vscode 配置内容）



## 一、使用 eslint 进行代码检查

### 代码规范：standard

在使用 [eslint](https://eslint.org/) 进行 Javascript 代码检查时，我们采用 [standard](https://standardjs.com/) 代码规范。

在开发阶段，需在 vscode 中配置 eslint 检查插件，并建议选用相应支持 eslint 规则的代码格式化工具。



### 安装 eslint 与相关插件依赖

#### 安装 eslint

在终端中使用 npm 命令进行安装，建议使用 -g 参数进行全局安装。

```
npm install -g eslint
```

> 全局安装在 mac / linux 等系统下需要在 sudo 命令下执行。
> 全局安装的 eslint 或其插件请不要再重复添加到项目的 package.json 的依赖之中。



#### 安装 standard 规则插件及其他依赖插件

在终端中使用 npm 命令安装 eslint 插件，同样建议使用 -g 参数进行全局安装。

```base
npm install -g eslint-config-standard eslint-plugin-standard
```



#### 安装 node 服务、工具开发所需插件

```bash
npm install -g eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```



#### 安装 security 插件（也是用于 node 服务开发）

```bash
npm install -g eslint-plugin-security
```



#### 安装 Vue 支持插件（用于前端开发，这个版本去掉了 html 插件）

```bash
npm install -g eslint-plugin-vue
```



#### 安装 babel-eslint 作为解析器

```bash
npm install -g babel-eslint
```

选用 babel-eslint 替代默认的解析器，可以让 eslint 按照项目的 babel 配置来支持环境中所需 es 语法的检查。

https://github.com/babel/babel-eslint



### 配置

#### .eslintrc 文件

在项目中使用 eslint 做代码检查，需要在相应代码目录中添加 .eslintrc 配置文件。

配置文件通常放在项目根路径，或源码根路径中，各级目录也可添加 .eslintrc 进行额外规则的配置。

eslint 加载时，将从所检查的源码文件同级目录开始，往上逐级查找配置文件，直到找到配置中包含`"root": true` 的配置项的文件。

若存在多级配置文件，将对配置项进行叠加覆盖，相同规则项以最下级的配置为准。



#### .eslintrc 配置示例

* 浏览器端开发

``` json
{
  "root": true, // 当前配置为根配置，将不再从上级文件夹查找配置
  "parserOptions": {
    "parser": "babel-eslint" // 采用 babel-eslint 作为语法解析器
  },
  "extends": [
    "standard", // 扩展使用 standard 检查规则
    "plugin:vue/recommended"  // 扩展使用 vue 检查规则
  ],
  // 加载 vue 开发所需插件（注：本文当前版本去掉了之前用到的 html 插件）
  "plugins": [
    "vue"
  ],
  // 当一些变量以 <script src="..."> 方式引用时，将这些变量标识为全局变量
  "globals": {
    "Vue": false // 标识全局引用的 Vue 变量
  },
  "env": {
    "browser": true, // 设置为所需检查的代码是在浏览器环境运行的
    "es6": true // 设置所需检查代码为 es6 语法书写
  },
  "rules": {
    "prefer-const": 2, // 尽量使用 const 进行变量定义
    // vue html 模板缩进定义，我们先不要求节点属性需要垂直对齐
    "vue/html-indent": [1, 2, {
      "alignAttributesVertically": false
    }],
    "vue/html-closing-bracket-newline": 0, // 关闭 html 节点关闭必须另起一行的规则
    "vue/max-attributes-per-line": 0, // 关闭 html 模板中，一行最多允许默认 1 个属性的规则
    // vue 脚本缩进定义
    "vue/script-indent": ["error", 2, { "baseIndent": 1, "switchCase": 1 }],
    "complexity": [ 1, 5 ], // 代码复杂度检查
    // 根据屏幕分辨率情况，对长度超过一定长度的代码行进行警告，并忽略注释、字符串等情况
    "max-len": [
      1,
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  },
  // 在 vue 文件中不使用 eslint 默认的缩进规则
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
```

- node 服务与工具开发

```json
{
  "root": true,
  "parser": "babel-eslint", // 采用 babel-eslint 作为语法解析器
  "extends": [
    "standard",
    "plugin:node/recommended",
    "plugin:security/recommended"
  ],
  "plugins": [
    "node",
    "security"
  ],
  "globals": {}, // node 开发一般无需设置该节点
  "env": {
    "commonjs": true, // 设置 commonjs 模块环境
    "node": true，// 所需检查代码为 node 运行程序代码
    "es6": true
  },
  "rules": {
    // 忽略一个对象属性访问注入的安全风险提示
    "security/detect-object-injection": 0,
    "complexity": [ 1, 5 ], // 代码复杂度检查
    // 根据屏幕分辨率情况，对长度超过一定长度的代码行进行警告，并忽略注释、字符串等情况
    "max-len": [
      1,
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  }
}
```



### 在 Visual Studio Code 中使用 eslint

#### 安装 VS Code 的 ESLint 插件

安装后，在 VS Code 设置（settings.json）中添加如下内容（文末有完整配置）：

``` json
{
  // 关闭 vscode 默认的检查工具
  "html.validate.scripts": false,
  "javascript.validate.enable": false,

  // 配置 eslint 检查的代码语言
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "typescript",
    "typescriptreact",
    "vue"
  ]
}
```



### 按 standard 代码规则进行代码格式化

#### 安装 Prettier-Standard - JavaScript formatter

https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode

Prettier-standard 插件比其他 Prettier 插件能更好的支持 standard 规则的代码，比如 funciton 函数名称与参数括号之间要求有空格的规则。

vscode 配置（settings.json）：

```json
{
  "editor.tabSize": 2, // 这个其实跟格式化没有关系，只是让编写代码的时候指定缩进为两个空格
  // 指定语言的默认格式化工具，这个安装插件的时候会进行指定，一般无需手动填写
  "[javascript]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
	},
  "[typescript]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
  }
}
```



## 二、vue 开发配置

### 安装 Vetur 插件

详细的配置文档：https://vuejs.github.io/vetur/

Vetur 插件的坑其实还挺多的，但没有更好的选择。

vscode 配置（settings.json）：

```json
{
  // js 和 ts 代码中，在函数名称和参数括号之间添加空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  // 使用 vscode-typescript 作为代码格式化工具（其他几个在 Vetur 中都坑太多）
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 脚本和样式代码最外层需要有缩进
  "vetur.format.scriptInitialIndent": true,
  "vetur.format.styleInitialIndent": true,
  // html 模板采用 js-beautify-html 作为格式化工具
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 下边的配置解决 vetur 对 html 模板部分进行格式化时，换行非常无厘头的问题
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "preserve", // html 格式化时，元素节点的属性格式化自动换行，且保留原有的手动换行
      "wrap_line_length": 120 // 超过 120个字符进行换行
    }
  },
  // 关闭 Vetur 默认的脚本检查，以使用 vscode 全局配置的 eslint 进行检查
  // 这样才能更好的使用 babel-eslint 进行适当的语法特性检查
  "vetur.validation.script": false
}
```



## 三、babel 相关配置

### 安装 Babel Javascript 插件

在 vscode 中安装这个插件，以支持更新的 es 语法高亮提示。

https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel



### 项目中的 babel.config.js

我们通常通过打包转换工具来引入 babel 及其插件的支持，以便我们在代码中使用最新的 es 特性。

项目目录中的 babel.config.js（通常放置在项目根目录中）中，通常包含当前项目中语法特性相关的插件配置，

这些配置，将影响开发过程中的代码检查，以及代码构建时的打包翻译等。

咱们常见的前端项目 babel 配置示例：

```javascript
module.exports = {
  presets: [
    [
      // 最常用的预设配置，自动按目标环境要求引入相应的转换器，通常与 .browserlistrc 配置文件一起使用
      '@babel/preset-env',
      {
        modules: false, // 不让 babel 处理模块
        useBuiltIns: 'usage', // 按需引入 core-js 代码进行 es3 代码转换
        corejs: 3 // 使用 corejs@3 作为转换目标代码
      }
    ]
  ],
  plugins: [
    // 支持 Vue 的 jsx 语法
    '@vue/babel-plugin-transform-vue-jsx',
    // 链式运算符支持，如：const baz = obj?.foo?.bar
    '@babel/plugin-proposal-optional-chaining',
    // 空合并运算符支持，如：const baz = obj.foo ?? 'bar'
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ]
}
```



### .browserlistrc 配置文件

.browserlistrc 文件是由 browserlist 工具进行解析，以描述相应 js 目标运行环境的配置。

比较常见的，如 @babel/preset-env，postcss/autoprefixer 等转换工具，都会引入 browserlist 对代码目标运行环境进行识别。

一个简单的站点项目运行环境配置：

```
chrome 50
firefox 50
ie 10
```

表示在 chrome >= 50，firefox >= 50，ie > 10 的浏览器环境中运行。



### 安装 vscode One Dark (sublime babel) 主题

https://marketplace.visualstudio.com/items?itemName=joshpeng.theme-onedark-sublime

这个 vscode 主题能更好的支持 babel  javascript 语法高亮显示。





## 四、其他常用 VS Code 插件

在 vscode 中，还有些能提高生产力的插件，比如：

### Version Lens

https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens

当打开 package.json 时，能方便的查看到各种依赖包的最新版本与最新稳定版本，包括私有仓库中的包。



### HTTP Client

https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-http-client

带 UI 的 HTTP 请求工具。



### Path Autocomplete

https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete

自动补全代码中的文件路径，在 vue 文件中也可用。

也可以选用 Path Intellisense。





## 五、完整的 VS Code 自定义设置 (settings.json)

复制时，记得去掉注释

```json
{
  "telemetry.enableTelemetry": false, // 不向微软发送使用数据
  // 格式化时插入函数名与参数括号间的空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  // 禁用自带检查器
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  // 样式部分的按需设置，当使用或未使用外部检查器时
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "postcss.validate": false,
  // 字体和缩进设置
  "editor.fontSize": 20,
  "editor.tabSize": 2,
  // 设置为较细的字体，当字号较大时会好看一些
  "editor.fontWeight": "300",
  // 关闭右侧的代码地图
  "editor.minimap.enabled": false,
  // eslint 检查的代码语言设置
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  // vetur 的一堆设置，参看 vetur 节
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.scriptInitialIndent": true,
  "vetur.format.styleInitialIndent": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "preserve",
      "wrap_line_length": 120
    }
  },
  "vetur.validation.script": false, // 关闭 vetur默认的脚本检查器
  // 使用 OD+ 主题
  "workbench.colorTheme": "One Dark+ (Sublime)",
  // 当文件移动时，更新引用路径
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 终端文字渲染方式
  "terminal.integrated.rendererType": "dom",
  // windows 下，终端设置为 git bash 会比较好看
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  // 终端字体需要大一点点
  "terminal.integrated.fontSize": 16,
  // 设置代码格式化工具
  "[javascript]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
  }
}
```