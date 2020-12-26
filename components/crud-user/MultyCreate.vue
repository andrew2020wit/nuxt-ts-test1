<template>
  <div class="container">
    <h2>Multy Create User</h2>
    <button @click="onSubmit">MultyCreate</button>
    <p>Will be added:</p>
    <pre>{{ multyUsers }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { apiUrl } from '@/const'
export default Vue.extend({
  data() {
    return {
      name: 'fsdf',
      age: 22,
      multyUsers: [
        { name: 'Anna', age: '34' },
        { name: 'Bob', age: '24' },
        { name: 'Clare', age: '14' },
        { name: 'Denis', age: '44' },
        { name: 'Eve', age: '54' },
        { name: 'John', age: '32' },
      ],
    }
  },
  methods: {
    async onSubmit() {
      const point = apiUrl + '/init-kind/crud-rest/user'
      await this.$axios.$post(point, this.multyUsers).then((response) => {
        console.log(response)
        this.$router.go(0)
      })
    },
  },
})
</script>
