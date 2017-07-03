import router from "../router/router.js"
export default {
	namespaced: true,
	state: {
		nodes: [{
			label: "员工管理",
			children: [{
				label: "员工列表"
			}, {
				label: "新增员工"
			}]
		}, {
			label: "电影管理",
			children: [{
				label: "电影列表"
			}, {
				label: "新增电影"
			}]
		}, {
			label: "影院管理",
			children: [{
				label: "影院列表"
			}, {
				label: "新增影院"
			}]
		}, {
			label: "影厅管理",
			children: [{
				label: "影厅列表"
			}, {
				label: "新增影厅"
			}]
		}, {
			label: "排片管理",
			children: [{
				label: "排片列表"
			}, {
				label: "新增排片"
			}]
		}],
		defaultProps: {
			children: 'children',
			label: 'label'
		}
	},
	mutations: {
		nodeClick(state, e) {
			switch (e.label) {
				case "员工列表":
					router.push("/manage/emp/empList")
					break;
				case "电影列表":
					router.push("/manage/movie/movieList")
					break;
				case "影院列表":
					router.push("/manage/studio/studioList")
					break;
				case "影厅列表":
					router.push("/manage/theater/theaterList")
					break;
				case "排片列表":
					router.push("/manage/schedule/scheduleList")
					break;
				case "新增员工":
					router.push("/manage/emp/addEmp")
					break;
				case "新增电影":
					router.push("/manage/movie/addMovie")
					break;
				case "新增影院":
					router.push("/manage/studio/addStudio")
					break;
				case "新增影厅":
					router.push("/manage/theater/addTheater")
					break;
				case "新增排片":
					router.push("/manage/schedule/addSchedule")
					break;
			}
		}
	}
}