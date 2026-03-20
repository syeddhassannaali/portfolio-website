import { Inter } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
    weight: ["300", "400", "500", "600", "700"],
});

export const fontVariables = `${inter.variable}`;