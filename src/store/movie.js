import axios from 'axios'
import router from "../router/router.js"
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';
const movie = {
    namespaced: true,
    state: {
        movieId: "",
        data: [], //电影列表
        page: {
            curPage: 1,
            eachPage: 10,
            count: 0
        },
    },
    mutations: {
        changeState(state, data) {
            state.movieId = data._id
            console.log(state.movieId)
        },
        // 电影列表
        listState(state, data) {
            state.data = data.rows
            state.page.count = data.total
        },

    },
    actions: {
        async saveclick(context, obj) {
            const {
                data
            } = await axios.post("http://localhost:3000/movie/create", {
                cName: obj.cName,
                eName: obj.eName,
                type: obj.type,
                country: obj.country,
                duration: obj.duration,
                release: obj.release,
                synopsis: obj.synopsis
            })
            movie.movieId = data._id
            context.commit("changeState", data)
        },
        addImgClick(context, movieId) {
            if (movieId) {
                router.push(`/manage/movie/addImage/${movieId}`)
            }
        },
        // 电影列表
        getPage(context, {
            curPage,
            eachPage
        }) {
            axios.get("http://localhost:3000/movie/query", {
                params: {
                    curPage: curPage,
                    eachPage: eachPage
                }
            }).then(({
                data
            }) => {
                context.commit("listState", data)
            })
        },
    }
}
export default movie;