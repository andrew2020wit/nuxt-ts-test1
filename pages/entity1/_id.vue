<template lang="pug">
  div.container
    h1 Entity1 id page
    p id from context = {{id}}
</template>

<script>
export default {
  asyncData(context) {
    const id = context.params.id
    try {
      return { id }
    } catch (e) {
      context.error(e)
    }
  },
}
</script>
