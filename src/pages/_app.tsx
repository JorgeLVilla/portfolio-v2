import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { IBM_Plex_Mono } from "@next/font/google";
import { Fira_Sans } from "@next/font/google";

const IBM = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-IBM",
});
// const IBM = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["100", "300", "400"],
//   variable: "--font-IBM",
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${IBM.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </main>
  );
}
