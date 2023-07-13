<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router="true">
      <h3>医疗保险系统</h3>
      <!-- 主页 -->
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
    <!-- 公共业务 -->
    <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">公共业务</span>
        </template>
        <el-menu-item index="/common/company">单位基本信息维护</el-menu-item>
        <el-menu-item index="/common/person">个人基本信息维护</el-menu-item>
    </el-submenu>
      <!-- 医疗基本信息维护 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">医疗基本信息维护</span>
        </template>
        <el-menu-item index="/medical/drug">药品信息维护</el-menu-item>
        <el-menu-item index="/ToBeContinue">诊疗项目信息维护</el-menu-item>
        <el-menu-item index="/ToBeContinue1">服务设施项目维护</el-menu-item>
        <el-menu-item index="/medical/disease">病种信息维护</el-menu-item>
        <el-menu-item index="/medical/hospital">定点医疗机构信息维护</el-menu-item>
        <el-menu-item index="/medical/arg">医疗待遇计算参数维护</el-menu-item>
      </el-submenu>
      <!-- 医疗待遇审批 -->
          <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span slot="title">医疗待遇审批</span>
        </template>
        <el-menu-item index="/ToBeContinue2">人员就诊机构审批</el-menu-item>
        <el-menu-item index="/ToBeContinue3">特检特治审批</el-menu-item>
    </el-submenu>
      <!-- 医保中心报销 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-finance"></i>
          <span slot="title">医保中心报销</span>
        </template>
        <el-menu-item index="/ToBeContinue4">中心报销</el-menu-item>
        <el-menu-item index="/ToBeContinue5">取消报销</el-menu-item>
    </el-submenu>
      <!-- 综合查询 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">综合查询</span>
        </template>
        <el-menu-item index="/ToBeContinue6">医疗人员费用查询</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
 export default {
      data() {
        return {
          isCollapse: false,
          menuData:[{
            path:"",
            name:"",
            label:"",
            url:"",
          }]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //点击菜单
        clickMenu(){

        }
      }
    }
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-menu {
      height: 100vh;
      h3 {
        color:#fff;
        text-align:center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400px;
      }
    }
</style>template


  
 