"use client";

import {
  Box,
  VStack,
  Select,
  Portal,
  Input,
  InputGroup,
  Button,
  Text,
  Grid,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { PresentationDashboard } from "../components/PresentationDashboard.tsx";
import { useState } from "react";
import { subjectsList } from "@/utils/subjects";
import { useSearch } from "@/hooks/useSearch";

export default function Home() {
  const defaultSubject = subjectsList.items[0].value;
  const [selectedSubject, setSelectedSubject] = useState<string[]>([defaultSubject]);
  const { search, setSearch } = useSearch();

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
                placeholder="Buscar por nombre de presentación, módulo o materia"
                color="#9CA3AF"
                h="48px"
                fontSize="md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>

            {/* Subject Filter */}
            <Select.Root
              collection={subjectsList}
              size="md"
              w="300px"
              borderRadius="md"
              borderWidth="1px"
              borderColor="#D1D5DB"
              h="48px"
              value={selectedSubject}
              onValueChange={(e) => setSelectedSubject(e.value)}
            >
              <Select.HiddenSelect />
              <Select.Control color=" #000000" h="48px">
                <Select.Trigger h="48px">
                  <Select.ValueText color="#000000" fontSize="md" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {subjectsList.items.map((subject) => (
                      <Select.Item
                        item={subject}
                        key={subject.value}
                        color="#000000"
                      >
                        {subject.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            {/* Clear Button */}
            <Button
              bg="#d6d7dbff"
              h="48px"
              onClick={() => setSelectedSubject([defaultSubject])}
            >
              <IoCloseSharp color="#000000" />
              <Text color="#000000" fontSize="md">
                Limpiar
              </Text>
            </Button>
          </Grid>
        </VStack>
      </Box>

      {/* Content Area */}
      <PresentationDashboard subjectId={+selectedSubject[0]} />
    </VStack>
  );
}
