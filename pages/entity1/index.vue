<template lang="pug">
  div.container
    h1 Entity1 Index page
    ul
      li
        NuxtLink(to='/entity1/10') Go to entity 10
      li
        NuxtLink(to='/entity1/13') Go to entity 13 (redirect to Home)
</template>
