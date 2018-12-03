<template>
  <main class="single-post-container main-contents">
    <post-contents :post="currentPost" mode="full"/>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import PostContents from '~/components/posts/PostContents'
import wp from '~/lib/wp'
import {types} from '~/store'

export default {
  components: {PostContents},

  computed: mapState(['site', 'currentPost']),

  async fetch ({store, params}) {
    const existing = store.state.posts.filter(p => p.slug === params.slug)

    if (existing.length > 0) {
      return store.commit(types.CURRENT_POST_UPDATE, existing[0])
    }

    const {posts} = await wp.posts({slug: params.slug}, this.errorHandler)

    if (posts) {
      store.commit(types.CURRENT_POST_UPDATE, posts[0])
      return posts
    }

    return []
  },

  head () {
    return {
      title: `${this.site.name} | ${this.currentPost.title.rendered}`
    }
  },

  errorHandler (err) {
    console.error(err)
  }
}
</script>

