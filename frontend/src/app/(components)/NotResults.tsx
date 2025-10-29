import { Box, Text, VStack } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

export function NotResults() {
  return (
    <VStack 
      w={{
        base: "90%",
        sm: "70%",
        md: "50%",
        lg: "40%",
      }} 
      mx="auto" 
      borderColor="#ffffff" 
      gap="40px" 
      h="200px" 
      mt="52px"
    >
      <Box
        position="relative"
        w="100%"
        h="120px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Filter - arriba a la izquierda */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          borderRadius="full"
          bg="#FEF7DF"
          boxSize="64px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        >
          <FiFilter size="24px" style={{ color: "#FBAB73" }} />
        </Box>

        {/* Search - centro */}
        <Box
          borderRadius="full"
          bg="#EBE8FF"
          boxSize="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        >
          <FiSearch size="32px" style={{ color: "#818CF8" }} />
        </Box>

        {/* Book - abajo a la derecha */}
        <Box
          position="absolute"
          top="0"
          right="0"
          borderRadius="full"
          bg="#E6FDF0"
          boxSize="64px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        >
          <FiBookOpen size="24px" style={{ color: "#70D5B3" }} />
        </Box>
      </Box>

      <Text 
        fontWeight="bold" 
        fontSize={{
          base: "lg",
          sm: "xl",
          md: "2xl",
        }} 
        textAlign="center"
      >
        No se encontraron resultados
      </Text>
    </VStack>
  );
}
