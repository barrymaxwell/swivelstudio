import { Fraunces, Nunito_Sans } from "next/font/google";

// Site typefaces. Both are SIL Open Font License, so the same files work in
// Illustrator, Figma, the website, and generated images. next/font self-hosts
// them: visitors' browsers never contact Google.
export const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
export const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans" });
