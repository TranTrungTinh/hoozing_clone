import Vue from 'vue'
import Router from 'vue-router';

// @Layout
import Layout from '@/components/layout/Layout';

// @Home page
import HomePage from '@/views/HomePage/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        }
      ]
    },
  ]
})
