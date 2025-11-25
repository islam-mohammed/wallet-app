<script setup lang="ts">
import HomeTopBar from '@/components/home/HomeTopBar.vue'
import FeatureIconsRow from '@/components/home/FeatureIconsRow.vue'
import BottomNav from '@/components/home/BottomNav.vue'

interface FeatureIcon {
  id: number
  label: string
  bg: string
  pinned?: boolean
}

const featureIcons: FeatureIcon[] = [
  { id: 1, label: 'Papara Sticker Card', bg: 'bg-slate-900', pinned: true },
  { id: 2, label: 'Papara Superman Card', bg: 'bg-slate-900', pinned: true },
  { id: 3, label: 'e-Şans 150 TL Hediye', bg: 'bg-slate-900', pinned: false },
  { id: 4, label: 'Yatırım Hesabı', bg: 'bg-slate-900', pinned: false },
  { id: 5, label: 'Altın Hediyem', bg: 'bg-slate-900', pinned: false },
]
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black text-slate-50">
    <!-- Top bar -->
    <HomeTopBar />

    <!-- Feature icons row -->
    <FeatureIconsRow :items="featureIcons" />

    <!-- Placeholder for carousel + content (will be filled in later steps) -->
    <main class="flex-1 px-4 pt-3 space-y-4">
      <section
        class="h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm"
      >
        Carousel / account cards will go here
      </section>

      <section
        class="h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm"
      >
        Notification banner will go here
      </section>

      <section
        class="h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm"
      >
        Quick actions will go here
      </section>

      <section
        class="flex-1 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm"
      >
        Transaction list will go here
      </section>
    </main>

    <!-- Bottom navigation -->
    <BottomNav />
  </div>
</template>
