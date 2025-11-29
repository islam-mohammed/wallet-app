<script setup lang="ts">
  import AppIcon from '@/components/icons/AppIcon.vue'

  type QrActionId = 'pay' | 'receive' | 'withdraw' | 'deposit'

  interface QrAction {
    id: QrActionId
    label: string
    description?: string
    icon: 'qr' | 'card'
  }

  const props = defineProps<{
    open: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
    (e: 'select', id: QrActionId): void
  }>()

  const actions: QrAction[] = [
    { id: 'pay', label: 'Pay with QR', icon: 'qr' },
    { id: 'receive', label: 'Receive with QR', icon: 'qr' },
    { id: 'withdraw', label: 'Withdraw from ATM with QR', icon: 'card' },
    { id: 'deposit', label: 'Deposit to ATM with QR', icon: 'card' },
  ]

  function close() {
    emit('update:open', false)
  }

  function handleSelect(action: QrAction) {
    emit('select', action.id)
    close()
  }
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm"
    >
      <div class="px-3 pb-4">
        <!-- Bottom Sheet Panel -->
        <div
          class="bg-[#181818] rounded-lg overflow-hidden border border-[#1F1F1F] divide-y divide-[#222222]"
        >
          <button
            v-for="action in actions"
            :key="action.id"
            type="button"
            class="w-full flex items-center gap-3 px-4 py-3 text-left text-white"
            @click="handleSelect(action)"
          >
            <!-- Icon -->
            <div
              class="w-8 h-8 rounded-lg bg-[#222222] flex items-center justify-center flex-shrink-0"
            >
              <AppIcon :name="action.icon" :size="16" color="#ffffff" />
            </div>

            <!-- Label -->
            <span class="text-sm">
              {{ action.label }}
            </span>
          </button>
        </div>

        <!-- Cancel button -->
        <button
          type="button"
          class="mt-3 w-full h-12 rounded-lg bg-white text-black text-sm font-medium flex items-center justify-center"
          @click="close"
        >
          Cancel
        </button>
      </div>
    </div>
  </Teleport>
</template>
