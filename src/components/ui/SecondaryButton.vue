<script setup lang="ts">
  interface Props {
    label: string
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  function onClick() {
    emit('click')
  }
</script>

<template>
  <button
    type="button"
    class="w-full rounded-2xl border border-white/60 text-white py-3.5 text-sm font-semibold bg-transparent active:bg-white/10 transition-colors"
    @click="onClick"
  >
    {{ props.label }}
  </button>
</template>
