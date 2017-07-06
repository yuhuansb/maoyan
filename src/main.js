import Vue from 'vue'
import elementUi from "element-ui"
Vue.use(elementUi)
import router from "./router/router.js"
import store from "./store/store.js"
import wrap from "./components/wrap.vue"
import 'element-ui/lib/theme-default/index.css'
// console.log(store)

new Vue({
    el: '#app',
    router,
    store,
    template: '<wrap/>',
    components: {
        wrap
    }
})
console.log(store)