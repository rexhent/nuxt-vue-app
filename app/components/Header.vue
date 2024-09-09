<script setup>
const links = [["/", "Home"], ["/blog", "Blog"]]
</script>
<template>
    <div flex="~ row">
        <div v-for="link in links">
            <NuxtLink mr="1" :to="link[0]">{{ link[1] }}</NuxtLink>
        </div>
    </div>
    
</template>