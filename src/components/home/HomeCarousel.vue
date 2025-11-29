<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, h, useSlots, watchEffect } from 'vue'

  const props = withDefaults(
    defineProps<{
      intervalMs?: number
    }>(),
    {
      intervalMs: 4000,
    },
  )

  // Slots ⇒ array of VNodes
  const slots = useSlots()
  const cards = ref<any[]>([])
  const scroller = ref<HTMLElement | null>(null)
  const cardWidth = ref(0)
  const activeIndex = ref(0)
  let timer: number | null = null

  function measureCardWidth() {
    const el = scroller.value
    if (!el) return
    cardWidth.value = el.clientWidth * 0.84
  }

  // Extract children into internal VNode array
  watchEffect(() => {
    const raw = slots.default?.() || []
    cards.value = raw.length ? raw : []
  })

  // Total cards including clones
  const total = () => cards.value.length

  function scrollToDisplay(displayIndex: number, smooth = true) {
    const el = scroller.value
    if (!el || !cardWidth.value) return

    const containerWidth = el.clientWidth
    const centerOffset = (containerWidth - cardWidth.value) / 2

    el.scrollTo({
      left: displayIndex * cardWidth.value - centerOffset,
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  function goToReal(realIndex: number, smooth = true) {
    if (!total()) return
    const len = total()
    const normalized = ((realIndex % len) + len) % len
    activeIndex.value = normalized

    const displayIndex = normalized + 1 // offset due to clone
    scrollToDisplay(displayIndex, smooth)
  }

  function startAuto() {
    stopAuto()
    if (!props.intervalMs || total() <= 1) return

    timer = window.setInterval(() => {
      goToReal(activeIndex.value + 1)
    }, props.intervalMs)
  }

  function stopAuto() {
    if (timer) {
      window.clearInterval(timer)
      timer = null
    }
  }

  function onScroll(e: Event) {
    const el = e.target as HTMLElement
    const len = total()
    if (!len || !cardWidth.value) return

    const containerWidth = el.clientWidth
    const centerOffset = (containerWidth - cardWidth.value) / 2

    const approx = (el.scrollLeft + centerOffset) / cardWidth.value
    const raw = Math.round(approx)

    // Loop: first clone
    if (raw === 0) {
      scrollToDisplay(len, false)
      activeIndex.value = len - 1
      return
    }

    // Loop: last clone
    if (raw === len + 1) {
      scrollToDisplay(1, false)
      activeIndex.value = 0
      return
    }

    activeIndex.value = raw - 1
  }

  onMounted(() => {
    measureCardWidth()
    window.addEventListener('resize', measureCardWidth)

    setTimeout(() => {
      if (total()) {
        goToReal(0, false)
        startAuto()
      }
    }, 0)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', measureCardWidth)
    stopAuto()
  })
</script>

<template>
  <section class="mt-3">
    <div
      ref="scroller"
      class="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 gap-2"
      @scroll.passive="onScroll"
    >
      <!-- Clone last card -->
      <article
        v-if="cards.length"
        class="flex-shrink-0 snap-center"
        :style="{ width: cardWidth ? cardWidth + 'px' : '84%' }"
      >
        <component :is="cards[cards.length - 1].type" />
      </article>

      <!-- Real cards -->
      <article
        v-for="(vnode, index) in cards"
        :key="index"
        class="flex-shrink-0 snap-center"
        :style="{ width: cardWidth ? cardWidth + 'px' : '84%' }"
      >
        <component :is="vnode.type" v-bind="vnode.props" />
      </article>

      <!-- Clone first card -->
      <article
        v-if="cards.length"
        class="flex-shrink-0 snap-center"
        :style="{ width: cardWidth ? cardWidth + 'px' : '84%' }"
      >
        <component :is="cards[0].type" />
      </article>
    </div>

    <!-- Dots -->
    <div class="mt-5 flex justify-center gap-1.5">
      <span
        v-for="(c, index) in cards"
        :key="'dot-' + index"
        class="h-1.5 rounded-full transition-all"
        :class="index === activeIndex ? 'w-4 bg-white' : 'w-2 bg-slate-600'"
      />
    </div>
  </section>
</template>

<style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
