import tailwindPresetMantine from "tailwind-preset-mantine";
import type { Config } from "tailwindcss";
import { breakpoints, colors } from "./libs/theme/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [
    tailwindPresetMantine({
      mantineBreakpoints: breakpoints,
      mantineColors: colors,
    }),
  ],
  plugins: [],
};
export default config;
