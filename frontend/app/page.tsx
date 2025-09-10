"use client";

import {
  Box,
  HStack,
  VStack,
  Select,
  createListCollection,
  Portal,
  Input,
  InputGroup,
  Button,
  Text,
  Grid,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaCode, FaChartBar } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";
import { PresentationDashboard } from "./components/PresentationDashboard.tsx";

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export default function Home() {
  return (
    <VStack gap="32px" maxW="90vw" w="90vw" mx="auto">
      <Box
        w="100%"
        bg="#ffffff"
        boxShadow="lg"
        borderRadius="xl"
        px="8px"
        py="12px"
        mt="20px"
      >
        {/* Filters */}
        <VStack p="12px">
          {/* Search Input */}
          <Grid
            templateColumns="1fr auto auto"
            w="100%"
            alignItems="center"
            gap="16px"
            my="8px"
          >
            <InputGroup startElement={<FaSearch size="16px" />} w="100%">
              <Input
                placeholder="Buscar presentaciones, módulos o materias..."
                color="#9CA3AF"
                h="48px"
                fontSize="md"
              />
            </InputGroup>

            {/* Subject Filter */}
            <Select.Root
              collection={frameworks}
              size="md"
              w="200px"
              borderRadius="md"
              borderWidth="1px"
              borderColor="#D1D5DB"
              h="48px"
            >
              <Select.HiddenSelect />
              <Select.Control color=" #000000" h="48px">
                <Select.Trigger h="48px">
                  <Select.ValueText
                    placeholder="Todas las materias"
                    color="#000000"
                    fontSize="md"
                  />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {frameworks.items.map((framework) => (
                      <Select.Item
                        item={framework}
                        key={framework.value}
                        color="#000000"
                      >
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            {/* Clear Button */}
            <Button bg="#d6d7dbff" h="48px">
              <IoCloseSharp color="#000000" />
              <Text color="#000000" fontSize="md">
                Limpiar
              </Text>
            </Button>
          </Grid>

          {/* Category Buttons */}
          <HStack
            alignItems="flex-start"
            justifyContent="flex-start"
            w="100%"
            gap="0px"
          >
            <Button variant="ghost">
              <FaCode color="#000000" />
              <Text color="#000000"> Python </Text>
            </Button>

            <Button variant="ghost">
              <FaChartBar size="12px" color="#000000" />
              <Text color="#000000"> Power BI </Text>
            </Button>

            <Button variant="ghost">
              <TbClockHour4Filled size="1px" color="#000000" />
              <Text color="#000000"> Recientes </Text>
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* Content Area */}
      <PresentationDashboard />
    </VStack>
  );
}
