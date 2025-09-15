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
  githubPath: string;
}

export interface Subject {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  githubPath: string;
  modulos: Module[];
}
