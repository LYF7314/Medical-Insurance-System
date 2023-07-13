<template>
    <div class="ParametersPage">
        <h1>This is Parameters</h1>
        <el-card>
            <h4>请选择参数：</h4>
            &nbsp;
            <el-button>
                <!-- <el-link href="/medical/arg/pay" target="_self">起付标准</el-link> -->
                <router-link to="/medical/arg/pay">起付标准</router-link>
            </el-button>
            &nbsp;
            <el-button>
                <!-- <el-link href="/medical/arg/ceil" target="_self">封顶线</el-link> -->
                <router-link to="/medical/arg/ceil">封顶线</router-link>
            </el-button>
            &nbsp;
            <el-button>
                <!-- <el-link href="/medical/arg/ratio" target="_self">分段比例</el-link> -->
                <router-link to="/medical/arg/ratio">分段比例</router-link>
            </el-button>
        </el-card>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{}
      }
  }
  </script>
  
  <style>
  /* em {
    font-size:;
  } */
  </style>