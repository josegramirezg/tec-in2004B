"use client";

import { Box } from "@chakra-ui/react";
import { use } from "react";

interface PresentationPageProps {
  params: Promise<{
    presentationId: string;
  }>;
}

export default function PresentationPage({ params }: PresentationPageProps) {
  const { presentationId } = use(params);
  return (
    <Box h="100vh">
      <iframe
        src={`/documents/${presentationId}.html`}
        width="100%"
        height="100%"
        title={`Presentación ${presentationId}`}
        onError={() => console.error("Error cargando presentación")}
      />
    </Box>
  );
}
