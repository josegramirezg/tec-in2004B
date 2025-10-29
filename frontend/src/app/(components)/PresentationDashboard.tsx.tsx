"use client";

import { Grid, Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FaFolderClosed, FaChalkboardUser } from "react-icons/fa6";
import { FilteredSubject } from "./FilteredSubject";
import {
  getAllSubjectsWithModules,
  getTotalModules,
  getTotalPresentations,
} from "@/utils/subjects";
import { SubjectCard } from "./SubjectCard";
import { PresentationDashboardProps } from "../../types/presentationDashboard";
import { Subject } from "@/types/types";
import { memo, useMemo } from "react";
import { useSearch } from "@/hooks/useSearch";
import { removeAccents } from "@/utils/removeAccents";
import { NotResults } from "./NotResults";

export const PresentationDashboard = memo(function PresentationDashboard({
  subjectId,
}: PresentationDashboardProps) {
  const { search } = useSearch();
  const allModules = useMemo(() => getAllSubjectsWithModules(), []);

  // Materias y módulos a renderizar con filtro de búsqueda
  const subjects: Subject[] = useMemo(() => {
    let filteredSubjects =
      subjectId === 0
        ? allModules
        : allModules.filter((subject) => subject.id === subjectId);

    // Aplicar filtro de búsqueda si hay término
    if (search.trim()) {
      const searchTerm = removeAccents(search.toLowerCase().trim());
      filteredSubjects = filteredSubjects
        .map((subject) => ({
          ...subject,
          modulos: subject.modulos.filter(
            (modulo) =>
              removeAccents(modulo.presentacion.nombre)
                .toLowerCase()
                .includes(searchTerm) ||
              removeAccents(modulo.nombre).toLowerCase().includes(searchTerm) ||
              removeAccents(subject.nombre).toLowerCase().includes(searchTerm)
          ),
        }))
        .filter((subject) => subject.modulos.length > 0);
    }

    return filteredSubjects;
  }, [subjectId, allModules, search]);

  const cards = useMemo(
    () => [
      {
        title: "Total Módulos",
        value: getTotalModules(subjects),
        Icon: FaFolderClosed,
        bgGradient: "linear-gradient(to right, #22c55e, #16a34a)",
        iconColor: "#BBF7D0",
      },
      {
        title: "Total Presentaciones",
        value: getTotalPresentations(subjects),
        Icon: FaChalkboardUser,
        bgGradient: "linear-gradient(to right, #a855f7, #9333ea)",
        iconColor: "#D8B4FE",
      },
    ],
    [subjects]
  );

  return (
    <Box w="100%">  
      {subjects.length > 0 ? (
        <>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
            }}
            gap="24px"
          >
            {cards.map(({ title, value, Icon, bgGradient, iconColor }) => (
              <Box
                key={title}
                bgGradient={bgGradient}
                p="20px"
                borderRadius="xl"
                w="100%"
              >
                <HStack gap="40px" justifyContent="space-between">
                  <VStack alignItems="flex-start" gap="0px">
                    <Text color="#ffffff" fontSize="sm">
                      {title}
                    </Text>
                    <Text color="#ffffff" fontWeight="bold" fontSize="3xl">
                      {value}
                    </Text>
                  </VStack>
                  <Icon color={iconColor} size="36px" />
                </HStack>
              </Box>
            ))}
          </Grid>

          <Box my="24px">
            {subjectId === 0 && (
              <Text
                alignSelf="flex-start"
                fontWeight="bold"
                color="#111827"
                fontSize="2xl"
              >
                Todas las presentaciones
              </Text>
            )}

            <Grid 
              templateColumns={{
                base: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }} 
              gap="24px" 
              my="20px"
            >
              {subjectId === 0 ? (
                subjects.map((subject) => (
                  <SubjectCard
                    key={subject.id}
                    nameSubject={subject.nombre}
                    modulos={subject.modulos}
                  />
                ))
              ) : (
                <FilteredSubject subject={subjects[0]} />
              )}
            </Grid>
          </Box>
        </>
      ) : (
        <Box flex="1" display="flex" alignItems="center" justifyContent="center">
          <NotResults />
        </Box>
      )}
    </Box>
  );
});
