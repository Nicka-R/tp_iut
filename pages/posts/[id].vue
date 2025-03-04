<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
console.log(id)

const getTitle = (id: string) => {
  switch (id) {
    case '1':
        return "C’est l’heure du duel"
        break
    case '2':
        return "En avant Pikachu"
        break
    default:
        return "Article inconnu"
        break
  }
}

</script>

<template>
<html>
    <head>
        <title>{{ getTitle(id) }}</title>
    </head>
  <body>
    <div class="navigation">
        <NuxtLink to="/posts/1">Article 1</NuxtLink>
        <NuxtLink to="/posts/2">Article 2</NuxtLink>
    </div>
    <main>
      <h1>{{ getTitle(id) }}</h1>
      <div class="page-content">
        <span>Article {{ (id) }}</span>
        <img src="../../assets/images/chien-frange.png" alt="chien à frange">
      </div>
    </main>
    
   <footer>
      <p>TP IUT</p>
      <p>Nicka Ratovobodo</p>
    </footer>
  </body>
</html>
</template>