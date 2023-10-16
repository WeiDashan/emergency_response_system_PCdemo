<template>
    <div class="shenpiBOTTOM">
        <div class="echarts">
            <div id="shenyangMap" class="shenyangMap"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "../../echarts/echarts.min"
    import shenyangJSON from "../../data/shenyang.json"

    export default {
        name: "shenpiMID",
        data(){
            return{
                scatterData : [
                    {
                        name:"物资1",
                        value:[123.42762,41.79346]
                    },
                    {
                        name:"物资2",
                        value:[123.448981, 41.746946]
                    },
                    {
                        name:"物资3",
                        value:[123.311604, 41.615904]
                    },
                    {
                        name:"物资4",
                        value:[123.319829, 41.785833]
                    },
                    {
                        name:"物资5",
                        value:[123.421471, 42.122312]
                    },
                    {
                        name:"物资6",
                        value:[123.687317, 41.714819]
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
            drawMap(){
                var that = this;
                var mCharts = echarts.init(document.getElementById("shenyangMap"))
                echarts.registerMap("shenyangMap",shenyangJSON,{})
                var option = {
                    geo:{
                        type: 'map',
                        map: 'shenyangMap',
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
                                brushType: 'fill'
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
            this.drawMap();
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
    .shenyangMap{
        background-color: white;
        height:450px;
        width:450px;
        margin: auto;
    }
</style>