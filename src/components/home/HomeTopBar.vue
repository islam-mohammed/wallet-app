<script setup lang="ts">
  import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <div class="flex items-center justify-between px-4 pt-4 pb-2">
    <!-- LEFT SIDE: Menu + Messages -->
    <div class="flex items-center gap-2">
      <!-- Menu -->
      <div class="relative">
        <div
          class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-[#1F1F1F]"
        >
          <AppIcon name="bars" :size="18" color="#ffffff" />
        </div>
        <!-- Notification badge -->
        <span
          class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center"
        >
          5
        </span>
      </div>

      <!-- Messages + Badge -->
      <div class="relative">
        <div
          class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-[#1F1F1F]"
        >
          <AppIcon name="messages" :size="18" color="#ffffff" />
        </div>
      </div>
    </div>

    <!-- CENTER: Papara No -->
    <div class="text-white text-sm font-medium">
      Papara No:
      <span class="font-semibold">••••••••</span>
    </div>

    <!-- RIGHT: User -->
    <div
      class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-[#1F1F1F]"
    >
      <AppIcon name="user" :size="18" color="#ffffff" />
    </div>
  </div>
</template>
