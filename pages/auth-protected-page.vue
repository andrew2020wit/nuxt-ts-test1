<template lang="pug">
  div
    h1 AuthProtectedPage
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
