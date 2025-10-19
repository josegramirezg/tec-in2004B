"use client";

import { Box } from "@chakra-ui/react";
import { use, useEffect, useState } from "react";
import { PresentationPageProps } from "@/types/presentationPage";
import { findFile } from "@/utils/findFile";
import { BeatLoader } from "react-spinners";

export default function PresentationPage({ params }: PresentationPageProps) {
  const { presentationId } = use(params);
  const [file_path, setFilePath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchFilePath() {
      try {
        const filePath = await findFile(presentationId);
        setFilePath(filePath || null);
      } catch (error) {
        console.error("Error al buscar el archivo:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFilePath();
  }, [presentationId])

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
        <BeatLoader color="#22c55e" size={10} />
      </Box>
    )
  }
  return (
    <Box h="100vh">
      <iframe
        src={`${file_path}`}
        width="100%"
        height="100%"
        title={`Presentación ${presentationId}`}
        onError={() => console.error("Error cargando presentación")}
      />
    </Box>
  );
}