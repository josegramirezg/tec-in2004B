export interface Module {
  id: number;
  nombre: string;
  descripcion: string;
  presentacion: Presentation;
}

export interface Presentation {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  hash: string;
}

export interface Subject {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  modulos: Module[];
}
