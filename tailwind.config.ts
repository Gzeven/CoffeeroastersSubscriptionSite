import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(179, 81%, 29%)",
        "dark-grey-blue": "hsl(215, 19%, 25%)",
        "light-blue":"hsl(178.3,54.50%,61.20%)",
        "pale-orange": "hsl(25, 94%, 86%)",
        "light-cream": "hsl(43, 78%, 98%)",
        "grey": "hsl(215, 5%, 54%)",
        "light-grey": "hsl(40, 29%, 94%)",
        "disabled": "hsl(26, 11%, 87%)"
      },
      fontFamily: {
        heading: ["var(--font-fraunces)"],
        body: ["var(--font-barlow-regular)"],
        nav: ["var(--font-barlow-bold)"],
      },
      fontSize: {
        responsive: ["15px", { lineHeight: "1.5" }], // Default small/medium screen size
        "responsive-lg": ["16px", { lineHeight: "1.5" }], // Large screen size
      },
    },
  },
  plugins: [],
};

export default config;
