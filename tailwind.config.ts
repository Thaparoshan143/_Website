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
        "theme" : "#4C1F7A",
        "theme-alt" : "#5D2F8B",
        "theme-o" : "#FF8000",
        "theme-b" : "#219B9D",
        "theme-b-alt" : "#10878C",
        "theme-w" : "#EEEEEE",
        "theme-w-alt" : "#dcdcdc",
      },
      fontSize: {
        "extra-large" : "6rem",
        "sup-large" : "5rem",
        "large" : "4rem",
        "sup-heading" : "3rem",
        "heading" : "2rem",
        "title" : "1.5rem",
        "stitle" : "1.25rem",
        "note" : "1rem",
        "little" : "0.8rem",
      },
      fontFamily: {
        "main" : '"Roboto", sans-serif;',
        "main-alt" : '"Barlow Condensed", serif;',
      },
    },
  },
  plugins: [],
} satisfies Config;
