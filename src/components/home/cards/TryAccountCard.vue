<script setup lang="ts">
  import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <div
    class="bg-neutral-800 border border-[#1F1F1F] rounded-xl px-5 p-4 text-white h-full"
  >
    <!-- Header: flag + title -->
    <div class="flex items-center gap-2">
      <div class="w-5 h-5 rounded-full overflow-hidden">
        <!-- simple Turkish flag mimic -->
        <div class="w-full h-full bg-red-600 flex items-center justify-center">
          <span class="text-[9px] text-white font-semibold">TR</span>
        </div>
      </div>
      <span class="text-[12px] text-slate-200 font-regular"> Turkish Lira Account </span>
    </div>

    <!-- Divider -->
    <div class="mt-3 h-px bg-white/5" />

    <!-- Balance -->
    <div class="mt-4 flex gap-2 items-center">
      <span class="text-3xl leading-none font-semibold">₺0.00</span>
      <button type="button" class="text-xs text-slate-400 flex items-center gap-1">
        <AppIcon name="info" :size="16" color="#fff" />
      </button>
    </div>

    <p class="mt-1 text-[11px] text-slate-400">
      IBAN: <span class="underline">TR00 0000 0000 0000 0000 0000 00</span>
    </p>

    <!-- Actions -->
    <div class="mt-4 grid grid-cols-2 gap-2">
      <!-- Deposit / Withdraw -->
      <button
        type="button"
        class="flex items-center justify-between rounded-lg bg-black text-sm p-2"
      >
        <span>Dep / With</span>
        <span
          class="w-7 h-7 rounded-sm bg-white text-black flex items-center justify-center"
        >
          <AppIcon name="card" :size="14" color="#000000" />
        </span>
      </button>

      <!-- Send -->
      <button
        type="button"
        class="flex items-center justify-between rounded-lg bg-black text-sm p-2"
      >
        <span>Send</span>
        <span
          class="w-7 h-7 rounded-sm bg-white text-black flex items-center justify-center"
        >
          <AppIcon name="plane" :size="14" color="#000000" />
        </span>
      </button>
    </div>
  </div>
</template>
