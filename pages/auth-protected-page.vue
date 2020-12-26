<template>
  <div>
    <h1>Auth protected</h1>
    <button @click="getSome">get</button>
    {{ x1 }}
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      x1: '',
    }
  },
  methods: {
    getSome() {
      this.$axios
        .$get('http://localhost:3001/api/jwt-auth/test-private-route')
        .then((value) => (this.x1 = value))
    },
  },
}
</script>
