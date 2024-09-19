<script setup lang="ts">
// Access QueryClient instance
const queryClient = useQueryClient()

// Query
const { isLoading, isError, data, error } = useQuery({
//   queryKey: ['todos'],
  queryFn: () => $fetch("/api/hello"), // Use $fetch with your api routes to get typesafety 
})

</script>

<template>

    <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
    <p>{{ data }}</p>
</template>