<template>
  <span>
    <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        {{ username }}
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item @click="logout">Logout</b-dropdown-item>
    </b-nav-item-dropdown>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    username() {
      return this.$auth.user
    },
  },
  methods: {
    async logout() {
      console.log('logout')
      await this.$auth.logout()
    },
  },
})
</script>
