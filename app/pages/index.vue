<script setup lang="ts">

useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
const route = useRoute()

const name = useState('name')

const count = useState('count')

const { data } = await useFetch('/api/hello')


</script>

<template>
  <Head>
    <Title>
      {{ count }}
    </Title>
  </Head>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <br>
    <Greeting />
    <p>useState out of component: {{ name }}</p>
    
    <Counter />
    <p>useState Count (out of component): {{ count }}</p>
    <pre>{{ data }}</pre>
    <pre>{{ data?.hello }}</pre>
    <pre>{{ data?.greeting }}</pre>
  </div>
</template>



<style scoped>
* {
  font-family: Roboto, sans-serif;
}
</style>