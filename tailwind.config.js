/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: { "100": "#d9e2de", "200": "#d9d9d9", "300": "#dcdfdb" },
        aquamarine: "#90e5a8",
        darkgray: {
          "100": "#9f9f9f",
          "200": "#9b9b9b",
          "300": "#9a9a9a",
          "400": "rgba(157, 149, 149, 0.11)",
        },
        mediumslateblue: "#5271ff",
        forestgreen: {
          "100": "#6ab148",
          "200": "#269c48",
          "300": "rgba(106, 177, 72, 0.45)",
        },
        mediumseagreen: {
          "100": "#6ad185",
          "200": "#38c18c",
          "300": "#02cb7d",
        },
        lightgreen: { "100": "#a5f5a8", "200": "#7af099" },
        mediumaquamarine: { "100": "#7bcc90", "200": "#57b787" },
        dimgray: {
          "100": "#647276",
          "200": "#716c6c",
          "300": "#706868",
          "400": "#666",
        },
        gray: {
          "100": "#9a9292",
          "200": "#7a7a7a",
          "300": "#1e1e1e",
          "400": "#070707",
          "500": "rgba(255, 255, 255, 0.31)",
          "600": "rgba(255, 255, 255, 0.82)",
        },
        turquoise: {
          "100": "#86f3e0",
          "200": "#80eeda",
          "300": "rgba(76, 238, 209, 0.68)",
        },
        darkslategray: "rgba(44, 80, 59, 0.5)",
        linen: "#e7eee4",
        "black-87": "rgba(0, 0, 0, 0.87)",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f8f8f8",
          "300": "#f0f0f0",
          "400": "#e8ebe7",
        },
        silver: "#beb9b9",
        lightgray: "#cfd0d0",
        mistyrose: "#f5dbd1",
        lightgoldenrodyellow: "#d4f0ca",
        "states-success": "#4caf50",
        deepskyblue: "#3aabe3",
        royalblue: "#5275f1",
      },
      fontFamily: {
        syne: "Syne",
        roboto: "Roboto",
        "kumbh-sans": "'Kumbh Sans'",
      },
      borderRadius: {
        smi: "13px",
        "xs-5": "11.5px",
        "3xs-6": "9.6px",
        "10xs-9": "2.9px",
        "smi-5": "12.5px",
        "lg-5": "18.5px",
        "2xl-7": "21.7px",
        "6xs-5": "6.5px",
        "6xs": "7px",
        "3xl-2": "22.2px",
        mini: "15px",
        "8xl": "27px",
        "10xs": "3px",
        "4xs": "9px",
        lgi: "19px",
        "9xs-2": "3.2px",
        "10xs-5": "2.5px",
        "12xl": "31px",
        "10xs-7": "2.7px",
        "4xl": "23px",
        sm: "14px",
      },
    },
    fontSize: {
      "5xs": "8px",
      sm: "14px",
      xs: "12px",
      base: "16px",
      "7xs": "6px",
      "5xl": "24px",
      "2xs": "11px",
      "5xs-7": "7.7px",
      "base-4": "15.4px",
      "3xs": "10px",
      smi: "13px",
      "8xl-5": "27.5px",
      xl: "20px",
      "sm-4": "13.4px",
      "lg-4": "18.4px",
      "sm-7": "13.7px",
      mini: "15px",
      "xs-1": "11.1px",
      "3xl-9": "22.9px",
      "10xl-4": "29.4px",
      "7xs-2": "5.2px",
      "8xs-3": "4.3px",
      "8xs": "5px",
      "9xs": "4px",
      "6xs": "7px",
      "lgi-2": "19.2px",
      "2xs-3": "10.3px",
      "3xl-6": "22.6px",
      "8xs-9": "4.9px",
      "sm-2": "13.2px",
      "6xs-4": "6.4px",
      "10xs": "3px",
      "5xs-3": "7.3px",
      "base-1": "15.1px",
      "9xs-5": "3.5px",
      "7xl-7": "26.7px",
      "5xs-8": "7.8px",
      "smi-4": "12.4px",
      "4xs-4": "8.4px",
      "smi-9": "12.9px",
      "5xs-5": "7.5px",
      "13xl": "32px",
    },
  },
  corePlugins: { preflight: false },
};
