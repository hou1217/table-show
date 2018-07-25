<template>
  <div class="table">
    
    <div class="container"> 
      <div class="handle-box">
        <!-- <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10" @keyup.enter.native="getData"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="getData">搜索</el-button> -->
      </div>
      <el-table :data="tableData" border style="width: 100%"   ref="multipleTableOutside" @selection-change="handleSelectionChange" @sort-change="sort">
        <el-table-column type="selection" ></el-table-column>
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="count" label="数量">
        </el-table-column>
      </el-table>
      <el-row>
          <div class="grid-content bg-purple-light">
            <div class="pagination">
              <el-pagination 
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-size="10" 
              layout="total,  prev, pager, next" background   
              :total="count">
              </el-pagination>
            </div>
          </div>
      </el-row>
            
            
    </div>
   
    
  </div>
</template>
<script>
  export default {
    name:'home', 
    data() {
      return {
        id:'',
        description:'',
        category:'',
        count: 0,
        cur_page: 1,
        select_word: '',
        tags:[],
        page_size:10,//每页显示条目个数
        sortData:{},//排序数据
        tableData: [],
        topicData: [],
        multipleSelection: [],
        formDetailData:{},
      }
    },
    mounted() {
      this.getData();
    },   
    methods: {
      //排序
      sort(val){
        this.sortData = val;
        console.log(val.order);
        console.log(val.prop);
        this.getData();
      },
      // 分页导航
      handleCurrentChange(val) {
        this.cur_page = val;
        console.log("当前页数："+this.cur_page)
        this.getData();
      },
      
      //选择一页多少条
      handleSizeChange(val) {
        this.page_size = val;
        console.log(`每页 ${val} 条`);
        this.getData();
      },
     
      // 获取列表数据
      getData() {
        const options = {
          method: 'GET',
          url:'http://192.168.2.209:8086/',
          params:{
            page:this.cur_page,
          }
        };
        console.log(options);
        this.$axios(options).then((res) => {
            console.log(res.data);
            this.count = res.data.data.totalCount;
            this.tableData = res.data.data.list;

           
        }).catch((error) => {
          console.log(error);
        });
      },
      //处理选择框选择
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
 
    }
    }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .w100{
    width: 100%;
  }
  
</style>

