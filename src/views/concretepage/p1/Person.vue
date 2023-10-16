<template>
    <div class="myperson">
        <div class="myperson_shadow" v-show="shadowshow!=0"></div>
        <div class="myperson_add" v-show="shadowshow==1">
            <div class="myperson_add_div">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="id">
                        <el-input v-model="ruleForm.id"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="人员编号" prop="code">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-form-item>
                    <el-form-item label="人员类型" prop="type">
                        <el-select v-model="ruleForm.type" placeholder="请选择人员类型">
                            <el-option label="工作人员" value="工作人员"></el-option>
                            <el-option label="管理人员" value="管理人员"></el-option>
                            <el-option label="指挥人员" value="指挥人员"></el-option>
                            <el-option label="专家人员" value="专家人员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="年龄" required>
                        <el-col :span="11">
                            <el-form-item prop="age">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.age" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="账号状态" prop="state">
                        <el-select v-model="ruleForm.state" placeholder="请选择账号状态">
                            <el-option label="正常" value="正常"></el-option>
                            <el-option label="停用" value="停用"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <div style="display: flex;flex-direction: row;">
                            <div>
                                <el-button type="primary" @click="back">返回</el-button>
                            </div>
                            <div style="margin-left: 150px">
                                <el-button type="primary" @click="submitForm()">立即创建</el-button>
                            </div>

                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="myperson_add" v-show="shadowshow==2">
            <div class="myperson_add_div">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="id">
                        <el-input v-model="ruleForm.id"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="人员编号" prop="code">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-form-item>
                    <el-form-item label="人员类型" prop="type">
                        <el-select v-model="ruleForm.type" placeholder="请选择人员类型">
                            <el-option label="工作人员" value="工作人员"></el-option>
                            <el-option label="管理人员" value="管理人员"></el-option>
                            <el-option label="指挥人员" value="指挥人员"></el-option>
                            <el-option label="专家人员" value="专家人员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="年龄" required>
                        <el-col :span="11">
                            <el-form-item prop="age">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.age" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="账号状态" prop="state">
                        <el-select v-model="ruleForm.state" placeholder="请选择账号状态">
                            <el-option label="正常" value="正常"></el-option>
                            <el-option label="停用" value="停用"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <div style="display: flex;flex-direction: row;">
                            <div>
                                <el-button type="primary" @click="back">返回</el-button>
                            </div>
                            <div style="margin-left: 75px">
                                <el-button type="danger" @click="mydelete">删除</el-button>
                            </div>
                            <div style="margin-left: 75px">
                                <el-button type="primary" @click="mychange">修改</el-button>
                            </div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="myperson_add" v-show="shadowshow==3">
            <div class="myperson_add_div">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">


                    <el-form-item label="姓名">
                        <el-input placeholder="填写姓名" v-model="ruleForm2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="账号">
                        <div class="myperson_choose_id">
                            <div>
                                <el-input placeholder="填写(小)账号" v-model="ruleForm2.id1"></el-input>
                            </div>
                            <div>
                                ~
                            </div>
                            <div>
                                <el-input placeholder="填写(大)账号" v-model="ruleForm2.id2"></el-input>
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="人员编号">
                        <div class="myperson_choose_id">
                            <div>
                                <el-input placeholder="填写(小)编号" v-model="ruleForm2.code1"></el-input>
                            </div>
                            <div>
                                ~
                            </div>
                            <div>
                                <el-input placeholder="填写(大)编号" v-model="ruleForm2.code2"></el-input>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="年龄" required>
                        <div class="myperson_choose_age">
                            <div>
                                <el-col :span="20">
                                    <el-form-item>
                                        <el-date-picker type="date" placeholder="选择日期(久)" v-model="ruleForm2.age1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </div>
                            <div>~</div>
                            <div>
                                <el-col :span="20">
                                    <el-form-item>
                                        <el-date-picker type="date" placeholder="选择日期(近)" v-model="ruleForm2.age2" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="人员类型">
                        <el-select v-model="ruleForm2.type" placeholder="请选择人员类型">
                            <el-option label="工作人员" value="工作人员"></el-option>
                            <el-option label="管理人员" value="管理人员"></el-option>
                            <el-option label="指挥人员" value="指挥人员"></el-option>
                            <el-option label="专家人员" value="专家人员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="账号状态">
                        <el-select v-model="ruleForm2.state" placeholder="请选择账号状态">
                            <el-option label="正常" value="正常"></el-option>
                            <el-option label="停用" value="停用"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="ruleForm2.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <div style="display: flex;flex-direction: row;">
                            <div>
                                <el-button type="primary" @click="back">返回</el-button>
                            </div>
                            <div style="margin-left: 150px">
                                <el-button type="primary" @click="mychoose">筛选</el-button>
                            </div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div style="height: 30px;width: 100%"></div>
        <div class="myperson_operation">
            <div class="myperson_operation_1">
                <div class="myperson_operation_1_1" @click="mypersonchoose">高级筛选</div>
                <div class="myperson_operation_1_2">
                    <div>{{chooseconfiguration}}</div>
                </div>
            </div>
            <div class="myperson_operation_2">
                <div class="myperson_operation_2_1" @click="change">修改</div>
                <div class="myperson_operation_2_2" @click="add">新增</div>
            </div>
        </div>
        <div class="myperson_table">
            <div class="myperson_table_div">
                <el-table
                    :data="tableData.slice(0,8)"
                    style="width: 100%"
                    v-loading="loading"
                    @cell-click="danji"
                    @cell-dblclick="shuangji"
                    :highlight-current-row="highlight"
                >
                    <el-table-column
                            prop="id"
                            label="账号"
                            width="80"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="password"
                            label="密码"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="age"
                            label="年龄"
                            width="160"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="code"
                            label="人员编号"
                            width="100"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="人员类型"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="账号状态"
                            width="100">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="myperson_pages">
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000"
                style="font-weight: normal">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    import store from "../../../store";

    export default {
        name: "Person.vue",

        data() {
            return {
                tableData: [
                    {
                    id: 1,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '1994-11-20',
                    code: "003",
                    type: "管理人员",
                    state: "正常"
                }, {
                    id: 2,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '1996-11-20',
                    code: "004",
                        type: "工作人员",
                    state: "停用"
                },{
                    id: 3,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '2000-11-20',
                    code: "005",
                        type: "工作人员",
                    state: "正常"
                },{
                    id: 4,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '2000-11-20',
                    code: "008",
                        type: "工作人员",
                    state: "正常"
                },{
                    id: 5,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '2000-11-20',
                    code: "006",
                        type: "工作人员",
                    state: "正常"
                },{
                    id: 6,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '1996-11-20',
                    code: "007",
                        type: "指挥人员",
                    state: "正常"
                },{
                    id: 7,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '1990-11-20',
                    code: "009",
                        type: "专家人员",
                    state: "正常"
                },{
                    id: 8,
                    password: "123",
                    name: '张三',
                    sex: '男',
                    age: '2000-11-20',
                    code: "010",
                        type: "指挥人员",
                    state: "正常"
                },{
                        id: 9,
                        password: "123",
                        name: '张三',
                        sex: '男',
                        age: '1998-11-20',
                        code: "011",
                        type: "指挥人员",
                        state: "正常"
                    },
                    {
                        id: 10,
                        password: "123",
                        name: '张三',
                        sex: '男',
                        age: '1999-11-20',
                        code: "012",
                        type: "指挥人员",
                        state: "正常"
                    },
                    {
                        id: 11,
                        password: "123",
                        name: '张三',
                        sex: '男',
                        age: '2000-11-20',
                        code: "003",
                        type: "指挥人员",
                        state: "正常"
                    }],
                loading: false,
                currentPage3: 1,
                shadowshow: 0,
                highlight: true,

                ruleForm: {
                    id: '',
                    password: '',
                    name: "",
                    sex: "",
                    code: "",
                    type: "",
                    age: '',
                    state: "",
                },

                rules: {
                    id: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入员工编号', trigger: 'blur' },
                        { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    age: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择人员类型', trigger: 'change' }
                    ],
                    state: [
                        { required: true, message: '请选择人员类型', trigger: 'change' }
                    ],
                },
                ruleForm2: {
                    name: '',
                    id1: '',
                    id2: '',
                    code1: "",
                    code2: "",
                    age1: "",
                    age2: "",
                    type: "",
                    state: "",
                    sex: ""
                },
                chooseconfiguration:"",


            }
        },
        methods:{
            handleSizeChange(val) {
                var that = this;
                that.loading=true;
                setTimeout(function () {
                    that.loading=false;
                },1000)
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                var that = this;
                that.loading=true;
                setTimeout(function () {
                    that.loading=false;
                },1000)
                console.log(`当前页: ${val}`);
            },


            submitForm() {
                var that = this;
                that.ruleForm = {
                    id: '',
                    password: '',
                    name: "",
                    sex: "",
                    code: "",
                    type: "",
                    age: '',
                    state: "",
                };
                if (that.shadowshow==0){
                    that.shadowshow=1;
                }else{
                    that.shadowshow=0;
                    that.loading=true;
                    setTimeout(function () {
                        that.loading=false;
                    },1000)
                };
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            change(){
                var that = this;
                if (that.shadowshow==0){
                    if (that.ruleForm.id==""){
                        alert("请先选择一行内容");
                    }else{
                        that.shadowshow=2;
                        // this.highlight=false;
                        // this.highlight=true;
                    }
                }else {

                }
            },
            back(){
                this.shadowshow = 0;
                this.ruleForm={
                    id: '',
                    password: '',
                    name: "",
                    sex: "",
                    code: "",
                    type: "",
                    age: '',
                    state: "",
                };
            },
            mydelete(){
                // var num = this.ruleForm.id;
                //删除
                var that = this;
                this.$confirm('此操作将删除该消息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                    that.shadowshow = 0;
                    that.ruleForm={
                        id: '',
                        password: '',
                        name: "",
                        sex: "",
                        code: "",
                        type: "",
                        age: '',
                        state: "",
                    };
                    that.loading=true;
                    setTimeout(function () {
                        that.loading=false;
                    },1000)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            mychange(){
                this.shadowshow = 0;
                this.ruleForm={
                    id: '',
                    password: '',
                    name: "",
                    sex: "",
                    code: "",
                    type: "",
                    age: '',
                    state: "",

                };
                var that = this;
                this.loading=true;
                setTimeout(function () {
                    that.loading=false;
                },1000)
            },
            add(){
                var that = this;
                // this.highlight=false;
                if (that.shadowshow==0){
                    that.shadowshow=1;
                }else{
                    that.shadowshow=0;
                    that.loading=true;
                    setTimeout(function () {
                        that.loading=false;
                    },1000)
                }
            },
            danji(row,column,event,cell){
                console.log(row)
                console.log(column)
                console.log(event)
                console.log(cell)
                // this.highlight=true;
                this.ruleForm = row;
            },
            shuangji(row){
                // this.highlight=true;
                this.ruleForm = row;
                this.change();
            },
            mypersonchoose(){
                this.shadowshow = 3;
                this.ruleForm2={
                    name: '',
                    id1: '',
                    id2: '',
                    code1: "",
                    code2: "",
                    age1: "",
                    age2: "",
                    type: "",
                    state: "",
                    sex: ""
                };
                this.chooseconfiguration="";
            },
            mychoose(){
                var that = this;
                if (that.ruleForm2.name!=""){
                    that.chooseconfiguration += "姓名为"+that.ruleForm2.name+", ";
                }
                if (that.ruleForm2.id1!=""&&that.ruleForm2.id2!=""){
                    that.chooseconfiguration += "账号区间为"+that.ruleForm2.id1+"~"+that.ruleForm2.id2+", ";
                }
                if (that.ruleForm2.code1!=""&&that.ruleForm2.code2!=""){
                    that.chooseconfiguration += "人员编号区间为"+that.ruleForm2.code1+"~"+that.ruleForm2.code2+", ";
                }
                if (that.ruleForm2.age1!=""&&that.ruleForm2.age2!=""){
                    that.chooseconfiguration += "年龄区间为"+that.ruleForm2.age1.toString()+"~"+that.ruleForm2.age2.toString()+", ";
                }
                if (that.ruleForm2.type!=""){
                    that.chooseconfiguration += "人员类型为"+that.ruleForm2.type+", ";
                }
                if (that.ruleForm2.state!=""){
                    that.chooseconfiguration += "账号状态为"+that.ruleForm2.state+", ";
                }if (that.ruleForm2.sex!=""){
                    that.chooseconfiguration += "性别为"+that.ruleForm2.sex+", ";
                }

                that.shadowshow=0;
            }
        }
    }
</script>

<style scoped>
    .myperson_choose_id{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        align-content: center;
    }
    .myperson_choose_age{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        align-content: center;
    }
    .myperson_choose_age div:first-child,
    .myperson_choose_age div:last-child{
        width: 90%;
        /*background-color: red;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .myperson_choose_id div:first-child,
    .myperson_choose_id div:last-child{
        width: 60%;
    }
    .myperson_operation_1_2{
        /*background-color: red;*/
        width: 400px;
        height: 64px;
        margin-left: 10px;
        margin-right: 10px;
        align-content: center;
        /*background-color: red;*/
        word-wrap:break-word;
        padding: 2px;
        color: #999999;
        display: flex;
        justify-content:center;
        align-items:Center;
    }
    .myperson_operation_1_2 div{
        /*background-color: pink;*/
        min-height: 30px;
        line-height: 30px;
        height: auto;
        word-wrap:break-word;
    }
    .myperson_add_div{
        /*background-color: red;*/
        width: 80%;
        height: 91%;
        margin: auto;
        overflow: hidden;
    }
    .myperson_add{
        z-index: 3;
        width: 600px;
        height: 600px;
        background-color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
    }
    .myperson .myperson_shadow{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        z-index: 2;
    }
    .myperson{
        width: 100%;
        box-sizing: border-box;
        /*padding-top: 30px;*/
        background-color: #FAFAFA;
    }
    .myperson_operation{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 60px;
        color: white;
        font-size: 12px;
        width: 700px;
        margin: auto;
        /*background-color: green;*/
    }
    .myperson_operation_1{
        /*background-color: pink;*/
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .myperson_operation_1_1{
        background-color: #0089FF;
        width: 80px;
        height: 30px;
        margin: auto;
        line-height: 30px;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
    }
    .myperson_operation_1_1:hover{
        background-color: #51AEFE;
    }
    .myperson_operation_2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /*background-color: gold;*/
        width: 200px;
        /*background-color: pink;*/
        text-align: center;
    }
    .myperson_operation_2_1{
        background-color: #0089FF;
        width: 50px;
        height: 30px;
        margin: auto 0;
        line-height: 30px;
        border-radius: 6px;
        cursor: pointer;
        transition: all .3s;
    }
    .myperson_operation_2_1:hover{
        background-color: #51AEFE;
    }
    .myperson_operation_2_2{
        background-color: #0089FF;
        width: 50px;
        height: 30px;
        margin: auto 0;
        line-height: 30px;
        border-radius: 6px;
        cursor: pointer;
        transition: all .3s;
    }
    .myperson_operation_2_2:hover{
        background-color: #51AEFE;
    }
    .myperson_table{
        width: 60%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .myperson_table_div{
        width: 740px;
        /*margin: auto;*/

    }
    .myperson_pages{
        width: 700px;
        margin: 30px auto;
        /*background-color: pink;*/
    }
    .block{
        margin: auto;
        /*background-color: red;*/
        width: 75%;
    }
</style>