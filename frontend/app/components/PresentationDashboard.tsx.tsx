"use client";

import { Grid, Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FaCode, FaFolderClosed, FaChalkboardUser, FaChartBar } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export function PresentationDashboard() {
  const cards = [
    {
      title: "Total Módulos",
      value: 8,
      Icon: FaFolderClosed,
      bgGradient: "linear-gradient(to right, #22c55e, #16a34a)",
      iconColor: "#BBF7D0",
    },
    {
      title: "Total Presentaciones",
      value: 8,
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
        <VStack alignItems="flex-start">
          <Text fontWeight="bold" color="#111827" fontSize="2xl">
            Todas las presentaciones
          </Text>
          <Text fontWeight="normal" color="#4B5563" fontSize="md">
            12 presentaciones encontradas
          </Text>
        </VStack>

        <Grid templateColumns="repeat(3, 1fr)" gap="24px" my="20px">
          {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} p="20px" bg="#ffffff" borderRadius="xl" boxShadow="md" w="100%">
            <HStack w="100%" justifyContent="space-between" mb="12px">
              <VStack alignItems="flex-start" gap="2px">
                <Text color="#111827" fontWeight="semibold" fontSize="lg">
                  Límites y Continuidad
                </Text>
                <Text color="#A855F7" fontWeight="semibold" fontSize="sm">
                  Cálculo diferencial e integral
                </Text>
                <Text color="#6B7280" fontSize="12px">
                  Matemáticas avanzadas
                </Text>
              </VStack>
              <Box alignSelf="flex-start" mt="8px">
                <FaExternalLinkAlt size="20px" color="#2563EB" />
              </Box>
            </HStack>

            <HStack gap="8px" mb="12px">
              <HStack bg="#FEF9C3" color="#B45309" borderRadius="md" gap="4px" px="8px" py="4px">
                <FaCode size="12px" />
                <Text fontWeight="medium" fontSize="12px">Python</Text>
              </HStack>
              <HStack bg="#FFEDD5" color="#9A3412" borderRadius="md" gap="4px" px="8px" py="4px">
                <FaChartBar size="12px" />
                <Text fontWeight="medium" fontSize="12px">Power BI</Text>
              </HStack>
            </HStack>

            <HStack gap="8px">
              <ImGithub color="#000000" size="12px"/>
              <Text color="#4B5563" fontSize="12px">
                https://github.com/user/repo/limits.html
              </Text>
            </HStack>
          </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
