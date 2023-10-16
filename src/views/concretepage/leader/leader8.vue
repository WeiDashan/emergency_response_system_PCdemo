<template>
    <div class="myperson">
        <div class="myperson_shadow" v-show="shadowshow!=0"></div>
        <div class="myperson_add" v-show="shadowshow==2">
            <div class="myperson_add_div">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-scrollbar style="width:100%">
                        <el-form-item class="inputDeep" label="名称" prop="id">
                            <el-input v-model="ruleForm.id"></el-input>
                        </el-form-item>
                        <el-form-item class="inputDeep" label="接报编码" prop="password">
                            <el-input v-model="ruleForm.password"></el-input>
                        </el-form-item>

                        <el-form-item label="流程类型" prop="state">
                            <el-select v-model="ruleForm.state" placeholder="请选择流程类型">
                                <el-option label="流程选择" value="流程选择"></el-option>
                                <el-option label="自然灾害" value="物资分配"></el-option>
                                <el-option label="指挥人员" value="风险企业"></el-option>
                                <el-option label="专家人员" value="道路分配"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="审批内容" prop="code">
                            <el-input></el-input>
                        </el-form-item>
                    </el-scrollbar>
                    <div style="display: flex;align-content: center;margin-left: 30px">
                        <div>
                            <el-button @click="back">返回</el-button>
                        </div>
                        <div style="margin-left: 75px">
                            <el-button type="primary" @click="mydelete">确定</el-button>
                        </div>
                        <div style="margin-left: 75px">
                            <el-button type="warning" @click="mydeal">紧急事件处理</el-button>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>

        <div class="myperson_operation">
<!--            <div class="myperson_operation_2_1" @click="mychange">详情</div>-->
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
                            label="名称"
                            width="120"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="password"
                            label="接报编码"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="流程类型"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="age"
                            label="事件报警人"
                            width="120"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="code"
                            label="报警人联系电话"
                            width="150"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="接报时间 "
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="enterprise"
                            label="风险企业"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="lastPerson"
                            label="最后更新者"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="lastTime"
                            label="最后更新时间"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="接报状态"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="nowState"
                            label="流程进行状况"
                            width="120">
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
        name: "leader8.vue",
        data() {
            return {
                tableData: [
                    {
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    },{
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "风险企业",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "风险企业",
                        nowState:"80%"
                    },{
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    },{
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    },{
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "物资分配",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "道路设置",
                        nowState:"80%"
                    },
                    {
                        id: "苏家屯泥石流",
                        password: "123",
                        name: '泥石流',
                        sex: '男',
                        age: '李翠莲',
                        code: "13352419546",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "物资分配",
                        nowState:"80%"
                    }, {
                        id: "境外新冠输入",
                        password:"145" ,
                        name: '新冠',
                        sex: '男',
                        age: '张伊达',
                        code: "18736895978",
                        type: "2020-1-12",
                        enterprise:"东软睿道",
                        lastPerson:"李贵玲",
                        lastTime:"2020-1-12",
                        state: "物资分配",
                        nowState:"80%"
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
                }


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


            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
            mydeal(){
                // var num = this.ruleForm.id;
                //删除
                var that = this;
                this.$confirm('要进行紧急事件处理吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '进入紧急事件处理!',
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
                    // this.$router.push(
                    //     'leader9'
                    // );
                    store.state.shenpistep.stepnnum=0;
                    store.state.personnum.num=9
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            add(){
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
                // this.highlight=true;
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
            }
        }
    }
</script>

<style scoped>
    .myperson_add_div{
        /*background-color: red;*/
        width: 80%;
        height: 90%;
        margin: auto;
    }
    .myperson_add{
        z-index: 3;
        width: 600px;
        height: 350px;
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
        padding-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 60px;
        color: white;
        font-size: 12px;
        width: 700px;
        margin-left: 30px;
    }
    .myperson_operation_2_1{
        background-color: #51AEFE;
        width: 80px;
        height: 30px;
        text-align: center;
        padding-top:10px ;
        margin-right: 10px;
        border-radius: 6px;
        cursor: pointer;
        transition: all .3s;
    }
    .myperson_operation_2_1:hover{
        background-color: #51AEFE;
    }
    .myperson_table{
        width: 100%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .myperson_table_div{
        width: 1250px;
        /*margin: auto;*/
    }
    .myperson_pages{
        width: 1000px;
        margin: 30px auto;
        /*background-color: pink;*/
    }
    .block{
        margin: auto;
        /*background-color: red;*/
        width: 75%;
    }
    body .el-scrollbar__wrap {
        overflow-x: hidden;
    }


    /* 利用穿透，设置input边框隐藏 */
    .inputDeep>>>.el-input__inner {
        border: 0;
    }
    /* 如果你的 el-input type 设置成textarea ，就要用这个了 */
    .inputDeep>>>.el-textarea__inner {
        border: 0;
        resize: none;/* 这个是去掉 textarea 下面拉伸的那个标志，如下图 */
    }

</style>