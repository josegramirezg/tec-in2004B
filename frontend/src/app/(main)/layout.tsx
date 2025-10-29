import { Box } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="#F6F9FD" minH="100vh">
      <Navbar />
      {children}
    </Box>
  );
}