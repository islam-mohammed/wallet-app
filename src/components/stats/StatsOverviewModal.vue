<script setup lang="ts">
const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()

function close() {
  emit('update:open', false)
}
</script>

<template>
  <Teleport to="body">
    <!-- FULL-SCREEN OVERLAY WITH BLUR -->
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-md"
    >
      <!-- Content wrapper: fills screen, centers chart, button near bottom -->
      <div class="flex-1 flex flex-col items-center justify-between py-10">
        <!-- Top spacer (for status bar feel) -->
        <div class="h-6" />

        <!-- Donut + legend block -->
        <div class="flex flex-col items-center px-6">
          <!-- Donut chart -->
          <div class="relative w-56 h-56">
            <!-- colored ring -->
            <div
              class="absolute inset-0 rounded-full"
              :style="{
                background:
                  'conic-gradient(#22c55e 0 45deg, #f97316 45deg 90deg, #3b82f6 90deg 135deg, #8b5cf6 135deg 180deg, #0ea5e9 180deg 225deg, #f43f5e 225deg 270deg, #14b8a6 270deg 315deg, #facc15 315deg 360deg)',
              }"
            ></div>

            <!-- inner circle -->
            <div
              class="absolute inset-13 rounded-full bg-[#111111] flex flex-col items-center justify-center text-center"
            >
              <span class="text-[11px] text-slate-400">Total</span>
              <span class="mt-0.5 text-[18px] font-semibold text-white">
                ₺3,417.50
              </span>
            </div>
          </div>

          <!-- Legend -->
          <div class="mt-6  grid grid-cols-2 gap-y-1.5 text-[11px] text-white content-center">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#22c55e]" />
              <span class="text-slate-300">Transport Cards</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#8b5cf6]" />
              <span class="text-slate-300">Games & Digital Codes</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#3b82f6]" />
              <span class="text-slate-300">Lottery</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#f97316]" />
              <span class="text-slate-300">Donations</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#0ea5e9]" />
              <span class="text-slate-300">Findeks</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#14b8a6]" />
              <span class="text-slate-300">Airport Services</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-sm bg-[#facc15]" />
              <span class="text-slate-300">GSM TL / Packages</span>
            </div>
          </div>

          <!-- Description text -->
          <p
            class="mt-8 text-center text-2xl leading-snug text-slate-50  px-6"
          >
            You can view your payments monthly by category.
          </p>
        </div>

        <!-- Bottom close button -->
        <button
          type="button"
          class="mb-4 flex flex-col items-center gap-2"
          @click="close"
        >
          <span
            class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-lg"
          >
            ×
          </span>
          <span class="text-[13px] text-slate-200">Got it</span>
        </button>
      </div>
    </div>
  </Teleport>
</template>
