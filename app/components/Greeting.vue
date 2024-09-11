<script setup lang="ts">
// ref runs on the client. It is the same as the useState hook in react
const name: Ref<string> = ref<string>("")

// useState is a Nuxt composable that runs on the server, allowing you to share state in components without a full state management solution
const userName = useState<string>('name')

watchEffect(() => {
    userName.value = name.value
})

</script>

<template>
    <input v-model="name" />
    <p>Here I'm showing the name in the component. Name: {{ name }}</p>
    <p>useState in component: {{ userName }}</p>
</template>