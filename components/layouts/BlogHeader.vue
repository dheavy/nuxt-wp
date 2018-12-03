<template>
  <header>
    <h1>
      <nuxt-link to="/">{{site.name}}</nuxt-link>
    </h1>
    <p>{{site.description}}</p>
  </header>
</template>

<script>
export default {
  props: {
    site: {type: Object}
  }
}
</script>
