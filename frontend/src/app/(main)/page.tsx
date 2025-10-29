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
import { PresentationDashboard } from "../(components)/PresentationDashboard.tsx";
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
      >
        {/* Filters */}
        <VStack p={{
          base: "8px",
          sm: "12px",
          md: "12px",
        }}>
          {/* Search Input */}
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "1fr auto auto",
            }}
            w="100%"
            alignItems="center"
            gap={{
              base: "12px",
              sm: "16px",
              md: "16px",
            }}
            my={{
              base: "4px",
              sm: "8px",
              md: "8px",
            }}
          >
            <InputGroup startElement={<FaSearch size="16px" />} w="100%">
              <Input
                placeholder="Buscar por nombre de presentación, módulo o materia"
                color="#9CA3AF"
                h={{
                  base: "44px",
                  sm: "48px",
                  md: "48px",
                }}
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "md",
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>

            {/* Subject Filter */}
            <Select.Root
              collection={subjectsList}
              size="md"
              w={{
                base: "100%",
                sm: "100%",
                md: "300px",
              }}
              borderRadius="md"
              borderWidth="1px"
              borderColor="#D1D5DB"
              h={{
                base: "44px",
                sm: "48px",
                md: "48px",
              }}
              value={selectedSubject}
              onValueChange={(e) => setSelectedSubject(e.value)}
            >
              <Select.HiddenSelect />
              <Select.Control color=" #000000" h={{
                base: "44px",
                sm: "48px",
                md: "48px",
              }}>
                <Select.Trigger h={{
                  base: "44px",
                  sm: "48px",
                  md: "48px",
                }}>
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
              h={{
                base: "44px",
                sm: "48px",
                md: "48px",
              }}
              w={{
                base: "100%",
                sm: "100%",
                md: "auto",
              }}
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
