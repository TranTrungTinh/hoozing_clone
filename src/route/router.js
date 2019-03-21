import Vue from 'vue'
import Router from 'vue-router';

// @Layout
import Layout from '@/components/layout/Layout';

// @Main app page
import HomePage from '@/views/HomePage/Home';
import ListPage from '@/views/ListPage/List';
import RequestPage from '@/views/RequestPage/Request';

Vue.use(Router);
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
        },
        {
          path: '/lists',
          name: 'ListPage',
          component: ListPage
        },
        {
          path: '/request',
          name: 'RequestPage',
          component: RequestPage
        }
      ]
    },
  ]
})
