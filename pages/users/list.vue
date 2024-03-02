<script setup lang="ts">
// const { userLoggedIn } = useUser();
// if (!userLoggedIn.value) navigateTo("/");
</script>

<template>
  <div class="w-full px-[19px]">
    <HederList />
    <div class="w-full flex">
      <UserListNavigation class="w-[18%] mr-[2%]" />
      <UserListBody class="w-[60%]" />
      <div class="w-[18%] ml-[2%]"></div>
    </div>
  </div>
</template>
