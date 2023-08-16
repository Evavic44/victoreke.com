import Head from "next/head";
import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>
      <main className="grid place-items-center text-center h-full">
        <div>
          <Image
            width={100}
            height={100}
            src={duckImage}
            alt="Yellow duck searching"
          />
          <h1 className="font-bold text-4xl mb-3">Error 404!</h1>
          <p>Oops! This page was not found.</p>
        </div>
      </main>
    </>
  );
}
