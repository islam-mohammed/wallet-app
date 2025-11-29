<script setup lang="ts">
import AppIcon from "@/components/icons/AppIcon.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import StatsOverviewModal from "@/components/modals/StatsOverviewModal.vue";
import QrActionSheet from "@/components/modals/QrSheetModal.vue";

const route = useRoute();
const router = useRouter();

// 1) Define all bottom nav actions with strong typing
interface NavItem {
  name: string;
  label: string;
  icon: "home" | "qr" | "plane" | "newspaper" | "card";
  route?: string | null;
}

// 2) Typed list of available nav items
const navItems: NavItem[] = [
  { name: "home", label: "Home", icon: "home", route: "/" },
  { name: "qr", label: "QR Transactions", icon: "qr" },
  { name: "transfer", label: "Money Transfer", icon: "plane" },
  { name: "payments", label: "Payments", icon: "newspaper" },
  { name: "card", label: "Papara Card", icon: "card", route: "/atm-info" },
];

const showStats = ref(false);
const showQrSheet = ref(false);

// 3) Navigation handler
function handleNavClick(item: NavItem) {
  if (item.route) {
    router.push(item.route);
  } else if (item.name === "qr") {
    showQrSheet.value = true;
  } else if (item.name === "transfer") {
    showStats.value = true;
  }
}

// 4) Compute active state based on current route
function isActive(item: NavItem): boolean {
  return route.path === item.route;
}
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-[#0E0E0E] py-3 px-2 border-t border-[#1F1F1F] z-50"
  >
    <div class="flex items-center justify-around">
      <!-- Loop nav items -->
      <button
        v-for="item in navItems"
        :key="item.name"
        class="flex flex-col items-center gap-1"
        :class="isActive(item) ? 'text-white' : 'text-gray-400'"
        @click="handleNavClick(item)"
      >
        <AppIcon
          :name="item.icon"
          :size="22"
          :color="isActive(item) ? '#ffffff' : '#9ca3af'"
        />
        <span class="text-xs">{{ item.label }}</span>
      </button>
      <StatsOverviewModal v-model:open="showStats" />
      <QrActionSheet v-model:open="showQrSheet" />
    </div>
  </nav>
</template>
