<template>
  <div class="header-container">
    <div class="l-container">
        <el-button icon="el-icon-menu" size="mini"></el-button>
        <!-- 面包屑 -->
        <span class="text">首页</span>
    </div>
    <div class="r-container">
        <el-dropdown>
            <span class="el-dropdown-link">
                {{ name }},您好！<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>密码修改</el-dropdown-item>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            name:"XXX",
        }
    }
}
</script>

<style>
    .header-container {
        padding: 0 20px;
        background-color: #333;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
</style>