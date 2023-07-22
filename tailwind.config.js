/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      display: ["Marcellus SC", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'white': "#ffffff",
      // Grayscale Design palette: https://grayscale.design/app?lums=93.88,87.19,75.61,61.14,42.57,28.39,18.04,11.21,6.97,4.72,1.63&palettes=%232A2F33,%23BBB6A5&filters=0%7C0,0%7C0&names=shark,nomad&labels=,
      "grayscale": {
        "50": "rgb(248, 248, 248)",
        "100": "rgb(240, 240, 240)",
        "200": "rgb(225, 225, 225)",
        "300": "rgb(205, 205, 205)",
        "400": "rgb(174, 174, 174)",
        "500": "rgb(145, 145, 145)",
        "600": "rgb(118, 118, 118)",
        "700": "rgb(94, 94, 94)",
        "800": "rgb(75, 75, 75)",
        "900": "rgb(61, 61, 61)",
        "950": "rgb(34, 34, 34)"
      },
      "shark": {
        "50": "rgb(247, 248, 249)",
        "100": "rgb(238, 240, 241)",
        "200": "rgb(223, 226, 229)",
        "300": "rgb(201, 206, 210)",
        "400": "rgb(167, 176, 183)",
        "500": "rgb(135, 147, 156)",
        "600": "rgb(106, 119, 129)",
        "700": "rgb(85, 95, 103)",
        "800": "rgb(68, 76, 83)",
        "900": "rgb(56, 62, 68)",
        "950": "rgb(31, 35, 38)"
      },
      "nomad": {
        "50": "rgb(249, 248, 246)",
        "100": "rgb(241, 240, 237)",
        "200": "rgb(227, 225, 218)",
        "300": "rgb(209, 205, 194)",
        "400": "rgb(180, 174, 155)",
        "500": "rgb(153, 145, 120)",
        "600": "rgb(125, 118, 95)",
        "700": "rgb(100, 94, 75)",
        "800": "rgb(79, 75, 60)",
        "900": "rgb(65, 61, 49)",
        "950": "rgb(36, 34, 27)"
      }
    },
    extend: {
      width: {
        "112": "28rem", // 448px
        "150": "37.5rem", // 600px
      }
    },
  },
  plugins: [],
}

