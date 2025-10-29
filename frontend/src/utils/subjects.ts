import { createListCollection } from "@chakra-ui/react";
import subjectsData from "@/data/subjects-modules.json";
import { Subject } from "@/types/types";

export const subjectsList = createListCollection({
    items: [
        { label: "Todas las materias", value: "0" },
        ...subjectsData.materias.map((subject) => ({
            label: subject.nombre,
            value: subject.id.toString(),
        })),
    ],
});

export function getTotalModules(subjects: Subject[]) {
    const uniqueModules = new Set<string>();
    subjects.forEach((subject) => {
        subject.modulos.forEach((modulo) => {
            uniqueModules.add(`${subject.nombre}-${modulo.nombre}`);
        });
    });
    return uniqueModules.size;
}

export function getTotalPresentations(subjects: Subject[]) {
    return subjects.reduce((acc, subject) => acc + subject.modulos.length, 0);
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