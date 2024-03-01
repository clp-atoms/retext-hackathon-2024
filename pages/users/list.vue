<script setup lang="ts">
const { userLoggedIn } = useUser();
if (!userLoggedIn.value) navigateTo("/");
</script>

<template>
  <div>
    <h1>User List</h1>

    <NuxtLink v-if="userLoggedIn?.roles.includes('user')" to="/users/"
      >my account</NuxtLink
    >
  </div>
</template>
