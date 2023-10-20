import Head from "next/head";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Heroes from "./components/Heroes";
import Certificates from "./components/Cerificates";
import Activities from "./components/Activites";

export default function Init() {
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  });

  return (
    <>
      <Head>
        <title>JUST YA</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-300/70 to-gray-600/70 scroll-auto">
        <Navbar />
        <Heroes />
        <Tools />
        <Activities />
        <Certificates />
      </div>
    </>
  );
}
