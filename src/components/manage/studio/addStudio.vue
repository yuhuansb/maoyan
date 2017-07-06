<template>
	<div class="addStudio">
      <h1>新增影院</h1>
      <table class="table-box">
        <tr>
          <td>影院名称</td>
          <td><el-input v-model="name" placeholder="请输入内容" style="width:400px"></el-input></td>
          <td></td>
        </tr>
        <tr>
          <td>影院地址</td>
          <td><el-input v-model="address" placeholder="请输入内容"></el-input></td>
          <td></td>
        </tr>
        <tr>
          <td>操作</td>
          <td>
            <el-button @click="saveBtn(name,address)" id="saveBtn" type="primary" size="mini">保存</el-button>
            <el-button @click="resetBtn" id="resetBtn" type="primary" size="mini">重置</el-button>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
</template>
<script type="text/javascript">

import axios from "axios"

export default{
	name:"addStudio",
    data(){
        return {
            name:"",
            address:"",
        }
    },

    methods:{
        async saveBtn(name,address) {
            console.log("123")
            console.log(name,address)
            const {
                data
            } = await axios.post("http://localhost:3000/studio/addStudio", {
                    name: name,
                    address: address
            })
            console.log(data)
            // this.setState(data)
        },
        resetBtn(){
            this.name = '',
            this.address = ''
        }
    }
}
</script>
<style>
.addStudio{
    margin-left: 50px;
}
.table-box{
    height: 150px;
}
</style>