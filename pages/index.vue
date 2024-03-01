<script setup lang="ts">
async function submit() {
  await new Promise((r) => setTimeout(r, 1000));
  alert("Submitted! 🎉");
}
</script>

<template>
  <NuxtLayout>
    <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
      <h1 class="title">Login</h1>
      <FormKit type="form" #default="{ value }" @submit="submit" class="w-full">
        <FormKit type="email" name="name" label="Email" help="Your e-mail" />
        <FormKit
          type="password"
          name="name"
          label="Password"
          help="Your password"
        />
        <FormKit
          type="checkbox"
          name="privacy"
          label=""
          :options="{
            privacyPolicy: 'Privacy Policy',
          }"
          validation="required"
        />
      </FormKit>
    </div>
  </NuxtLayout>
</template>
