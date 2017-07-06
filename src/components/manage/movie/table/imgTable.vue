<template>
 <div>
    <el-table
    :data="movie"
    border
    style="width:800px;">
    <el-table-column
      prop="cName"
      label="电影名称"
      >
    </el-table-column>
    <el-table-column
      prop="type"
      label="图片类型"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{formatterType(scope.row.type)}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="url"
      label="图片">
       <template scope="scope">
       <img :src="scope.row.url" style="width:100px;height:100px"/>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template scope="scope">
        <el-button
          @click="deleteRow(scope.row._id,scope.$index, movie)"
          type="text"
          size="small">
          删除图片
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <pagination :pages="pages" @getMovie="getMovie" />
 </div>
</template>

<script>
  import pagination from "../pagination/pagination.vue";
  export default {
    components:{
       pagination
    },
    methods: {
      deleteRow( _id,index,rows) {
        this.removeImg(_id)
        this.pages.count--
        rows.splice(index, 1);
      },
      formatterType(type){
        if(type==1){
          return "主页图片"
        }else{
          return "剧情图片"
        }
      },
      removeImg(imgId){
        this.$emit("removeImg",imgId)
      },
      formatterUrl(column){
        console.log(url)
      },
      getMovie(curpage,eachPage){
        this.$emit("getMovie",curpage,eachPage)
      }
    },
    // created(){
    //   this.tableData = 
    // },
    props:["movie","pages"],
  }
</script>