import axios from "axios"

const studioStore = {
    namespaced: true,
    state: {
        studioPage: [{
            curPage: 1,
            eachPage: 10,
        }]
    },
    mutations: {},
    actions: {

    }
}

// console.log(studioStore.actions.studio_List())
export default studioStore;

// {
//     name: "UME影城(金牛店)",
//     address: "金牛区沙湾路1号汇龙湾广场3楼"
// }, {
//     name: "橙天嘉禾影城(一品店)",
//     address: "金牛区一品天下大街399号居然之家5楼（近一品天下大街）"
// }