import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";

export function Navbar() {
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
        <HStack
          p="20px"
          color="white"
        >
          <VStack alignItems="flex-start" gap="0px" flex="1" minW="200px">
            <Text 
              fontWeight="bold" 
              fontSize={{
                base: "xl",
                sm: "2xl",
                md: "3xl",
              }} 
              color="#000000"
            >
              Presentaciones académicas
            </Text>
            <Text 
              fontSize={{
                base: "xs",
                sm: "sm",
                md: "sm",
              }} 
              color="#4B5563"
              display={{
                base: "none",
                sm: "block",
              }}
            >
              Explora el contenido educativo disponible en todo momento
            </Text>
          </VStack>
            <HStack>
              <ImGithub color="#000000" size="20px" />
              <Text 
                fontSize="sm" 
                color="#4B5563"
                display={{
                  base: "none",
                  sm: "block",
                }}
              >
                Repositorio de GitHub
              </Text>
            </HStack>
          </HStack>
      </Box>
      <Box w="100%" h="4px" bg="#2563eb" />
    </>
  );
}
