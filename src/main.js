import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueGycUi from 'vue-gyc-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueGycUi)
new Vue({
    render: h => h(App),
}).$mount('#app')