import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme : "#4C1F7A",
        theme_o : "#FF8000",
        theme_b : "#219B9D",
        theme_w : "#EEEEEE",
      },
    },
  },
  plugins: [],
} satisfies Config;
