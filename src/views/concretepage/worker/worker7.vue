<template>
  <div class="worker7">
    <div class="title"></div>
    <div class="incident_main">
      <div class="main_title">
        企业信息
      </div>
      <el-button class="button" type="primary" @click="add">新增</el-button>
      <el-button class="button" type="primary" @click="modify">修改</el-button>
      <el-input class="search" style="height: 40px;" v-model="searchText" size="mini" placeholder="请输入企业名称"/>
      <el-dialog title="风险企业信息" :visible.sync="dialogFormVisible" width="600px">
        <el-form :model="form" :rules="rules" :ref="form" >
          <el-form-item label="ID" prop="ID" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.ID" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业名称" prop="name" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业地址" prop="address" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业位置" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.location" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业法人" prop="layer" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.layer" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人电话" prop="number" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业类型" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.type" autocomplete="off"></el-input>
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
            label="企业名称"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="企业地址"
            width="220"
          >
          </el-table-column>
          <el-table-column
            prop="location"
            label="企业位置"
            width="100">
          </el-table-column>
          <el-table-column
            prop="layer"
            label="企业法人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="number"
            label="法人电话"
            width="150">
          </el-table-column>
          <el-table-column
            prop="type"
            label="企业类型"
            width="120">
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
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="700"
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
        name: "worker7",
      data() {
        return {
          storeData:[],
          tableData: [{
            ID:1093,
            name: '东软睿道',
            address: '沈阳市浑南区创新路150号',
            location:'34,123',
            layer:'王大牛',
            number: '19973684523',
            type:'上市企业'
          },{
            ID:3214,
            name: '华晨宝马',
            address: '沈阳市和平区三好街120号',
            location:'321,3',
            layer:'李小二',
            number: '13293684523',
            type:'上市企业'
          },{
            ID:5321,
            name: '一汽大众',
            address: '长春市浑南区创新路150号',
            location:'36,33',
            layer:'李达康',
            number: '13924360523',
            type:'股份企业'
          },{
            ID:1233,
            name: '中软国际',
            address: '大连市浑南区创新路80号',
            location:'34,123',
            layer:'董王',
            number: '19896234922',
            type:'合资企业'
          }],
          searchText:'',
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            ID: '',
            name: '',
            address: '',
            location: '',
            layer: '',
            number: '',
            type: ''
          },
          formLabelWidth: '120px',
          isSelect:false,
          rules: {
            ID: [
              { required: true, message: '请输入ID', trigger: 'blur' },
            ],
            name: [
              { required: true, message: '请输入企业名称', trigger: 'blur' },
            ],
            address: [
              { required: true, message: '请输入企业地址', trigger: 'blur' },
            ],
            layer: [
              { required: true, message: '请输入法人姓名', trigger: 'blur' }
            ],
            number: [
              { required: true, message: '请输入法人电话', trigger: 'blur' },
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
  .worker7{
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
