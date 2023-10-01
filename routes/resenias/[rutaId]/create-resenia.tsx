import { Handlers, PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";
import Nave from "../../../components/Nave.tsx";
import { asset } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import { rutas } from "../../../services/data-service.ts";
import { uuid } from "https://deno.land/x/uuid@v0.1.2/mod.ts";

export const handler: Handlers = {
    async POST(req,ctx){
        const form = await req.formData();
        const resenia = form.get("resenia")?.toString() ?? '';
        const calificacion = Number(form.get("calificacion"));
        const reseniaData: Resenia = {
        id: uuid(),
        resenia: resenia,
        calificacion: calificacion,
    };

    const ruta = rutas.find((ruta) => ruta.id === ctx.params.rutaId);
    ruta?.resenias.push(reseniaData);
    return new Response(null,{
        status: 303,
        headers: {
        location: `/resenias/${ctx.params.rutaId}`,
        },
      })
    }
}

export default function ReseniaCreation(props:PageProps){

    return(
        <>
        <Nave />
        <main
        class=" text-white font-['sans'] min-h-screen py-8"
        style={`background-image: url(${
          asset("/ecuaImg.jpg")
        }); background-size: cover;`}
      >
        <div class="rounded-xl bg-white text-black  py-[1.125rem] mx-[15rem]">
          <a href="/ciudad">
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
          <h2 class="text-2xl text-center">Crear una resenia</h2>

          <form method="POST" class="flex flex-col gap-5 p-5">
            <label
              for="resenia"
              class=" block  text-lg font-medium text-gray-900 "
            >
              Resenia:
            </label>
            
            <textarea id="resenia" name="resenia" rows={4} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Me a gustado mucho esta ruta por..."></textarea>

            <div>
                <label
                  for="calificacion"
                  class=" block  text-lg font-medium text-gray-900 "
                >
                  Calificación
                </label>
                <input
                  type="number"
                  max="10"
                  min="0"
                  id="calificacion"
                  name="calificacion"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="0-10"
                  required
                />
                
              </div>
              <div class="place-self-center">
              <button type="submit"  class="border-black border-2 place-self-center rounded-[5rem] w-[10.5rem] h-[50px] bg-[#fb923c]" >Añadir</button>
              </div>
            </form>
            </div>
            </main>
        </>
    )
}