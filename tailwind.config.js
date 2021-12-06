module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'msm': { 'max': '640px' },
        'mmd': { 'max': '768px' },
        'mlg': { 'max': '768px' },
        'mxl': { 'max': '768px' },
        'm2xl': { 'max': '768px' },
      },
      fontFammily: {
        poppins:['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
