import Carousel from "./Carousel.tsx";
import { rutas } from "../services/data-service.ts";
type props = {
  id: string;
  nombre: string;
  categoria: string;
  sitios: Sitio[];
  votos: string;
};

export default function RouteCard(props: props) {
  const { id, nombre, categoria, sitios, votos } = props;
  
  return (
    <>
      <h2 class="font-bold pt-3 text-center text-2xl">{nombre}</h2>
      <div class="flex">
        <div class=" px-2 py-2 pb-6 w-[40rem] ">
          <h3 class="font-semibold text-xl">Categoria:</h3>
          <p class="">
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </p>
          <h3 class="font-semibold pt-2 text-xl">Sitios:</h3>

          <ul class="pl-20 list-disc">
            {sitios.map((sitio) => {
              return (
                <li>{`Sitio: ${sitio.nombre} -- Ciudad: ${sitio.ciudad}`}</li>
              );
            })}
          </ul>

          <h3 class="pt-2 text-xl font-semibold">Instrucciones:</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            minus nam aspernatur quidem quam perferendis voluptatibus, veniam
            nesciunt mollitia possimus iste libero fuga sed fugit, consectetur
            iusto facere nostrum velit!
          </p>
          <h3 class="font-semibold text-xl pt-2 ">Calificacion:</h3>
          <p>{votos}</p>

          <div class="flex gap-2 pt-2 ">
            <a href={`resenias/${id}`}>
              <button class="hover:scale-105 transition-all border-black border-2  rounded-[5rem] w-[12.5rem] h-[50px] bg-[#fb923c]">
                Comentarios
              </button>
            </a>
            <button
              
              class="hover:scale-105 transition-all border-black border-2  rounded-[5rem] w-[12.5rem] h-[50px] bg-[#fb4f3c]"
            >
              Eliminar ruta -
            </button>
          </div>
        </div>
        <Carousel />
      </div>
      <hr />
    </>
  );
}
