// Desc: Button for category
import Icon from "./Icon.tsx";
type props = {
    path: string,
    name: string,
    currentRuta: string
}


export default function CategButton(props: props){
    const current = props.currentRuta == props.path
    ? "bg-green-200"
    : "bg-white  opacity-70";
 
    return (
    <>
      <a href={props.path} class="">
        <button
          type="button"
          class={`  items-center flex gap-4 border-black border-2  ${current} text-black hover:scale-105 transition-all rounded-[5rem] w-[12.5rem] h-[50px] text-center flex justify-center  active:bg-gray-300`}
        >
          <Icon categ={props.name} />
          {props.name}
        </button>
      </a>
    </>
  );
}