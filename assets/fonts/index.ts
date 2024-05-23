import localFont from "next/font/local";
import { Outfit, Montserrat } from "next/font/google";

export const clashDisplay = localFont({ src: "./ClashDisplay-Variable.ttf" });
export const outfit = Outfit({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });
