"use client";

import { Box } from "@chakra-ui/react";
import { PresentationPageContentProps } from "@/types/presentationPageContentProps";

export function PresentationPageContent({
  filePath,
  presentationId,
}: PresentationPageContentProps) {
  return (
    <Box h="100vh">
      <iframe
        src={`/tec-in2004B/${filePath}`}
        width="100%"
        height="100%"
        title={`Presentación ${presentationId}`}
        onError={() => console.error("Error cargando presentación")}
      />
    </Box>
  );
}
