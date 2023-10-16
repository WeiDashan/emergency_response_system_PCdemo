<template>
  <div class="worker2" style="background-color: #F1F3F7">
      <div class="worker2_left">
        <div id="shutu" class="shutu"></div>
      </div>
      <div class="worker2_right">
          <div class="worker2_right_buttonlist">
              <div>
                  <el-button type="primary" @click="myadd" v-loading.fullscreen.lock="fullscreenLoading">新增</el-button>
              </div>
              <div>
                  <el-button type="danger" @click="mydelete" v-loading.fullscreen.lock="fullscreenLoading">删除</el-button>
              </div>
          </div>
        <div class="worker2_right_kuang">
            <div class="worker2_right_onerow">
                <div class="worker2_right_title">灾害类型</div>
                <el-input v-model="eventtype" placeholder="请输入灾害类型"></el-input>
            </div>
            <div class="worker2_right_onerow">
                <div class="worker2_right_title">灾害名称</div>
                <el-input v-model="eventname" placeholder="请输入灾害名称"></el-input>
            </div>
            <div class="worker2_right_onerow">
                <div class="worker2_right_title">灾害等级</div>
                <el-input v-model="eventrate" placeholder="请输入灾害等级"></el-input>
            </div>
            <div class="worker2_right_onerow">
                <div class="worker2_right_title">灾害编号</div>
                <el-input v-model="eventcode" placeholder="请输入灾害编号"></el-input>
            </div>
            <div class="worker2_right_onerow">
                <div class="worker2_right_title">备注</div>
                <el-input type="textarea" rows=4 v-model="eventelse" placeholder="请输入备注"></el-input>
            </div>
        </div>
      </div>
  </div>
</template>

<style>
    .worker2_right_buttonlist{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0 20px;
    }
    .worker2_right_kuang{
        width: 550px;
        height: 400px;
        /*background-color: green;*/
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .worker2_right_onerow{
        box-sizing: border-box;
        padding-right: 20px;
        display: flex;
        flex-direction: row;
    }
    .worker2_right_title{
        width: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .worker2{
        /*background-color: pink;*/
        /*position: absolute;*/
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #F1F3F7;
        align-items: center;
    }
    .shutu{
        width: 500px;
        height: 500px;
        padding: 20px;
        /*background-color: red;*/
    }
    .worker2_left{
        /*width: 500px;*/
        /*height: 500px;*/
        /*background-color: cornsilk;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
    }
    .worker2_right{
        /*background-color: coral;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80%;
        background-color: white;
    }
</style>

<script>
    import echarts from "../../../echarts/echarts.min"
    import shutudata from "../../../data/shutudata.json"
    let that = this;
    export default {

        data(){
            return{
                eventtype:"",
                eventname:"",
                eventrate:"",
                eventcode:"",
                eventelse:"",
                fullscreenLoading: false,
            }
        },
        created() {
            console.log(shutudata)
        },
        methods: {
            drawMap() {
                var that = this;
                var mCharts = echarts.init(document.getElementById("shutu"))
                // echarts.registerMap("shutu",shutudata, {})
                var option = {
                    tooltip: {
                        // show：'true',//默认：true；是否显示提示框组件，包括提示框浮层和 axisPointer。
                        trigger: 'item',//默认：item；触发类型。item：数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none':什么都不触发。
                        triggerOn: 'click',
                        formatter:function (params,ticket,callback) {
                            // console.log(params)
                            var item = params.data.details;
                            that.eventname = item.eventname;
                            that.eventtype = item.eventtype;
                            that.eventrate = item.eventrate;
                            that.eventcode = params.dataIndex;
                        }
                    },
                    series: [

                        {

                            type: 'tree',
                            data: [shutudata],
                            left: '6%',
                            right: '6%',
                            top: '15%',
                            bottom: '15%',
                            symbol: 'emptyCircle',
                            // orient: '',
                            expandAndCollapse: true,
                            initialTreeDepth: 2,
                            label: {
                                normal: {
                                    position: 'top',//标签的位置。
                                    // rotate: -90,//标签旋转。从 -90 度到 90 度。正值是逆时针。
                                    // verticalAlign: 'middle',//文字垂直对齐方式，默认自动。
                                    // align: 'right',//文字水平对齐方式，默认自动。
                                    fontSize: 12,//文字的字体大小
                                }
                            },

                            animationDurationUpdate: 750
                        }
                    ]
                }
                mCharts.setOption(option)
            },
            myadd(){
                var that = this;
                that.eventtype="";
                that.eventname="";
                that.eventrate="";
                that.eventcode="";
                that.eventelse="";
                that.fullscreenLoading = true;
                that.drawMap();
                setTimeout(() => {
                    that.fullscreenLoading = false;
                }, 1000);
            },
            mydelete(){
                var that = this;
                this.$confirm('此操作将删除分支, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    that.eventtype="";
                    that.eventname="";
                    that.eventrate="";
                    that.eventcode="";
                    that.eventelse="";
                    that.fullscreenLoading = true;
                    that.drawMap();
                    setTimeout(() => {
                        that.fullscreenLoading = false;
                    }, 1000);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        mounted() {
            this.drawMap()
        }
    }
</script>
