<template>
  <div>
    <h1>007 Blog</h1>
    <input type="text" class="form-control" placeholder="제목을 입력하세요" v-model="show" v-on:keyup.enter="createPost(show)">
    <todo-item v-if="seen"></todo-item>
    <input v-if="seen" type="text" class="form-control" placeholder="내용을 입력하세요" v-model="content" v-on:keyup.enter="createContent(show, content)">
    <div v-for='(post, index) in post'>
      <h4>{{index+1}} {{post['date']}}: title : {{post["title"]}} content : {{post.content}}</h4>
    </div>
    <input type="text" v-model="msg" value="" placeholder="Test">
    <div>
      {{msg}}
    </div>
  </div>
</template>

<script>
var date = new Date()
var dateFormat = (date.getYear() + 1900).toString() + '년' + (date.getMonth() + 1).toString() + '월' + date.getDate().toString() + '일'
export default {
  name: 'Post',
  data () {
    return {
      msg: 'test',
      message: 'hoist',
      post: [
        {
          date: (date.getYear() + 1900).toString() + '년' + (date.getMonth() + 1).toString() + '월' + date.getDate().toString() + '일',
          title: '1st commit',
          content: '1st content'
        },
        {
          date: dateFormat,
          title: '2nd commit',
          content: '2nd content'
        },
        {
          date: dateFormat,
          title: '3rd commit',
          content: '3rd content'
        },
        {
          date: dateFormat,
          title: '4th commit',
          content: '4th content'
        }
      ],
      seen: false
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    createPost (show) {
      if (show != null) this.seen = true
    },
    createContent (post, content) {
      if (content != null) {
        this.post.push({date: dateFormat, title: post, content: content})
        this.show = null
        this.content = null
        this.seen = false
      }
    }
  }
}
</script>

<style lang="css">
</style>
