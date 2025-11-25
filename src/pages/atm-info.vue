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
        <h1 class="text-[24px] leading-snug font-semibold text-slate-50">
          Akbank ATM’leri tamamen
          <br />
          ücretsiz.
        </h1>

        <p class="mt-3 text-[13px] leading-relaxed text-slate-400">
          Papara Card ile tüm ATM’lerden para çekebilir,
          Akbank ATM’lerinde tamamen ücretsiz para
          yatırabilir ve çekebilirsin.
        </p>
      </section>

      <!-- New card showcase -->
      <CardShowcase />
    </main>

    <footer class="px-6 pb-8 pt-4 space-y-3 bg-black">
      <SecondaryButton label="ATM Bul" @click="handleFindAtm" />
      <PrimaryButton label="Papara Card iste" @click="handleRequestCard" />
    </footer>
  </div>
</template>
