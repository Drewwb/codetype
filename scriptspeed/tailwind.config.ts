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
        vscode: {
          background: "rgb(var(--vscode-background) / <alpha-value>)",
          sidebar: "rgb(var(--vscode-sidebar) / <alpha-value>)",
          editor: "rgb(var(--vscode-editor) / <alpha-value>)",
          terminal: "rgb(var(--vscode-terminal) / <alpha-value>)",
          text: "rgb(var(--vscode-text) / <alpha-value>)",
          textMuted: "rgb(var(--vscode-text-muted) / <alpha-value>)",
          border: "rgb(var(--vscode-border) / <alpha-value>)",
          activeBorder: "rgb(var(--vscode-active-border) / <alpha-value>)",
          hover: "rgb(var(--vscode-hover) / <alpha-value>)",
        },
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
