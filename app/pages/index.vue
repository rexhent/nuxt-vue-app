<script setup lang="ts">

const route = useRoute()
const name = useState('name')
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <br>
    <NuxtLink to="/blog" >Blog</NuxtLink>
    <br>
    <Greeting />
    <p>useState out of component: {{ name }}</p>
    
    <Counter />
  </div>
</template>
