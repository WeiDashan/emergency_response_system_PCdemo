<template>
    <div class="login_1">
        <div class="login_img">
            <img :src="myimage.myloginimg" alt="">
        </div>
        <div class="login_k">
            <div class="login_k_kuang">
                <div class="login_k_kuang_title">
                    <div>
                        环保应急管理系统
                    </div>
                </div>

<!--             账号密码           -->
                <div class="login_k_kuang_idpass" v-show="ifcodelogin===1">
                    <div class="login_k_kuang_idpass_imgdiv">
                        <img :src="myimage.codelogin" alt="">
                    </div>
                </div>
                <div class="login_k_kuang_idpass2" v-show="ifcodelogin===2">
                    <div class="login_loadingimg">
                        <img class="login_loadingimg_img" :src="myimage.loading" alt="">
                    </div>
                    <div class="login_loadingdiv">
                        加载中
                    </div>
                </div>
                <div class="login_k_kuang_form" v-show="ifcodelogin===0">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item prop="age">
                            <el-input v-model.number="ruleForm.age" placeholder="输入1/2/3/4以不同身份登录"></el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" placeholder="输入任意密码" autocomplete="off"></el-input>
                        </el-form-item>
                        <div>

                        </div>
                        <el-form-item>
                            <el-button style="width: 100%;letter-spacing: 10px;text-align: center;font-size: 16px" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>


                <div class="login_k_kuang_button" @click="changecode(ifcodelogin)" v-show="ifcodelogin!==0">
                    <div>返回</div>
                </div>

<!--                二维码                 -->
                <div class="login_k_kuang_code" @click="changecode(ifcodelogin)" v-show="ifcodelogin===0">
                    <div></div>
                    <img :src="myimage.code" alt="">
                </div>
            </div>

            <!--                    <div>-->
            <!--                        <el-input v-model="info.id" placeholder="请输入账号"></el-input>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                        <el-input v-model="info.password" placeholder="请输入密码" show-password></el-input>-->
            <!--                    </div>-->
        </div>
        <div class="login_bottom">
            <div class="login_bottom_kuang">
                <div class="login_bottom_kuang_onerow">
                    <div>帮助文档</div>
                    <span>|</span>
                    <div>反馈意见</div>
                    <span>|</span>
                    <div>企业官网</div>
                    <span>|</span>
                    <div>应用侵权投诉</div>
                    <span>|</span>
                    <div>Complaint Guidelines</div>
                </div>
                <div class="login_bottom_kuang_onerow">
                    <span>Copyright 2005-2021</span>
                    <div>NEUS.</div>
                    <div>All Rights Reserved.</div>
                </div>
                <div class="login_bottom_kuang_onerow">
                    <span>东软公司</span>
                    <div>版权所有</div>
                    <div>粤网文[2017]6138-1456号</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index';
    export default {
        name: "Login.vue",
        data(){
            var checkAge = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    this.$refs.ruleForm.validateField('checkPass');
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    this.$refs.ruleForm.validateField('checkPass');
                    callback();
                }
            };
            return{
                myimage:{
                    myloginimg: require("../../image/backgroudimg.jpg"),
                    codelogin: require("../../image/codelogin.jpg"),
                    code: require("../../image/code.png"),
                    loading: require("../../image/loading.png")
                },
                ifcodelogin: 0,

                ruleForm: {
                    pass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                var that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        if (that.ruleForm.age===1){
                            store.state.personnum.type=1;
                            that.$router.push({
                                path:'/home',
                                // query:{
                                //     id: 1
                                // }
                            })
                        }else if (that.ruleForm.age===2){
                            store.state.personnum.type=2;
                            that.$router.push({
                                path:'/homeworker',
                                // query:{
                                //     id: 2
                                // }
                            })
                        }else if (that.ruleForm.age===3){
                            store.state.personnum.type=3;
                            that.$router.push({
                                path:'/homeleader',
                                // query:{
                                //     id: 3
                                // }
                            })
                        }else{
                            store.state.personnum.type=4;
                            that.$router.push({
                                path:'/homeprofessor',
                                // query:{
                                //     id: 4
                                // }
                            })
                        }
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            changecode(e){
                this.ruleForm={
                    pass: '',
                    age: ''
                };
                var that = this;
                if (e===0){
                    that.ifcodelogin = 2;
                    var item = document.getElementsByClassName("login_loadingimg_img");
                    item[0].style.animation="rotate 1.5s ease-in-out infinite";
                    setTimeout(function () {
                        that.ifcodelogin = 1;
                    },1500)
                }else if(e===1){
                    that.ifcodelogin = 0;
                }
            },
        }
    }
</script>

<style scoped>

    .login_k_kuang_code{
        position: absolute;
        right: 4px;
        top: 4px;
        width: 60px;
        height: 60px;
    }

    .login_k_kuang_code div{
        position: absolute;
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-right: 30px solid transparent;
        border-left: 30px solid white;
        border-bottom: 30px solid white;
        z-index: 2;
    }
    .login_k_kuang_code img{
        width: 100%;
        height: 100%;
        transition: all .3s;
    }
    .login_k_kuang_code:hover{
        cursor: pointer;
    }
    .login_k_kuang_code:hover img{
        transform: translate(4px,-4px);

    }
    .login_1{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .login_img{
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
    }
    .login_img img{
        width: 100%;
        height: 100%;
    }
    .login_k{
        position: relative;
        height: 70%;
    }
    .login_k_kuang{
        height: 300px;
        width: 400px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        top: 50%;
        box-sizing: border-box;
        transform: translateY(-50%);
        padding: 30px 65px;
    }
    .login_k_kuang_title{
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 18px;
        /*background-color: pink;*/
    }
    .login_k_kuang_form{
        height: 85%;
        /*background-color: red;*/
        box-sizing: border-box;
        padding-top: 20px;
    }
    .login_k_kuang_idpass{
        display: flex;
        flex-direction: column;
        height: 60%;
        /*background-color: red;*/
        justify-content: center;
    }

    .login_k_kuang_idpass2{
        height: 60%;
        /*background-color: red;*/
        box-sizing: border-box;
        padding-top: 32px;
    }
    .login_loadingdiv{
        /*background-color: pink;*/
        text-align: center;
        margin-top: 10px;
        color: #67c23a;
        font-size: 14px;

    }
    .login_loadingimg{
        width: 50px;
        height: 50px;
        /*background-color: green;*/
        margin: auto;
    }

    .login_loadingimg img{
        width: 100%;
        height: 100%;
        /*transition: all .5s;*/
    }
    .login_k_kuang_idpass_imgdiv{
        margin: auto;
        height: 120px;
        width: 120px;
    }
    .login_k_kuang_idpass_imgdiv img{
        width: 100%;
        height: 100%;
    }
    .login_k_kuang_button{
        /*background-color: pink;*/
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .login_k_kuang_button:hover{
        cursor: pointer;
    }
    .login_k_kuang_button div{
        width: 100%;
        background-color: #74b8ff;
        height: 38px;
        line-height: 38px;
        font-size: 16px;
        letter-spacing: 10px;
        color: white;
        text-align: center;
        font-weight: lighter;
        border-radius: 4px;
        transition: all .3s;
    }
    .login_k_kuang_button:hover div{
        background-color: #78aff9;
    }
    .login_bottom{
        position: relative;
        height: 30%;
        display: flex;
        justify-content: center;
    }
    .login_bottom_kuang{
        width: 60%;
        height: 40%;
        min-width: 500px;
        min-height: 100px;
        margin: auto;
    }
    .login_bottom_kuang_onerow{
        height: 33%;
        text-align: center;
        color: white;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .login_bottom_kuang_onerow div:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    .login_bottom_kuang_onerow div{
        padding: 0 3px;
    }
</style>