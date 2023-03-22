/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */
module.exports = {
  content: ["./src/**/*.{tsx,js,ts}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '11': '3.063rem',
      },
      colors: {
        'purple-gradient': '#AC00BB',
        'indigo-gradient': '#8486FF',
        'yellow-gradient': '#FBBD23',
        'dark-yellow-gradient': '#C39218',
        'base-gray': '#616161',
      },
      animation: {
        'fadeOut': 'fadeOut 5s ease-in-out',
        'fade-in-from-left': 'fade-in-from-left 0.2s ease-in-out',
        'fade-in-from-right': 'fade-in-from-right 0.2s ease-in-out',
        'pop': 'pop 0.2s ease-in-out',
      },
      keyframes: {
        'fadeOut': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translateY( -100px )',
          },
        },
        'fade-in-from-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX( -100px )',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )',
          },
        },
        'fade-in-from-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX( 100px )',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )',
          },
        },
        'pop': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    }
  },
};
