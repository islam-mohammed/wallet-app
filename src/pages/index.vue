<script setup lang="ts">
import HomeTopBar from '@/components/home/HomeTopBar.vue'
import FeatureIconsRow from '@/components/home/FeatureIconsRow.vue'
import BottomNav from '@/components/home/BottomNav.vue'
import HomeCarousel from '@/components/home/HomeCarousel.vue'
import TryAccountCard from '@/components/home/cards/TryAccountCard.vue'
import InvestmentAccountCard from '@/components/home/cards/InvestmentAccountCard.vue'
import UsdAccountCard from '@/components/home/cards/UsdAccountCard.vue'
import PreciousMetalsCard from '@/components/home/cards/PreciousMetalsCard.vue'
import AllAssetsCard from '@/components/home/cards/AllAssetsCard.vue'
import SavingAccountCard from '@/components/home/cards/SavingAccountCard.vue'
import NotificationBanner from '@/components/home/NotificationBanner.vue'
import QuickActionsRow from '@/components/home/QuickActionsRow.vue'

interface FeatureIcon {
  id: number
  label: string
  bg: string
  pinned?: boolean
}

const featureIcons: FeatureIcon[] = [
  { id: 1, label: 'Papara Sticker Card', bg: 'bg-slate-900', pinned: true },
  { id: 2, label: 'Papara Superman Card', bg: 'bg-slate-900', pinned: true },
  { id: 3, label: 'e-Şans 150 TL Gift', bg: 'bg-slate-900', pinned: false },
  { id: 4, label: 'Investment Account', bg: 'bg-slate-900', pinned: false },
  { id: 5, label: 'My Golden Gift', bg: 'bg-slate-900', pinned: false },
]

</script>


<template>
  <div class="flex flex-col min-h-screen bg-black text-slate-50">
    <!-- Top bar -->
    <HomeTopBar />

    <!-- Feature icons row -->
    <FeatureIconsRow :items="featureIcons" />

<main class="flex-1 pt-1 pb-20">
      <!-- Carousel -->
    <HomeCarousel :intervalMs="4000">
      <TryAccountCard />
      <InvestmentAccountCard />
      <UsdAccountCard />
      <PreciousMetalsCard />
      <SavingAccountCard /> 
      <AllAssetsCard />
    </HomeCarousel>

      <!-- Placeholder sections to be implemented in later steps -->
      <section
        class="h-20 flex items-center justify-center bg-transparent text-slate-400 text-sm mx-4 mt-3 "
      >
       <NotificationBanner :unreadCount="5" class="mt-4" />
      </section>

         <section class="mt-8 mx-4">

        <QuickActionsRow />
      </section>

      <section
        class="flex-1 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm mx-4 mt-3"
      >
        Transaction list will go here
      </section> 
    </main>




    <!-- Bottom navigation -->
    <BottomNav />
  </div>
</template>
