import { createListCollection } from "@chakra-ui/react";
import subjectsData from "@/data/subjects-modules.json";

export const subjectsList = createListCollection({
    items: [
        { label: "Todas las materias", value: "0" },
        ...subjectsData.materias.map((subject) => ({
            label: subject.nombre,
            value: subject.id.toString(),
        })),
    ],
});

export function getTotalModules(subjectId: number) {
    if (subjectId !== 0) {
        const subject = subjectsData.materias.find(subject => subject.id === subjectId);
        return subject ? subject.modulos.length : 0;
    }
    return subjectsData.materias.reduce((acc, subject) => acc + subject.modulos.length, 0);
}

export function getTotalPresentations(subjects: Subject[]) {
    return subjects.reduce((acc, subject) => acc + subject.modulos.length, 0);
}

interface Module {
    id: number;
    nombre: string;
    descripcion: string;
    presentacion: Presentation;
}

interface Presentation {
    id: number;
    nombre: string;
    descripcion: string;
    githubPath: string;
}


interface Subject {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  githubPath: string;
  modulos: Module[];
}

export function getAllSubjectsWithModules() {
  return subjectsData.materias.map(({ modulos, ...subject }) => ({
    ...subject,
    modulos: modulos.flatMap(({ presentaciones, ...mod }) =>
      presentaciones.map(p => ({
        ...mod,
        presentacion: p
      }))
    )
  }));
}

export function getSubjectData(subjectId: number) {
    return subjectsData.materias.find(subject => subject.id === subjectId);
}