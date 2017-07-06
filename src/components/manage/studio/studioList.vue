<template>
	<div class="studioList">
         <h1 @click="a">影院列表</h1>
         <el-table
            :data="studioDate"
            highlight-current-row
            style="width: 100%">

            <el-table-column
            property="name"
              label="影院名称"
              width="250px">
            </el-table-column>
            <el-table-column
              property="address"
              label="影院地址"
              width="250px">
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              width="200px">
                <template scope="scope">

                    <el-popover
                      ref="popover5"
                      placement="left"
                      width="360"
                      v-model="scope.visible2"
                      >
                      影院名称：<el-input v-model="scope.row.name" ></el-input>
                      影院地址：<el-input v-model="scope.row.address"></el-input>
                      <div style="text-align: right; margin: 0">
                        <el-button :plain="true" type="primary"  size="mini" @click="confirm(scope.row)">确定</el-button>
                      </div>
                    </el-popover>



                    <el-button size="small" type="danger"  @click="removeBtn(scope.row)">删除</el-button>
                    <el-button size="small" v-popover:popover5 @click="updateBtn(scope)" >修改</el-button>
                </template>
            </el-table-column>
          </el-table>
           <div align="center">
              <el-pagination
                  @size-change="handleCurPage"
                  @current-change="handleEachPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="this.studioPage.eachPage"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="this.studioPage.count">
              </el-pagination>
          </div>
    </div>
</template>
<script type="text/javascript">

import axios from "axios"

export default{
	name:"studioList",
     data(){
        return{
           // visible2:false,
           studioDate: [],
           studioPage: {
            //当前页
            curPage: 1,
            //每页条数
            eachPage: 10,
            //总条数
            count:0,
            //下拉菜单选项
            select: '',
            //查询的页码
            start: 1,
             //搜索条件
            criteria: '',
            }
        }
     },
     mounted(){
        this.studioList()
     },
    methods:{
        a(){
            // console.log(this.studioPage)
        },
        updateBtn(scope) {
            // console.log(scope)
            scope.visible2  = true
        },
        cancel(scope){
            // console.log("取消") 
            // console.log(scope) 
            scope.visible2  = false
            // console.log(scope.visible2)
        },
        async confirm(row){
            // console.log("确定") 
                    this.$message({
                      message: '恭喜你，修改成功！',
                      type: 'success'
                    });
            // console.log(row) 
            // console.log(row.name,row.address)
            // console.log(row.studioId)
               const {
                data
            } = await axios.post("http://localhost:3000/studio/updateStudio", {
                _id: row.studioId,
                name: row.name,
                address: row.address
            })
            // console.log(data)
            this.studioList();
        },
        async removeBtn(row) {          
                // console.log(row)
                const {
                    data
                } = await axios.post("http://localhost:3000/studio/removeStudio", row)
                // console.log(data)
                this.studioList();
        },
        async studioList(criteria, curPage, pageSize) {
            const {
                data
            } = await axios.get("http://localhost:3000/studio/query", {
                params: {
                    page: this.studioPage.curPage,
                    rows: this.studioPage.eachPage
                }
            })
             // console.log(data.rows)
            this.studioDate = data.rows.map((item)=>{
                
                return {
                    address:item.address,
                    name:item.name,
                    studioId:item._id
                }
            })
            // console.log(this.studioDate)
            this.studioPage.count = data.total
            this.studioPage.maxPage = Math.ceil(data.total / this.studioPage.eachPage)
        },
         //每页显示数据量变更
        handleCurPage: function(val) {

            this.studioPage.eachPage = val;
            // console.log(this.studioPage.eachPage)
            this.studioList(this.studioPage.criteria, this.studioPage.curPage, this.studioPage.eachPage);
        },
        //页码变更
        handleEachPage: function(val) {
            this.studioPage.curPage = val;
            // console.log("in")
            this.studioList(this.studioPage.criteria, this.studioPage.curPage, this.studioPage.eachPage);
        },
    }
}
</script>
<style>
    .studioList{
        margin-left: 50px;
    }
</style>

<!-- :data="studioDate" -->