import Vue from 'vue'
import App from './App.vue'
import Copy from './components/footer.vue'

Vue.component('copy',Copy)

new Vue({
  el: '#app',
  render: h => h(App)
})
