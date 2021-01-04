# npm仓库使用

## 私有仓库使用说明


### 前言：关于 yarn 和 npm

虽然 npm 自 5.0 后进步很大，但到目前版本 (6.4)，在依赖安装速度、下载文件数量各方面与当前的 yarn (1.9) 还是有所差距。

下边的说明中，会同时给出 yarn 与 npm 的命令，希望大家借此了解 yarn 的用法。





### 1、 访问地址与权限

私有仓库采用 Verdaccio 搭建，地址为:

``` url
https://npm.mctech.vip
```

由于仓库使用了 SSL 安全协议，当使用 *npm* 或 *yarn* 进行访问的时候，可能提示:

```error
unable to verify the first certificate
```

这时，需要使用命令行对 ssl 安全设置进行下调整，

npm :

``` bash
npm config set strict-ssl false
```

yarn :

```bash
yarn config set strict-ssl false
```



#### 用户权限

私有仓库权限分为 **一般用户** 与 **发布用户** 两种，只有 **发布用户** 能够进行 *publish* 操作。

账号与密码另行告知。



### 2、 设置私有仓库 scope

#### npm 的 scope 特性

npm 中，所有的包都有一个名称。scope 是包名称中，将相关的包进行分类描述的一种方式。

表现为：

```
@myscope/mypackage
```

在 package.json 中，私有包名中，必须包含 scope 前缀:

```json
{
  "name": "@mctech/mypackage",
  ...
}
```

npm 的一些命令，可以利用 scope 特性进行特定的处理。

#### 我们的 scope

目前，梦诚私有 npm 仓库中包含 “梦诚包” 和 “陕梦包” scope。

梦诚：**mctech**

陕梦：**yearrow**

使用如下命令进行 npm scope 与仓库地址的关联设置

``` bash
npm config set @mctech:registry https://npm.mctech.vip
npm config set @yearrow:registry https://npm.mctech.vip
```

设置完成后，当包名称中包含 *@mctech* 和 *@yearrow* 前缀时，npm 命令都会连接 https://npm.mctech.vip 进行操作。

<!--这里并不需要额外进行 *yarn config set* 设置，yarn 会自动共用 npm 的相关设置。-->



### 3、 登录私有仓库

使用私有仓库时，需要指定对应的用户登录名与密码：

``` bash
npm login --registry=https://npm.mctech.vip --scope=@mctech
```

``` bash
npm login --registry=https://npm.mctech.vip --scope=@yearrow
```



*npm* 会询问 *username、password、email* 等信息。

<!--同样，这里也不需要额外使用 *yarn login* 进行登录设置。-->



### 4、 安装私有包依赖

*package.json* 中，依赖的私有包名称必须包含 *@mctech* 或 *@yearrow* 前缀：

```json
"dependencies": {
  "@mctech/iwop-desktop-framework": "^0.1.17",
  "@yearrow/mypackage": "^1.0.0"
}
```

安装依赖:

```bash
npm install
```

```bash
yarn
```



添加依赖:

```bash
npm add @mctech/mypackage
```

```bash
yarn add @yearrow/mypackage
```



不使用版本号进行正式版本与开发版本，使用不同的 scope 进行区分。**

**当切换正式版本与开发版本时，切记修改依赖的包名中的 scope 前缀。**

**不再使用 git 作为依赖源。**



代码中引用私有包，也需要加上含 scope 前缀的包名：

```javascript
const mypkg = require('@mctech/mypackage')
```



### 5、 发布私有包

发布私有包，与发布公共包一致:

```bash
npm publish
npm publish --access restricted
```

```bash
yarn publish
```



其中，*--access restricted* 参数在发布私有包时为默认参数



#### 私有包 package.json 配置

```json
{
    "name": "@mctech/mypackage",
    "files": [
        "src",
        "dist"
    ],
    "main": "src/index.js",
    "module": "dist/mypackage.es.js"
}
```

当发布私有包时，尽量在 package.json 中设置 *files* 属性，用来指定包中包含的文件。

如果发布之前有打包过程，尽量只在 files 中包含打包后的文件。

*main* 属性指定包的入口文件，通常是 cjs 模块输出文件，

如果是 es 模块，通过 *module* 属性来指定包的入口文件。





### 额外的内容

#### 使用 nrm 进行 npm 源管理

nrm 是一个非常方便的进行 npm 源管理的工具，当使用多个公共源并需要进行切换时，使用 nrm 非常方便。

安装：

``` bash
sudo npm i nrm -g
```

```bash
sudo yarn global add nrm
```



显示当前配置的源：

```bash
nrm ls
```

添加源：

```
nrm add myregistry htts://r.myurl.com
```

选择源：

```bash
nrm use myregistry
```

更多详细说明请访问：

[]: https://github.com/Pana/nrm



#### 使用本地包代码调试

在开发公共包的时，有时候需要在其他项目中依赖该开发中的包进行调试，

这时候可以使用 link 模式依赖本地包的代码。

示例：

假设被依赖的包名为：@mctech/foo。

首先，在 @mctech/foo 包的源码目录下执行：

``` bash
npm link
```

或：

``` bash
yarn link
```

然后，在要依赖上述包的项目路径下，执行：

``` bash
npm link @mctech/foo
```

或：

``` bash
yarn link @mctech/foo
```

调试完成后，可以用 unlink 命令移除本地连接：

``` bash
npm unlink @mctech/foo
```

或：

``` bash
yarn unlink @mctech/foo
```