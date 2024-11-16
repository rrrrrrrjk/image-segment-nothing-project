/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grifter: ["grifter", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "rev-loop-scroll" : "rev-loop-scroll 20s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)"},
        },
        "rev-loop-scroll": {
          from: { transform: "translateX(-50%)"},
          to: { transform: "translateX(0)"}
        }
      },
      transitionProperty: {
        'height' : 'height',
      }
    }
  },
  plugins: [],
}

