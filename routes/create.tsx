import { Handlers, PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";
import Nave from "../components/Nave.tsx";
import { asset } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import { rutas } from "../services/data-service.ts";
import { uuid } from "https://deno.land/x/uuid@v0.1.2/mod.ts";

export const handler: Handlers = {
  async POST(req,ctx){
    const form = await req.formData();
    
    const nombre = form.get("nombre");
    const categoria = form.get("categoria");
    const sitio1 = form.get("sitio1")?.toString() ?? '';
    const ciudad1 = form.get("ciudad1")?.toString() ?? '';
    const sitio2 = form.get("sitio2")?.toString() ?? '';
    const ciudad2 = form.get("ciudad2")?.toString() ?? '';
    const sitio3 = form.get("sitio3")?.toString() ?? '';
    const ciudad3 = form.get("ciudad3")?.toString() ?? '';
    const calificacion = form.get("calificacion");

    const sitios = [
      {id:uuid(), nombre: sitio1, ciudad: ciudad1 },
      {id:uuid(),nombre: sitio2, ciudad: ciudad2 },
      {id:uuid(), nombre: sitio3, ciudad: ciudad3 },
    ];
    

    const ruta = {
      id: uuid(),
      nombre: nombre,
      categoria: categoria,
      resenias: [],
      sitios: sitios,
      votos: calificacion,
    };

    rutas.push({
      id: ruta.id,
      nombre: ruta.nombre?.toString() ?? '',
      categoria: ruta.categoria ? ruta.categoria.toString() : '',
      resenias: ruta.resenias,
      sitios: ruta.sitios,
      votos: ruta.votos?.toString() ?? '0',
    });

    return new Response(null,{
      status: 303,
      headers: {
      location: `/${ruta.categoria}`,
      },
    })
  }
}



export default function Create(props: PageProps) {

    return(
        <>
        <Nave />
    <main
        class=" text-white font-['sans']  py-8"
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
          <h2 class="text-2xl text-center">Crear una nueva ruta</h2>

          <form method="POST" class="flex flex-col gap-5 p-5">
            <label
              for="nombre"
              class=" block  text-lg font-medium text-gray-900 "
            >
              Nombre de la ruta:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              autocomplete="off"
              class="block h-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  "
            />
            <label
              for="categoria"
              class=" block  text-lg font-medium text-gray-900 "
            >
              Categoria:
            </label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              name="categoria"
              id="categoria"
            >
              <option value="ciudad">Ciudad</option>
              <option value="bosque">Bosque</option>
              <option value="area">Área Protegida</option>
            </select>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="sitio1"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Sitio 1
                </label>
                <input
                  type="text"
                  id="sitio1"
                  name="sitio1"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Nombre del sitio"
                  required
                />
              </div>
              <div>
                <label
                  for="ciudad1"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad1"
                  name="ciudad1"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nombre de la ciudad"
                  required
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="sitio2"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Sitio 2
                </label>
                <input
                  type="text"
                  id="sitio2"
                  name="sitio2"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Nombre del sitio"
                  required
                />
              </div>
              <div>
                <label
                  for="ciudad2"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad2"
                  name="ciudad2"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nombre de la ciudad"
                  required
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="sitio3"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Sitio 3
                </label>
                <input
                  type="text"
                  id="sitio3"
                  name="sitio3"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Nombre del sitio"
                  required
                />
              </div>
              <div>
                <label
                  for="ciudad3"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad3"
                  name="ciudad3"
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nombre de la ciudad"
                  required
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
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
              <button type="submit" class="border-black border-2 place-self-center rounded-[5rem] w-[10.5rem] h-[50px] bg-[#fb923c]" >Añadir</button>
              
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}