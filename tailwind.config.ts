import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        "multi-sectional-background": 'var(--multi-sectional-background)',
        "dark-background": 'var(--dark-background)',

        heading: 'var(--heading)',
        'sub-heading': 'var(--sub-heading)',
        foreground: 'var(--foreground)',
        "dark-heading": 'var(--dark-heading)',
        'dark-sub-heading': 'var(--dark-sub-heading)',
        "dark-foreground": 'var(--dark-foreground)',

        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },

        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          hover: 'var(--secondary-hover)'
        },

        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
          hover: 'var(--muted-hover)'
        },

        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },

        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },

        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)'
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },

      fontFamily: {
        inter: [
          'var(--font-inter)',
          'sans-serif'
        ]
      },

      screens: {
        md: '768px',
        lg: '1024px',
      },

      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      }
    }
  },

  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".layout-standard": {
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",

          "@screen md": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },

          "@screen lg": {
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
          },
        },

        ".section-padding-standard": {
          paddingTop: "4rem",
          paddingBottom: "4rem",

          "@screen md": {
            paddingTop: "5rem",
            paddingBottom: "5rem",
          },

          "@screen lg": {
            paddingTop: "6rem",
            paddingBottom: "6rem",
          },
        },

        ".animation-standard": {
          transition: "all 250ms cubic-bezier(.4,0,.2,1)",
        },

        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    },

    tailwindcssAnimate,
  ]
} satisfies Config;