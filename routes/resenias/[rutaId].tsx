import { PageProps } from "$fresh/server.ts";
import Nave from "../../components/Nave.tsx";
import { asset } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import { getReseniasByRuta } from "../../services/data-service.ts";
import ReseniaCard from "../../islands/ReseniaCard.tsx";


export default function ReseniasPage(props:PageProps) {
    const resenias = getReseniasByRuta(props.params.rutaId);
    return (
        <>
          <Nave />
          <main
            class=" text-white font-['sans'] min-h-screen  py-8"
            style={`background-image: url(${
              asset("/ecuaImg.jpg")
            }); background-size: cover;`}
          >
            <div class="rounded-xl bg-white text-black  max-w-[60rem] py-[1.125rem] mx-[15rem]">
              <div class="w-[50px]">
                <a class="inline" href="/ciudad">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="pl-4 pt-3 icon icon-tabler icon-tabler-arrow-left"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l14 0"></path>
                    <path d="M5 12l6 6"></path>
                    <path d="M5 12l6 -6"></path>
                  </svg>
                </a>
              </div>
    
              <h2 class="text-2xl text-center mb-7">Resenias</h2>
              <div class="flex justify-center ">
                <a  href ={`/resenias/${props.params.rutaId}/create-resenia`} class="z-40">
                  <button
                   
                    class="bg-[#fb923c] text-black hover:scale-110 transition-all text-center border-black border-2  w-[12.5rem] h-[50px] rounded-[5rem]"
                  >
                    Añadir resenia +
                  </button>
                </a>
              </div>
    
              <section>
                {resenias && resenias.length > 0
                  ? (
                    resenias.map((resenia) => {
                      return (
                        <>
                          <ReseniaCard
                            id={resenia.id}
                            idRuta={props.params.rutaId}
                            resenia={resenia.resenia}
                            calificacion={resenia.calificacion}
                          />
                        </>
                      );
                    })
                  )
                  : <p class="text-center py-10">No hay resenias</p>}
              </section>
            </div>
          </main>
        </>
      );
    }
    


