<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-black text-slate-50 flex justify-center">
    <!-- Phone frame -->
    <div class="w-full max-w-sm min-h-screen bg-black flex flex-col">
      <RouterView />
    </div>
  </div>
</template>
