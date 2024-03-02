<template>
  <div class="flex items-center mb-[11px] px-[7px] py-[8px]">
    <IconsAvatar class="w-[48px] h-[48px] mr-[12px]" />
    <div>
      <div class="text-[16px] font-[600]">
        <slot name="name"></slot>
      </div>
      <div class="text-[14px]">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
