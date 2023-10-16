<template>
    <div class="shenpiBOTTOM">
        <div class="echarts">
            <div id="shenyangMap2" class="shenyangMap2"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "../../echarts/echarts.min"
    import shenyangJSON from "../../data/shenyang.json"

    export default {
        name: "shenpiMID2",
        data(){
            return{
                scatterData : [
                    {
                        name:"人员1",
                        value:[123.42562,41.70346]
                    },
                    {
                        name:"人员2",
                        value:[123.458981, 41.741946]
                    },
                    {
                        name:"人员3",
                        value:[123.341604, 41.665904]
                    },
                    {
                        name:"人员4",
                        value:[123.310829, 41.795833]
                    },
                    {
                        name:"人员5",
                        value:[123.521471, 42.052312]
                    },
                    {
                        name:"人员6",
                        value:[123.627317, 41.764819]
                    }
                ],
                scatterData2:[
                    {
                        name:"紧急事件",
                        value:[123.445696, 41.795591]
                    }
                ]
            };
        },
        methods:{
            drawMap2(){
                var that = this;
                var mCharts = echarts.init(document.getElementById("shenyangMap2"))
                echarts.registerMap("shenyangMap2",shenyangJSON,{})
                var option = {
                    geo:{
                        type: 'map',
                        map: 'shenyangMap2',
                        roam: true,
                        zoom: 1.2,
                    },
                    tooltip:{
                        trigger: 'item',
                        triggerOn: 'click',
                        formatter: function (params) {
                            // console.log(params)
                            if (params.hasOwnProperty("data")){
                                console.log(params.data.name)
                                return params.data.name;
                            }else {
                                return "";
                            }
                        }
                    },
                    series: [
                        {
                            data: that.scatterData,
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            itemStyle:{
                                color:'#384480'
                            },
                            rippleEffect:{
                                scale: 3,
                                color: '#3854e0',
                                period: 4,
                                brushType: "fill"
                            },

                        },
                        {
                            data: that.scatterData2,
                            type: "effectScatter",
                            coordinateSystem: 'geo',
                            itemStyle:{
                                color:'red'
                            },
                            rippleEffect:{
                                scale: 3,
                                color: '#ff5e3e',
                                period: 4,
                                brushType: 'fill'
                            }
                        }
                    ]
                }
                // mCharts.on("click",function (resp) {
                //     console.log(shenyangJSON)
                // })
                mCharts.setOption(option)
                // mCharts.setOption(option)
            }
        },
        mounted() {
            this.drawMap2();
        },
        created() {
            console.log(shenyangJSON)
        }
    }
</script>

<style scoped>
    .shenpiBOTTOM{
        /*background-color: cornsilk;*/
        width: 100%;
        height: 100%;
    }
    .echarts{
        /*background-color: cornflowerblue;*/
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .shenyangMap2{
        background-color: white;
        height:450px;
        width:450px;
        margin: auto;
    }
</style>