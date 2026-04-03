import { theme } from "./src/styles/theme";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            colors: theme.colors,
            fontFamily: {
                title: theme.fonts.title,
                body: theme.fonts.body
            },
        },
    },
    plugins: [],
};

export default config;
