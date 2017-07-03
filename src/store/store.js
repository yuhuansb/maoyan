import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import emp from "./emp.js"
import login from "./login.js"
import movie from "./movie.js"
import reg from "./reg.js"
import schedule from "./schedule.js"
import studio from "./studio.js"
import theater from "./theater.js"
import manage from "./manage.js"
const store = new Vuex.Store({
	modules: {
		emp,
		login,
		movie,
		reg,
		schedule,
		studio,
		theater,
		manage
	}
})
export default store