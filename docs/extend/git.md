# git常用命令

> 按照日常使用场景编写命令组

## pull项目


### 下拉一个新项目

```bash

 # 初始化git
 git init  
 
 # 远程拉取仓库  url为仓库地址。
 git clone url 

```

---


### 下拉并更新本地仓库

>如果远程库更新，本地代码未做修改时 下拉远程仓库并覆盖本地，命令如下：

```bash


# 更细本地某个分支
git pull 'temp'

# 更新本地所有分支
git pull --all


```


---

## push项目


### 推送一个新建项目

> 新建项目需要现在github上建立一个空仓库 之后执行以下命令：

```bash

    #提交代码至本地仓库
    git add .   
    
    #提交代码至本地仓库
    git commit -m '注释' 

    #指定远程仓库(如果之前指定过地址了跳过本次)
    git remote add origin url  

    #提交代码至远程仓库
    git push -u orgin master  


```
### 推送覆盖远程仓库

> 如果确认要全部覆盖远程仓库内容时：


```bash

   #提交代码至本地仓库
    git add .   
    
    #提交代码至本地仓库
    git commit -m '注释' 

    #指定远程仓库(如果之前指定过地址了跳过本次)
    git remote add origin url  

    #提交代码至远程仓库
    git push -u orgin master  --force 

···

### 推送并选择性更新项目中的内容


> 多人共同维护一个项目时，每次提交时需要合并项目再提交。


命令如下：


```bash

# 远程仓库代码下载到缓存分支

git fetch origin master:temp

# 比较两个版本 （查看版本差异）
git diff temp  

# 合并分支 
git merge temp

# 手动合并完后提条至远程仓库 并删除本地缓存分支

git commit -m '注释'

git push -u origin master

git branch -d temp




```


---

## 其他常用命令

### 配置用户信息

```bash

    #查看配置列表
    git  config  list  


    # 设置提交代码时的用户信息
     git config [--global] user.name "[name]"
     git config [--global] user.email "[email address]"


```
---

### 增加/删除文件

``` bash
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]


```

---

### 代码提交

```bash
# 提交暂存区到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...

```

### 分支

```bash

    # 列出所有本地分支
    git branch

    # 列出所有远程分支
    git branch -r

    # 列出所有本地分支和远程分支
    git branch -a

    # 新建一个分支，但依然停留在当前分支
    git branch [branch-name]

    # 新建一个分支，并切换到该分支
    git checkout -b [branch]


    # 切换到指定分支，并更新工作区
    git checkout [branch-name]
    
    # 合并指定分支到当前分支
    git merge [branch]

     # 删除分支
    git branch -d [branch-name]

    # 删除远程分支
    git push origin --delete [branch-name]
    git branch -dr [remote/branch]

```
---

### 远程同步

```bash
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all

```

### 配置SSK

```bash

# 生成sshkey命令
ssh-keygen

```

之后在`C:\Users\danielmlc\.ssh`中查找`id_rsa.pub`文件。
将其中的key添加至github账号ssk中管理即可。










