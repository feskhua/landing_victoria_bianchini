import Head from "next/head";

import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Socials } from "@/src/components/Socials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victoria Bianchini</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Socials />
      </main>
      <Footer />
    </>
  );
}
