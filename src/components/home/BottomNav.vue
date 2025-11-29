<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-[#0E0E0E] py-3 px-2 border-t border-[#1F1F1F]">
    <div class="flex items-center justify-around">

      <button class="flex flex-col items-center gap-1 text-white">
        <AppIcon name="home" :size="22" color="#fff" />
        <span class="text-xs">Home</span>
      </button>

      <button class="flex flex-col items-center gap-1 text-gray-400">
        <AppIcon name="qr" :size="22" color="#9ca3af" />
        <span class="text-xs">QR Transactions</span>
      </button>

      <button class="flex flex-col items-center gap-1 text-gray-400">
        <AppIcon name="plane" :size="22" color="#9ca3af" />
        <span class="text-xs">Money Transfer</span>
      </button>

      <button class="flex flex-col items-center gap-1 text-gray-400">
        <AppIcon name="newspaper" :size="22" color="#9ca3af" />
        <span class="text-xs">Payments</span>
      </button>

      <button class="flex flex-col items-center gap-1 text-gray-400">
        <AppIcon name="card" :size="22" color="#9ca3af" />
        <span class="text-xs">Papara Card</span>
      </button>
    </div>
  </nav>
</template>
