import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PresentationCardProps } from "./subjectCard.types";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { MD5 } from "crypto-js";
import { SiQuarto } from "react-icons/si";

export function SubjectCard({ nameSubject, modulos }: PresentationCardProps) {
  return (
    <>
      {modulos.map((mod, index) => {
        const presentationId = MD5(`${nameSubject}-${mod.nombre}-${mod.presentacion.nombre}`)
          .toString()
          .slice(0, 11);
        return (
          <Box
            key={`${nameSubject}-mod-${index}`}
            px="20px"
            py="12px"
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
              <Link href={`/presentation/${presentationId}`}>
                <Tooltip
                  content="Ver presentación"
                  openDelay={300}
                  closeDelay={100}
                >
                  <FaExternalLinkAlt size="20px" color="#2563EB" />
                </Tooltip>
              </Link>
            </HStack>

            <HStack gap="8px" mb="12px">
              <HStack
                bg="#FEF9C3"
                color="#4D7398"
                borderRadius="md"
                gap="4px"
                px="8px"
                py="4px"
              >
                <SiQuarto size="12px" color="#75AADB" />
                <Text fontWeight="medium" fontSize="12px">
                  {mod.presentacion.tipo}
                </Text>
              </HStack>
            </HStack>
          </Box>
        );
      })}
    </>
  );
}
