import { findFile } from "@/utils/findFile";
import { PresentationPageContent } from "./PresentationPageContent";
import predefinedHashesRoutes from "@/data/predefined-routes.json";

export async function generateStaticParams() {
  const allHashesRoutes: string[] = [];
  predefinedHashesRoutes.predefinedHashesRoutes.forEach((hash) => {
    allHashesRoutes.push(hash);
  });

  return allHashesRoutes.map((hash) => ({
    presentationId: hash,
  }));
}

export default async function PresentationPage({
  params,
}: {
  params: { presentationId: string };
}) {
  const { presentationId } = await params;
  const filePath = await findFile(presentationId);
  return (
    <PresentationPageContent
      filePath={filePath}
      presentationId={presentationId}
    />
  );
}
