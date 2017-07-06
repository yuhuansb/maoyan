 <template>
<div style="margin-left:20px;">
  <h1>上传图片</h1>
  <div>
    <el-radio class="radio" v-model="radio" label="1">主页图片</el-radio>
    <el-radio class="radio" v-model="radio" label="2">剧情图片</el-radio>
    <el-upload
      class="upload-demo"
      action="http://localhost:3000/files/upload"
      multiple
      :data="myMovie"
      :before-upload="updateType"
      :on-success="handleSuccess"
      list-type="picture"
      show-file-list
      >
      <el-button size="small" type="primary" style="margin-top:10px">选择图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
  <img-table :movie="movie" :pages="pages" @removeImg="removeImg"  @getMovie="getMovie" style="margin:20px 0"/>
</div>
</template>
<script>
  import axios from "axios";
  import imgTable from "./table/imgTable.vue";
  import pagination from "./pagination/pagination.vue";
  export default {
    name:"addImg",
    components:{
     imgTable,
     pagination
    },
    data() {
      return {
        radio: '1',
        _id:"",
        movie:[],
        pages:{
          count:0,
          eachPage:5,
          curPage:1
        },
        myMovie: {
          movieId:this.$route.params.movieId,
          imgType: "1"
        },
        // imgUrl:'/images/movies/Life.png',
        // pic:require('@/images/movies/Life.png')
      };
    },
    created(){
       this.getMovie(this.pages.curPage,this.pages.eachPage)
    },
    methods: {
      updateType(){
        this.myMovie.type = this.radio
      },
      handleSuccess(response, file, fileList){
        this.getMovie(this.pages.curPage,this.pages.eachPage)
      },
      async addImgIdToMovies(){
        const data = await axios.get("http://localhost:3000/img/addImg",{
          params:{
             movieId:this.$route.params.movieId,
             _id:this._id
          }   
        })
        // console.log(data)
      },
      async getMovie(curPage,eachPage){
        // console.log("getMovie")
        const {data:{
          rows,
          total
        }} = await axios.get("http://localhost:3000/img/query",{

          params:{
            movieId:this.$route.params.movieId,
            page: curPage,
            rows: eachPage,
          }
        })
        // console.log(rows,"return")
        this.pages.count = total
        this.movie = rows.map((item)=>{
          // console.log(item)
          item.url = `http://localhost:3000${item.url}`
          // console.log(item.url)

            return {
              cName:item.movieId.cName,
              type:item.type,
              url:item.url,
              _id:item._id
            }
        })
      },
      async removeImg(imgId){
          const data = await axios.get("http://localhost:3000/img/movieImg",{
            params:{
              _id:imgId
            }
          })
      }
    }
  }
</script>