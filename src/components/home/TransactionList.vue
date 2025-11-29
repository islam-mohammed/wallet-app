<script setup lang="ts">
interface Transaction {
  id: number
  name: string
  description: string
  amount: string
  isPositive: boolean
  date: string
  time: string
  accentColor: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Hidayet Salt',
    description: 'FAST Money Transfer',
    amount: '₺20,000.00',
    isPositive: false,
    date: '14 Sep 2025',
    time: '20:14',
    accentColor: '#16a34a', // green-ish
  },
  {
    id: 2,
    name: 'Garanti BBVA',
    description: 'FAST Money Transfer',
    amount: '₺20,000.00',
    isPositive: true,
    date: '14 Sep 2025',
    time: '20:12',
    accentColor: '#22c55e',
  },
  {
    id: 3,
    name: 'Electricity Bill',
    description: 'Automatic Payment',
    amount: '₺-750.00',
    isPositive: false,
    date: '13 Sep 2025',
    time: '18:02',
    accentColor: '#f97316',
  },
  {
    id: 4,
    name: 'Supermarket',
    description: 'Card Payment',
    amount: '₺-430.25',
    isPositive: false,
    date: '12 Sep 2025',
    time: '19:44',
    accentColor: '#eab308',
  },
  {
    id: 5,
    name: 'Salary',
    description: 'Incoming Transfer',
    amount: '₺32,500.00',
    isPositive: true,
    date: '12 Sep 2025',
    time: '09:10',
    accentColor: '#22c55e',
  },
]
</script>

<template>
  <section class="flex flex-col h-auto">
    <!-- Header -->
    <div class="flex items-center justify-between px-1 mb-2">
      <p class="text-[11px] uppercase tracking-[0.08em] text-slate-500">
        Account Activity
      </p>
      <button
        type="button"
        class="text-[11px] text-slate-400"
      >
        View All
      </button>
    </div>

    <!-- Scrollable list container -->
    <div
      class="flex-1 rounded-2xl  
             overflow-y-auto max-h-48"
    >
      <ul class="divide-y divide-[#1F1F1F]">
        <li
          v-for="tx in transactions"
          :key="tx.id"
          class="px-4 py-3 flex items-center justify-between"
        >
          <!-- Left: avatar + text -->
          <div class="flex items-center gap-3">
            <!-- avatar / logo circle -->
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white"
              :style="{ backgroundColor: tx.accentColor }"
            >
              {{ tx.name.charAt(0) }}
            </div>

            <div class="flex flex-col">
              <span class="text-[13px] text-slate-50">
                {{ tx.name }}
              </span>
              <span class="text-[11px] text-slate-400">
                {{ tx.description }}
              </span>
            </div>
          </div>

          <!-- Right: amount + date -->
          <div class="text-right">
            <div
              class="text-[13px] font-semibold"
              :class="tx.isPositive ? 'text-emerald-400' : 'text-red-500'"
            >
              {{ tx.amount }}
            </div>
            <div class="text-[10px] text-slate-500">
              {{ tx.date }} • {{ tx.time }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
