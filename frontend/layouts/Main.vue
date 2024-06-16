<template>
  <CommonLayout>
    <div class="main-layout">
      <a-layout style="height: 400px;">
        <a-layout-header class="h-[30px] text-left">Header</a-layout-header>
        <a-layout-content>
          <slot />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </div>
  </CommonLayout>
</template>

<script setup>
import CommonLayout from '@/layouts/Common.vue';
</script>
