import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaCode, FaChartBar } from "react-icons/fa";
import { PresentationCardProps } from "./subjectCard.types";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { MD5 } from "crypto-js";

export function SubjectCard({
  nameSubject,
  githubPath,
  modulos,
}: PresentationCardProps) {
  return (
    <>
      {modulos.map((mod, index) => {

        const presentationId = MD5(`${nameSubject}-${mod.nombre}-${mod.id}-${mod.presentacion.nombre}`).toString().slice(0, 11);
        return (
        <Box
          key={`${nameSubject}-mod-${index}`}
          p="20px"
          bg="#ffffff"
          borderRadius="xl"
          boxShadow="md"
          w="100%"
          _hover={{ cursor: "pointer" }}
        >
          <HStack justifyContent="space-between" mb="12px">
            <VStack alignItems="flex-start" gap="2px">
              <Text color="#111827" fontWeight="semibold" fontSize="lg">
                {mod.presentacion.nombre}
              </Text>
              <Text color="#A855F7" fontWeight="semibold" fontSize="sm">
                {mod.nombre}
              </Text>
              <Text color="#6B7280" fontSize="12px">
                {nameSubject}
              </Text>
            </VStack>
            <HStack gap="16px">
              <Link href={`${githubPath}/${mod.presentacion.githubPath}`}>
                <Tooltip
                  content="Ver en GitHub"
                  openDelay={300}
                  closeDelay={100}
                >
                  <ImGithub
                    size="20px"
                    color="#000000"
                  />
                </Tooltip>
              </Link>
              <Link href={`/presentation/${presentationId}`}>
                <Tooltip
                  content="Ver presentación"
                  openDelay={300}
                  closeDelay={100}
                >
                  <FaExternalLinkAlt
                    size="20px"
                    color="#2563EB"
                  />
                </Tooltip>
              </Link>
            </HStack>
          </HStack>

          <HStack gap="8px" mb="12px">
            <HStack
              bg="#FEF9C3"
              color="#B45309"
              borderRadius="md"
              gap="4px"
              px="8px"
              py="4px"
            >
              <FaCode size="12px" />
              <Text fontWeight="medium" fontSize="12px">
                Python
              </Text>
            </HStack>
            <HStack
              bg="#FFEDD5"
              color="#9A3412"
              borderRadius="md"
              gap="4px"
              px="8px"
              py="4px"
            >
              <FaChartBar size="12px" />
              <Text fontWeight="medium" fontSize="12px">
                Power BI
              </Text>
            </HStack>
          </HStack>

          <HStack gap="8px">
            <ImGithub color="#000000" size="12px" />
            <Text color="#4B5563" fontSize="12px">
              {mod.presentacion.githubPath}
            </Text>
            </HStack>
          </Box>
        );
      })}
    </>
  );
}
