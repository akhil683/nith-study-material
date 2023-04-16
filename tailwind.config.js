
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*html","./build/*js"],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue'],
      'sac': ['Sacramento'],
      'Montserrat': ['Montserrat'],
    },
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)', transform: 'translateX(0)' },
          '25%': { transform: 'scaleY(1.2)', transform: 'translateX(-30%)', height: '13rem'},
          '75%': { transform: 'scaleY(1.2)', transform: 'translateX(20%)', width: '10rem'},
          '100%': { transform: 'scaleY(1)', tranform: 'translateX(0)'}
        },
        'open-menu-reverse': {
          '0%': { transform: 'scaleY(0)', transform: 'translateX(0)' },
          '25%': { transform: 'scaleY(1.2)', transform: 'translateX(30%)', height: '13rem'},
          '75%': { transform: 'scaleY(1.2)', transform: 'translateX(-20%)', width: '10rem'},
          '100%': { transform: 'scaleY(1)', tranform: 'translateX(0)'}
        },
        'hamburger-menu': {
          '0%': { transform: 'scale(0)', opacity: '1',},
          '80%': { transform: 'scale(1.1)', opacity: '1'},
          '100%': { transform: 'scale(1)', opacity: '1'}
        },
        // 'hamburger-menu-inner': {
        //   '0%': { transform: 'scale(0.5)', opacity: '0' },
        //   '100%': { transform: 'scale(1)', opacity: '1'}
        // },
        'starter': {
          '0%': {transform: 'translateY(30%)', opacity: '0'},
          '40%': {transform: 'translateY(0%)', opacity: '1'},
          '80%': {transform: 'translateY(0%)', opacity: '1'},
          '100%': {transform: 'translateY(20%)', opacity: '0'},
        },
        'starter-head': {
          '0%': {transform: 'translateY(0)', opacity: '1'},
          '40%': {transform: 'translateY(0)', opacity: '1'},
          '60%': {transform: 'translateY(0)', opacity: '0.9'},
          '100%': {transform: 'translateY(-80%)', opacity: '0', display: 'hidden'},
        },
      },
      animation: {
        'open-menu': 'open-menu 15s infinite ease-in-out forwards',
        'open-menu-reverse': 'open-menu-reverse 15s infinite ease-in-out alternate',
        'hamburger-menu': 'hamburger-menu 0.7s ease-in-out forwards',
        // 'hamburger-menu-inner': 'hamburger-menu-inner 0.8s 0.3s ease-in-out forwards',
        'starter': 'starter 3s ease-in-out',
        'starter-head': 'starter-head 3s ease-in-out',
      }
  },
  plugins: [
  ]
}
}