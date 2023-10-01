import { PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";
import { asset, Head } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import Nave from "../components/Nave.tsx";
import CategButton from "../components/CategButton.tsx";
import { getDataByCategory } from "../services/data-service.ts";
import RouteCard from "../islands/RouteCard.tsx";



export default function CategRoute(props: PageProps) {
  const rutas = getDataByCategory(props.params.categ);
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EcuaTour</title>
      </Head>
      <main
        class=" text-white min-h-screen min-w-full font-sans"
        style={`background-image: url(${
          asset("/ecuaImg.jpg")
        }); background-size: cover;`}
      >
        <Nave />
        <section class="pt-20 gap-6 text-center flex flex-col items-center justify-center ">
          <div class="bg-white w-[55%] h-[5rem]  rounded-[5rem] items-center flex justify-center gap-10 ">
            <CategButton
              path="/ciudad"
              name="Ciudad"
              currentRuta={props.url.pathname}
            />
            <CategButton
              path="/bosque"
              name="Bosques"
              currentRuta={props.url.pathname}
            />
            <CategButton
              path="/area"
              name="Áreas Protegidas"
              currentRuta={props.url.pathname}
            />
          </div>
        </section>

        <div class="flex items-center justify-center mt-5">
          <a href="/create">
            <button
              type="button"
              class="text-black hover:scale-110 transition-all border-black border-2 bg-[#fb923c] w-[12.5rem] h-[50px] rounded-[5rem]"
            >
              Añadir ruta +
            </button>
          </a>
        </div>

        <section class="flex flex-col justify-center items-center mx-[50px] mt-[50px] bg-white text-black max-h-max rounded-2xl">
          {rutas.map((ruta) => {
            return (
              <RouteCard
                id={ruta.id}
                nombre={ruta.nombre}
                categoria={ruta.categoria}
                sitios={ruta.sitios}
                votos={ruta.votos}
               
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
