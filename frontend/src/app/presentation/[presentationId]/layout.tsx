import { Box } from "@chakra-ui/react";

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="#F6F9FD">
      {children}
    </Box>
  );
}