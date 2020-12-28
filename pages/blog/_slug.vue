<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Object" active>
        <pre>{{ article }}</pre>
      </b-tab>
      <b-tab title="nuxt-content">
        <article>
          <nav>
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <nuxt-content :document="article" /></article
      ></b-tab>
      <b-tab title="article.x">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  data() {
    return { article: {} }
  },
  methods: {
    formatDate(date: Date | string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>
