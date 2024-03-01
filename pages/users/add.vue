<script setup lang="ts">
const { userLoggedIn } = useUser();
if (!userLoggedIn.value) navigateTo("/");
</script>
<template>
  <div>
    <h1>Add User</h1>
    <NuxtLink v-if="userLoggedIn?.roles.includes('admin')" to="/users/list"
      >Go to list</NuxtLink
    >
  </div>
</template>
