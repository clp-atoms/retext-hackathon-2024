<template>
  <div
    class="button flex items-center text-primitive-gray hover:text-black font-[14px]"
  >
    <div
      class="icon rounded-[8px] mr-[12px] p-[8px] bg-neutral-gray hover:bg-black rounded-[8px] text-white hover:text-black"
    >
      <slot name="icon" class="w-[16px] h-[16px]"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<style type="text/scss">
.button {
  &:hover {
    color: #000;
    .icon {
      background-color: #000;
    }
  }
}
</style>
