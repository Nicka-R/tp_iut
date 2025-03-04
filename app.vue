<script setup lang="ts">
import { NuxtPage } from '#components';

</script>

<template>
  <header>    
    <NuxtLink href="/bonjour">Bonjour</NuxtLink>
    <NuxtLink href="/chat">Chat</NuxtLink>
    <NuxtLink href="/posts/1">Articles</NuxtLink>  
  </header>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
