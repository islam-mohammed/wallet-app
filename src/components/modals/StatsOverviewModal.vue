<script setup lang="ts">
  import { computed } from 'vue'
  import { Doughnut } from 'vue-chartjs'
  import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData,
  } from 'chart.js'
  import AppIcon from '@/components/icons/AppIcon.vue'

  Chart.register(ArcElement, Tooltip, Legend)

  const props = defineProps<{
    open: boolean
  }>()

  const emit = defineEmits<{
    'update:open': [boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value: boolean) => emit('update:open', value),
  })

  type CategoryKey =
    | 'transport'
    | 'games'
    | 'chance'
    | 'donation'
    | 'findeks'
    | 'airport'
    | 'gsm'

  type Category = {
    key: CategoryKey
    label: string
    amount: number
    color: string
    icon: string
  }

  const categories: Category[] = [
    {
      key: 'transport',
      label: 'Transport Cards',
      amount: 820.5,
      color: '#1FB56C',
      icon: 'stats-transport',
    },
    {
      key: 'games',
      label: 'Games & Digital Code',
      amount: 560.75,
      color: '#7854D8',
      icon: 'stats-games',
    },
    {
      key: 'airport',
      label: 'Airport Services',
      amount: 525,
      color: '#20B0B0',
      icon: 'stats-airport',
    },
    {
      key: 'gsm',
      label: 'GSM TL/Package',
      amount: 381,
      color: '#0176B8',
      icon: 'stats-gsm',
    },
    {
      key: 'donation',
      label: 'Donations',
      amount: 290.25,
      color: '#F14E54',
      icon: 'stats-donation',
    },
    {
      key: 'chance',
      label: 'Chance Games',
      amount: 430,
      color: '#4BC3DF',
      icon: 'stats-chance',
    },
    {
      key: 'findeks',
      label: 'Findeks',
      amount: 410,
      color: '#00A1FF',
      icon: 'stats-findeks',
    },
  ]

  const totalAmount = computed(() => categories.reduce((sum, c) => sum + c.amount, 0))

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2,
    }).format(value)

  const chartData = computed<ChartData<'doughnut'>>(() => ({
    labels: categories.map((c) => c.label),
    datasets: [
      {
        data: categories.map((c) => c.amount),
        backgroundColor: categories.map((c) => c.color),
        borderWidth: 0,
        borderRadius: 0, // solid ring
        hoverOffset: 2,
      },
    ],
  }))

  const chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '58%',
    rotation: -90 * (Math.PI / 180),
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || ''
            const value = ctx.parsed || 0
            return `${label}: ${formatCurrency(value)}`
          },
        },
      },
    },
  }

  // icon positions: centered in each slice
  const iconPositions = computed(() => {
    const total = categories.reduce((sum, c) => sum + c.amount, 0)
    let accumulated = 0

    return categories.map((category) => {
      const startAngle = (accumulated / total) * 2 * Math.PI
      const endAngle = ((accumulated + category.amount) / total) * 2 * Math.PI
      const midAngle = (startAngle + endAngle) / 2 - Math.PI / 2

      // mid radius of ring (inner ≈ 29%, outer = 50%)
      const radius = 40
      const x = 50 + radius * Math.cos(midAngle)
      const y = 50 + radius * Math.sin(midAngle)

      accumulated += category.amount

      return {
        left: `${x}%`,
        top: `${y}%`,
      }
    })
  })
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <!-- FULLSCREEN, BLURRED BACKGROUND -->
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 h-full w-full bg-black/70 backdrop-blur-xl items-center justify-center"
        @click.self="isOpen = false"
      >
        <!-- phone-style sheet that fills the screen -->
        <div
          class="relative flex h-full w-full flex-col items-center rounded-none bg-white/5 px-5 pb-6 pt-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl justify-center"
          :style="{
            background:
              'radial-gradient(circle at top, rgba(54,63,84,0.95) 0, rgba(20,27,45,0.98) 55%, rgba(7,10,20,1) 100%)',
          }"
        >
          <!-- small summary top-right -->
          <div
            class="absolute right-5 top-5 flex flex-col items-center gap-1 text-[11px] text-slate-100"
          >
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80"
            >
              <span
                class="absolute left-1 top-1 h-3.5 w-3.5 rounded-full"
                style="background: #1fb56c"
              />
              <span
                class="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full"
                style="background: #7854d8"
              />
              <span
                class="absolute right-2 top-[9px] h-3 w-3 rounded-full"
                style="background: #f69227"
              />
            </div>
            <span class="opacity-90">Summary</span>
          </div>

          <!-- donut -->
          <div class="mt-10 mb-6 flex w-full justify-center">
            <div class="relative h-[210px] w-[210px]">
              <Doughnut :data="chartData" :options="chartOptions" class="h-full w-full" />

              <!-- center label + total -->
              <div
                class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
              >
                <span class="text-[13px] text-slate-300">Total</span>
                <span class="mt-1 text-[22px] font-semibold">
                  {{ formatCurrency(totalAmount) }}
                </span>
              </div>

              <!-- icons centered in each slice -->
              <div class="pointer-events-none absolute inset-0">
                <div
                  v-for="(category, index) in categories"
                  :key="category.key"
                  class="absolute -translate-x-1/2 -translate-y-1/2"
                  :style="iconPositions[index]"
                >
                  <AppIcon
                    :name="category.icon as any"
                    :size="22"
                    color="#ffffff"
                    bg-color="transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- legend -->
          <div class="mb-6 mt-2 max-w-[80%] flex w-full flex-col gap-2 text-sm">
            <div
              v-for="category in categories"
              :key="category.key"
              class="flex items-center gap-2"
            >
              <span
                class="h-2.5 w-2.5 rounded-full"
                :style="{ backgroundColor: category.color }"
              />
              <AppIcon :name="category.icon as any" :size="18" class="text-slate-100" />
              <span class="flex-1 text-slate-100">
                {{ category.label }}
              </span>
              <span class="font-semibold text-slate-50">
                {{ formatCurrency(category.amount) }}
              </span>
            </div>
          </div>

          <!-- info text -->
          <p class="mt-8 text-center text-2xl leading-snug text-slate-100">
            You can view your payments<br />
            by category on a monthly basis.
          </p>

          <!-- bottom close -->
          <button
            type="button"
            class="mt-8 flex flex-col items-center gap-1 text-base text-white"
            @click="isOpen = false"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-[16px]"
            >
              ✕
            </span>
            <span>Got it</span>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
