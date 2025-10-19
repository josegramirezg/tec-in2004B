import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PresentationCardProps } from "../../types/subjectCard";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { SiQuarto } from "react-icons/si";

export function SubjectCard({ nameSubject, modulos }: PresentationCardProps) {
  return (
    <>
      {modulos.map((mod, index) => {
        const presentationId = mod.presentacion.hash;
        return (
          <Box
            key={`${nameSubject}-mod-${index}`}
            px={{ base: "12px", sm: "16px", md: "18px" }}
            py={{ base: "8px", sm: "10px", md: "12px" }}
            bg="#ffffff"
            borderRadius="xl"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            w="100%"
            border="1px solid #f1f5f9"
            _hover={{
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-1px)",
              transition: "all 0.2s ease",
            }}
            transition="all 0.2s ease"
            minH="200px"
            display="flex"
            flexDirection="column"
          >
            {/* Header con título y botón */}
            <HStack
              justifyContent="space-between"
              mb={{ base: "6px", sm: "8px", md: "10px" }}
              gap="8px"
            >
              <Text
                color="#111827"
                fontWeight="bold"
                fontSize={{ base: "lg", sm: "xl", md: "xl" }}
                wordBreak="normal"
                overflowWrap="break-word"
                flex="1"
                lineHeight="1.3"
                minH="fit-content"
              >
                {mod.presentacion.nombre}
              </Text>
              <Link href={`/presentation/${presentationId}`}>
                <Tooltip
                  content="Ver presentación"
                  openDelay={300}
                  closeDelay={100}
                >
                  <Box
                    bg="#f1f5f9"
                    borderRadius="md"
                    p={{ base: "6px", sm: "6px", md: "8px" }}
                    _hover={{
                      bg: "#e2e8f0",
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.2s ease"
                    flexShrink={0}
                  >
                    <FaExternalLinkAlt size="18px" color="#2563EB" />
                  </Box>
                </Tooltip>
              </Link>
            </HStack>

            {/* Módulo y materia */}
            <VStack
              alignItems="flex-start"
              gap={{ base: "4px", sm: "5px", md: "6px" }}
              mb={{ base: "6px", sm: "8px", md: "10px" }}
            >
              <Text
                color="#A855F7"
                fontWeight="semibold"
                fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                bg="#f3e8ff"
                px={{ base: "6px", sm: "8px", md: "10px" }}
                py={{ base: "2px", sm: "3px", md: "3px" }}
                borderRadius="full"
                border="1px solid #e9d5ff"
                wordBreak="normal"
                overflowWrap="break-word"
                maxW="100%"
              >
                {mod.nombre}
              </Text>
              <Text
                color="#6B7280"
                fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                bg="#f8fafc"
                px={{ base: "6px", sm: "8px", md: "10px" }}
                py={{ base: "2px", sm: "2px", md: "3px" }}
                borderRadius="full"
                border="1px solid #e2e8f0"
                wordBreak="normal"
                overflowWrap="break-word"
                maxW="100%"
              >
                {nameSubject}
              </Text>
            </VStack>

            {/* Descripción de la presentación */}
            {mod.presentacion.descripcion && (
              <Box
                bg="#f8fafc"
                p={{ base: "8px", sm: "10px", md: "12px" }}
                borderRadius="md"
                borderLeft="3px solid #A855F7"
                mb={{ base: "8px", sm: "10px", md: "12px" }}
                minH="fit-content"
              >
                <Text
                  color="#4a5568"
                  fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                  lineHeight={{ base: "1.4", sm: "1.5", md: "1.5" }}
                  wordBreak="normal"
                  overflowWrap="break-word"
                  fontStyle="italic"
                  maxH={{ base: "60px", sm: "80px", md: "100px" }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {mod.presentacion.descripcion}
                </Text>
              </Box>
            )}

            {/* Footer con información técnica y tags */}
            <Box flex="1" display="flex" alignItems="flex-end">
              <HStack
                justifyContent="space-between"
                alignItems="flex-end"
                gap={{ base: "8px", sm: "12px", md: "16px" }}
                flexWrap="wrap"
                w="100%"
              >
              <HStack
                gap={{ base: "6px", sm: "8px", md: "10px" }}
                flexWrap="wrap"
                flex="1"
                minW="0"
              >
                <HStack
                  bg="#FEF9C3"
                  color="#4D7398"
                  borderRadius="full"
                  gap="4px"
                  px={{ base: "6px", sm: "8px", md: "10px" }}
                  py={{ base: "2px", sm: "3px", md: "3px" }}
                  border="1px solid #fde68a"
                  flexShrink={0}
                >
                  <SiQuarto size="12px" color="#75AADB" />
                  <Text
                    fontWeight="medium"
                    fontSize={{ base: "10px", sm: "12px", md: "12px" }}
                    whiteSpace="nowrap"
                  >
                    {mod.presentacion.tipo}
                  </Text>
                </HStack>
              </HStack>

              {/* Módulo vertical */}
              <VStack alignItems="center" gap="1px" flexShrink={0}>
                <Text
                  color="#3730A3"
                  fontWeight="bold"
                  fontSize={{ base: "8px", sm: "9px", md: "10px" }}
                  textTransform="uppercase"
                  letterSpacing="0.5px"
                >
                  Módulo
                </Text>
                <Text
                  color="#3730A3"
                  fontWeight="bold"
                  fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                  bg="#E0E7FF"
                  borderRadius="full"
                  w={{ base: "28px", sm: "30px", md: "32px" }}
                  h={{ base: "28px", sm: "30px", md: "32px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid #c7d2fe"
                >
                  {index + 1}
                </Text>
              </VStack>
              </HStack>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
