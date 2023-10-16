<template>
    <div class="shenpiBOTTOM">
        <div class="shenpiBOTTOM_but">
            <div v-show="active>0">
                <el-button type="primary" style="width: 100%" @click="shenpistepchange(-1)">上一步</el-button>
            </div>
            <div v-show="active==0">
                <el-button type="primary" style="width: 100%" @click="shenpiback">返回</el-button>
            </div>
            <div v-show="active<2">
                <el-button type="primary" style="width: 100%" @click="shenpistepchange(1)">下一步</el-button>
            </div>
            <div v-show="active==2">
                <el-button type="primary" style="width: 100%" @click="shenpifinish">完成</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from "../../store";
    export default {
        name: "shenpiBOTTOM",
        data(){
          return{
              active: 0,
          }
        },
        methods:{
            shenpistepchange(e){
                if (e==-1){
                    if (store.state.shenpistep.stepnnum>0){
                        store.state.shenpistep.stepnnum--;
                    }
                }else {
                    if (store.state.shenpistep.stepnnum<3){
                        store.state.shenpistep.stepnnum++;
                    }
                }

            },
            shenpiback(){
                // this.active = 3;
                // store.state.shenpistep.stepnnum++;
                store.state.personnum.num= 8;
            },
            shenpifinish(){
                // this.active = 3;
                this.$message({
                    message: '紧急事件处理成功',
                    type: 'success'
                });
                // store.state.shenpistep.stepnnum++;
                store.state.personnum.num = 8;
            }
        },
        mounted() {
            var that = this;
            setInterval(function () {
                that.active = store.state.shenpistep.stepnnum;
            },300)
        }
    }
</script>

<style scoped>
    .shenpiBOTTOM{
        /*background-color: forestgreen;*/
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .shenpiBOTTOM_but{
        /*background-color: pink;*/
        display: flex;
        flex-direction: row;
        width: 40%;
        justify-content: space-around;
        margin: auto;
    }
    .shenpiBOTTOM_but div{
        width: 90px;
        /*background-color: pink;*/
        display: flex;
        justify-content: center;
        border-radius: 4px;
        overflow: hidden;
    }
</style>