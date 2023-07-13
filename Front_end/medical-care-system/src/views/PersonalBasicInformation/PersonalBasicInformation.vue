<template>
    <div>
        <h1>personal basic information</h1>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>人员信息维护</span>
            </div>
            <!-- 查询业务 -->
            <el-form :inline="true" :model="personForm" class="demo-form-inline">
                <el-form-item label="ID">
                    <el-input v-model="personForm.id" placeholder="ID"></el-input>
                </el-form-item>
                <el-form-item label="人名">
                    <el-input v-model="personForm.name" placeholder="名称"></el-input>
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
                <el-dialog title="添加人员" :visible.sync="dialogFormVisible" :before-close="handleClose">
                    <!-- 根据实际情况决定是否启用:rules -->
                    <el-form :model="addPersonForm" label-position="left" :rules="rules" ref="form" :inline="true"> 
                        <!-- 第一行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="人员编码">
                                    <el-input v-model="addPersonForm.id"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="人名">
                                    <el-input v-model="addPersonForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="性别" prop="type">
                                    <el-input v-model="addPersonForm.gender" placeholder="0~44"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="民族">
                                    <el-input v-model="addPersonForm.ethnicity" placeholder="0~55"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!-- 第二行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="证件类型">
                                    <el-input v-model="addPersonForm.documentType"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="证件编号">
                                    <el-input v-model="addPersonForm.documentNumber"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!-- 第三行 -->
                        <!-- <el-row gutter=10>
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
                        </el-row>  -->
                        <!-- 第四行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="出生日期">
                                    <el-date-picker
                                    v-model="addPersonForm.birthDate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日">
                                    </el-date-picker>
                                </el-form-item>          
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="参加工作日期">
                                    <el-date-picker
                                    v-model="addPersonForm.workDate"
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
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="gender"
                    label="性别">
                </el-table-column>
                <el-table-column
                    prop="ethnicity"
                    label="名族">
                </el-table-column>
                <el-table-column
                    prop="birthDate"
                    label="出生日期">
                </el-table-column>
                <el-table-column
                    prop="workDate"
                    label="工作日期">
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
  export default {
      data(){
          return{
            personForm: {
                id: '',
                name: '',
             },
             tableData: [{
                    id: '',
                    name: '',
                    ethnicity: '',
                    gender: '',
                    birthDate: '',
                    workDate: '',
                }, 
            ],
            dialogFormVisible: false,
            addPersonForm: {
                id: '',
                name: '',
                ethnicity: '',
                gender: '',
                documentType:'',
                documentNumber:'',
                birthDate: '',
                workDate: '',
            },
            formLabelWidth: '120px',
            rules: {
                type: [
                { required: true, message: '请输入性别', trigger: 'blur' },
                { min: 0, max: 2, message: '请在指定范围内选择', trigger: 'blur' },
                ]
            },
            // tableData:[],
            modalType: 0 ,//0表示新增弹窗，1表示编辑
          }
      },
      methods:{
        //提交用户表单
        submit(){
            if(this.modalType === 0){
                
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