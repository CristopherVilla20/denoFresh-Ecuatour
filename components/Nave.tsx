export default function Nave(){
    return(
        <section class="text-lg pt-2 px-2 mt-0 text-white items-center flex flex-auto justify-between" style={"background-color: rgb(251 146 60);"}>
        <h1>EcuaTour</h1>
        <div>
          <ul class="flex flex-auto gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ciudad">Ciudad</a>
            </li>
            <li>
              <a href="/bosque">Bosques</a>
            </li>
            <li>  
              <a href="/area">Áreas Protegidas</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contáctame</h3>
          <p>cgvilla@espol.edu.ec</p>
        </div>
      </section>
        )
}