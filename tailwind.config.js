/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "qwigley" : '"Qwigley", cursive',
        "mochiy" : '"Mochiy Pop One", arial',
        "josefin" : '"Josefin Sans", serif'
      },
      backgroundImage: {
        "relaxing" : "url('/images/wp12425249-hotel-4k-wallpapers.jpg')",
        "scenery" : "url('/images/wp12517247-hotel-4k-wallpapers.jpg')",
        "luxury" : "url('/images/wp12672149-hotel-4k-wallpapers.jpg')",
        "outside" : "url('/images/wp12672099-hotel-4k-wallpapers.jpg')",
        "premium" : "url('/images/wp12572441-hotel-4k-wallpapers.jpg')",
        
      }
    },
  },
  plugins: [],
}

