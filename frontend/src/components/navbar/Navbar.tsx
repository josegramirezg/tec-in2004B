import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { ImGithub } from "react-icons/im";

export function Navbar() {
  return (
    <>
      <Box
        w={{
          base: "90vw",
          sm: "90vw",
          md: "80vw",
          lg: "80vw",
          xl: "70vw",
          "2xl": "70vw",
        }}
        mx="auto"
      >
        <HStack
          justifyContent="space-between"
          px="24px"
          py="24px"
          color="white"
        >
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
              <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                Administrar
              </Text>
            </Button>
          </HStack>
        </HStack>
      </Box>
      <Box w="100vw" h="4px" bg="#2563eb" />
    </>
  );
}
