<template lang="pug">
  div
    h1 Page2
</template>

<script>
export default {
  mounted() {
    console.log('this.$auth.loggedIn', this.$auth.loggedIn)
    console.log('this.$auth.user', this.$auth.user)
    console.log('this.$store', this.$store)
  },
}
</script>
