<template>
    <div class="shenpiTOP">
        <div class="shenpiTOP_step">
            <el-steps :active="active" finish-status="success">
                <el-step title="物资分配"></el-step>
                <el-step title="人员分配"></el-step>
                <el-step title="道路分配"></el-step>
            </el-steps>

<!--            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
        </div>
    </div>
</template>

<script>
    import store from "../../store";
    export default {
        name: "shenpiTOP",
        data(){
            return{
                active: 0
            }
        },
        methods:{
            // next() {
            //     if (this.active++ > 2) this.active = 0;
            // }
        },
        created() {
            this.active = store.state.shenpistep.stepnnum;
            // console.log(store.state.shenpistep.stepnnum)
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.active = store.state.shenpistep.stepnnum;
            },200)

        }
    }
</script>

<style scoped>
    .shenpiTOP{
        /*background-color: pink;*/
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .shenpiTOP_step{
        width: 30%;
        /*background-color: red;*/
        margin: auto;
        transform: translateX(16px);
    }
</style>