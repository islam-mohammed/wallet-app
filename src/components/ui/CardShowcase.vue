<script setup lang="ts"></script>

<template>
  <div class="relative w-full max-w-xs mx-auto h-60 mt-16 mb-4">
    <!-- Left gray card -->
    <div
      class="absolute left-0 bottom-4 w-38 h-60 rounded-xl bg-neutral-100 text-neutral-500 shadow-lg shadow-black/40 overflow-hidden"
    >
      <!-- chip -->
      <div class="mt-4 ml-4 w-4 h-8 rounded-md bg-neutral-200" />
      <!-- logo text -->
      <p class="mt-6 ml-4 text-sm font-semibold tracking-wide text-neutral-400">papara</p>
      <!-- type -->
      <p class="absolute left-4 bottom-4 text-[10px] tracking-[0.2em]">GRAY</p>
      <!-- mastercard circles -->
      <div class="absolute right-4 bottom-3 flex items-center">
        <span class="w-4 h-4 rounded-full bg-red-500 mix-blend-multiply" />
        <span class="-ml-1 w-4 h-4 rounded-full bg-amber-400 mix-blend-multiply" />
      </div>
    </div>

    <!-- Right blue card -->
    <div
      class="absolute right-0 bottom-4 w-38 h-60 rounded-xl bg-sky-400 text-white shadow-lg shadow-black/40 overflow-hidden"
    >
      <!-- chip -->
      <div class="mt-4 ml-4 w-7 h-5 rounded-md bg-white/80" />
      <!-- contactless icon -->
      <div class="absolute top-4 right-4 flex flex-col gap-[2px]">
        <span class="w-3 h-[1px] rounded-full bg-white/80" />
        <span class="w-4 h-[1px] rounded-full bg-white/70" />
        <span class="w-5 h-[1px] rounded-full bg-white/60" />
      </div>
      <!-- small EDU icon substitute -->
      <div class="absolute left-4 bottom-7 text-[10px] font-semibold">EDU</div>
      <!-- mastercard circles -->
      <div class="absolute right-4 bottom-3 flex items-center">
        <span class="w-4 h-4 rounded-full bg-red-500 mix-blend-multiply" />
        <span class="-ml-1 w-4 h-4 rounded-full bg-amber-300 mix-blend-multiply" />
      </div>
    </div>

    <!-- Center black card (on top) -->
    <div
      class="absolute inset-x-20 bottom-0 w-38 h-60 rounded-xl bg-neutral-900 text-neutral-100 shadow-2xl shadow-black/80 overflow-hidden"
    >
      <!-- chip -->
      <div class="mt-5 ml-5 w-8 h-5 rounded-md bg-neutral-200/90" />
      <!-- contactless icon -->
      <div class="absolute top-5 right-6 flex flex-col gap-[2px] text-neutral-300">
        <span class="w-3 h-[1px] rounded-full bg-current" />
        <span class="w-4 h-[1px] rounded-full bg-current/80" />
        <span class="w-5 h-[1px] rounded-full bg-current/60" />
      </div>

      <!-- logo text -->
      <p class="mt-8 ml-5 text-lg font-semibold tracking-wide text-neutral-700">papara</p>

      <!-- type -->
      <p class="absolute left-5 bottom-5 text-[10px] tracking-[0.2em] text-neutral-400">
        BLACK
      </p>

      <!-- mastercard circles -->
      <div class="absolute right-5 bottom-4 flex items-center">
        <span class="w-5 h-5 rounded-full bg-red-600 mix-blend-multiply" />
        <span class="-ml-1.5 w-5 h-5 rounded-full bg-amber-400 mix-blend-multiply" />
      </div>
    </div>
  </div>
</template>
