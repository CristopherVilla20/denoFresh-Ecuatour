interface Ruta {
    id: string;
    categoria: string;
    nombre: string;
    resenias: Resenia[];
    sitios: Sitio[];
    votos: string;
  }

interface Sitio {
  id: string;
  ciudad: string;
  nombre: string;
}
interface Resenia {
  id: string;
  resenia: string;
  calificacion: number;
}
