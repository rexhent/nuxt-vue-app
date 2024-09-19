<script setup lang="ts">
  
  const temperature = ref('Loading...');
  
  // Fetch the temperature from the micro:bit on page load
  async function fetchTemperature() {
    try {
      const res = await $fetch('/api/get-temp');
      temperature.value = res;
    } catch (error) {
      console.error('Failed to get temperature:', error);
      temperature.value = 'Error fetching temperature';
    }
  }
  
  // Toggle LED on the micro:bit
  async function toggleLED() {
    try {
      await $fetch('/api/toggle', { method: 'POST' });
      alert('LED toggled');
    } catch (error) {
      console.error('Failed to toggle LED:', error);
    }
  }
  
  onMounted(() => {
    fetchTemperature();
  });
  </script>
  

<template>
    <div>
      <h1>Microbit Temperature App</h1>
      <p>Temperature: {{ temperature }}</p>
      <BlueButton @click="toggleLED">Toggle LED</BlueButton>
    </div>
</template>
  
  