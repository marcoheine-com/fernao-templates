/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      390: '390px',
      1024: '1024px',
      1440: '1440px',
      1920: '1920px',
    },
    extend: {
      backgroundImage: {
        textUnderline:
          'linear-gradient(transparent, transparent), linear-gradient(#8CC63F, #8CC63F);',
      },
      boxShadow: {
        secondaryBtn: '0 0 0 2px #8CC63F',
      },
      colors: {
        fernaoGreen: '#8CC63F',
        fernaoBlack: '#010200',
        fernaoFontWhite: '#F1F3F1',
        fernaoBGGrey: '#E0E3E0',
        fernaoBGWhite: '#FFF',
        fernaoBlack05: 'rgba(1, 2, 0, 0.5)',
        fernaoBlack10: 'rgba(1, 2, 0, 0.1)',
        fernaoBlack20: 'rgba(1, 2, 0, 0.2)',
        fernaoGreen20: '#A3D165',
        fernaoGreenA20: 'rgba(163, 209, 101, 0.2)',
        fernaoBGWhite20: 'rgba(255, 255, 255, 0.2)',
        fernaoDarkGreen: '#709E32',
        btnActive: '#A0CF63',
        btnActiveBorder: '#80A64F',
        black50: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
