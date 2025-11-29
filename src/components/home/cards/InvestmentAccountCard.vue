<script setup lang="ts">
  import stockLogos from '@/assets/images/stock_market.webp'
  import investmentChart from '@/assets/images/data_bear.webp'
  import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <div
    class="bg-neutral-800 border flex-col border-[#1F1F1F] rounded-xl p-4 text-white flex items-stretch h-full"
  >
    <div class="flex">
      <!-- Left text -->
      <div class="flex-1 flex flex-col w-[60%]">
        <!-- Logos row (Nasdaq / NYSE / Borsa) -->
        <div class="mb-2">
          <img :src="stockLogos" alt="Stock markets" />
        </div>

        <h2 class="text-2xl leading-5.5 mt-1 whitespace-pre-line">
          {{ 'Investment Account'.split(' ').join('\n') }}
        </h2>
        <p class="mt-2 text-[8px] text-slate-400">Buy and sell stocks.</p>
      </div>

      <!-- Right illustration -->
      <div class="ml-3 flex items-end justify-end w-[40%]">
        <img :src="investmentChart" alt="Investment chart" width="80" />
      </div>
    </div>
    <button
      type="button"
      class="mt-4 w-full inline-flex items-center justify-between rounded-lg bg-black px-4 py-3 text-sm"
    >
      <span>Open Investment Account</span>
      <AppIcon name="chevronright" size="14" color="white" />
    </button>
  </div>
</template>
