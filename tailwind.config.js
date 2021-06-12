const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
                serif: [...defaultTheme.fontFamily.serif],
                mono: [...defaultTheme.fontFamily.mono],
                pixel: ["'Press Start 2P'", 'cursive', 'sans'],
                cursive: ['Bilbo', 'Charmonman', 'cursive', 'serif'],
            },
            colors: {
                primary: {
                    100: '#f4e1ff',
                    200: '#e8c0ff',
                    300: '#b67be6',
                    400: '#9353cb',
                    500: '#bb50ef',
                    600: '#942ed7',
                    700: '#48008c',
                    800: '#3a0070',
                    900: '#240046',
                },
                secondary: '#f7941d',
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
            },
            lineHeight: {
                hero: '4.5rem',
            },
        },
    },
    variants: {},
    plugins: [require('@markusantonwolf/tailwind-css-plugin-filters')],
};
