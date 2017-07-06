<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pages.eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pages.count">
    </el-pagination>
  </div>
</template>
<script scoped>
  export default {
    // created(){
    //   console.log(this.pages)
    // },
    props:["pages"],
    methods: {
      handleSizeChange(val) {
        this.pages.eachPage = val
        this.getMovie(this.pages.curPage,val)
      },
      handleCurrentChange(val) {
         this.getMovie(val,this.pages.eachPage)
      },
      getMovie(curPage,eachPage){
        this.$emit("getMovie",curPage,eachPage)

      }
    },
    data() {
      return {
        currentPage4: 1
      };
    }
  }
</script>