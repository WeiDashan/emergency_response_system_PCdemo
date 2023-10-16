<template>
  <div class="worker6">
    <div class="title"></div>
    <div class="incident_main">
      <div class="main_title">
        接报信息
      </div>
      <el-button class="button" type="primary" @click="add">新增</el-button>
      <el-button class="button" type="primary" @click="modify">修改</el-button>
      <el-input class="search" style="height: 40px;" v-model="searchText" size="mini" placeholder="请输入接报名称"/>
      <el-dialog title="接报信息" :visible.sync="dialogFormVisible" width="600px">
        <el-form :model="form" :rules="rules" :ref="form" >
          <el-form-item label="ID" prop="ID" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.ID" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="事件名称" prop="name" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="风险企业编号" prop="enterprise" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.enterprise" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="流程编号" prop="flow":label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.flow" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="报警人" prop="caller" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.caller" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="报警人电话" prop="number" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="创建人" prop="creator" :label-width="formLabelWidth">
            <el-input style="width: 300px" v-model="form.creator" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" prop="createDate" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.createDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
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
            label="事件名称"
            sortable
            width="110">
          </el-table-column>
          <el-table-column
            prop="enterprise"
            label="风险企业编号"
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="flow"
            label="流程编号"
            width="90">
          </el-table-column>
          <el-table-column
            prop="caller"
            label="报警人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="number"
            label="报警人电话"
            width="120">
          </el-table-column>
          <el-table-column
            prop="creator"
            label="创建人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="createDateText"
            label="创建时间"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            label="状态"
            width="100">
            <template slot-scope="scope">
              <el-progress style="margin-left: -10px;"
                           width="50"
                           type="circle" :percentage="tableData[scope.$index].state"
                           :status="(tableData[scope.$index].state)==100?'success':''">
              </el-progress>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="80">
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
              :page-size="4"
              layout="prev, pager, next, jumper"
              :total="tableData.length"
              style="font-weight: normal">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "worker6",
  data() {
    return {
      storeData:[],
      tableData: [{
        ID:1093,
        name: '蝗虫灾害',
        enterprise: 2315,
        flow:1243,
        caller:'王大牛',
        number: '19973684523',
        creator:'李达',
        createDate:'2020-01-21',
        createDateText:'2020-01-21',
        state:25
      },{
        ID:2145,
        name: '火山爆发',
        enterprise: 1444,
        flow:1245,
        caller:'董王',
        number: '19213512323',
        creator:'李建',
        createDate:'2021-03-21',
        createDateText:'2021-03-21',
        state:100
      },{
        ID:2305,
        name: '火灾',
        enterprise: 1967,
        flow:1246,
        caller:'董王',
        number: '17326890323',
        creator:'张明玉',
        createDate:'2021-04-05',
        createDateText:'2021-04-05',
        state:60
      }],
      searchText:'',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        ID: '',
        name: '',
        enterprise: '',
        flow: '',
        caller: '',
        number: '',
        creator: '',
        createDate:'',
        createDateText:'',
        state:0,
      },
      formLabelWidth: '120px',
      isSelect:false,
      rules: {
        ID: [
          { required: true, message: '请输入ID', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入事件名称', trigger: 'blur' },
        ],
        enterprise: [
          { required: true, message: '请输入风险企业编号', trigger: 'blur' },
        ],
        flow: [
          { required: true, message: '请输入流程编号', trigger: 'blur' },
        ],
        caller: [
          { required: true, message: '请输入报警人姓名', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入报警人电话', trigger: 'blur' },
        ],
        creator: [
          { required: true, message: '请输入创建人姓名', trigger: 'blur' },
        ],
        createDate: [
          {type: 'date',required: true, message: '请选择创建时间', trigger: 'blur' },
        ],
      }

    }
  },

  created: function () {
    this.storeData = this.tableData
  },

  watch: {
    searchText(val) {
      function search(item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      }
      this.tableData = this.storeData.filter(search)
    }
  },

  methods: {
    submit(form){
      var d = new Date(form.createDate)
      if(d.getMonth() < 9){
        form.createDateText = d.getFullYear() + '-0' + (d.getMonth() + 1)
      } else {
        form.createDateText = d.getFullYear() + '-' + (d.getMonth() + 1)
      }
      if(d.getDate() < 10){
        form.createDateText +='-0' + d.getDate() + ' '
      } else {
        form.createDateText +='-' + d.getDate() + ' '
      }
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.storeData.push(this.form)
          this.tableData = this.storeData
          this.dialogFormVisible = false
        }
      })
    },
    openDialog(){
      this.dialogFormVisible = true
    },
    add(){
      this.form = {}
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
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    danji(row,column,event,cell){
      this.isSelect = true
      this.form = row;
    },
    shuangji(row){
      // this.highlight=true;
      this.form = row;
      this.openDialog()
    }
  }
}
</script>

<style scoped>
  .worker6{
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
  padding: 18px 0 0 30px;
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
  width: 250px;
  font-size: 14px;
  float: right;
  margin:10px 75px 0 0;
}
.button{
  margin: 10px 40px 0 0px;
}
.table{
  width: 100%;
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
.pages{
  margin:0 auto;
  position: relative;
  left: -50px;
}
</style>
