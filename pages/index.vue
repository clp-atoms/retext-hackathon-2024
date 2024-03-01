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
    <div>
      <div class="h-screen md:flex md:items-center">
        <div class="w-full md:w-[60%] md:mx-auto md:grid md:grid-cols-2">
          <IconsLogo
            class="mb-[125px] md:mb-0 max-w-[104px] md:max-w-[202px] mx-h-[125px] md:max-h-[205px]"
          />

          <FormKit
            type="form"
            #default="{ value }"
            @submit="submit"
            submit-label="Login"
            class="w-full"
            label="Login"
          >
            <FormKit type="email" name="email" placeholder="Email" />
            <FormKit type="password" name="name" placeholder="Password" />
          </FormKit>
        </div>
      </div>
      <p class="absolute bottom-0 text-center w-full mb-[24px]">© 2023 Retex</p>
    </div>
  </NuxtLayout>
</template>

<!-- <style type="text/scss">
.title {
  @apply bg-black;
}
</style> -->
