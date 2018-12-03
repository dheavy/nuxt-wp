<template>
  <main class="container main-contents">
    <div>
      <post-list :posts="posts"/>
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import PostList from '~/components/posts/PostList'
import wp from '~/lib/wp'
import {types} from '~/store'

export default {
  components: {PostList},

  computed: mapState(['site']),

  async fetch({store, params}) {
    const {posts} = await wp.posts()
    if (posts) {
      store.commit(types.POST_LIST_UPDATE, posts)
    }
  },

  asyncData ({params}) {
    return wp.posts()
  },

  head () {
    return {
      title: `${this.site.name} | Home`
    }
  }
}
</script>

<style>
.container {
  margin: 1rem auto;
  width: 100%;
  max-width: 900px;
}
</style>
