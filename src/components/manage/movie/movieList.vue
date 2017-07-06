<template>
	<div>
     <h1>电影列表</h1>
        <el-table
            :data="dataAry"
            border>
            <el-table-column
              fixed
              prop="cName"
              label="中文名称"
              width="160px">
            </el-table-column>
            <el-table-column
              prop="eName"
              label="英文名称"
              width="160px">
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              width="160px">
            </el-table-column>
            <el-table-column
              prop="country"
              label="国家"
              width="160px">
            </el-table-column>
            <el-table-column
              prop="duration"
              label="片场"
              width="160px">
            </el-table-column>
            <el-table-column
              prop="release"
              label="上映时间"
              width="160px">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="150px">
              <template scope="scope">
                <el-button @click="upMovie(scope.row._id)" type="text" size="small">修改</el-button>
                <el-button @click="removeImage(scope.row._id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
  </el-table>
        <div class="block">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="curPage1"
                      :page-sizes="[10,20, 30,40,50, 60,70,80,90,100]"
                      :page-size="page.eachPage"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="page.count">
                    </el-pagination>
  </div>
    </div>
</template>
<script type="text/javascript">
import router from "../../../router/router.js"
import axios from "axios";
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';
export default{
	      name:"movieList",
        data(){
         return {
           curPage1:1
         }
        },
        computed:{
            ...mapState("movie",{
                dataAry:"data"
            }),
              ...mapState("movie",["page"]
            ),
        },
        created(){
            this.getPage({
              curPage:this.page.curPage,
              eachPage:this.page.eachPage
            })
        },
        methods:{
            //修改电影列表
            upMovie(row){
                console.log(row)
                 router.push(`/manage/movie/addMovie/${row}`)
                
            },
            //删除当前电影
             async removeImage(row) {
                const {
                    data
                }=await axios.post("http://localhost:3000/movie/remove",{
                    _id:row
                }) 
                this.getPage({
                curPage:this.page.curPage,
                eachPage:this.page.eachPage
            })
                
      },
            ...mapActions("movie",["getPage"]),
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.page.eachPage = val
                this.getPage({
                  curPage:this.page.curPage,
                  eachPage:val
            })
              },
            handleCurrentChange(val) {
                  console.log(`当前页: ${val}`);
                  this.getPage({
                  curPage:val,
                  eachPage:this.page.eachPage
                })
            }
        }
}
</script>