import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import OrderListPage from './pages/orderList.vue'
import Layout from './components/layout.vue'
import DetailAnaPag from './pages/analysis.vue'
import DetailCouPage from './pages/count.vue'
import DetailForPage from './pages/forecast.vue'
import DetailPubPage from './pages/publish.vue'


Vue.use(VueRouter)

var router=new VueRouter({
    mode: 'history',
    routes:[
        {
          path:'/',
          component: IndexPage
        },
        {
            path:'/order',
            component:OrderListPage
        },

        {
            path:'/detail',
            component:DetailPage,
            redirect:'/detail/count',
            children:[
                {
                    path:'analysis',
                    component:DetailAnaPag
                },
                {
                    path:'count',
                    component:DetailCouPage
                },
                {
                    path:'forecast',
                    component:DetailForPage
                },
                {
                    path:'publish',
                    component:DetailPubPage
                }
            ]
        }
    ]
})

new Vue({
  el: '#app',
    router:router,
  // render: h => h(App)
    template: '<Layout/>',
    components: { Layout }
})
