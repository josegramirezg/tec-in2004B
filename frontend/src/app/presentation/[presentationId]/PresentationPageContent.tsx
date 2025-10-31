"use client";

import { Box } from "@chakra-ui/react";
import { PresentationPageContentProps } from "@/types/presentationPageContentProps";
import { useState } from "react";
import { Loading } from "@/app/(components)/Loading";

export function PresentationPageContent({
  filePath,
  presentationId,
}: PresentationPageContentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  return (
    <Box h="100vh">
      {isLoading && <Loading />}
      <iframe
        src={`${basePath}/${filePath}`}
        width="100%"
        height="100%"
        title={`Presentación ${presentationId}`}
        onLoad={() => setIsLoading(false)}
        onError={() => console.error("Error cargando presentación")}
      />
    </Box>
  );
}
