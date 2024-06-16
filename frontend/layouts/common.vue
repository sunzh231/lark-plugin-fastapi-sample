<template>
  <div class="common-layout">
    <a-config-provider :locale="cn">
      <slot />
    </a-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { usePage } from '@inertiajs/vue3';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
const cn = ref(zhCN);
// const page = usePage();
// import useFlash from '@/compositions/useFlash';

// useFlash(page.props.flash);
</script>
