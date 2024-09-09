<script setup lang="ts">
const count: Ref<number> = ref(0)
</script>
<template>

<button @click="count--">-</button>
<button @click="count = 0">{{ count }}</button>
<button @click="count++">+</button>


</template>