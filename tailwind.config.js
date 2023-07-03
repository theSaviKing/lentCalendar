const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./templates/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
                serif: ["Lora", ...defaultTheme.fontFamily.serif]
            },
            colors: {
                primary: "#95006a",
                secondary: "#DE264C",
                accent: "#facc15",
                neutral: "#2A2E37",
                "base-100": "#1c1917",
                "base-200": "#0e0d0c",
                "base-300": "#000000",
                info: "#0e7490",
                success: "#0f766e",
                warning: "#c2410c",
                error: "#dc2626"
            }
        }
    },
    plugins: [require("daisyui"), require("tailwind-scrollbar")],
    daisyui: {
        themes: [
            {
                lent: {
                    primary: "#95006a",
                    secondary: "#DE264C",
                    accent: "#facc15",
                    neutral: "#2A2E37",
                    "base-100": "#1c1917",
                    "base-200": "#0e0d0c",
                    "base-300": "#000000",
                    info: "#0e7490",
                    success: "#0f766e",
                    warning: "#c2410c",
                    error: "#dc2626",
                    "--btn-text-case": "none"
                }
            }
        ],
        styled: true,
        base: true,
        utils: true,
        logs: false,
        rtl: false
    }
};
