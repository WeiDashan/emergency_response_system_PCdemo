<template>

    <div class="myperson">

        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span>确认添加？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-tabs type="border-card">

            <el-tab-pane label="流程选择">

                <el-table
                        :data="tableData.slice(0,8)"
                        style="width: 100%"
                        v-loading="loading"
                        @row-click="centerDialogVisible=true"
                        :highlight-current-row="highlight"
                >
                    <el-table-column
                            prop="liucheng"
                            label="为您筛选到常用流程"
                            width="200"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="cishu1"
                            label="使用次数"
                            width="200"
                            sortable>
                    </el-table-column>
                </el-table>
            </el-tab-pane>


            <el-tab-pane label="物资分配">
                <el-table :data="tableData.slice(0,8)">
                    <el-table-column
                            prop="wuzi"
                            label="为您筛选到常用物资"
                            width="200"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="cishu2"
                            label="使用次数"
                            width="120"
                            sortable>
                    </el-table-column>
                </el-table>
            </el-tab-pane>

            <el-tab-pane label="风险企业">
                <el-table :data="tableData.slice(0,8)">
                    <el-table-column
                            prop="qiye"
                            label="为您筛选到最近企业"
                            width="200"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="juli1"
                            label="距离(km)"
                            width="200"
                            sortable>
                    </el-table-column>
                </el-table>
            </el-tab-pane>

            <el-tab-pane label="道路分配">
                <el-table :data="tableData.slice(0,8)">
                    <el-table-column
                            prop="daolu"
                            label="为您筛选到合理道路"
                            width="200"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="juli2"
                            label="距离(km)"
                            width="200"
                            sortable>
                    </el-table-column>
                </el-table>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>

<script>
    export default {
        name: "leader9",
        data() {
            return {
                tableData: [
                    {
                        liucheng: "自然灾害1级",
                        cishu1: 12,
                        wuzi: "矿泉水",
                        cishu2: 18,
                        qiye: '东软睿道',
                        juli1: 90,
                        daolu: "沈阳大街",
                        juli2: 100
                    },
                    {
                        liucheng: "自然灾害1级",
                        cishu1: 13,
                        wuzi: "矿泉水",
                        cishu2: 12,
                        qiye: '东软睿道',
                        juli1: 80,
                        daolu: "沈阳大街",
                        juli2: 50
                    },
                    {
                        liucheng: "自然灾害1级",
                        cishu1: 19,
                        wuzi: "矿泉水",
                        cishu2: 15,
                        qiye: '东软睿道',
                        juli1: 120,
                        daolu: "沈阳大街",
                        juli2: 180
                    },
                    {
                        liucheng: "自然灾害1级",
                        cishu1: 15,
                        wuzi: "矿泉水",
                        cishu2: 15,
                        qiye: '东软睿道',
                        juli1: 150,
                        daolu: "沈阳大街",
                        juli2: 170
                    },
                    {
                        liucheng: "自然灾害1级",
                        cishu1: 15,
                        wuzi: "矿泉水",
                        cishu2: 16,
                        qiye: '东软睿道',
                        juli1: 50,
                        daolu: "沈阳大街",
                        juli2: 60
                    },],
                centerDialogVisible: false
            }
        },


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
        padding: 30px;
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