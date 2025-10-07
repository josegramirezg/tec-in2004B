import { Box, HStack, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export function AdminNavbar() {
  return (
    <>
      <Box
        w={{
          base: "90vw",
          sm: "90vw",
          md: "90vw",
          lg: "90vw",
          xl: "80vw",
          "2xl": "80vw",
        }}
        mx="auto"
      >
        <HStack justifyContent="space-between" gap="12px" p="20px" color="#000000">
          <HStack>
            <FaGraduationCap size="48px" color="#2563eb" />
            <Text fontSize="3xl" fontWeight="bold">
              Administrador de presentaciones
            </Text>
          </HStack>
          <HStack>
            <ImGithub color="#000000" size="20px" />
            <Text fontSize="sm" color="#4B5563">
              Repositorio de GitHub
            </Text>
          </HStack>
        </HStack>
      </Box>
      <Box w="100vw" h="4px" bg="#2563eb" />
    </>
  );
}
