import {
  createFloatingLabelsPlugin,
  createAutoAnimatePlugin,
} from "@formkit/addons";
import { createProPlugin, inputs } from "@formkit/pro";
import { defineFormKitConfig } from "@formkit/vue";
// @ts-ignore
import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import { myCheckbox } from "~/configs/formkit/customInputs/myCheckbox";
import { myRadio } from "~/configs/formkit/customInputs/myRadio";
import tailwindTheme from "~/configs/formkit/tailwind-theme";

const myChevronRight = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.60039 7.20001L14.4004 12L9.60039 16.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
const myChevronDown = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 8L10 12L6 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const myCheckDecorator = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10.2426 16.2426L18.7279 7.75736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>`;

export default defineFormKitConfig(() => {
  const config = useRuntimeConfig();
  const proPlugin = createProPlugin(config.public.FORMKIT_PRO_KEY, inputs);

  return {
    inputs: { myRadio, myCheckbox },
    plugins: [
      proPlugin,
      createAutoAnimatePlugin(),
      createFloatingLabelsPlugin({
        useAsDefault: false,
      }),
    ],
    icons: {
      ...genesisIcons,
      myChevronRight,
      myChevronDown,
      myCheckDecorator,
    },
    config: {
      classes: generateClasses(tailwindTheme),
    },
  };
});
