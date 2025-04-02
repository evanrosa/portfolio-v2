import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            h1: { fontWeight: "700", fontSize: "2rem", marginTop: "1.5em" },
            h2: { fontWeight: "600", fontSize: "1.5rem", marginTop: "1.2em" },
            h3: { fontWeight: "600", fontSize: "1.25rem", marginTop: "1em" },
            p: { marginTop: "1em", marginBottom: "1em" },
            ul: {
              listStyleType: 'disc',
              marginTop: '1em',
              marginBottom: '1em',
              paddingLeft: '1.25em',
            },
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
            blockquote: {
              fontStyle: "italic",
              paddingLeft: "1em",
              borderLeft: "4px solid #e5e7eb",
              color: "#4b5563",
            },
            strong: { fontWeight: "600" },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontSize: "0.9em",
            },
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
            table: {
              borderCollapse: "collapse",
              width: "100%",
            },
            th: {
              padding: "0.75rem",
              borderBottom: "1px solid #e5e7eb",
            },
            td: {
              padding: "0.75rem",
              borderBottom: "1px solid #e5e7eb",
            },
          },
        },
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
