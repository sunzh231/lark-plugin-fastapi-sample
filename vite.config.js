// import { defineConfig } from 'vite'
// import { resolve } from 'path'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'frontend')
//     }
//   },
//   server: {
//     port: 4200,
//     proxy: {
//       '/api/': {
//         target: 'http://127.0.0.1:54321/api/',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     }
//   },
//   base: '/templates/',
//   build: {
//     outDir: './templates',
//   }
// })

import { resolve } from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'frontend')
    },
  },
  build: {
    manifest: "manifest.json",
    outDir: "templates",
    rollupOptions: {
      input: "frontend/main.js",
    },
  },
});
