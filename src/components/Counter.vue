<template>
<div>
  <h1> Counter : {{ count }}</h1>
  <button @click="count += 1"> ++ </button>
</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style></style>