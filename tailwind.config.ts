import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "rgb(var(--text))",
        "background": "rgb(var(--background))",
        "primary": "rgb(var(--primary))",
        "secondary": "rgb(var(--secondary))",
        "accent": "rgb(var(--accent))",
      },
    },
  },
} satisfies Config;
