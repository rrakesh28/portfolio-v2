import type { Config } from "tailwindcss";

const colors = {
  primary: {
    dark: "#01080E",
    base: "#011627",
    light: "#011221",
  },
  secondary: {
    muted: "#607B96",
    teal: "#3C9D93",
    blue: "#4D5BCE",
    white: "#FFFFFF",
  },
  accent: {
    orange: "#FEA55F",
    green: "#43D9AD",
    pink: "#E99287",
    purple: "#C98DF0",
  },
  lines: "#1E2D3D",
  gradients: {
    blueGreen: "linear-gradient(to right, #4D5BCE, #43D9AD)",
  },
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ["Fira Code", "monospace"],
      },
       fontSize: {
        headline: "62px",
        subheadline: "32px",
        body: "18px",
        label: "16px",
        code: "14px",
      },
      colors: colors,
      backgroundImage: {
        gradientBlueGreen: colors.gradients.blueGreen,
      },
    },
  },
  plugins: [],
} satisfies Config;
