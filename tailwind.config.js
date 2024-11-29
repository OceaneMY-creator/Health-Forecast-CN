  content: ["./src/**/*.{html,js}"],
module.exports = {
  content: ['./index.html','./style/custom.css'], 
  theme: {
    extend: {
      colors: {
        'color-secondary': '#633E23',
        'color-green': '#78B631',
      },
      backgroundImage: {
        'bg': "url('/assets/images/solution/background.png')",
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],

  theme: {
    screens: {
      'xs': '0px',
      // => @media (max-width: 576px) { mobile potrait }

      's': '576px',
      // => @media (min-width: 576px, max-width: 767px) { mobile landscape }
      's-max': '767px',
      // => @media (min-width: 576px, max-width: 767px) { mobile landscape }

      'md': '768px',
      // => @media (min-width: 768px, max-width: 1200px) { tablet }
      'md-max': '1200px',
      // => @media (min-width: 768px, max-width: 1200px) { tablet }

      'lg': '1201px',
      // => @media (min-width: 1201px, max-width: 1380px) { laptop }
      'lg-max': '1380px',
      // => @media (min-width: 1201px, max-width: 1380px) { laptop }


      'xl': '1381px',
      // => @media (min-width: 1381px, max-width: 1500px) { pc }
      'xl-max': '1500px',
      // => @media (min-width: 1381px, max-width: 1500px) { pc }

      '2xl': '1501px',
      // => @media (min-width: 1501px, max-width: 2590px) { tv }
      
    }
  }
  
}

/*Original:

Modifier	Media query
max-sm	@media not all and (min-width: 640px) { ... }
max-md	@media not all and (min-width: 768px) { ... }
max-lg	@media not all and (min-width: 1024px) { ... }
max-xl	@media not all and (min-width: 1280px) { ... }
max-2xl	@media not all and (min-width: 1536px) { ... }

*/