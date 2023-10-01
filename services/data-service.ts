// Path: services/data-service.ts
const jsonContent = await Deno.readTextFile("./services/data.json");
const data = JSON.parse(jsonContent);


export const rutas: Ruta[] = data.rutas.map((ruta:Ruta) => {
  return {
    id: ruta.id,
    categoria: ruta.categoria,
    nombre: ruta.nombre,
    resenias: ruta.resenias || [],
    sitios: ruta.sitios,
    votos: ruta.votos,
  };
});


export function getDataByCategory(categoria : string) {
  
    const filtered = rutas.filter((ruta) => ruta.categoria === categoria);
    return filtered;
}

export function getReseniasByRuta(id:string){
  const ruta = rutas.find((ruta) => ruta.id === id);
  if (ruta) {
    return ruta.resenias;
  } else {
    return [];
  }
}

export async function deleteRuta(id :string){
  const index = await rutas.findIndex((ruta) => ruta.id === id);
  console.log(id);
  if (index > -1) {
    rutas.splice(index, 1);
  }
}
