<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <div
    :class="{ 'bg-gradiant': route.fullPath === '/' }"
    class="overflow-hidden h-screen"
  >
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
