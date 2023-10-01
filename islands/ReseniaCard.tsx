
type prop = {
    id:string,
    idRuta: string,
    resenia: string,
    calificacion: number,
}

export default function ReseniaCard(props:prop) {
    return(
        <div class="flex justify-center items-center">
                        <div class="pl-5 mb-5 w-[680px]">
                          <h2 class="font-semibold pt-2 text-xl">Resenia:</h2>
                          <p>{props.resenia}</p>
                          <h2 class="font-semibold pt-2 text-xl">
                            Calificacion
                          </h2>
                          <p>{props.calificacion}</p>
                        </div>
                        <div
                          
                          class="  items-center self-center  "
                        >
                          <button  class="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-x"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none">
                              </path>
                              <path d="M18 6l-12 12"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
    )
}

