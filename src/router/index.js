import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Counter from '@/components/Counter'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
