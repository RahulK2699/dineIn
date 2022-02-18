module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    FontSize: {
      tiny: "0.750rem",
      base: "1rem",
    },
    extend: {
      backgroundImage: {
        pattern:
          "url('https://www.theresidency.com/theme/files/blogfiles/images/blog/south%20indian%20cuisine.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
