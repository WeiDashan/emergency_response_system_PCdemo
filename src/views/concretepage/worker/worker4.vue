<template>
  <div class="worker4">
    <div class="title"></div>
    <div class="incident_main">
      <div class="main_title">
        物资位置信息
      </div>
      <el-button class="button" type="primary" @click="add">新增</el-button>
      <el-button class="button" type="primary" @click="modify">修改</el-button>
      <el-input class="search" style="height: 40px;" v-model="searchText" size="mini" placeholder="请输入物资名称"/>
      <el-dialog title="物资位置信息" :visible.sync="dialogFormVisible" width="600px">
        <el-form :model="form" :rules="rules" :ref="form" >
          <el-form-item label="编号" prop="ID" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.ID"></el-input>
          </el-form-item>
          <el-form-item label="物资名称" prop="name" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="物资内容" prop="content" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.contentText" placeholder="内容用逗号隔开"></el-input>
          </el-form-item>
          <el-form-item label="物资存放地点" prop="location" :label-width="formLabelWidth">
            <el-input style="width: 350px" v-model="form.locationText" placeholder="地点用逗号隔开"></el-input>
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
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物资名称"
            sortable
            width="140">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物资内容"
            width="250"
          >
            <template slot-scope="scope">
              <el-tag
                class="tag"
                v-for="item in tableData[scope.$index].content"
                :key="item"
                disable-transitions="true"
                effect="plain">
                {{item}}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="location"
            label="物资存放地点"
            width="300">
            <template slot-scope="scope">
              <el-tag
                class="tag"
                v-for="item in tableData[scope.$index].location"
                :key="item"
                disable-transitions="true"
                effect="plain">
                {{item}}
              </el-tag>
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
  name: "worker4",
  data() {
    return {
      storeData:[],
      tableData: [{
        ID:3149,
        name: '医疗包',
        content: ['创可贴','棉签'],
        contentText:'创可贴,棉签',
        location:['沈北仓库','浑南仓库'],
        locationText:'沈北仓库,浑南仓库',
      },{
        ID:9234,
        name: '外出三件套',
        content: ['杀虫剂','雨伞','防晒霜'],
        contentText:'杀虫剂,雨伞,防晒霜',
        location:['沈北仓库','浑南仓库','铁西仓库'],
        locationText:'沈北仓库,浑南仓库,铁西仓库',
      },{
        ID:1697,
        name: '太空人必备',
        content: ['压缩饼干','尿袋'],
        contentText:'压缩饼干,尿袋',
        location:['浑南仓库'],
        locationText:'浑南仓库',
      }],
      searchText:'',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        ID: '',
        name: '',
        content: [],
        contentText:'',
        location: [],
        locationText:'',
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
        content: [
          { required: true, message: '请输入企业地址', trigger: 'blur' },
        ],
        location: [
          { required: true, message: '请输入法人姓名', trigger: 'blur' }
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
      var content = []
      this.form.contentText = this.form.contentText.replace('，',',')
      this.form.locationText = this.form.locationText.replace('，',',')
      var result = this.form.contentText.split(",")
      for(var i=0;i<result.length;i++){
        content.push(result[i].trim());
      }
      this.form.content = content

      var location = []
      result = this.form.locationText.split(",")
      for(var i=0;i<result.length;i++){
        location.push(result[i].trim());
      }
      this.form.location = location

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
  .worker4{
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
    margin:10px 130px 0 0;
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
    left: -70px;
  }
  .tag{
    margin-right: 10px;
  }
</style>
