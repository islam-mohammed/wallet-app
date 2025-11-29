<script setup lang="ts">
import notification from "@/assets/images/notification.webp";
const props = withDefaults(
  defineProps<{
    unreadCount?: number | null;
  }>(),
  {
    unreadCount: 0,
  },
);
</script>

<template>
  <!-- Wrapper to host card + stacked shadows + badge -->
  <div class="relative w-full">
    <!-- Bottom shadow -->
    <div
      class="pointer-events-none absolute left-4 right-4 -bottom-2 h-2 bg-gray-500/10 rounded-b-lg"
    ></div>

    <!-- Mid shadow -->
    <div
      class="pointer-events-none absolute left-6 right-6 -bottom-3.5 h-1.5 bg-gray-500/5 rounded-b-lg"
    ></div>

    <!-- Main banner card -->
    <button
      type="button"
      class="relative w-full bg-[#111111] border border-[#1F1F1F] rounded-2xl px-4 py-3 flex items-start gap-3 text-left"
    >
      <!-- Left icon -->

      <img :src="notification" alt="Coins jar" width="28" />

      <!-- Text block -->
      <div class="flex-1">
        <!-- Top small line: "Today 06:00" -->
        <p class="text-xs text-slate-500 leading-snug">Today 06:00</p>

        <!-- Main title -->
        <p class="text-sm font-semibold text-white leading-snug">
          Monthly account summary created.
        </p>

        <!-- Subtitle -->
        <p class="text-xs text-slate-400 leading-snug mt-0.5">
          Tap to see what you did this month.
        </p>
      </div>
    </button>

    <!-- Red unread badge (top-right), like in screenshot -->
    <div
      v-if="props.unreadCount > 0"
      class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center"
    >
      {{ props.unreadCount }}
    </div>
  </div>
</template>
