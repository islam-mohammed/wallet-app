<script setup lang="ts">
import { computed, ref } from "vue";
import AppIcon from "@/components/icons/AppIcon.vue";

interface QuickAction {
  id: number;
  label: string;
  icon: "home" | "qr" | "plane" | "newspaper" | "card";
}

const actions: QuickAction[] = [
  { id: 1, label: "Add Money to Account", icon: "home" },
  { id: 2, label: "Request Papara Card", icon: "card" },
  { id: 3, label: "Pay with QR", icon: "qr" },
  { id: 4, label: "Send Money", icon: "plane" },
  { id: 5, label: "Pay Bills", icon: "newspaper" },
];

const currentIndex = ref(0);
const total = actions.length;

// show 2 cards, sliding one step each click
const visibleActions = computed(() => {
  if (total <= 2) return actions;

  const first = actions[currentIndex.value];
  const second = actions[(currentIndex.value + 1) % total];
  return [first, second];
});

const counterLabel = computed(() => `${currentIndex.value + 1} / ${total}`);

function nextSlide() {
  if (!total) return;
  currentIndex.value = (currentIndex.value + 1) % total;
}
</script>

<template>
  <section class="w-full">
    <!-- Header row -->
    <div class="flex items-center justify-between mb-2 px-1">
      <div class="flex items-center gap-1">
        <p class="text-xs uppercase tracking-[0.08em] text-slate-500">
          Better Papara Experience
        </p>
        <button
          type="button"
          class="flex items-center gap-1 text-xs text-slate-400 top-1.5"
          @click="nextSlide"
        >
          <span class="text-lg text-slate-500">→</span>
        </button>
      </div>

      <span class="text-amber-300 font-medium text-sm">
        {{ counterLabel }}
      </span>
    </div>

    <!-- Actions row (2 visible at a time) -->
    <div class="grid grid-cols-2 gap-3 items-stretch">
      <button
        v-for="action in visibleActions"
        :key="action?.id"
        type="button"
        class="flex items-center justify-start rounded-lg border border-[#1F1F1F] py-2 px-3 h-full"
      >
        <span
          class="w-8 h-8 rounded-full bg-[#FFF5D5] flex items-center justify-center"
        >
          <AppIcon :name="action?.icon" :size="16" color="#000000" />
        </span>
        <span class="mt-2 text-xs text-slate-100 text-left leading-tight pl-2">
          {{ action?.label }}
        </span>
      </button>
    </div>
  </section>
</template>
