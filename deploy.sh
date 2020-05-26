###
 # @Description: 未描述
 # @Author: danielmlc
 # @Date: 2020-02-04 18:14:14
 # @LastEditTime: 2020-05-26 11:21:13
### 

 ###
set -e

# 生成静态文件
npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:YLSoftWorkGroup/YlDocument.git master:gh-pages 

cd -


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:YLSoftWorkGroup/YlDocument.git master 