import "./assets/styles/index.scss";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import {resolvePageComponent} from "@/helper.js";

createInertiaApp({
  resolve: (name) => {
    return resolvePageComponent(`./pages/${name}.vue`,
      import.meta.glob("./pages/**/*.vue"),
    )
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});