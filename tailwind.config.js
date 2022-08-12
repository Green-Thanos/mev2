const { spacing } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx", "./src/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        blue: "#1F252E",
        "blue-1": "#242C38",
        "blue-2": "#171E29",
      },
      screens: {
        xs: "400px",
      },
      // thanks to https://github.com/leerob/leerob.io/blob/main/tailwind.config.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.800"),
            code: {
              backgroundColor: theme("colors.gray.300"),
              color: theme("colors.neutral.800"),
            },
            "[data-info]": {
              a: {
                color: theme("colors.neutral.800"),
              },
            },
            "a,figcaption": {
              color: theme("colors.neutral.600"),
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            code: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.200"),
            },
            a: {
              color: theme("colors.gray.300"),
            },
            figcaption: {
              color: theme("colors.gray.400"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.200"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.neutral.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.200") },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
