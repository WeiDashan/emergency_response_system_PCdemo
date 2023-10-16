<template>
    <div class="shenpiMID3">
        <div class="shenpiMID3_table">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="序号"
                        width="100"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="street"
                        label="道路"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="distance"
                        label="距离(km)"
                        width="120"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="condition"
                        label="路况"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="total"
                        label="综合评分"
                        width="120"
                        sortable>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: '1',
                    street: '东软3路',
                    distance: 13,
                    condition: '非常好',
                    total: 96
                }, {
                    id: '2',
                    street: '东软2路',
                    distance: 18,
                    condition: '好',
                    total: 91
                }, {
                    id: '3',
                    street: '东软4路',
                    distance: 20,
                    condition: '一般',
                    total: 82
                }, {
                    id: '4',
                    street: '东软1路',
                    distance: 17,
                    condition: '较差',
                    total: 76
                }, {
                    id: '5',
                    street: '东软7路',
                    distance: 26,
                    condition: '一般',
                    total: 70
                }, {
                    id: '6',
                    street: '东软11路',
                    distance: 30,
                    condition: '一般',
                    total: 68
                }, {
                    id: '7',
                    street: '东软9路',
                    distance: 28,
                    condition: '较差',
                    total: 63
                }]
            }
        }
    }
</script>

<style scoped>
    .shenpiMID3{
        /*background-color: pink;*/
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .shenpiMID3_table{
        /*background-color: coral;*/
        margin: auto;
    }
</style>