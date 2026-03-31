const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
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
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
