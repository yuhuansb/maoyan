<template>
    <div class="div">
    <h1>新增电影</h1>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="130px" style="width:900Px"  >
        <el-form-item label="中文名称">
            <el-input v-model="obj.cName"></el-input>
        </el-form-item>
        <el-form-item label="英文名称">
            <el-input v-model="obj.eName"></el-input>
        </el-form-item>
        <el-form-item label="影片类型">
            <el-input v-model="obj.type"></el-input>
        </el-form-item>
        <el-form-item label="制片国家/地区">
            <el-input v-model="obj.country"></el-input>
        </el-form-item>
        <el-form-item label="片长">
            <el-input v-model="obj.duration"></el-input>
        </el-form-item>
        <el-form-item label="上映时间">
            <el-input v-model="obj.release"></el-input>
        </el-form-item>
        <el-form-item label="剧情简介">
            <el-input type="textarea" :rows="8"  placeholder="请输入内容" v-model="obj.synopsis"></el-input>
        </el-form-item>
        <el-form-item label="操作">
         <el-button type="info" @click="saveclick(obj)">保存</el-button>
            <el-button type="info" @click="updataMovie(upMovieId,obj)">修改</el-button>
            <el-button type="primary" @click="addImgClick(movieId)">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';
export default{
	name:"addMovie",
    data(){
        return {
            labelPosition: 'right',
            upMovieId:this.$route.params.row, //修改的电影Id
            obj:{
                 cName: "摔跤吧！爸爸",
            eName: "Dangal",
            type: "亲情·励志·动作",
            country: "印度",
            duration: "140分钟",
            release: "2017-5-5",
            synopsis: "马哈维亚·辛格·珀尕（阿米尔·汗饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……",
            }
        }
    },
    created(){
        this.updateClick(this.upMovieId)
    },
    // mounted(){
    //     this.updateClick()
    // },
    computed:{
            ...mapState("movie",["movieId"]),
        },
    methods:{
            ...mapActions("movie",["saveclick","addImgClick"]), 
            async updateClick(upMovieId){
                const {
                    data
                }= await axios.get("http://localhost:3000/movie/getMoviesdata",{
                    params:{
                         _id:upMovieId
                    }
                })
                console.log(data)
                if(upMovieId){
                    this.obj.cName=data[0].cName
                    this.obj.eName=data[0].eName
                    this.obj.type=data[0].type
                    this.obj.country=data[0].country
                    this.obj.duration=data[0].duration
                    this.obj.duration=data[0].duration
                    this.obj.release=data[0].release
                    this.obj.synopsis=data[0].synopsis
                }
            },
          updataMovie(upMovieId,obj){
                axios.post("http://localhost:3000/movie/updataMovie",{
                    _id:upMovieId,
                    cName: obj.cName,
                    eName: obj.eName,
                    type: obj.type,
                    country: obj.country,
                    duration: obj.duration,
                    release: obj.release,
                    synopsis: obj.synopsis
               })
            }
        }
}
</script>
<style>
.table-box tr td:first-child{
    width: 120px;
}
.table-box tr td:nth-child(2){
    width: 500px;
}
.input{
    width: 600px;
    height: 30px;
    margin: 5px 0;
}
</style>