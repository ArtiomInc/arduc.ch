/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      animation: {
        appear: 'appear 3s ease',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(10px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
