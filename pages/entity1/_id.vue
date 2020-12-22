<template lang="pug">
  div.container
    h1 Entity1 id page
    p id from context = {{id}}
    p
      NuxtLink(to='/entity1/') Go to entity1
</template>

<script>
export default {
  asyncData(context) {
    const id = +context.params.id
    try {
      if (id === 13) context.redirect('/')
      return { id }
    } catch (e) {
      context.error(e)
    }
  },
}
</script>
