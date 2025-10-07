import { Box } from "@chakra-ui/react";
import { AdminNavbar } from "@/components/navbar/AdminNavbar";

export default function AdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="#F6F9FD" minH="100vh">
      <AdminNavbar />
      {children}
    </Box>
  );
}
