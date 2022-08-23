import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this//安装全局事件总线
  }
})
=======
  render: h => h(App),
}).$mount('#app')
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
