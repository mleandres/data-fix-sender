import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'data-fix',
      component: require('@/components/DataFix').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
