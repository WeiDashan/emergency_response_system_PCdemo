<template>
    <div class="myhead">
        <div class="myhead_left">
            <div class="myhead_left_mylogo">
                <img :src="myimage.logo">
            </div>
            <div class="myhead_left_name">环保应急管理系统</div>
        </div>
        <div class="myhead_right" @mouseenter="downnum=1" @mouseleave="downnum=0"
        @click="changedown">
            <div class="myhead_right_photo">
                <img :src="myimage.touxiang">
            </div>
            <div class="myhead_right_down">
                <img id="myhead_right_down_img" :src="downnum==0?myimage.down:myimage.downplus">
            </div>
            <div class="myhead_right_detail" v-show="downclicknum==1?true:false">
                <div class="myhead_right_detail_top">
                    <div>{{name}}姓名</div>
                </div>
                <div class="myhead_right_detail_down">
                    <div>历史记录</div>
                    <div>反馈帮助</div>
                    <div style="height: 0;border-top: #dcdcdc 1px solid;"></div>
                    <div @click="quit">退出登录</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import store from "../../store";

    export default {
        name: "head.vue",
        data(){
            return{
                myimage:{
                    down: require("../../image/down.png"),
                    downplus: require("../../image/downplus.png"),
                    touxiang: require("../../image/touxiang.jpg"),
                    logo: require("../../image/logo.png")
                },
                downnum: 0,
                downclicknum: 0,
                name: "",
            }
        },
        methods: {
            changedown(){
                this.downclicknum = (this.downclicknum+1)%2;
                var img = document.getElementById("myhead_right_down_img");
                if (this.downclicknum==1){
                    img.style.transform = "rotate(180deg)"
                }else {
                    img.style.transform = ""
                }
            },
            quit(){
                this.$router.push("/");
            }
        },
        created() {
            var that = this;
            var num = store.state.personnum.type;
            if (num==1){
                that.name = "管理人员"
            }else if(num==2){
                that.name = "工作人员"
            }else if(num==3){
                that.name = "指挥人员"
            }else{
                that.name = "专家人员"
            }

        }
    }
</script>

<style>
    .myhead_right_photo img{
        height: 100%;
        width: 100%;
    }
    .myhead{
        width: 100%;
        height: 60px;
        background-color: #2c2f39;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /*align-content: center;*/
    }
    .myhead_left{
        display: flex;
        flex-direction: row;
    }
    .myhead_left_mylogo{
        /*background-color: pink;*/
        height: 40px;
        width: 76px;
        margin-left: 20px;
        margin-top: 7px;
        /*transform: translateY(10px);*/
        /*min-width: 120px;*/
    }
    .myhead_left_mylogo img{
        width: 100%;
        height: 100%;
        transform: scale(0.8);
    }
    .myhead_left_name{
        color: white;
        font-weight: bolder;
        font-size: 24px;
        line-height: 60px;
        margin-left: 10px;
        min-width: 200px;
    }
    .myhead_right{
        height: 40px;
        margin-top: 10px;
        margin-right: 100px;
        display: flex;
        flex-direction: row;
        position: relative;
        transition: all .3s;
    }
    .myhead_right:hover{
        cursor: pointer;
    }
    .myhead_right:hover .myhead_right_down{
        width: 24px;
        height: 24px;
    }
    .myhead_right_photo{
        background-color: pink;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .myhead_right_down{
        width: 24px;
        height: 24px;
        margin-left: 5px;
        margin-top: 10px;
    }
    .myhead_right_down img{
        width: 20px;
        height: 20px;
        transition: all .3s;
    }
    .myhead_right_detail{
        /*background-color: pink;*/
        position: absolute;
        top: 52px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f6f7f8;
        border-radius: 4px;
        color: #636363;
        overflow: hidden;
        z-index: 2;
    }
    .myhead_right_detail_top{
        height: 60px;
        line-height: 60px;
        background-color: #5b6b73;
        color: white;
        text-align: center;
        transition: all .3s;
    }
    .myhead_right_detail_top:hover{
        background-color: #2e3f47;
    }
    .myhead_right_detail_down div{
        width: 140px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        margin: 4px 0;
    }
    .myhead_right_detail_down div:hover{
        background-color: #d8d8d9;
        color: #0ab2f0;
    }
    .myhead_right_detail_down div:last-child{
        line-height: 34px;
    }

</style>