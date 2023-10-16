<template>
  <div class="worker5">
    <div class="title"></div>
    <div class="incident_main">
      <el-tabs v-model="activeName" @tab-click="clickTab">
        <el-tab-pane name="first">
          <span slot="label" class="main_title">城市信息</span>
          <el-button class="button" type="primary" @click="add">新增</el-button>
          <el-button class="button" type="primary" @click="modify">修改</el-button>
          <el-input class="search" style="height: 40px;" v-model="searchText" size="mini" placeholder="请输入城市名称"/>
          <el-dialog title="城市信息" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form" :rules="rules" :ref="form" >
              <el-form-item label="ID" prop="ID" :label-width="formLabelWidth">
                <el-input readonly style="width: 300px" v-model="form.ID" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="城市名称" prop="name" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="城市编码" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="form.code" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="省份" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="form.province" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="救援人数" prop="num" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="form.num" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="救援车辆数" prop="vehicle" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="form.vehicle" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submit(form)">确 定</el-button>
            </div>
          </el-dialog>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :highlight-current-row="true"
              @cell-click="danji"
              @cell-dblclick="shuangji"
            >
              <el-table-column
                prop="ID"
                label="ID"
                sortable
                width="80">
              </el-table-column>
              <el-table-column
                prop="name"
                label="城市名称"
                sortable
                width="120">
              </el-table-column>
              <el-table-column
                prop="code"
                label="城市编码"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="100">
              </el-table-column>
              <el-table-column
                prop="num"
                label="救援人数"
                width="120">
              </el-table-column>
              <el-table-column
                prop="vehicle"
                label="救援车辆数"
                width="120">
              </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="table_info">
              <span>共计{{tableData.length}}条结果</span>
              <div class="pages">
                <el-pagination
                  :page-size="5"
                  layout="prev, pager, next, jumper"
                  :total="tableData.length"
                  style="font-weight: normal">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="main_title">交通状况</span>
          <el-button class="button" type="primary" @click="add">新增</el-button>
          <el-button class="button" type="primary" @click="modify">修改</el-button>
          <el-input class="search" v-model="searchTraffic" size="mini" placeholder="请输入城市名称"/>
          <el-dialog title="交通情况" :visible.sync="dialogTrafficVisible" width="500px">
            <el-form :model="trafficForm" :rules="trafficRules" :ref="trafficForm" >
              <el-form-item label="ID" prop="ID" :label-width="formLabelWidth">
                <el-input readonly style="width: 300px" v-model="trafficForm.ID" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="trafficForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="起点" prop="start" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="trafficForm.start" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="终点" prop="end" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="trafficForm.end" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="长度" prop="length" :label-width="formLabelWidth">
                <el-input style="width: 300px" v-model="trafficForm.length" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input style="width: 300px;" type="textarea" :rows="4" v-model="trafficForm.remark" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTrafficVisible = false">取 消</el-button>
              <el-button type="primary" @click="submit(trafficForm)">确 定</el-button>
            </div>
          </el-dialog>
          <div class="table">
            <el-table
              :data="trafficData"
              style="width: 100%"
              :highlight-current-row="true"
              @cell-click="danji"
              @cell-dblclick="shuangji"
            >
              <el-table-column
                prop="ID"
                label="ID"
                sortable
                width="80">
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称"
                sortable
                width="120">
              </el-table-column>
              <el-table-column
                prop="start"
                label="起点"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="end"
                label="终点"
                width="120">
              </el-table-column>
              <el-table-column
                prop="length"
                label="长度"
                width="100">
              </el-table-column>
              <el-table-column
                prop="remark"
                label="备注"
                width="250">
              </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, trafficData)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="table_info">
              <span>共计{{trafficData.length}}条结果</span>
              <div class="pages">
                <el-pagination
                  :page-size="5"
                  layout="prev, pager, next, jumper"
                  :total="trafficData.length"
                  style="font-weight: normal">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>


<script>
export default {
  name: "worker5",
  data() {
    return {
      activeName: 'first',
      storeData:[],
      tableData: [{
        ID:12,
        name: '沈阳',
        code: 'SY',
        province:'辽宁',
        num:200,
        vehicle: 100,
      },{
        ID:13,
        name: '石家庄',
        code: 'SJZ',
        province:'河北',
        num:400,
        vehicle: 80,
      },{
        ID:14,
        name: '青岛',
        code: 'QD',
        province:'山东',
        num:500,
        vehicle: 180,
      },{
        ID:15,
        name: '长春',
        code: 'CC',
        province:'吉林',
        num:300,
        vehicle: 150,
      }],
      storeTrafficData:[],
      trafficData: [{
        ID:26,
        name: '沈阳东软火灾',
        start: '浑南仓库',
        end:'东软睿道',
        length:'60km',
        remark:'救援人员调度仓库的灭火器',
      },{
        ID:27,
        name: '长白山森林火灾',
        start: '长春救援总部',
        end:'长白山',
        length:'200km',
        remark:'救援人员携带灭火器材',
      },{
        ID:28,
        name: '北京交通事故',
        start: '消防大队',
        end:'具体街道',
        length:'30km',
        remark:'消防员开消防车前往救援',
      }],
      searchText:'',
      dialogFormVisible: false,
      id:16,
      form: {
        ID: '',
        name: '',
        address: '',
        location: '',
        layer: '',
        number: '',
        type: ''
      },
      trafficId:29,
      searchTraffic:'',
      dialogTrafficVisible: false,
      trafficForm:{
        ID:'',
        name: '',
        start: '',
        end:'',
        length:'',
        remark:'',
      },
      formLabelWidth: '100px',
      isSelect:false,
      rules: {
        ID: [
          { required: true, message: '请输入ID', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入城市名称', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入城市编码', trigger: 'blur' },
        ],
        num: [
          { required: true, message: '请输入救援人数', trigger: 'blur' }
        ],
        number: [
          { vehicle: true, message: '救援车辆数', trigger: 'blur' },
        ],
      },
      trafficRules:{
        ID: [
          { required: true, message: '请输入ID', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
        start: [
          { required: true, message: '请输入起点', trigger: 'blur' },
        ],
        end: [
          { required: true, message: '请输入终点', trigger: 'blur' }
        ],
        length: [
          { required: true, message: '请输入长度', trigger: 'blur' },
        ],
      }

    }
  },

  created: function () {
    this.storeData = this.tableData
    this.storeTrafficData = this.trafficData
  },

  watch: {
    searchText(val) {
      function search(item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      }
      this.tableData = this.storeData.filter(search)
    },
    searchTraffic(val){
      function search(item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      }
      this.trafficData = this.storeTrafficData.filter(search)
    }
  },

  methods: {
    submit(form){
      if(this.activeName == 'first'){
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.storeData.push(this.form)
            this.tableData = this.storeData
            this.dialogFormVisible = false
            this.id++
          }
        })
      } else if(this.activeName == 'second'){
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.storeTrafficData.push(this.trafficForm)
            this.trafficData = this.storeTrafficData
            this.dialogTrafficVisible = false
            this.trafficId++
          }
        })
      } else {

      }
    },
    openDialog(){
      if(this.activeName == 'first'){
        this.dialogFormVisible = true
      } else if(this.activeName == 'second'){
        this.dialogTrafficVisible = true
      } else {

      }
    },
    add(){
      if(this.activeName == 'first'){
        this.form = {}
        this.form.ID = this.id
      } else if(this.activeName == 'second'){
        this.trafficForm = {}
        this.trafficForm.ID = this.trafficId
      } else {

      }
      this.openDialog()
    },
    modify(){
      if(this.isSelect){
        this.openDialog()
      } else {
        alert("请先选择一行内容");
      }
    },
    deleteRow(index, rows){
      this.$confirm('确定要删除嘛?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1);
        if(this.activeName == 'first'){
          this.storeData = this.tableData
        } else if(this.activeName == 'second'){
          this.storeTrafficData = this.trafficData
        } else {

        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    danji(row,column,event,cell){
      this.isSelect = true
      if(this.activeName == 'first'){
        this.form = row
      } else if(this.activeName == 'second'){
        this.trafficForm = row
      } else {

      }
    },
    shuangji(row){
      this.isSelect = true
      if(this.activeName == 'first'){
        this.form = row
      } else if(this.activeName == 'second'){
        this.trafficForm = row
      } else {

      }
      this.openDialog()
    },
    clickTab(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
  .worker5{
    background-color: #F1F3F7;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title{
    margin-left: 20px;
    font-size: x-large;
  }
  .incident_main{
    display: block;
    padding: 10px 0 0 30px;
    width: 1000px;
    height: 550px;
    background-color: white;
    margin: 0 auto;
    margin-top: 15px;
  }
  .main_title{
    font-size: large;
    padding-bottom: 10px;
  }
  .search{
    width: 230px;
    font-size: 14px;
    float: right;
    margin:10px 75px 0 0;
  }
  .button{
    margin: 10px 40px 0 0px;
  }
  .table{
    width: 900px;
    margin: 10px auto 0;
  }
  el-table__row>td {
    border: none;
  }
  .el-table::before {
    height: 0px;
  }
  .table_info{
    width: 100%;
    margin-top: 20px;
    display: flex;
    line-height: 32px;
    color: #83879B;
  }
  .el-dialog__body{
    /*padding: 30px 0 0 0;*/
  }
  .pages{
    position: relative;
    left: 170px;
  }
</style>
