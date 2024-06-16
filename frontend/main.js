import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "@/helper.js";

import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "./assets/styles/index.scss";

createInertiaApp({
  resolve: (name) => {
    return resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob("./pages/**/*.vue"),
    );
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(ArcoVue)
      .use(plugin)
      .mount(el);
  },
});
