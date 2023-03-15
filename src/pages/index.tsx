import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "./Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Portfolio</title>
        <meta name="Digital Portfolio" content="App created using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/codingIcon.png" />
      </Head>
      <main className="">
        <Hero />
      </main>
    </>
  );
}
