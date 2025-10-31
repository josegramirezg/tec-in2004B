import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PresentationCardProps } from "../../types/subjectCard";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { SiQuarto, SiGooglecolab } from "react-icons/si";

export function SubjectCard({ nameSubject, modulos }: PresentationCardProps) {
  return (
    <>
      {modulos.map((mod, index) => {
        const presentationId = mod.presentacion.hash;
        
        return (
          <Box
            key={`${nameSubject}-mod-${index}`}
            position="relative"
            bg="#ffffff"
            borderRadius="2xl"
            w="100%"
            border="1px solid #e5e7eb"
            overflow="hidden"
            _hover={{
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              transform: "translateY(-2px)",
              borderColor: "#d1d5db",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            display="flex"
            flexDirection="column"
          >
            {/* Barra de color superior */}
            <Box
              h="4px"
              bgGradient="linear(to-r, #9333ea, #a855f7, #c084fc)"
              w="100%"
            />
            
            {/* Contenedor principal */}
            <Box
              px={{ base: "20px", sm: "24px", md: "28px" }}
              py={{ base: "20px", sm: "24px", md: "28px" }}
              flex="1"
              display="flex"
              flexDirection="column"
            >
              {/* Header */}
              <HStack
                justifyContent="space-between"
                alignItems="flex-start"
                mb="16px"
              >
                <Box flex="1" pr="12px">
                  <Text
                    color="#111827"
                    fontWeight="700"
                    fontSize={{ base: "19px", sm: "21px", md: "23px" }}
                    lineHeight="1.3"
                    mb="12px"

                    wordBreak="break-word"
                    title={mod.presentacion.nombre}
                  >
                    {mod.presentacion.nombre}
                  </Text>
                </Box>
                
                <HStack gap="8px">
                  <Link href={`/presentation/${presentationId}`}>
                    <Tooltip
                      content="Ver presentación"
                      openDelay={300}
                      closeDelay={100}
                    >
                      <Box
                        bg="#9333ea"
                        borderRadius="lg"
                        p="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="0 2px 4px rgba(147, 51, 234, 0.25)"
                        _hover={{
                          bg: "#7e22ce",
                          boxShadow: "0 4px 8px rgba(147, 51, 234, 0.35)",
                        }}
                        transition="all 0.2s ease"
                        flexShrink={0}
                      >
                        <FaExternalLinkAlt size="16px" color="#ffffff" />
                      </Box>
                    </Tooltip>
                  </Link>

                  <Link href={mod.presentacion.link_to_colab} target="_blank">
                    <Tooltip
                      content="Abrir en Colab"
                      openDelay={300}
                      closeDelay={100}
                    >
                      <Box
                        bg="#F59E0B"
                        borderRadius="lg"
                        p="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="0 2px 4px rgba(245, 158, 11, 0.25)"
                        _hover={{
                          bg: "#D97706",
                          boxShadow: "0 4px 8px rgba(245, 158, 11, 0.35)",
                        }}
                        transition="all 0.2s ease"
                        flexShrink={0}
                      >
                        <SiGooglecolab size="16px" color="#ffffff" />
                      </Box>
                    </Tooltip>
                  </Link>
                </HStack>
              </HStack>

              {/* Tags mejorados */}
              <HStack
                gap="10px"
                mb="16px"
                flexWrap="wrap"
              >
                <Box
                  bgGradient="linear(to-r, #f3e8ff, #e9d5ff)"
                  border="1.5px solid #c084fc"
                  borderRadius="full"
                  px="12px"
                  py="6px"
                  boxShadow="0 2px 4px rgba(168, 85, 247, 0.15)"
                >
                  <Text
                    color="#9333ea"
                    fontWeight="600"
                    fontSize={{ base: "12px", sm: "13px", md: "13px" }}
                    letterSpacing="0.01em"
                  >
                    {mod.nombre}
                  </Text>
                </Box>
                
                <Box
                  bg="#f8fafb"
                  border="1.5px solid #e5e7eb"
                  borderRadius="full"
                  px="12px"
                  py="6px"
                >
                  <Text
                    color="#6b7280"
                    fontWeight="500"
                    fontSize={{ base: "12px", sm: "13px", md: "13px" }}
                  >
                    {nameSubject}
                  </Text>
                </Box>
              </HStack>

              {/* Descripción con estilo mejorado */}
              {mod.presentacion.descripcion && (
                <Box
                  mb="20px"
                >
                  <Box
                    bg="linear-gradient(to right, #faf5ff 0%, #f9fafb 100%)"
                    borderLeft="4px solid"
                    borderLeftColor="#9333ea"
                    borderRadius="0 12px 12px 0"
                    p={{ base: "14px", sm: "16px", md: "18px" }}
                    boxShadow="0 1px 3px rgba(147, 51, 234, 0.1)"
                  >
                    <Text
                      color="#4b5563"
                      fontSize={{ base: "13px", sm: "14px", md: "14px" }}
                      lineHeight="1.6"
                      wordBreak="break-word"
                      display="-webkit-box"
                      style={{
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {mod.presentacion.descripcion}
                    </Text>
                  </Box>
                </Box>
              )}

              {/* Footer */}
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
                      {mod.id}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
