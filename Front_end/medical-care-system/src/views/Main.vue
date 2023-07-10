<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <Common-aside></Common-aside>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
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
  export default {
      data(){
          return{}
      },
      components:{
        CommonAside
      }
  }
  </script>
  
  <style>
  
  </style>