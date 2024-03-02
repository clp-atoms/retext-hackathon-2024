<template>
  <div
    class="shadow-md py-[8px] px-[23px] flex items-center justify-between rounded-[8px]"
  >
    <div class="flex items-center">
      <IconsNotificationBg class="w-[48px] h-[48px] mr-[12px]" />
      <div>
        <div class="text-[16px] font-[600]"><slot name="title"></slot></div>
        <div class="text-[14px]"><slot name="description"></slot></div>
      </div>
    </div>
    <button><IconsClose /></button>
  </div>
</template>
