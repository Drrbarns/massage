/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                luxuryPink: '#F4A7B9',
                luxuryGold: '#D4AF37',
                luxuryRoseGold: '#E5B7AD',
                luxuryDark: '#1A1A1A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
