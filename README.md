# SE3330

项目选题:集成校园内各活动的网站 

项目主页:https://sjtu.feishu.cn/docx/NsgDdyYiZooY2GxfcxXccwennWf 

界面原型迭代计划:https://sjtu.feishu.cn/docx/AK30d5jsbojMx2xG6bscE5hqnye  



### 分支设计

- main：一个稳定的分支，只管理软件版本。只能从其他分支合并，不能在这个分支直接修改。
- develop：工作分支，每个人在develop上面创建一个自己的feature分支，写完一部分后合并到develop上
- feature_x：根据不同功能开发的分支，带上自己的名字，写完后push到远程，合并到develop
- bug分支：临时分支，修bug的时候创建

![img](https://gitee.com/Doris_BugMaker/img/raw/master/aba6f827b5e5288b78c1da4402f2051.jpg)

