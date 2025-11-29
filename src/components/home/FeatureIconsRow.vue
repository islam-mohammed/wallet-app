<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue'

interface FeatureIcon {
  id: number
  label: string
  bg: string
  pinned?: boolean
}

const props = defineProps<{
  items: FeatureIcon[]
}>()
</script>

<template>
  <div class="mt-2 px-3">
    <div class="flex overflow-x-auto pb-2 pt-2">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="flex flex-col items-center min-w-16"
      >
        <div class="relative">
          <!-- circular image -->
          <div
            class="w-13 h-13 rounded-full border-2 border-white flex items-center justify-center overflow-hidden"
            :class="item.bg"
          >
            <!-- simple inner icon mimic -->
            <div
              v-if="item.id === 1"
              class="w-13 h-13 rounded-full bg-emerald-300/90 border-2 border-white"
            />
            <div
              v-else-if="item.id === 2"
              class="w-13 h-13 rounded-full bg-red-600 flex items-center justify-center text-yellow-300 text-xs font-bold"
            >
              S
            </div>
            <div
              v-else-if="item.id === 3"
              class="w-13 h-13 rounded-full bg-lime-300 flex items-center justify-center text-slate-900 text-xs font-bold"
            >
              %
            </div>
            <div
              v-else-if="item.id === 4"
              class="w-13 h-13 rounded-full bg-sky-300 flex items-center justify-center text-slate-900 text-xs"
            >
              ₿
            </div>
            <div
              v-else
              class="w-8 h-8 rounded-md bg-amber-300 flex items-center justify-center text-slate-900 text-xs font-semibold"
            >
              ₺
            </div>
          </div>

          <!-- pin icon when pinned === true -->
          <div
            v-if="item.pinned"
            class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center border border-white/60"
          >
            <AppIcon name="pin" :size="10" color="#000" />
          </div>
        </div>

        <p
          class="mt-1 text-[11px] text-slate-300 text-center leading-tight"
        >
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>
