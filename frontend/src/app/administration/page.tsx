import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { FaChalkboardUser, FaFolderClosed } from "react-icons/fa6";

export default function Home() {
  const cards = [
    {
      title: "Materias",
      Icon: FaChalkboardUser,
    },
    {
      title: "Módulos",
      Icon: FaFolderClosed,
    },
  ];
  return (
    <VStack
      gap="32px"
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
      <HStack gap="20px">
        {cards.map(({ title, Icon }) => (
          <HStack
            key={title}
            bg="#2563EB"
            color="#ffffff"
            p="12px"
            borderRadius="md"
          >
            <Icon size="24px" />
            <Text fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
          </HStack>
        ))}
      </HStack>
      <Text> Administrador de presentaciones</Text>
      <Text> Administrador de presentaciones</Text>
      <Text> Administrador de presentaciones</Text>
    </VStack>
  );
}

