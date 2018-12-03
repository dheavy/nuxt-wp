<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-list-item">
      <post-contents :post="post" mode="excerpt"/>
    </li>
  </ul>
</template>

<script>
import PostContents from '~/components/posts/PostContents'

export default {
  props: {
    posts: {type: Array}
  },

  components: {PostContents}
}
</script>

<style scoped>
.post-list {
  padding: 0;
}

.post-list-item {
  list-style: none;
}
</style>
