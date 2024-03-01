// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { fileURLToPath } from "url";
export default defineNuxtConfig({
  modules: ["@formkit/nuxt", "@nuxtjs/tailwindcss", "nuxt-headlessui"],
  tailwindcss: {
    cssPath: "~/assets/css/main.scss",
    config: {
      content: ["./formkit.theme.ts"],
    },
  },
  css: ["~/assets/css/main.scss"],
  /**
   * Formkit config
   * @see https://formkit.com/getting-started/installation
   */
  formkit: {
    // Experimental support for auto loading (see note):
    configFile: fileURLToPath(
      new URL("./configs/formkit/formkit.config.ts", import.meta.url)
    ),
  },
  runtimeConfig: {
    app: {
      name: "Nuxt",
      version: "1.0.0",
      baseURL: "/",
      host: "localhost",
      port: 3000,
    },
    public: {
      FORMKIT_PRO_KEY: process.env.FORMKIT_PRO_KEY,
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ["icons"],
          }),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader(
            fileURLToPath(new URL("./icons/", import.meta.url)),
            (svg) => {
              const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg);
              if (!viewBox) return svg;
              const w = viewBox?.[1];
              const h = viewBox?.[2];
              svg = svg.replace(/width=".*?"/, `width="${w}" `);
              svg = svg.replace(/height=".*?"/, `height="${h}" `);
              return svg;
            }
          ),
        },
      }),
    ],
  },
});
