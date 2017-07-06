import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from "../components/login/login.vue"
import reg from "../components/reg/reg.vue"
import manage from "../components/manage/manage.vue"

import addEmp from "../components/manage/emp/addEmp.vue"
import empList from "../components/manage/emp/empList.vue"
import addMovie from "../components/manage/movie/addMovie.vue"
import addImage from "../components/manage/movie/addImage.vue"
import movieList from "../components/manage/movie/movieList.vue"
import addStudio from "../components/manage/studio/addStudio.vue"
import studioList from "../components/manage/studio/studioList.vue"
import addTheater from "../components/manage/theater/addTheater.vue"
import theaterList from "../components/manage/theater/theaterList.vue"
import addSchedule from "../components/manage/schedule/addSchedule.vue"
import scheduleList from "../components/manage/schedule/scheduleList.vue"

export default new Router({
	routes: [{
		path: '/',
		name: 'login',
		component: login
	}, {
		path: '/reg',
		name: 'reg',
		component: reg
	}, {
		path: '/manage',
		name: 'manage',
		component: manage,
		children: [{
			path: "/manage/emp/addEmp",
			name: "addEmp",
			component: addEmp
		}, {
			path: "/manage/emp/empList",
			name: "empList",
			component: empList
		}, {
			path: "/manage/movie/addMovie",
			name: "addMovie",
			component: addMovie
		}, {
			path: "/manage/movie/addMovie/:row",
			name: "addMovie",
			component: addMovie
		}, {
			path: "/manage/movie/addImage/:movieId",
			name: "addImage",
			component: addImage
		}, {
			path: "/manage/movie/movieList",
			name: "movieList",
			component: movieList
		}, {
			path: "/manage/studio/addStudio",
			name: "addStudio",
			component: addStudio
		}, {
			path: "/manage/studio/studioList",
			name: "studioList",
			component: studioList
		}, {
			path: "/manage/theater/addTheater",
			name: "addTheater",
			component: addTheater
		}, {
			path: "/manage/theater/theaterList",
			name: "theaterList",
			component: theaterList
		}, {
			path: "/manage/schedule/addSchedule",
			name: "addSchedule",
			component: addSchedule
		}, {
			path: "/manage/schedule/scheduleList",
			name: "scheduleList",
			component: scheduleList
		}]

	}]
})