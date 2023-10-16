<template>
  <div class="worker3">
<!--    <div class="title"></div>-->
    <div class="incident_main">
      <div class="main_title">
        物资信息
      </div>
      <el-button class="button" type="primary" @click="add">新增</el-button>
      <el-button class="button" type="primary" @click="modify">修改</el-button>
      <el-input class="search" style="height: 40px;" v-model="searchText" size="mini" placeholder="请输入物资名称"/>
      <el-dialog title="物资信息" :visible.sync="dialogFormVisible" width="600px">
        <el-form :model="form" :rules="rules" :ref="form" >
          <el-form-item label="编号" prop="ID" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.ID" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资名称" prop="name" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资数量" prop="num" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.num" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资类型" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.type" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资清点人" prop="manager" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.manager" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资清点人电话" prop="number" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="物资清点时间" prop="date" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.date"
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
            label="编号"
            sortable
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物资名称"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            prop="num"
            label="物资数量"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="type"
            label="物资类型"
            width="100">
          </el-table-column>
          <el-table-column
            prop="manager"
            label="物资清点人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="number"
            label="物资清点人电话"
            width="150">
          </el-table-column>
          <el-table-column
            prop="dateFormat"
            label="物资清点时间"
            sortable
            width="130">
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
          <div>共计{{tableData.length}}条结果</div>
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
  name: "worker3",
  data() {
    return {
      storeData:[],
      tableData: [{
        ID:27,
        name: '矿泉水',
        num: '50件',
        type:'生命救助',
        manager:'蔡徐坤',
        number: '19973684523',
        date:'2019-04-25',
        dateFormat:'2019-04-25',
      },{
        ID:29,
        name: '炸药包',
        num: '20包',
        type:'器材工具',
        manager:'吴亦凡',
        number: '13235213883',
        date:'2019-04-25',
        dateFormat:'2019-04-25',
      }],
      searchText:'',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        ID: '',
        name: '',
        num: '',
        type: '',
        manager: '',
        number: '',
        date:'',
        dateFormat:'',
      },
      formLabelWidth: '130px',
      isSelect:false,
      rules: {
        ID: [
          { required: true, message: '请输入编号', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入物资名称', trigger: 'blur' },
        ],
        num: [
          { required: true, message: '请输入物资数量', trigger: 'blur' },
        ],
        manager: [
          { required: true, message: '请输入物资清点人', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入物资清点人电话', trigger: 'blur' },
        ],
        date: [
          {type: 'date',required: true, message: '请选择物资清点时间', trigger: 'blur' },
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
      var d = new Date(form.date)
      if(d.getMonth() < 9){
        form.dateFormat = d.getFullYear() + '-0' + (d.getMonth() + 1)
      } else {
        form.dateFormat = d.getFullYear() + '-' + (d.getMonth() + 1)
      }
      if(d.getDate() < 10){
        form.dateFormat +='-0' + d.getDate() + ' '
      } else {
        form.dateFormat +='-' + d.getDate() + ' '
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
        this.storeData = this.tableData
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
  .worker3{
    background-color: #F1F3F7;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .incident_main{
    display: block;
    padding: 18px 0 0 30px;
    width: 1000px;
    height: 550px;
    background-color: white;
    margin: 0 auto;

    /*margin-top: 15px;*/
  }
  .main_title{
    font-size: large;
    padding-bottom: 10px;
  }
  .search{
    width: 250px;
    font-size: 14px;
    float: right;
    margin:10px 175px 0 0;
  }
  .button{
    margin: 10px 40px 0 0px;
  }
  .table{
    width: 100%;
    height: 600px;
  }
  el-table__row>td {
    border: none;
  }
  .el-table::before {
    height: 0px;
  }
  .table_info{
    position: relative;
    width: 900px;
    margin-top: 20px;
    line-height: 32px;
    color: #83879B;
  }
  .table_info div{
    position: absolute;
  }
  .pages{
    left: 50%;
    margin-left: -117px;
  }
</style>
