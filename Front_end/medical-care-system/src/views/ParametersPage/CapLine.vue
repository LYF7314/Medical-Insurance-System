<template>
    <div>
        <h1>CapLine：封顶线</h1>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>封顶线维护</span>
            </div>
            <!-- 查询业务 -->
            <el-form :inline="true" :model="capLineForm" class="demo-form-inline">
                <el-form-item label="医疗人员类别">
                    <el-input v-model="capLineForm.medicalPersonnelType" placeholder="PERSONNEL TYPE"></el-input>
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
                <el-dialog title="添加单位" :visible.sync="dialogFormVisible" :before-close="handleClose">
                    <!-- 根据实际情况决定是否启用:rules -->
                    <el-form :model="addThresholdForm" label-position="left" :rules="rules" ref="form" :inline="true"> 
                        <!-- 第一行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="医疗类别">
                                    <el-input v-model="addThresholdForm.medicalType"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="医疗人员类别">
                                    <el-input v-model="addThresholdForm.medicalPersonnelType"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!-- 第二行 -->
                        <el-row gutter=10>
                            <el-col :span="12">
                                <el-form-item label="医院等级" prop="type">
                                    <el-input v-model="addThresholdForm.hospitalLevel"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="起付标准">
                                    <el-input v-model="addThresholdForm.standard"></el-input>
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
                <span>起付标准查询</span>
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
                    prop="medicalType"
                    label="医疗类别">
                </el-table-column>
                <el-table-column
                    prop="medicalPersonnelType"
                    label="医疗人员类别">
                </el-table-column>
                <el-table-column
                    prop="hospitalLevel"
                    label="医院等级">
                </el-table-column>
                <el-table-column
                    prop="standard"
                    label="起付标准">
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
            capLineForm: {
                medicalPersonnelType: '',
             },
             tableData: [{
                medicalPersonnelType: '',
                medicalType: '',
                hospitalLevel:'',
                standard:"",
                }, 
            ],
            dialogFormVisible: false,
            addThresholdForm: {
                medicalPersonnelType: '',
                medicalType: '',
                hospitalLevel:'',
                standard:"",
            },
            formLabelWidth: '120px',
            rules: {
                type: [
                { required: true, message: '请输入', trigger: 'blur' },
                { min: 0, max: 2, message: '请在指定范围内选择', trigger: 'blur' },
                ]
            },
            // tableData:[],
            modalType: 0 //0表示新增弹窗，1表示编辑
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