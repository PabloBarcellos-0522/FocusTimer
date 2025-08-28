/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Theme-able colors
                "theme-primary": "rgb(var(--color-primary) / <alpha-value>)",
                "theme-secundary": "rgb(var(--color-secundary) / <alpha-value>)",
                "theme-primary-faded": "rgb(var(--color-primary-faded) / <alpha-value>)",
                "theme-primary-faded-hover":
                    "rgb(var(--color-primary-faded-hover) / <alpha-value>)",
                "theme-background": "rgb(var(--color-background) / <alpha-value>)",
                "theme-config": "rgb(var(--color-config) / <alpha-value>)",
                "theme-text": "rgb(var(--color-text) / <alpha-value>)",
                "theme-text-secundary": "rgb(var(--color-text-secundary) / <alpha-value>)",

                pomodoro: {
                    50: "#C36363",
                    55: "#B85B5B",
                    100: "#E04E4E",
                    200: "#A63232",
                },
                short: {
                    50: "#64AEBC",
                    55: "#519BA9",
                    100: "#38858A",
                    200: "#295F63",
                },
                long: {
                    50: "#6398C3",
                    55: "#4F86B3",
                    100: "#4D7C9E",
                    200: "#356384",
                },
                text: {
                    100: "#FFFFFF",
                    200: "#E0E0E0",
                },
                config: {
                    100: "#333333",
                    200: "#282828",
                },
            },

            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },

            fontSize: {
                small: "15px",
                padrao: "17px",
                big: "20px",
            },
        },
    },
    plugins: [],
}
