"use client";

import { Grid, Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FaCode, FaFolderClosed, FaChalkboardUser } from "react-icons/fa6";
import { SubjectFilter } from "./SubjectFilter";
import { getAllSubjectsWithModules, getTotalModules, getTotalPresentations } from "@/utils/subjects";
import { PresentationCard } from "./SubjectCard";
import { PresentationDashboardProps } from "./presentationDashboard.types"
import { Subject } from "@/types/types";

export function PresentationDashboard({ subjectId }: PresentationDashboardProps) {
  const allModules = getAllSubjectsWithModules();

  //  Materias y módulos a renderizar
  const subjects: Subject[] = subjectId === 0
    ? allModules
    : allModules.filter(subject => subject.id === subjectId);

  const cards = [
    {
      title: "Total Módulos",
      value: getTotalModules(subjectId),
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
    {
      title: "Con Código",
      value: 8,
      Icon: FaCode,
      bgGradient: "linear-gradient(to right, #f97316, #ea580c)",
      iconColor: "#FED7AA",
    },
  ];

  return (
    <Box w="100%">
      <Grid templateColumns="repeat(3, 1fr)" gap="24px">
        {cards.map(({ title, value, Icon, bgGradient, iconColor }) => (
          <Box key={title} bgGradient={bgGradient} p="20px" borderRadius="xl">
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
        {subjectId === 0 ? (
          <Text alignSelf="flex-start" fontWeight="bold" color="#111827" fontSize="2xl">
            Todas las presentaciones
          </Text>
        ) : null}

        <Grid templateColumns="repeat(3, 1fr)" gap="24px" my="20px">
          {subjectId === 0 ? (
            subjects.map((subject, subjectIndex) => (
              <PresentationCard key={subject.id} nameSubject={subject.nombre} githubPath={subject.githubPath} modulos={subject.modulos} />
            ))
          ) : (
            <SubjectFilter subject={subjects[0]} />
          )}
        </Grid>
      </Box>
    </Box>
  );
}
