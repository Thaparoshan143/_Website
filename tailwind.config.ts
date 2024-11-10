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
        "r-extra-large" : "6em",
        "large" : "4rem",
        "r-large" : "4em",
        "heading" : "2rem",
        "r-heading" : "2em",
        "title" : "1.5rem",
        "r-title" : "1.5em",
        "stitle" : "1.25rem",
        "r-stitle" : "1.25em",
        "note" : "1rem",
        "r-note" : "1em",
        "little" : "0.8rem",
        "r-little" : "0.8em",
      },
      fontFamily: {
        "main" : '"Roboto", sans-serif;',
        "main-alt" : '"Barlow Condensed", serif;',
      },
    },
  },
  plugins: [],
} satisfies Config;
