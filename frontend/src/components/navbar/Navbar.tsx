import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { ImGithub } from "react-icons/im";

export function Navbar() {
  return (
    <Box
      w="100%"
      borderBottom="4px solid"
      borderColor="#2563EB"
      boxShadow="0 4px 12px 0 rgba(37, 99, 235, 0.15)"
    >
      <HStack justifyContent="space-between" px="40px" py="24px" color="white">
        <VStack alignItems="flex-start" gap="0px">
          <Text fontWeight="bold" fontSize="3xl" color="#000000">
            Presentaciones académicas
          </Text>
          <Text fontSize="sm" color="#4B5563">
            Explora el contenido educativo disponible en todo momento
          </Text>
        </VStack>
        <HStack gap="32px">
          <HStack>
            <ImGithub color="#000000" />
            <Text fontSize="smaller" color="#4B5563">
              Repositorio de GitHub
            </Text>
          </HStack>
          <Button colorPalette="blue">
            <IoMdSettings />
            <Text color="#ffffff" fontSize="sm" fontWeight="medium">Administrar</Text>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
