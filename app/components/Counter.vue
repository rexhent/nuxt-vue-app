<script setup lang="ts">
const count: Ref<number> = ref(0)
const useStateCount = useState<number>('count')
watchEffect(() => {
    useStateCount.value = count.value 
})
</script>
<template>

<div>
    <BlueButton @click="count--">-</BlueButton>
    <BlueButton @click="count = 0">{{ count }}</BlueButton>
    <BlueButton @click="count++">+</BlueButton>
</div>

</template>