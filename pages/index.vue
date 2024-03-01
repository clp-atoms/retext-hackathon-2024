<script setup lang="ts">
import { type User } from "~/types/";
const { users, login, userLoggedIn, redirectUser } = useUser();

if (userLoggedIn.value) {
  redirectUser(userLoggedIn.value);
}
type FormData = {
  email: string;
  password: string;
  privacy: boolean;
};

async function submit(formData: FormData) {
  await new Promise((r) => setTimeout(r, 1000));
  const user = users.value.find((user: User) => user.email === formData.email);

  if (user) {
    await login(user);
  } else {
    alert("User not found");
  }
}
</script>

<template>
  <NuxtLayout>
    <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
      <h1 class="title">Login</h1>
      <FormKit
        type="form"
        #default="{ value }"
        @submit="submit"
        submit-label="Accedi"
        class="w-full"
        label="Accedi"
      >
        <FormKit type="email" name="email" label="Email" />
        <FormKit type="password" name="name" label="Password" />
      </FormKit>
    </div>
  </NuxtLayout>
</template>
