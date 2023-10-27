/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      animation: {
        rollbounce: 'roll 1.5s linear infinite',
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(-23px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
};
