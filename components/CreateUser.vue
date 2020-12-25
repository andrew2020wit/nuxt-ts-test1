<template>
  <div class="container">
    <h2>Create User</h2>
    <form @submit.prevent="onSubmit">
      <input
        v-model.trim="name"
        name="name"
        placeholder="name"
        minlength="3"
        maxlength="128"
        required
      />
      <input
        v-model.number="age"
        name="age"
        type="number"
        placeholder="age"
        min="10"
        max="100"
        required
      />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { apiUrl } from '@/const'
export default {
  data() {
    return { name: 'fsdf', age: 22 }
  },
  methods: {
    async onSubmit() {
      // console.log('name', this.name, this.age)
      const point = apiUrl + '/main/crud-rest/0/user'
      await this.$axios
        .$post(point, { name: this.name, age: this.age })
        .then((response) => {
          console.log(response)
          this.$router.go()
        })
    },
  },
}
</script>
