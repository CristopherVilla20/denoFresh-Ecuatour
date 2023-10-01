import { PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts"
import Nave from "./Nave.tsx"

export default function Header() {

    return(
        <>
        <Nave />
        <section class="pt-20 gap-6 text-center flex flex-col items-center justify-center ">
        <h1 class="text-3xl font-bold">
          Explora las rutas creadas por usuarios
        </h1>
        <p class="w-[50%] text-lg text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          architecto dolorum odio accusamus sint officia fugiat corporis optio!
          Voluptatum tempora iure ratione voluptates iste beatae exercitationem
          repudiandae dicta temporibus ipsam?
        </p>
        
        <a href="/ciudad" class="">
        <button class="border-black border-2 hover:scale-110 transition-all text-xl bg-[#fb923c] w-[20rem] h-[5rem] rounded-[5rem] ">
          Empezar
        </button>
        </a>
      </section>
      </>
    )
}