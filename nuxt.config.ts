// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
export default defineNuxtConfig({
  modules: ["@formkit/nuxt", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      content: ["./formkit.theme.ts"],
      cssPath: "~/assets/css/main.scss",
    },
  },
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
});
