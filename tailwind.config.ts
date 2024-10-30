import type { Config } from "tailwindcss";
// import { Alliance, VCHenrietta } from "./app/fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'ly-1': '0px 4px 15px 1px rgba(0, 0, 0, 0.34)'
      },
      colors: {
        'ly-purple':"#A540F3",
        'ly-voilet':"#5A0CFF",
        'ly-dark':"#160340",
        'ly-black':"#000000",
        'ly-white':"#ffffff",
        'ly-gray-01':"#f6f7f9",
      },
      fontFamily: {
        // alliance: [Alliance.className, 'sans-serif'],
        // vcHenrietta: [VCHenrietta.className, 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
