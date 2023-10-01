import { asset } from "$fresh/runtime.ts";
import { useSignal } from "https://esm.sh/v132/@preact/signals@1.1.3/X-ZS8q/dist/signals.js";

const imgRutas = ["travelImg.png","travelImg1.png ","result.png"]




export default function Carousel(){

    const currentImg = useSignal(0)

    

    const handleAnterior = ()=>{
        if(currentImg.value > 0){
            currentImg.value--
        }else{
            currentImg.value = imgRutas.length -1
        }        
    }
    const handleSiguiente = () =>{
        if(currentImg.value < imgRutas.length -1){
            currentImg.value++
        }else{
            currentImg.value = 0;
        }
    }
    return(
        <div class=" py-6 flex justify-center items-center flex-col">
            <div class="flex justify-center ">
                <img src={asset(imgRutas[currentImg.value])} alt="" class=" rounded-2xl object-cover h-[300px] w-[530px]" />
            </div>
            
            <div class="flex justify-center items-center pt-4">
        <button onClick={handleAnterior} type="button" class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-black ">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button onClick={handleSiguiente} type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-black ">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
        </div>
    )
}