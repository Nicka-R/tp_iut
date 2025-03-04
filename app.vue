<script setup lang="ts">
import { NuxtPage } from '#components';

</script>

<template>
  <header>    
    <NuxtLink href="/bonjour">Bonjour</NuxtLink>
    <NuxtLink href="/chat">Chat</NuxtLink>
  </header>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

/* ajout de CSS */
<style>
  body{
    margin: 0;
    font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
  }
  header{
    background-color: rgb(240, 210, 255);
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  main{
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    height: 100vh;
  }

  img{
    width: 100%;
    height: auto;
  }

  footer{
    background-color: rgb(240, 210, 255);
    p{
      text-align: center;
      padding: 10px;
      margin: 0;
    }
  }

</style>
