import { Box, Grid, GridItem, VStack, HStack, Text } from "@chakra-ui/react";
import { SiQuarto } from "react-icons/si";
import { SubjectCard } from "./SubjectCard";
import { SubjectFilterProps } from "./filteredSubject";

export function SubjectFilter({ subject }: SubjectFilterProps) {
  return (
    <>
      <GridItem colSpan={3}>
        <VStack
          alignItems="flex-start"
          bgGradient="linear-gradient(to right, #2563EB, #4F46E5)"
          borderRadius="xl"
          p="32px"
          gap="8px"
        >
          <Text color="#ffffff" fontWeight="bold" fontSize="3xl">
            {subject.nombre}
          </Text>
          <Text color="#e0e7ff" fontSize="md">
            {subject.codigo}
          </Text>
          <Text color="#e0e7ff" fontSize="md">
            {subject.descripcion}
          </Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={3}>
        {Array.from(
          new Map(subject.modulos.map(({ presentacion, ...mod }) => [mod.id, mod])).values()
        ).map((mod, index) => {
          const presentacionesDelModulo = subject.modulos.filter(
            (m) => m.id === mod.id
          );

          return (
            <Box key={mod.id}>
              <HStack
                bgGradient="linear-gradient(to right, #22c55e, #16a34a)"
                p="32px"
                justifyContent="space-between"
              >
                <VStack gap="8px">
                  <HStack gap="16px">
                    <Box bg="#35D06E" px="12px" py="4px" borderRadius="2xl">
                      <Text color="#ffffff" fontSize="14px">
                        Módulo {index + 1}
                      </Text>
                    </Box>
                    <Text color="#ffffff" fontSize="xl" fontWeight="bold">
                      {mod.nombre}
                    </Text>
                  </HStack>
                  <Text color="#ffffff">{mod.descripcion}</Text>
                </VStack>
                <VStack alignItems="flex-end" fontSize="sm" gap="4px">
                  <Text color="#ffffff">{presentacionesDelModulo.length} Presentaciones</Text>
                  <VStack alignItems="flex-start" gap="2px">
                    <HStack color="#ffffff" gap="2px">
                      <SiQuarto />                      
                      <Text> Quarto </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>

              <Grid templateColumns="repeat(3, 1fr)" gap="24px" my="20px">
                <SubjectCard
                  nameSubject={subject.nombre}
                  modulos={presentacionesDelModulo}
                />
              </Grid>
            </Box>
          );
        })}
      </GridItem>
    </>
  );
}