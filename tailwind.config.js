/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        m: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#000000",
        'accent-1': "#00E5FF",
        'accent-2': "#0070F3",
        surface: {
          DEFAULT: "#0A0A0A",
          100: "#1A1A2E",
          200: "#111111",
          300: "#0A0A0A",
        },
        text: {
          DEFAULT: "#FFFFFF",
          primary: "#FFFFFF",
          secondary: "#B0BEC5",
          muted: "#546E7A",
        },
      },
      backgroundImage: {
        'accent-gradient': "linear-gradient(to right, #00E5FF, #0070F3, #000000)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

