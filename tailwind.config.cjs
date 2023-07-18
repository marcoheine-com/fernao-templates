const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      390: '390px',
      640: '640px',
      1024: '1024px',
      1440: '1440px',
      1920: '1920px',
    },
    extend: {
      backgroundImage: {
        textUnderline:
          'linear-gradient(transparent, transparent), linear-gradient(#8CC63F, #8CC63F);',
        coloredAccent:
          'linear-gradient(90deg, #8CC63F 0%, #8CC63F 51%, #F0972D 67%, #2F69EA 83%, #E027E0 100%)',
        whiteColoredAccent:
          'linear-gradient(90deg, #fff 0%, #fff 51%, #F0972D 67%, #2F69EA 83%, #E027E0 100%)',
      },
      boxShadow: {
        secondaryBtn: '0 0 0 2px #8CC63F',
        desktopMenu: ' 0px 4px 8px 0px rgba(1, 2, 0, 0.05);',
      },
      colors: {
        fernaoGreen: '#8CC63F',
        fernaoBlack: '#010200',
        fernaoFontWhite: '#F1F3F1',
        fernaoBGGrey: '#E0E3E0',
        fernaoBGDarkGrey: '#E0E5DA',
        fernaoBGWhite: '#FFF',
        fernaoBlack05: 'rgba(1, 2, 0, 0.5)',
        fernaoBlack10: 'rgba(1, 2, 0, 0.1)',
        fernaoBlack20: 'rgba(1, 2, 0, 0.2)',
        fernaoGreen20: '#A3D165',
        fernaoGreenA20: 'rgba(163, 209, 101, 0.2)',
        fernaoBGWhite20: 'rgba(255, 255, 255, 0.2)',
        fernaoDarkGreen: '#709F32',
        btnActive: '#A0CF63',
        btnActiveBorder: '#80A64F',
        black50: 'rgba(0, 0, 0, 0.5)',
        inputInvalid: '#A13D3D',
      },

      fontFamily: {
        sans: [
          'Ubuntu',
          'Arial',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
