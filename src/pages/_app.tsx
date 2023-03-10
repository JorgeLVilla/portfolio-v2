import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fira_Sans } from "@next/font/google";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-IBM",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${fira.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
