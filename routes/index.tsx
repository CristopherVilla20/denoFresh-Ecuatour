import { Head, asset } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EcuaTour</title>
      </Head>
      <main
      class=" text-white min-h-screen font-['Roboto']"
      style={`background-image: url(${
        asset("/ecuaImg.jpg")
      }); background-size: cover;`}
    >
      <Header />
      
    </main>
    </>
  );
}
