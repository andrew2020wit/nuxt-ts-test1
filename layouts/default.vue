<template>
  <div class="layout">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar:AppTitle</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/crud-user">Crud-Users</b-nav-item>
            <b-nav-item to="/auth-protected-page">AuthProtectedPage</b-nav-item>
            <b-nav-item to="/page2">Page2</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <AppUser />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
}
header {
  flex: 0;
}
main {
  flex: 1;
  padding: 2rem;
}
footer {
  flex: 0;
}
</style>
