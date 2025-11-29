<script setup lang="ts">
  import metalLogos from '@/assets/images/precious_metals.webp' // ← replace with your real asset
  import metalCardImage from '@/assets/images/gold_stack.webp' // ← replace with your real asset
  import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <div
    class="bg-neutral-800 border border-[#1F1F1F] rounded-xl p-4 text-white flex flex-col h-full"
  >
    <div class="flex">
      <!-- Left text -->
      <div class="flex-1 flex flex-col w-[60%]">
        <!-- Logos / metal brand row -->
        <div class="mb-2">
          <img :src="metalLogos" alt="Metal card brands" class="h-7" />
        </div>

        <h2 class="text-2xl leading-5.5 mt-1 whitespace-pre-line">
          {{ 'Precious Metals'.split(' ').join('\n') }}
        </h2>

        <p class="mt-2 text-[8px] text-slate-400">
          Spend worldwide with premium metal card.
        </p>
      </div>

      <!-- Right illustration -->
      <div class="ml-3 flex items-end justify-end w-[40%]">
        <img :src="metalCardImage" alt="Metal card" width="80" />
      </div>
    </div>

    <button
      type="button"
      class="mt-4 w-full inline-flex items-center justify-between rounded-lg bg-black px-4 py-3 text-sm"
    >
      <span>Get Metal Card</span>
      <AppIcon name="chevronright" size="14" color="white" />
    </button>
  </div>
</template>
