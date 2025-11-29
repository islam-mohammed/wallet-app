<script setup lang="ts">
  import metalStack from '@/assets/images/metal_stack.webp'
  import coinsJar from '@/assets/images/conis_jar.webp'
  import AppIcon from '@/components/icons/AppIcon.vue'
</script>

<template>
  <div
    class="bg-neutral-800 border flex-col border-[#1F1F1F] rounded-xl p-4 text-white flex items-stretch h-full"
  >
    <div class="flex">
      <!-- Left text -->
      <div class="flex-1 flex flex-col w-[60%]">
        <!-- Flag + label -->
        <div class="flex items-center gap-2 mb-2">
          <img
            :src="metalStack"
            alt="Saving account"
            class="w-6 rounded-full object-cover"
          />
        </div>

        <h2 class="text-2xl leading-5.5 mt-2 whitespace-pre-line">
          {{ 'Saving Account'.split(' ').join('\n') }}
        </h2>
        <p class="mt-2 text-[8px] text-slate-400">Set a goal, save money.</p>
      </div>

      <!-- Right illustration -->
      <div class="ml-3 flex items-end justify-end w-[40%]">
        <img :src="coinsJar" alt="Coins jar" width="80" />
      </div>
    </div>
    <button
      type="button"
      class="mt-4 w-full inline-flex items-center justify-between rounded-lg bg-black px-4 py-3 text-sm"
    >
      <span>Open a Savings Account</span>
      <AppIcon name="chevronright" size="14" color="white" />
    </button>
  </div>
</template>
