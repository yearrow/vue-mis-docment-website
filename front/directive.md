### 功能权限控制

>功能权限控制通过`v-permissionSetting`来控制功能按钮是否渲染

##### 用法
```javascript
 <el-button 
    type="primary" 
    icon="plus" 
    size="small" 
    v-permissionSetting"Roles.Create"  
    @click="_add" >添加</el-button>
    
 ```

 >注意：如果按钮不需要权限控制，传入`v-permissionSetting="show" `即可。


---


