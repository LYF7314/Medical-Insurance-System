<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <Common-aside></Common-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <el-main>
                    <!-- <h1>This is MainPage</h1> -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
  </template>
  
  <script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue';
  export default {
      data(){
          return{}
      },
      components:{
        CommonAside,
        CommonHeader,
      }
  }
  </script>
  
  <style>
  .el-header{
    padding:0px;
  }
  </style>