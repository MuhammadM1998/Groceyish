module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      colors: {
        green: { 100: '#DEF9EC', 200: '#237D64' },
        blue: { 100: '#F2F3F4', 200: '#253D4E' },
        yellow: { 100: '#FFD480', 200: '#FDC040' },
        gray: { 100: '#F1F1F1', 200: '#636363' },
      },

      screens: {
        '4xs': '360px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },

      backgroundImage: {
        overlayGreen:
          "linear-gradient(#c5ead9cc, #c5ead9cc), url('https://res.cloudinary.com/cloud-m98/image/upload/o_25/v1658064467/Groceyish/Vegtables-Illustrations.webp')",
        overlayYellow:
          "linear-gradient(0deg, rgba(255, 245, 225, 0.7), rgba(255, 245, 225, 0.7)), url('https://res.cloudinary.com/cloud-m98/image/upload/v1658064467/Groceyish/Vegtables-Illustrations.webp')",
        'intro-slide-1':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-1.webp')",
        'intro-slide-2':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-2.webp')",
        'intro-slide-3':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-3.webp')",
        'banner-1':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658851601/Groceyish/Banner-1.webp')",
        'banner-2':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658851601/Groceyish/Banner-2.webp')",
        'banner-3':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1659276234/Groceyish/Banner-3.webp')",
      },

      animation: {
        progress: 'progress 3s ease-in-out',
      },

      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { transform: '100%' },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
