<script setup lang="ts">
</script>

<template>
  <div
    class="bg-neutral-800 border border-[#1F1F1F] rounded-lg p-4 text-white h-full"
  >
    <!-- Header row -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
          class="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[11px] font-semibold"
        >
          P
        </div>
        <span class="text-sm text-slate-200 font-medium">
          My Assets
        </span>
      </div>

      <!-- Currency toggle mimic -->
      <button
        type="button"
        class="w-10 h-6 rounded-full bg-black/60 flex items-center px-0.5"
      >
        <div
          class="w-5 h-5 rounded-full bg-white text-black text-[11px] flex items-center justify-center ml-auto"
        >
          ₺
        </div>
      </button>
    </div>

    <!-- Total -->
    <div class="mt-3">
      <div class="text-2xl font-semibold leading-none">₺0.00</div>
    </div>

    <!-- Accounts list -->
    <div class="mt-4 space-y-1.5 text-[8px] font-light">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500" />
          <span>Turkish Lira Account</span>
        </div>
        <span class="text-slate-300">₺0.00</span>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-amber-400" />
          <span>Precious Metals</span>
        </div>
        <span class="text-slate-400">—</span>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-sky-400" />
          <span>Investment Account</span>
        </div>
        <span class="text-slate-400">—</span>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-purple-400" />
          <span>Savings Account</span>
        </div>
        <span class="text-slate-400">—</span>
      </div>
    </div>
  </div>
</template>
