import type { Config } from "tailwindcss";
import grid from "./configs/tailwind/plugins/grid";
import containerWidth from "./configs/tailwind/plugins/containerWidth";
import scrollHide from "./configs/tailwind/plugins/scrollHide";
import screens from "./configs/tailwind/screens";
import container from "./configs/tailwind/container";
import colors from "./configs/tailwind/colors";
import fontFamily from "./configs/tailwind/fontFamily";
import fontSize from "./configs/tailwind/fontSize";
import borderRadius from "./configs/tailwind/extends/borderRadius";
import lineHeight from "./configs/tailwind/leading";
import spacing from "./configs/tailwind/spacing";
import dropShadow from "./configs/tailwind/extends/dropShadow";
import variant from "./configs/tailwind/plugins/variant";
import boxShadow from "./configs/tailwind/extends/boxShadow";
import padding from "./configs/tailwind/extends/padding";
import width from "./configs/tailwind/extends/width";
import height from "./configs/tailwind/extends/height";
// @ts-ignore
import FormKitVariants from "@formkit/themes/tailwindcss";
import plugin from "tailwindcss/plugin";
import { join } from "path";

const resolve = (s: string) => join(__dirname, s);

export default {
  theme: {
    aspectRatio: {
      "pdp-image": "4 / 5",
    },
    screens,
    container,
    maxWidth: {
      boxed: "1440px",
    },
    colors,
    // @ts-ignore
    fontSize,
    lineHeight,
    fontFamily,
    extend: {
      spacing,
      borderRadius,
      boxShadow,
      dropShadow,
      padding,
      width,
      height,
    },
  },
  content: [
    resolve("./configs/formkit/tailwind-theme.ts"),
    resolve("./app.vue"),
    resolve("./components/**/*.{vue,ts,js}"),
    resolve("./configs/tailwind/*.js"),
    resolve("./forms/**/*.{vue,js}"),
    resolve("./layouts/**/*.vue"),
    resolve("./pages/**/*.vue"),
    resolve("./plugins/**/*.{js,ts}"),
    resolve("./utils/**/*.{ts,js}"),
  ],
  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ["md", "lg"],
    },
    {
      pattern: /flex-1/,
      variants: ["md", "lg"],
    },
    {
      pattern: /justify-start/,
      variants: ["md", "lg"],
    },
  ],

  plugins: [
    grid,
    containerWidth,
    FormKitVariants,
    variant,
    scrollHide,
    plugin(function ({ addComponents }) {
      addComponents({
        ".cta": {
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--spacingXs, 8px)",
          borderWidth: "1px",
          borderColor: "var(--colorBackgroundCtaPrimary, black)",
          flexShrink: "0",
          width: "max-content",
          cursor: "pointer",
        },
        ".cta-s": {
          height: "36px",
          padding: "var(--spacingXs, 8px) var(--spacingSm, 16px)",
        },
        ".cta-l": {
          height: "48px",
          padding: "var(--spacingSm, 16px) var(--spacingXl, 40px)",
        },
        ".cta-primary": {
          color: "var(--colorTextCtaPrimary, white)",
          backgroundColor: "var(--colorBackgroundCtaPrimary, black)",
        },
        ".cta-secondary": {
          color: "var(--colorTextCtaSecondary, black)",
          backgroundColor: "var(--colorBackgroundCtaSecondary, white)",
        },
        ".cta-large-cart": {
          flexDirection: "column",
          padding: "0 var(--spacingMd, 24px)",
          height: "100%",
        },
        ".h-screen-min": {
          height: " 100vmin",
        },
      });
    }),
  ],
} satisfies Config;
