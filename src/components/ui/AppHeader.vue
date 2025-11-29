<script setup lang="ts">
interface Props {
  title?: string
  centerTitle?: boolean
  showBack?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  centerTitle: false,
  showBack: true,
})

const emit = defineEmits<{
  (e: 'back'): void
}>()

function handleBack() {
  emit('back')
}
</script>

<template>
  <header class="flex items-center px-4 pt-4 pb-3">
    <!-- Back button -->
    <button
      v-if="props.showBack"
      type="button"
      class="w-10 h-10 rounded-full flex items-center justify-center text-4xl text-slate-50"
      @click="handleBack"
    >
      ‹
    </button>

    <div
      class="flex-1"
      :class="props.centerTitle ? 'text-center' : 'ml-3'"
    >
      <h1
        v-if="props.title"
        class="text-base font-semibold text-slate-50"
      >
        {{ props.title }}
      </h1>
    </div>

    <!-- Right spacer to balance layout -->
    <div class="w-8 h-8" />
  </header>
</template>
