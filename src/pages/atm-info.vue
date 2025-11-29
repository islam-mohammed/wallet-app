<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHeader from '@/components/ui/AppHeader.vue'
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import SecondaryButton from '@/components/ui/SecondaryButton.vue'
import CardShowcase from '@/components/ui/CardShowcase.vue'

const router = useRouter()

function goBack() {
  router.back()
}

function handleFindAtm() {
  console.log('ATM Bul clicked')
}

function handleRequestCard() {
  console.log('Papara Card iste clicked')
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black">
    <AppHeader :showBack="true" @back="goBack" />

    <main class="flex-1 px-6">
      <section class="mt-4 text-center">
        <h1 class="text-2xl leading-snug font-semibold text-slate-50">
          Akbank ATMs are completely FREE.
        </h1>

        <p class="mt-3 text-sm leading-relaxed text-slate-400">
With your Papara Card, you can withdraw money from all ATMs, and you can deposit and withdraw money completely free of charge at Akbank ATMs.
        </p>
      </section>

      <!-- New card showcase -->
      <CardShowcase />
    </main>

    <footer class="px-6 pb-8 pt-4 space-y-3 bg-black">
      <SecondaryButton label="Find ATM" @click="handleFindAtm" />
      <PrimaryButton label="Request Papara Card" @click="handleRequestCard" />
    </footer>
  </div>
</template>
