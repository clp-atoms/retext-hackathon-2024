<script setup>
const showList = ref(false);
</script>
<template>
  <div class="relative">
    <div class="flex justify-between w-full py-[24px]">
      <div class="flex items-center">
        <IconsLogo class="mr-[45px] w-[45px] h-[57px]" />
        <span class="text-[40px]">Hello <strong>Maria Luisa!</strong></span>
      </div>
      <div class="w-[209px] relative">
        <div class="flex items-center justify-end">
          <button><IconsSearch class="mr-[8px]" /></button>
          <button><IconsClock class="mx-[8px]" /></button>
          <button
            @click="showList = !showList"
            class="relative"
            :class="{ 'border-b-[1px] border-neutral-gray': showList }"
          >
            <IconsCat class="translate-y-[3px] ml-[8px]" />
          </button>
        </div>
      </div>
      <div
        v-if="showList"
        class="tooltip mt-[11px] border-[1px] border-neutral-gray rounded-[8px] p-[8px] bg-white shadow-md absolute right-0 bottom-0 translate-y-[88%] w-[209px]"
      >
        <div class="title border-b-[1px] border-neutral-gray py-[11px]">
          <strong>My account</strong>
        </div>
        <div class="group border-b-[1px] border-neutral-gray">
          <div class="icon flex items-center py-[6px]">
            <IconsUser class="mr-[8px]" /> Profile
          </div>
          <div class="icon flex items-center py-[6px]">
            <IconsSettings class="mr-[8px]" /> Settings
          </div>
          <div class="icon flex items-center py-[6px]">
            <IconsLogOut class="mr-[8px]" /> Shortcuts
          </div>
        </div>
        <div class="group border-b-[1px] border-neutral-gray">
          <div class="icon flex items-center py-[6px]">
            <IconsUser class="mr-[8px]" /> Teams
          </div>
          <div class="icon flex items-center justify-between py-[6px]">
            <div class="flex items-center">
              <IconsCreditCard class="mr-[8px]" /> Invite users
            </div>
            <IconsArrowRight />
          </div>
          <div class="icon flex items-center py-[6px]">
            <IconsPlus class="mr-[8px]" /> New team
          </div>
          <div class="icon flex items-center justify-between py-[6px]">
            <div class="flex items-center">
              <IconsCreditCard class="mr-[8px]" /> Support
            </div>
            <IconsArrowRight />
          </div>
        </div>
        <div class="icon flex items-center py-[6px]">
          <IconsLogOut class="mr-[8px]" /> Log out
        </div>
      </div>
    </div>
  </div>
</template>
