<template>
  <div id="app">
    <router-link to="/Post"><h1>Post</h1></router-link>
    <router-link to="/Counter"><h1>Counter</h1></router-link>

    <router-link to="/Counter"><h1>Counter</h1></router-link>
    <router-link to="/HelloWorld"><h1>HelloWorld</h1></router-link>
    <router-view/>
    <navbutton></navbutton>
    <todo-item></todo-item>
    <child my-message="안녕하세요!"></child>

  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Post from './components/Post.vue'
import navButton from './components/navButton.vue'
export default {
  name: 'app',
  components: { Counter, Post, navButton }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
