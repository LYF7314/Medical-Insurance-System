<template>
    <div>
        <h1>drug</h1>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>药品信息维护</span>
            </div>
            <!-- 查询业务 -->
            <el-form :inline="true" :model="drugForm" class="demo-form-inline">
                <el-form-item label="药物ID">
                    <el-input v-model="drugForm.id" placeholder="ID"></el-input>
                </el-form-item>
                <el-form-item label="药物名称">
                    <el-input v-model="drugForm.name" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            <!-- 添加药品业务 -->
                <el-form-item>
                    <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
                </el-form-item>
            </el-form>
                <!-- dialog_start -->
                <el-dialog title="添加药物" :visible.sync="dialogFormVisible" :before-close="handleClose">
                    <!-- 根据实际情况决定是否启用:rules -->
                    <el-form :model="addDrugForm" label-position="left" :rules="rules" ref="form" :inline="true"> 
                        <!-- 第一行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="药品编码">
                                    <el-input v-model="addDrugForm.id"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="药品名称">
                                    <el-input v-model="addDrugForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="收费类别" prop="type">
                                    <el-input v-model="addDrugForm.type" placeholder="0~44"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="收费等级">
                                    <el-input v-model="addDrugForm.chargeLevel" placeholder="0~2"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!-- 第二行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="最高限价">
                                    <el-input v-model="addDrugForm.maxPrice"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="医院等级">
                                    <el-input v-model="addDrugForm.hospitalLevel"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!-- 第三行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="有效标志">
                                    <el-input v-model="addDrugForm.validFlag" placeholder="0~4"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="特检特治">
                                    <el-input v-model="addDrugForm.specialTestingFlag"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="药物规格">
                                        <el-input v-model="addDrugForm.specification"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row> 
                        <!-- 第四行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="开始日期">
                                    <el-date-picker
                                    v-model="addDrugForm.startDate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日">
                                    </el-date-picker>
                                </el-form-item>          
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="结束日期">
                                    <el-date-picker
                                    v-model="addDrugForm.endDate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="cancel">取 消</el-button>
                        <el-button type="primary" @click="submit">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- dialog_end -->
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>药品信息查询</span>
            </div>
            
            <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
                <el-table-column
                    type="index"
                    label="#"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="ID">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="药名">
                </el-table-column>
                <el-table-column
                    prop="chargeType"
                    label="收费类别">
                </el-table-column>
                <el-table-column
                    prop="chargeItemLevel"
                    label="收费项目等级">
                </el-table-column>
                <el-table-column
                    prop="startDate"
                    label="开始日期">
                </el-table-column>
                <el-table-column
                    prop="endDate"
                    label="结束日期">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
  </template>
  
  <script>
  import { getData } from '@/api/drug'
// import axios from 'axios'
  export default {
      data(){
          return{
            drugForm: {
                id: '',
                name: ''
             },
             tableData: [{
                    id: '320234223323432394',
                    name: '安非他命',
                    chargeType: '0',
                    chargeItemLevel: '2',
                    startDate: '2003.4.7',
                    endDate: '2006.3.7',
                }, 
                {
                    id: '927384227294432975',
                    name: '青霉素',
                    chargeType: '1',
                    chargeItemLevel: '3',
                    startDate: '1992.12.5',
                    endDate: '2000.12.4',
                }, 
            ],
            modalType: 0 ,//0表示新增弹窗，1表示编辑
            dialogFormVisible: false,
            addDrugForm: {
                   id:'',
                   name:'',
                   type:'',
                   chargeLevel:'',
                   maxPrice:'',
                   hospitalLevel:'',
                   specification:'',
                   startDate:'',
                   endDate:'',
                   validFlag:'',
                   specialTestingFlag:'',
            },
            formLabelWidth: '120px',
            rules: {
                type: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 0, max: 2, message: '请在指定范围内选择', trigger: 'blur' },
                ]
            },
            // tableData:[],
          }
      },
      mounted() {
        // getData().then((data)=>{
        //     console.log(data)
        // })
      },
      methods:{
        //提交用户表单
        submit(){
            if(this.modalType === 0){
                this.$axios({
                    method: 'post',
                    url: '/url',
                    data: {
                        id:1
                    }
                }).then(res=>{
                    console.log(res.data);
                },err=>{
                    console.log(err);
                })
            }else{

            }
            console.log(this.$refs.form,'提交')
            this.$refs.form.resetFields()
            this.dialogFormVisible = false
        },
        // 弹窗关闭触发
        handleClose(){
            console.log(this.$refs.form,'弹窗关闭')
            this.$refs.form.resetFields()
            this.dialogFormVisible = false
        },
        // handleClose() {
        //     this.$refs.form.resetFields()
        //     this.$nextTick(() => {
        //         // 在下一个事件循环中关闭弹窗
        //         this.dialogFormVisible = false
        //     })
        // },
        cancel(){
            this.handleClose()
        },
        handleEdit(row){

        },
        handleDelete(row){

        },
      }
  }
  </script>
  
  <style>
  .el-row {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  </style>